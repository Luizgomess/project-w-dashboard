import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsDashboardComponent } from 'src/app/pages/transactions-dashboard/transactions-dashboard.component';
import { DescriptionTransactionComponent } from './description-transaction.component';

describe('DescriptionTransactionComponent', () => {
  let component: DescriptionTransactionComponent;
  let fixture: ComponentFixture<DescriptionTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTransactionComponent, TransactionsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
