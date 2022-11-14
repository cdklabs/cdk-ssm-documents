import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { DeleteImageStep, AutomationStepSimulation, AwsService, HardCodedString, MockAwsInvoker, MockSleep, ResponseCode } from '../../../lib';

describe('DeleteImageStep', () => {
  describe('#invoke()', () => {
    it('Deregister image and delete snapshot EC2 api are invoked', () => {
      const imageId = 'image id';
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen({
        awsApi: 'describeImages',
        awsParams: {
          ImageIds: [imageId],
        },
        service: AwsService.EC2,
      }, {
        Images: [{
          BlockDeviceMappings: [{
            Ebs: {
              SnapshotId: 'snapshot id',
            },
          }],
        }],
      });

      const step = new DeleteImageStep(new Stack(), 'id2', {
        imageId: new HardCodedString(imageId),
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker, sleepHook: new MockSleep() }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(awsInvoker.previousInvocations[1], {
        awsApi: 'deregisterImage',
        awsParams: {
          ImageId: imageId,
        },
        service: AwsService.EC2,
      });
      assert.deepEqual(awsInvoker.previousInvocations[2], {
        awsApi: 'deleteSnapshot',
        awsParams: {
          SnapshotId: 'snapshot id',
        },
        service: AwsService.EC2,
      });
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const stepParams = {
        imageId: new HardCodedString('image id'),
      };
      const step = new DeleteImageStep(new Stack(), 'id2', {
        ...stepParams,
      });

      const result = step.toSsmEntry();

      assert.deepEqual(result, {
        action: 'aws:deleteImage',
        inputs: {
          ImageId: 'image id',
        },
        name: 'id2',
      });
    });
  });
});
