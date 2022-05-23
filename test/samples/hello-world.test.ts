import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SynthUtils, HelloWorld } from '../../lib';

describe('HelloWorld', function() {
  describe('#simulate()', function () {
    it('Simulation for Hello World succeeds', function () {
      const stack: Stack = new Stack();
      new HelloWorld(stack, 'HelloWorldDoc', {});
      SynthUtils.synthesize(stack);
      // Use below to simulate execution locally
      // helloWorld.runSimulation({ Someone: 'Friend', SnsTopic: 'arn:aws:sns:us-east-2:<ACCOUNT>:<TOPIC>' });
      Template.fromStack(stack).templateMatches(
        {
          Resources:
            {
              HelloWorldDocHelloWorldDocCfnDoc556C8BDA:
                {
                  Type: 'AWS::SSM::Document',
                  Properties:
                    {
                      Content: {
                        description: 'HelloWorldDoc',
                        schemaVersion: '0.3',
                        parameters: {
                          Someone: { type: 'String', allowedPattern: '[a-zA-Z]+' },
                          SnsTopic: { type: 'String' },
                        },
                        mainSteps: [{
                          name: 'PrependWithGreeting',
                          action: 'aws:executeScript',
                          inputs: {
                            Runtime: 'python3.6',
                            Handler: 'my_func',
                            Script: 'def my_func(args, context):\n    return {"Greeting": "Hello " + args["Someone"]}\n\n',
                            InputPayload: { Someone: '{{ Someone }}' },
                          },
                          outputs: [
                            { Name: 'Greeting', Selector: '$.Payload.Greeting', Type: 'String' },
                          ],
                        },
                        {
                          name: 'PublishToSns',
                          action: 'aws:executeAwsApi',
                          inputs: {
                            Service: 'SNS',
                            Api: 'publish',
                            TargetArn: '{{SnsTopic}}',
                            Message: '{{PrependWithGreeting.Greeting}}',
                          },
                        }],
                      },
                      DocumentFormat: 'JSON',
                      DocumentType: 'Automation',
                      Tags: [{ Key: 'CdkGenerated', Value: 'true' }],
                    },
                },
            },
        },
      );
    });
  });
});