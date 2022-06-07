import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { StringVariable } from '../../../lib';
import { ExecuteAutomationStep } from '../../../lib/parent-steps/automation/execute-automation-step';

describe('ExecuteAutomationStep', function() {
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ExecuteAutomationStep(new Stack(), 'id', {
        name: 'MyExecuteAutomation',
        documentName: StringVariable.of('docRef'),
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:executeAutomation',
        inputs: {
          DocumentName: '{{docRef}}',
        },
        name: 'MyExecuteAutomation',
      });
    });
  });
});
