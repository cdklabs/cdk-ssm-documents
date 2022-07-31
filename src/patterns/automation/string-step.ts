import { Construct } from 'constructs';
import { AutomationDocumentBuilder } from '../../document/document-builder';
import { Choice } from '../../domain/choice';
import { DataType } from '../../domain/data-type';
import { OperationEvaluator } from '../../domain/operation';
import { Output } from '../../domain/output';
import { HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';
import { AutomationStep } from '../../parent-steps/automation-step';
import { AssertAwsResourceStep } from '../../parent-steps/automation/assert-aws-resource-step';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { BranchStep } from '../../parent-steps/automation/branch-step';
import { ExecuteScriptStep } from '../../parent-steps/automation/execute-script-step';
import { PauseStep } from '../../parent-steps/automation/pause-step';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';
import { CompositeAutomationStep } from './composite-step';
import {ApproveStep} from "../../parent-steps/automation/approve-step";
// eslint-disable-next-line
const yaml = require('js-yaml');

/**
 * StringStep allows for including a step from an existing automation document verbatim.
 * This is useful in that it allows developers to integrate with existing document steps.
 * This step can be used just as you would use any other Step including simulation and deployment.
 */
export class StringStep extends CompositeAutomationStep {

  /**
     * Builds a step object from a yaml declaration.
     * You may cast the step afterword to the associated Step for this action
     * if you wish to gain access to action specific functionality,
     * @returns Step associated with the provided activity.
     */
  static fromYaml(scope: Construct, inputYaml: string) {
    return StringStep.fromObject(scope, yaml.load(inputYaml));
  }

  /**
     * Builds a step object from a json declaration.
     * You may cast the step afterword to the associated Step for this action
     * if you wish to gain access to action specific functionality,
     * @returns Step associated with the provided activity.
     */
  static fromJson(scope: Construct, json: string) {
    return StringStep.fromObject(scope, JSON.parse(json));
  }

  /**
     * Builds a step object from an object.
     * You may cast the step afterword to the associated Step for this action
     * if you wish to gain access to action specific functionality,
     * @returns Step associated with the provided activity.
     */
  static fromObject(scope: Construct, props: {[name: string]: any}) {
    return new StringStep(scope, props.name, props);
  }

  private automationStep: AutomationStep;

  private constructor(scope: Construct, id: string, props: {[name: string]: any}) {
    super(scope, id);

    const sharedProps: { [name: string]: any } = {};
    sharedProps.name = props.name;
    sharedProps.action = props.action;
    if (props.maxAttempts) {
      sharedProps.maxAttempts = props.maxAttempts;
    }
    if (props.timeoutSeconds) {
      sharedProps.timeoutSeconds = props.timeoutSeconds;
    }
    if (props.isEnd != undefined) {
      sharedProps.isEnd = props.isEnd;
    }
    if (props.isCritical != undefined) {
      sharedProps.isCritical = props.isCritical;
    }
    if (props.outputs != undefined) {
      sharedProps.outputs = this.toOutputs(props.outputs);
    }

    const { Service, Api, PropertySelector, DesiredValues, ...restParams } = props.inputs;

    switch (props.action) {
      case 'aws:executeAwsApi':
        this.automationStep = new AwsApiStep(this, props.name, {
          service: Service,
          pascalCaseApi: Api,
          apiParams: restParams,
          outputs: sharedProps.outputs,
          ...sharedProps,
        });
        break;
      case 'aws:waitForAwsResourceProperty':
        this.automationStep = new WaitForResourceStep(this, props.name, {
          service: Service,
          pascalCaseApi: Api,
          apiParams: restParams,
          selector: PropertySelector,
          desiredValues: DesiredValues,
          ...sharedProps,
        });
        break;
      case 'aws:assertAwsResourceProperty':
        this.automationStep = new AssertAwsResourceStep(this, props.name, {
          service: Service,
          pascalCaseApi: Api,
          apiParams: restParams,
          selector: PropertySelector,
          desiredValues: DesiredValues,
          ...sharedProps,
        });
        break;
      case 'aws:pause':
        this.automationStep = new PauseStep(this, props.name, {
          ...sharedProps,
        });
        break;
      case 'aws:sleep':
        this.automationStep = new SleepStep(this, props.name, {
          sleepSeconds: this.parseDurationToSeconds(restParams.Duration),
          ...sharedProps,
        });
        break;
      case 'aws:executeScript':
        this.automationStep = new ExecuteScriptStep(this, props.name, {
          language: ExecuteScriptStep.getLanguage(restParams.Runtime),
          inputs: Object.keys(restParams.InputPayload),
          inlineCode: restParams.Script,
          handlerName: restParams.Handler,
          ...sharedProps,
        });
        break;
      case 'aws:branch':
        this.automationStep = new BranchStep(this, props.name, {
          choices: this.toChoices(restParams.Choices),
          defaultStepName: restParams.Default,
          ...sharedProps,
        });
        break;
      case 'aws:approve':
        this.automationStep = new ApproveStep(this, props.name, {
          approvers: restParams.Approvers,
          minRequiredApprovals: restParams.MinRequiredApprovals,
          message: restParams.Message,
          notificationArn: restParams.NotificationArn,
          ...sharedProps,
        });
        break;
      default:
        throw new Error('Action not implemented as StringStep ' + props.action);
    }
  }

  addToDocument(doc: AutomationDocumentBuilder): void {
    doc.addStep(this.automationStep);
  }

  private toOutputs(declaredOutputs: {[name: string]: string}[]): Output[] {
    return declaredOutputs.map(declaredOutput => this.toOutput(declaredOutput));
  }

  private toOutput(declaredOutput: {[name: string]: string}): Output {
    return {
      name: declaredOutput.Name,
      selector: declaredOutput.Selector,
      outputType: DataType.fromDataType(declaredOutput.Type).dataTypeEnum,
    };
  }

  private toChoices(declaredChoices: {[name: string]: string}[]): Choice[] {
    return declaredChoices.map(declaredChoice => this.toChoice(declaredChoice));
  }

  private toChoice(declaredChoice: {[name: string]: string}): Choice {
    const operationEntry = Object.entries(declaredChoice)
      .filter(entry => OperationEvaluator.STRING_TO_OPERATION[entry[0]] != undefined)[0];
    return new Choice({
      jumpToStepName: declaredChoice.NextStep,
      variable: this.toVariable(declaredChoice.Variable),
      operation: OperationEvaluator.fromOperationName(operationEntry[0]),
      constant: operationEntry[1],
    });
  }

  private toVariable(variable: string): IStringVariable {
    if (variable.includes('{{')) {
      return new StringVariable(variable.replace('{{', '').replace('}}', '').trim());
    }
    return new HardCodedString(variable.trim());
  }

  private parseDurationToSeconds(iso8601Duration: string): number {
    // https://stackoverflow.com/a/29153059
    const iso8601DurationRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;
    const matches = iso8601Duration.match(iso8601DurationRegex);
    if (matches == undefined) {
      throw new Error('Could not parse Duration' + iso8601Duration);
    }

    const periods = {
      years: matches[2] === undefined ? 0 : Number.parseInt(matches[2]),
      months: matches[3] === undefined ? 0 : Number.parseInt(matches[3]),
      weeks: matches[4] === undefined ? 0 : Number.parseInt(matches[4]),
      days: matches[5] === undefined ? 0 : Number.parseInt(matches[5]),
      hours: matches[6] === undefined ? 0 : Number.parseInt(matches[6]),
      minutes: matches[7] === undefined ? 0 : Number.parseInt(matches[7]),
      seconds: matches[8] === undefined ? 0 : Number.parseInt(matches[8]),
    };

    return periods.seconds +
      periods.minutes * 60 +
      periods.hours * 60 * 60 +
      periods.days * 60 * 60 * 24 +
      periods.weeks * 60 * 60 * 24 * 7 +
      periods.months * 60 * 60 * 24 * 30.5 +
      periods.years * 60 * 60 * 24 * 365;
  };
}
