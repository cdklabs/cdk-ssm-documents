import { Construct } from 'constructs';
import { AutomationDocumentBuilder } from '../../document/document-builder';
import { IStringVariable } from '../../interface/variables/string-variable';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';
import { CompositeAutomationStep } from './composite-step';
import {AwsService} from "../../domain/aws-service";

export class RebootInstanceAndWait extends CompositeAutomationStep {

  readonly reboot: AwsApiStep;
  readonly describe: WaitForResourceStep;

  constructor(scope: Construct, id: string, instanceId: IStringVariable) {
    super(scope, id);
    this.reboot = new AwsApiStep(this, 'RebootInstances', {
      service: AwsService.EC2,
      pascalCaseApi: 'RebootInstances',
      apiParams: { InstanceIds: [instanceId] },
      outputs: [],
    });
    this.describe = new WaitForResourceStep(this, 'DescribeInstances', {
      service: AwsService.EC2,
      pascalCaseApi: 'DescribeInstances',
      apiParams: { InstanceIds: [instanceId] },
      selector: '$.Reservations[0].Instances[0].State.Name',
      desiredValues: ['running'],
    });
  }

  addToDocument(doc: AutomationDocumentBuilder): void {
    doc.addStep(this.reboot);
    doc.addStep(this.describe);
  }
}
