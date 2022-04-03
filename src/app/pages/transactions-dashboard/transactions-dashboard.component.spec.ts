import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDashboardComponent } from './transactions-dashboard.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from 'src/app/models/Transaction';
import { Subscription } from 'rxjs';

fdescribe('TransactionsDashboardComponent', () => {
  let component: TransactionsDashboardComponent;
  let fixture: ComponentFixture<TransactionsDashboardComponent>;
  let service: TransactionsService;

  const mockItem: Transaction[] = [
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Resgate",
      description: "et labore proident aute nulla",
      status: "created",
      amount: 2078.66,
      date: "2020-07-01",
      from: "Aposentadoria",
      to: "Conta Warren"
    },
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Resgate",
      description: "et labore proident aute nulla",
      status: "created",
      amount: 2078.66,
      date: "2018-07-01",
      from: "Aposentadoria",
      to: "Conta Warren"
    },
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Resgate",
      description: "et labore proident aute nulla",
      status: "created",
      amount: 2078.66,
      date: "2019-07-01",
      from: "Aposentadoria",
      to: "Conta Warren"
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TransactionsDashboardComponent],
      providers: [TransactionsService, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsDashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TransactionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('se chama a api de listagem', () => {
    const mySpy = spyOn(component, 'getTransactions').and.callThrough();

    component.ngOnInit();

    expect(mySpy).toHaveBeenCalledTimes(1);
  });

  fit('teste chamada do order by date', () => {
    const mockReturn: Transaction[] = [
      {
        id: "5f89f9f257fe42957bf6dbfd",
        title: "Resgate",
        description: "et labore proident aute nulla",
        status: "created",
        amount: 2078.66,
        date: new Date("2020-07-01"),
        from: "Aposentadoria",
        to: "Conta Warren"
      },
      {
        id: "5f89f9f257fe42957bf6dbfd",
        title: "Resgate",
        description: "et labore proident aute nulla",
        status: "created",
        amount: 2078.66,
        date: new Date("2019-07-01"),
        from: "Aposentadoria",
        to: "Conta Warren"
      },
      {
        id: "5f89f9f257fe42957bf6dbfd",
        title: "Resgate",
        description: "et labore proident aute nulla",
        status: "created",
        amount: 2078.66,
        date: new Date("2018-07-01"),
        from: "Aposentadoria",
        to: "Conta Warren"
      }
    ];

    expect(component.orderTransactionsByDate(mockItem)).toEqual(mockReturn);
  });
});
