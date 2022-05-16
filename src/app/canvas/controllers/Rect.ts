export class Rect {
  constructor(private ctx: CanvasRenderingContext2D) {}


  draw(x:number, y:number, w:number, h:number, color?: string):void {

      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.strokeStyle = color ? color : 'gray';
      this.ctx.rect(x,y,w,h);
      this.ctx.fillRect(x,y,w,h)
      this.ctx.stroke();
  }

  background(coords:{coords: Array<number>}){

  }
}
