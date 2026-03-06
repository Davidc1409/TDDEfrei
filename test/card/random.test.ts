import { describe, it, expect, beforeEach } from 'vitest';
import Random from '../../card/random';

describe('Random', () => {
  let random: Random;

  beforeEach(() => {
    random = new Random();
  });

  describe('rand()', () => {
    it('should return a number between min and max (inclusive)', () => {
      const min = 1;
      const max = 10;
      const result = random.rand(min, max);

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should return a number when called without arguments (default range 0-52)', () => {
      const result = random.rand();

      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(52);
    });

    it('should return an integer, not a float', () => {
      const result = random.rand(1, 100);

      expect(Number.isInteger(result)).toBe(true);
    });

    it('should handle min and max when they are floats (should ceil min and floor max)', () => {
      const result = random.rand(1.7, 10.3);

      expect(result).toBeGreaterThanOrEqual(2); // ceil(1.7) = 2
      expect(result).toBeLessThanOrEqual(10); // floor(10.3) = 10
    });

    it('should return min when min equals max', () => {
      const result = random.rand(5, 5);

      expect(result).toBe(5);
    });

    it('should work with negative numbers', () => {
      const min = -10;
      const max = -5;
      const result = random.rand(min, max);

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should handle large ranges', () => {
      const min = 0;
      const max = 1000000;
      const result = random.rand(min, max);

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });

    it('should generate different values across multiple calls (statistical test)', () => {
      const results = new Set();
      const iterations = 100;

      for (let i = 0; i < iterations; i++) {
        results.add(random.rand(1, 100));
      }

      // With 100 iterations over a range of 100, we should get more than 1 unique value
      expect(results.size).toBeGreaterThan(1);
    });

    it('should respect the range boundaries consistently', () => {
      const min = 10;
      const max = 20;
      const iterations = 50;

      for (let i = 0; i < iterations; i++) {
        const result = random.rand(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });

    it('should work with custom default parameters when called with arguments', () => {
      const customMin = 5;
      const customMax = 15;
      const result = random.rand(customMin, customMax);

      expect(result).toBeGreaterThanOrEqual(customMin);
      expect(result).toBeLessThanOrEqual(customMax);
    });
  });
});
