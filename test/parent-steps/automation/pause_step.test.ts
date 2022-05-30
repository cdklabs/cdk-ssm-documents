import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { MockPause, PauseStep } from '../../../lib';
import { AutomationStepSimulation } from '../../../lib/simulation/automation-step-simulation';

describe('PauseStep', function() {
  describe('#invoke()', function() {
    it('Pause is invoked', function() {
      const mockPause = new MockPause();
      const step = new PauseStep(new Stack(), 'id', { name: 'asdf' });
      new AutomationStepSimulation(step, { pauseHook: mockPause }).invoke({});
      assert.equal(mockPause.timesInvoked, 1);
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new PauseStep(new Stack(), 'id', { name: 'asdf' });
      assert.deepEqual(step.toSsmEntry(), {
        action: 'aws:pause',
        inputs: {},
        name: 'asdf',
      });
    });
  });
});
