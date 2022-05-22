# SSM Document CDK
This library provides a utility implement SSM Documents using code. The SSM Document objects can be used to print the document to YAML/JSON and allows you to simulate a document execution locally.

## Problem Statement
Writing SSM Docuemnts is cumbersome because interacting with the JSON or YAML documents provides little compile time support for errors. While the SSM UI provides a rich experience for creating documents, the SSM UI provides no ability to reuse steps across documents.

Testing documents can only be performed by running the SSM Execution which is time-consuming. There is also no way to mock results in SSM Execution so developers are forced to create the necessary infrastructure in the AWS account prior to executing the SSM Document.

Exceptions are at times difficult to find or understand from the SSM Execution because sometimes the underlying issue is hidden and the error that is propagated is unrelated.

## Solution

This library provides a high level abstraction of the SSM Documents where each step as well as the document itself are objects. The properties required for construction of these objects correspond to the settings applicable them making them intuitive to create.

The library is implemented using JSII and can therefore be exported to other JSII supported languages (Java, Python).

You would use this if you want:
1. Ability to test without deploying resources or running a real SSM execution on AWS
2. Ability to reuse steps between docs by reusing available objects
3. Build higher level logical groupings of reusable groups of steps ("Patterns")
4. Easy interface for creating Docs
5. Test existing documents by importing them from a file (or string) and simulate them locally

## Usage

### Document Creation

Typescript usage (Execute AWS API Step)...

```ts
// Extend AutomationDocument
class MyAutomationDoc extends AutomationDocument {
  constructor(scope: Construct, id: string, props: AutomationDocumentProps) {
    super(scope, id, props);

    // Define your steps...
    new PauseStep(this, "MyPauseStep", {name: "MyPauseStep", pauseHook: new MockPause()});
    // You can explore avilable steps and initialize using AutomationSteps.newPauseStep(...)
    
    new ExecuteScriptStep(this, "MyExecuteStep", {
      name: "step1",
      handlerName: "my_func",
      language: ScriptLanguage.PYTHON,
      fullPathToCode: resolve("test/test_file.py"),
      // OR .inlineCode("def my_func(args, context):\n  return {'MyReturn': args['MyInput'] + '-suffix'}\n")
      outputs: [{
          outputType: DataTypeEnum.STRING,
          name: "MyFuncOut",
          selector: "$.Payload.MyReturn"}],
      inputs: ["MyInput"]})
  }
}
```

### Document JSON/YAML Export as YAML/JSON

To print the above document object as a JSON (or YAML), do the following:

```ts
const stack: Stack = new Stack();
const myDoc = new MyAutomationDoc(stack, "MyAutomationDoc", {
  documentFormat: DocumentFormat.JSON,
  documentName: "MyDoc",
  docInputs: [{name: "MyInput", defaultValue: "a", inputType: DataTypeEnum.STRING}]
});
SynthUtils.synthesize(stack)
const myDocJson = myDoc.print(); // Print YAML by setting the documentFormat to YAML
```


### Document Simulation

To run the document object in simulation mode, use the below. Simulation mode does NOT hit the SSM API, rather it mimics the execution that will happen in an SSM execution. The run happens locally and allows you to mock the calls to external services (AWS APIs for example) or to invoke those services using your local credentials.

```ts
const stack: Stack = new Stack();
const myDoc = new MyAutomationDoc(stack, "MyAutomationDoc", {
  documentFormat: DocumentFormat.JSON,
  documentName: "MyDoc",
  docInputs: [{name: "MyInput", defaultValue: "a", inputType: DataTypeEnum.STRING}]
});
SynthUtils.synthesize(stack)
const myDocJson = myDoc.runSimulation({MyInput: "FooBar"});
```

### Use in CDK Stack

You can create a CDK stack and deploy the Automation Document as follows:

```ts
export class AutomationDocCdk extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const myDoc = new MyAutomationDoc(stack, "MyAutomationDoc", {
      documentFormat: DocumentFormat.JSON,
      documentName: "MyDoc",
      docInputs: [{name: "MyInput", defaultValue: "a", inputType: DataTypeEnum.STRING}]
    });
  }
}
```

The stack created will deploy the Automation Document!

## Patterns (High-Level Constructs)

In typical CDK style, you can assemble often used groups of steps into higher level Constructs.

Consider if you typically create AutomationDocuments that start with logging the time and end with logging the total time taken. You can create a high-level Automation Document and extend that when you implement an Automation.

See the `TimedDocument` class to see such implementation.

Or consider the case of multiple steps that are always run together such as rebooting and instance and waiting for it to be active.

The below example is copied from the `RebootInstanceAndWait` class:

```ts
import {IVariable} from "./variable";

export class RebootInstanceAndWait extends Construct {
    constructor(scope: Construct, id: string, instanceId: IVariable) {
        super(scope, id);
        new AwsApiStep(this, "RebootInstances", {
            service: "ec2",
            camelCaseApi: "RebootInstances",
            apiParams: {'InstanceIds': [instanceId]},
            outputs: []
        });
        new WaitForResourceStep(this, "DescribeInstances", {
            service: "ec2",
            camelCaseApi: "DescribeInstances",
            apiParams: {'InstanceIds': [instanceId]},
            selector: "$.Reservations[0].Instances[0].State.Name",
            desiredValues: ['running']
        });
    }
}
```

Now, you can use `RebootInstanceAndWait` as a step in a document and the child steps will be included.

## Existing Documents

Do you have an existing document that you want to convert to code and/or test locally using the simulation?

### Import Existing Document

Here is an example of how you can import an existing document and then simulate it locally with mocked AWS resources:

```ts
// Initialize Mocks
const sleeper = new MockSleep();
const awsInvoker = new MockAwsInvoker();
awsInvoker.whenThen(
    // when invoked with...
    {awsApi: 'listBuckets', awsParams: {}, service: 'S3'},
    // then response with...
    {Owner: {ID: "BUCKET_ID"}})

// ======> Create document from file <=======
const stack: Stack = new Stack();
const myAutomationDoc = StringDocument.fromFile(stack, "MyAutomationDoc", 'test/myAutomation.json', {
                                                                        // ====================
    sleepHook: sleeper,
    awsInvoker: awsInvoker
});
SynthUtils.synthesize(stack);

// Execute simulation
const simOutput = myAutomationDoc.runSimulation({});

// Assert simulation result
assert.deepEqual(awsInvoker.previousInvocations, [
    { awsApi: 'listBuckets', awsParams: {}, service: 'S3' }]);
assert.deepEqual(sleeper.sleepMilliInvocations, [3000]);
assert.deepEqual(simOutput.outputs['simulationSteps'], ['MySleep', 'GetBucketId']);
```

### Import Existing Steps

You can also grab a string step (or steps) and import them as CDK step constructs.
This can be used to convert existing documents into CDK with each step defined separately.
Doing so will allow you do modify steps and reuse them in other documents.

Here's a simple example of a sleep step copy and pasted from its original yaml:

```ts
StringStep.fromYaml(this, `
    name: sleep
    action: aws:sleep
    inputs:
      Duration: PT0M
`, {});
```

The above will return the CDK construct SleepStep.

## What is Planned?

This library currently contains AutomationDocument steps.

Also planned is the ability to run Command documents.

Stay tuned!

## Security
See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License
This project is licensed under the Apache-2.0 License.
