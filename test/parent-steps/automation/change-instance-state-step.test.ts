import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { ChangeInstanceStateStep, ChangeInstanceStateStepProps, DesiredStateVariable, HardCodedBoolean, HardCodedString, HardCodedStringList, MockAwsInvoker, ResponseCode } from '../../../lib';

function createMockInvokerWithInstanceStateAndStatus(instanceIds: string[], state: string, status: string): MockAwsInvoker {
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

describe('ChangeInstanceStateStep', () => {
  describe('#invoke()', () => {
    it('Desired state running calls start instances and waits for running and ok', () => {
      const instanceIds = ['instanceId'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'running', 'ok');
      const step = new ChangeInstanceStateStep(new Stack(), 'step', {
        instanceIds: new HardCodedStringList(instanceIds),
        desiredState: new DesiredStateVariable('desiredState'),
        additionalInfo: new HardCodedString('additionalInfo'),
        awsInvoker: mockInvoker,
      });

      const result = step.invoke({ desiredState: 'running' });

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(mockInvoker.previousInvocations[0], {
        service: 'EC2',
        awsApi: 'startInstances',
        awsParams: {
          InstanceIds: instanceIds,
          AdditionalInfo: 'additionalInfo',
        },
      });
    });

    it('Desired state stopped calls stop instances and waits for stopped', () => {
      const instanceIds = ['instanceId'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'stopped', '');
      const step = new ChangeInstanceStateStep(new Stack(), 'step', {
        instanceIds: new HardCodedStringList(instanceIds),
        desiredState: new DesiredStateVariable('desiredState'),
        force: new HardCodedBoolean(true),
        awsInvoker: mockInvoker,
      });

      const result = step.invoke({ desiredState: 'stopped' });

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(mockInvoker.previousInvocations[0], {
        service: 'EC2',
        awsApi: 'stopInstances',
        awsParams: {
          InstanceIds: instanceIds,
          Force: true,
        },
      });
    });

    it('Desired state terminated calls terminate instances and waits for terminated', () => {
      const instanceIds = ['instanceId'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'terminated', '');
      const step = new ChangeInstanceStateStep(new Stack(), 'step', {
        instanceIds: new HardCodedStringList(instanceIds),
        desiredState: new DesiredStateVariable('desiredState'),
        awsInvoker: mockInvoker,
      });

      const result = step.invoke({ desiredState: 'terminated' });

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(mockInvoker.previousInvocations[0], {
        service: 'EC2',
        awsApi: 'terminateInstances',
        awsParams: {
          InstanceIds: instanceIds,
        },
      });
    });

    it('Desired state pendings results in the step failing', () => {
      const instanceIds = ['instanceId'];
      const mockInvoker = createMockInvokerWithInstanceStateAndStatus(instanceIds, 'terminated', '');
      const step = new ChangeInstanceStateStep(new Stack(), 'step', {
        instanceIds: new HardCodedStringList(instanceIds),
        desiredState: new DesiredStateVariable('desiredState'),
        awsInvoker: mockInvoker,
      });

      const result = step.invoke({ desiredState: 'pending' });

      assert.equal(result.responseCode, ResponseCode.FAILED);
    });
  });

  describe('#toSsmEntry()', () => {
    it('Builds entry as per SSM Document', function() {
      const stepParams: ChangeInstanceStateStepProps = {
        instanceIds: new HardCodedStringList(['instanceIds']),
        desiredState: new DesiredStateVariable('desiredState'),
        force: new HardCodedBoolean(false),
        additionalInfo: new HardCodedString('none'),
        checkStateOnly: new HardCodedBoolean(true),
      };
      const step = new ChangeInstanceStateStep(new Stack(), 'step', stepParams);

      const result = step.toSsmEntry();

      assert.deepEqual(result, {
        action: 'aws:changeInstanceState',
        inputs: {
          InstanceIds: ['instanceIds'],
          DesiredState: '{{desiredState}}',
          Force: false,
          AdditionalInfo: 'none',
          CheckStateOnly: true,
        },
        name: 'step',
      });
    });
  });
});