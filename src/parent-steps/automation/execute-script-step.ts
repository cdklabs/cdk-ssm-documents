import * as fs from 'fs';
import { Construct } from 'constructs';
import { Output } from '../../domain/output';
import { IGenericVariable } from '../../interface/variables/variable';
import { PythonScriptHandler } from '../../script/python-script-handler';
import { AutomationStep, AutomationStepProps } from '../automation-step';
// eslint-disable-next-line
const path = require('path');
// eslint-disable-next-line
const os = require('os');

/**
 * The code to run for the execution.
 * See "script" parameter here:
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeScript.html
 * Attachments are not yet supported.
 */
export abstract class ScriptCode {
  /**
   * Inline code to be executed. String will be used to produce function in yaml/json.
   * Simulation will execute the function in this string using the language specified.
   */
  static inline(code: string) {
    return new InlineScriptCode(code);
  }
  /**
   * Full path to the code to execute. File is parsed to produce yaml/json.
   * Simulation will execute this file using the language specified.
   * (Attachments not yet supported)
   */
  static fromFile(fullPath: string) {
    return new FileScriptCode(fullPath);
  }

  /**
   * @returns code as a string
   */
  abstract codeAsString(): string;

  /**
   * If there is a file for this code, return it.
   * Otherwise, create a file with the specified suffix.
   * @param suffix of the file to create (such as ".py")
   */
  abstract createOrGetFile(suffix: string): string;
}

export class InlineScriptCode extends ScriptCode {
  private static toFile(data: string, suffix: string) {
    const tempDir = path.join(os.tmpdir(), 'tmp' + new Date().getSeconds() + Math.floor(Math.random() * 100000));
    fs.mkdirSync(tempDir);
    const tempFile = path.join(tempDir, 'execution' + suffix);
    fs.writeFileSync(tempFile, data);
    console.log(`Successfully wrote file to ${tempFile}`);
    return tempFile;
  }

  readonly inlineCode: string;
  constructor(inlineCode: string) {
    super();
    this.inlineCode = inlineCode;
  }

  codeAsString(): string {
    return this.inlineCode;
  }

  createOrGetFile(suffix: string): string {
    return InlineScriptCode.toFile(this.inlineCode, suffix);
  }
}

export class FileScriptCode extends ScriptCode {
  readonly fullPath: string;
  constructor(fullPath: string) {
    super();
    this.fullPath = fullPath;
  }
  codeAsString(): string {
    return fs.readFileSync(this.fullPath, 'utf8');
  }

  createOrGetFile(_suffix: string): string {
    return this.fullPath;
  }
}

/**
 * Python runtime to use when writing SSM Document.
 * Simulation will use local python version.
 */
export enum PythonVersion {
  VERSION_3_7,
  VERSION_3_8,
  VERSION_3_9,
  VERSION_3_10,
  VERSION_3_11,
}

/**
 * Specifies the script language as described in the "Runtime" argument here:
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeScript.html
 */
export abstract class ScriptLanguage {

  /**
   * Create a new ScriptLanguage for python execution.
   * @param version is the pythonVersion to use when writing the document (for simulation will not matter).
   * @param handlerName is the function name in code as entry point for script handler.
   */
  static python(version: PythonVersion, handlerName: string): ScriptLanguage {
    return new PythonScript(version, handlerName);
  }

  /**
   * Creates a ScriptLanguage based on the provided runtime.
   * Prefer one of the other static constructors if possible.
   * @param runtime is the runtime name (such as "python3.11").
   * @param handlerName to be provided for python executions.
   */
  static fromRuntime(runtime: string, handlerName?: string): ScriptLanguage {
    if (runtime.startsWith('python')) {
      return ScriptLanguage.python(ScriptLanguage.pythonVersion(runtime), handlerName!);
    }
    throw new Error('Unrecognized runtime version ' + runtime);
  }
  
  private static pythonVersion(runtime: string) {
    const version = PythonScript.STRING_TO_VERSION[runtime];

    if (version === undefined) {
      throw new Error('Unrecognized python version ' + runtime);
    }

    return version;
  }

  /**
   * Builds the ssm inputs.
   */
  abstract ssmInputs(): { [name: string]: string };

  /**
   * The associated runtime of this ScriptLanguage.
   */
  abstract runtime(): string;

  /**
   * The suffix to apply to file names of this type of execution.
   */
  abstract fileSuffix(): string;

  /**
   * Simulate an execution of this ScriptLanguage.
   * Provide the inputs after replaced with the actual values (not variables).
   */
  abstract simulate(code: ScriptCode, inputs: { [name: string]: string } ): { [name: string]: string };
}

class PythonScript extends ScriptLanguage {
  readonly version: PythonVersion;
  readonly handlerName: string;
  constructor(version: PythonVersion, handlerName: string) {
    super();
    this.version = version;
    this.handlerName = handlerName;
  }

  public static STRING_TO_VERSION: Record<string, PythonVersion> = {
    'python3.7': PythonVersion.VERSION_3_7,
    'python3.8': PythonVersion.VERSION_3_8,
    'python3.9': PythonVersion.VERSION_3_9,
    'python3.10': PythonVersion.VERSION_3_10,
    'python3.11': PythonVersion.VERSION_3_11,
  }

  public static VERSION_TO_STRING: Record<PythonVersion, string> = {
    [PythonVersion.VERSION_3_7]: 'python3.7',
    [PythonVersion.VERSION_3_8]: 'python3.8',
    [PythonVersion.VERSION_3_9]: 'python3.9',
    [PythonVersion.VERSION_3_10]: 'python3.10',
    [PythonVersion.VERSION_3_11]: 'python3.11',
  }

  runtime(): string {
    return PythonScript.VERSION_TO_STRING[this.version];
  }

  fileSuffix(): string {
    return '.py';
  }

  ssmInputs(): { [name: string]: string } {
    return {
      Handler: this.handlerName,
      Runtime: this.runtime(),
    };
  }

  simulate(code: ScriptCode, inputs: { [p: string]: string }): { [p: string]: string } {
    const pyHandler = new PythonScriptHandler();
    return pyHandler.run(code.createOrGetFile(this.fileSuffix()), this.handlerName, inputs);
  }
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
   * Inline code to be executed. String will be used to produce function in yaml/json.
   * Simulation will execute the function in this code using the language specified.
   */
  readonly code: ScriptCode;

  /**
   * (Optional) Outputs that the function is expected to return.
   * Be sure to prefix the selector for these outputs with "$.Payload." for executeScript step outputs.
   * @default []
   */
  readonly outputs?: Output[];

  /**
   * InputPayload that will be passed to the first parameter of the handler.
   * This can be used to pass input data to the script.
   * The key of this dict is the variable name that will be available to the code.
   * The value is the Variable object.
   */
  readonly inputPayload: { [name: string]: IGenericVariable };
}

/**
 * AutomationStep implementation for aws:executeScript
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeScript.html
 */
export class ExecuteScriptStep extends AutomationStep {

  readonly language: ScriptLanguage;
  readonly code: ScriptCode;
  readonly outputs: Output[];
  readonly inputs: { [name: string]: IGenericVariable };
  readonly action: string = 'aws:executeScript';

  constructor(stage: Construct, id: string, props: ExecuteScriptStepProps) {
    super(stage, id, props);
    this.language = props.language;
    this.code = props.code;
    this.outputs = props.outputs ?? [];
    this.inputs = props.inputPayload;
    const nonPayloadOutputs = this.outputs.filter(out => !out.selector.startsWith('$.Payload'));
    if (nonPayloadOutputs.length != 0) {
      throw new Error('All script outputs must specify selector starting with "$.Payload", ' +
        `but these did not: ${JSON.stringify(nonPayloadOutputs)}`);
    }
  }

  public listUserOutputs(): Output[] {
    return this.outputs;
  }

  public listInputs(): string[] {
    return Object.values(this.inputs).flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    return this.prepareSsmEntry({
      ...this.language.ssmInputs(),
      Script: this.code.codeAsString(),
      InputPayload: this.inputs,
    });
  }

}