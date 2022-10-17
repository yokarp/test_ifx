import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MonsterService } from 'src/services/monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  monsters?:any;

  constructor(private mosterService:MonsterService, private router:Router) { }

  ngOnInit(): void {
    this.mosterService.getMoster().then( res => {
      console.log(res.results);
      this.monsters = res.results;
    });
  }

  detailMonster(monsterIndex:string){
    this.mosterService.getMosterDetail(monsterIndex).then( res => {
      this.mosterService.monsterSelected = res;
      this.router.navigateByUrl('monster-detail');
    }).catch( err => console.error(err));
  }

}
