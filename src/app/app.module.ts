import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WarRoomComponent } from './components/war-room/war-room.component';
import { AudienceHallComponent } from './components/audience-hall/audience-hall.component';
import { GuildMastersComponent } from './components/guild-masters/guild-masters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WarRoomComponent,
    AudienceHallComponent,
    GuildMastersComponent
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
