import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IRunDocumentLocation } from '../../interface/run-document-location';
import { IStringMapVariable } from '../../interface/variables/string-map-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties for Run Document step
 */
export interface RunDocumentStepProps extends CommandStepProps {

  /**
   * Document info containing document type and document path. Can be of type LocalCommandStepDocument or SsmCommandStepDocument
   */
  readonly stepDocument: IRunDocumentLocation;

  /**
   * Parameters for the document.
   */
  readonly documentParameters?: IStringMapVariable;

}

/**
 * AutomationStep implemenation for aws:runDocument
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-rundocument
 */
export class RunDocumentStep extends CommandStep {

  readonly stepDocument: IRunDocumentLocation;
  readonly documentParameters?: IStringMapVariable;

  readonly platforms = [Platform.WINDOWS, Platform.LINUX];
  readonly action = 'aws:runDocument';

  constructor(scope: Construct, id: string, props: RunDocumentStepProps) {
    super(scope, id, props);
    this.stepDocument = props.stepDocument;
    this.documentParameters = props.documentParameters;
  }

  public listInputs(): string[] {
    const inputs = [
      this.stepDocument.location,
      this.documentParameters,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = { documentType: this.stepDocument.type };
    inputs.documentPath = this.stepDocument.location;
    if (this.documentParameters != undefined) {
      inputs.documentParameters = this.documentParameters;
    }
    return super.prepareSsmEntry(inputs);
  }

}
