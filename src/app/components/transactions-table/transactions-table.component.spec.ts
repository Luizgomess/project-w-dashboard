import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { TransactionsTableComponent } from './transactions-table.component';
import { FilterPipe } from '../../pipes/filter.pipe'
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Transaction } from 'src/app/models/Transaction';

describe('TransactionsTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTableComponent, FilterPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verifica se chama a funcao do modal', () => {
    const apy = spyOn(component, 'handleOpenTransactionModal').and.callThrough();

    fixture.detectChanges();
    const element = de.query(By.css('app-transaction-item')).nativeElement;
    element.click();

    expect(apy).toHaveBeenCalled();
  });

  it('verifica se chama a funcao do modal', () => {

    const apy = spyOn(component, 'handleOpenTransactionModal').and.callThrough();

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

    expect(apy).toHaveBeenCalled();
  });

});
