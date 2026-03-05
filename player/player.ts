import Card from "../card/card";
import Random from "../card/random";

export default class Player {
  private name: string;
  private cards: Card[] = [];

  constructor(name: string) {
    const random = new Random();
    for (let i = 0; i < 2; i++) {
      const card = new Card(random);
      this.cards.push(card);
    }
    this.name = name;
  }

  public getPlayerCards(): Card[] {
    return this.cards;
  }

  public getPlayerName(): string {
    return this.name;
  }
}
