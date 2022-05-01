import { Circle } from './Circle';
export class Board {
  constructor(private ctx: CanvasRenderingContext2D) {}

  BackgroundCirclePsition(){
    const coords = [
      //quadrado externo
      [50,50], [250,50], [450,50], [450,250], [450,450], [250,450], [50,450], [50,250],
      //quadrado intermediario
      [100,100], [250,100], [400,100], [400,250], [400,400], [250,400], [100,400], [100,250],
      //quadrado interno
      [150,150], [250,150], [350,150], [350,250], [350,350], [250,350], [150,350], [150,250]

    ]
    const backgCir = new Circle(this.ctx);
    backgCir.draw({coords:coords})
  }
}
