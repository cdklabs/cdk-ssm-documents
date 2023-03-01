import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import {
  AutomationStepSimulation,
  AwsService,
  HardCodedString,
  HardCodedStringMap,
  InvokeLambdaFunctionStep,
  MockAwsInvoker,
  ResponseCode
} from '../../../lib';

describe('InvokeLambdaFunctionStep', () => {
  describe('#invoke()', () => {
    it('Invoke lambda api is invoked', () => {
      const functionName = 'myFunction';
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen({
        awsApi: 'invoke',
        awsParams: {
          FunctionName: functionName,
          InvocationType: 'RequestResponse',
          LogType: 'Tail',
        },
        service: AwsService.LAMBDA,
      }, {
        ExecutedVersion: '$LATEST',
        Payload: 'null',
        StatusCode: 200,
      });
      const step = new InvokeLambdaFunctionStep(new Stack(), 'id2', {
        functionName: new HardCodedString(functionName),
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(awsInvoker.previousInvocations[0], {
        awsApi: 'invoke',
        awsParams: {
          FunctionName: functionName,
          InvocationType: 'RequestResponse',
          LogType: 'Tail',
        },
        service: AwsService.LAMBDA,
      });
    });

    it('Invoke api is invoked with all values', function() {
      const stepParams = {
        functionName: new HardCodedString('myFunction'),
        qualifier: new HardCodedString('qualifier'),
        invocationType: new HardCodedString('type'),
        logType: new HardCodedString('none'),
        clientContext: new HardCodedString('context'),
        payload: new HardCodedStringMap({ a: 1 }),
      };
      const awsParams = {
        FunctionName: stepParams.functionName.resolve({}),
        Qualifier: stepParams.qualifier.resolve({}),
        InvocationType: stepParams.invocationType.resolve({}),
        LogType: stepParams.logType.resolve({}),
        ClientContext: stepParams.clientContext.resolve({}),
        Payload: JSON.stringify(stepParams.payload.resolve({})),
      };
      const awsInvoker = new MockAwsInvoker();
      awsInvoker.whenThen({
        awsApi: 'invoke',
        awsParams,
        service: AwsService.LAMBDA,
      }, {
        ExecutedVersion: '$LATEST',
        Payload: 'null',
        StatusCode: 200,
      });
      const step = new InvokeLambdaFunctionStep(new Stack(), 'id2', {
        ...stepParams,
      });

      const result = new AutomationStepSimulation(step, { awsInvoker: awsInvoker }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(awsInvoker.previousInvocations[0], {
        awsApi: 'invoke',
        awsParams,
        service: AwsService.LAMBDA,
      });
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const stepParams = {
        functionName: new HardCodedString('myFunction'),
        qualifier: new HardCodedString('qualifier'),
        invocationType: new HardCodedString('type'),
        logType: new HardCodedString('none'),
        clientContext: new HardCodedString('context'),
        payload: new HardCodedStringMap({ a: 1 }),
      };
      const step = new InvokeLambdaFunctionStep(new Stack(), 'id2', {
        ...stepParams,
      });

      const result = step.toSsmEntry();

      assert.deepEqual(result, {
        action: 'aws:invokeLambdaFunction',
        inputs: {
          FunctionName: 'myFunction',
          Qualifier: 'qualifier',
          InvocationType: 'type',
          LogType: 'none',
          ClientContext: 'context',
          InputPayload: { a: 1 },
        },
        name: 'id2',
      });
    });
  });
});
