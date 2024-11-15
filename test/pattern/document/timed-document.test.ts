import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TimedDocument } from '../../../';
import { SleepStep, SynthUtils } from '../../../lib';


class MyTimedDocumentStack extends Stack {

  constructor(scope: Construct, id: string) {
    super(scope, id);
    const doc = new TimedDocument(this, 'myDoc2', {});
    const sleep = new SleepStep(this, 'SleepInsideTimeId', { sleepSeconds: 1 });
    doc.addStep(sleep);
  }

}

describe('TimedDocument', function() {
  describe('#print()', function() {
    it('Includes start and end steps', function() {
      const stack = new Stack();
      const doc = new TimedDocument(stack, 'myDoc2', {});
      const sleep = new SleepStep(stack, 'SleepInsideTimeId', { sleepSeconds: 1 });
      sleep.addToDocument(doc.builder);
      assert.deepEqual(JSON.parse(doc.print()), {
        description: 'myDoc2',
        schemaVersion: '0.3',
        parameters: {},
        mainSteps: [
          {
            name: 'RecordStartTime',
            action: 'aws:executeScript',
            inputs: {
              Runtime: 'python3.11',
              Handler: 'script_handler',
              Script: 'from datetime import datetime, timezone\n\ndef script_handler(params: dict, context):\n    return datetime.now(timezone.utc).isoformat()\n\n',
              InputPayload: {},
            },
            outputs: [
              { Name: 'StartTime', Selector: '$.Payload', Type: 'String' },
            ],
          },
          {
            name: 'SleepInsideTimeId',
            action: 'aws:sleep',
            inputs: { Duration: 'PT1S' },
          },
          {
            name: 'OutputRecoveryTime',
            action: 'aws:executeScript',
            inputs: {
              Runtime: 'python3.11',
              Handler: 'script_handler',
              Script: "from datetime import datetime, timezone\nfrom dateutil import parser\n\ndef script_handler(params: dict, context):\n    return (datetime.now(timezone.utc) - parser.parse(params['startTime'])).seconds\n\n",
              InputPayload: {
                startTime: '{{ RecordStartTime.StartTime }}',
              },
            },
            outputs: [
              { Name: 'RecoveryTime', Selector: '$.Payload', Type: 'Integer' },
            ],
          },
        ],
      },
      );
    });
  });
  describe('#runSimulation()', function() {
    it('Outputs runtime from final step', function() {
      const stack = new Stack();
      new MyTimedDocumentStack(stack, 'myDoc2');
      SynthUtils.synthesize(stack);
      // == Below is not working because python cannot find datetime on build fleet ==
      // const simResult = myTimedDoc.runSimulation({});
      // assert.deepEqual(Object.keys(simResult.outputs), [
      //     "RecordStartTime.StartTime", "OutputRecoveryTime.RecoveryTime", "simulationSteps"])
    });
  });
});
