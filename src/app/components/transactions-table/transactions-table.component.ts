import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/models/Transaction';
import { TransactionModalProperties } from 'src/app/shared/models/TransactionModalProperties';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent {

  @Input() filterByStatus: string = '';
  @Input() filterBYTitle: string = '';
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

  modalProperties: TransactionModalProperties = {
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

  handleOpenTransactionModal(transaction: Transaction): void {
    this.modalProperties = Object.assign(transaction, {isOpen: true})
  }

}
