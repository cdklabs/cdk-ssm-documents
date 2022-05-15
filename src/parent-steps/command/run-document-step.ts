import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
//import { IStringVariable } from '../../interface/variables/string-variable';
import { IStringMapVariable } from '../../interface/variables/string-map-variable';
import { CommandStep, CommandStepProps } from '../command-step';
import {ICommandStepDocument} from '../../interface/command-step-document'

/**
 * Properties for Run Document step
 */
export interface RunDocumentStepProps extends CommandStepProps {

    /**
     * Document info containing document type and document path. Can be of type LocalCommandStepDocument or SsmCommandStepDocument
     */
    readonly stepDocument: ICommandStepDocument

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

    readonly stepDocument: ICommandStepDocument
    readonly documentParameters?: IStringMapVariable;

    readonly platforms = [Platform.WINDOWS, Platform.LINUX];
    readonly action = 'aws:runDocument';

    constructor(scope: Construct, id: string, props: RunDocumentStepProps) {
        super(scope, id, props);
        this.stepDocument = props.stepDocument;
        this.documentParameters = props.documentParameters;
    }

    /**
     * Inputs required for this command include documentType then documentPath and documentParameters if provided
     */
    public listInputs(): string[] {
        const inputs = [
            this.stepDocument.pathGet(),
            this.documentParameters
        ]
        return inputs.flatMap(i => i?.requiredInputs() ?? []);
    }


    public toSsmEntry(): { [name: string]: any } {
        const inputs: { [name: string]: any } = { documentType: this.stepDocument.typeGet() };
            inputs.documentPath = this.stepDocument.pathGet();
        if (this.documentParameters != undefined) {
            inputs.documentParameters = this.documentParameters;
        }
        return super.prepareSsmEntry(inputs);
    }

}
