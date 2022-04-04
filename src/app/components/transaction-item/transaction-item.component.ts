import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/models/Transaction';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent {

  @Input()
  transaction: Transaction = {
    id: "",
    title: "",
    description: "",
    status: "",
    amount: 0,
    date: "",
    from: "",
    to: ""
  };

}
