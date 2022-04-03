import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { TransactionModalComponent } from './components/transaction-modal/transaction-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransactionsDashboardComponent } from './pages/transactions-dashboard/transactions-dashboard.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DescriptionTransactionComponent } from './components/description-transaction/description-transaction.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsTableComponent,
    TransactionModalComponent,
    HeaderComponent,
    FooterComponent,
    TransactionsDashboardComponent,
    FilterPipe,
    DescriptionTransactionComponent,
    TransactionItemComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
