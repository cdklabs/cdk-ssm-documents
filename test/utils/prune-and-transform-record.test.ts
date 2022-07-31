import * as assert from 'assert';
import { HardCodedString, StringVariable } from '../../lib';
import { pruneAndTransformRecord } from '../../lib/utils/prune-and-transform-record';

describe('pruneAndTransformRecord', () => {
  it('removes undefined values', () => {
    const value = {
      a: undefined,
      b: undefined,
      c: new HardCodedString('real'),
    };

    const actual = pruneAndTransformRecord(value, (x: any) => x);

    assertDeepEqual(actual, {
      c: new HardCodedString('real'),
    });
  });

  it('transforms defined values', () => {
    const value = {
      a: new StringVariable('variable'),
      b: new HardCodedString('hard'),
    };

    const actual = pruneAndTransformRecord(value, (x: any) => x.print());

    assertDeepEqual(actual, {
      a: '{{ variable }}',
      b: 'hard',
    });
  });

  const sanitize = (record: Record<string, any>): Record<string, any> => {
    return JSON.parse(JSON.stringify(record).replace(/\\r\\n/g, '\\n'));
  };
  const assertDeepEqual = (actual: Record<string, any>, expected: Record<string, any>): void => {
    assert.deepEqual(sanitize(actual), sanitize(expected));
  };
});