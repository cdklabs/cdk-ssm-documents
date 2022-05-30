import { strict as assert } from 'assert';
import { MockAwsInvoker, ResponseCode } from '../../lib';
import { WaitForAndAssertResource } from '../../lib/patterns/automation/wait-for-and-assert-resource';
import { simulatePattern } from '../../lib/utils/simulate-pattern';

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

    const result = simulatePattern({ awsInvoker: mockInvoker }, (scope) => {
      return new WaitForAndAssertResource(scope, 'id', {
        service: 'Service',
        pascalCaseApi: 'Api',
        apiParams: {},
        selector: '$.result',
        waitForValues: ['result', 'other'],
        desiredValues: ['other'],
      });
    }, {});

    assert.equal(result.responseCode, ResponseCode.FAILED);
  });
});