export class Circle {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw({coords, color, size}:{coords: Array<Array<number>>, color?: string, size?: number}):void {

  for(var i = 0; i < coords.length; i++){
    this.ctx.beginPath();
    this.ctx.arc(coords[i][0], coords[i][1], size?size:10, 0, Math.PI * 2, true);
    this.ctx.fillStyle =  color ? color : 'gray';
    this.ctx.fill();
}
  }

  background(){

  }
}
