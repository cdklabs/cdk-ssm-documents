import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AccountRootPrincipal, Role } from 'aws-cdk-lib/aws-iam';
import {
  AutomationDocument, HardCodedString, IncidentResponse, IncidentResponseAction, IncidentTemplate,
  Input, PauseStep, StringVariable,
} from '../../lib';

describe('IncidentResponse', function() {
  describe('#Template.fromStack', function() {
    it('Prints the IncidentResponse CFN objects', function() {
      const stack: Stack = new Stack();
      const myAutomationDoc = new AutomationDocument(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [
          Input.ofTypeString('MyInput', { defaultValue: 'a' }),
        ],
      });
      myAutomationDoc.addStep(new PauseStep(stack, 'MyPauseStep', { name: 'MyPauseStep' }));

      const role = new Role(stack, 'myRole', {
        assumedBy: new AccountRootPrincipal(),
      });

      new IncidentResponse(stack, 'MyIncidentResponsePlan', {
        incidentTemplate: IncidentTemplate.critical('EC2 Instance Utilization Impacted', {
          summary: 'EC2 Instance Impacted',
        }),
        actions: [
          IncidentResponseAction.ssmAutomation(myAutomationDoc, role, {
            parameters: {
              IncidentRecordArn: StringVariable.of('INCIDENT_RECORD_ARN'),
              InvolvedResources: StringVariable.of('INVOLVED_RESOURCES'),
              SomeHardCodedVal: HardCodedString.of('value'),
            },
          }),
        ],
      });

      const template = Template.fromStack(stack);
      console.log(JSON.stringify(template.toJSON()));
      template.templateMatches({
        Resources: {
          MyAutomationDocC39268E9: {
            Properties: {
              Content: {
                description: 'MyDoc',
                mainSteps: [
                  {
                    action: 'aws:pause',
                    inputs: {},
                    name: 'MyPauseStep',
                  },
                ],
                parameters: {
                  MyInput: {
                    default: 'a',
                    type: 'String',
                  },
                },
                schemaVersion: '0.3',
              },
              DocumentFormat: 'JSON',
              DocumentType: 'Automation',
              Tags: [
                {
                  Key: 'CdkGenerated',
                  Value: 'true',
                },
              ],
            },
            Type: 'AWS::SSM::Document',
          },
          MyIncidentResponsePlan7D637D29: {
            Properties: {
              Actions: [
                {
                  SsmAutomation: {
                    DocumentName: { Ref: 'MyAutomationDocC39268E9' },
                    DynamicParameters: [
                      {
                        Key: 'IncidentRecordArn',
                        Value: {
                          Variable: 'INCIDENT_RECORD_ARN',
                        },
                      },
                      {
                        Key: 'InvolvedResources',
                        Value: {
                          Variable: 'INVOLVED_RESOURCES',
                        },
                      },
                    ],
                    Parameters: [
                      {
                        Key: 'SomeHardCodedVal',
                        Values: [
                          'value',
                        ],
                      },
                    ],
                    RoleArn: {
                      'Fn::GetAtt': [
                        'myRoleE60D68E8',
                        'Arn',
                      ],
                    },
                  },
                },
              ],
              IncidentTemplate: {
                Impact: 1,
                Summary: 'EC2 Instance Impacted',
                Title: 'EC2 Instance Utilization Impacted',
              },
              Name: 'MyIncidentResponsePlan',
            },
            Type: 'AWS::SSMIncidents::ResponsePlan',
          },
          myRoleE60D68E8: {
            Properties: {
              AssumeRolePolicyDocument: {
                Statement: [
                  {
                    Action: 'sts:AssumeRole',
                    Effect: 'Allow',
                    Principal: {
                      AWS: {
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });
  });
});
