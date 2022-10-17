import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';
import { MonsterRacesDetailComponent } from './monster-races-detail/monster-races-detail.component';
import { MonsterRacesComponent } from './monster-races/monster-races.component';
import { MonsterComponent } from './monster/monster.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'monster',
    component : MonsterComponent
  },
  {
    path: 'monster-detail',
    component : MonsterDetailComponent
  },
  {
    path: 'monster-races',
    component : MonsterRacesComponent
  },
  {
    path: 'monster-races-detail',
    component : MonsterRacesDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
