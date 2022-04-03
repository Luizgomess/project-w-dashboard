import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsDashboardComponent } from './pages/transactions-dashboard/transactions-dashboard.component';

const routes: Routes = [
  {
    path: 'Transactions',
    component: TransactionsDashboardComponent
  },
  {
    path: '',
    redirectTo: '/Transactions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
