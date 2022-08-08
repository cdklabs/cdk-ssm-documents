import * as assert from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  AutomationDocument,
  MockSleep,
  ResponseCode,
  Simulation,
  SleepStep,
  StepRef,
} from '../../lib';

const doc: AutomationDocument = new AutomationDocument(new Stack(), 'myDoc', {});
const sleep1 = new SleepStep(new Stack(), 'sleep1', { sleepSeconds: 3, explicitNextStep: StepRef.fromName('sleep3') });
doc.addStep(sleep1);
doc.addStep(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3 }));
doc.addStep(new SleepStep(new Stack(), 'sleep3', { sleepSeconds: 3 }));
doc.addStep(new SleepStep(new Stack(), 'sleep4', { sleepSeconds: 3 }));

describe('StepRef', function() {
  describe('#fromObject()', function () {
    it('Initializes the StepRef from a step object', function () {
      assert.strictEqual(StepRef.fromObject(new SleepStep(new Stack(), 'sleep1', {sleepSeconds: 3})).stepName, 'sleep1');
    });
  });
  describe('#fromName()', function () {
    it('Initializes the StepRef from a step name', function () {
      assert.strictEqual(StepRef.fromName('sleep1').stepName, 'sleep1');
    });
  });
  describe('#resolve()', function () {
    it('Resolves to correct step object', function () {
      Simulation.ofAutomation(doc, { sleepHook: new MockSleep() }).simulate({});
      assert.strictEqual(StepRef.fromName('sleep2').resolve(sleep1.allStepsInExecution ?? []).name, 'sleep2');
    });
  });
  describe('print', function () {
    it('Prints the next step in the document with the explicit override', function () {
      assert.deepStrictEqual(JSON.parse(doc.print()), {
        description: 'myDoc',
        mainSteps: [
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep1',
            nextStep: 'sleep3',
          },
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep2',
          },
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep3',
          },
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep4',
          },
        ],
        parameters: {},
        schemaVersion: '0.3',
      });
    });
  });
  describe('simulate', function () {
    it('Simulates the explicit next step by skipping to location', function () {
      const res = Simulation.ofAutomation(doc, { sleepHook: new MockSleep() }).simulate({});
      assert.strictEqual(res.responseCode, ResponseCode.SUCCESS);
      assert.deepStrictEqual(res.executedSteps, ['sleep1', 'sleep3', 'sleep4']);
    });
  });
});
