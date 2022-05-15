import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TimedDocument } from '../../../';
import { AutomationDocumentProps, MockSleep, SleepStep, SynthUtils } from '../../../lib';


class MyTimedDocument extends TimedDocument {

  constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
    super(scope, id, props);

    new SleepStep(this, 'SleepInsideTimeId', { sleepSeconds: 1, sleepHook: new MockSleep() });
  }

}

describe('TimedDocument', function() {
  describe('#print()', function() {
    it('Includes start and end steps', function() {
      const stack = new Stack();
      const myTimedDoc = new MyTimedDocument(stack, 'myDoc2', {});
      SynthUtils.synthesize(stack);
      assert.deepEqual(JSON.parse(myTimedDoc.print()), {
        description: 'myDoc2',
        schemaVersion: '0.3',
        parameters: {},
        mainSteps: [
          {
            name: 'RecordStartTime',
            action: 'aws:executeScript',
            inputs: {
              Runtime: 'python3.6',
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
              Runtime: 'python3.6',
              Handler: 'script_handler',
              Script: "from datetime import datetime, timezone\nfrom dateutil import parser\n\ndef script_handler(params: dict, context):\n    return (datetime.now(timezone.utc) - parser.parse(params['RecordStartTime.StartTime'])).seconds\n\n",
              InputPayload: {
                'RecordStartTime.StartTime': '{{ RecordStartTime.StartTime }}',
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
      new MyTimedDocument(stack, 'myDoc2', {});
      SynthUtils.synthesize(stack);
      // == Below is not working because python cannot find datetime on build fleet ==
      // const simResult = myTimedDoc.runSimulation({});
      // assert.deepEqual(Object.keys(simResult.outputs), [
      //     "RecordStartTime.StartTime", "OutputRecoveryTime.RecoveryTime", "simulationSteps"])
    });
  });
});
