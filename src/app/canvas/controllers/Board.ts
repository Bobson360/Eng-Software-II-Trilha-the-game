import { Line } from './Line';
import { Circle } from './Circle';
import { Rect } from './Rect';
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

    const rect = new Rect(this.ctx);
    rect.draw(50, 50, 400, 400);
    rect.draw(100, 100, 300, 300);
    rect.draw(150, 150, 200, 200);

    const line = new Line(this.ctx);
    //VERTICAL LINES
    line.draw(250, 50, 250,150 );
    line.draw(250, 350, 250,450 );

    //HORIZONTAL LINES
    line.draw(50, 250, 150,250 );
    line.draw(350, 250, 450,250 );
  }
}
