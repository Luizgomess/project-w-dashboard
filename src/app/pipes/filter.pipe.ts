import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/Transaction';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Transaction[], titulo: string, status: string): Transaction[] {

      let transactionsFiltered = [];
      transactionsFiltered = items.filter((item: any) => {
        if (titulo == "") {
          return item;
        }
        return item.title.toLowerCase().indexOf(titulo.toLowerCase()) > -1;
      });
  
      transactionsFiltered = transactionsFiltered.filter((item: any) => {
        if (status == "") {
          return item;
        }
        return item.status === status;
      });
  
      return transactionsFiltered;

}

}
