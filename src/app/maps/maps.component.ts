import { Component, OnInit } from '@angular/core';
import { PaintBallApiService } from '../paint-ball-api.service';
import { MapModel } from './map.model';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  map: MapModel = new MapModel();
  maps: [];

  constructor(private paintBallApiService: PaintBallApiService) { }

  ngOnInit() {
    this.mapsList();
  }

  registerMap(){
    console.log(this.map)
    this.paintBallApiService.postMap(this.map).subscribe(map => {
      this.map = new MapModel();
      this.mapsList();

    }, err => { console.log('Erro ao cadastrar o mapa', err) })
  }

  updateMap(id: number){
    this.paintBallApiService.putMap(id, this.map).subscribe(map => {
      this.map = new MapModel();
      this.mapsList();

    }, err => { console.log('Erro ao atualizar o mapa', err) })
  }

  deletePlayer(id: number){
    this.paintBallApiService.deleteMap(id).subscribe(map => {
      this.map = new MapModel();
      this.mapsList();

    }, err => { console.log('Erro ao excluir  o mapa', err) })
  }

  mapsList(){
    this.paintBallApiService.getMaps().subscribe(maps => {
      this.maps= maps['results'];
    }, err => {
      console.log('Erro ao listar os mapas', err);
    })

  }

}
