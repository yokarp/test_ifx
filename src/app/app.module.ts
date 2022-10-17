import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MonsterComponent } from './monster/monster.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';

//Primeng
import { ButtonModule } from 'primeng/button';
import { MonsterRacesComponent } from './monster-races/monster-races.component';
import { CardModule } from 'primeng/card';
import { MonsterRacesDetailComponent } from './monster-races-detail/monster-races-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonsterComponent,
    MonsterDetailComponent,
    MonsterRacesComponent,
    MonsterRacesDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
