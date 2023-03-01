import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { InvokeLambdaFunctionStep } from '../../parent-steps/automation/invoke-lambda-function-step';
import { decodeBase64String, stripBeginAndEndQuotes } from '../../utils/data-utils';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsInvocationSimulationProps } from './aws-api-simulation';
import {AwsService} from "../../domain/aws-service";

/**
 * AutomationStep implemenation for aws:invokeLambdaFunction
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-lamb.html
 */
export class InvokeLambdaFunctionSimulation extends AutomationSimulationBase {
  readonly action: string = 'aws:invokeLambdaFunction';
  private invokeLambdaFunctionStep: InvokeLambdaFunctionStep;
  private props: AwsInvocationSimulationProps;

  constructor(step: InvokeLambdaFunctionStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.invokeLambdaFunctionStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const inputMap = this.formatInputMap();
    const stepInputs = pruneAndTransformRecord(inputMap, x => x.resolve(inputs));
    stepInputs.InvocationType = stepInputs.InvocationType ?? 'RequestResponse';
    stepInputs.LogType = stepInputs.LogType ?? 'Tail';
    if (stepInputs.Payload) {
      stepInputs.Payload = JSON.stringify(stepInputs.Payload);
    }

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'invokeLambda', {
      service: AwsService.LAMBDA,
      pascalCaseApi: 'Invoke',
      apiParams: stepInputs,
      outputs: [{
        outputType: DataTypeEnum.STRING_MAP,
        name: 'result',
        selector: '$',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Invoke lambda failed for ${inputMap.FunctionName}: ${result.stackTrace}`);
    }
    return {
      StatusCode: result.outputs?.['invokeLambda.result'].StatusCode,
      FunctionError: result.outputs?.['invokeLambda.result'].FunctionError ?? null,
      LogResult: decodeBase64String(result.outputs?.['invokeLambda.result'].LogResult),
      Payload: stripBeginAndEndQuotes(result.outputs?.['invokeLambda.result'].Payload),
    };
  }

  private formatInputMap(): Record<string, any> {
    const step = this.invokeLambdaFunctionStep;
    return {
      FunctionName: step.functionName,
      Qualifier: step.qualifier,
      InvocationType: step.invocationType,
      LogType: step.logType,
      ClientContext: step.clientContext,
      Payload: step.payload,
    };
  }
}