import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties of DomainJoin step
 */
export interface DomainJoinStepProps extends CommandStepProps {

  /**
   * The ID of the directory.
   * @example "d-1234567890"
   */
  readonly directoryId: IStringVariable;

  /**
   * The name of the domain.
   * @example "example.com"
   */
  readonly directoryName: IStringVariable;

  /**
   * (Optional) The organizational unit (OU).
   * @example "OU=test,DC=example,DC=com"
   */
  readonly directoryOU?: IStringVariable;

  /**
   * The IP addresses of the DNS servers.
   * @example ["198.51.100.1","198.51.100.2"]
   */
  readonly dnsIpAddresses: IStringListVariable;
}

/**
 * CommandStep implemenation for aws:softwareInventory
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-domainJoin
 */
export class DomainJoinStep extends CommandStep {

  readonly directoryId: IStringVariable;
  readonly directoryName: IStringVariable;
  readonly directoryOU?: IStringVariable;
  readonly dnsIpAddresses?: IStringListVariable;

  readonly platforms = [Platform.WINDOWS, Platform.LINUX];
  readonly action = 'aws:domainJoin';

  constructor(scope: Construct, id: string, props: DomainJoinStepProps) {
    super(scope, id, props);
    this.directoryId = props.directoryId;
    this.directoryName = props.directoryName;
    this.directoryOU = props.directoryOU;
    this.dnsIpAddresses = props.dnsIpAddresses;
  }

  /**
   * All Inputs for this command are optional.
   */
  public listInputs(): string[] {
    const inputs = [
      this.directoryId,
      this.directoryName,
      this.directoryOU,
      this.dnsIpAddresses,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = {
      directoryId: this.directoryId,
      directoryName: this.directoryName,
      dnsIpAddresses: this.dnsIpAddresses,
    };
    if (this.directoryOU != undefined) {
      inputs.directoryOU = this.directoryOU;
    }
    return super.prepareSsmEntry(inputs);
  }

}
