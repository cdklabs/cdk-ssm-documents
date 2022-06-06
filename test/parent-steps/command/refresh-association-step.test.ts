import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  HardCodedStringList,
} from '../../../src';
import { RefreshAssociationStep } from '../../../src/parent-steps/command/refresh-association-step';


describe('RefreshAssociationStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new RefreshAssociationStep(new Stack(), 'RefreshAssociation', {
        associationIds: new HardCodedStringList(['a', 'b']),
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:refreshAssociation',
        inputs: {
          associationIds: ['a', 'b'],
        },
        name: 'RefreshAssociation',
      });
    });
  });
});
