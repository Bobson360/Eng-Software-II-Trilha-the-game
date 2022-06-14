import { PlayersInfoService } from './../../services/players-info.service';
import { Line } from './Line';
import { Circle } from './Circle';
import { Rect } from './Rect';
export class Board {
  playerOneColor:string;
  playerTwoColor:string;
  constructor(
    private ctx: CanvasRenderingContext2D,
    playerOneColor:string,
    playerTwoColor:string
  ) {
    this.playerOneColor = playerOneColor;
    this.playerTwoColor = playerTwoColor;
  }

  BackgroundCirclePsition(){
    const rect = new Rect(this.ctx);
    rect.draw(0, 0, 500, 500, "#fff")

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

    const coords = [
      //quadrado externo
      [50,50], [250,50], [450,50], [450,250], [450,450], [250,450], [50,450], [50,250],
      //quadrado intermediario
      [100,100], [250,100], [400,100], [400,250], [400,400], [250,400], [100,400], [100,250],
      //quadrado interno
      [150,150], [250,150], [350,150], [350,250], [350,350], [250,350], [150,350], [150,250]

    ]
    const backgCir = new Circle(this.ctx);
    for(var i = 0; i < coords.length; i++){
      backgCir.draw({coords:[coords[i][0],coords[i][1]]})
    }
    backgCir.draw({coords:[15,250], color: this.playerOneColor})
    backgCir.draw({coords:[485,250], color: this.playerTwoColor})

  }
}
