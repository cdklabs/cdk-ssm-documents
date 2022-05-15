import { URL as Url } from 'url';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AwsApiStep, IAwsInvoker, ISleepHook, ReflectiveAwsInvoker, ResponseCode } from '../..';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { EnumVariable, HardCodedEnum, IEnumVariable } from '../../interface/variables/enum-variable';
import { IMapListVariable } from '../../interface/variables/map-list-variable';
import { INumberVariable } from '../../interface/variables/number-variable';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { HardCodedString, IStringVariable } from '../../interface/variables/string-variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';
import { DeleteStackStep } from './delete-stack-step';
import { SleepStep } from './sleep-step';
import { waitForAndAssertStackStatus } from './sub-steps/wait-for-and-assert';

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
 * Values for CreateStackStep's OnFailure property
 */
export enum OnFailure {
  DO_NOTHING,
  ROLLBACK,
  DELETE,
}

/**
 * Hard coded OnFailure value
 */
export class HardCodedOnFailure extends HardCodedEnum<typeof OnFailure> {
  constructor(value: OnFailure) {
    super(value, OnFailure);
  }
}

/**
 * OnFailure reference value
 */
export class OnFailureVariable extends EnumVariable<typeof OnFailure> {
  constructor(reference: string) {
    super(reference, OnFailure);
  }
}

/**
 * Properties for CreateStackStep
 */
export interface CreateStackStepProps extends AutomationStepProps {
  /**
     * (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).
     * @default - will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.
     */
  readonly awsInvoker?: IAwsInvoker;

  /**
     * (Optional) Whether to really perform a pause of the runtime.
     * To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.
     * @default SleeperImpl
     */
  readonly sleepHook?: ISleepHook;

  /**
     * (Optional) Resolver for secure strings in parameters.
     * Required to simulate if using tokens in parameters input.
     * @default - Treats parameters as literal
     */
  readonly parameterResolver?: IParameterResolver;

  /**
     * The name that is associated with the stack. The name must be unique in the Region in which you're creating the stack.
     */
  readonly stackName: IStringVariable;

  /**
     * (Optional) Stack policy body or URL.
     * For more information, see [Prevent Updates to Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html).
     */
  readonly stackPolicy?: BodyOrUrlProp;

  /**
     * Template body or URL.
     * For more information, see [Template Anatomy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html).
     */
  readonly template: BodyOrUrlProp;

  /**
     * (Optional) Determines the action to take if stack creation failed.
     * @default - Rollback on failure
     */
  readonly onStackFailure?: IEnumVariable<typeof OnFailure>;

  /**
     * (Optional) A list of values that you specify before CloudFormation can create certain stacks.
     * Some stack templates include resources that can affect permissions in your AWS account.
     * For example, creating new AWS Identity and Access Management (IAM) users can affect permissions in your account.
     * For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter.
     *
     * Valid values include CAPABILITY_IAM, CAPABILITY_NAMED_IAM, and CAPABILITY_AUTO_EXPAND.
     */
  readonly capabilities?: IStringListVariable;

  /**
     * (Optional) A unique identifier for this CreateStack request.
     * Specify this token if you set maxAttempts in this step to a value greater than 1.
     * By specifying this token, CloudFormation knows that you aren't attempting to create a new stack with the same name.
     */
  readonly clientRequestToken?: IStringVariable;

  /**
     * (Optional) The Amazon Simple Notification Service (Amazon SNS) topic ARNs for publishing stack-related events.
     */
  readonly notificationARNs?: IStringListVariable;

  /**
     * (Optional) A list of Parameter structures that specify input parameters for the stack.
     * For more information, see the [Parameter](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html) data type.
     */
  readonly parameters?: IMapListVariable;

  /**
     * (Optional) The template resource types that you have permissions to work with for this create stack action.
     * For example: AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance.
     */
  readonly resourceTypes?: IStringListVariable;

  /**
     * (Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation
     * assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf.
     * CloudFormation always uses this role for all future operations on the stack.
     * As long as users have permission to operate on the stack, CloudFormation uses this role even
     * if the users don't have permission to pass it. Ensure that the role grants the least amount of privileges.
     *
     * If you don't specify a value, CloudFormation uses the role that was previously associated with the stack.
     * If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.
     */
  readonly roleArn?: IStringVariable;

  /**
     * (Optional) Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources created in the stack. You can specify a maximum number of 10 tags.
     */
  readonly tags?: IMapListVariable;

  /**
     * (Optional) The amount of time that can pass before the stack status becomes CREATE_FAILED. If DisableRollback isn't set or is set to false, the stack will be rolled back.
     */
  readonly timeoutInMinutes?: INumberVariable;
}

interface DescribeStackResult {
  StackStatus: string;
  StackStatusReason?: string;
}

/**
 * Cloud formation stack status
 */
export enum StackStatus {
  CREATE_IN_PROGRESS,
  CREATE_FAILED,
  CREATE_COMPLETE,
  ROLLBACK_IN_PROGRESS,
  ROLLBACK_FAILED,
  ROLLBACK_COMPLETE,
  DELETE_IN_PROGRESS,
  DELETE_FAILED,
  DELETE_COMPLETE,
  UPDATE_IN_PROGRESS,
  UPDATE_COMPLETE_CLEANUP_IN_PROGRESS,
  UPDATE_COMPLETE,
  UPDATE_FAILED,
  UPDATE_ROLLBACK_IN_PROGRESS,
  UPDATE_ROLLBACK_FAILED,
  UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS,
  UPDATE_ROLLBACK_COMPLETE,
  REVIEW_IN_PROGRESS,
  IMPORT_IN_PROGRESS,
  IMPORT_COMPLETE,
  IMPORT_ROLLBACK_IN_PROGRESS,
  IMPORT_ROLLBACK_FAILED,
  IMPORT_ROLLBACK_COMPLETE
}

/**
 * AutomationStep implementation for aws:createStack
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createstack.html
 */
export class CreateStackStep extends AutomationStep {
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
  readonly awsInvoker: IAwsInvoker;
  readonly sleepHook?: ISleepHook;
  readonly parameterResolver: IParameterResolver;
  readonly stackName: IStringVariable;
  readonly capabilities?: IStringListVariable;
  readonly clientRequestToken?: IStringVariable;
  readonly notificationARNs?: IStringListVariable;
  readonly onStackFailure?: IEnumVariable<typeof OnFailure>;
  readonly parameters?: IMapListVariable;
  readonly resourceTypes?: IStringListVariable;
  readonly roleArn?: IStringVariable;
  readonly stackPolicyBody?: IStringVariable;
  readonly stackPolicyUrl?: IStringVariable;
  readonly tags?: IMapListVariable;
  readonly templateBody?: IStringVariable;
  readonly templateUrl?: IStringVariable;
  readonly timeoutInMinutes?: INumberVariable;

  constructor(scope: Construct, id: string, props: CreateStackStepProps) {
    super(scope, id, props);
    this.awsInvoker = props.awsInvoker ?? new ReflectiveAwsInvoker();
    this.sleepHook = props.sleepHook;
    this.parameterResolver = props.parameterResolver ?? { resolve: (x) => x };
    this.stackName = props.stackName;
    this.capabilities = props.capabilities;
    this.clientRequestToken = props.clientRequestToken;
    this.onStackFailure = props.onStackFailure;
    this.notificationARNs = props.notificationARNs;
    this.parameters = props.parameters;
    this.resourceTypes = props.resourceTypes;
    this.roleArn = props.roleArn;
    if (props.stackPolicy?.propType === BodyOrUrlType.BODY) {
      this.stackPolicyBody = props.stackPolicy.value;
    } else {
      this.stackPolicyUrl = props.stackPolicy?.value;
    }
    this.tags = props.tags;
    if (props.template.propType === BodyOrUrlType.BODY) {
      this.templateBody = props.template.value;
    } else {
      this.templateUrl = props.template.value;
    }
    this.timeoutInMinutes = props.timeoutInMinutes;
  }

  public listOutputs(): Output[] {
    return [{
      outputType: DataTypeEnum.STRING,
      name: 'StackId',
      selector: '$.StackId',
    }, {
      outputType: DataTypeEnum.STRING,
      name: 'StackStatus',
      selector: '$.StackStatus',
    }, {
      outputType: DataTypeEnum.STRING,
      name: 'StackStatusReason',
      selector: '$.StackStatusReason',
    }];
  }

  public listInputs(): string[] {
    const inputs = [
      this.stackName,
      this.capabilities,
      this.clientRequestToken,
      this.notificationARNs,
      this.onStackFailure,
      this.parameters,
      this.resourceTypes,
      this.roleArn,
      this.stackPolicyBody,
      this.stackPolicyUrl,
      this.tags,
      this.templateBody,
      this.templateUrl,
      this.timeoutInMinutes,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    this.verifyUrlProps(inputs);
    const stackName = this.stackName.resolveToString(inputs);
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
    return this.verifyUrlProp(this.templateUrl, inputs)
            && this.verifyUrlProp(this.stackPolicyUrl, inputs);
  }

  private verifyUrlProp(urlToVerify: IStringVariable | undefined, inputs: Record<string, any>) {
    return urlToVerify === undefined || new Url(urlToVerify.resolveToString(inputs));
  }

  private preVerifyStackSubStep(stackName: string) {
    while (!this.preVerifyStack(stackName)) {
      new SleepStep(new Stack(), 'sleep', {
        sleepSeconds: 2,
        sleepHook: this.sleepHook,
      }).invoke({});
    }
  }

  private preVerifyStack(stackName: string): boolean {
    const state = this.getStackState(stackName);
    if (this.isStackOperationInProgress(state)) { return false; }
    if (state?.StackStatus !== 'ROLLBACK_COMPLETE') { return true; }

    console.log(`Deleting stack ${stackName} because we are retrying a create on an existing stack in ROLLBACK_COMPLETE state.`);
    new DeleteStackStep(new Stack(), 'deleteStack', {
      stackNameVariable: new HardCodedString(stackName),
      awsInvoker: this.awsInvoker,
    }).invoke({});
    return false;
  }

  private isStackOperationInProgress(state: DescribeStackResult | null): boolean {
    return state !== null && CreateStackStep.InProgressStatuses.includes(StackStatus[state.StackStatus as keyof typeof StackStatus]);
  }

  private createStack(inputs: Record<string, any>): string {
    const apiParams = pruneAndTransformRecord({
      StackName: this.stackName,
      Capabilities: this.capabilities,
      ClientRequestToken: this.clientRequestToken,
      NotificationARNs: this.notificationARNs,
      OnFailure: this.onStackFailure,
      ResourceTypes: this.resourceTypes,
      RoleARN: this.roleArn,
      StackPolicyBody: this.stackPolicyBody,
      StackPolicyURL: this.stackPolicyUrl,
      Tags: this.tags,
      TemplateBody: this.templateBody,
      TemplateURL: this.templateUrl,
      TimeoutInMinutes: this.timeoutInMinutes,
    }, x => x.resolve(inputs));
    const parameters = this.resolveSecureStringsInParametersInput(this.parameters?.resolveToMapList(inputs));
    if (parameters) { apiParams.Parameters = parameters; }

    const result = new AwsApiStep(new Stack(), 'createStack', {
      service: 'CloudFormation',
      pascalCaseApi: 'CreateStack',
      apiParams: apiParams,
      outputs: [{
        outputType: DataTypeEnum.STRING,
        selector: '$.StackId',
        name: 'StackId',
      }],
      awsInvoker: this.awsInvoker,
    }).invoke({});
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
      parameter.ParameterValue = this.parameterResolver.resolve(value);
    }
    return parameters;
  }

  private getStackState(stackName: string): DescribeStackResult | null {
    const describeResponse = new AwsApiStep(new Stack(), 'describeStack', {
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
      awsInvoker: this.awsInvoker,
    }).invoke({});
    return describeResponse.outputs?.['describeStack.Stack'] ?? null;
  }

  private waitForStackCompletion(stackName: string): void {
    waitForAndAssertStackStatus({
      awsInvoker: this.awsInvoker,
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
    });
  }

  public toSsmEntry(): Record<string, any> {
    return super.prepareSsmEntry(pruneAndTransformRecord({
      StackName: this.stackName,
      Capabilities: this.capabilities,
      ClientRequestToken: this.clientRequestToken,
      NotificationARNs: this.notificationARNs,
      OnFailure: this.onStackFailure,
      Parameters: this.parameters,
      ResourceTypes: this.resourceTypes,
      RoleARN: this.roleArn,
      StackPolicyBody: this.stackPolicyBody,
      StackPolicyURL: this.stackPolicyUrl,
      Tags: this.tags,
      TemplateBody: this.templateBody,
      TemplateURL: this.templateUrl,
      TimeoutInMinutes: this.timeoutInMinutes,
    }, x => x.print()));
  }
}