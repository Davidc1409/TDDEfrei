import Card from "../card/card";
import Random from "../card/random";

export default class Board {
  private cards: Card[] = [];
  constructor() {
    const random = new Random();
    while (this.cards.length < 5) {
      if (this.cards.length == 0) {
        const card = new Card(random);
        this.cards.push(card);
      } else {
        const newCard = new Card(random);
        let isDuplicate;
        this.cards.forEach((card) => {
          isDuplicate = Card.isDuplicateCards(newCard, card);
        });
        if (!isDuplicate) {
          this.cards.push(newCard);
        }
      }
    }
  }
}
