import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { AwsService, AutomationStepSimulation, StringVariable, MockAwsInvoker, ResponseCode, DeleteStackStep } from '../../../lib';

describe('DeleteStackStep', function() {
  describe('#invoke()', function() {
    it('Invoke AWS with replacement params', function() {
      const mockInvoker = new MockAwsInvoker();
      mockInvoker.whenThen({
        service: AwsService.CLOUD_FORMATION,
        awsApi: 'describeStacks',
        awsParams: {
          StackName: 'MyStack',
        },
      }, {
        Stacks: [{ StackId: 'MyStackId', StackStatus: 'CREATE_COMPLETE' }],
      });
      mockInvoker.whenThen({
        service: AwsService.CLOUD_FORMATION,
        awsApi: 'describeStacks',
        awsParams: {
          StackName: 'MyStackId',
        },
      }, {
        Stacks: [{ StackId: 'MyStackId', StackStatus: 'DELETE_COMPLETE' }],
      });

      const step = new DeleteStackStep(new Stack(), 'id', {
        name: 'DeleteStack',
        stackNameVariable: new StringVariable('MyStackVar'),
      });

      const response = new AutomationStepSimulation(step, { awsInvoker: mockInvoker }).invoke({ 'MyStackVar': 'MyStack', 'automation:EXECUTION_ID': 'executionId' });
      if (response.responseCode != ResponseCode.SUCCESS) {
        assert.fail(response.stackTrace);
      }
      assert.deepEqual(mockInvoker.previousInvocations[0], {
        awsApi: 'describeStacks',
        awsParams: {
          StackName: 'MyStack',
        },
        service: AwsService.CLOUD_FORMATION,
      });
      assert.deepEqual(mockInvoker.previousInvocations[1], {
        awsApi: 'deleteStack',
        awsParams: {
          ClientRequestToken: 'MyStackexecutionId',
          StackName: 'MyStackId',
        },
        service: AwsService.CLOUD_FORMATION,
      });
      assert.deepEqual(mockInvoker.previousInvocations[2], {
        awsApi: 'describeStacks',
        awsParams: {
          StackName: 'MyStackId',
        },
        service: AwsService.CLOUD_FORMATION,
      });
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new DeleteStackStep(new Stack(), 'id', {
        name: 'MyDeleteStack',
        stackNameVariable: new StringVariable('MyStackVar'),
      });
      assert.deepEqual(step.toSsmEntry(), {
        action: 'aws:deleteStack',
        inputs: {
          ClientRequestToken: '{{ MyStackVar }}{{ automation:EXECUTION_ID }}',
          StackName: '{{ MyStackVar }}',
        },
        name: 'MyDeleteStack',
      });
    });
  });
});
