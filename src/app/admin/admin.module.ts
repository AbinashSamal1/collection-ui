import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { CollectionsComponent } from './collections/collections.component';
import { FamilyComponent } from './family/family.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    CollectionsComponent,
    FamilyComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
