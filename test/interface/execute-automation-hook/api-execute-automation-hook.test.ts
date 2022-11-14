import { strict as assert } from 'assert';
import {ApiExecuteAutomationHook, AwsService, ExecuteAutomationProps, MockAwsInvoker, SleepImpl} from '../../../lib';

describe('ApiExecuteAutomationHook', () => {
  describe('execute', () => {
    it('Calls the StartAutomationExecution API', () => {
      const mockInvoker = new MockAwsInvoker();
      const mockSleep = new SleepImpl();
      mockInvoker.whenThen({
        service: AwsService.SSM,
        awsApi: 'startAutomationExecution',
        awsParams: {
          DocumentName: 'documentName',
          DocumentVersion: '2',
          Parameters: {
            AutomationAssumeRole: ['arn:aws:iam::xxxxxxxxxx:role/TestRole'],
            StackName: ['name'],
            AdditionalParameters: [JSON.stringify({ a: '2' })],
          },
          TargetParameterName: 'targetName',
          Targets: [{
            Key: 'tag:ServerRole',
            Values: ['value:WebServer'],
          }],
          MaxConcurrency: '10%',
          MaxErrors: '3',
          TargetLocations: [{
            Accounts: ['account'],
          }],
          Tags: [{
            Key: 'key',
            Value: 'value',
          }],
        },
      }, {
        AutomationExecutionId: 'executionId',
      });
      mockInvoker.whenThen({
        service: AwsService.SSM,
        awsApi: 'getAutomationExecution',
        awsParams: {
          AutomationExecutionId: 'executionId',
        },
      }, {
        AutomationExecution: {
          AutomationExecutionStatus: 'Success',
          Outputs: {
            Output1: ['Value1'],
          },
        },
      });

      const executeAutomationHook = new ApiExecuteAutomationHook(mockInvoker, mockSleep);
      const props: ExecuteAutomationProps = {
        documentName: 'documentName',
        documentVersion: '2',
        runtimeParameters: {
          AutomationAssumeRole: 'arn:aws:iam::xxxxxxxxxx:role/TestRole',
          StackName: 'name',
          AdditionalParameters: { a: '2' },
        },
        targetParameterName: 'targetName',
        targets: [{
          Key: 'tag:ServerRole',
          Values: ['value:WebServer'],
        }],
        maxConcurrency: '10%',
        maxErrors: '3',
        targetLocations: [{
          Accounts: ['account'],
        }],
        tags: [{
          Key: 'key',
          Value: 'value',
        }],
      };

      const result = executeAutomationHook.execute(props);

      assert.deepEqual(result, {
        executionId: 'executionId',
        status: 'Success',
        output: ['Value1'],
      });
    });
  });
});