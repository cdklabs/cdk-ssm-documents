import { Construct } from 'constructs';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { IMapListVariable } from '../../interface/variables/map-list-variable';
import { INumberVariable } from '../../interface/variables/number-variable';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { assertString, HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

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

export interface IOnFailureVariable extends IStringVariable {
}

export class HardCodedOnFailure extends HardCodedString implements IOnFailureVariable {
  public static readonly DO_NOTHING = new HardCodedOnFailure('DO_NOTHING');
  public static readonly ROLLBACK = new HardCodedOnFailure('ROLLBACK');
  public static readonly DELETE = new HardCodedOnFailure('DELETE');
  private constructor(val: string) {
    super(val);
  }
}

export class OnFailureVariable extends StringVariable implements IOnFailureVariable {
  readonly validValues = ['DO_NOTHING', 'ROLLBACK', 'DELETE'];

  protected assertType(value: any): void {
    assertString(value);
    if (!this.validValues.includes(value)) {
      throw new Error(`${value} is not a valid enum value`);
    }
  }
}

/**
 * Properties for CreateStackStep
 */
export interface CreateStackStepProps extends AutomationStepProps {

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
  readonly onStackFailure?: IOnFailureVariable;

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

/**
 * AutomationStep implementation for aws:createStack
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createstack.html
 */
export class CreateStackStep extends AutomationStep {

  readonly action: string = 'aws:createStack';
  readonly stackName: IStringVariable;
  readonly capabilities?: IStringListVariable;
  readonly clientRequestToken?: IStringVariable;
  readonly notificationARNs?: IStringListVariable;
  readonly onStackFailure?: IOnFailureVariable;
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