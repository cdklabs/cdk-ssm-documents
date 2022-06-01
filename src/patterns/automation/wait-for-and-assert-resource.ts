import { Construct } from 'constructs';
import { AssertAwsResourceStep, AssertAwsResourceStepProps } from '../../parent-steps/automation/assert-aws-resource-step';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';
import { CompositeAutomationStep } from './composite-step';
import { AutomationDocumentBuilder } from '../../document/document-builder';
import { AutomationStep } from '../../parent-steps/automation-step';

/**
 * Properties of WaitForAndAssertResource
 */
export interface WaitForAndAssertResourceProps extends AssertAwsResourceStepProps {

  /**
   * (Required) Value extracted from AWS response must be one of these values before asserting the desired value.
   */
  waitForValues: string[];
}

/**
 * Waits for resource value and asserts that the value is one of the desired values.
 */
export class WaitForAndAssertResource extends CompositeAutomationStep {

  readonly waitForValues: AutomationStep;
  readonly assertDesired: AutomationStep;

  constructor(scope: Construct, id: string, props: WaitForAndAssertResourceProps) {
    super(scope, id);

    const stepParams = {
      service: props.service,
      pascalCaseApi: props.pascalCaseApi,
      apiParams: props.apiParams,
      selector: props.selector,
    };

    this.waitForValues = new WaitForResourceStep(this, 'waitForValues', {
      ...stepParams,
      desiredValues: props.waitForValues,
    });
    this.assertDesired = new AssertAwsResourceStep(this, 'assertDesired', {
      ...stepParams,
      desiredValues: props.desiredValues,
    });
  }

  addToDocument(doc: AutomationDocumentBuilder): void {
    doc.addStep(this.waitForValues);
    doc.addStep(this.assertDesired);
  }
}
