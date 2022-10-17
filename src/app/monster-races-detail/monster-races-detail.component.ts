import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MonsterService } from 'src/services/monster.service';

@Component({
  selector: 'app-monster-races-detail',
  templateUrl: './monster-races-detail.component.html',
  styleUrls: ['./monster-races-detail.component.css']
})
export class MonsterRacesDetailComponent implements OnInit {

  race?:any;

  constructor(private serviceMonster:MonsterService, private router:Router) { }

  ngOnInit(): void {
    this.race = this.serviceMonster.raceSelected;
    if(this.race === null || this.race === undefined){
      this.router.navigateByUrl('monster-races');
    }
  }

}
