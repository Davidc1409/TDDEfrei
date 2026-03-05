import Card from "../card/card";
import Random from "../card/random";

export default class Board {
  private cards: Card[] = [];
  constructor() {
    const random = new Random();
    for (let i = 0; i < 5; i++) {
      const card = new Card(random);
      this.cards.push(card);
    }
  }
}
