import { assertString, HardCodedString, IStringVariable, StringVariable } from '../../interface/variables/string-variable';

export interface IPackageNameVariable extends IStringVariable {
}

export class HardCodedPackageName extends HardCodedString implements IPackageNameVariable {
  public static readonly AWSPV_DRIVER = new HardCodedPackageName('AWSPVDriver');
  public static readonly AWSNVME = new HardCodedPackageName('AWSNVMe');
  public static readonly AWS_ENA_NETWORK_DRIVER = new HardCodedPackageName('AwsEnaNetworkDriver');
  public static readonly AWS_VSS_COMPONENTS = new HardCodedPackageName('AwsVssComponents');
  public static readonly AMAZON_CLOUD_WATCH_AGENT = new HardCodedPackageName('AmazonCloudWatchAgent');
  public static readonly CODE_DEPLOY_AGENT = new HardCodedPackageName('CodeDeployAgent');
  public static readonly AWS_SUPPORT_EC2_RESCUE = new HardCodedPackageName('AWSSupport-EC2Rescue');
  private constructor(val: string) {
    super(val);
  }
}

export class PackageNameVariable extends StringVariable implements IPackageNameVariable {
  readonly validValues = ['AWSPVDriver', 'AWSNVMe', 'AwsEnaNetworkDriver', 'AwsVssComponents', 'AmazonCloudWatchAgent', 'CodeDeployAgent', 'AWSSupport-EC2Rescue'];

  protected assertType(value: any): void {
    assertString(value);
    if (!this.validValues.includes(value)) {
      throw new Error(`${value} is not a valid enum value`);
    }
  }
}
