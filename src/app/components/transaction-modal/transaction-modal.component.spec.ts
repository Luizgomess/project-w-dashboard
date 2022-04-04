import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transaction } from 'src/app/shared/models/Transaction';
import { DescriptionProperties } from 'src/app/shared/models/DescriptionProperties';

import { TransactionModalComponent } from './transaction-modal.component';

describe('TransactionModalComponent', () => {
  let component: TransactionModalComponent;
  let fixture: ComponentFixture<TransactionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionModalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal', () => {
    component.modalProperties.isOpen = true;

    component.handleCloseModal();

    expect(component.modalProperties.isOpen).toEqual(false);
  });

  it('should return the values it was sending to the other "from" pair', () => {
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

    const mockReturn: DescriptionProperties = {
      transactionType: 'from',
      commercialEntity: 'Aposentadoria',
      amount: 2078.66,
    }

    expect(component.setDescriptionData(mockItem, 'from')).toEqual(mockReturn);
  });

  it('should return the values that were received for the other "to" pair', () => {
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

    const mockReturn: DescriptionProperties = {
      transactionType: 'to',
      commercialEntity: 'Conta Warren',
      amount: 2078.66,
    }

    expect(component.setDescriptionData(mockItem, 'to')).toEqual(mockReturn);
  });
});
