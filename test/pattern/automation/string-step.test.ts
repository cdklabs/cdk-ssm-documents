import * as assert from 'assert';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AutomationDocument, AutomationDocumentProps, DataTypeEnum, StringStep, SynthUtils } from '../../../lib';
import { Simulation } from '../../../lib/simulation/simulation';


describe('StringStep', function() {
  describe('#invoke()', function() {
    it('Strings are converted to their steps', function() {
      // Declare Automation Document
      class MyAutomationDoc extends AutomationDocument {
        constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
          super(scope, id, {
            ...props,
            docInputs: [{ name: 'MyInput', inputType: DataTypeEnum.STRING, defaultValue: 'bar' }],
            docOutputs: [{ name: 'myPython.MyOutput', outputType: DataTypeEnum.STRING }],
          });

          StringStep.fromYaml(this, `
                        name: sleep
                        action: aws:sleep
                        inputs:
                          Duration: PT0M
                    `);

          StringStep.fromYaml(this, `
                        name: myBranch
                        action: aws:branch
                        inputs:
                          Choices:
                          - NextStep: myPython
                            Variable: "{{MyInput}}"
                            StringEquals: foo
                          Default:
                            sleep
                    `);

          StringStep.fromYaml(this, `
                        name: myPython
                        action: "aws:executeScript"
                        outputs:
                          - Name: "MyOutput"
                            Type: "String"
                            Selector: "$.Payload.MyReturn"
                        inputs: 
                          Runtime: "python3.6"
                          Handler: "my_func"
                          InputPayload: 
                            "MyInput": "{{MyInput}}"
                          Script: >
                            def my_func(args, context):
                              return {"MyReturn": args["MyInput"] + "-suffix"}
                    `);
        }
      }

      // Synthesize it
      const stack: Stack = new Stack();
      const myAutomationDoc = new MyAutomationDoc(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
      });
      SynthUtils.synthesize(stack);

      // Execute simulation
      const simOutput = Simulation.ofAutomation(myAutomationDoc, {}).simulate({ MyInput: 'foo' });

      // Assert simulation result
      assert.strictEqual((simOutput.outputs??{})['myPython.MyOutput'], 'foo-suffix');
      assert.deepStrictEqual(simOutput.executedSteps, ['sleep', 'myBranch', 'myPython']);
    });
  });
});
