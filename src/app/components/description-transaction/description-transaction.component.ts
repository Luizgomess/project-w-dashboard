import { Component, Input } from '@angular/core';
import { DescriptionProperties } from 'src/app/shared/models/DescriptionProperties';

@Component({
  selector: 'app-description-transaction',
  templateUrl: './description-transaction.component.html',
  styleUrls: ['./description-transaction.component.scss']
})
export class DescriptionTransactionComponent {

  @Input()
  descriptionProperties: DescriptionProperties = {
    transactionType: 'from',
    commercialEntity: '',
    amount: 0,
  };

}
