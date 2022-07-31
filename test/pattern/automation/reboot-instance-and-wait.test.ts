import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  AutomationDocument,
  RebootInstanceAndWait,
  StringVariable,
} from '../../../lib';

describe('RebootInstanceAndWait', function() {
  describe('#synthesize()', function() {
    it('All child steps are available in document', function() {
      const stack = new Stack();
      const myRebootDoc = new AutomationDocument(stack, 'myRebootDoc', {});
      myRebootDoc.addStep(new RebootInstanceAndWait(stack, 'RebootAndWait', new StringVariable('InstanceId')));
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
                '{{ InstanceId }}',
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
                '{{ InstanceId }}',
              ],
            },
          },
        ],
      },
      );
    });
  });
});
