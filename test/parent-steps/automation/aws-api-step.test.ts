import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { AwsApiStep, DataTypeEnum, StringVariable, MockAwsInvoker, ResponseCode } from '../../../lib';
import { AutomationStepSimulation } from '../../../lib/simulation/automation-step-simulation';


describe('AwsApiStep', function() {
  describe('#invoke()', function() {
    it('Invoke AWS with replacement params', function() {
      const mockInvoker = new MockAwsInvoker();
      mockInvoker.nextReturn({ Owner: { DisplayName: 'MyDisplayName' } });

      const step = new AwsApiStep(new Stack(), 'id', {
        name: 'MyS3List',
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'DisplayName',
          selector: '$.Owner.DisplayName',
        }],
        service: 'S3',
        pascalCaseApi: 'ListBuckets',
        apiParams: { Filter: [{ SomeFilter: new StringVariable('SomeOutput.OutKey') }] },
      });

      const response = new AutomationStepSimulation(step, { awsInvoker: mockInvoker }).invoke({ 'SomeOutput.OutKey': 'FilterVal' });
      if (response.responseCode != ResponseCode.SUCCESS) {
        assert.fail(response.stackTrace);
      }
      assert.equal(response.outputs && response.outputs['MyS3List.DisplayName'], 'MyDisplayName');
      assert.deepEqual(mockInvoker.previousInvocations[0].awsParams, { Filter: [{ SomeFilter: 'FilterVal' }] });
    });
    it('Replace with integer becomes a JSON integer', function() {
      const mockInvoker = new MockAwsInvoker();
      mockInvoker.nextReturn({ Owner: { DisplayName: 'MyDisplayName' } });
      const step = new AwsApiStep(new Stack(), 'id', {
        name: 'MyS3List',
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'DisplayName',
          selector: '$.Owner.DisplayName',
        }],
        service: 'S3',
        pascalCaseApi: 'ListBuckets',
        apiParams: { Filter: [{ SomeFilter: new StringVariable('SomeOutput.OutKey') }] },
      });
      const response = new AutomationStepSimulation(step, { awsInvoker: mockInvoker }).invoke({ 'SomeOutput.OutKey': 3 });
      if (response.responseCode != ResponseCode.SUCCESS) {
        assert.fail(response.stackTrace);
      }
      assert.equal(response.outputs && response.outputs['MyS3List.DisplayName'], 'MyDisplayName');
      assert.deepEqual(mockInvoker.previousInvocations[0].awsParams, { Filter: [{ SomeFilter: 3 }] });
    });
    it('Output type does not match variable returned throws', function() {
      const mockInvoker = new MockAwsInvoker();
      mockInvoker.nextReturn({ Owner: { DisplayName: 4 } });
      const step = new AwsApiStep(new Stack(), 'id', {
        name: 'MyS3List',
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'DisplayName',
          selector: '$.Owner.DisplayName',
        }],
        service: 'S3',
        pascalCaseApi: 'ListBuckets',
        apiParams: { Filter: [{ SomeFilter: new StringVariable('SomeOutput.OutKey') }] },
      });
      step.nextStep = step;
      // Type is marked as string, but actually returns number.
      assert.equal(new AutomationStepSimulation(step, { awsInvoker: mockInvoker }).invoke({ 'SomeOutput.OutKey': 3 }).responseCode, ResponseCode.FAILED);
    });
  });
  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const step = new AwsApiStep(new Stack(), 'id', {
        name: 'MyS3List',
        timeoutSeconds: 9,
        maxAttempts: 2,
        outputs: [{
          outputType: DataTypeEnum.STRING,
          name: 'DisplayName',
          selector: '$.Owner.DisplayName',
        }],
        service: 'S3',
        pascalCaseApi: 'ListBuckets',
        apiParams: { Filter: [{ SomeFilter: new StringVariable('SomeOutput.OutKey') }] },
      });
      assert.deepEqual(JSON.parse(JSON.stringify(step.toSsmEntry())), {
        action: 'aws:executeAwsApi',
        timeoutSeconds: 9,
        maxAttempts: 2,
        inputs: {
          Api: 'ListBuckets',
          Filter: [
            {
              SomeFilter: '{{ SomeOutput.OutKey }}',
            },
          ],
          Service: 'S3',
        },
        name: 'MyS3List',
        outputs: [
          {
            Name: 'DisplayName',
            Selector: '$.Owner.DisplayName',
            Type: 'String',
          },
        ],
      });
    });
  });
});
