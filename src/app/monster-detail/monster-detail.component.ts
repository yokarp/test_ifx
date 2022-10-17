import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MonsterService } from 'src/services/monster.service';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent implements OnInit {

  monster?: any;

  constructor(private monsterService:MonsterService, private router:Router) { }

  ngOnInit(): void {
    this.monster = this.monsterService.monsterSelected;
    if(this.monster === null || this.monster === undefined){
      this.router.navigateByUrl('monster');
    }
  }

}
