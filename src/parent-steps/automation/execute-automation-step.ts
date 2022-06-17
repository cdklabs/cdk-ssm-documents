import { Construct } from 'constructs';
import { DataTypeEnum } from '../../domain/data-type';
import { Output } from '../../domain/output';
import { IMapListVariable } from '../../interface/variables/map-list-variable';
import { IStringMapVariable } from '../../interface/variables/string-map-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { AutomationStep, AutomationStepProps } from '../automation-step';

export interface ExecuteAutomationStepProps extends AutomationStepProps {

  /*
  * The name of the secondary runbook to run during the step. For runbooks in the same AWS account, specify the runbook name. For runbooks shared from a different AWS account, specify the Amazon Resource Name (ARN) of the runbook. For information about using shared runbooks, see Using shared SSM documents.
  */
  readonly documentName: IStringVariable;

  /*
  * The version of the secondary runbook to run. If not specified, Automation runs the default runbook version.
  */
  readonly documentVersion?: IStringVariable;

  /*
  * The maximum number of targets allowed to run this task in parallel. You can specify a number, such as 10, or a percentage, such as 10%.
  */
  readonly maxConcurrency?: IStringVariable;

  /*
  * The number of errors that are allowed before the system stops running the automation on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops running the automation when the fourth error is received. If you specify 0, then the system stops running the automation on additional targets after the first error result is returned. If you run an automation on 50 resources and set MaxErrors to 10%, then the system stops running the automation on additional targets when the sixth error is received.
  */
  readonly maxErrors?: IStringVariable;

  /*
  * Required parameters for the secondary runbook. The mapping uses the following format: {"parameter1" : "value1", "parameter2" : "value2" }
  */
  readonly runtimeParameters?: IStringMapVariable;

  /*
  * Optional metadata that you assign to a resource. You can specify a maximum of five tags for an automation.
  */
  readonly tags?: IMapListVariable;

  /*
  * A location is a combination of AWS Regions and/or AWS accounts where you want to run the automation. A minimum number of 1 item must be specified and a maximum number of 100 items can be specified.
  */
  readonly targetLocations?: IMapListVariable;

  /*
  * A list of key-value mappings of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
  */
  readonly targetMaps?: IMapListVariable;

  /*
  * The name of the parameter used as the target resource for the rate-controlled automation. Required if you specify Targets.
  */
  readonly targetParameterName?: IStringVariable;

  /*
  * A list of key-value mappings to target resources. Required if you specify TargetParameterName.
  */
  readonly targets?: IMapListVariable;

}

/**
 * AutomationStep implementation for aws:executeAutomation
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeAutomation.html
 */
export class ExecuteAutomationStep extends AutomationStep {

  readonly documentName: IStringVariable;
  readonly documentVersion?: IStringVariable;
  readonly maxConcurrency?: IStringVariable;
  readonly maxErrors?: IStringVariable;
  readonly runtimeParameters?: IStringMapVariable;
  readonly tags?: IMapListVariable;
  readonly targetLocations?: IMapListVariable;
  readonly targetMaps?: IMapListVariable;
  readonly targetParameterName?: IStringVariable;
  readonly targets?: IMapListVariable;

  readonly action = 'aws:executeAutomation';

  constructor(scope: Construct, id: string, props: ExecuteAutomationStepProps) {
    super(scope, id, props);
    this.documentName = props.documentName;
    this.documentVersion = props.documentVersion;
    this.maxConcurrency = props.maxConcurrency;
    this.maxErrors = props.maxErrors;
    this.runtimeParameters = props.runtimeParameters;
    this.tags = props.tags;
    this.targetLocations = props.targetLocations;
    this.targetMaps = props.targetMaps;
    this.targetParameterName = props.targetParameterName;
    this.targets = props.targets;
  }

  public listInputs(): string[] {
    const inputs = [
      this.documentName,
      this.documentVersion,
      this.maxConcurrency,
      this.maxErrors,
      this.runtimeParameters,
      this.tags,
      this.targetLocations,
      this.targetMaps,
      this.targetParameterName,
      this.targets,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  listOutputs(): Output[] {
    return [{
      outputType: DataTypeEnum.STRING_MAP,
      name: 'Output',
      selector: '$.Output',
    },
    {
      outputType: DataTypeEnum.STRING,
      name: 'ExecutionId',
      selector: '$.ExecutionId',
    },
    {
      outputType: DataTypeEnum.STRING,
      name: 'Status',
      selector: '$.Status',
    }];
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = {
      DocumentName: this.documentName,
    };
    if (this.documentVersion != undefined) {
      inputs.DocumentVersion = this.documentVersion;
    }
    if (this.maxConcurrency != undefined) {
      inputs.MaxConcurrency = this.maxConcurrency;
    }
    if (this.maxErrors != undefined) {
      inputs.MaxErrors = this.maxErrors;
    }
    if (this.runtimeParameters != undefined) {
      inputs.RuntimeParameters = this.runtimeParameters;
    }
    if (this.tags != undefined) {
      inputs.Tags = this.tags;
    }
    if (this.targetLocations != undefined) {
      inputs.TargetLocations = this.targetLocations;
    }
    if (this.targetMaps != undefined) {
      inputs.TargetMaps = this.targetMaps;
    }
    if (this.targetParameterName != undefined) {
      inputs.TargetParameterName = this.targetParameterName;
    }
    if (this.targets != undefined) {
      inputs.Targets = this.targets;
    }
    const entireEntry = super.prepareSsmEntry(inputs);
    const { outputs, ...newObj } = entireEntry;
    return newObj;
  }

}