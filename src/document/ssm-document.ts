import { EOL } from 'os';
import { CfnTag, IResolvable, Aspects, Lazy } from 'aws-cdk-lib';
import { CfnDocument } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
// @ts-ignore
import yaml from 'js-yaml';
import { StepCollector } from '../construct/step-collector';
import { DataType } from '../domain/data-type';
import { DocumentOutput } from '../domain/document-output';
import { DocumentResult } from '../domain/document-result';
import { Input } from '../domain/input';
import { ResponseCode } from '../domain/response-code';
import { SimulationResult } from '../domain/simulation-result';


export enum DocumentFormat {
  JSON,
  YAML
}

export interface SsmDocumentProps {
  /**
     * (Optional) Name of the document. Will default to the id provided for the CDK node.
     */
  readonly documentName?: string;
  /**
     * (Optional) Description of the document. Defaults to the document name.
     */
  readonly description?: string;
  /**
     * (Optional) A Header/comment to include at the start of a YAML document. JSON documents do not support headers.
     */
  readonly header?: string;
  /**
     * (Optional) Assume role to use for this document.
     * If provided, this value MUST be included as one of the documentInput names.
     */
  readonly assumeRole?: string;
  /**
     * (Optional) Outputs to be emitted from the document.
     * The outputs are placed in a StringSet called outputs (as is done in SSM).
     * @default []
     */
  readonly docOutputs?: DocumentOutput[];
  /**
     * (Optional) Inputs required by the document.
     */
  readonly docInputs?: Input[];
  /**
     * (Optional) Specifies whether this document should be written as YAML or JSON.
     * @default JSON
     */
  readonly documentFormat?: DocumentFormat;

  /**
     * `AWS::SSM::Document.Requires`.
     *
     * @external
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires
     */
  readonly requires?: Array<CfnDocument.DocumentRequiresProperty | IResolvable> | IResolvable;
  /**
     * `AWS::SSM::Document.Tags`.
     *
     * @external
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags
     */
  readonly tags?: CfnTag[];
  /**
     * `AWS::SSM::Document.TargetType`.
     *
     * @external
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype
     */
  readonly targetType?: string;
  /**
     * `AWS::SSM::Document.VersionName`.
     *
     * @external
     * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname
     */
  readonly versionName?: string;
}

export abstract class SsmDocument extends Construct {

  readonly documentName: string;
  readonly description: string;
  readonly header?: string;
  readonly assumeRole?: string;
  readonly docOutputs: DocumentOutput[];
  readonly docInputs: Input[];
  readonly props: SsmDocumentProps;
  readonly stepCollector: StepCollector;

  constructor(scope: Construct, id: string, props: SsmDocumentProps) {
    super(scope, id);
    this.documentName = props.documentName ?? id;
    this.description = props.description ?? this.documentName;
    this.header = props.header;
    this.assumeRole = props.assumeRole;
    this.docOutputs = props.docOutputs ?? [];
    this.docInputs = props.docInputs ?? [];
    if (this.assumeRole && !this.docInputs.map(i => i.name).includes(this.assumeRole)) {
      throw new Error('Assume rold specified but not provided in inputs: ' + this.assumeRole);
    }
    this.props = props;
    this.stepCollector = new StepCollector();
    Aspects.of(this).add(this.stepCollector);
    const isYaml = this.props.documentFormat == DocumentFormat.YAML;
    new CfnDocument(this, this.node.id + 'CfnDoc', {
      ...this.props,
      ...{
        content: Lazy.any({ produce: () => this.buildSsmDocument() }),
        documentFormat: isYaml ? 'YAML' : 'JSON',
        documentType: 'Automation',
        tags: [{ key: 'CdkGenerated', value: 'true' }, ...(this.props.tags || [])],
      },
    });
  }

  /**
     * Synthesize before calling this function!
     * You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);
     *
     * Executes the SSM Document in simluation mode.
     * This method DOES NOT result in invocation of SSM APIs.
     * Rather, all steps are executed locally and mimic the behavior of SSM.
     * If any inputs are not provided in this function, the specified defaults for the inputs will be used.
     * @param inputs the inputs to feed into the simulated execution.
     * @returns the outputs of all of the executed steps.
     */
  public runSimulation(inputs: { [name: string]: any }): DocumentResult {
    this.docInputs.forEach(docInput => {
      if (inputs[docInput.name] == undefined) {
        inputs[docInput.name] = docInput.defaultValue;
        if (docInput.defaultValue == undefined) {
          throw new Error(`Value not provided for ${docInput.name} and no default value was provided`);
        }
      }
    });
    for (let key in inputs) {
      const value = inputs[key];
      const matchedInput = this.docInputs.filter(docInput => docInput.name == key)[0];
      if (matchedInput == undefined) {
        throw new Error(`Value provided to simulation {${key}:${value}} is not a supported input for this document`);
      }
      if (!(new DataType(matchedInput.inputType).validateType(value))) {
        throw new Error(`Value provided for ${key} was ${value} which does not match type ${matchedInput.inputType}`);
      }
      if (matchedInput.maxItems && Array.isArray(value) && matchedInput.maxItems < value.length) {
        throw new Error(`Values for input ${key} were ${value} which is greater than maxItems: ${matchedInput.maxItems}`);
      }
      if (matchedInput.minItems && Array.isArray(value) && matchedInput.minItems > value.length) {
        throw new Error(`Values for input ${key} were ${value} which is less than minItems: ${matchedInput.maxItems}`);
      }
      if (matchedInput.allowedPattern && !value.match(matchedInput.allowedPattern)) {
        throw new Error(`Value for input ${key} was ${value} which does not match regex ${matchedInput.allowedPattern}`);
      }
      if (matchedInput.allowedValues && !matchedInput.allowedValues.includes(value)) {
        throw new Error(`Value for input ${key} was ${value} which is not among allowedValues ${matchedInput.allowedValues}`);
      }
    }
    const simulationResult = this.start(inputs);
    var outputValues = [];
    if (simulationResult.responseCode == ResponseCode.SUCCESS) {
      outputValues = this.docOutputs.map(docOutput => {
        const valueOfOutput = (simulationResult.outputs ?? {})[docOutput.name];
        if (!new DataType(docOutput.outputType).validateType(valueOfOutput)) {
          throw new Error(`Document output ${docOutput.name} did not match type ${docOutput.outputType}: ${valueOfOutput}`);
        }
        return valueOfOutput;
      });
    }
    return { ...{ documentOutputs: outputValues }, ...simulationResult };
  }

  /**
     * The SSM Document inputs optionally specify a number of parameters including allowedValues, minItems etc.
     * This function builds an object containing the relevant (declared) input parameters.
     * The return object will be used to build the yaml/json representation of the document.
     */
  protected formatInputs(): { [name: string]: any } {
    const ssmInputs: {[name: string]: any} = {};
    this.docInputs.forEach(inp => {
      const nested: {[name: string]: any} = {
        type: new DataType(inp.inputType).toSsmString(),
      };
      if (inp.description != undefined) {
        nested.description = inp.description;
      }
      if (inp.defaultValue != undefined) {
        nested.default = inp.defaultValue;
      }
      if (inp.allowedValues != undefined) {
        nested.allowedValues = inp.allowedValues;
      }
      if (inp.allowedPattern != undefined) {
        nested.allowedPattern = inp.allowedPattern;
      }
      if (inp.minItems != undefined) {
        nested.minItems = inp.minItems;
      }
      if (inp.maxItems != undefined) {
        nested.maxItems = inp.maxItems;
      }
      ssmInputs[inp.name] = nested;
    });
    return ssmInputs;
  }

  /**
     * Delegates the execution of the Document to the subclass (Automation, etc).
     * @param inputs a merge of the defined inputs to the document and the default values if not supplied.
     * @returns the outputs that were emitted from all of the steps.
     */
  protected abstract start(inputs: { [name: string]: any }): SimulationResult;

  /**
     * Delegates building the SSM Document to be converted to a yaml/json to the subclass (Automation etc).
     */
  protected abstract buildSsmDocument(): { [name: string]: any };

  /**
     * Synthesize before calling this function!
     * You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);
     *
     * Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
     * The format is dependency on the documentFormat property provided to the class.
     * The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().
     * @returns a string representation of this document as an SSM formatted yaml/json.
     */
  public print(): string {
    const isYaml = this.props.documentFormat == DocumentFormat.YAML;
    if (isYaml) {
      // Prepend the document with the header if defined
      return this.headerWithComments() + yaml.dump(this.buildSsmDocument());
    } else {
      // There is no way to provide the header comment in a json document
      return JSON.stringify(this.buildSsmDocument());
    }
  }

  /**
     * Prepend header line with # if it does not start with #.
     * If no header is provided, this method will return an emptry string.
     * Headers are only available in yaml format.
     */
  private headerWithComments(): string {
    if (this.header == undefined) {
      return '';
    }
    return this.header.split(EOL).map(line => line.trim().startsWith('#') ? line : '# ' + line).join(EOL) +
            // "---" demarks the end of the header and the start of the document.
            '\n---\n';
  }

}
