import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { ApproveStep, HardCodedNumber, HardCodedString, HardCodedStringList, MockApprove, ResponseCode } from '../../../lib';
import { AutomationStepSimulation } from '../../../lib/simulation/automation-step-simulation';

describe('ApproveStep', function() {
  describe('#invoke()', function() {
    it('Approve is invoked', function() {
      const step = new ApproveStep(new Stack(), 'id2', {
        approvers: new HardCodedStringList(['some arn', 'other arn']),
        minRequiredApprovals: new HardCodedNumber(2),
      });

      const mockApprove = new MockApprove();
      const result = new AutomationStepSimulation(step, { approveHook: mockApprove }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.equal(mockApprove.timesInvoked, 2);
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new ApproveStep(new Stack(), 'id2', {
        approvers: new HardCodedStringList(['some arn', 'other arn']),
        minRequiredApprovals: new HardCodedNumber(2),
        message: new HardCodedString('Approve this asap'),
        notificationArn: new HardCodedString('notify arn'),
      });

      assert.deepEqual(step.toSsmEntry(), {
        action: 'aws:approve',
        name: 'id2',
        inputs: {
          Approvers: ['some arn', 'other arn'],
          MinRequiredApprovals: 2,
          Message: 'Approve this asap',
          NotificationArn: 'notify arn',
        },
        outputs: [{
          Type: 'String',
          Name: 'ApprovalStatus',
          Selector: '$.ApprovalStatus',
        }, {
          Type: 'MapList',
          Name: 'ApproverDecisions',
          Selector: '$.ApproverDecisions',
        }],
      });
    });
  });
});