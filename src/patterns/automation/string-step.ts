import { Construct } from 'constructs';
import { parse, toSeconds } from 'iso8601-duration';
import { AutomationDocumentBuilder } from '../../document/document-builder';
import { Choice } from '../../domain/choice';
import { DataType } from '../../domain/data-type';
import { OperationEvaluator } from '../../domain/operation';
import { Output } from '../../domain/output';
import { HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';
import { AssertAwsResourceStep } from '../../parent-steps/automation/assert-aws-resource-step';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { BranchStep } from '../../parent-steps/automation/branch-step';
import { ExecuteScriptStep } from '../../parent-steps/automation/execute-script-step';
import { PauseStep } from '../../parent-steps/automation/pause-step';
import { SleepStep } from '../../parent-steps/automation/sleep-step';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';
import { CompositeAutomationStep } from './composite-step';
import { AutomationStep } from '../../parent-steps/automation-step';
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
          sleepSeconds: toSeconds(parse(restParams.Duration)),
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
}
