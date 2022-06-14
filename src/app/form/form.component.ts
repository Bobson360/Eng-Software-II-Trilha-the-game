import { PlayersInfoService } from './../services/players-info.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  playerOne:string;
  playerTwo:string;
  colorPlayerOne:string = "#ffff00";
  colorPlayerTwo:string = "#00ff00";


  constructor(
    private router: Router,
    private playersInfoService: PlayersInfoService
  ) { }

  ngOnInit(): void {
    this.playersInfoService.resetPlayersInfo()
  }

  play():void{
    this.playersInfoService.setPlayerOneName(this.playerOne);
    this.playersInfoService.setPlayerTwoName(this.playerTwo);
    this.playersInfoService.setPlayerOneColor(this.colorPlayerOne);
    this.playersInfoService.setPlayerTwoColor(this.colorPlayerTwo);
    this.router.navigate(['/game']);
  }
}
