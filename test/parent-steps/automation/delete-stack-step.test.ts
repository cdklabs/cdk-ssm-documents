import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { StringVariable, MockAwsInvoker, ResponseCode, DeleteStackStep } from '../../../lib';
import { AutomationStepSimulation } from '../../../lib/simulation/automation-step-simulation';

describe('DeleteStackStep', function() {
  describe('#invoke()', function() {
    it('Invoke AWS with replacement params', function() {
      const mockInvoker = new MockAwsInvoker();
      mockInvoker.whenThen({
        service: 'CloudFormation',
        awsApi: 'describeStacks',
        awsParams: {
          StackName: 'MyStack',
        },
      }, {
        Stacks: [{ StackId: 'MyStackId', StackStatus: 'CREATE_COMPLETE' }],
      });
      mockInvoker.whenThen({
        service: 'CloudFormation',
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
        service: 'CloudFormation',
      });
      assert.deepEqual(mockInvoker.previousInvocations[1], {
        awsApi: 'deleteStack',
        awsParams: {
          ClientRequestToken: 'MyStackexecutionId',
          StackName: 'MyStackId',
        },
        service: 'CloudFormation',
      });
      assert.deepEqual(mockInvoker.previousInvocations[2], {
        awsApi: 'describeStacks',
        awsParams: {
          StackName: 'MyStackId',
        },
        service: 'CloudFormation',
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
