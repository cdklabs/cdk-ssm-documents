import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { AwsApiStep, AwsInvocationProps } from './aws-api-step';

/**
 * Properties for AssertAwsResourceStep
 */
export interface AssertAwsResourceStepProps extends AwsInvocationProps {
  /**
     * (Required) Json path selector to extract value from AWS response
     */
  readonly selector: string;

  /**
     * (Required) Value extracted from AWS response desired to be one of these desired values.
     */
  readonly desiredValues: string[];
}

/**
 * AutomationStep implementation of aws:assertAwsResourceProperty.
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-assertAwsResourceProperty.html
 */
export class AssertAwsResourceStep extends AwsApiStep {
  readonly selector: string;
  readonly desiredValues: string[];
  readonly action: string = 'aws:assertAwsResourceProperty';

  constructor(scope: Construct, id: string, props: AssertAwsResourceStepProps) {
    super(scope, id, {
      ...{
        outputs: [],
      },
      ...props,
    });
    this.selector = props.selector;
    this.desiredValues = props.desiredValues;
  }

  /**
     * There are no outputs for this step.
     * @returns empty list
     */
  public listOutputs(): Output[] {
    return [];
  }

  public toSsmEntry(): { [name: string]: any } {
    return super.prepareSsmEntry({
      ...{
        Service: this.service.namespace,
        Api: this.pascalCaseApi,
        PropertySelector: this.selector,
        DesiredValues: this.desiredValues,
      },
      ...this.apiParams.format,
    });
  }

}
