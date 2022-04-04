import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsTableComponent } from './transactions-table.component';
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe'
import { By } from '@angular/platform-browser';
import { Transaction } from 'src/app/shared/models/Transaction';

describe('TransactionsTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTableComponent, FilterPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleOpenTransactionModal onClick in table iten', () => {
    const spy = spyOn(component, 'handleOpenTransactionModal').and.callThrough();
    const { debugElement } = fixture;

    fixture.detectChanges();
    const element = debugElement.query(By.css('app-transaction-item')).nativeElement;
    element.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should call handleOpenTransactionModal with a Transaction', () => {
    const spy = spyOn(component, 'handleOpenTransactionModal').and.callThrough();

    const mockItem: Transaction =
    {
      id: "5f89f9f257fe42957bf6dbfd",
      title: "Resgate",
      description: "et labore proident aute nulla",
      status: "created",
      amount: 2078.66,
      date: "2020-07-01",
      from: "Aposentadoria",
      to: "Conta Warren"
    };

    component.handleOpenTransactionModal(mockItem);

    expect(spy).toHaveBeenCalledWith(mockItem);
  });

});
