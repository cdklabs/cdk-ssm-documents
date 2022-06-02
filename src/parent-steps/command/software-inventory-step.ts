import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties of SoftwareInventory step
 */
export interface SoftwareInventoryStepProps extends CommandStepProps {

    /**
     * (Optional) Collect metadata for installed applications.
     */
    readonly applications?: IStringVariable;

    /**
     * (Optional) Collect metadata for AWS components like amazon-ssm-agent.
     */
    readonly awsComponents?: IStringVariable;

    /**
     * (Optional, requires SSM Agent version 2.2.64.0 or later) Collect metadata for files, including file names,
     * the time files were created, the time files were last modified and accessed, and file sizes, to name a few.
     * For more information about collecting file inventory, see Working with file and Windows registry
     */
    readonly files?: IStringVariable;

    /**
     * (Optional) Collect metadata for network configurations.
     */
    readonly networkConfig?: IStringVariable;

    /**
     * (Optional) Collect metadata for all Windows updates.
     */
    readonly windowsUpdates?: IStringVariable;

    /**
     * (Optional) Collect more instance information than is provided by the default inventory plugin (aws:instanceInformation),
     * including CPU model, speed, and the number of cores, to name a few.
     */
    readonly instanceDetailedInformation?: IStringVariable;

    /**
     * (Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect metadata for service configurations.
     */
    readonly services?: IStringVariable;

    /**
     * (Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect Windows Registry keys and values.
     * You can choose a key path and collect all keys and values recursively.
     * You can also collect a specific registry key and its value for a specific path.
     * Inventory collects the key path, name, type, and the value. For more information about collecting Windows Registry inventory,
     * see Working with file and Windows registry inventory.
     */
    readonly windowsRegistry?: IStringVariable;

    /**
     * (Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect metadata for Microsoft Windows role configurations.
     */
    readonly windowsRoles?: IStringVariable;

    /**
     * (Optional) Collect custom inventory data. For more information about custom inventory, see Working with custom inventory
     */
    readonly customInventory?: IStringVariable;

}

/**
 * AutomationStep implemenation for aws:softwareInventory
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-softwareinventory
 */
export class SoftwareInventoryStep extends CommandStep {

    readonly applications?: IStringVariable;
    readonly awsComponents?: IStringVariable;
    readonly files?: IStringVariable;
    readonly networkConfig?: IStringVariable;
    readonly windowsUpdates?: IStringVariable;
    readonly instanceDetailedInformation?: IStringVariable;
    readonly services?: IStringVariable;
    readonly windowsRegistry?: IStringVariable;
    readonly windowsRoles?: IStringVariable;
    readonly customInventory?: IStringVariable;

    readonly platforms = [Platform.WINDOWS,Platform.LINUX, Platform.MAC_OS];
    readonly action = 'aws:softwareInventory';

    constructor(scope: Construct, id: string, props: SoftwareInventoryStepProps) {
        super(scope, id, props);
        this.applications = props.applications;
        this.awsComponents = props.awsComponents;
        this.files = props.files;
        this.networkConfig = props.networkConfig;
        this.windowsUpdates = props.windowsUpdates;
        this.instanceDetailedInformation = props.instanceDetailedInformation;
        this.services = props.services;
        this.windowsRegistry = props.windowsRegistry;
        this.windowsRoles = props.windowsRoles;
        this.customInventory = props.customInventory;
    }

    /**
     * All Inputs for this command are optional.
     */
    public listInputs(): string[] {
        const inputs = [
            this.applications,
            this.awsComponents,
            this.files,
            this.networkConfig,
            this.windowsUpdates,
            this.instanceDetailedInformation,
            this.services,
            this.windowsRegistry,
            this.windowsRoles,
            this.customInventory
        ]
        return inputs.flatMap(i => i?.requiredInputs() ?? []);
    }

    public toSsmEntry(): { [name: string]: any } {
        const inputs: { [name: string]: any } = {};
        if(this.applications!=null) {
            inputs.applications = this.applications
        }
        if(this.awsComponents != undefined) {
            inputs.awsComponents = this.awsComponents;
        }
        if (this.files != undefined) {
            inputs.files = this.files;
        }
        if (this.networkConfig != undefined) {
            inputs.networkConfig = this.networkConfig;
        }
        if (this.windowsUpdates != undefined) {
            inputs.windowsUpdates = this.windowsUpdates;
        }
        if (this.instanceDetailedInformation != undefined) {
            inputs.instanceDetailedInformation = this.instanceDetailedInformation;
        }
        if (this.services != undefined) {
            inputs.services = this.services;
        }
        if (this.windowsRegistry != undefined) {
            inputs.windowsRegistry = this.windowsRegistry;
        }
        if (this.windowsRoles != undefined) {
            inputs.windowsRoles = this.windowsRoles;
        }
        if (this.customInventory != undefined) {
            inputs.customInventory = this.customInventory;
        }
        return super.prepareSsmEntry(inputs);
    }

}
