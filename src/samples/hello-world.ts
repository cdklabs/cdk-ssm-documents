import { Construct } from 'constructs';
import { AutomationDocument, AutomationDocumentProps } from '../document/automation-document';
import { DataTypeEnum } from '../domain/data-type';
import { StringVariable } from '../interface/variables/string-variable';
import { AwsApiStep } from '../parent-steps/automation/aws-api-step';
import { ExecuteScriptStep, ScriptLanguage } from '../parent-steps/automation/execute-script-step';

export class HelloWorld extends AutomationDocument {
  constructor(app: Construct, id: string, props: AutomationDocumentProps) {
    super(app, id, {
      ...props,
      ...{
        docInputs: [{
          name: 'Someone',
          inputType: DataTypeEnum.STRING,
          allowedPattern: '[a-zA-Z]+',
        },
        {
          name: 'SnsTopic',
          inputType: DataTypeEnum.STRING,
        }],
      },
    });

    const greeting = new ExecuteScriptStep(this, 'PrependWithGreeting', {
      language: ScriptLanguage.PYTHON,
      inlineCode: 'def my_func(args, context):\n' +
        '    return {"Greeting": "Hello " + args["Someone"]}\n' +
        '\n',
      handlerName: 'my_func',
      inputs: ['Someone'],
      outputs: [{
        outputType: DataTypeEnum.STRING,
        name: 'Greeting',
        selector: '$.Payload.Greeting',
      }],
    });

    new AwsApiStep(this, 'PublishToSns', {
      outputs: [],
      service: 'SNS',
      pascalCaseApi: 'publish',
      apiParams: {
        TargetArn: new StringVariable('SnsTopic'),
        Message: greeting.variables().Greeting,
      },
    });
  }
}