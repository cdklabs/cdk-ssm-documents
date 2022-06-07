import { Construct } from 'constructs';
import { Platform } from '../../domain/platform';
import { IDownloadableContent } from '../../interface/downloadable-content';
import { IStringVariable } from '../../interface/variables/string-variable';
import { CommandStep, CommandStepProps } from '../command-step';

/**
 * Properties.json for ps Module step.
 */
export interface DownloadContentStepProps extends CommandStepProps {

  /**
   * The information required to retrieve the content from the required source.
   * This is a dictionary whose format changes based on the sourceType
   * See the aws documentation for more info
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-downloadContent
   */
  readonly downloadableContent: IDownloadableContent;

  /**
   * (Optional) An optional local path on the instance where you want to download the file.
   * If you don't specify a path, the content is downloaded to a path relative to your command ID.
   */
  readonly destinationPath?: IStringVariable;

}

/**
 * AutomationStep implemenation for aws:downloadContent
 * https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-downloadContent
 */
export class DownloadContentStep extends CommandStep {

  readonly downloadableContent: IDownloadableContent;
  readonly destinationPath?: IStringVariable;

  readonly platforms = [Platform.WINDOWS, Platform.LINUX];
  readonly action = 'aws:downloadContent';

  constructor(scope: Construct, id: string, props: DownloadContentStepProps) {
    super(scope, id, props);
    this.downloadableContent = props.downloadableContent;
    this.destinationPath = props.destinationPath;
  }

  /**
   * Inputs required for this command includes both the sourceType and sourceInfo variables and  destinationPath if provided.
   */
  public listInputs(): string[] {
    return [
      ...this.destinationPath?.requiredInputs() ?? [],
      ...this.downloadableContent.requiredInputs(),
    ];
  }

  public toSsmEntry(): { [name: string]: any } {
    const inputs: { [name: string]: any } = {
      sourceType: this.downloadableContent.sourceType,
      sourceInfo: this.downloadableContent.formatSourceInfo(),
    };
    if (this.destinationPath != undefined) {
      inputs.destinationPath = this.destinationPath;
    }
    return super.prepareSsmEntry(inputs);
  }

}