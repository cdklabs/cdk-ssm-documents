import { strict as assert } from 'assert';
import { IAwsInvoker, MockAwsInvoker } from '../../../../lib';
import { StackStatus } from '../../../../lib/domain/stack-status';
import { waitForAndAssertImageAvailable, waitForAndAssertInstanceState, waitForAndAssertInstanceStatus, waitForAndAssertStackStatus } from '../../../../lib/parent-steps/automation/sub-steps/wait-for-and-assert';

function createMockInvokerWithInstanceStateAndStatus(instanceIds: string[], state: string, status: string): IAwsInvoker {
  const mockInvoker = new MockAwsInvoker();
  mockInvoker.whenThen({
    awsApi: 'describeInstanceStatus',
    awsParams: {
      InstanceIds: instanceIds,
      IncludeAllInstances: true,
    },
    service: 'EC2',
  }, {
    InstanceStatuses: [
      {
        InstanceStatus: {
          Status: status,
        },
        InstanceState: {
          Name: state,
        },
      },
    ],
  });

  return mockInvoker;
}

function createMockInvokerWithImageState(imageId: string, state: string): IAwsInvoker {
  const mockInvoker = new MockAwsInvoker();
  mockInvoker.whenThen({
    awsApi: 'describeImages',
    awsParams: {
      ImageIds: [imageId],
    },
    service: 'EC2',
  }, {
    Images: [{
      State: state,
    }],
  });

  return mockInvoker;
}

function createMockInvokerWithStackStatus(stackName: string, status: string): IAwsInvoker {
  const mockInvoker = new MockAwsInvoker();
  mockInvoker.whenThen({
    service: 'CloudFormation',
    awsApi: 'describeStacks',
    awsParams: {
      StackName: stackName,
    },
  }, {
    Stacks: [{
      StackStatus: status,
    }],
  });
  return mockInvoker;
}

describe('waitForAndAssert', () => {
  describe('waitForAndAssertInstanceState', () => {
    it('passes when the instance state is desired', () => {
      const instanceIds = ['instance id'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'running', 'ok');

      waitForAndAssertInstanceState({
        waitForState: ['shutting-down', 'terminated', 'running'],
        assertState: 'running',
        instanceIds: instanceIds,
      }, { awsInvoker: mockInvoker });
    });

    it('throws when the instance state is not desired', () => {
      const instanceIds = ['instance id'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'terminated', 'ok');

      assert.throws(() => waitForAndAssertInstanceState({
        waitForState: ['shutting-down', 'terminated', 'running'],
        assertState: 'running',
        instanceIds: instanceIds,
      }, { awsInvoker: mockInvoker }));
    });
  });

  describe('waitForAndAssertInstanceStatus', () => {
    it('passes when the instance status is desired', () => {
      const instanceIds = ['instance id'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'running', 'ok');

      waitForAndAssertInstanceStatus({
        waitForStatus: ['ok', 'impaired', 'insufficient-data', 'not-applicable'],
        assertStatus: 'ok',
        instanceIds: instanceIds,
      }, { awsInvoker: mockInvoker });
    });

    it('throws when the instance state is not desired', () => {
      const instanceIds = ['instance id'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'running', 'impaired');

      assert.throws(() => waitForAndAssertInstanceStatus({
        waitForStatus: ['ok', 'impaired', 'insufficient-data', 'not-applicable'],
        assertStatus: 'ok',
        instanceIds: instanceIds,
      }, { awsInvoker: mockInvoker }));
    });
  });

  describe('waitForAndAssertImageAvailable', () => {
    it('passes when the image state is available', () => {
      const imageId = 'image';
      const mockInvoker = createMockInvokerWithImageState(imageId, 'available');

      waitForAndAssertImageAvailable({
        imageId: imageId,
      }, { awsInvoker: mockInvoker });
    });

    it('throws when the image state is not desired', () => {
      const imageId = 'image';
      const mockInvoker = createMockInvokerWithImageState(imageId, 'failed');

      assert.throws(() => waitForAndAssertImageAvailable({
        imageId: imageId,
      }, { awsInvoker: mockInvoker }));
    });
  });

  describe('waitForAndAssertStackStatus', () => {
    it('passes when the stack status is desired', () => {
      const stackName = 'stack';
      const mockInvoker = createMockInvokerWithStackStatus(stackName, 'REVIEW_IN_PROGRESS');

      waitForAndAssertStackStatus({
        stackName: stackName,
        waitForStatus: [StackStatus.REVIEW_IN_PROGRESS, StackStatus.IMPORT_IN_PROGRESS],
        assertStatus: StackStatus.REVIEW_IN_PROGRESS,
      }, { awsInvoker: mockInvoker });
    });

    it('throws when the stack status is not desired', () => {
      const stackName = 'stack';
      const mockInvoker = createMockInvokerWithStackStatus(stackName, 'REVIEW_IN_PROGRESS');

      assert.throws(() => waitForAndAssertStackStatus({
        stackName: stackName,
        waitForStatus: [StackStatus.REVIEW_IN_PROGRESS, StackStatus.IMPORT_IN_PROGRESS],
        assertStatus: StackStatus.CREATE_COMPLETE,
      }, { awsInvoker: mockInvoker }));
    });
  });
});