import { strict as assert } from 'assert';
import { HardCodedNumber } from '../../../lib';
import { isNumber, assertNumber } from '../../../lib/interface/variables/number-variable';

describe('Number Variable', () => {
  const validValues = [null, 0, 1, -2];
  const invalidValues = [true, 'string', [], {}];

  describe('isNumber', () => {
    it('returns true for numbers', () => {
      for (const value of validValues) {
        assert.ok(isNumber(value));
      }
    });

    it('returns false for non-numbers', () => {
      for (const value of invalidValues) {
        assert.ok(!isNumber(value));
      }
    });
  });

  describe('assertNumber', () => {
    it('does nothing for numbers', () => {
      for (const value of validValues) {
        assert.doesNotThrow(() => assertNumber(value));
      }
    });

    it('throws an exception for non-numbers', () => {
      for (const value of invalidValues) {
        assert.throws(() => assertNumber(value));
      }
    });
  });

  describe('resolve', () => {
    it('returns the value for numbers', () => {
      for (const value of validValues) {
        const variable = new HardCodedNumber(value as any);

        assert.equal(variable.resolve({}), value);
      }
    });

    it('throws an exception for non-numbers', () => {
      for (const value of invalidValues) {
        assert.throws(() => new HardCodedNumber(value as any).resolve({}));
      }
    });
  });

  describe('toJSON', () => {
    it("returns the value's JSON format", () => {
      const variable = new HardCodedNumber(5);

      assert.equal(JSON.stringify(variable), '5');
    });
  });
});