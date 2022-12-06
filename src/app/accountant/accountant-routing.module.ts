import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AccountantComponent } from './accountant.component';
import { AddReceiptComponent } from './add-receipt/add-receipt.component';

const routes: Routes = [
  { path: '', component: AccountantComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-receipt', component: AddReceiptComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantRoutingModule { }
