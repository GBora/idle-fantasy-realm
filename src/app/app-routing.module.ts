import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudienceHallComponent } from './components/audience-hall/audience-hall.component';
import { GuildMastersComponent } from './components/guild-masters/guild-masters.component';
import { WarRoomComponent } from './components/war-room/war-room.component';

const routes: Routes = [
  { path: '', redirectTo: '/war-room', pathMatch: 'full' },
  { path: 'war-room', component: WarRoomComponent },
  { path: 'guild-masters', component: GuildMastersComponent },
  { path: 'audience-hall', component: AudienceHallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
