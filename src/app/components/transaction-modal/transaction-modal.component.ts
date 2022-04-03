import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionPeers } from 'src/app/models/TransactionPeers';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent {

  @Input() modalProperties: any = {
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

  closeModal(): void {
    this.modalProperties.isOpen = false;
  }

  fromData(transaction: Transaction): TransactionPeers {
    return {
      transactionType: 'from',
      from: transaction.from,
      amount: transaction.amount
    };
  }

  toData(transaction: Transaction): TransactionPeers {
    return {
      transactionType: 'to',
      from: transaction.to,
      amount: transaction.amount
    };
  }

}
