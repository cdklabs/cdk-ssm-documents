import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  HardCodedMapList, HardCodedStringList, MockAwsInvoker, ResponseCode,
  CreateTagsStep, HardCodedResourceType, ResourceType, ResourceTypeVariable,
} from '../../../lib';
import { AutomationStepSimulation } from '../../../lib/simulation/automation-step-simulation';

describe('CreateTagsStep', () => {
  describe('#invoke()', () => {
    it('Instance resources have create tags EC2 api invoked', () => {
      const instanceId = 'instanceId';
      const tag = { Key: 'key', Value: 'value' };
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen({
        service: 'EC2',
        awsApi: 'describeTags',
        awsParams: {
          Filters: [{
            Name: 'resource-id',
            Values: [instanceId],
          }, {
            Name: 'key',
            Values: [tag.Key],
          }, {
            Name: 'value',
            Values: [tag.Value],
          }],
        },
      }, {
        Tags: [
          {
            Key: tag.Key,
            Value: tag.Value,
            ResourceId: instanceId,
          },
        ],
      });
      const step = new CreateTagsStep(new Stack(), 'createTags', {
        resourceIds: new HardCodedStringList([instanceId]),
        tags: new HardCodedMapList([tag]),
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(awsInvoker.previousInvocations[0], {
        service: 'EC2',
        awsApi: 'createTags',
        awsParams: {
          Resources: [instanceId],
          Tags: [tag],
        },
      });
    });

    it('MaintenanceWindow resource has add tags to resource SSM api invoked', () => {
      const resourceId = 'resourceId';
      const resourceType = 'MaintenanceWindow';
      const tag = { Key: 'key', Value: 'value' };
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen({
        service: 'SSM',
        awsApi: 'listTagsForResource',
        awsParams: {
          ResourceType: resourceType,
          ResourceId: resourceId,
        },
      }, {
        TagList: [
          {
            Key: tag.Key,
            Value: tag.Value,
          },
        ],
      });
      const step = new CreateTagsStep(new Stack(), 'createTags', {
        resourceIds: new HardCodedStringList([resourceId]),
        resourceType: new HardCodedResourceType(ResourceType.MAINTENANCE_WINDOW),
        tags: new HardCodedMapList([tag]),
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(awsInvoker.previousInvocations[0], {
        service: 'SSM',
        awsApi: 'addTagsToResource',
        awsParams: {
          ResourceType: resourceType,
          ResourceId: resourceId,
          Tags: [tag],
        },
      });
    });

    it('MaintenanceWindow type throws an error when there are not exactly 1 resources', () => {
      const resourceIds = ['resourceId', 'resourceId2'];
      const tag = { Key: 'key', Value: 'value' };
      const awsInvoker = new MockAwsInvoker();
      const step = new CreateTagsStep(new Stack(), 'createTags', {
        resourceIds: new HardCodedStringList(resourceIds),
        resourceType: new HardCodedResourceType(ResourceType.MAINTENANCE_WINDOW),
        tags: new HardCodedMapList([tag]),
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.FAILED);
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const stepParams = {
        resourceIds: new HardCodedStringList(['resource id']),
        resourceType: new ResourceTypeVariable('resourceType'),
        tags: new HardCodedMapList([{ Key: 'key', Value: 'value' }]),
      };
      const step = new CreateTagsStep(new Stack(), 'createTags', stepParams);

      const result = step.toSsmEntry();

      assert.deepEqual(result, {
        action: 'aws:createTags',
        inputs: {
          ResourceIds: ['resource id'],
          ResourceType: '{{resourceType}}',
          Tags: [{ Key: 'key', Value: 'value' }],
        },
        name: 'createTags',
      });
    });
  });
});
