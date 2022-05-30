import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { CreateImageStep, HardCodedBoolean, HardCodedString, HardCodedStringMap, MockAwsInvoker, ResponseCode } from '../../../lib';
import { AutomationStepSimulation } from '../../../lib/simulation/automation-step-simulation';

describe('CreateImageStep', () => {
  describe('#invoke()', () => {
    it('Create image EC2 api is invoked', () => {
      const instanceId = 'instance';
      const imageName = 'image';
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen({
        awsApi: 'createImage',
        awsParams: {
          InstanceId: instanceId,
          Name: imageName,
        },
        service: 'EC2',
      }, {
        ImageId: 'image ID',
      });
      awsInvoker.whenThen({
        awsApi: 'describeImages',
        awsParams: {
          ImageIds: ['image ID'],
        },
        service: 'EC2',
      }, {
        Images: [{
          State: 'available',
        }],
      });

      const step = new CreateImageStep(new Stack(), 'id2', {
        instanceId: new HardCodedString(instanceId),
        imageName: new HardCodedString(imageName),
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(result.outputs, {
        'id2.ImageId': 'image ID',
        'id2.ImageState': 'available',
      });
    });

    it('Create image EC2 api is invoked with all values', function() {
      const stepParams = {
        instanceId: new HardCodedString('instance id'),
        imageName: new HardCodedString('image name'),
        imageDescription: new HardCodedString('image desc'),
        noReboot: new HardCodedBoolean(false),
        blockDeviceMappings: new HardCodedStringMap({ a: 1 }),
      };
      const awsParams = {
        InstanceId: stepParams.instanceId.resolve({}),
        Name: stepParams.imageName.resolve({}),
        Description: stepParams.imageDescription.resolve({}),
        NoReboot: stepParams.noReboot.resolve({}),
        BlockDeviceMappings: stepParams.blockDeviceMappings.resolve({}),
      };
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen({
        awsApi: 'createImage',
        awsParams,
        service: 'EC2',
      }, {
        ImageId: 'image ID',
      });
      awsInvoker.whenThen({
        awsApi: 'describeImages',
        awsParams: {
          ImageIds: ['image ID'],
        },
        service: 'EC2',
      }, {
        Images: [{
          State: 'available',
        }],
      });
      const step = new CreateImageStep(new Stack(), 'id2', {
        ...stepParams,
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(awsInvoker.previousInvocations[0], {
        awsApi: 'createImage',
        awsParams,
        service: 'EC2',
      });
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const stepParams = {
        instanceId: new HardCodedString('instance id'),
        imageName: new HardCodedString('image name'),
        imageDescription: new HardCodedString('image desc'),
        noReboot: new HardCodedBoolean(false),
        blockDeviceMappings: new HardCodedStringMap({ a: 1 }),
      };
      const step = new CreateImageStep(new Stack(), 'id2', {
        ...stepParams,
      });

      const result = step.toSsmEntry();

      assert.deepEqual(result, {
        action: 'aws:createImage',
        inputs: {
          InstanceId: 'instance id',
          ImageName: 'image name',
          ImageDescription: 'image desc',
          NoReboot: false,
          BlockDeviceMappings: { a: 1 },
        },
        name: 'id2',
        outputs: [{
          Type: 'String',
          Name: 'ImageId',
          Selector: '$.ImageId',
        }, {
          Type: 'String',
          Name: 'ImageState',
          Selector: '$.ImageState',
        }],
      });
    });
  });
});
