import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { AwsApiStep, AwsInvocationProps } from './aws-api-step';
// eslint-disable-next-line
const jp = require('jsonpath');

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

  /**
     * If the value found matches one of the desiredValues, then this function returns. Otherwise it throws.
     * @returns empty object if value matches desiredValues.
     */
  public executeStep(inputs: { [name: string]: any }): { [name: string]: any } {
    const awsResponse = super.executeStep(inputs);
    if (this.matchesSelectedResponse(awsResponse)) {
      console.log('Found desired value in AWS response');
      return {};
    } else {
      throw new Error('Did not find desired response (' + this.desiredValues + ') when selecting '
            + this.selector + ' in ' + JSON.stringify(awsResponse));
    }
  }

  private matchesSelectedResponse(awsResult: {}): boolean {
    const selectedResponse = this.parseSelectedOrNull(awsResult);
    console.log('Found selected response with selector ' + this.selector + ': ' + selectedResponse);
    return selectedResponse != undefined && this.desiredValues.includes(selectedResponse);
  }

  /**
     * Perform lookup in the aws result for the json path in the selector.
     */
  private parseSelectedOrNull(awsResult: {}) {
    try {
      return jp.query(awsResult, this.selector)[0];
    } catch (error) {
      console.log('Error found when reading jsonpath: ' + error);
      return undefined;
    }

  }

  public toSsmEntry(): { [name: string]: any } {
    return super.prepareSsmEntry({
      ...{
        Service: this.service,
        Api: this.pascalCaseApi,
        PropertySelector: this.selector,
        DesiredValues: this.desiredValues,
      },
      ...this.apiParams.format,
    });
  }

}
