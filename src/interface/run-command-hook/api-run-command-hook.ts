import { Stack } from 'aws-cdk-lib';
import { DataTypeEnum } from '../../domain/data-type';
import { ResponseCode } from '../../domain/response-code';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { AutomationStepSimulation } from '../../simulation/automation-step-simulation';
import { IAwsInvoker } from '../aws-invoker';
import { IRunCommandHook, RunCommandOutputs, RunCommandProps } from '../run-command-hook';
import { ISleepHook } from '../sleep-hook';
import { isStringList } from '../variables/string-list-variable';
import { isStringMap } from '../variables/string-map-variable';
import { isString } from '../variables/string-variable';

interface DescribeInstanceInformationResult {
  PingStatus: string;
}

interface CommandResult {
  Status: CommandStatus;
}

type CommandStatus = 'Pending' | 'InProgress' | 'Success' | 'Cancelled' | 'Failed' | 'TimedOut' | 'Cancelling';

interface ListCommandInvocationsResult {
  CommandInvocations?: {
    CommandPlugins?: CommandPluginResult[];
  }[];
}

interface CommandPluginResult {
  ResponseCode: number;
  Output: string;
}

export interface ApiRunCommandProps {
  readonly awsInvoker: IAwsInvoker;
  readonly sleepHook: ISleepHook;
}

/**
 * RunCommand implementation using AWS API
 */
export class ApiRunCommandHook implements IRunCommandHook {
  private static readonly MaximumMaxResultsValue = 50; // Only up to 50 instance IDs are allowed for aws:runCommand
  private static readonly SsmInstanceIdsFilterKey = 'InstanceIds';
  private static readonly SsmPingOnlineStatusValue = 'Online';
  private static readonly RunningStatuses: CommandStatus[] = ['Pending', 'InProgress', 'Cancelling'];

  readonly awsInvoker: IAwsInvoker;
  readonly sleepHook: ISleepHook;
  readonly props: ApiRunCommandProps;

  constructor(awsInvoker: IAwsInvoker, sleepHook: ISleepHook) {
    this.awsInvoker = awsInvoker;
    this.sleepHook = sleepHook;
    this.props = { awsInvoker, sleepHook };
  }

  execute(props: RunCommandProps): RunCommandOutputs {
    if (isStringList(props.targets)) {
      if (props.targets.length > ApiRunCommandHook.MaximumMaxResultsValue) {
        throw new Error(`Only up to ${ApiRunCommandHook.MaximumMaxResultsValue} instance IDs can be specified.`);
      }
      console.log('RunCommand: Validating the instances are healthy');
      this.validateInstanceIdsAreHealthy(props.targets);
    }

    console.log(`RunCommand: Executing the document ${props.documentName}`);
    const executionId = this.runCommand(props);
    console.log(`RunCommand: Waiting for ${executionId} to complete`);
    const result = this.waitForCommand(executionId);
    console.log(`RunCommand: ${executionId} finished`);

    return result;
  }

  private waitForCommand(executionId: string): RunCommandOutputs {
    let status = this.getCommandStatus(executionId);
    while (status === null || ApiRunCommandHook.RunningStatuses.includes(status)) {
      console.log(`Command ${executionId} is not complete. Status: ${status}.`);
      new AutomationStepSimulation(new SleepStep(new Stack(), 'sleep', {
        sleepSeconds: 2,
      }), this.props).invoke({});
      status = this.getCommandStatus(executionId);
    }
    if (status !== 'Success') {
      throw new Error(`${executionId} ended in status ${status}`);
    }
    const pluginStatus = this.getSinglePluginStatus(executionId);

    return {
      commandId: executionId,
      status: status,
      responseCode: pluginStatus?.ResponseCode,
      output: pluginStatus?.Output,
    };
  }

  private getCommandStatus(executionId: string): CommandStatus | null {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'listCommands', {
      service: 'SSM',
      pascalCaseApi: 'ListCommands',
      apiParams: {
        CommandId: executionId,
      },
      outputs: [{
        outputType: DataTypeEnum.MAP_LIST,
        name: 'commands',
        selector: '$.Commands',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Failed to get command ${executionId} status: ${result.stackTrace}`);
    }
    const commands: CommandResult[] = result.outputs?.['listCommands.commands'];
    if (commands.length === 0) { return null; }
    return commands[0].Status;
  }

  /**
     * We only return status code and output if there is exactly one invocation and one plug-in
     */
  private getSinglePluginStatus(executionId: string): CommandPluginResult | null {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'listCommandInvocations', {
      service: 'SSM',
      pascalCaseApi: 'ListCommandInvocations',
      apiParams: {
        CommandId: executionId,
        Details: true,
      },
      outputs: [{
        outputType: DataTypeEnum.STRING_MAP,
        name: 'result',
        selector: '$',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Failed to get invocations for ${executionId}: ${result.stackTrace}`);
    }
    const response: ListCommandInvocationsResult = result.outputs?.['listCommandInvocations.result'];
    if (!response.CommandInvocations || response.CommandInvocations.length !== 1) { return null; }
    const plugins = response.CommandInvocations[0].CommandPlugins;
    if (!plugins || plugins.length !== 1) { return null; }
    return plugins[0];
  }

  private runCommand(props: RunCommandProps): string {
    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'sendCommand', {
      service: 'SSM',
      pascalCaseApi: 'SendCommand',
      apiParams: this.getSendCommandProps(props),
      outputs: [{
        outputType: DataTypeEnum.STRING,
        name: 'commandId',
        selector: '$.Command.CommandId',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Failed to start command: ${result.stackTrace}`);
    }
    return result.outputs?.['sendCommand.commandId'];
  }

  private getSendCommandProps(props: RunCommandProps): Record<string, any> {
    const apiParamMap: Record<string, any> = {
      DocumentName: props.documentName,
      MaxConcurrency: props.maxConcurrency,
      MaxErrors: props.maxErrors,
      DocumentHash: props.documentHash,
      DocumentHashType: props.documentHashType,
      NotificationConfig: props.notificationConfig,
      TimeoutSeconds: props.timeoutSeconds,
      Comment: props.comment,
      OutputS3BucketName: props.outputS3BucketName,
      OutputS3KeyPrefix: props.outputS3KeyPrefix,
      ServiceRoleArn: props.serviceRoleArn,
      CloudWatchOutputConfig: props.cloudWatchOutputConfig,
    };
    const apiParams: Record<string, any> = {};
    for (const key of Object.keys(apiParamMap)) {
      const value = apiParamMap[key];
      if (value === undefined) { continue; }
      apiParams[key] = value;
    }

    if (isStringList(props.targets)) {
      apiParams.InstanceIds = props.targets;
    } else {
      apiParams.Targets = props.targets;
    }
    if (props.parameters) {
      apiParams.Parameters = this.adaptRunCommandParameters(props.parameters);
    }

    return apiParams;
  }

  private adaptRunCommandParameters(parameters: Record<string, any>): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    for (const key of Object.keys(parameters)) {
      const value = parameters[key];
      if (isString(value)) {
        result[key] = [value];
        continue;
      }
      if (Array.isArray(value)) {
        if (!isStringList(value)) {
          throw new Error(`Parameter ${key} is a list but not a StringList. Only StringList is supported.`);
        }
        result[key] = value;
        continue;
      }
      if (isStringMap(value)) {
        result[key] = [JSON.stringify(value)];
        continue;
      }
      throw new Error(`Parameter ${key} must be a String, StringList, or StringMap.`);
    }
    return result;
  }

  private validateInstanceIdsAreHealthy(instanceIds: string[]): void {
    const pingStatus = this.getPingStatusOfInstances(instanceIds);
    if (pingStatus.length !== instanceIds.length || !pingStatus.every(x => x === ApiRunCommandHook.SsmPingOnlineStatusValue)) {
      throw new Error('Not every instance has a healthy SSM agent');
    }
  }

  private getPingStatusOfInstances(instanceIds: string[]): string[] {
    const apiParams: Record<string, any> = {
      MaxResults: ApiRunCommandHook.MaximumMaxResultsValue,
      InstanceInformationFilterList: [{
        key: ApiRunCommandHook.SsmInstanceIdsFilterKey,
        valueSet: instanceIds,
      }],
    };

    const result = new AutomationStepSimulation(new AwsApiStep(new Stack(), 'describeInstanceInfo', {
      service: 'SSM',
      pascalCaseApi: 'DescribeInstanceInformation',
      apiParams: apiParams,
      outputs: [{
        outputType: DataTypeEnum.MAP_LIST,
        name: 'instanceInformation',
        selector: '$.InstanceInformationList',
      }],
    }), this.props).invoke({});
    if (result.responseCode !== ResponseCode.SUCCESS) {
      throw new Error(`Failed to load instance information: ${result.stackTrace}`);
    }
    return (result.outputs?.['describeInstanceInfo.instanceInformation'] as DescribeInstanceInformationResult[])?.map(x => x.PingStatus);
  }
}