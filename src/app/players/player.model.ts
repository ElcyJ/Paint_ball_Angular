import { TeamModel } from '../teams/team.model'
import { GunModel } from '../guns/gun.model'

export class PlayerModel {
    name: string;
    localization_x: number;
    localization_y: number;
    team: TeamModel[];
    gun: GunModel[]
  }