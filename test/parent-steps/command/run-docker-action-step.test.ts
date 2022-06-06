import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { HardCodedString, RunDockerActionStep } from '../../../lib';

describe('RunDockerActionStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new RunDockerActionStep(new Stack(), 'RunDockerAction', {
        action: HardCodedString.of('myAction'),
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:runDockerAction',
        inputs: {
          action: 'myAction',
        },
        name: 'RunDockerAction',
      });
    });
  });
});
