import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AutomationDocument } from '../document/automation-document';
import { DataTypeEnum } from '../domain/data-type';
import { StringVariable } from '../interface/variables/string-variable';
import { AwsApiStep } from '../parent-steps/automation/aws-api-step';
import { ExecuteScriptStep, ScriptLanguage } from '../parent-steps/automation/execute-script-step';

export class HelloWorld extends Stack {
  constructor(app: Construct, id: string) {
    super(app, id);
    const doc = new AutomationDocument(this, 'HelloWorld', {
      docInputs: [{
        name: 'Someone',
        inputType: DataTypeEnum.STRING,
        allowedPattern: '[a-zA-Z]+',
      },
      {
        name: 'SnsTopic',
        inputType: DataTypeEnum.STRING,
      }],
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
    doc.addStep(greeting);

    doc.addStep(new AwsApiStep(this, 'PublishToSns', {
      outputs: [],
      service: 'SNS',
      pascalCaseApi: 'publish',
      apiParams: {
        TargetArn: new StringVariable('SnsTopic'),
        Message: greeting.variables().Greeting,
      },
    }));
  }
}