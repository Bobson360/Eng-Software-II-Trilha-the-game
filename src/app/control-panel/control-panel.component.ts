import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  audio = new Audio();
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  isAudioPlaying:boolean;
  constructor() { }

  ngOnInit(): void {
    this.audio.src = "./../assets/audio/game-sound.wav";
    this.audio.load();
    this.audio.loop = true;
    this.isAudioPlaying = true;
    setTimeout(()=> {
      this.playSound()
    } ,1000)
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
