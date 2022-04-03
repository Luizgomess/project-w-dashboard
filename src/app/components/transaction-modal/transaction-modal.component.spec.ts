import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionPeers } from 'src/app/models/TransactionPeers';

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

  it('test fromData function', () => {
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

    const mockReturn: TransactionPeers = {
      transactionType: 'from',
      from: 'Aposentadoria',
      amount: 2078.66,
    }

    expect(component.fromData(mockItem)).toEqual(mockReturn);
  });

  it('test fromData function', () => {
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

    const mockReturn: TransactionPeers = {
      transactionType: 'from',
      from: 'Aposentadoria',
      amount: 2078.66,
    }

    expect(component.fromData(mockItem)).toEqual(mockReturn);
  });

  it('test toData function', () => {
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

    const mockReturn: TransactionPeers = {
      transactionType: 'to',
      from: 'Conta Warren',
      amount: 2078.66,
    }

    expect(component.toData(mockItem)).toEqual(mockReturn);
  });

  it('verifica se chama a funcao de fechar o modal', () => {
    component.modalProperties.isOpen = true;

    component.closeModal();

    expect(component.modalProperties.isOpen).toEqual(false);
  });
});
