import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  AutomationStepSimulation,
  AwsService,
  BodyOrUrlType,
  CreateStackStep,
  CreateStackStepProps,
  HardCodedMapList,
  HardCodedNumber,
  HardCodedOnFailure,
  HardCodedString,
  HardCodedStringList,
  MockAwsInvoker,
  MockSleep,
  ResponseCode
} from '../../../lib';

describe('CreateStackStep', () => {
  describe('#invoke()', () => {
    it('Create stack API is invoked', () => {
      const stackName = 'stackName';
      const mockSleep = new MockSleep();
      const mockInvoker = new MockAwsInvoker();
      mockInvoker.whenThen({
        service: AwsService.CLOUD_FORMATION,
        awsApi: 'describeStacks',
        awsParams: {
          StackName: stackName,
        },
      }, {
        Stacks: [{
          StackStatus: 'CREATE_COMPLETE',
        }],
      });
      mockInvoker.whenThen({
        service: AwsService.CLOUD_FORMATION,
        awsApi: 'createStack',
        awsParams: {
          StackName: stackName,
          TemplateBody: 'template body',
          OnFailure: 'DELETE',
        },
      }, {
        StackId: 'stack-id',
      });
      const step = new CreateStackStep(new Stack(), 'createStack', {
        stackName: new HardCodedString(stackName),
        template: {
          value: new HardCodedString('template body'),
          propType: BodyOrUrlType.BODY,
        },
        onStackFailure: HardCodedOnFailure.DELETE,
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: mockInvoker, sleepHook: mockSleep }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(result.outputs, {
        'createStack.StackId': 'stack-id',
        'createStack.StackStatus': 'CREATE_COMPLETE',
        'createStack.StackStatusReason': '',
      });
      assert.deepEqual(mockInvoker.previousInvocations[1], {
        service: AwsService.CLOUD_FORMATION,
        awsApi: 'createStack',
        awsParams: {
          StackName: stackName,
          TemplateBody: 'template body',
          OnFailure: 'DELETE',
        },
      });
    });
  });

  describe('#toSsmEntry()', () => {
    it('Builds entry as per SSM Document', () => {
      const stepProps: CreateStackStepProps = {
        stackName: new HardCodedString('name'),
        template: {
          value: new HardCodedString('{Resources: {}}'),
          propType: BodyOrUrlType.BODY,
        },
        tags: new HardCodedMapList([{ Key: 'key', Value: 'value' }]),
        timeoutInMinutes: new HardCodedNumber(5),
        stackPolicy: {
          value: new HardCodedString('policy url'),
          propType: BodyOrUrlType.URL,
        },
        resourceTypes: new HardCodedStringList(['type1']),
        onStackFailure: HardCodedOnFailure.DO_NOTHING,
        capabilities: new HardCodedStringList(['Capability']),
        clientRequestToken: new HardCodedString('request token'),
        notificationARNs: new HardCodedStringList(['arn']),
        parameters: new HardCodedMapList([{ ParameterValue: 'value' }]),
        roleArn: new HardCodedString('arn'),
      };
      const step = new CreateStackStep(new Stack(), 'createStack', stepProps);

      const ssmEntry = step.toSsmEntry();

      assert.deepEqual(ssmEntry, {
        action: 'aws:createStack',
        inputs: {
          Capabilities: ['Capability'],
          ClientRequestToken: 'request token',
          NotificationARNs: ['arn'],
          OnFailure: 'DO_NOTHING',
          Parameters: [{ ParameterValue: 'value' }],
          ResourceTypes: ['type1'],
          RoleARN: 'arn',
          StackName: 'name',
          StackPolicyURL: 'policy url',
          Tags: [{ Key: 'key', Value: 'value' }],
          TemplateBody: '{Resources: {}}',
          TimeoutInMinutes: 5,
        },
        name: 'createStack',
      });
    });
  });
});