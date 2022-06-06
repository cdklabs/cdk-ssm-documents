import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IStringListVariable } from '../../interface/variables/string-list-variable';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

export interface RunDockerActionStepProps extends CommandStepProps {

  /*
  * The type of action to perform.
  */
  readonly action: IStringVariable;

  /*
  * The Docker container ID.
  */
  readonly container?: IStringVariable;

  /*
  * The Docker image name.
  */
  readonly image?: IStringVariable;

  /*
  * The container command.
  */
  readonly cmd?: IStringVariable;

  /*
  * The container memory limit.
  */
  readonly memory?: IStringVariable;

  /*
  * The container CPU shares (relative weight).
  */
  readonly cpuShares?: IStringVariable;

  /*
  * The container volume mounts.
  */
  readonly volume?: IStringListVariable;

  /*
  * The container environment variables.
  */
  readonly env?: IStringVariable;

  /*
  * The container username.
  */
  readonly user?: IStringVariable;

  /*
  * The container published ports.
  */
  readonly publish?: IStringVariable;

}

/**
 * CommandStep implementation for aws:runDockerAction
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-rundockeraction
 */
export class RunDockerActionStep extends CommandStep {

  readonly dockerAction: IStringVariable;
  readonly container?: IStringVariable;
  readonly image?: IStringVariable;
  readonly cmd?: IStringVariable;
  readonly memory?: IStringVariable;
  readonly cpuShares?: IStringVariable;
  readonly volume?: IStringListVariable;
  readonly env?: IStringVariable;
  readonly user?: IStringVariable;
  readonly publish?: IStringVariable;

  readonly platforms = [Platform.WINDOWS, Platform.LINUX];
  readonly action = 'aws:runDockerAction';

  constructor(scope: Construct, id: string, props: RunDockerActionStepProps) {
    super(scope, id, props);
    this.dockerAction = props.action;
    this.container = props.container;
    this.image = props.image;
    this.cmd = props.cmd;
    this.memory = props.memory;
    this.cpuShares = props.cpuShares;
    this.volume = props.volume;
    this.env = props.env;
    this.user = props.user;
    this.publish = props.publish;
  }

  public listInputs(): string[] {
    const inputs = [
      this.dockerAction,
      this.container,
      this.image,
      this.cmd,
      this.memory,
      this.cpuShares,
      this.volume,
      this.env,
      this.user,
      this.publish,
    ];
    return inputs.flatMap(i => i?.requiredInputs() ?? []);
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = {
      action: this.dockerAction,
    };
    if (this.container != undefined) {
      inputs.container = this.container;
    }
    if (this.image != undefined) {
      inputs.image = this.image;
    }
    if (this.cmd != undefined) {
      inputs.cmd = this.cmd;
    }
    if (this.memory != undefined) {
      inputs.memory = this.memory;
    }
    if (this.cpuShares != undefined) {
      inputs.cpuShares = this.cpuShares;
    }
    if (this.volume != undefined) {
      inputs.volume = this.volume;
    }
    if (this.env != undefined) {
      inputs.env = this.env;
    }
    if (this.user != undefined) {
      inputs.user = this.user;
    }
    if (this.publish != undefined) {
      inputs.publish = this.publish;
    }
    return super.prepareSsmEntry(inputs);
  }

}
