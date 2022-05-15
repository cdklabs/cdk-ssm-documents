import { strict as assert } from 'assert';
import { HardCodedMapList } from '../../../lib';
import { isMapList, assertMapList } from '../../../lib/interface/variables/map-list-variable';

describe('MapList Variable', () => {
  const validValues = [null, [], [{}], [{ a: 1 }]];
  const invalidValues = [false, 1, 'string', ['a'], {}];

  describe('isMapList', () => {
    it('returns true for map lists', () => {
      for (const value of validValues) {
        assert.ok(isMapList(value));
      }
    });

    it('returns false for non-map lists', () => {
      for (const value of invalidValues) {
        assert.ok(!isMapList(value));
      }
    });
  });

  describe('assertMapList', () => {
    it('does nothing for map lists', () => {
      for (const value of validValues) {
        assert.doesNotThrow(() => assertMapList(value));
      }
    });

    it('throws an exception for non-map lists', () => {
      for (const value of invalidValues) {
        assert.throws(() => assertMapList(value));
      }
    });
  });

  describe('resolve', () => {
    it('returns the value for map lists', () => {
      for (const value of validValues) {
        const variable = new HardCodedMapList(value as any);

        assert.equal(variable.resolve({}), value);
      }
    });

    it('throws an exception for non-map lists', () => {
      for (const value of invalidValues) {
        assert.throws(() => new HardCodedMapList(value as any).resolve({}));
      }
    });
  });

  describe('toJSON', () => {
    it("returns the value's JSON format", () => {
      const variable = new HardCodedMapList([{ a: 1 }]);

      assert.equal(JSON.stringify(variable), '[{"a":1}]');
    });
  });
});