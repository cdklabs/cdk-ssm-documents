import { Construct } from 'constructs';
import { IStringVariable } from '../../interface/variables/string-variable';
import { AwsApiStep } from '../../parent-steps/automation/aws-api-step';
import { WaitForResourceStep } from '../../parent-steps/automation/wait-for-resource-step';
import { CompositeAutomationStep } from './composite-step';
import { AutomationDocumentBuilder } from '../../document/document-builder';

export class RebootInstanceAndWait extends CompositeAutomationStep {

  readonly reboot: AwsApiStep;
  readonly describe: WaitForResourceStep;

  constructor(scope: Construct, id: string, instanceId: IStringVariable) {
    super(scope, id);
    this.reboot = new AwsApiStep(this, 'RebootInstances', {
      service: 'ec2',
      pascalCaseApi: 'RebootInstances',
      apiParams: { InstanceIds: [instanceId] },
      outputs: [],
    });
    this.describe = new WaitForResourceStep(this, 'DescribeInstances', {
      service: 'ec2',
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
