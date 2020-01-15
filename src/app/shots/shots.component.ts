import { Component, OnInit } from '@angular/core';
import { PaintBallApiService } from '../paint-ball-api.service';
import { ShotModel } from './shot.model';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})
export class ShotsComponent implements OnInit {

  shot: ShotModel = new ShotModel();
  shots: [];

  constructor(private paintBallApiService: PaintBallApiService) { }

  ngOnInit() {
    this.shotsList();
  }

  registerShot(){
    console.log(this.shot)
    this.paintBallApiService.postShot(this.shot).subscribe(shot => {
      this.shot = new ShotModel();
      this.shotsList();

    }, err => { console.log('Erro ao cadastrar tiro', err) })
  }

  updateShot(id: number){
    this.paintBallApiService.putShot(id, this.shot).subscribe(shot => {
      this.shot = new ShotModel();
      this.shotsList();

    }, err => { console.log('Erro ao atualizar o tiro', err) })
  }

  deleteShot(id: number){
    this.paintBallApiService.deleteShot(id).subscribe(shot => {
      this.shot = new ShotModel();
      this.shotsList();

    }, err => { console.log('Erro ao excluir  o tiro', err) })
  }

  shotsList(){
    this.paintBallApiService.getShots().subscribe(shots => {
      this.shots= shots['results'];
    }, err => {
      console.log('Erro ao listar os tiros', err);
    })

  }

}
