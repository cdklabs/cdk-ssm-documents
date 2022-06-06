import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties refreshAssociation step
 */
export interface RefreshAssociationStepProps extends CommandStepProps {

  /**
   * List of association IDs. If empty, all associations bound to the specified target are applied.
   */
  readonly associationIds?: IStringListVariable;

}

/**
 * CommandStep implemenation for aws:refreshAssociation
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-refreshassociation
 */
export class RefreshAssociationStep extends CommandStep {

  readonly associationIds?: IStringListVariable;

  readonly platforms = [Platform.WINDOWS, Platform.LINUX, Platform.MAC_OS];
  readonly action = 'aws:refreshAssociation';

  constructor(scope: Construct, id: string, props: RefreshAssociationStepProps) {
    super(scope, id, props);
    this.associationIds = props.associationIds;
  }

  /**
   * Input required for this command is associationIds
   */
  public listInputs(): string[] {
    const inputs = [
      this.associationIds,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = {};
    if (this.associationIds != undefined) {
      inputs.associationIds = this.associationIds;
    }
    return super.prepareSsmEntry(inputs);
  }

}
