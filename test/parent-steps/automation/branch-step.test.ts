import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { BranchStep, Choice, MockPause, Operation, PauseStep, StringVariable } from '../../../lib';


describe('BranchStep', function() {
  describe('#invoke()', function() {
    it('Branches to first found matching value', function() {
      const step1 = new PauseStep(new Stack(), 'id', { name: 'step1', pauseHook: new MockPause() });
      const step2 = new PauseStep(new Stack(), 'id', { name: 'step2', pauseHook: new MockPause() });
      const step3 = new PauseStep(new Stack(), 'id', { name: 'step3', pauseHook: new MockPause() });
      const step4 = new PauseStep(new Stack(), 'id', { name: 'step4', pauseHook: new MockPause() });
      const branchStep = new BranchStep(new Stack(), 'id', {
        name: 'branch',
        choices: [
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'a',
            variable: new StringVariable('myKey'),
            jumpToStepName: step1.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'b',
            variable: new StringVariable('myKey'),
            jumpToStepName: step2.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'c',
            variable: new StringVariable('myKey'),
            jumpToStepName: step3.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'd',
            variable: new StringVariable('myKey'),
            jumpToStepName: step4.name,
          }),
        ],
        defaultStepName: step1.name,
      });
      branchStep.allStepsInExecution = [branchStep, step1, step2, step3, step4];
      const response = branchStep.invoke({ myKey: 'c' });
      assert.deepEqual(response.executedSteps, ['branch', 'step3']);
    });
    it('Branches default if no matches found', function() {
      const step1 = new PauseStep(new Stack(), 'id', { name: 'step1', pauseHook: new MockPause() });
      const step2 = new PauseStep(new Stack(), 'id', { name: 'step2', pauseHook: new MockPause() });
      const step3 = new PauseStep(new Stack(), 'id', { name: 'step3', pauseHook: new MockPause() });
      const step4 = new PauseStep(new Stack(), 'id', { name: 'step4', pauseHook: new MockPause() });
      const step5 = new PauseStep(new Stack(), 'id', { name: 'step5', pauseHook: new MockPause() });
      const branchStep = new BranchStep(new Stack(), 'id', {
        name: 'branch',
        choices: [
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'a',
            variable: new StringVariable('myKey'),
            jumpToStepName: step1.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'b',
            variable: new StringVariable('myKey'),
            jumpToStepName: step2.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'c',
            variable: new StringVariable('myKey'),
            jumpToStepName: step3.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'd',
            variable: new StringVariable('myKey'),
            jumpToStepName: step4.name,
          }),
        ],
        defaultStepName: step5.name,
      });
      branchStep.allStepsInExecution = [branchStep, step1, step2, step3, step4, step5];
      const response = branchStep.invoke({ myKey: 'e' });
      assert.deepEqual(response.executedSteps, ['branch', 'step5']);
    });
    it('Fails with no default or next', function() {
      const step1 = new PauseStep(new Stack(), 'id', { name: 'step1', pauseHook: new MockPause() });
      const step2 = new PauseStep(new Stack(), 'id', { name: 'step2', pauseHook: new MockPause() });
      const step3 = new PauseStep(new Stack(), 'id', { name: 'step3', pauseHook: new MockPause() });
      const step4 = new PauseStep(new Stack(), 'id', { name: 'step4', pauseHook: new MockPause() });
      const branchStep = new BranchStep(new Stack(), 'id', {
        name: 'branch',
        choices: [
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'a',
            variable: new StringVariable('myKey'),
            jumpToStepName: step1.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'b',
            variable: new StringVariable('myKey'),
            jumpToStepName: step2.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'c',
            variable: new StringVariable('myKey'),
            jumpToStepName: step3.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'd',
            variable: new StringVariable('myKey'),
            jumpToStepName: step4.name,
          }),
        ],
      });
      branchStep.allStepsInExecution = [branchStep, step1, step2, step3, step4];
      assert.throws(() => branchStep.invoke({ myKey: 'e' }));
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step1 = new PauseStep(new Stack(), 'id', { name: 'step1', pauseHook: new MockPause() });
      const step2 = new PauseStep(new Stack(), 'id', { name: 'step2', pauseHook: new MockPause() });
      const step3 = new PauseStep(new Stack(), 'id', { name: 'step3', pauseHook: new MockPause() });
      const step = new BranchStep(new Stack(), 'id', {
        name: 'branch',
        choices: [
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'a',
            variable: new StringVariable('myKey'),
            jumpToStepName: step1.name,
          }),
          new Choice({
            operation: Operation.STRING_EQUALS,
            constant: 'b',
            variable: new StringVariable('myKey'),
            jumpToStepName: step2.name,
          }),
        ],
        defaultStepName: step3.name,
      });
      step.allStepsInExecution = [step, step1, step2, step3];
      assert.deepEqual(step.toSsmEntry(), {
        action: 'aws:branch',
        inputs: {
          Choices: [
            {
              NextStep: 'step1',
              StringEquals: 'a',
              Variable: '{{myKey}}',
            },
            {
              NextStep: 'step2',
              StringEquals: 'b',
              Variable: '{{myKey}}',
            },
          ],
          Default: 'step3',
        },
        name: 'branch',
      });
    });
  });
});
