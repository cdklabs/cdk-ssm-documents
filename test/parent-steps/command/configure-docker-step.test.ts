import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { HardCodedAction, ConfigureDockerStep } from '../../../lib';


describe('ConfigureDockerStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ConfigureDockerStep(new Stack(), 'ConfigureDocker', {
        action: HardCodedAction.INSTALL,
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:configureDocker',
        inputs: {
          action: 'Install',
        },
        name: 'ConfigureDocker',
      });
    });
  });
});
