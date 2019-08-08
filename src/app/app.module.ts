import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfficeComponent } from './office/office.component';
import { HrComponent } from './hr/hr.component';
import { SalesComponent } from './sales/sales.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OfficeComponent,
    HrComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
