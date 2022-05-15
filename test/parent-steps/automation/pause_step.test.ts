import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { MockPause, PauseStep } from '../../../lib';

describe('PauseStep', function() {
  describe('#invoke()', function() {
    it('Pause is invoked', function() {
      const mockPause = new MockPause();
      const step = new PauseStep(new Stack(), 'id', { name: 'asdf', pauseHook: mockPause });
      step.invoke({});
      assert.equal(mockPause.timesInvoked, 1);
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const mockPause = new MockPause();
      const step = new PauseStep(new Stack(), 'id', { name: 'asdf', pauseHook: mockPause });
      assert.deepEqual(step.toSsmEntry(), {
        action: 'aws:pause',
        inputs: {},
        name: 'asdf',
      });
    });
  });
});
