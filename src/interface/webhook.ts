import { InvokeWebhookProps, InvokeWebhookResult } from '../parent-steps/automation/invoke-webhook-step';

/**
 * Hook for simulating aws:invokeWebhook
 */
export interface IWebhook {
  /**
   * Invoke the web hook
   */
  invoke(props: InvokeWebhookProps): InvokeWebhookResult;
}

export class WebhookImpl implements IWebhook {
  private static readonly NoContentResponseCode = 204;

  invoke(_props: InvokeWebhookProps): InvokeWebhookResult {
    console.log('InvokeWebhook: Cannot be simulated. Returning No-Content.');

    return {
      response: '',
      responseCode: WebhookImpl.NoContentResponseCode,
    };
  }
}
