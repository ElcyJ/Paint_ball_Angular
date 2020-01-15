import { Component, OnInit } from '@angular/core';
import { PaintBallApiService } from '../paint-ball-api.service';
import { TeamModel } from './team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team: TeamModel = new TeamModel();
  teams: [];

  constructor(private paintBallApiService: PaintBallApiService) { }

  ngOnInit() {
    this.teamsList();
  }

  registerTeam(){
    console.log(this.team)
    this.paintBallApiService.postTeam(this.team).subscribe(team => {
      this.team = new TeamModel();
      this.teamsList();

    }, err => { console.log('Erro ao cadastrar time', err) })
  }

  updateTeam(id: number){
    this.paintBallApiService.putTeam(id, this.team).subscribe(team => {
      this.team = new TeamModel();
      this.teamsList();

    }, err => { console.log('Erro ao atualizar o time', err) })
  }

  deleteTeam(id: number){
    this.paintBallApiService.deleteTeam(id).subscribe(team => {
      this.team = new TeamModel();
      this.teamsList();

    }, err => { console.log('Erro ao excluir  o time', err) })
  }

  teamsList(){
    this.paintBallApiService.getTeams().subscribe(teams => {
      this.teams= teams['results'];
    }, err => {
      console.log('Erro ao listar os times', err);
    })

  }

}
