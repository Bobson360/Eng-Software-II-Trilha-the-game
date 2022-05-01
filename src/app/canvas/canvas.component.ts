import { Board } from './controllers/Board';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Circle } from './controllers/Circle';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  styles: ['canvas { border-style: solid }']
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
<<<<<<< HEAD
    this.ctx.fillStyle = 'red';
    const circle = new Circle(this.ctx);
    circle.draw(20, 20);
    this.ctx.fill()
=======
    const board = new Board(this.ctx)
    board.BackgroundCirclePsition()
>>>>>>> feature/view_canvas_robson
  }
}
