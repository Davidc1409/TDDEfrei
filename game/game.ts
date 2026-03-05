import Card from "../card/card";
import Player from "../player/player";
import Board from "../board/board";

interface playerCombinaison {
  combinaison: string[];
}

export default class Game {
  private players: Player[];
  private board: Board;
  private playersCombinaison: playerCombinaison[] = [];
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

  public checkPlayerBestCombinaison() {}
  public pickWinner() {}
}
