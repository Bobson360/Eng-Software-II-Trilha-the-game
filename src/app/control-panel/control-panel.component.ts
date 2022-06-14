import { PlayersInfo } from './../models/players-info';
import { PlayersInfoService } from './../services/players-info.service';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  audio = new Audio();
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  isAudioPlaying:boolean;
  playerOneName:string;
  playerTwoName:string;
  playerOneColor:string;
  playerTwoColor:string;
  piecesPlayerOne = 9;
  piecesPlayerTwo= 9;

  constructor(
    private playersInfoService: PlayersInfoService
  ) { }

  ngOnInit(): void {
    this.getPlayersInfo();
    this.loadAudio();
  }

  getPlayersInfo(){
    this.playerOneName = this.playersInfoService.getPlayerOneName();
    this.playerTwoName = this.playersInfoService.getPlayerTwoName();
    this.playerOneColor = this.playersInfoService.getPlayerOneColor();
    this.playerTwoColor = this.playersInfoService.getPlayerTwoColor();
  }

  loadAudio(){
    this.audio.src = "./../assets/audio/game-sound.wav";
    this.audio.load();
    this.audio.loop = true;
    this.isAudioPlaying = false;
  }

  playSound(){
    this.audio.play();
  }

  stopSound(){
    this.audio.pause();
  }

  toggleSound(){
    this.isAudioPlaying = !this.isAudioPlaying;
    this.isAudioPlaying ? this.stopSound() : this.playSound();
  }

}
