import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/models/Transaction';
import { DescriptionProperties } from 'src/app/shared/models/DescriptionProperties';
import { TransactionModalProperties } from 'src/app/shared/models/TransactionModalProperties';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent {

  @Input() modalProperties: TransactionModalProperties = {
    id: "",
    title: "",
    description: "",
    status: "created",
    amount: 0,
    date: "",
    from: "",
    to: "",
    isOpen: false
  };

  handleCloseModal(): void {
    this.modalProperties.isOpen = false;
  }

  setDescriptionData(transaction: Transaction, transactionType: string): DescriptionProperties {
    return {
      transactionType: transactionType === 'from' ? 'from' : 'to',
      commercialEntity: transactionType === 'from' ? transaction.from : transaction.to,
      amount: transaction.amount
    };
  }

}
