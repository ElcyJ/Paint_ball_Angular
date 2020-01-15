import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { PlayersComponent } from './players/players.component'
import { MapsComponent } from './maps/maps.component'
import { TeamsComponent } from './teams/teams.component'
import { GunsComponent } from './guns/guns.component'
import { ShotsComponent } from './shots/shots.component'

import { AuthGuard } from './auth.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'maps', component: MapsComponent, canActivate: [AuthGuard] },
  { path: 'teams', component: TeamsComponent, canActivate: [AuthGuard] },
  { path: 'guns', component: GunsComponent, canActivate: [AuthGuard] },
  { path: 'shots', component: ShotsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
