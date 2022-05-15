import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  AutomationDocument,
  AutomationDocumentProps,
  RebootInstanceAndWait,
  StringVariable,
  SynthUtils,
} from '../../../lib';

class MyRebootAutomationDoc extends AutomationDocument {
  constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
    super(scope, id, props);
    new RebootInstanceAndWait(this, 'RebootAndWait', new StringVariable('InstanceId'));
  }
}

describe('RebootInstanceAndWait', function() {
  describe('#synthesize()', function() {
    it('All child steps are available in document', function() {
      const stack = new Stack();
      const myRebootDoc = new MyRebootAutomationDoc(stack, 'myRebootDoc', {});
      SynthUtils.synthesize(stack);
      assert.deepEqual(JSON.parse(myRebootDoc.print()), {
        description: 'myRebootDoc',
        schemaVersion: '0.3',
        parameters: {},
        mainSteps: [
          {
            name: 'RebootInstances',
            action: 'aws:executeAwsApi',
            inputs: {
              Service: 'ec2',
              Api: 'RebootInstances',
              InstanceIds: [
                '{{InstanceId}}',
              ],
            },
          },
          {
            name: 'DescribeInstances',
            action: 'aws:waitForAwsResourceProperty',
            inputs: {
              Service: 'ec2',
              Api: 'DescribeInstances',
              PropertySelector: '$.Reservations[0].Instances[0].State.Name',
              DesiredValues: [
                'running',
              ],
              InstanceIds: [
                '{{InstanceId}}',
              ],
            },
          },
        ],
      },
      );
    });
  });
});
