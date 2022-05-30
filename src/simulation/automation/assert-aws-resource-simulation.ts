import { AssertAwsResourceStep } from '../../parent-steps/automation/assert-aws-resource-step';
import { AutomationSimulationBase } from './automation-simulation-base';
import { AwsApiSimulation, AwsInvocationSimulationProps } from './aws-api-simulation';
// eslint-disable-next-line
const jp = require('jsonpath');

/**
 * AutomationStep implementation of aws:assertAwsResourceProperty.
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-assertAwsResourceProperty.html
 */
export class AssertAwsResourceSimulation extends AutomationSimulationBase {

  readonly action: string = 'aws:assertAwsResourceProperty';
  private assertStep: AssertAwsResourceStep;
  private props: AwsInvocationSimulationProps;

  constructor(step: AssertAwsResourceStep, props: AwsInvocationSimulationProps) {
    super(step);
    this.assertStep = step;
    this.props = props;

  }

  /**
     * If the value found matches one of the desiredValues, then this function returns. Otherwise it throws.
     * @returns empty object if value matches desiredValues.
     */
  public executeStep(inputs: { [name: string]: any }): { [name: string]: any } {
    const awsResponse = new AwsApiSimulation(this.assertStep, this.props).executeStep(inputs);
    if (this.matchesSelectedResponse(awsResponse)) {
      console.log('Found desired value in AWS response');
      return {};
    } else {
      throw new Error('Did not find desired response (' + this.assertStep.desiredValues + ') when selecting '
            + this.assertStep.selector + ' in ' + JSON.stringify(awsResponse));
    }
  }

  private matchesSelectedResponse(awsResult: {}): boolean {
    const selectedResponse = this.parseSelectedOrNull(awsResult);
    console.log('Found selected response with selector ' + this.assertStep.selector + ': ' + selectedResponse);
    return selectedResponse != undefined && this.assertStep.desiredValues.includes(selectedResponse);
  }

  /**
     * Perform lookup in the aws result for the json path in the selector.
     */
  private parseSelectedOrNull(awsResult: {}) {
    try {
      return jp.query(awsResult, this.assertStep.selector)[0];
    } catch (error) {
      console.log('Error found when reading jsonpath: ' + error);
      return undefined;
    }
  }

}
