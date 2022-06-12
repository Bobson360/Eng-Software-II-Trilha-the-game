import { PlayersInfo } from './../models/players-info';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersInfoService {
  private playerOneName:string;
  private playerTwoName:string;
  private playerOneColor:string;
  private playerTwoColor:string;

  constructor() { }

  setPlayerOneName(name:string):void{
    this.playerOneName = name;
  }

  setPlayerTwoName(name:string):void{
    this.playerTwoName = name;
  }

  getPlayerOneName():string{
    return this.playerOneName;
  }

  getPlayerTwoName():string{
    return this.playerTwoName;
  }

  setPlayerOneColor(color:string):void{
    this.playerOneColor = color;
  }

  setPlayerTwoColor(color:string):void{
    this.playerTwoColor = color;
  }

  getPlayerOneColor():string{
    return this.playerOneColor;
  }

  getPlayerTwoColor():string{
    return this.playerTwoColor;
  }

  resetPlayersInfo():void{
    this.playerOneName = undefined;
    this.playerTwoName = undefined;
    this.playerOneColor = undefined;
    this.playerTwoColor = undefined;
  }

  getPlayersInfo():PlayersInfo{
    return {
      playerOneName: this.playerOneName,
      playerTwoName: this.playerTwoName,
      playerOneColor: this.playerOneColor,
      playerTwoColor: this.playerTwoColor
    }
  }

}
