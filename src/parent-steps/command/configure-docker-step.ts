import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IStringVariable, HardCodedString } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties for ConfigureDocker step
 */
export interface ConfigureDockerStepProps extends CommandStepProps {

    /**
     * The type of action to perform. True correlates to "Install" false correlates to "Uninstall"
     */
    readonly installAction: Boolean;


}

/**
 * AutomationStep implemenation for aws:UpdateAgent
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-updateagent
 */
export class ConfigureDockerStep extends CommandStep {

    readonly installAction: IStringVariable;

    readonly platforms = [Platform.WINDOWS, Platform.LINUX];
    readonly action = 'aws:configureDocker';

    constructor(scope: Construct, id: string, props: ConfigureDockerStepProps) {
        super(scope, id, props);
        this.installAction = props.installAction? new HardCodedString("Install"): new HardCodedString("Uninstall");
    }

    /**
     * Inputs required for this command include agentName allowDowngrade source and targetVersion if version other than latest is desired
     */
    public listInputs(): string[] {
        const inputs = [
            this.installAction
        ]
        return inputs.flatMap(i => i.requiredInputs() ?? []);
    }

    public toSsmEntry(): { [name: string]: any } {
        const inputs: { [name: string]: any } = { action: this.installAction };
        return super.prepareSsmEntry(inputs);
    }

}
