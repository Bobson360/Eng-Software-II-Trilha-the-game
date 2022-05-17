import { Board } from './controllers/Board';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  styles: ['canvas { border-style: solid; border: 100px solid #2a2a2aea }']
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.animate()
  }
  animate () {
    const board = new Board(this.ctx)
    board.BackgroundCirclePsition()
  }
}
