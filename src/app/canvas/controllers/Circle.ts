export class Circle {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number) {
    this.ctx.arc(x, y, 10, 0, 2*Math.PI);
    this.ctx.stroke()
  }

  positonDots(){

  }
}
