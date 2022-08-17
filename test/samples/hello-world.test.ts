import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SynthUtils, HelloWorld } from '../../lib';

describe('HelloWorld', function() {
  describe('#simulate()', function () {
    it('Simulation for Hello World succeeds', function () {
      const app = new App();
      const myStack = new HelloWorld(app, 'HelloWorldDoc');
      SynthUtils.synthesize(myStack);
      // Use below to simulate execution locally
      // helloWorld.runSimulation({ Someone: 'Friend', SnsTopic: 'arn:aws:sns:us-east-2:<ACCOUNT>:<TOPIC>' });
      console.log(JSON.stringify(Template.fromStack(myStack).toJSON()));
      Template.fromStack(myStack).templateMatches(
        {
          Resources: {
            HelloWorld7964D1E8: {
              Type: 'AWS::SSM::Document',
              Properties: {
                Content: {
                  description: 'HelloWorld',
                  schemaVersion: '0.3',
                  parameters: {
                    Someone: {
                      type: 'String', allowedPattern: '[a-zA-Z]+',
                    },
                    SnsTopic: {
                      type: 'String',
                    },
                  },
                  mainSteps: [{
                    name: 'PrependWithGreeting',
                    action: 'aws:executeScript',
                    inputs: {
                      Runtime: 'python3.6',
                      Handler: 'my_func',
                      Script: 'def my_func(args, context):\n    return {"Greeting": "Hello " + args["someone"]}\n\n',
                      InputPayload: {
                        someone: '{{ Someone }}',
                      },
                    },
                    outputs: [{
                      Name: 'Greeting', Selector: '$.Payload.Greeting', Type: 'String',
                    }],
                  }, {
                    name: 'PublishToSns',
                    action: 'aws:executeAwsApi',
                    inputs: {
                      Service: 'SNS', Api: 'publish', TargetArn: '{{ SnsTopic }}', Message: '{{ PrependWithGreeting.Greeting }}',
                    },
                  }],
                },
                DocumentFormat: 'JSON',
                DocumentType: 'Automation',
                Tags: [
                  { Key: 'CdkGenerated', Value: 'true' },
                ],
              },
            },
          },
        },
      );
    });
  });
});