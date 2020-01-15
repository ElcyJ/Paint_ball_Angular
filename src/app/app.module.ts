import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

import { PaintBallApiService } from './paint-ball-api.service';
import { GunsComponent } from './guns/guns.component';
import { MapsComponent } from './maps/maps.component';
import { TeamsComponent } from './teams/teams.component';
import { ShotsComponent } from './shots/shots.component';
import { LoginComponent } from './login/login.component';

import { AuthService, AuthInterceptor, AuthGuard } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    GunsComponent,
    MapsComponent,
    TeamsComponent,
    ShotsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PaintBallApiService, 
    HttpClientModule,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
