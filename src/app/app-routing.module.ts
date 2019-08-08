import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeComponent } from './office/office.component';
import { HrComponent } from './hr/hr.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: '', redirectTo: '/office', pathMatch: 'full' },
  { path: 'office', component: OfficeComponent },
  { path: 'hr', component: HrComponent },
  { path: 'sales', component: SalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
