import { strict as assert } from 'assert';
import { HardCodedString } from '../../../lib';
import { assertString, isString } from '../../../lib/interface/variables/string-variable';

describe('String Variable', () => {
  const validValues = [null, 'string'];
  const invalidValues = [false, 1, [], {}];

  describe('isString', () => {
    it('returns true for strings', () => {
      for (const value of validValues) {
        assert.ok(isString(value));
      }
    });

    it('returns false for non-strings', () => {
      for (const value of invalidValues) {
        assert.ok(!isString(value));
      }
    });
  });

  describe('assertString', () => {
    it('does nothing for strings', () => {
      for (const value of validValues) {
        assert.doesNotThrow(() => assertString(value));
      }
    });

    it('throws an exception for non-strings', () => {
      for (const value of invalidValues) {
        assert.throws(() => assertString(value));
      }
    });
  });

  describe('resolve', () => {
    it('returns the value for strings', () => {
      for (const value of validValues) {
        const variable = new HardCodedString(value as any);

        assert.equal(variable.resolve({}), value);
      }
    });

    it('throws an exception for non-strings', () => {
      for (const value of invalidValues) {
        assert.throws(() => new HardCodedString(value as any).resolve({}));
      }
    });
  });

  describe('toJSON', () => {
    it("returns the value's JSON format", () => {
      const variable = new HardCodedString('apple');

      assert.equal(JSON.stringify(variable), '"apple"');
    });
  });
});