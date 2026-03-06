import Card from "../card/card";
import Random from "../card/random";

export default class Player {
  private name: string;
  private cards: Card[] = [];
  private indexScore: number = 0.0;

  constructor(name: string) {
    const random = new Random();
    while (this.cards.length < 2) {
      if (this.cards.length == 0) {
        const card = new Card(random);
        this.cards.push(card);
      } else {
        const card2 = new Card(random);
        let isDuplicate;
        this.cards.forEach((card) => {
          isDuplicate = Card.isDuplicateCards(card2, card);
        });
        if (!isDuplicate) {
          this.cards.push(card2);
        }
      }
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
