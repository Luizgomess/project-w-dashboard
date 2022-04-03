import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('https://warren-transactions-api.herokuapp.com/api/transactions');
  }

}
