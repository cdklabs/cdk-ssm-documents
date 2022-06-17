import { Stack } from "aws-cdk-lib";
import { AutomationStepSimulation, AwsApiStep, DataTypeEnum, IAwsInvoker, IExecuteAutomationHook, isBoolean, ISleepHook, isMapList, isNumber, isString, isStringList, isStringMap, ResponseCode, SleepStep } from "../..";
import { ExecuteAutomationProps, ExecuteAutomationOutputs } from "../execute-automation-hook";

export interface ApiExecuteAutomationProps {
    readonly awsInvoker: IAwsInvoker;
    readonly sleepHook: ISleepHook;
}

interface AutomationExecution {
    AutomationExecutionStatus: ExecutionStatus;
    Outputs: Record<string, string[]>;
}

type ExecutionStatus = 
"Pending"|
"InProgress"|
"Waiting"|
"Success"|
"TimedOut"|
"Cancelling"|
"Cancelled"|
"Failed"|
"PendingApproval"|
"Approved"|
"Rejected"|
"Scheduled"|
"RunbookInProgress"|
"PendingChangeCalendarOverride"|
"ChangeCalendarOverrideApproved"|
"ChangeCalendarOverrideRejected"|
"CompletedWithSuccess"|
"CompletedWithFailure";

/**
 * ExecuteAutomation implementation using AWS API
 */
export class ApiExecuteAutomationHook implements IExecuteAutomationHook {
    private static readonly RunningStatuses: ExecutionStatus[] = ['Pending', 'InProgress', 'Cancelling', 'Waiting'];

    readonly props: ApiExecuteAutomationProps;

    constructor(awsInvoker: IAwsInvoker, sleepHook: ISleepHook) {
        this.props = { awsInvoker, sleepHook };
    }

    public execute(props: ExecuteAutomationProps): ExecuteAutomationOutputs {
        console.log(`ExecuteAutomation: Checking execution inputs for ${props.documentName}`);
        this.parameterValidation(props);
        console.log(`ExecuteAutomation: Starting execution of ${props.documentName}`);
        const executionId = this.startExecution(props);
        console.log(`ExecuteAutomation: Waiting for ${executionId} to complete`);
        const result = this.waitForExecution(executionId);
        console.log(`ExecuteAutomation: ${executionId} finished`);

        return result;
    }

    private parameterValidation(props: ExecuteAutomationProps): void {
        if (props.targetLocations && (props.targetLocations.length < 1 || props.targetLocations.length > 100)) {
            throw new Error("TargetLocations must contain atleast 1 and no more than 100 items.");
        }
        if (props.targetMaps && props.targets) {
            throw new Error("TargetMaps and Targets cannot both be specified.");
        }
        if ((props.targets && !props.targetParameterName) || (!props.targets && props.targetParameterName)) {
            throw new Error("TargetParameterName and Targets must both be specified together.");
        }
    }

    private startExecution(props: ExecuteAutomationProps): string {
          const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'execute', {
            service: 'SSM',
            pascalCaseApi: 'StartAutomationExecution',
            apiParams: this.getExecuteProps(props),
            outputs: [{
              outputType: DataTypeEnum.STRING,
              name: 'executionId',
              selector: '$.AutomationExecutionId',
            }],
          }), this.props).invoke({});
          if (result.responseCode !== ResponseCode.SUCCESS) {
            throw new Error(`Failed to start execution: ${result.stackTrace}`);
          }
          return result.outputs?.['execute.executionId'];
    }

    private getExecuteProps(props: ExecuteAutomationProps): Record<string, any> {
        const apiParamMap: Record<string, any> = {
            DocumentName: props.documentName,
            DocumentVersion: props.documentVersion,
            TargetParameterName: props.targetParameterName,
            MaxConcurrency: props.maxConcurrency,
            MaxErrors: props.maxErrors,
            Targets: props.targets,
            Tags: props.tags,
            TargetLocations: props.targetLocations,
        };
        const apiParams: Record<string, any> = {};
        for (const key of Object.keys(apiParamMap)) {
            const value = apiParamMap[key];
            if (value === undefined) { continue; }
            apiParams[key] = value;
        }

        if (props.runtimeParameters) {
            apiParams.Parameters = this.adaptExecuteParameters(props.runtimeParameters);
        }
        if (props.targetMaps) {
            apiParams.TargetMaps = this.adaptTargetMaps(props.targetMaps);
        }

        return apiParams;
    }

    private adaptExecuteParameters(parameters: Record<string, any>): Record<string, string[]> {
        const result: Record<string, string[]> = {};
        for (const key of Object.keys(parameters)) {
          const value = parameters[key];
          if (isString(value)) {
            result[key] = [value];
            continue;
          }
          if (isBoolean(value) || isNumber(value)) {
            result[key] = [`${value}`];
            continue;
          }
          if (isStringList(value)) {
            result[key] = value;
            continue;
          }
          if (isMapList(value)) {
            result[key] = value.map(x => JSON.stringify(x));
            continue;
          }
          if (isStringMap(value)) {
            result[key] = [JSON.stringify(value)];
            continue;
          }
          throw new Error(`Parameter ${key} must be a Boolean, Number, String, StringList, StringMap, or MapList.`);
        }
        return result;
      }

    private adaptTargetMaps(targetMaps: Record<string, any>[]): Record<string, string[]>[] {
        return targetMaps.map(this.adaptExecuteParameters);
    }

    private waitForExecution(executionId: string): ExecuteAutomationOutputs {
        let execution = this.getExecution(executionId);
        while (ApiExecuteAutomationHook.RunningStatuses.includes(execution.AutomationExecutionStatus)) {
          console.log(`Automation ${executionId} is not complete. Status: ${execution.AutomationExecutionStatus}.`);
          new AutomationStepSimulation(new SleepStep(new Stack(), 'sleep', {
            sleepSeconds: 2,
          }), this.props).invoke({});
          execution = this.getExecution(executionId);
        }
        if (execution.AutomationExecutionStatus !== 'Success') {
          throw new Error(`${executionId} ended in status ${execution.AutomationExecutionStatus}`);
        }
    
        return {
          executionId: executionId,
          status: execution.AutomationExecutionStatus,
          output: execution.Outputs,
        };
      }
    
      private getExecution(executionId: string): AutomationExecution {
        const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'getExecution', {
          service: 'SSM',
          pascalCaseApi: 'GetAutomationExecution',
          apiParams: {
            AutomationExecutionId: executionId,
          },
          outputs: [{
            outputType: DataTypeEnum.STRING_MAP,
            name: 'execution',
            selector: '$.AutomationExecution',
          }],
        }), this.props).invoke({});
        if (result.responseCode !== ResponseCode.SUCCESS) {
          throw new Error(`Failed to get execution ${executionId} status: ${result.stackTrace}`);
        }
        return result.outputs?.["getExecution.execution"];
      }
}