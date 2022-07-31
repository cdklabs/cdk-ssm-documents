/**
 * Outputs for aws:runCommand
 */
export interface RunCommandOutputs {
  /**
     * The ID of the command.
     */
  readonly commandId: string;

  /**
     * The status of the command.
     */
  readonly status: string;

  /**
     * The response code of the command.
     */
  readonly responseCode?: number;

  /**
     * The output of the command.
     */
  readonly output?: string;
}

/**
 * Inputs for aws:runCommand
 */
export interface RunCommandProps {
  /**
     * If the Command type document is owned by you or AWS, specify the name of the document. If you're using a document shared with you by a different AWS account, specify the Amazon Resource Name (ARN) of the document.
     */
  readonly documentName: string;

  /**
     * The instance IDs where you want the command to run. You can specify a maximum of 50 IDs.
     *
     * You can also use the pseudo parameter {{ RESOURCE_ID }} in place of instance IDs to run the command on all instances in the target group. For more information about pseudo parameters, see [About pseudo parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-register-tasks-parameters.html).
     *
     * Another alternative is to send commands to a fleet of instances by using the Targets parameter. The Targets parameter accepts Amazon Elastic Compute Cloud (Amazon EC2) tags. For more information about how to use the Targets parameter, see [Using targets and rate controls to send commands to a fleet](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html).
     */
  readonly targets: string[];

  /**
     * (Optional) The required and optional parameters specified in the document.
     */
  readonly parameters?: Record<string, any>;

  /**
     * (Optional) Configuration options for sending command output to Amazon CloudWatch Logs. For more information about sending command output to CloudWatch Logs, see [Configuring Amazon CloudWatch Logs for Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-rc-setting-up-cwlogs.html).
     */
  readonly cloudWatchOutputConfig?: Record<string, any>;

  /**
     * (Optional) User-defined information about the command.
     */
  readonly comment?: string;

  /**
     * (Optional) The hash for the document.
     */
  readonly documentHash?: string;

  /**
     * (Optional) The type of the hash.
     */
  readonly documentHashType?: string;

  /**
     * (Optional) The configurations for sending notifications.
     */
  readonly notificationConfig?: Record<string, any>;

  /**
     * (Optional) The name of the S3 bucket for command output responses.
     */
  readonly outputS3BucketName?: string;

  /**
     * (Optional) The prefix.
     */
  readonly outputS3KeyPrefix?: string;

  /**
     * (Optional) The ARN of the AWS Identity and Access Management (IAM) role.
     */
  readonly serviceRoleArn?: string;

  /**
     * (Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance. If the command isn't received by the SSM Agent on the instance before the value specified is reached, then the status of the command changes to Delivery Timed Out.
     */
  readonly timeoutSeconds?: number;

  /**
     * (Optional) The maximum concurrency.
     */
  readonly maxConcurrency?: number;

  /**
     * (Optional) The maximum errors.
     */
  readonly maxErrors?: number;
}

/**
 * Interface for simulating aws:runCommand
 */
export interface IRunCommandHook {
  /**
     * Simulate the aws:runCommand
     */
  execute(props: RunCommandProps): RunCommandOutputs;
}

export * from './run-command-hook/api-run-command-hook';