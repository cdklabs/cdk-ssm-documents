import { URL as Url } from 'url';
import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { StackStatus } from '../../domain/stack-status';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { ISleepHook } from '../../interface/sleep-hook';
import { HardCodedString, IStringVariable } from '../../interface/variables/string-variable';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { CreateStackStep } from '../../parent-steps/automation/create-stack-step';
import { DeleteStackStep } from '../../parent-steps/automation/delete-stack-step';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { waitForAndAssertStackStatus } from '../../parent-steps/automation/sub-steps/wait-for-and-assert';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStepSimulation } from '../automation-step-simulation';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * Resolver for secure strings in Parameters
 */
export interface IParameterResolver {
  /**
     * Resolve the token to its value
     */
  resolve(input: string): string;
}

export enum BodyOrUrlType {
  BODY, URL
}

/**
 * Allow passing in a body or URL version of the property value
 */
export interface BodyOrUrlProp {
  /**
     * Body or URL string
     */
  readonly value: IStringVariable;

  /**
     * Whether the body or URL was provided
     */
  readonly propType: BodyOrUrlType;
}

/**
 * Properties for CreateStackStep
 */
export interface CreateStackSimulationProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  readonly awsInvoker: IAwsInvoker;

  /**
     * (Optional) Whether to really perform a pause of the runtime.
     * To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.
     * @default SleeperImpl
     */
  readonly sleepHook: ISleepHook;

  /**
   * (Optional) Resolver for secure strings in parameters.
   * Required to simulate if using tokens in parameters input.
   * @default - Treats parameters as literal
   */
  readonly parameterResolver: IParameterResolver;
}

interface DescribeStackResult {
  StackStatus: string;
  StackStatusReason?: string;
}

/**
 * AutomationStep implementation for aws:createStack
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createstack.html
 */
export class CreateStackSimulation extends AutomationSimulationBase {
  private static readonly InProgressStatuses = [
    StackStatus.ROLLBACK_IN_PROGRESS,
    StackStatus.DELETE_IN_PROGRESS,
    StackStatus.UPDATE_IN_PROGRESS,
    StackStatus.UPDATE_COMPLETE_CLEANUP_IN_PROGRESS,
    StackStatus.UPDATE_ROLLBACK_IN_PROGRESS,
    StackStatus.UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS,
    StackStatus.REVIEW_IN_PROGRESS,
  ];

  readonly action: string = 'aws:createStack';
  private creatStackStep: CreateStackStep;
  private props: CreateStackSimulationProps;

  constructor(step: CreateStackStep, props: CreateStackSimulationProps) {
    super(step);
    this.creatStackStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    this.verifyUrlProps(inputs);
    const stackName = this.creatStackStep.stackName.resolveToString(inputs);
    console.log(`CreateStack: Checking that ${stackName} is ready to be created`);
    this.preVerifyStackSubStep(stackName);
    console.log(`CreateStack: Creating ${stackName}`);
    const stackId = this.createStack(inputs);
    console.log(`CreateStack: Waiting for ${stackName} completion`);
    this.waitForStackCompletion(stackName);
    console.log('CreateStack: Stack is created');
    const stack = this.getStackState(stackName);
    return {
      StackId: stackId,
      StackStatus: stack?.StackStatus,
      StackStatusReason: stack?.StackStatusReason ?? '',
    };
  }

  private verifyUrlProps(inputs: Record<string, any>) {
    return this.verifyUrlProp(this.creatStackStep.templateUrl, inputs)
            && this.verifyUrlProp(this.creatStackStep.stackPolicyUrl, inputs);
  }

  private verifyUrlProp(urlToVerify: IStringVariable | undefined, inputs: Record<string, any>) {
    return urlToVerify === undefined || new Url(urlToVerify.resolveToString(inputs));
  }

  private preVerifyStackSubStep(stackName: string) {
    while (!this.preVerifyStack(stackName)) {
      new AutomationStepSimulation(new SleepStep(new Stack(), 'sleep', {
        sleepSeconds: 2,
      }), this.props).invoke({});
    }
  }

  private preVerifyStack(stackName: string): boolean {
    const state = this.getStackState(stackName);
    if (this.isStackOperationInProgress(state)) { return false; }
    if (state?.StackStatus !== 'ROLLBACK_COMPLETE') { return true; }

    console.log(`Deleting stack ${stackName} because we are retrying a create on an existing stack in ROLLBACK_COMPLETE state.`);
    new AutomationStepSimulation(new DeleteStackStep(new Stack(), 'deleteStack', {
      stackNameVariable: new HardCodedString(stackName),
    }), this.props).invoke({});
    return false;
  }

  private isStackOperationInProgress(state: DescribeStackResult | null): boolean {
    return state !== null && CreateStackSimulation.InProgressStatuses.includes(StackStatus[state.StackStatus as keyof typeof StackStatus]);
  }

  private createStack(inputs: Record<string, any>): string {
    const apiParams = pruneAndTransformRecord({
      StackName: this.creatStackStep.stackName,
      Capabilities: this.creatStackStep.capabilities,
      ClientRequestToken: this.creatStackStep.clientRequestToken,
      NotificationARNs: this.creatStackStep.notificationARNs,
      OnFailure: this.creatStackStep.onStackFailure,
      ResourceTypes: this.creatStackStep.resourceTypes,
      RoleARN: this.creatStackStep.roleArn,
      StackPolicyBody: this.creatStackStep.stackPolicyBody,
      StackPolicyURL: this.creatStackStep.stackPolicyUrl,
      Tags: this.creatStackStep.tags,
      TemplateBody: this.creatStackStep.templateBody,
      TemplateURL: this.creatStackStep.templateUrl,
      TimeoutInMinutes: this.creatStackStep.timeoutInMinutes,
    }, x => x.resolve(inputs));
    const parameters = this.resolveSecureStringsInParametersInput(this.creatStackStep.parameters?.resolveToMapList(inputs));
    if (parameters) { apiParams.Parameters = parameters; }

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'createStack', {
      service: 'CloudFormation',
      pascalCaseApi: 'CreateStack',
      apiParams: apiParams,
      outputs: [{
        outputType: DataTypeEnum.STRING,
        selector: '$.StackId',
        name: 'StackId',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Create stack failed for ${apiParams.StackName}: ${result.stackTrace}`);
    }
    return result.outputs?.['createStack.StackId'];
  }

  private resolveSecureStringsInParametersInput(parameters: Record<string, any>[] | undefined): Record<string, any>[] | null {
    if (!parameters) { return null; }
    for (const parameter of parameters) {
      const value = parameter.ParameterValue;
      if (!value) { continue; }
      parameter.ParameterValue = this.props.parameterResolver.resolve(value);
    }
    return parameters;
  }

  private getStackState(stackName: string): DescribeStackResult | null {
    const describeResponse = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'describeStack', {
      service: 'CloudFormation',
      pascalCaseApi: 'DescribeStacks',
      apiParams: {
        StackName: stackName,
      },
      outputs: [{
        outputType: DataTypeEnum.STRING_MAP,
        name: 'Stack',
        selector: '$.Stacks[0]',
      }],
    }), this.props).invoke({});
    return describeResponse.outputs?.['describeStack.Stack'] ?? null;
  }

  private waitForStackCompletion(stackName: string): void {
    waitForAndAssertStackStatus({
      stackName: stackName,
      waitForStatus: [
        StackStatus.CREATE_FAILED,
        StackStatus.CREATE_COMPLETE,
        StackStatus.ROLLBACK_FAILED,
        StackStatus.ROLLBACK_COMPLETE,
        StackStatus.DELETE_IN_PROGRESS,
        StackStatus.DELETE_FAILED,
        StackStatus.UPDATE_IN_PROGRESS,
        StackStatus.UPDATE_COMPLETE_CLEANUP_IN_PROGRESS,
        StackStatus.UPDATE_COMPLETE,
        StackStatus.UPDATE_FAILED,
        StackStatus.UPDATE_ROLLBACK_IN_PROGRESS,
        StackStatus.UPDATE_ROLLBACK_FAILED,
        StackStatus.UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS,
        StackStatus.UPDATE_ROLLBACK_COMPLETE,
        StackStatus.REVIEW_IN_PROGRESS,
        StackStatus.IMPORT_IN_PROGRESS,
        StackStatus.IMPORT_COMPLETE,
        StackStatus.IMPORT_ROLLBACK_IN_PROGRESS,
        StackStatus.IMPORT_ROLLBACK_FAILED,
        StackStatus.IMPORT_ROLLBACK_COMPLETE,
      ],
      assertStatus: StackStatus.CREATE_COMPLETE,
    }, this.props);
  }

}