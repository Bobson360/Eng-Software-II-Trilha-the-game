export class Line {
  constructor(private ctx: CanvasRenderingContext2D) {}


  draw(moveToX: number, moveToY: number, LineToX:number, lineToY:number):void {

      this.ctx.beginPath();
      this.ctx.strokeStyle = 'gray';
      this.ctx.moveTo(moveToX, moveToY);
      this.ctx.lineTo(LineToX, lineToY);
      this.ctx.stroke();
  }

  background(coords:{coords: Array<number>}){

  }
}
