import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IBooleanVariable } from '../../interface/variables/boolean-variable';
import { IStringVariable, HardCodedString } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties UpdateAgent step
 */
export interface UpdateSSMAgentStepProps extends CommandStepProps {

  /**
     * amazon-ssm-agent. This is the name of the Systems Manager agent that processes requests and runs commands on the instance.
     */
  readonly agentName?: IStringVariable;

  /**
     * Allow the SSM Agent to be downgraded to an earlier version. If set to false, the agent can be upgraded to newer versions only (default).
     * If set to true, specify the earlier version.
     */
  readonly allowDowngrade: IBooleanVariable;

  /**
     * The location where Systems Manager copies the SSM Agent version to install. You can't change this location.
     */
  readonly source?: IStringVariable;

  /**
     * Must use one and only one of source or sourceRegion. If source is provided it will be used as is.
     * If sourceRegion is provided it will populate source with https://s3.{sourceRegion}.amazonaws.com/aws-ssm-{sourceRegion}/manifest.json
     */
  readonly sourceRegion?: string;

  /**
     * A specific version of SSM Agent to install. If not specified, the agent will be updated to the latest version.
     */
  readonly targetVersion?: IStringVariable;

}

/**
 * AutomationStep implemenation for aws:UpdateSsmAgent
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-updatessmagent
 */
export class UpdateSSMAgentStep extends CommandStep {

  readonly agentName: IStringVariable;
  readonly allowDowngrade: IBooleanVariable;
  readonly source: IStringVariable;
  readonly targetVersion?: IStringVariable;

  readonly platforms = [Platform.WINDOWS, Platform.LINUX, Platform.MAC_OS];
  readonly action = 'aws:updateSsmAgent';

  constructor(scope: Construct, id: string, props: UpdateSSMAgentStepProps) {
    super(scope, id, props);
    this.agentName = props.agentName ?? new HardCodedString('amazon-ssm-agent');
    this.allowDowngrade = props.allowDowngrade;
    if ((props.source == undefined) == (props.sourceRegion == undefined)) {
      throw new Error('One and only one of source and sourceRegion must be provided.');
    }
    this.source = props.source ?? new HardCodedString(`https://s3.${props.sourceRegion}.amazonaws.com/aws-ssm-${props.sourceRegion}/manifest.json`);
    this.targetVersion = props.targetVersion;
  }

  /**
     * Inputs required for this command include agentName allowDowngrade source and targetVersion if version other than latest is desired
     */
  public listInputs(): string[] {
    const inputs = [
      this.agentName,
      this.allowDowngrade,
      this.source,
      this.targetVersion,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }


  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = { agentName: this.agentName };
    inputs.source = this.source;
    inputs.allowDowngrade = this.allowDowngrade;
    if (this.targetVersion != undefined) {
      inputs.targetVersion = this.targetVersion;
    }
    return super.prepareSsmEntry(inputs);
  }

}
