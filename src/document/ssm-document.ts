import { EOL } from 'os';
import { CfnTag, IResolvable, Lazy } from 'aws-cdk-lib';
import { CfnDocument } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { DocumentOutput } from '../domain/document-output';
import { Input } from '../domain/input';
import { IStringVariable, StringVariable } from '../interface/variables/string-variable';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const yaml = require('js-yaml');


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
  readonly assumeRole?: IStringVariable;
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
   * If the document resource you specify in your template already exists, this parameter determines whether a new version of the existing document is created, or the existing document is replaced. `Replace` is the default method. If you specify `NewVersion` for the `UpdateMethod` parameter, and the `Name` of the document does not match an existing resource, a new document is created. When you specify `NewVersion` , the default version of the document is changed to the newly created version.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-updatemethod
   */
  readonly updateMethod?: string;
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
  readonly assumeRole?: IStringVariable;
  readonly docOutputs: DocumentOutput[];
  readonly docInputs: Input[];
  readonly props: SsmDocumentProps;
  readonly cfnDocument: CfnDocument;

  constructor(scope: Construct, id: string, props: SsmDocumentProps) {
    super(scope, id);
    this.documentName = props.documentName ?? id;
    this.description = props.description ?? this.documentName;
    this.header = props.header;
    this.assumeRole = props.assumeRole;
    this.docOutputs = props.docOutputs ?? [];
    this.docInputs = props.docInputs ?? [];
    if (this.assumeRole && this.assumeRole instanceof StringVariable &&
      !this.docInputs.map(i => i.name).includes(this.assumeRole.reference)) {
      throw new Error('Assume role specified but not provided in inputs: ' + this.assumeRole);
    }
    this.props = props;
    const isYaml = this.props.documentFormat == DocumentFormat.YAML;
    this.cfnDocument = new CfnDocument(this, 'Resource', {
      ...this.props,
      ...{
        content: Lazy.any({
          produce: () => {
            const doc = this.buildSsmDocument();
            return JSON.parse(JSON.stringify(doc));
          },
        }),
        name: this.props.documentName,
        documentFormat: isYaml ? 'YAML' : 'JSON',
        documentType: this.documentType(),
        tags: [{ key: 'CdkGenerated', value: 'true' }, ...(this.props.tags || [])],
      },
    });
  }

  /**
   * The SSM Document inputs optionally specify a number of parameters including allowedValues, minItems etc.
   * This function builds an object containing the relevant (declared) input parameters.
   * The return object will be used to build the yaml/json representation of the document.
   */
  protected formatInputs(): { [name: string]: any } {
    const ssmInputs: {[name: string]: any} = {};
    this.docInputs.forEach(inp => {
      ssmInputs[inp.name] = inp.toSsm();
    });
    return ssmInputs;
  }

  public abstract documentType(): string;

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
    // format as JSON first so that the JSON printing goes into effect
    const doc = JSON.parse(JSON.stringify(this.buildSsmDocument()));
    if (isYaml) {
      // Prepend the document with the header if defined
      return this.headerWithComments() + yaml.dump(doc);
    } else {
      // There is no way to provide the header comment in a json document
      return JSON.stringify(doc);
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
