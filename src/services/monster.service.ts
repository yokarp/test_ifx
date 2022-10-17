import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  baseurl = environment.server_url;
  monsterSelected?:any;

  constructor(private http: HttpClient) { }

  getMoster(): Promise<any>{
    return this.http.get(this.baseurl + "monsters").toPromise();
  }

  getMosterDetail(monster:string){
    return this.http.get(this.baseurl + "monsters/" + monster).toPromise();
  }

  getMosterRaces(): Promise<any>{
    return this.http.get(this.baseurl + "races").toPromise();
  }

}
