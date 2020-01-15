import { Component, OnInit } from '@angular/core';
import { PaintBallApiService } from '../paint-ball-api.service';
import { PlayerModel } from './player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  player: PlayerModel = new PlayerModel();
  players: [];

  constructor(private paintBallApiService: PaintBallApiService) { }

  ngOnInit() {
    this.playersList();
  }

  registerPlayer(){
    console.log(this.player)
    this.paintBallApiService.postPlayer(this.player).subscribe(player => {
      this.player = new PlayerModel();
      this.playersList();

    }, err => { console.log('Erro ao cadastrar jogador', err) })
  }

  updatePlayer(id: number){
    this.paintBallApiService.putPlayer(id, this.player).subscribe(player => {
      this.player = new PlayerModel();
      this.playersList();

    }, err => { console.log('Erro ao atualizar o jogador', err) })
  }

  deletePlayer(id: number){
    this.paintBallApiService.deletePlayer(id).subscribe(player => {
      this.player = new PlayerModel();
      this.playersList();

    }, err => { console.log('Erro ao excluir  o jogador', err) })
  }

  playersList(){
    this.paintBallApiService.getPlayers().subscribe(players => {
      this.players = players['results'];
    }, err => {
      console.log('Erro ao listar os jogadores', err);
    })

  }


}
