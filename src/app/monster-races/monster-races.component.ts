import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MonsterService } from 'src/services/monster.service';

@Component({
  selector: 'app-monster-races',
  templateUrl: './monster-races.component.html',
  styleUrls: ['./monster-races.component.css']
})
export class MonsterRacesComponent implements OnInit {

  races?:any;

  constructor(private serviceMonster:MonsterService, private route:Router) { }

  ngOnInit(): void {
    this.serviceMonster.getMosterRaces().then( res => {
      this.races = res.results;
    })
  }

  sendDetailRace(index:string){
    this.serviceMonster.getMosterRacesDetail(index).then( res => {
      this.serviceMonster.raceSelected = res;
      this.route.navigateByUrl('monster-races-detail');
    })
  }

}
