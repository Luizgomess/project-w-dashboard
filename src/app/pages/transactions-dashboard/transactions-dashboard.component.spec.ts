import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsDashboardComponent } from './transactions-dashboard.component';
import { TransactionsService } from 'src/app/shared/services/transactions/transactions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from 'src/app/shared/models/Transaction';
import { By } from '@angular/platform-browser';

describe('TransactionsDashboardComponent', () => {
  let component: TransactionsDashboardComponent;
  let fixture: ComponentFixture<TransactionsDashboardComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call transaction service and get data', () => {
    const mySpy = spyOn(component, 'getTransactions').and.callThrough();

    component.ngOnInit();

    expect(mySpy).toHaveBeenCalledTimes(1);
  });

  it('should call the function to order transactions by date', () => {
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

  it('should renders app-transactions-table', () => {
    const { debugElement } = fixture;
    const counter = debugElement.query(By.css('app-transactions-table'));
    expect(counter).toBeTruthy();
  });

  it('should call ngOnDestroy', () => {
    const mySpy = spyOn(component, 'ngOnDestroy').and.callThrough();

    component.ngOnDestroy();

    expect(mySpy).toHaveBeenCalled();
  });
});
