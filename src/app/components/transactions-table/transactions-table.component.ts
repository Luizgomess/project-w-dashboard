import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent {

  teste: any = {
    id: "",
    title: "",
    description: "",
    status: "",
    amount: 0,
    date: "",
    from: "",
    to: "",
    isOpen: false
  };
  @Input() filterStatus: string = '';
  @Input() filterTitle: string = '';
  @Input() transactions: Transaction[] = [
    {
      id: "",
      title: "",
      description: "",
      status: "",
      amount: 0,
      date: "",
      from: "",
      to: ""
    }
  ];

  handleOpenTransactionModal(transaction: Transaction): void {
    this.teste = Object.assign(transaction, {isOpen: true})
  }

}
