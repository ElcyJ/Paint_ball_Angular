import { Injectable } from '@angular/core';
import { PlayerModel } from './players/player.model';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { GunModel } from './guns/gun.model';
import { MapModel } from './maps/map.model';
import { ShotModel } from './shots/shot.model';
import { TeamModel } from './teams/team.model';

@Injectable({
  providedIn: 'root'
})
export class PaintBallApiService {

  constructor(private http: HttpClient) { }

  getPlayers() : Observable<any[]>{
    return this.http.get<any[]>(" http://127.0.0.1:8000/players/");
  }

  getGuns() : Observable<any[]>{
    return this.http.get<any[]>(" http://127.0.0.1:8000/guns/");
  }

  getMaps() : Observable<any[]>{
    return this.http.get<any[]>(" http://127.0.0.1:8000/maps/");
  }

  getShots() : Observable<any[]>{
    return this.http.get<any[]>(" http://127.0.0.1:8000/shots/");
  }

  getTeams() : Observable<any[]>{
    return this.http.get<any[]>(" http://127.0.0.1:8000/teams/");
  }

  postPlayer(player: PlayerModel) : Observable<any>{
    return this.http.post("http://127.0.0.1:8000/players/", player)
  }

  postGun(gun: GunModel) : Observable<any>{
    return this.http.post("http://127.0.0.1:8000/guns/", gun)
  }

  postMap(map: MapModel) : Observable<any>{
    return this.http.post("http://127.0.0.1:8000/maps/", map)
  }

  postShot(shot: ShotModel) : Observable<any>{
    return this.http.post("http://127.0.0.1:8000/shots/", shot)
  }

  postTeam(team: TeamModel) : Observable<any>{
    return this.http.post("http://127.0.0.1:8000/teams/", team)
  }

  putPlayer(id: any, player: PlayerModel) : Observable<any>{
    return this.http.patch("http://127.0.0.1:8000/players/".concat(id).concat('/'), player)

  }

  putGun(id: any, gun: GunModel) : Observable<any>{
    return this.http.patch("http://127.0.0.1:8000/guns/".concat(id).concat('/'), gun)

  }

  putMap(id: any, map: MapModel) : Observable<any>{
    return this.http.patch("http://127.0.0.1:8000/maps/".concat(id).concat('/'), map)

  }

  putShot(id: any, shot: ShotModel) : Observable<any>{
    return this.http.patch("http://127.0.0.1:8000/shots/".concat(id).concat('/'), shot)

  }

  putTeam(id: any, team: TeamModel) : Observable<any>{
    return this.http.patch("http://127.0.0.1:8000/teams/".concat(id).concat('/'), team)

  }

  deletePlayer(id: any) : Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/players/".concat(id).concat('/'))
  }

  deleteGun(id: any) : Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/guns/".concat(id).concat('/'))
  }

  deleteMap(id: any) : Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/maps/".concat(id).concat('/'))
  }

  deleteShot(id: any) : Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/shots/".concat(id).concat('/'))
  }

  deleteTeam(id: any) : Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/teams/".concat(id).concat('/'))
  }
}
