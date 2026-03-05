import Card from "../card/card";
import Player from "../player/player";
import Board from "../board/board";

export default class Game {
  private players: Player[];
  private board: Board;
  constructor(board: Board, players: Player[] = []) {
    this.board = board;
    this.players = players;
  }

  public getPlayers(): Player[] {
    return this.players;
  }

  public addPlayer(name: string) {
    const newplayer = new Player(name);
    this.players.push(newplayer);
  }

  public checkPlayerCombinaison() {}
}
