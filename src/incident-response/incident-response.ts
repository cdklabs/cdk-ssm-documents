import { CfnTag, IResolvable } from 'aws-cdk-lib';
import { Role } from 'aws-cdk-lib/aws-iam';
import { CfnResponsePlan } from 'aws-cdk-lib/aws-ssmincidents';
import { Construct } from 'constructs';
import { AutomationDocument } from '../document/automation-document';
import { GenericVariable, IGenericVariable } from '../interface/variables/variable';

export interface SsmAutomationProps {
  /**
   * The account that the automation document will be run in. This can be in either the management account or an application account.
   * @link: http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmautomation.html#cfn-ssmincidents-responseplan-ssmautomation-targetaccount
   */
  readonly targetAccount?: string;
  /**
   * Specify either StringVariables or HardCodedValues.
   * @link: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.html
   * @link: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-ssmparameter.html
   */
  readonly parameters: { [name: string]: IGenericVariable };
}

/**
 * The Action property type specifies the configuration to launch.
 * @link: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-action.html
 */
export class IncidentResponseAction {
  /**
   * Specify the AutomationDocument to use for the action property.
   */
  public static ssmAutomation(automationDocument: AutomationDocument, role: Role, props?: SsmAutomationProps) {
    return new IncidentResponseAction({
      ssmAutomation: {
        documentName: automationDocument.cfnDocument.ref,
        roleArn: role.roleArn,
        dynamicParameters: Object.entries(props?.parameters ?? {}).filter(([_k, v]) => v.print().includes('{{')).map(([k, v]) => IncidentResponseAction.toDynamicParam(k, v)),
        parameters: Object.entries(props?.parameters ?? {}).filter(([_k, v]) => !v.print().includes('{{')).map(([k, v]) => IncidentResponseAction.toParam(k, v)),
        targetAccount: props?.targetAccount,
      },
    });
  }

  public static ssmAutomationEscapeHatch(ssmAutomationProperty: CfnResponsePlan.SsmAutomationProperty) {
    return new IncidentResponseAction({ ssmAutomation: ssmAutomationProperty });
  }

  private static toDynamicParam(key: string, value: IGenericVariable): CfnResponsePlan.DynamicSsmParameterProperty {
    return {
      key: key,
      value: { variable: (<GenericVariable> value).reference },
    };
  }

  private static toParam(key: string, value: IGenericVariable): CfnResponsePlan.SsmParameterProperty {
    return {
      key: key,
      values: [value.print()],
    };
  }

  readonly cfnEntry: CfnResponsePlan.ActionProperty;

  constructor(cfnEntry: CfnResponsePlan.ActionProperty) {
    this.cfnEntry = cfnEntry;
  }

}

/**
 * Provides L2 construct for https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html
 */
export interface IncidentTemplateProps {
  /**
   * Used to create only one incident record for an incident.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-dedupestring
   */
  readonly dedupeString?: string;
  /**
   * `CfnResponsePlan.IncidentTemplateProperty.IncidentTags`
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-incidenttags
   */
  readonly incidentTags?: Array<CfnTag | IResolvable> | IResolvable;
  /**
   * The SNS targets that AWS Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel using the SNS topics.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-notificationtargets
   */
  readonly notificationTargets?: Array<CfnResponsePlan.NotificationTargetItemProperty | IResolvable> | IResolvable;
  /**
   * The summary describes what has happened during the incident.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html#cfn-ssmincidents-responseplan-incidenttemplate-summary
   */
  readonly summary?: string;
}

/**
 * Provides L2 construct for https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssmincidents-responseplan-incidenttemplate.html
 */
export class IncidentTemplate {
  /**
   * Critical impact typically relates to full application failure that impacts many to all customers.
   */
  public static critical(title: string, props: IncidentTemplateProps): IncidentTemplate {
    return new IncidentTemplate(1, title, props);
  }

  /**
   * High impact denotes partial application failure with impact to many customers.
   */
  public static high(title: string, props: IncidentTemplateProps): IncidentTemplate {
    return new IncidentTemplate(2, title, props);
  }

  /**
   * Medium impact denotes that the application is providing reduced service to customers.
   */
  public static medium(title: string, props: IncidentTemplateProps): IncidentTemplate {
    return new IncidentTemplate(3, title, props);
  }

  /**
   * Low impact denotes that customers may not be impacted by the problem yet.
   */
  public static low(title: string, props: IncidentTemplateProps): IncidentTemplate {
    return new IncidentTemplate(4, title, props);
  }

  /**
   * No impact denotes that customers aren't currently impacted but urgent action is needed to avoid impact.
   */
  public static noImpact(title: string, props: IncidentTemplateProps): IncidentTemplate {
    return new IncidentTemplate(5, title, props);
  }
  readonly cfnEntry: CfnResponsePlan.IncidentTemplateProperty;

  constructor(impact: number, title: string, props: IncidentTemplateProps) {
    this.cfnEntry = {
      impact: impact,
      title: title,
      ...props,
    };
  }

}

/**
 * Provides props IncidentResponse
 */
export interface IncidentResponseProps {
  /**
   * The actions that the response plan starts at the beginning of an incident.
   */
  readonly actions: IncidentResponseAction[];

  /**
   * Details used to create an incident when using this response plan.
   */
  readonly incidentTemplate: IncidentTemplate;
  /**
   * The AWS Chatbot chat channel used for collaboration during an incident.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-chatchannel
   */
  readonly chatChannel?: CfnResponsePlan.ChatChannelProperty | IResolvable;
  /**
   * The human readable name of the response plan.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-displayname
   */
  readonly displayName?: string;
  /**
   * The contacts and escalation plans that the response plan engages during an incident.
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-engagements
   */
  readonly engagements?: string[];
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
   *
   * @link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-tags
   */
  readonly tags?: CfnTag[];
}

/**
 * Provides L2 construct for https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#aws-resource-ssmincidents-responseplan-properties
 */
export class IncidentResponse extends Construct {
  readonly cfnResponsePlan: CfnResponsePlan;
  constructor(scope: Construct, id: string, props: IncidentResponseProps) {
    super(scope, id);

    this.cfnResponsePlan = new CfnResponsePlan(this, 'Resource', {
      actions: props.actions.map(a => a.cfnEntry),
      name: id,
      incidentTemplate: props.incidentTemplate.cfnEntry,
      chatChannel: props.chatChannel,
      tags: props.tags,
      engagements: props.engagements,
      displayName: props.displayName,
    });
  }
}
