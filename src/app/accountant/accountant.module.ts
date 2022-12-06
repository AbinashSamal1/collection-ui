import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { AccountantComponent } from './accountant.component';
import { AddReceiptComponent } from './add-receipt/add-receipt.component';


@NgModule({
  declarations: [
    AccountantComponent,
    AddReceiptComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule
  ]
})
export class AccountantModule { }
