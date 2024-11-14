import * as assert from 'assert';
import { Stack } from 'aws-cdk-lib';
import { AutomationDocument, DataTypeEnum, Input, Simulation, StringStep } from '../../../lib';


describe('StringStep', function() {
  describe('#invoke()', function() {
    it('Strings are converted to their steps', function() {
      const stack: Stack = new Stack();
      const myAutomationDoc = new AutomationDocument(stack, 'MyAutomationDoc', {
        documentName: 'MyDoc',
        docInputs: [Input.ofTypeString('MyInput', { defaultValue: 'bar' })],
        docOutputs: [{ name: 'myPython.MyOutput', outputType: DataTypeEnum.STRING }],
      });
      myAutomationDoc.addStep(StringStep.fromYaml(stack, `
                        name: sleep
                        action: aws:sleep
                        inputs:
                          Duration: PT0M
                    `));

      myAutomationDoc.addStep(StringStep.fromYaml(stack, `
                        name: myBranch
                        action: aws:branch
                        inputs:
                          Choices:
                          - NextStep: myPython
                            Variable: "{{ MyInput }}"
                            StringEquals: foo
                          Default:
                            sleep
                    `));

      myAutomationDoc.addStep(StringStep.fromYaml(stack, `
                        name: myPython
                        action: "aws:executeScript"
                        outputs:
                          - Name: "MyOutput"
                            Type: "String"
                            Selector: "$.Payload.MyReturn"
                        inputs: 
                          Runtime: "python3.11"
                          Handler: "my_func"
                          InputPayload: 
                            "MyInput": "{{ MyInput }}"
                          Script: >
                            def my_func(args, context):
                              return {"MyReturn": args["MyInput"] + "-suffix"}
                    `));

      // Execute simulation
      const simOutput = Simulation.ofAutomation(myAutomationDoc, {}).simulate({ MyInput: 'foo' });

      // Assert simulation result
      assert.strictEqual((simOutput.outputs??{})['myPython.MyOutput'], 'foo-suffix');
      assert.deepStrictEqual(simOutput.executedSteps, ['sleep', 'myBranch', 'myPython']);
    });
  });
});
