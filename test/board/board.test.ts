import { describe, it, expect, beforeEach } from 'vitest';
import Board from '../../board/board';
import Card from '../../card/card';
import Random from '../../card/random';

describe('Board', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board();
  });

  describe('Constructor', () => {
    it('should create a board with exactly 5 cards', () => {
      // Access the private cards property through Object.getOwnPropertyNames
      const cards = (board as any).cards;
      expect(cards).toHaveLength(5);
    });

    it('should initialize with Card instances', () => {
      const cards = (board as any).cards;
      cards.forEach((card: Card) => {
        expect(card).toBeInstanceOf(Card);
      });
    });

    it('should ensure all cards are unique (no duplicates)', () => {
      const cards = (board as any).cards;
      const cardValues = cards.map((card: Card) => card.getCurrentCardValue());
      const uniqueCardValues = new Set(cardValues);

      expect(uniqueCardValues.size).toBe(cards.length);
      expect(uniqueCardValues.size).toBe(5);
    });

    it('should create valid card values from the deck', () => {
      const cards = (board as any).cards;
      const validCards = [
        "As de Cœur", "2 de Cœur", "3 de Cœur", "4 de Cœur", "5 de Cœur",
        "6 de Cœur", "7 de Cœur", "8 de Cœur", "9 de Cœur", "10 de Cœur",
        "Valet de Cœur", "Dame de Cœur", "Roi de Cœur",
        "As de Carreau", "2 de Carreau", "3 de Carreau", "4 de Carreau",
        "5 de Carreau", "6 de Carreau", "7 de Carreau", "8 de Carreau",
        "9 de Carreau", "10 de Carreau", "Valet de Carreau", "Dame de Carreau",
        "Roi de Carreau", "As de Pique", "2 de Pique", "3 de Pique",
        "4 de Pique", "5 de Pique", "6 de Pique", "7 de Pique",
        "8 de Pique", "9 de Pique", "10 de Pique", "Valet de Pique",
        "Dame de Pique", "Roi de Pique", "As de Trèfle", "2 de Trèfle",
        "3 de Trèfle", "4 de Trèfle", "5 de Trèfle", "6 de Trèfle",
        "7 de Trèfle", "8 de Trèfle", "9 de Trèfle", "10 de Trèfle",
        "Valet de Trèfle", "Dame de Trèfle", "Roi de Trèfle"
      ];

      cards.forEach((card: Card) => {
        expect(validCards).toContain(card.getCurrentCardValue());
      });
    });

    it('should not have empty card values', () => {
      const cards = (board as any).cards;
      cards.forEach((card: Card) => {
        expect(card.getCurrentCardValue()).toBeTruthy();
        expect(card.getCurrentCardValue().length).toBeGreaterThan(0);
      });
    });
  });

  describe('Board Initialization Consistency', () => {
    it('should create different boards with different cards', () => {
      const board1 = new Board();
      const board2 = new Board();

      const cards1 = (board1 as any).cards.map((c: Card) => c.getCurrentCardValue());
      const cards2 = (board2 as any).cards.map((c: Card) => c.getCurrentCardValue());

      // It's statistically very unlikely they have the exact same 5 cards
      expect(cards1).not.toEqual(cards2);
    });

    it('should handle multiple board creations without errors', () => {
      expect(() => {
        for (let i = 0; i < 10; i++) {
          new Board();
        }
      }).not.toThrow();
    });
  });

  describe('Card Uniqueness Logic', () => {
    it('should use Card.isDuplicateCards correctly', () => {
      const random = new Random();
      const card1 = new Card(random);
      const card2 = new Card(random);

      // These cards might be the same or different, but the comparison should work
      const isDuplicate = Card.isDuplicateCards(card1, card2);
      expect(typeof isDuplicate).toBe('boolean');
    });

    it('should never contain two identical cards in the board', () => {
      const cards = (board as any).cards;

      for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
          const isDuplicate = Card.isDuplicateCards(cards[i], cards[j]);
          expect(isDuplicate).toBe(false);
        }
      }
    });
  });

  describe('Board State', () => {
    it('should maintain card state after creation', () => {
      const cards1 = (board as any).cards.map((c: Card) => c.getCurrentCardValue());
      const cards2 = (board as any).cards.map((c: Card) => c.getCurrentCardValue());

      expect(cards1).toEqual(cards2);
    });

    it('should have cards property as an array', () => {
      const cards = (board as any).cards;
      expect(Array.isArray(cards)).toBe(true);
    });
  });

  describe('Board Edge Cases', () => {
    it('should always have exactly 5 cards, not more', () => {
      const cards = (board as any).cards;
      expect(cards.length).toBeLessThanOrEqual(5);
      expect(cards.length).toBe(5);
    });

    it('should not have null or undefined cards', () => {
      const cards = (board as any).cards;
      cards.forEach((card: Card) => {
        expect(card).not.toBeNull();
        expect(card).not.toBeUndefined();
      });
    });

    it('should handle the Random instance correctly', () => {
      const cards = (board as any).cards;
      // All cards should have been created with a Random instance (indirectly)
      // They should all have valid values
      cards.forEach((card: Card) => {
        expect(card.getCurrentCardValue()).toBeTruthy();
      });
    });
  });
});
