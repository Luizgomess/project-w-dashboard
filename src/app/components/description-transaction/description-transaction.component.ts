import { Component, Input } from '@angular/core';
import { TransactionPeers } from 'src/app/models/TransactionPeers';

@Component({
  selector: 'app-description-transaction',
  templateUrl: './description-transaction.component.html',
  styleUrls: ['./description-transaction.component.scss']
})
export class DescriptionTransactionComponent {

  @Input()
  transactionInfo: TransactionPeers = {
    transactionType: 'from',
    from: '',
    amount: 0,
  };

}
