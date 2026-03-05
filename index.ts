import Game from "./game/game";
import Board from "./board/board";
import Player from "./player/player";

class app {
  constructor() {}
  public run() {
    const board = new Board();
    const game = new Game(board);
    game.addPlayer("Alex");
    game.addPlayer("Tom");
  }
}

const appRun = new app();
appRun.run();
