import { Construct } from 'constructs';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { IAwsInvoker } from '../../interface/aws-invoker';
import { IStringMapVariable } from '../../interface/variables/string-map-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { pruneAndTransformRecord } from '../../utils/prune-and-transform-record';
import { AutomationStep, AutomationStepProps } from '../automation-step';

/**
 * Properties for InvokeLambdaFunctionStep
 */
export interface InvokeLambdaFunctionStepProps extends AutomationStepProps {

  /**
     * The name of the Lambda function. This function must exist.
     */
  readonly functionName: IStringVariable;

  /**
     * (Optional) The function version or alias name.
     */
  readonly qualifier?: IStringVariable;

  /**
     * (Optional) The invocation type. The default value is RequestResponse.
     */
  readonly invocationType?: IStringVariable;

  /**
     * (Optional) If the default value is Tail, the invocation type must be RequestResponse. Lambda returns the last 4 KB of log data produced by your Lambda function, base64-encoded.
     */
  readonly logType?: IStringVariable;

  /**
     * (Optional) The client-specific information.
     */
  readonly clientContext?: IStringVariable;

  /**
     * (Optional) The JSON input for your Lambda function.
     */
  readonly payload?: IStringMapVariable;
}

/**
 * AutomationStep implemenation for aws:invokeLambdaFunction
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-lamb.html
 */
export class InvokeLambdaFunctionStep extends AutomationStep {
  readonly action: string = 'aws:invokeLambdaFunction';
  readonly awsInvoker?: IAwsInvoker;
  readonly functionName: IStringVariable;
  readonly qualifier?: IStringVariable;
  readonly invocationType?: IStringVariable;
  readonly logType?: IStringVariable;
  readonly clientContext?: IStringVariable;
  readonly payload?: IStringMapVariable;

  constructor(scope: Construct, id: string, props: InvokeLambdaFunctionStepProps) {
    super(scope, id, props);
    this.functionName = props.functionName;
    this.qualifier = props.qualifier;
    this.invocationType = props.invocationType;
    this.logType = props.logType;
    this.clientContext = props.clientContext;
    this.payload = props.payload;
  }

  public listOutputs(): Output[] {
    return [{
      outputType: DataTypeEnum.INTEGER,
      name: 'StatusCode',
      selector: '$.StatusCode',
    }, {
      outputType: DataTypeEnum.STRING,
      name: 'FunctionError',
      selector: '$.FunctionError',
    }, {
      outputType: DataTypeEnum.STRING,
      name: 'LogResult',
      selector: '$.LogResult',
    }, {
      outputType: DataTypeEnum.STRING,
      name: 'Payload',
      selector: '$.Payload',
    }];
  }

  public listInputs(): string[] {
    const inputs = [
      this.functionName,
      this.qualifier,
      this.invocationType,
      this.logType,
      this.clientContext,
      this.payload,
    ];

    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): Record<string, any> {
    const entryMap = this.formatInputMap();
    const entries = pruneAndTransformRecord(entryMap, x => x.print());
    return super.prepareSsmEntry(entries);
  }

  public formatInputMap(): Record<string, any> {
    return {
      FunctionName: this.functionName,
      Qualifier: this.qualifier,
      InvocationType: this.invocationType,
      LogType: this.logType,
      ClientContext: this.clientContext,
      Payload: this.payload,
    };
  }
}