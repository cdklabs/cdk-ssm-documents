import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AutomationDocument } from '../document/automation-document';
import { DataTypeEnum } from '../domain/data-type';
import { Input } from '../domain/input';
import { StringVariable } from '../interface/variables/string-variable';
import { AwsApiStep } from '../parent-steps/automation/aws-api-step';
import {
  ExecuteScriptStep,
  PythonVersion,
  ScriptCode,
  ScriptLanguage,
} from '../parent-steps/automation/execute-script-step';

export class HelloWorld extends Stack {
  constructor(app: Construct, id: string) {
    super(app, id);
    const doc = new AutomationDocument(this, 'HelloWorld', {
      docInputs: [
        Input.ofTypeString('Someone', { allowedPattern: '[a-zA-Z]+' }),
        Input.ofTypeString('SnsTopic'),
      ],
    });

    const greeting = new ExecuteScriptStep(this, 'PrependWithGreeting', {
      language: ScriptLanguage.python(PythonVersion.VERSION_3_6, 'my_func'),
      code: ScriptCode.inline('def my_func(args, context):\n' +
        '    return {"Greeting": "Hello " + args["someone"]}\n' +
        '\n'),
      inputPayload: { someone: StringVariable.of('Someone') },
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