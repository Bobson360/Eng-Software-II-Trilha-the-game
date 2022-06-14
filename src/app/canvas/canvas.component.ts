import { PlayersInfoService } from './../services/players-info.service';
import { Board } from './controllers/Board';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  styles: ['canvas { border-style: solid; border: 100px solid #0a0a0aea }']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  playerOneColor:string;
  playerTwoColor:string;
  private ctx: CanvasRenderingContext2D;

  constructor(private playersInfoService: PlayersInfoService) { }

  ngOnInit(): void {
    this.playerOneColor = this.playersInfoService.getPlayerOneColor();
    this.playerTwoColor = this.playersInfoService.getPlayerTwoColor();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.animate()
  }

  animate () {
    const board = new Board(this.ctx,this.playerOneColor, this.playerTwoColor);
    board.BackgroundCirclePsition()
  }
}
