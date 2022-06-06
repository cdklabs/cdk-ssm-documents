import { EnumVariable, HardCodedEnum } from '../../interface/variables/enum-variable';

/**
 * Available AWS packages for Windows Server include the following:
 * AWSPVDriver, AWSNVMe, AwsEnaNetworkDriver, AwsVssComponents, AmazonCloudWatchAgent, CodeDeployAgent, and AWSSupport-EC2Rescue.
 *
 * Available AWS packages for Linux operating systems include the following:
 * AmazonCloudWatchAgent, CodeDeployAgent, and AWSSupport-EC2Rescue.
 */
export enum PackageName {
  AWSPV_DRIVER = 'AWSPVDriver',
  AWSNVME = 'AWSNVMe',
  AWS_ENA_NETWORK_DRIVER = 'AwsEnaNetworkDriver',
  AWS_VSS_COMPONENTS = 'AwsVssComponents',
  AWS_CLOUD_WATCH_AGENT = 'AmazonCloudWatchAgent',
  CODE_DEPLOY_AGENT = 'CodeDeployAgent',
  AWS_SUPPORT_EC2_RESCUE = 'AWSSupport-EC2Rescue',
}

/**
 * PackageName variable
 */
export class PackageNameVariable extends EnumVariable<typeof PackageName> {
  constructor(reference: string) {
    super(reference, PackageName);
  }
}

/**
 * A hard coded PackageName.
 */
export class HardCodedPackageName extends HardCodedEnum<typeof PackageName> {
  constructor(value: PackageName) {
    super(value, PackageName);
  }
}
