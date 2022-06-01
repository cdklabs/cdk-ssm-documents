import { strict as assert } from 'assert';
import { MockAwsInvoker, ResponseCode } from '../../lib';
import { WaitForAndAssertResource } from '../../lib/patterns/automation/wait-for-and-assert-resource';
import { simulatePattern } from '../../lib/utils/simulate-pattern';
import { Stack } from 'aws-cdk-lib';

describe('simulatePattern', () => {
  it('returns the result of the simulation', () => {
    const mockInvoker = new MockAwsInvoker();
    mockInvoker.whenThen({
      service: 'Service',
      awsApi: 'api',
      awsParams: {},
    }, {
      result: 'result',
    });

    const watiForAndAssert = new WaitForAndAssertResource(new Stack(), 'id', {
      service: 'Service',
      pascalCaseApi: 'Api',
      apiParams: {},
      selector: '$.result',
      waitForValues: ['result', 'other'],
      desiredValues: ['other'],
    });
    const result = simulatePattern(watiForAndAssert, { awsInvoker: mockInvoker }, {});

    assert.equal(result.responseCode, ResponseCode.FAILED);
  });
});