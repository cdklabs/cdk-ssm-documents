import { IWebhook } from '../../interface/webhook';
import { InvokeWebhookStep } from '../../parent-steps/automation/invoke-webhook-step';
import { AutomationSimulationBase } from './automation-simulation-base';

/**
 * Response from IWebhook.Invoke
 */
export interface InvokeWebhookResult {
  /**
     * The text received from the webhook provider response.
     */
  readonly response: string;

  /**
     * The HTTP status code received from the webhook provider response.
     */
  readonly responseCode: number;
}

/**
 * The properties for IWebhook.Invoke
 */
export interface InvokeWebhookProps {
  /**
     * The name of the Automation integration. For example, exampleIntegration. The integration you specify must already exist.
     */
  readonly integrationName: string;

  /**
     * (Optional) The payload you want to send when your webhook integration is invoked.
     */
  readonly body?: string;
}

/**
 * Properties for InvokeWebhookStep
 */
export interface InvokeWebhookSimulationProps {
  /**
   * (Optional) Hook for simulating aws:invokeWebhook
   * @default - Returns 204 with an empty response
   */
  readonly webhook: IWebhook;
}

/**
 * AutomationStep implementation for [aws:invokeWebhook](https://docs.aws.amazon.com/systems-manager/latest/userguide/invoke-webhook.html)
 */
export class InvokeWebhookSimulation extends AutomationSimulationBase {
  readonly action = 'aws:invokeWebhook';
  private invokeWebhookStep: InvokeWebhookStep;
  private props: InvokeWebhookSimulationProps;

  constructor(step: InvokeWebhookStep, props: InvokeWebhookSimulationProps) {
    super(step);
    this.invokeWebhookStep = step;
    this.props = props;
  }

  public executeStep(inputs: Record<string, any>): Record<string, any> {
    const integrationName = this.invokeWebhookStep.integrationName.resolveToString(inputs);
    const body = this.invokeWebhookStep.body?.resolveToString(inputs);

    const result = this.props.webhook.invoke({
      integrationName: integrationName,
      body: body,
    });

    return {
      Response: result.response,
      ResponseCode: result.responseCode,
    };
  }

}