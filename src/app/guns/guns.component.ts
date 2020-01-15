import { Component, OnInit } from '@angular/core';
import { PaintBallApiService } from '../paint-ball-api.service';
import { GunModel } from './gun.model';

@Component({
  selector: 'app-guns',
  templateUrl: './guns.component.html',
  styleUrls: ['./guns.component.css']
})
export class GunsComponent implements OnInit {

  gun: GunModel = new GunModel();
  guns: [];

  constructor(private paintBallApiService: PaintBallApiService) { }

  ngOnInit() {
    this.gunsList();
  }

  registerGun(){
    console.log(this.gun)
    this.paintBallApiService.postGun(this.gun).subscribe(gun => {
      this.gun = new GunModel();
      this.gunsList();

    }, err => { console.log('Erro ao cadastrar a arma', err) })
  }

  updateGun(id: number){
    this.paintBallApiService.putGun(id, this.gun).subscribe(gun => {
      this.gun = new GunModel();
      this.gunsList();

    }, err => { console.log('Erro ao atualizar a arma', err) })
  }

  deleteGun(id: number){
    this.paintBallApiService.deleteGun(id).subscribe(gun => {
      this.gun = new GunModel();
      this.gunsList();

    }, err => { console.log('Erro ao excluir a arma', err) })
  }

  gunsList(){
    this.paintBallApiService.getGuns().subscribe(guns => {
      this.guns = guns['results'];
    }, err => {
      console.log('Erro ao listar as armas', err);
    })

  }

}
