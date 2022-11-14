import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { AwsService, MockAwsInvoker, ResponseCode } from '../../lib';
import { WaitForAndAssertResource } from '../../lib/patterns/automation/wait-for-and-assert-resource';
import { simulatePattern } from '../../lib/utils/simulate-pattern';

describe('simulatePattern', () => {
  it('returns the result of the simulation', () => {
    const mockInvoker = new MockAwsInvoker();
    mockInvoker.whenThen({
      service: new AwsService('Service', 'Service'),
      awsApi: 'api',
      awsParams: {},
    }, {
      result: 'result',
    });

    const waitForAndAssert = new WaitForAndAssertResource(new Stack(), 'id', {
      service: new AwsService('Service', 'Service'),
      pascalCaseApi: 'Api',
      apiParams: {},
      selector: '$.result',
      waitForValues: ['result', 'other'],
      desiredValues: ['other'],
    });
    const result = simulatePattern(waitForAndAssert, { awsInvoker: mockInvoker }, {});

    assert.equal(result.responseCode, ResponseCode.FAILED);
  });
});
