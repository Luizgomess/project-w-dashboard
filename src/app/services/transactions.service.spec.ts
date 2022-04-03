import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

import { TransactionsService } from './transactions.service';
import { HttpClient } from '@angular/common/http';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TransactionsService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get with the correct URL', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getTransactions();
    expect(spy).toHaveBeenCalledWith('https://warren-transactions-api.herokuapp.com/api/transactions');
  });

  it('should be able to create a service', inject([TransactionsService], (service: TransactionsService) => {
    expect(service).toBeDefined();
  }));
});
