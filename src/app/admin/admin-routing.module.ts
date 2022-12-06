import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { CollectionsComponent } from './collections/collections.component';
import { FamilyComponent } from './family/family.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'collection', component: CollectionsComponent },
  { path: 'family', component: FamilyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
