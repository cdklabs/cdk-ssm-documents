import { strict as assert } from 'assert';
import { Stack } from 'aws-cdk-lib';
import { HardCodedString, InvokeWebhookProps, InvokeWebhookResult, InvokeWebhookStep, InvokeWebhookStepProps, ResponseCode } from '../../../lib';
import { IWebhook } from '../../../lib/interface/webhook';
import { AutomationStepSimulation } from '../../../lib/simulation/automation-step-simulation';

describe('InvokeWebhookStep', () => {
  describe('#invoke()', () => {
    it('Webhook is invoked', () => {
      const integrationName = 'name';
      const body = 'body';
      const response = 'response';
      const responseCode = 200;
      const mockWebhook: IWebhook = {
        invoke(props: InvokeWebhookProps): InvokeWebhookResult {
          assert.equal(props.body, body);
          assert.equal(props.integrationName, integrationName);

          return {
            response: response,
            responseCode: responseCode,
          };
        },
      };
      const step = new InvokeWebhookStep(new Stack(), 'invoke', {
        integrationName: new HardCodedString(integrationName),
        body: new HardCodedString(body),
      });

      const result = new AutomationStepSimulation(step, { webhook: mockWebhook }).invoke({});

      assert.equal(result.responseCode, ResponseCode.SUCCESS);
      assert.deepEqual(result.outputs, {
        'invoke.Response': response,
        'invoke.ResponseCode': responseCode,
      });
    });
  });

  describe('#toSsmEntry()', function() {
    it('Builds entry as per SSM Document', function() {
      const stepParams: InvokeWebhookStepProps = {
        integrationName: new HardCodedString('name'),
        body: new HardCodedString('body'),
      };
      const step = new InvokeWebhookStep(new Stack(), 'id2', stepParams);

      const result = step.toSsmEntry();

      assert.deepEqual(result, {
        action: 'aws:invokeWebhook',
        inputs: {
          IntegrationName: 'name',
          Body: 'body',
        },
        name: 'id2',
      });
    });
  });
});
