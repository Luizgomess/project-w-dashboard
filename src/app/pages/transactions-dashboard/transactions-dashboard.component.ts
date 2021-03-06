import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/shared/models/Transaction';
import { TransactionsService } from 'src/app/shared/services/transactions/transactions.service';

@Component({
  selector: 'app-transactions-dashboard',
  templateUrl: './transactions-dashboard.component.html',
  styleUrls: ['./transactions-dashboard.component.scss']
})
export class TransactionsDashboardComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  public transactions: Transaction[] = [];
  public filterStatusOptions: Pick<Transaction, "status">[] = [
    {status: 'created'},
    {status: 'processing'},
    {status: 'processed'},

  ];
  public filterTitle: string = '';
  public filterStatus: string = '';

  constructor(
    private transactionsService: TransactionsService
  ) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionsService.getTransactions().subscribe({
      next: transactions => this.transactions = this.orderTransactionsByDate(transactions),
      error: err  => {
        console.error(err);
      }
    })
  }

  orderTransactionsByDate(transactions: Transaction[]): Transaction[] {
    const convertedStringToDate = transactions.map((obj) => {
      return { ...obj, date: new Date(obj.date) };
    })
    const transactionsSortByDate = convertedStringToDate.sort((transactionA, transactionB) => {
      return transactionB.date.getTime() - transactionA.date.getTime();
    })

    return transactionsSortByDate;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
