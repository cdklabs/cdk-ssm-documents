import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  HardCodedString,
  HardCodedBoolean,
} from '../../../src';
import { UpdateSSMAgentStep } from '../../../src/parent-steps/command/update-ssm-agent-step';


describe('UpdateSSMAgentStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new UpdateSSMAgentStep(new Stack(), 'UpdateSsmAgent', {
        agentName: new HardCodedString('agent'),
        allowDowngrade: new HardCodedBoolean(false),
        source: new HardCodedString('/path/to/agent'),
        targetVersion: new HardCodedString('version'),
      });

      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:updateSsmAgent',
        inputs: {
          agentName: 'agent',
          allowDowngrade: false,
          source: '/path/to/agent',
          targetVersion: 'version',
        },
        name: 'UpdateSsmAgent',
      });
    });
  });
});
