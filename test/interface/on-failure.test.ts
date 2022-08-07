import * as assert from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  Abort,
  AutomationDocument,
  Continue,
  ISleepHook, OnFailure,
  ResponseCode,
  Simulation,
  SleepStep,
  StepFallback,
} from '../../lib';


describe('Abort', function() {
  describe('#toSsmValue()', function () {
    it('Returns Abort', function () {
      assert.strictEqual(new Abort().toSsmValue(), 'Abort');
    });
    it('Should not print abort in doc because it is the default', function () {
      const doc: AutomationDocument = new AutomationDocument(new Stack(), 'myDoc', {});
      doc.addStep(new SleepStep(new Stack(), 'sleep1', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3, onFailure: OnFailure.abort() }));
      doc.addStep(new SleepStep(new Stack(), 'sleep3', { sleepSeconds: 3 }));
      assert.deepStrictEqual(JSON.parse(doc.print()), {
        description: 'myDoc',
        mainSteps: [
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep1',
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
        ],
        parameters: {},
        schemaVersion: '0.3',
      });
    });
  });
  describe('#stepToInvoke()', function () {
    it('Returns empty string', function () {
      assert.strictEqual(new Abort().stepToInvoke(new SleepStep(new Stack(), 'sleep', { sleepSeconds: 3 })), '');
    });
    it('Should abort during execution', function () {
      const doc: AutomationDocument = new AutomationDocument(new Stack(), 'myDoc', {});
      doc.addStep(new SleepStep(new Stack(), 'sleep1', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3, onFailure: OnFailure.abort() }));
      doc.addStep(new SleepStep(new Stack(), 'sleep3', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep4', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep5', { sleepSeconds: 3 }));
      const res = Simulation.ofAutomation(doc, { sleepHook: new MySleep() }).simulate({});
      assert.strictEqual(res.responseCode, ResponseCode.FAILED);
      assert.deepStrictEqual(res.executedSteps, ['sleep1', 'sleep2']);
    });
  });
});

describe('Continue', function() {
  describe('#toSsmValue()', function () {
    it('Returns Continue', function () {
      assert.strictEqual(new Continue().toSsmValue(), 'Continue');
    });
    it('Should print Continue in doc', function () {
      const doc: AutomationDocument = new AutomationDocument(new Stack(), 'myDoc', {});
      doc.addStep(new SleepStep(new Stack(), 'sleep1', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3, onFailure: OnFailure.continue() }));
      doc.addStep(new SleepStep(new Stack(), 'sleep3', { sleepSeconds: 3 }));
      assert.deepStrictEqual(JSON.parse(doc.print()), {
        description: 'myDoc',
        mainSteps: [
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep1',
          },
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep2',
            onFailure: 'Continue',
          },
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep3',
          },
        ],
        parameters: {},
        schemaVersion: '0.3',
      });
    });
  });
  describe('#stepToInvoke()', function () {
    it('Returns next step', function () {
      assert.strictEqual(new Abort().stepToInvoke(new SleepStep(new Stack(), 'sleep', { sleepSeconds: 3 })), '');
    });
    it('Should continue during execution', function () {
      const doc: AutomationDocument = new AutomationDocument(new Stack(), 'myDoc', {});
      doc.addStep(new SleepStep(new Stack(), 'sleep1', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3, onFailure: OnFailure.continue() }));
      doc.addStep(new SleepStep(new Stack(), 'sleep3', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep4', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep5', { sleepSeconds: 3 }));
      const res = Simulation.ofAutomation(doc, { sleepHook: new MySleep() }).simulate({});
      assert.strictEqual(res.responseCode, ResponseCode.SUCCESS);
      assert.deepStrictEqual(res.executedSteps, ['sleep1', 'sleep3', 'sleep4', 'sleep5']);
    });
  });
});

describe('Step', function() {
  describe('#toSsmValue()', function () {
    it('Returns Step name', function () {
      assert.strictEqual(new StepFallback(new SleepStep(new Stack(), 'sleep', { sleepSeconds: 3 }), false).toSsmValue(), 'step:sleep');
    });
    it('Should print Continue in doc', function () {
      const doc: AutomationDocument = new AutomationDocument(new Stack(), 'myDoc', {});
      doc.addStep(new SleepStep(new Stack(), 'sleep1', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3, onFailure: OnFailure.invokeStepByName('sleep4') }));
      doc.addStep(new SleepStep(new Stack(), 'sleep3', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep4', { sleepSeconds: 3 }));
      assert.deepStrictEqual(JSON.parse(doc.print()), {
        description: 'myDoc',
        mainSteps: [
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep1',
          },
          {
            action: 'aws:sleep',
            inputs: {
              Duration: 'PT3S',
            },
            name: 'sleep2',
            onFailure: 'step:sleep4',
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
  describe('#stepToInvoke()', function () {
    it('Returns step name', function () {
      assert.strictEqual(new StepFallback(new SleepStep(new Stack(), 'sleep', { sleepSeconds: 3 }), false).stepToInvoke(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3 })), 'sleep');
    });
    it('onFailure should not allow fallback step of sleep', function () {
      assert.throws(() => new StepFallback(new SleepStep(new Stack(), 'sleep', { sleepSeconds: 3 }), true).stepToInvoke(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3 })));
    });
    it('Should skip to the specified step during execution', function () {
      const doc: AutomationDocument = new AutomationDocument(new Stack(), 'myDoc', {});
      doc.addStep(new SleepStep(new Stack(), 'sleep1', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep2', { sleepSeconds: 3, onFailure: OnFailure.invokeStepByName('sleep4') }));
      doc.addStep(new SleepStep(new Stack(), 'sleep3', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep4', { sleepSeconds: 3 }));
      doc.addStep(new SleepStep(new Stack(), 'sleep5', { sleepSeconds: 3 }));
      const res = Simulation.ofAutomation(doc, { sleepHook: new MySleep() }).simulate({});
      assert.strictEqual(res.responseCode, ResponseCode.SUCCESS);
      assert.deepStrictEqual(res.executedSteps, ['sleep1', 'sleep4', 'sleep5']);
    });
  });
});

class MySleep implements ISleepHook {
  counter = -1;
  sleep(_timeMillis: number): void {
    this.counter += 1;
    if (this.counter == 1) {
      throw new Error('Mock failure in MySleep');
    }
  }

}
