import { strict as assert } from 'assert';
import { ApiRunCommandHook, DocumentHashType, MockAwsInvoker, MockSleep, RunCommandProps } from '../../../lib';

describe('ApiRunCommandHook', () => {
  describe('execute', () => {
    it('Calls the SendCommand API', () => {
      const mockInvoker = new MockAwsInvoker();
      const runCommandHook = new ApiRunCommandHook(mockInvoker, new MockSleep());
      const props: RunCommandProps = {
        documentName: 'name',
        targets: ['instance'],
        parameters: { a: { b: 1 } },
        cloudWatchOutputConfig: { b: 1 },
        comment: 'comment',
        documentHash: 'hash',
        documentHashType: DocumentHashType.SHA256,
        notificationConfig: { c: 1 },
        outputS3BucketName: 'name',
        outputS3KeyPrefix: 'prefix',
        serviceRoleArn: 'arn',
        timeoutSeconds: 5,
        maxConcurrency: 5,
        maxErrors: 5,
      };
      mockInvoker.whenThen({
        service: 'SSM',
        awsApi: 'describeInstanceInformation',
        awsParams: {
          MaxResults: 50,
          InstanceInformationFilterList: [{
            key: 'InstanceIds',
            valueSet: props.targets,
          }],
        },
      }, {
        InstanceInformationList: [{
          PingStatus: 'Online',
        }],
      });
      mockInvoker.whenThen({
        service: 'SSM',
        awsApi: 'sendCommand',
        awsParams: {
          DocumentName: 'name',
          InstanceIds: ['instance'],
          Parameters: { a: [JSON.stringify({ b: 1 })] },
          CloudWatchOutputConfig: { b: 1 },
          Comment: 'comment',
          DocumentHash: 'hash',
          DocumentHashType: 'Sha256',
          NotificationConfig: { c: 1 },
          OutputS3BucketName: 'name',
          OutputS3KeyPrefix: 'prefix',
          ServiceRoleArn: 'arn',
          TimeoutSeconds: 5,
          MaxConcurrency: 5,
          MaxErrors: 5,
        },
      }, {
        Command: {
          CommandId: 'commandId',
        },
      });
      mockInvoker.whenThen({
        service: 'SSM',
        awsApi: 'listCommands',
        awsParams: {
          CommandId: 'commandId',
        },
      }, {
        Commands: [{
          Status: 'Success',
        }],
      });
      mockInvoker.whenThen({
        service: 'SSM',
        awsApi: 'listCommandInvocations',
        awsParams: {
          CommandId: 'commandId',
          Details: true,
        },
      }, {
        CommandInvocations: [{
          CommandPlugins: [{
            ResponseCode: 200,
            Output: 'done',
          }],
        }],
      });

      const result = runCommandHook.execute(props);

      assert.deepEqual(result, {
        commandId: 'commandId',
        status: 'Success',
        responseCode: 200,
        output: 'done',
      });
    });
  });
});