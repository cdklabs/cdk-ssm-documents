import { strict as assert } from 'assert';
import { HardCodedStringList } from '../../../lib';
import { isStringList, assertStringList } from '../../../lib/interface/variables/string-list-variable';

describe('StringList Variable', () => {
  const validValues = [null, [], ['string']];
  const invalidValues = [false, 1, 'string', [1], {}];

  describe('isStringList', () => {
    it('returns true for string lists', () => {
      for (const value of validValues) {
        assert.ok(isStringList(value));
      }
    });

    it('returns false for non-string lists', () => {
      for (const value of invalidValues) {
        assert.ok(!isStringList(value));
      }
    });
  });

  describe('assertStringList', () => {
    it('does nothing for string lists', () => {
      for (const value of validValues) {
        assert.doesNotThrow(() => assertStringList(value));
      }
    });

    it('throws an exception for non-string lists', () => {
      for (const value of invalidValues) {
        assert.throws(() => assertStringList(value));
      }
    });
  });

  describe('resolve', () => {
    it('returns the value for string lists', () => {
      for (const value of validValues) {
        const variable = new HardCodedStringList(value as any);

        assert.equal(variable.resolve({}), value);
      }
    });

    it('throws an exception for non-string lists', () => {
      for (const value of invalidValues) {
        assert.throws(() => new HardCodedStringList(value as any).resolve({}));
      }
    });
  });

  describe('toJSON', () => {
    it("returns the value's JSON format", () => {
      const variable = new HardCodedStringList(['apple']);

      assert.equal(JSON.stringify(variable), '["apple"]');
    });
  });
});