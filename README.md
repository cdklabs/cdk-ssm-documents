# SSM Document CDK
This library provides a code-based utility for implementing SSM Documents. The SSM Document objects can be used to print YAML/JSON documents and to mimic document processing locally.

This library abstracts SSM Documents at a high level, with each step as well as the document itself being objects. The properties needed to build these objects correlate to the settings that apply to them, making them simple to make.
This library can be used to test your document locally before deploying it to SSM.

Since the library is written in JSII, it can be exported to other languages that support JSII (Java, Python).

This is what you'd use if you wanted to:
1. The ability to test without deploying resources or executing an actual SSM on AWS.
2. Reusability of steps between documents by reusing existing items
3. Create logical higher-level groupings of reusable groups of steps ("Patterns")
4. Simple to use interface for writing documents
5. Import existing documents from a file (or string) and mimic them locally to test them.

## Usage

### Document Creation

Typescript usage (Execute AWS API Step)...
The below creates the AutomationDocument in an AWS CDK stack.
```ts
import { AutomationDocument } from './automation-document';

export class HelloWorld extends Stack {
  constructor(app: Construct, id: string) {
    super(app, id);

    // Create AutomationDocument
    const myDoc = new AutomationDocument(this, "MyDoc", {
      documentFormat: DocumentFormat.JSON,
      documentName: "MyDoc",
      docInputs: [Input.ofTypeString('MyInput', { defaultValue: 'a' })],
    });

    // Define your steps...
    myDoc.addStep(new PauseStep(this, "MyPauseStep", {
      name: "MyPauseStep",
      explicitNextStep: StepRef.fromName("step1") // Optional (will default to next added step)
    }));

    myDoc.addStep(new ExecuteScriptStep(this, "MyExecuteStep", {
      name: "step1",
      language: ScriptLanguage.python(PythonVersion.VERSION_3_11, 'my_func'),
      code: ScriptCode.fromFile(resolve("test/test_file.py")),
      // OR ScriptCode.inline("def my_func(args, context):\n  return {'MyReturn': args['MyInput'] + '-suffix'}\n"),
      outputs: [{
        outputType: DataTypeEnum.STRING,
        name: "MyFuncOut",
        selector: "$.Payload.MyReturn"
      }],
      onFailure: OnFailure.abort(),
      inputPayload: { MyInput: StringVariable.of('MyInput') },
    }));
  }
}
```

### Document JSON/YAML Export as YAML/JSON

You can deploy the above document using CDK.
To print the above document object as a JSON (or YAML), do the following:

```ts
const myDocJson = myDoc.print(); // Print YAML by setting the documentFormat to YAML
```


### Document Simulation

To run the document object in simulation mode, use the below. Simulation mode does NOT hit the SSM API, rather it mimics the execution that will happen in an SSM execution. The run happens locally and allows you to mock the calls to external services (AWS APIs for example) or to invoke those services using your local credentials.

```ts
import { Simulation } from './simulation';

const myDocJson = Simulation.ofAutomation(myDoc, {}).simulate({ MyInput: "FooBar" });
```

### Command Documents

Below is an example of how to use the library to create Command documents.
Simulation for command documents is not yet supported for all command plugins.
You can use a Docker image/container as a playground for testing the Command document execution for the supported plugins.

In this example there is a complete CDK stack. Notice that the `CommandDocument` is saved as a field so that it can be tested from the test code.
```typescript
export class HelloCdkStack extends Stack {
  readonly myCommandDoc: CommandDocument;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    this.myCommandDoc = new CommandDocument(this, "MyCommandDoc", {
      docInputs: [Input.ofTypeString('FirstCommand', { defaultValue: 'a' })],
    })
    const runScriptStep = new RunShellScriptStep(this, "MyShellScript", {
      runCommand: [
        StringVariable.of("FirstCommand"),
        HardCodedString.of("mkdir asdf"),
      ],
    });
    this.myCommandDoc.addStep(runScriptStep);
  }
}
```

Below is an example of how you would run a simulation against the above `CommandDocument`.

Currently, `bash` must be available in the container or the executions against the docker will not succeed.

```typescript
test('Test command doc', () => {
  const app = new cdk.App();
  const stack = new HelloCdk.HelloCdkStack(app, 'MyTestStack');
  // 1. $ docker pull amazonlinux
  // 2. $ docker run -di amazonlinux
  const simulation = Simulation.ofCommand(stack.myCommandDoc, {
    simulationPlatform: Platform.LINUX,
    environment: DockerEnvironment.fromContainer('MY_CONTAINER_ID')
  });
  simulation.simulate({FirstCommand: 'mkdir foobar'})
  // 3. The document should run the first command (create 'foobar') and create file 'asdf'
  // 4. $ docker exec -it <container name> bash
  // 5. Ensure that 'asdf' and 'foobar' were written to /tmp
});
```

## Patterns (High-Level Constructs)

In typical CDK style, you can assemble often used groups of steps into higher level Constructs.

Consider if you typically create AutomationDocuments that start with logging the time and end with logging the total time taken. You can create a high-level Automation Document and extend that when you implement an Automation.

See the `TimedDocument` class to see such implementation.

Or consider the case of multiple steps that are always run together such as rebooting and instance and waiting for it to be active.

The below example is copied from the `RebootInstanceAndWait` class:

```ts
export class RebootInstanceAndWait extends CompositeAutomationStep {

  readonly reboot: AwsApiStep;
  readonly describe: WaitForResourceStep;

  constructor(scope: Construct, id: string, instanceId: IStringVariable) {
    super(scope, id);
    this.reboot = new AwsApiStep(this, 'RebootInstances', {
      service: AwsService.EC2,
      pascalCaseApi: 'RebootInstances',
      apiParams: { InstanceIds: [instanceId] },
      outputs: [],
    });
    this.describe = new WaitForResourceStep(this, 'DescribeInstances', {
      service: AwsService.EC2,
      pascalCaseApi: 'DescribeInstances',
      apiParams: { InstanceIds: [instanceId] },
      selector: '$.Reservations[0].Instances[0].State.Name',
      desiredValues: ['running'],
    });
  }

  addToDocument(doc: AutomationDocumentBuilder): void {
    doc.addStep(this.reboot);
    doc.addStep(this.describe);
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
    {awsApi: 'listBuckets', awsParams: {}, service: AwsService.S3},
    // then response with...
    {Owner: {ID: "BUCKET_ID"}})

// ======> Create document from file <=======
const stack: Stack = new Stack();
const myAutomationDoc = StringDocument.fromFile(stack, "MyAutomationDoc", 'test/myAutomation.json', {
                                                                        // ======================
});

// Execute simulation
const simOutput = Simulation.ofAutomation(myAutomationDoc, {
  sleepHook: sleeper,
  awsInvoker: awsInvoker
}).simulate({});

// Assert simulation result
assert.deepEqual(awsInvoker.previousInvocations, [
    { awsApi: 'listBuckets', awsParams: {}, service: AwsService.S3 }]);
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

## Incident Manager

This library provides L2 constructs for IncidentResponse as follows:

```typescript
new IncidentResponse(this, "MyIncidentResponsePlan", {
      incidentTemplate: IncidentTemplate.critical('EC2 Instance Utilization Impacted', {
        summary: 'EC2 Instance Impacted'
      }),
      actions: [
        IncidentResponseAction.ssmAutomation(myAutomationDoc, ec2CwAlarmRole, {
          parameters: {
            IncidentRecordArn: StringVariable.of('INCIDENT_RECORD_ARN'),
            InvolvedResources: StringVariable.of('INVOLVED_RESOURCES'),
            AutomationAssumeRole: HardCodedString.of(ec2CwAlarmRole.roleArn),
          }
        })
      ]
});
```

Notice how the `myAutomationDoc` is specified which is a reference to an AutomationDocument created using this library.

## What is Planned?

This library currently contains AutomationDocument and CommandDocument steps.
Simulation for AutomationDocuments is fully supported. Simulation for CommandDocuments is limited.

Stay tuned!

## Related Projects

- https://github.com/udondan/cdk-ssm-document

## Security
See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License
This project is licensed under the Apache-2.0 License.

<!-- Updated: Fri May 30 12:31:11 CEST 2025 -->
