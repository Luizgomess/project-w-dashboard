import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TransactionItemComponent } from './transaction-item.component';

describe('TransactionItemComponent', () => {
  let component: TransactionItemComponent;
  let fixture: ComponentFixture<TransactionItemComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionItemComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    component.transaction = {
        id: "5f89f9f257fe42957bf6dbfd",
        title: "Resgate",
        description: "et labore proident aute nulla",
        status: "created",
        amount: 2078.66,
        date: "2020-07-01",
        from: "Aposentadoria",
        to: "Conta Warren"
    };
    fixture.detectChanges();
    expect(de.query(By.css('#card-component')).nativeElement.textContent).toBeTruthy();
    expect(de.query(By.css('.card-component__title')).nativeElement.textContent).toBe('Resgate');
    expect(de.query(By.css('.card-component__description')).nativeElement.textContent).toBe('et labore proident aute nulla');
    expect(de.query(By.css('.card-component__status')).nativeElement.textContent).toBe('created');
    expect(de.query(By.css('.card-component__amount')).nativeElement.textContent).toBe('$2,078.66');
  });
});
