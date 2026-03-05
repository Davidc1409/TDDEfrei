import Card from "../card/card";
import Random from "../card/random";

export default class Player {
  private name: string;
  private cards: Card[] = [];

  constructor(name: string) {
    const random = new Random();
    for (let i = 0; i < 2; i++) {
      if (this.cards.length == 0) {
        const card = new Card(random);
        this.cards.push(card);
      } else {
        const card2 = new Card(random);
        const isDuplicate = this.isDuplicateCards(card2);
        if (!isDuplicate) {
          this.cards.push(card2);
        } else {
        }
      }
    }
    this.name = name;
  }

  private isDuplicateCards(cardToCompare: Card): boolean {
    const card = this.cards.find((card) => {
      card.getCurrentCardValue() == cardToCompare.getCurrentCardValue();
    });
    if (card) {
      return true;
    }
    return false;
  }

  public getPlayerCards(): Card[] {
    return this.cards;
  }

  public getPlayerName(): string {
    return this.name;
  }
}
