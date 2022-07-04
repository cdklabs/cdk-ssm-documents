import * as fs from 'fs';
import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { AutomationStep, AutomationStepProps } from '../automation-step';
// eslint-disable-next-line
const path = require('path');
// eslint-disable-next-line
const os = require('os');

export enum ScriptLanguage {
  PYTHON
}

/**
 * Properties for ExecuteScriptStep
 */
export interface ExecuteScriptStepProps extends AutomationStepProps {

  /**
     * (Required) Language used to execute the script.
     */
  readonly language: ScriptLanguage;

  /**
      * Full path to the code to execute. File is parsed to produce yaml/json.
      * Simulation will execute this file using the language specified.
      * Either this OR inclineCode must be provided.
      */
  readonly fullPathToCode?: string;

  /**
      * Inline code to be executed. String will be used to produce function in yaml/json.
      * Simulation will execute the function in this string using the language specified.
      * Either this OR fullPathToCode must be provided.
      */
  readonly inlineCode?: string;

  /**
      * (Optional) Function name in fullPathToCode file to use as entry point for script handler.
      * @default script_handler
      */
  readonly handlerName?: string;

  /**
      * (Optional) Outputs that the function is expected to return.
      * Be sure to prefix the selector for these outputs with "$.Payload." for executeScript step outputs.
      * @default []
      */
  readonly outputs?: Output[];

  /**
      * (Optional) Inputs that the function needs in order to execute.
      * @default []
      */
  readonly inputs: string[];
}

/**
 * AutomationStep implementation for aws:executeScript
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeScript.html
 */
export class ExecuteScriptStep extends AutomationStep {

  public static getLanguage(runtime: string) {
    const langugage = ExecuteScriptStep.RUNTIME_TO_LANGUAGE[runtime];
    if (langugage != undefined) {
      return langugage;
    } else {
      throw new Error(`Runtime ${runtime} not supported.`);
    }
  }

  private static readonly RUNTIME_TO_LANGUAGE: { [name: string]: ScriptLanguage } = {
    'python3.6': ScriptLanguage.PYTHON,
  };

  readonly language: ScriptLanguage;
  readonly fullPathToCode: string;
  readonly handlerName: string;
  readonly outputs: Output[];
  readonly inputs: string[];
  readonly action: string = 'aws:executeScript';


  constructor(stage: Construct, id: string, props: ExecuteScriptStepProps) {
    super(stage, id, props);
    this.language = props.language;
    if ((props.fullPathToCode == undefined) == (props.inlineCode == undefined)) {
      throw new Error('Exactly one of "fullPathToCode" or "inlineCode" should be defined');
    }
    this.fullPathToCode = props.fullPathToCode ?? this.toFile(props.inlineCode ?? '');
    this.handlerName = props.handlerName ?? 'script_handler';
    this.outputs = props.outputs ?? [];
    this.inputs = props.inputs ?? [];
    const nonPayloadOutputs = this.outputs.filter(out => !out.selector.startsWith('$.Payload'));
    if (nonPayloadOutputs.length != 0) {
      throw new Error('All script outputs must specify selector starting with "$.Payload", ' +
                `but these did not: ${JSON.stringify(nonPayloadOutputs)}`);
    }
  }

  private toFile(data: string) {
    const tempDir = path.join(os.tmpdir(), 'tmp' + new Date().getSeconds() + Math.floor(Math.random() * 1000));
    fs.mkdirSync(tempDir);
    const tempFile = path.join(tempDir, 'execution' + this.getFileSuffix());
    fs.writeFileSync(tempFile, data);
    console.log(`Successfully wrote file to ${tempFile}`);
    return tempFile;
  }

  private getFileSuffix() {
    switch (this.language) {
      case ScriptLanguage.PYTHON:
        return '.py';
      default:
        throw new Error(`Language ${this.language} not supported.`);
    }
  }

  public listOutputs(): Output[] {
    return this.outputs;
  }

  public listInputs(): string[] {
    return this.inputs;
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputPayload = Object.fromEntries(this.listInputs().map(inp => [inp, `{{ ${inp} }}`]));
    return this.prepareSsmEntry({
      Runtime: this.runtime(),
      Handler: this.handlerName,
      Script: fs.readFileSync(this.fullPathToCode, 'utf8'),
      InputPayload: inputPayload,
    });
  }

  /**
     * @returns the SSM associated runtime argument for the language specified
     */
  private runtime(): string {
    const runtimeEntry = Object.entries(ExecuteScriptStep.RUNTIME_TO_LANGUAGE)
      .filter(entry => entry[1] == this.language)[0];
    if (runtimeEntry) {
      return runtimeEntry[0];
    } else {
      throw new Error(`Language ${this.language} not supported.`);
    }
  }

}