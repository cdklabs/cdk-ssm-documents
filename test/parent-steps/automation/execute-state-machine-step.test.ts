import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  AutomationStepSimulation,
  AwsService,
  ExecuteStateMachineStep,
  ExecuteStateMachineStepProps,
  HardCodedString,
  MockAwsInvoker,
  ResponseCode,
} from '../../../lib';

describe('ExecuteStateMachineStep', () => {
  describe('#invoke()', () => {
    it('Start execution StepFunctions API is invoked', () => {
      const stateMachineArn = 'arn';
      const name = 'name';
      const input = '{"a": 1}';
      const mockInvoker = new MockAwsInvoker();
      mockInvoker.whenThen({
        service: AwsService.STEP_FUNCTIONS,
        awsApi: 'startExecution',
        awsParams: {
          stateMachineArn: stateMachineArn,
          name: name,
          input: input,
        },
      }, {
        executionArn: 'exeArn',
      });
      mockInvoker.whenThen({
        service: AwsService.STEP_FUNCTIONS,
        awsApi: 'describeExecution',
        awsParams: {
          executionArn: 'exeArn',
        },
      }, {
        status: 'SUCCEEDED',
      });
      const step = new ExecuteStateMachineStep(new Stack(), 'execute', {
        executionName: new HardCodedString(name),
        stateMachineArn: new HardCodedString(stateMachineArn),
        input: new HardCodedString(input),
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: mockInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(mockInvoker.previousInvocations[0], {
        service: AwsService.STEP_FUNCTIONS,
        awsApi: 'startExecution',
        awsParams: {
          stateMachineArn: stateMachineArn,
          name: name,
          input: input,
        },
      });
    });
  });

  describe('#toSsmEntry()', () => {
    it('Builds entry as per SSM Document', () => {
      const stepProps: ExecuteStateMachineStepProps = {
        stateMachineArn: new HardCodedString('arn'),
        executionName: new HardCodedString('name'),
        input: new HardCodedString('{}'),
      };
      const step = new ExecuteStateMachineStep(new Stack(), 'execute', stepProps);

      const ssmEntry = step.toSsmEntry();

      assert.deepEqual(ssmEntry, {
        action: 'aws:executeStateMachine',
        inputs: {
          stateMachineArn: 'arn',
          name: 'name',
          input: '{}',
        },
        name: 'execute',
      });
    });
  });
});