export class Rect {
  constructor(private ctx: CanvasRenderingContext2D) {}


  draw(x:number, y:number, w:number, h:number):void {

      this.ctx.beginPath();
      this.ctx.strokeStyle = 'gray';
      this.ctx.rect(x,y,w,h);
      this.ctx.stroke();
  }

  background(coords:{coords: Array<number>}){

  }
}
