# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproveStep <a name="ApproveStep" id="cdk-ssm-document.ApproveStep"></a>

AutomationStep implementation for aws:approve https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-approve.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.ApproveStep.Initializer"></a>

```typescript
import { ApproveStep } from 'cdk-ssm-document'

new ApproveStep(scope: Construct, id: string, props: ApproveStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ApproveStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.ApproveStepProps">ApproveStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.ApproveStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.ApproveStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.ApproveStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.ApproveStepProps">ApproveStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ApproveStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.ApproveStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.ApproveStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.ApproveStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.ApproveStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.ApproveStep.executeStep">executeStep</a></code> | May perform a real approval ask based on the params used during instance creation. |
| <code><a href="#cdk-ssm-document.ApproveStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.ApproveStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.ApproveStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ApproveStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.ApproveStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.ApproveStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.ApproveStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.ApproveStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

May perform a real approval ask based on the params used during instance creation.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ApproveStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.ApproveStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ApproveStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.ApproveStep.isConstruct"></a>

```typescript
import { ApproveStep } from 'cdk-ssm-document'

ApproveStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.ApproveStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ApproveStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.ApproveStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.approveHook">approveHook</a></code> | <code><a href="#cdk-ssm-document.IApproveHook">IApproveHook</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.approvers">approvers</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.message">message</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.minRequiredApprovals">minRequiredApprovals</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.notificationArn">notificationArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.ApproveStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.ApproveStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.ApproveStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.ApproveStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.ApproveStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ApproveStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.ApproveStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.ApproveStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ApproveStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ApproveStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ApproveStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.ApproveStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.ApproveStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `approveHook`<sup>Required</sup> <a name="approveHook" id="cdk-ssm-document.ApproveStep.property.approveHook"></a>

```typescript
public readonly approveHook: IApproveHook;
```

- *Type:* <a href="#cdk-ssm-document.IApproveHook">IApproveHook</a>

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="cdk-ssm-document.ApproveStep.property.approvers"></a>

```typescript
public readonly approvers: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `message`<sup>Optional</sup> <a name="message" id="cdk-ssm-document.ApproveStep.property.message"></a>

```typescript
public readonly message: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `minRequiredApprovals`<sup>Optional</sup> <a name="minRequiredApprovals" id="cdk-ssm-document.ApproveStep.property.minRequiredApprovals"></a>

```typescript
public readonly minRequiredApprovals: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

---

##### `notificationArn`<sup>Optional</sup> <a name="notificationArn" id="cdk-ssm-document.ApproveStep.property.notificationArn"></a>

```typescript
public readonly notificationArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ApproveStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApproveStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.ApproveStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.ApproveStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### AssertAwsResourceStep <a name="AssertAwsResourceStep" id="cdk-ssm-document.AssertAwsResourceStep"></a>

AutomationStep implementation of aws:assertAwsResourceProperty.

https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-assertAwsResourceProperty.html

#### Initializers <a name="Initializers" id="cdk-ssm-document.AssertAwsResourceStep.Initializer"></a>

```typescript
import { AssertAwsResourceStep } from 'cdk-ssm-document'

new AssertAwsResourceStep(scope: Construct, id: string, props: AssertAwsResourceStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps">AssertAwsResourceStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.AssertAwsResourceStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.AssertAwsResourceStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.AssertAwsResourceStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.AssertAwsResourceStepProps">AssertAwsResourceStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.listInputs">listInputs</a></code> | Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}"). |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.listOutputs">listOutputs</a></code> | There are no outputs for this step. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.executeStep">executeStep</a></code> | If the value found matches one of the desiredValues, then this function returns. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.AssertAwsResourceStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.AssertAwsResourceStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.AssertAwsResourceStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.AssertAwsResourceStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}").

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.AssertAwsResourceStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

There are no outputs for this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.AssertAwsResourceStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.AssertAwsResourceStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

If the value found matches one of the desiredValues, then this function returns.

Otherwise it throws.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.AssertAwsResourceStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.AssertAwsResourceStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.AssertAwsResourceStep.isConstruct"></a>

```typescript
import { AssertAwsResourceStep } from 'cdk-ssm-document'

AssertAwsResourceStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.AssertAwsResourceStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.apiParams">apiParams</a></code> | <code><a href="#cdk-ssm-document.DictFormat">DictFormat</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-document.Output">Output</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.selector">selector</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.AssertAwsResourceStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.AssertAwsResourceStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.AssertAwsResourceStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.AssertAwsResourceStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.AssertAwsResourceStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AssertAwsResourceStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.AssertAwsResourceStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.AssertAwsResourceStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.AssertAwsResourceStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.AssertAwsResourceStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.AssertAwsResourceStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.AssertAwsResourceStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.AssertAwsResourceStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-document.AssertAwsResourceStep.property.apiParams"></a>

```typescript
public readonly apiParams: DictFormat;
```

- *Type:* <a href="#cdk-ssm-document.DictFormat">DictFormat</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.AssertAwsResourceStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `javaScriptApi`<sup>Required</sup> <a name="javaScriptApi" id="cdk-ssm-document.AssertAwsResourceStep.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-document.AssertAwsResourceStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-document.Output">Output</a>[]

---

##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-document.AssertAwsResourceStep.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.AssertAwsResourceStep.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-document.AssertAwsResourceStep.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-document.AssertAwsResourceStep.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.AssertAwsResourceStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.AssertAwsResourceStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### AutomationDocument <a name="AutomationDocument" id="cdk-ssm-document.AutomationDocument"></a>

The AutomationDocuemnt used to both build the SSM Automation yaml/json and to use in simulation.

The AutomationDocument will delegate execution responsibility to the AutomationSteps that it receives.
The SsmDocument parent class contains methods to runSimulation() as well as print().

#### Initializers <a name="Initializers" id="cdk-ssm-document.AutomationDocument.Initializer"></a>

```typescript
import { AutomationDocument } from 'cdk-ssm-document'

new AutomationDocument(scope: Construct, id: string, props: AutomationDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AutomationDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.AutomationDocumentProps">AutomationDocumentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.AutomationDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.AutomationDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.AutomationDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.AutomationDocumentProps">AutomationDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AutomationDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.AutomationDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-document.AutomationDocument.runSimulation">runSimulation</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |

---

##### `toString` <a name="toString" id="cdk-ssm-document.AutomationDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `print` <a name="print" id="cdk-ssm-document.AutomationDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `runSimulation` <a name="runSimulation" id="cdk-ssm-document.AutomationDocument.runSimulation"></a>

```typescript
public runSimulation(inputs: {[ key: string ]: any}): DocumentResult
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Executes the SSM Document in simluation mode.
This method DOES NOT result in invocation of SSM APIs.
Rather, all steps are executed locally and mimic the behavior of SSM.
If any inputs are not provided in this function, the specified defaults for the inputs will be used.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.AutomationDocument.runSimulation.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

the inputs to feed into the simulated execution.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AutomationDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.AutomationDocument.isConstruct"></a>

```typescript
import { AutomationDocument } from 'cdk-ssm-document'

AutomationDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.AutomationDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.stepCollector">stepCollector</a></code> | <code><a href="#cdk-ssm-document.StepCollector">StepCollector</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationDocument.property.header">header</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.AutomationDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-document.AutomationDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-document.AutomationDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-document.AutomationDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.AutomationDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.AutomationDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a>

---

##### `stepCollector`<sup>Required</sup> <a name="stepCollector" id="cdk-ssm-document.AutomationDocument.property.stepCollector"></a>

```typescript
public readonly stepCollector: StepCollector;
```

- *Type:* <a href="#cdk-ssm-document.StepCollector">StepCollector</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.AutomationDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.AutomationDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---


### AutomationStep <a name="AutomationStep" id="cdk-ssm-document.AutomationStep"></a>

Parent class for AutomationSteps.

These steps are using in an AutomationDocument.
You can instantiate steps using the AutomationBuilder for convenience.
You can use these steps to simulate their execution (mimics the SSM run) AND to build their yaml/json declaration.
Control flow of the subsequent step is determined by the currently executing step.
The flow of the execution therefore follows a chain-of-responsibility pattern.
The inputs received into a step AND the outputs of previous steps are merged to form inputs of subsequent steps.

#### Initializers <a name="Initializers" id="cdk-ssm-document.AutomationStep.Initializer"></a>

```typescript
import { AutomationStep } from 'cdk-ssm-document'

new AutomationStep(scope: Construct, id: string, props: AutomationStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AutomationStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.AutomationStepProps">AutomationStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.AutomationStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.AutomationStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.AutomationStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.AutomationStepProps">AutomationStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AutomationStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.AutomationStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.AutomationStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.AutomationStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.AutomationStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.AutomationStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.AutomationStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.AutomationStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.AutomationStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.AutomationStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.AutomationStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.AutomationStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.AutomationStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.AutomationStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.AutomationStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.AutomationStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AutomationStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.AutomationStep.isConstruct"></a>

```typescript
import { AutomationStep } from 'cdk-ssm-document'

AutomationStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.AutomationStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AutomationStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.AutomationStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.AutomationStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.AutomationStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.AutomationStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.AutomationStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.AutomationStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AutomationStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.AutomationStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.AutomationStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.AutomationStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.AutomationStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.AutomationStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.AutomationStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.AutomationStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AutomationStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AutomationStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.AutomationStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.AutomationStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### AwsApiStep <a name="AwsApiStep" id="cdk-ssm-document.AwsApiStep"></a>

AutomationStep implementation of aws:executeAwsApi.

#### Initializers <a name="Initializers" id="cdk-ssm-document.AwsApiStep.Initializer"></a>

```typescript
import { AwsApiStep } from 'cdk-ssm-document'

new AwsApiStep(scope: Construct, id: string, props: AwsApiStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AwsApiStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.AwsApiStepProps">AwsApiStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.AwsApiStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.AwsApiStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.AwsApiStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.AwsApiStepProps">AwsApiStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AwsApiStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.AwsApiStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.AwsApiStep.listInputs">listInputs</a></code> | Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}"). |
| <code><a href="#cdk-ssm-document.AwsApiStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.AwsApiStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.AwsApiStep.executeStep">executeStep</a></code> | Invokes the specified service (param) with the specified api (param) with the specified apiParams (param). |
| <code><a href="#cdk-ssm-document.AwsApiStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.AwsApiStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.AwsApiStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.AwsApiStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.AwsApiStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}").

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.AwsApiStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.AwsApiStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.AwsApiStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Invokes the specified service (param) with the specified api (param) with the specified apiParams (param).

This call will be invoked synchronously.
The input variables in apiParams (param) specified using "{{INPUT}}" syntax will be replaced with the inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.AwsApiStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.AwsApiStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.AwsApiStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.AwsApiStep.isConstruct"></a>

```typescript
import { AwsApiStep } from 'cdk-ssm-document'

AwsApiStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.AwsApiStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.apiParams">apiParams</a></code> | <code><a href="#cdk-ssm-document.DictFormat">DictFormat</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-document.Output">Output</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.AwsApiStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.AwsApiStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.AwsApiStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.AwsApiStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.AwsApiStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AwsApiStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.AwsApiStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.AwsApiStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.AwsApiStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.AwsApiStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.AwsApiStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.AwsApiStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.AwsApiStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-document.AwsApiStep.property.apiParams"></a>

```typescript
public readonly apiParams: DictFormat;
```

- *Type:* <a href="#cdk-ssm-document.DictFormat">DictFormat</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.AwsApiStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `javaScriptApi`<sup>Required</sup> <a name="javaScriptApi" id="cdk-ssm-document.AwsApiStep.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-document.AwsApiStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-document.Output">Output</a>[]

---

##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-document.AwsApiStep.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.AwsApiStep.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.AwsApiStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.AwsApiStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.AwsApiStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### BranchStep <a name="BranchStep" id="cdk-ssm-document.BranchStep"></a>

AutomationStep implementation of aws:branch https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.BranchStep.Initializer"></a>

```typescript
import { BranchStep } from 'cdk-ssm-document'

new BranchStep(scope: Construct, id: string, props: BranchStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.BranchStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.BranchStepProps">BranchStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.BranchStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.BranchStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.BranchStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.BranchStepProps">BranchStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.BranchStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.BranchStep.invoke">invoke</a></code> | Overrides invoke because control flow of execution is different than standard steps. |
| <code><a href="#cdk-ssm-document.BranchStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.BranchStep.listOutputs">listOutputs</a></code> | There is no output from branch steps. |
| <code><a href="#cdk-ssm-document.BranchStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.BranchStep.executeStep">executeStep</a></code> | noop. |
| <code><a href="#cdk-ssm-document.BranchStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.BranchStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.BranchStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Overrides invoke because control flow of execution is different than standard steps.

Will traverse the choices until one evaluated to true; will skip to that choice.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.BranchStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.BranchStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.BranchStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

There is no output from branch steps.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.BranchStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.BranchStep.executeStep"></a>

```typescript
public executeStep(_inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

noop.

The logic performed in the branch step happens in the invoke() function.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.BranchStep.executeStep.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.BranchStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.BranchStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.BranchStep.isConstruct"></a>

```typescript
import { BranchStep } from 'cdk-ssm-document'

BranchStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.BranchStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.BranchStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.BranchStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.choices">choices</a></code> | <code><a href="#cdk-ssm-document.Choice">Choice</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.defaultStepName">defaultStepName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.BranchStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.BranchStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.BranchStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.BranchStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.BranchStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.BranchStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.BranchStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.BranchStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.BranchStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.BranchStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.BranchStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.BranchStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.BranchStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `choices`<sup>Required</sup> <a name="choices" id="cdk-ssm-document.BranchStep.property.choices"></a>

```typescript
public readonly choices: Choice[];
```

- *Type:* <a href="#cdk-ssm-document.Choice">Choice</a>[]

---

##### `defaultStepName`<sup>Optional</sup> <a name="defaultStepName" id="cdk-ssm-document.BranchStep.property.defaultStepName"></a>

```typescript
public readonly defaultStepName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.BranchStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.BranchStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.BranchStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.BranchStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### ChangeInstanceStateStep <a name="ChangeInstanceStateStep" id="cdk-ssm-document.ChangeInstanceStateStep"></a>

AutomationStep implemenation for aws:changeInstanceState https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-changestate.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.ChangeInstanceStateStep.Initializer"></a>

```typescript
import { ChangeInstanceStateStep } from 'cdk-ssm-document'

new ChangeInstanceStateStep(scope: Construct, id: string, props: ChangeInstanceStateStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps">ChangeInstanceStateStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.ChangeInstanceStateStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.ChangeInstanceStateStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.ChangeInstanceStateStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.ChangeInstanceStateStepProps">ChangeInstanceStateStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.listOutputs">listOutputs</a></code> | This step has no outputs. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.ChangeInstanceStateStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.ChangeInstanceStateStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ChangeInstanceStateStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.ChangeInstanceStateStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.ChangeInstanceStateStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

This step has no outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.ChangeInstanceStateStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.ChangeInstanceStateStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ChangeInstanceStateStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.ChangeInstanceStateStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.ChangeInstanceStateStep.isConstruct"></a>

```typescript
import { ChangeInstanceStateStep } from 'cdk-ssm-document'

ChangeInstanceStateStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.ChangeInstanceStateStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.desiredState">desiredState</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.instanceIds">instanceIds</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.checkStateOnly">checkStateOnly</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.force">force</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.ChangeInstanceStateStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.ChangeInstanceStateStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.ChangeInstanceStateStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.ChangeInstanceStateStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.ChangeInstanceStateStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ChangeInstanceStateStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.ChangeInstanceStateStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.ChangeInstanceStateStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ChangeInstanceStateStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ChangeInstanceStateStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ChangeInstanceStateStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.ChangeInstanceStateStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.ChangeInstanceStateStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.ChangeInstanceStateStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="cdk-ssm-document.ChangeInstanceStateStep.property.desiredState"></a>

```typescript
public readonly desiredState: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="cdk-ssm-document.ChangeInstanceStateStep.property.instanceIds"></a>

```typescript
public readonly instanceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-document.ChangeInstanceStateStep.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `checkStateOnly`<sup>Optional</sup> <a name="checkStateOnly" id="cdk-ssm-document.ChangeInstanceStateStep.property.checkStateOnly"></a>

```typescript
public readonly checkStateOnly: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

---

##### `force`<sup>Optional</sup> <a name="force" id="cdk-ssm-document.ChangeInstanceStateStep.property.force"></a>

```typescript
public readonly force: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.ChangeInstanceStateStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.ChangeInstanceStateStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CommandDocument <a name="CommandDocument" id="cdk-ssm-document.CommandDocument"></a>

https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html The CommandDocument will delegate execution responsibility to the CammandSteps that it receives. The SsmDocument parent class contains methods to runSimulation() as well as print().

#### Initializers <a name="Initializers" id="cdk-ssm-document.CommandDocument.Initializer"></a>

```typescript
import { CommandDocument } from 'cdk-ssm-document'

new CommandDocument(scope: Construct, id: string, props: CommandDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CommandDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.CommandDocumentProps">CommandDocumentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.CommandDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.CommandDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.CommandDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.CommandDocumentProps">CommandDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CommandDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.CommandDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-document.CommandDocument.runSimulation">runSimulation</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |

---

##### `toString` <a name="toString" id="cdk-ssm-document.CommandDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `print` <a name="print" id="cdk-ssm-document.CommandDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `runSimulation` <a name="runSimulation" id="cdk-ssm-document.CommandDocument.runSimulation"></a>

```typescript
public runSimulation(inputs: {[ key: string ]: any}): DocumentResult
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Executes the SSM Document in simluation mode.
This method DOES NOT result in invocation of SSM APIs.
Rather, all steps are executed locally and mimic the behavior of SSM.
If any inputs are not provided in this function, the specified defaults for the inputs will be used.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CommandDocument.runSimulation.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

the inputs to feed into the simulated execution.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CommandDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.CommandDocument.isConstruct"></a>

```typescript
import { CommandDocument } from 'cdk-ssm-document'

CommandDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.CommandDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CommandDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.CommandDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.property.stepCollector">stepCollector</a></code> | <code><a href="#cdk-ssm-document.StepCollector">StepCollector</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandDocument.property.header">header</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.CommandDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-document.CommandDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-document.CommandDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-document.CommandDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.CommandDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.CommandDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a>

---

##### `stepCollector`<sup>Required</sup> <a name="stepCollector" id="cdk-ssm-document.CommandDocument.property.stepCollector"></a>

```typescript
public readonly stepCollector: StepCollector;
```

- *Type:* <a href="#cdk-ssm-document.StepCollector">StepCollector</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.CommandDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.CommandDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---


### CommandStep <a name="CommandStep" id="cdk-ssm-document.CommandStep"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.CommandStep.Initializer"></a>

```typescript
import { CommandStep } from 'cdk-ssm-document'

new CommandStep(scope: Construct, id: string, props: CommandStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CommandStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.CommandStepProps">CommandStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.CommandStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.CommandStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.CommandStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.CommandStepProps">CommandStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CommandStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.CommandStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.CommandStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.CommandStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-document.CommandStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.CommandStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.CommandStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.CommandStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.CommandStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CommandStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.CommandStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.CommandStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.CommandStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.CommandStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): void
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CommandStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.CommandStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CommandStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.CommandStep.isConstruct"></a>

```typescript
import { CommandStep } from 'cdk-ssm-document'

CommandStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.CommandStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CommandStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.CommandStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-document.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.CommandStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.CommandStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.CommandStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.CommandStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.CommandStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CommandStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-document.CommandStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-document.CommandStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-document.CommandStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.CommandStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-document.CommandStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-document.Platform">Platform</a>[]

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.CommandStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.CommandStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>

---


### CopyImageStep <a name="CopyImageStep" id="cdk-ssm-document.CopyImageStep"></a>

AutomationStep implemenation for aws:copyImage https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-copyimage.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.CopyImageStep.Initializer"></a>

```typescript
import { CopyImageStep } from 'cdk-ssm-document'

new CopyImageStep(scope: Construct, id: string, props: CopyImageStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CopyImageStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.CopyImageStepProps">CopyImageStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.CopyImageStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.CopyImageStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.CopyImageStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.CopyImageStepProps">CopyImageStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CopyImageStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.CopyImageStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.CopyImageStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.CopyImageStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.CopyImageStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.CopyImageStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.CopyImageStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.CopyImageStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.CopyImageStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CopyImageStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.CopyImageStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.CopyImageStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.CopyImageStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.CopyImageStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CopyImageStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.CopyImageStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CopyImageStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.CopyImageStep.isConstruct"></a>

```typescript
import { CopyImageStep } from 'cdk-ssm-document'

CopyImageStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.CopyImageStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.sourceImageId">sourceImageId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.sourceRegion">sourceRegion</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.encrypted">encrypted</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.kmsKeyId">kmsKeyId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.CopyImageStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.CopyImageStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.CopyImageStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.CopyImageStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.CopyImageStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CopyImageStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.CopyImageStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.CopyImageStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CopyImageStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CopyImageStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CopyImageStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.CopyImageStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.CopyImageStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.CopyImageStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-document.CopyImageStep.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="cdk-ssm-document.CopyImageStep.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="cdk-ssm-document.CopyImageStep.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-document.CopyImageStep.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="cdk-ssm-document.CopyImageStep.property.encrypted"></a>

```typescript
public readonly encrypted: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-document.CopyImageStep.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="cdk-ssm-document.CopyImageStep.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CopyImageStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.CopyImageStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.CopyImageStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CreateImageStep <a name="CreateImageStep" id="cdk-ssm-document.CreateImageStep"></a>

AutomationStep implemenation for aws:createImage https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-create.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.CreateImageStep.Initializer"></a>

```typescript
import { CreateImageStep } from 'cdk-ssm-document'

new CreateImageStep(scope: Construct, id: string, props: CreateImageStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateImageStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.CreateImageStepProps">CreateImageStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.CreateImageStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.CreateImageStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.CreateImageStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.CreateImageStepProps">CreateImageStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CreateImageStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.CreateImageStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.CreateImageStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.CreateImageStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.CreateImageStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.CreateImageStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.CreateImageStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.CreateImageStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.CreateImageStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CreateImageStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.CreateImageStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.CreateImageStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.CreateImageStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.CreateImageStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CreateImageStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.CreateImageStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CreateImageStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.CreateImageStep.isConstruct"></a>

```typescript
import { CreateImageStep } from 'cdk-ssm-document'

CreateImageStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.CreateImageStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.instanceId">instanceId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.noReboot">noReboot</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.CreateImageStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.CreateImageStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.CreateImageStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.CreateImageStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.CreateImageStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CreateImageStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.CreateImageStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.CreateImageStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CreateImageStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CreateImageStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CreateImageStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.CreateImageStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.CreateImageStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.CreateImageStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-document.CreateImageStep.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-ssm-document.CreateImageStep.property.instanceId"></a>

```typescript
public readonly instanceId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-document.CreateImageStep.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-document.CreateImageStep.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `noReboot`<sup>Optional</sup> <a name="noReboot" id="cdk-ssm-document.CreateImageStep.property.noReboot"></a>

```typescript
public readonly noReboot: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateImageStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.CreateImageStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.CreateImageStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CreateStackStep <a name="CreateStackStep" id="cdk-ssm-document.CreateStackStep"></a>

AutomationStep implementation for aws:createStack https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createstack.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.CreateStackStep.Initializer"></a>

```typescript
import { CreateStackStep } from 'cdk-ssm-document'

new CreateStackStep(scope: Construct, id: string, props: CreateStackStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateStackStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.CreateStackStepProps">CreateStackStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.CreateStackStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.CreateStackStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.CreateStackStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.CreateStackStepProps">CreateStackStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CreateStackStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.CreateStackStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.CreateStackStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.CreateStackStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.CreateStackStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.CreateStackStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.CreateStackStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.CreateStackStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.CreateStackStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CreateStackStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.CreateStackStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.CreateStackStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.CreateStackStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.CreateStackStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CreateStackStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.CreateStackStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CreateStackStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.CreateStackStep.isConstruct"></a>

```typescript
import { CreateStackStep } from 'cdk-ssm-document'

CreateStackStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.CreateStackStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.parameterResolver">parameterResolver</a></code> | <code><a href="#cdk-ssm-document.IParameterResolver">IParameterResolver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.stackName">stackName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.capabilities">capabilities</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.clientRequestToken">clientRequestToken</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.notificationARNs">notificationARNs</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.onStackFailure">onStackFailure</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.resourceTypes">resourceTypes</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.stackPolicyBody">stackPolicyBody</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.stackPolicyUrl">stackPolicyUrl</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.tags">tags</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.templateBody">templateBody</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.templateUrl">templateUrl</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.CreateStackStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.CreateStackStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.CreateStackStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.CreateStackStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.CreateStackStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CreateStackStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.CreateStackStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.CreateStackStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CreateStackStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CreateStackStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CreateStackStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.CreateStackStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.CreateStackStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.CreateStackStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `parameterResolver`<sup>Required</sup> <a name="parameterResolver" id="cdk-ssm-document.CreateStackStep.property.parameterResolver"></a>

```typescript
public readonly parameterResolver: IParameterResolver;
```

- *Type:* <a href="#cdk-ssm-document.IParameterResolver">IParameterResolver</a>

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-ssm-document.CreateStackStep.property.stackName"></a>

```typescript
public readonly stackName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="cdk-ssm-document.CreateStackStep.property.capabilities"></a>

```typescript
public readonly capabilities: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-ssm-document.CreateStackStep.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `notificationARNs`<sup>Optional</sup> <a name="notificationARNs" id="cdk-ssm-document.CreateStackStep.property.notificationARNs"></a>

```typescript
public readonly notificationARNs: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `onStackFailure`<sup>Optional</sup> <a name="onStackFailure" id="cdk-ssm-document.CreateStackStep.property.onStackFailure"></a>

```typescript
public readonly onStackFailure: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-document.CreateStackStep.property.parameters"></a>

```typescript
public readonly parameters: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="cdk-ssm-document.CreateStackStep.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-document.CreateStackStep.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.CreateStackStep.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

---

##### `stackPolicyBody`<sup>Optional</sup> <a name="stackPolicyBody" id="cdk-ssm-document.CreateStackStep.property.stackPolicyBody"></a>

```typescript
public readonly stackPolicyBody: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `stackPolicyUrl`<sup>Optional</sup> <a name="stackPolicyUrl" id="cdk-ssm-document.CreateStackStep.property.stackPolicyUrl"></a>

```typescript
public readonly stackPolicyUrl: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-document.CreateStackStep.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="cdk-ssm-document.CreateStackStep.property.templateBody"></a>

```typescript
public readonly templateBody: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="cdk-ssm-document.CreateStackStep.property.templateUrl"></a>

```typescript
public readonly templateUrl: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="cdk-ssm-document.CreateStackStep.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateStackStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.CreateStackStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.CreateStackStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CreateTagsStep <a name="CreateTagsStep" id="cdk-ssm-document.CreateTagsStep"></a>

AutomationStep implemenation for aws:createTags https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createtag.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.CreateTagsStep.Initializer"></a>

```typescript
import { CreateTagsStep } from 'cdk-ssm-document'

new CreateTagsStep(scope: Construct, id: string, props: CreateTagsStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateTagsStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.CreateTagsStepProps">CreateTagsStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.CreateTagsStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.CreateTagsStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.CreateTagsStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.CreateTagsStepProps">CreateTagsStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CreateTagsStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.CreateTagsStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.CreateTagsStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.CreateTagsStep.listOutputs">listOutputs</a></code> | This step has no outputs. |
| <code><a href="#cdk-ssm-document.CreateTagsStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.CreateTagsStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.CreateTagsStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.CreateTagsStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.CreateTagsStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CreateTagsStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.CreateTagsStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.CreateTagsStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

This step has no outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.CreateTagsStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.CreateTagsStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.CreateTagsStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.CreateTagsStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.CreateTagsStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.CreateTagsStep.isConstruct"></a>

```typescript
import { CreateTagsStep } from 'cdk-ssm-document'

CreateTagsStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.CreateTagsStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.resourceIds">resourceIds</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.tags">tags</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.resourceType">resourceType</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.CreateTagsStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.CreateTagsStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.CreateTagsStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.CreateTagsStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.CreateTagsStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CreateTagsStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.CreateTagsStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.CreateTagsStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CreateTagsStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CreateTagsStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CreateTagsStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.CreateTagsStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.CreateTagsStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.CreateTagsStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="cdk-ssm-document.CreateTagsStep.property.resourceIds"></a>

```typescript
public readonly resourceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-ssm-document.CreateTagsStep.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="cdk-ssm-document.CreateTagsStep.property.resourceType"></a>

```typescript
public readonly resourceType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.CreateTagsStep.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CreateTagsStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.CreateTagsStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.CreateTagsStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### DeleteImageStep <a name="DeleteImageStep" id="cdk-ssm-document.DeleteImageStep"></a>

AutomationStep implementation for aws:deleteImage https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-delete.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.DeleteImageStep.Initializer"></a>

```typescript
import { DeleteImageStep } from 'cdk-ssm-document'

new DeleteImageStep(scope: Construct, id: string, props: DeleteImageStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteImageStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.DeleteImageStepProps">DeleteImageStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.DeleteImageStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.DeleteImageStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.DeleteImageStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.DeleteImageStepProps">DeleteImageStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DeleteImageStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.DeleteImageStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.DeleteImageStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.DeleteImageStep.listOutputs">listOutputs</a></code> | This step has no outputs. |
| <code><a href="#cdk-ssm-document.DeleteImageStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.DeleteImageStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.DeleteImageStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.DeleteImageStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.DeleteImageStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DeleteImageStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.DeleteImageStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.DeleteImageStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

This step has no outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.DeleteImageStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.DeleteImageStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DeleteImageStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.DeleteImageStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DeleteImageStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.DeleteImageStep.isConstruct"></a>

```typescript
import { DeleteImageStep } from 'cdk-ssm-document'

DeleteImageStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.DeleteImageStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.DeleteImageStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.DeleteImageStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.DeleteImageStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.DeleteImageStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.DeleteImageStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.DeleteImageStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.DeleteImageStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.DeleteImageStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.DeleteImageStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.DeleteImageStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.DeleteImageStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.DeleteImageStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.DeleteImageStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.DeleteImageStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-document.DeleteImageStep.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.DeleteImageStep.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteImageStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.DeleteImageStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.DeleteImageStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### DeleteStackStep <a name="DeleteStackStep" id="cdk-ssm-document.DeleteStackStep"></a>

AutomationStep implemenation for aws:deleteStack https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-deletestack.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.DeleteStackStep.Initializer"></a>

```typescript
import { DeleteStackStep } from 'cdk-ssm-document'

new DeleteStackStep(scope: Construct, id: string, props: DeleteStackStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteStackStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.DeleteStackStepProps">DeleteStackStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.DeleteStackStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.DeleteStackStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.DeleteStackStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.DeleteStackStepProps">DeleteStackStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DeleteStackStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.DeleteStackStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.DeleteStackStep.listInputs">listInputs</a></code> | The input required for this step is the stackNameVariable. |
| <code><a href="#cdk-ssm-document.DeleteStackStep.listOutputs">listOutputs</a></code> | No outputs emitted from Delete Stack step. |
| <code><a href="#cdk-ssm-document.DeleteStackStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.DeleteStackStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.DeleteStackStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.DeleteStackStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.DeleteStackStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DeleteStackStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.DeleteStackStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

The input required for this step is the stackNameVariable.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.DeleteStackStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Delete Stack step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.DeleteStackStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.DeleteStackStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DeleteStackStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.DeleteStackStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DeleteStackStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.DeleteStackStep.isConstruct"></a>

```typescript
import { DeleteStackStep } from 'cdk-ssm-document'

DeleteStackStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.DeleteStackStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.stackNameVariable">stackNameVariable</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.DeleteStackStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.DeleteStackStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.DeleteStackStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.DeleteStackStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.DeleteStackStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.DeleteStackStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.DeleteStackStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.DeleteStackStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.DeleteStackStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.DeleteStackStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.DeleteStackStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.DeleteStackStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.DeleteStackStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.DeleteStackStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `stackNameVariable`<sup>Required</sup> <a name="stackNameVariable" id="cdk-ssm-document.DeleteStackStep.property.stackNameVariable"></a>

```typescript
public readonly stackNameVariable: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-document.DeleteStackStep.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.DeleteStackStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.DeleteStackStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.DeleteStackStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### ExecuteScriptStep <a name="ExecuteScriptStep" id="cdk-ssm-document.ExecuteScriptStep"></a>

AutomationStep implementation for aws:executeScript https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeScript.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.ExecuteScriptStep.Initializer"></a>

```typescript
import { ExecuteScriptStep } from 'cdk-ssm-document'

new ExecuteScriptStep(stage: Construct, id: string, props: ExecuteScriptStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.Initializer.parameter.stage">stage</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.ExecuteScriptStepProps">ExecuteScriptStepProps</a></code> | *No description.* |

---

##### `stage`<sup>Required</sup> <a name="stage" id="cdk-ssm-document.ExecuteScriptStep.Initializer.parameter.stage"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.ExecuteScriptStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.ExecuteScriptStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.ExecuteScriptStepProps">ExecuteScriptStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.executeStep">executeStep</a></code> | Runs the simulation. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.ExecuteScriptStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.ExecuteScriptStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ExecuteScriptStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.ExecuteScriptStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.ExecuteScriptStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.ExecuteScriptStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.ExecuteScriptStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs the simulation.

Nests returned object into a "Payload" key to mimic SSM behavior.
Switch by language and execute code based on specified language.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ExecuteScriptStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.ExecuteScriptStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.getLanguage">getLanguage</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.ExecuteScriptStep.isConstruct"></a>

```typescript
import { ExecuteScriptStep } from 'cdk-ssm-document'

ExecuteScriptStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.ExecuteScriptStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `getLanguage` <a name="getLanguage" id="cdk-ssm-document.ExecuteScriptStep.getLanguage"></a>

```typescript
import { ExecuteScriptStep } from 'cdk-ssm-document'

ExecuteScriptStep.getLanguage(runtime: string)
```

###### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-ssm-document.ExecuteScriptStep.getLanguage.parameter.runtime"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.fullPathToCode">fullPathToCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.handlerName">handlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.language">language</a></code> | <code><a href="#cdk-ssm-document.ScriptLanguage">ScriptLanguage</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-document.Output">Output</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.ExecuteScriptStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.ExecuteScriptStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.ExecuteScriptStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.ExecuteScriptStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.ExecuteScriptStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ExecuteScriptStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.ExecuteScriptStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.ExecuteScriptStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ExecuteScriptStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ExecuteScriptStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ExecuteScriptStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.ExecuteScriptStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.ExecuteScriptStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `fullPathToCode`<sup>Required</sup> <a name="fullPathToCode" id="cdk-ssm-document.ExecuteScriptStep.property.fullPathToCode"></a>

```typescript
public readonly fullPathToCode: string;
```

- *Type:* string

---

##### `handlerName`<sup>Required</sup> <a name="handlerName" id="cdk-ssm-document.ExecuteScriptStep.property.handlerName"></a>

```typescript
public readonly handlerName: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ExecuteScriptStep.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

##### `language`<sup>Required</sup> <a name="language" id="cdk-ssm-document.ExecuteScriptStep.property.language"></a>

```typescript
public readonly language: ScriptLanguage;
```

- *Type:* <a href="#cdk-ssm-document.ScriptLanguage">ScriptLanguage</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-document.ExecuteScriptStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-document.Output">Output</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteScriptStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.ExecuteScriptStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.ExecuteScriptStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### ExecuteStateMachineStep <a name="ExecuteStateMachineStep" id="cdk-ssm-document.ExecuteStateMachineStep"></a>

AutomationStep implementation of [aws:executeStateMachine](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeStateMachine.html).

#### Initializers <a name="Initializers" id="cdk-ssm-document.ExecuteStateMachineStep.Initializer"></a>

```typescript
import { ExecuteStateMachineStep } from 'cdk-ssm-document'

new ExecuteStateMachineStep(scope: Construct, id: string, props: ExecuteStateMachineStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps">ExecuteStateMachineStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.ExecuteStateMachineStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.ExecuteStateMachineStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.ExecuteStateMachineStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.ExecuteStateMachineStepProps">ExecuteStateMachineStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.listOutputs">listOutputs</a></code> | No outputs emitted from Delete Stack step. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.ExecuteStateMachineStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.ExecuteStateMachineStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ExecuteStateMachineStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.ExecuteStateMachineStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.ExecuteStateMachineStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Delete Stack step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.ExecuteStateMachineStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.ExecuteStateMachineStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ExecuteStateMachineStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.ExecuteStateMachineStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.ExecuteStateMachineStep.isConstruct"></a>

```typescript
import { ExecuteStateMachineStep } from 'cdk-ssm-document'

ExecuteStateMachineStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.ExecuteStateMachineStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.stateMachineArn">stateMachineArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.executionName">executionName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.input">input</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.ExecuteStateMachineStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.ExecuteStateMachineStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.ExecuteStateMachineStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.ExecuteStateMachineStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.ExecuteStateMachineStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ExecuteStateMachineStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.ExecuteStateMachineStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.ExecuteStateMachineStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ExecuteStateMachineStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ExecuteStateMachineStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ExecuteStateMachineStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.ExecuteStateMachineStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.ExecuteStateMachineStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.ExecuteStateMachineStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="cdk-ssm-document.ExecuteStateMachineStep.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `executionName`<sup>Optional</sup> <a name="executionName" id="cdk-ssm-document.ExecuteStateMachineStep.property.executionName"></a>

```typescript
public readonly executionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `input`<sup>Optional</sup> <a name="input" id="cdk-ssm-document.ExecuteStateMachineStep.property.input"></a>

```typescript
public readonly input: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.ExecuteStateMachineStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.ExecuteStateMachineStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### InvokeLambdaFunctionStep <a name="InvokeLambdaFunctionStep" id="cdk-ssm-document.InvokeLambdaFunctionStep"></a>

AutomationStep implemenation for aws:invokeLambdaFunction https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-lamb.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.InvokeLambdaFunctionStep.Initializer"></a>

```typescript
import { InvokeLambdaFunctionStep } from 'cdk-ssm-document'

new InvokeLambdaFunctionStep(scope: Construct, id: string, props: InvokeLambdaFunctionStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps">InvokeLambdaFunctionStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.InvokeLambdaFunctionStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.InvokeLambdaFunctionStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.InvokeLambdaFunctionStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps">InvokeLambdaFunctionStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.InvokeLambdaFunctionStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.InvokeLambdaFunctionStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.InvokeLambdaFunctionStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.InvokeLambdaFunctionStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.InvokeLambdaFunctionStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.InvokeLambdaFunctionStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.InvokeLambdaFunctionStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.InvokeLambdaFunctionStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.InvokeLambdaFunctionStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.InvokeLambdaFunctionStep.isConstruct"></a>

```typescript
import { InvokeLambdaFunctionStep } from 'cdk-ssm-document'

InvokeLambdaFunctionStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.InvokeLambdaFunctionStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.functionName">functionName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.clientContext">clientContext</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.invocationType">invocationType</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.logType">logType</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.payload">payload</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.qualifier">qualifier</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.functionName"></a>

```typescript
public readonly functionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `clientContext`<sup>Optional</sup> <a name="clientContext" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.clientContext"></a>

```typescript
public readonly clientContext: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.invocationType"></a>

```typescript
public readonly invocationType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `logType`<sup>Optional</sup> <a name="logType" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.logType"></a>

```typescript
public readonly logType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `payload`<sup>Optional</sup> <a name="payload" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.payload"></a>

```typescript
public readonly payload: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.qualifier"></a>

```typescript
public readonly qualifier: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.InvokeLambdaFunctionStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### InvokeWebhookStep <a name="InvokeWebhookStep" id="cdk-ssm-document.InvokeWebhookStep"></a>

AutomationStep implementation for [aws:invokeWebhook](https://docs.aws.amazon.com/systems-manager/latest/userguide/invoke-webhook.html).

#### Initializers <a name="Initializers" id="cdk-ssm-document.InvokeWebhookStep.Initializer"></a>

```typescript
import { InvokeWebhookStep } from 'cdk-ssm-document'

new InvokeWebhookStep(scope: Construct, id: string, props: InvokeWebhookStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.InvokeWebhookStepProps">InvokeWebhookStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.InvokeWebhookStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.InvokeWebhookStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.InvokeWebhookStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.InvokeWebhookStepProps">InvokeWebhookStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.InvokeWebhookStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.InvokeWebhookStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.InvokeWebhookStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.InvokeWebhookStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.InvokeWebhookStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.InvokeWebhookStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.InvokeWebhookStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.InvokeWebhookStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.InvokeWebhookStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.InvokeWebhookStep.isConstruct"></a>

```typescript
import { InvokeWebhookStep } from 'cdk-ssm-document'

InvokeWebhookStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.InvokeWebhookStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.integrationName">integrationName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.webhook">webhook</a></code> | <code><a href="#cdk-ssm-document.IWebhook">IWebhook</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.body">body</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.InvokeWebhookStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.InvokeWebhookStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.InvokeWebhookStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.InvokeWebhookStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.InvokeWebhookStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.InvokeWebhookStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.InvokeWebhookStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.InvokeWebhookStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.InvokeWebhookStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.InvokeWebhookStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.InvokeWebhookStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.InvokeWebhookStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.InvokeWebhookStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="cdk-ssm-document.InvokeWebhookStep.property.integrationName"></a>

```typescript
public readonly integrationName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="cdk-ssm-document.InvokeWebhookStep.property.webhook"></a>

```typescript
public readonly webhook: IWebhook;
```

- *Type:* <a href="#cdk-ssm-document.IWebhook">IWebhook</a>

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk-ssm-document.InvokeWebhookStep.property.body"></a>

```typescript
public readonly body: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.InvokeWebhookStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.InvokeWebhookStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.InvokeWebhookStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### PauseStep <a name="PauseStep" id="cdk-ssm-document.PauseStep"></a>

AutomationStep implementation for aws:pause https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-pause.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.PauseStep.Initializer"></a>

```typescript
import { PauseStep } from 'cdk-ssm-document'

new PauseStep(scope: Construct, id: string, props: PauseStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.PauseStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.PauseStepProps">PauseStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.PauseStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.PauseStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.PauseStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.PauseStepProps">PauseStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.PauseStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.PauseStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.PauseStep.listInputs">listInputs</a></code> | No inputs required for Pause step. |
| <code><a href="#cdk-ssm-document.PauseStep.listOutputs">listOutputs</a></code> | No outputs emitted from Pause step. |
| <code><a href="#cdk-ssm-document.PauseStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.PauseStep.executeStep">executeStep</a></code> | May perform a real pause based on the params used during instance creation. |
| <code><a href="#cdk-ssm-document.PauseStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.PauseStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.PauseStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.PauseStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.PauseStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

No inputs required for Pause step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.PauseStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Pause step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.PauseStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.PauseStep.executeStep"></a>

```typescript
public executeStep(_inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

May perform a real pause based on the params used during instance creation.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.PauseStep.executeStep.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.PauseStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.PauseStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.PauseStep.isConstruct"></a>

```typescript
import { PauseStep } from 'cdk-ssm-document'

PauseStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.PauseStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.PauseStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.PauseStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.pauseHook">pauseHook</a></code> | <code><a href="#cdk-ssm-document.IPauseHook">IPauseHook</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.PauseStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.PauseStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.PauseStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.PauseStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.PauseStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.PauseStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.PauseStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.PauseStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.PauseStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.PauseStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.PauseStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.PauseStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.PauseStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `pauseHook`<sup>Required</sup> <a name="pauseHook" id="cdk-ssm-document.PauseStep.property.pauseHook"></a>

```typescript
public readonly pauseHook: IPauseHook;
```

- *Type:* <a href="#cdk-ssm-document.IPauseHook">IPauseHook</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.PauseStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PauseStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.PauseStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.PauseStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### PsModuleStep <a name="PsModuleStep" id="cdk-ssm-document.PsModuleStep"></a>

AutomationStep implemenation for aws:psmodule https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-psModule.

#### Initializers <a name="Initializers" id="cdk-ssm-document.PsModuleStep.Initializer"></a>

```typescript
import { PsModuleStep } from 'cdk-ssm-document'

new PsModuleStep(scope: Construct, id: string, props: PsModuleStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.PsModuleStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.PsModuleStepProps">PsModuleStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.PsModuleStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.PsModuleStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.PsModuleStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.PsModuleStepProps">PsModuleStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.PsModuleStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.PsModuleStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.PsModuleStep.listInputs">listInputs</a></code> | Inputs required for this command includes both the runCommand variables and workingDirectory if provided. |
| <code><a href="#cdk-ssm-document.PsModuleStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-document.PsModuleStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.PsModuleStep.executeStep">executeStep</a></code> | Installs the module specified by source then runs the specified commands. |
| <code><a href="#cdk-ssm-document.PsModuleStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.PsModuleStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.PsModuleStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.PsModuleStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.PsModuleStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command includes both the runCommand variables and workingDirectory if provided.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.PsModuleStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.PsModuleStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.PsModuleStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): void
```

Installs the module specified by source then runs the specified commands.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.PsModuleStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.PsModuleStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.PsModuleStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.PsModuleStep.isConstruct"></a>

```typescript
import { PsModuleStep } from 'cdk-ssm-document'

PsModuleStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.PsModuleStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-document.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.environment">environment</a></code> | <code><a href="#cdk-ssm-document.IEnvironment">IEnvironment</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.source">source</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.sourceHash">sourceHash</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStep.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.PsModuleStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.PsModuleStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.PsModuleStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.PsModuleStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.PsModuleStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.PsModuleStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-document.PsModuleStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-document.PsModuleStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-document.PsModuleStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.PsModuleStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-document.PsModuleStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-document.Platform">Platform</a>[]

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.PsModuleStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.PsModuleStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-ssm-document.PsModuleStep.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-ssm-document.PsModuleStep.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `runCommand`<sup>Optional</sup> <a name="runCommand" id="cdk-ssm-document.PsModuleStep.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="cdk-ssm-document.PsModuleStep.property.sourceHash"></a>

```typescript
public readonly sourceHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.PsModuleStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-document.PsModuleStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---


### RebootInstanceAndWait <a name="RebootInstanceAndWait" id="cdk-ssm-document.RebootInstanceAndWait"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.RebootInstanceAndWait.Initializer"></a>

```typescript
import { RebootInstanceAndWait } from 'cdk-ssm-document'

new RebootInstanceAndWait(scope: Construct, id: string, instanceId: IStringVariable)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RebootInstanceAndWait.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RebootInstanceAndWait.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RebootInstanceAndWait.Initializer.parameter.instanceId">instanceId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.RebootInstanceAndWait.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.RebootInstanceAndWait.Initializer.parameter.id"></a>

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-ssm-document.RebootInstanceAndWait.Initializer.parameter.instanceId"></a>

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RebootInstanceAndWait.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ssm-document.RebootInstanceAndWait.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RebootInstanceAndWait.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.RebootInstanceAndWait.isConstruct"></a>

```typescript
import { RebootInstanceAndWait } from 'cdk-ssm-document'

RebootInstanceAndWait.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.RebootInstanceAndWait.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RebootInstanceAndWait.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.RebootInstanceAndWait.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### RunCommandStep <a name="RunCommandStep" id="cdk-ssm-document.RunCommandStep"></a>

AutomationStep implementation of [aws:runCommand](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runcommand.html).

#### Initializers <a name="Initializers" id="cdk-ssm-document.RunCommandStep.Initializer"></a>

```typescript
import { RunCommandStep } from 'cdk-ssm-document'

new RunCommandStep(scope: Construct, id: string, props: RunCommandStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.RunCommandStepProps">RunCommandStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.RunCommandStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.RunCommandStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.RunCommandStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.RunCommandStepProps">RunCommandStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.RunCommandStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.RunCommandStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.RunCommandStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.RunCommandStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.RunCommandStep.executeStep">executeStep</a></code> | May perform a real approval ask based on the params used during instance creation. |
| <code><a href="#cdk-ssm-document.RunCommandStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.RunCommandStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.RunCommandStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunCommandStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.RunCommandStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.RunCommandStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.RunCommandStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.RunCommandStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

May perform a real approval ask based on the params used during instance creation.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunCommandStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.RunCommandStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.RunCommandStep.isConstruct"></a>

```typescript
import { RunCommandStep } from 'cdk-ssm-document'

RunCommandStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.RunCommandStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.documentName">documentName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.runCommandHook">runCommandHook</a></code> | <code><a href="#cdk-ssm-document.IRunCommandHook">IRunCommandHook</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.targets">targets</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a> \| <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.cloudWatchOutputConfig">cloudWatchOutputConfig</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.commandTimeoutSeconds">commandTimeoutSeconds</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.comment">comment</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.documentHash">documentHash</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.documentHashType">documentHashType</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.maxConcurrency">maxConcurrency</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.maxErrors">maxErrors</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.notificationConfig">notificationConfig</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.outputS3BucketName">outputS3BucketName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.serviceRoleArn">serviceRoleArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.RunCommandStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.RunCommandStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.RunCommandStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.RunCommandStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.RunCommandStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunCommandStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.RunCommandStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.RunCommandStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunCommandStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.RunCommandStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.RunCommandStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.RunCommandStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.RunCommandStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.RunCommandStep.property.documentName"></a>

```typescript
public readonly documentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `runCommandHook`<sup>Required</sup> <a name="runCommandHook" id="cdk-ssm-document.RunCommandStep.property.runCommandHook"></a>

```typescript
public readonly runCommandHook: IRunCommandHook;
```

- *Type:* <a href="#cdk-ssm-document.IRunCommandHook">IRunCommandHook</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-ssm-document.RunCommandStep.property.targets"></a>

```typescript
public readonly targets: IStringListVariable | IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a> | <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

---

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="cloudWatchOutputConfig" id="cdk-ssm-document.RunCommandStep.property.cloudWatchOutputConfig"></a>

```typescript
public readonly cloudWatchOutputConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

---

##### `commandTimeoutSeconds`<sup>Optional</sup> <a name="commandTimeoutSeconds" id="cdk-ssm-document.RunCommandStep.property.commandTimeoutSeconds"></a>

```typescript
public readonly commandTimeoutSeconds: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

---

##### `comment`<sup>Optional</sup> <a name="comment" id="cdk-ssm-document.RunCommandStep.property.comment"></a>

```typescript
public readonly comment: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `documentHash`<sup>Optional</sup> <a name="documentHash" id="cdk-ssm-document.RunCommandStep.property.documentHash"></a>

```typescript
public readonly documentHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `documentHashType`<sup>Optional</sup> <a name="documentHashType" id="cdk-ssm-document.RunCommandStep.property.documentHashType"></a>

```typescript
public readonly documentHashType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="cdk-ssm-document.RunCommandStep.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="cdk-ssm-document.RunCommandStep.property.maxErrors"></a>

```typescript
public readonly maxErrors: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="cdk-ssm-document.RunCommandStep.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="cdk-ssm-document.RunCommandStep.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="cdk-ssm-document.RunCommandStep.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-document.RunCommandStep.property.parameters"></a>

```typescript
public readonly parameters: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-ssm-document.RunCommandStep.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunCommandStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.RunCommandStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.RunCommandStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### RunInstanceStep <a name="RunInstanceStep" id="cdk-ssm-document.RunInstanceStep"></a>

AutomationStep implemenation for aws:runInstance https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runinstance.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.RunInstanceStep.Initializer"></a>

```typescript
import { RunInstanceStep } from 'cdk-ssm-document'

new RunInstanceStep(scope: Construct, id: string, props: RunInstanceStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunInstanceStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.RunInstanceStepProps">RunInstanceStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.RunInstanceStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.RunInstanceStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.RunInstanceStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.RunInstanceStepProps">RunInstanceStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunInstanceStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.RunInstanceStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.RunInstanceStep.listInputs">listInputs</a></code> | Derives the inputs based on given variables. |
| <code><a href="#cdk-ssm-document.RunInstanceStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.RunInstanceStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.RunInstanceStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.RunInstanceStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.RunInstanceStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.RunInstanceStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunInstanceStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.RunInstanceStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs based on given variables.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.RunInstanceStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.RunInstanceStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.RunInstanceStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunInstanceStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.RunInstanceStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunInstanceStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.RunInstanceStep.isConstruct"></a>

```typescript
import { RunInstanceStep } from 'cdk-ssm-document'

RunInstanceStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.RunInstanceStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.disableApiTermination">disableApiTermination</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.ebsOptimized">ebsOptimized</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.iamInstanceProfileName">iamInstanceProfileName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.instanceType">instanceType</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.kernelId">kernelId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.keyName">keyName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.maxInstanceCount">maxInstanceCount</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.minInstanceCount">minInstanceCount</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.monitoring">monitoring</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.placement">placement</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.privateIpAddress">privateIpAddress</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.ramdiskId">ramdiskId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.securityGroupIds">securityGroupIds</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.securityGroups">securityGroups</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.subnetId">subnetId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.userData">userData</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.RunInstanceStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.RunInstanceStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.RunInstanceStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.RunInstanceStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.RunInstanceStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunInstanceStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.RunInstanceStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.RunInstanceStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunInstanceStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.RunInstanceStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.RunInstanceStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.RunInstanceStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.RunInstanceStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.RunInstanceStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-document.RunInstanceStep.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-document.RunInstanceStep.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-document.RunInstanceStep.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-document.RunInstanceStep.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="cdk-ssm-document.RunInstanceStep.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="cdk-ssm-document.RunInstanceStep.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="cdk-ssm-document.RunInstanceStep.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `iamInstanceProfileName`<sup>Optional</sup> <a name="iamInstanceProfileName" id="cdk-ssm-document.RunInstanceStep.property.iamInstanceProfileName"></a>

```typescript
public readonly iamInstanceProfileName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="cdk-ssm-document.RunInstanceStep.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-ssm-document.RunInstanceStep.property.instanceType"></a>

```typescript
public readonly instanceType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="cdk-ssm-document.RunInstanceStep.property.kernelId"></a>

```typescript
public readonly kernelId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="cdk-ssm-document.RunInstanceStep.property.keyName"></a>

```typescript
public readonly keyName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="cdk-ssm-document.RunInstanceStep.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="cdk-ssm-document.RunInstanceStep.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="cdk-ssm-document.RunInstanceStep.property.monitoring"></a>

```typescript
public readonly monitoring: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="cdk-ssm-document.RunInstanceStep.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

---

##### `placement`<sup>Optional</sup> <a name="placement" id="cdk-ssm-document.RunInstanceStep.property.placement"></a>

```typescript
public readonly placement: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="cdk-ssm-document.RunInstanceStep.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="cdk-ssm-document.RunInstanceStep.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="cdk-ssm-document.RunInstanceStep.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-ssm-document.RunInstanceStep.property.securityGroups"></a>

```typescript
public readonly securityGroups: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="cdk-ssm-document.RunInstanceStep.property.subnetId"></a>

```typescript
public readonly subnetId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="cdk-ssm-document.RunInstanceStep.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

---

##### `userData`<sup>Optional</sup> <a name="userData" id="cdk-ssm-document.RunInstanceStep.property.userData"></a>

```typescript
public readonly userData: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunInstanceStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.RunInstanceStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.RunInstanceStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### RunPowerShellScriptStep <a name="RunPowerShellScriptStep" id="cdk-ssm-document.RunPowerShellScriptStep"></a>

AutomationStep implementation for aws:runPowerShellScript https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-runPowerShellScript.

#### Initializers <a name="Initializers" id="cdk-ssm-document.RunPowerShellScriptStep.Initializer"></a>

```typescript
import { RunPowerShellScriptStep } from 'cdk-ssm-document'

new RunPowerShellScriptStep(scope: Construct, id: string, props: RunPowerShellScriptStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps">RunPowerShellScriptStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.RunPowerShellScriptStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.RunPowerShellScriptStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.RunPowerShellScriptStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.RunPowerShellScriptStepProps">RunPowerShellScriptStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.listInputs">listInputs</a></code> | Inputs required for this command includes both the runCommand variables and workingDirectory if provided. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.executeStep">executeStep</a></code> | Executes the runCommands against the environment provided in the constructor. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.RunPowerShellScriptStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.RunPowerShellScriptStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunPowerShellScriptStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.RunPowerShellScriptStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command includes both the runCommand variables and workingDirectory if provided.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.RunPowerShellScriptStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.RunPowerShellScriptStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.RunPowerShellScriptStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): void
```

Executes the runCommands against the environment provided in the constructor.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunPowerShellScriptStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.RunPowerShellScriptStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.RunPowerShellScriptStep.isConstruct"></a>

```typescript
import { RunPowerShellScriptStep } from 'cdk-ssm-document'

RunPowerShellScriptStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.RunPowerShellScriptStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-document.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.environment">environment</a></code> | <code><a href="#cdk-ssm-document.IEnvironment">IEnvironment</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStep.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.RunPowerShellScriptStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.RunPowerShellScriptStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.RunPowerShellScriptStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.RunPowerShellScriptStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.RunPowerShellScriptStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunPowerShellScriptStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-document.RunPowerShellScriptStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-document.RunPowerShellScriptStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-document.RunPowerShellScriptStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.RunPowerShellScriptStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-document.RunPowerShellScriptStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-document.Platform">Platform</a>[]

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.RunPowerShellScriptStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.RunPowerShellScriptStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-ssm-document.RunPowerShellScriptStep.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-document.RunPowerShellScriptStep.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunPowerShellScriptStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-document.RunPowerShellScriptStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---


### RunShellScriptStep <a name="RunShellScriptStep" id="cdk-ssm-document.RunShellScriptStep"></a>

AutomationStep implemenation for aws:sleep https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-sleep.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.RunShellScriptStep.Initializer"></a>

```typescript
import { RunShellScriptStep } from 'cdk-ssm-document'

new RunShellScriptStep(scope: Construct, id: string, props: RunShellScriptStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.RunShellScriptStepProps">RunShellScriptStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.RunShellScriptStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.RunShellScriptStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.RunShellScriptStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.RunShellScriptStepProps">RunShellScriptStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.listInputs">listInputs</a></code> | Inputs required for this command includes both the runCommand variables and workingDirectory if provided. |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.executeStep">executeStep</a></code> | Executes the runCommands against the environment provided in the constructor. |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.RunShellScriptStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.RunShellScriptStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunShellScriptStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.RunShellScriptStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command includes both the runCommand variables and workingDirectory if provided.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.RunShellScriptStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.RunShellScriptStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.RunShellScriptStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): void
```

Executes the runCommands against the environment provided in the constructor.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.RunShellScriptStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.RunShellScriptStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.RunShellScriptStep.isConstruct"></a>

```typescript
import { RunShellScriptStep } from 'cdk-ssm-document'

RunShellScriptStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.RunShellScriptStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-document.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.environment">environment</a></code> | <code><a href="#cdk-ssm-document.IEnvironment">IEnvironment</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStep.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.RunShellScriptStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.RunShellScriptStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.RunShellScriptStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.RunShellScriptStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.RunShellScriptStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunShellScriptStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-document.RunShellScriptStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-document.RunShellScriptStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-document.RunShellScriptStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.RunShellScriptStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-document.RunShellScriptStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-document.Platform">Platform</a>[]

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.RunShellScriptStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.RunShellScriptStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-ssm-document.RunShellScriptStep.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-document.RunShellScriptStep.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunShellScriptStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-document.RunShellScriptStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---


### SleepStep <a name="SleepStep" id="cdk-ssm-document.SleepStep"></a>

AutomationStep implemenation for aws:sleep https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-sleep.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.SleepStep.Initializer"></a>

```typescript
import { SleepStep } from 'cdk-ssm-document'

new SleepStep(scope: Construct, id: string, props: SleepStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SleepStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.SleepStepProps">SleepStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.SleepStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.SleepStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.SleepStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.SleepStepProps">SleepStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.SleepStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.SleepStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.SleepStep.listInputs">listInputs</a></code> | No inputs required for Sleep step. |
| <code><a href="#cdk-ssm-document.SleepStep.listOutputs">listOutputs</a></code> | No outputs emitted from Sleep step. |
| <code><a href="#cdk-ssm-document.SleepStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.SleepStep.executeStep">executeStep</a></code> | Runs this step (and only this step) in simulation with the provided inputs. |
| <code><a href="#cdk-ssm-document.SleepStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.SleepStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.SleepStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.SleepStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.SleepStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

No inputs required for Sleep step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.SleepStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Sleep step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.SleepStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.SleepStep.executeStep"></a>

```typescript
public executeStep(_inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Runs this step (and only this step) in simulation with the provided inputs.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.SleepStep.executeStep.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.SleepStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.SleepStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.SleepStep.isConstruct"></a>

```typescript
import { SleepStep } from 'cdk-ssm-document'

SleepStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.SleepStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SleepStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.SleepStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.sleeper">sleeper</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.sleepSeconds">sleepSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.SleepStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.SleepStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.SleepStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.SleepStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.SleepStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.SleepStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.SleepStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.SleepStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.SleepStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.SleepStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.SleepStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.SleepStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.SleepStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `sleeper`<sup>Required</sup> <a name="sleeper" id="cdk-ssm-document.SleepStep.property.sleeper"></a>

```typescript
public readonly sleeper: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

---

##### `sleepSeconds`<sup>Required</sup> <a name="sleepSeconds" id="cdk-ssm-document.SleepStep.property.sleepSeconds"></a>

```typescript
public readonly sleepSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SleepStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SleepStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.SleepStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.SleepStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### SsmDocument <a name="SsmDocument" id="cdk-ssm-document.SsmDocument"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.SsmDocument.Initializer"></a>

```typescript
import { SsmDocument } from 'cdk-ssm-document'

new SsmDocument(scope: Construct, id: string, props: SsmDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SsmDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.SsmDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.SsmDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.SsmDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.SsmDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.SsmDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-document.SsmDocument.runSimulation">runSimulation</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |

---

##### `toString` <a name="toString" id="cdk-ssm-document.SsmDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `print` <a name="print" id="cdk-ssm-document.SsmDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `runSimulation` <a name="runSimulation" id="cdk-ssm-document.SsmDocument.runSimulation"></a>

```typescript
public runSimulation(inputs: {[ key: string ]: any}): DocumentResult
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Executes the SSM Document in simluation mode.
This method DOES NOT result in invocation of SSM APIs.
Rather, all steps are executed locally and mimic the behavior of SSM.
If any inputs are not provided in this function, the specified defaults for the inputs will be used.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.SsmDocument.runSimulation.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

the inputs to feed into the simulated execution.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.SsmDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.SsmDocument.isConstruct"></a>

```typescript
import { SsmDocument } from 'cdk-ssm-document'

SsmDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.SsmDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SsmDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.SsmDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.property.stepCollector">stepCollector</a></code> | <code><a href="#cdk-ssm-document.StepCollector">StepCollector</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.SsmDocument.property.header">header</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.SsmDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-document.SsmDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-document.SsmDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-document.SsmDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.SsmDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.SsmDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a>

---

##### `stepCollector`<sup>Required</sup> <a name="stepCollector" id="cdk-ssm-document.SsmDocument.property.stepCollector"></a>

```typescript
public readonly stepCollector: StepCollector;
```

- *Type:* <a href="#cdk-ssm-document.StepCollector">StepCollector</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.SsmDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.SsmDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---


### Step <a name="Step" id="cdk-ssm-document.Step"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.Step.Initializer"></a>

```typescript
import { Step } from 'cdk-ssm-document'

new Step(scope: Construct, id: string, props: StepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Step.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.Step.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.Step.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.StepProps">StepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.Step.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.Step.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.Step.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.StepProps">StepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.Step.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.Step.invoke">invoke</a></code> | Invokes the entire chain of steps including this step (executeStep()) and all subsequent steps in the chain. |
| <code><a href="#cdk-ssm-document.Step.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-document.Step.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-document.Step.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |

---

##### `toString` <a name="toString" id="cdk-ssm-document.Step.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.Step.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the entire chain of steps including this step (executeStep()) and all subsequent steps in the chain.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.Step.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.Step.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.Step.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.Step.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.Step.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.Step.isConstruct"></a>

```typescript
import { Step } from 'cdk-ssm-document'

Step.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.Step.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Step.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.Step.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.Step.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Step.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.Step.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Step.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.Step.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.Step.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.Step.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.Step.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.Step.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.Step.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### StringDocument <a name="StringDocument" id="cdk-ssm-document.StringDocument"></a>

This AutomationDocument supports declaring your document from an existing document (JSON/YAML String/File).

Importing an existing file allows for benefitting from the simulated execution.
The simulated execution will run locally in the same fashion that SSM Execution would run the document.
You can supply mocks to the simulator and validate the calls and the flow of the document without running via SSM execution.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.StringDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-document.StringDocument.runSimulation">runSimulation</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |

---

##### `toString` <a name="toString" id="cdk-ssm-document.StringDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `print` <a name="print" id="cdk-ssm-document.StringDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `runSimulation` <a name="runSimulation" id="cdk-ssm-document.StringDocument.runSimulation"></a>

```typescript
public runSimulation(inputs: {[ key: string ]: any}): DocumentResult
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Executes the SSM Document in simluation mode.
This method DOES NOT result in invocation of SSM APIs.
Rather, all steps are executed locally and mimic the behavior of SSM.
If any inputs are not provided in this function, the specified defaults for the inputs will be used.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringDocument.runSimulation.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

the inputs to feed into the simulated execution.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ssm-document.StringDocument.fromFile">fromFile</a></code> | Create an AutomationDocument from an existing AutomationDocument yaml or json file. |
| <code><a href="#cdk-ssm-document.StringDocument.fromJson">fromJson</a></code> | Create an AutomationDocument from an existing json string. |
| <code><a href="#cdk-ssm-document.StringDocument.fromYaml">fromYaml</a></code> | Create an AutomationDocument from an existing yaml string. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.StringDocument.isConstruct"></a>

```typescript
import { StringDocument } from 'cdk-ssm-document'

StringDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.StringDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromFile` <a name="fromFile" id="cdk-ssm-document.StringDocument.fromFile"></a>

```typescript
import { StringDocument } from 'cdk-ssm-document'

StringDocument.fromFile(stack: Construct, id: string, documentFilePath: string, simulationProps: SimulationProps)
```

Create an AutomationDocument from an existing AutomationDocument yaml or json file.

Note: This function will deduce whether the file is written in yaml or json based on whether it has a .yaml or .yml extention.
You can use the returned AutomationDocument to run simulations as you would other documents created using this library.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-document.StringDocument.fromFile.parameter.stack"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.StringDocument.fromFile.parameter.id"></a>

- *Type:* string

---

###### `documentFilePath`<sup>Required</sup> <a name="documentFilePath" id="cdk-ssm-document.StringDocument.fromFile.parameter.documentFilePath"></a>

- *Type:* string

---

###### `simulationProps`<sup>Required</sup> <a name="simulationProps" id="cdk-ssm-document.StringDocument.fromFile.parameter.simulationProps"></a>

- *Type:* <a href="#cdk-ssm-document.SimulationProps">SimulationProps</a>

---

##### `fromJson` <a name="fromJson" id="cdk-ssm-document.StringDocument.fromJson"></a>

```typescript
import { StringDocument } from 'cdk-ssm-document'

StringDocument.fromJson(stack: Construct, id: string, documentJson: string, simulationProps: SimulationProps)
```

Create an AutomationDocument from an existing json string.

You can use the returned AutomationDocument to run simulations as you would other documents created using this library.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-document.StringDocument.fromJson.parameter.stack"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.StringDocument.fromJson.parameter.id"></a>

- *Type:* string

---

###### `documentJson`<sup>Required</sup> <a name="documentJson" id="cdk-ssm-document.StringDocument.fromJson.parameter.documentJson"></a>

- *Type:* string

---

###### `simulationProps`<sup>Required</sup> <a name="simulationProps" id="cdk-ssm-document.StringDocument.fromJson.parameter.simulationProps"></a>

- *Type:* <a href="#cdk-ssm-document.SimulationProps">SimulationProps</a>

---

##### `fromYaml` <a name="fromYaml" id="cdk-ssm-document.StringDocument.fromYaml"></a>

```typescript
import { StringDocument } from 'cdk-ssm-document'

StringDocument.fromYaml(stack: Construct, id: string, documentYaml: string, simulationProps: SimulationProps)
```

Create an AutomationDocument from an existing yaml string.

You can use the returned AutomationDocument to run simulations as you would other documents created using this library.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-document.StringDocument.fromYaml.parameter.stack"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.StringDocument.fromYaml.parameter.id"></a>

- *Type:* string

---

###### `documentYaml`<sup>Required</sup> <a name="documentYaml" id="cdk-ssm-document.StringDocument.fromYaml.parameter.documentYaml"></a>

- *Type:* string

---

###### `simulationProps`<sup>Required</sup> <a name="simulationProps" id="cdk-ssm-document.StringDocument.fromYaml.parameter.simulationProps"></a>

- *Type:* <a href="#cdk-ssm-document.SimulationProps">SimulationProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.StringDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringDocument.property.stepCollector">stepCollector</a></code> | <code><a href="#cdk-ssm-document.StepCollector">StepCollector</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringDocument.property.header">header</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.StringDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-document.StringDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-document.StringDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-document.StringDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.StringDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.StringDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a>

---

##### `stepCollector`<sup>Required</sup> <a name="stepCollector" id="cdk-ssm-document.StringDocument.property.stepCollector"></a>

```typescript
public readonly stepCollector: StepCollector;
```

- *Type:* <a href="#cdk-ssm-document.StepCollector">StepCollector</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.StringDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.StringDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---


### StringStep <a name="StringStep" id="cdk-ssm-document.StringStep"></a>

StringStep allows for including a step from an existing automation document verbatim.

This is useful in that it allows developers to integrate with existing document steps.
This step can be used just as you would use any other Step including simulation and deployment.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringStep.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ssm-document.StringStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ssm-document.StringStep.fromJson">fromJson</a></code> | Builds a step object from a json declaration. |
| <code><a href="#cdk-ssm-document.StringStep.fromObject">fromObject</a></code> | Builds a step object from an object. |
| <code><a href="#cdk-ssm-document.StringStep.fromYaml">fromYaml</a></code> | Builds a step object from a yaml declaration. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.StringStep.isConstruct"></a>

```typescript
import { StringStep } from 'cdk-ssm-document'

StringStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.StringStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromJson` <a name="fromJson" id="cdk-ssm-document.StringStep.fromJson"></a>

```typescript
import { StringStep } from 'cdk-ssm-document'

StringStep.fromJson(scope: Construct, json: string, simulationProps: SimulationProps)
```

Builds a step object from a json declaration.

You may cast the step afterword to the associated Step for this action
if you wish to gain access to action specific functionality,

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.StringStep.fromJson.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `json`<sup>Required</sup> <a name="json" id="cdk-ssm-document.StringStep.fromJson.parameter.json"></a>

- *Type:* string

---

###### `simulationProps`<sup>Required</sup> <a name="simulationProps" id="cdk-ssm-document.StringStep.fromJson.parameter.simulationProps"></a>

- *Type:* <a href="#cdk-ssm-document.SimulationProps">SimulationProps</a>

---

##### `fromObject` <a name="fromObject" id="cdk-ssm-document.StringStep.fromObject"></a>

```typescript
import { StringStep } from 'cdk-ssm-document'

StringStep.fromObject(scope: Construct, props: {[ key: string ]: any}, simulationProps: SimulationProps)
```

Builds a step object from an object.

You may cast the step afterword to the associated Step for this action
if you wish to gain access to action specific functionality,

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.StringStep.fromObject.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.StringStep.fromObject.parameter.props"></a>

- *Type:* {[ key: string ]: any}

---

###### `simulationProps`<sup>Required</sup> <a name="simulationProps" id="cdk-ssm-document.StringStep.fromObject.parameter.simulationProps"></a>

- *Type:* <a href="#cdk-ssm-document.SimulationProps">SimulationProps</a>

---

##### `fromYaml` <a name="fromYaml" id="cdk-ssm-document.StringStep.fromYaml"></a>

```typescript
import { StringStep } from 'cdk-ssm-document'

StringStep.fromYaml(scope: Construct, inputYaml: string, simulationProps: SimulationProps)
```

Builds a step object from a yaml declaration.

You may cast the step afterword to the associated Step for this action
if you wish to gain access to action specific functionality,

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.StringStep.fromYaml.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `inputYaml`<sup>Required</sup> <a name="inputYaml" id="cdk-ssm-document.StringStep.fromYaml.parameter.inputYaml"></a>

- *Type:* string

---

###### `simulationProps`<sup>Required</sup> <a name="simulationProps" id="cdk-ssm-document.StringStep.fromYaml.parameter.simulationProps"></a>

- *Type:* <a href="#cdk-ssm-document.SimulationProps">SimulationProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.StringStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### TimedDocument <a name="TimedDocument" id="cdk-ssm-document.TimedDocument"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.TimedDocument.Initializer"></a>

```typescript
import { TimedDocument } from 'cdk-ssm-document'

new TimedDocument(stage: Construct, id: string, props: AutomationDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.TimedDocument.Initializer.parameter.stage">stage</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.AutomationDocumentProps">AutomationDocumentProps</a></code> | *No description.* |

---

##### `stage`<sup>Required</sup> <a name="stage" id="cdk-ssm-document.TimedDocument.Initializer.parameter.stage"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.TimedDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.TimedDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.AutomationDocumentProps">AutomationDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.TimedDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.TimedDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-document.TimedDocument.runSimulation">runSimulation</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |

---

##### `toString` <a name="toString" id="cdk-ssm-document.TimedDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `print` <a name="print" id="cdk-ssm-document.TimedDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `runSimulation` <a name="runSimulation" id="cdk-ssm-document.TimedDocument.runSimulation"></a>

```typescript
public runSimulation(inputs: {[ key: string ]: any}): DocumentResult
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Executes the SSM Document in simluation mode.
This method DOES NOT result in invocation of SSM APIs.
Rather, all steps are executed locally and mimic the behavior of SSM.
If any inputs are not provided in this function, the specified defaults for the inputs will be used.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.TimedDocument.runSimulation.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

the inputs to feed into the simulated execution.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.TimedDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.TimedDocument.isConstruct"></a>

```typescript
import { TimedDocument } from 'cdk-ssm-document'

TimedDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.TimedDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.TimedDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.TimedDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.property.stepCollector">stepCollector</a></code> | <code><a href="#cdk-ssm-document.StepCollector">StepCollector</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.TimedDocument.property.header">header</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.TimedDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-document.TimedDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-document.TimedDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-document.TimedDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.TimedDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.TimedDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-document.SsmDocumentProps">SsmDocumentProps</a>

---

##### `stepCollector`<sup>Required</sup> <a name="stepCollector" id="cdk-ssm-document.TimedDocument.property.stepCollector"></a>

```typescript
public readonly stepCollector: StepCollector;
```

- *Type:* <a href="#cdk-ssm-document.StepCollector">StepCollector</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.TimedDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.TimedDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---


### WaitForResourceStep <a name="WaitForResourceStep" id="cdk-ssm-document.WaitForResourceStep"></a>

AutomationStep impl for aws:waitForAwsResourceProperty https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-waitForAwsResourceProperty.html.

#### Initializers <a name="Initializers" id="cdk-ssm-document.WaitForResourceStep.Initializer"></a>

```typescript
import { WaitForResourceStep } from 'cdk-ssm-document'

new WaitForResourceStep(scope: Construct, id: string, props: WaitForResourceStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.WaitForResourceStepProps">WaitForResourceStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-document.WaitForResourceStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-document.WaitForResourceStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.WaitForResourceStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.WaitForResourceStepProps">WaitForResourceStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.invoke">invoke</a></code> | Invokes the current step on the input and will return a SimulationResult. |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.listInputs">listInputs</a></code> | Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}"). |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.listOutputs">listOutputs</a></code> | There are no outputs for this step. |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.executeStep">executeStep</a></code> | As is the case in an SSM Automation execution, this will continue to sleep/execute until desired value is found. |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-document.WaitForResourceStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `invoke` <a name="invoke" id="cdk-ssm-document.WaitForResourceStep.invoke"></a>

```typescript
public invoke(inputs: {[ key: string ]: any}): SimulationResult
```

Invokes the current step on the input and will return a SimulationResult.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.WaitForResourceStep.invoke.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

must contain all of the inputs declared by the current step.

---

##### `listInputs` <a name="listInputs" id="cdk-ssm-document.WaitForResourceStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}").

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-document.WaitForResourceStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

There are no outputs for this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-document.WaitForResourceStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `executeStep` <a name="executeStep" id="cdk-ssm-document.WaitForResourceStep.executeStep"></a>

```typescript
public executeStep(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

As is the case in an SSM Automation execution, this will continue to sleep/execute until desired value is found.

This function will throw if the timeoutSeconds is exceeded and the desired value is still not received from AWS.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.WaitForResourceStep.executeStep.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `variables` <a name="variables" id="cdk-ssm-document.WaitForResourceStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-document.WaitForResourceStep.isConstruct"></a>

```typescript
import { WaitForResourceStep } from 'cdk-ssm-document'

WaitForResourceStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-document.WaitForResourceStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.apiParams">apiParams</a></code> | <code><a href="#cdk-ssm-document.DictFormat">DictFormat</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-document.Output">Output</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.sleeper">sleeper</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.sleepIntervalMillis">sleepIntervalMillis</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.WaitForResourceStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-document.WaitForResourceStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-document.WaitForResourceStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.WaitForResourceStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-document.WaitForResourceStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.WaitForResourceStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-document.WaitForResourceStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-document.WaitForResourceStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-document.WaitForResourceStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.WaitForResourceStep.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.WaitForResourceStep.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-document.WaitForResourceStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-document.WaitForResourceStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-document.WaitForResourceStep.property.apiParams"></a>

```typescript
public readonly apiParams: DictFormat;
```

- *Type:* <a href="#cdk-ssm-document.DictFormat">DictFormat</a>

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.WaitForResourceStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `javaScriptApi`<sup>Required</sup> <a name="javaScriptApi" id="cdk-ssm-document.WaitForResourceStep.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-document.WaitForResourceStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-document.Output">Output</a>[]

---

##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-document.WaitForResourceStep.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.WaitForResourceStep.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-document.WaitForResourceStep.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-document.WaitForResourceStep.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `sleeper`<sup>Required</sup> <a name="sleeper" id="cdk-ssm-document.WaitForResourceStep.property.sleeper"></a>

```typescript
public readonly sleeper: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

---

##### `sleepIntervalMillis`<sup>Required</sup> <a name="sleepIntervalMillis" id="cdk-ssm-document.WaitForResourceStep.property.sleepIntervalMillis"></a>

```typescript
public readonly sleepIntervalMillis: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-document.WaitForResourceStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-document.WaitForResourceStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-document.WaitForResourceStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

## Structs <a name="Structs" id="Structs"></a>

### ApproveStepProps <a name="ApproveStepProps" id="cdk-ssm-document.ApproveStepProps"></a>

Properties for ApproveStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.ApproveStepProps.Initializer"></a>

```typescript
import { ApproveStepProps } from 'cdk-ssm-document'

const approveStepProps: ApproveStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.approvers">approvers</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | A list of AWS authenticated principals who are able to either approve or reject the action. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.approveHook">approveHook</a></code> | <code><a href="#cdk-ssm-document.IApproveHook">IApproveHook</a></code> | (Optional) Approve hook to be called to pause the execution. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.message">message</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The information you want to include in the Amazon SNS topic when the approval request is sent. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.minRequiredApprovals">minRequiredApprovals</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | (Optional) The minimum number of approvals required to resume the automation. |
| <code><a href="#cdk-ssm-document.ApproveStepProps.property.notificationArn">notificationArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN of an Amazon Simple Notification Service (Amazon SNS) topic for Automation approvals. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ApproveStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.ApproveStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.ApproveStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.ApproveStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.ApproveStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.ApproveStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ApproveStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ApproveStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ApproveStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="cdk-ssm-document.ApproveStepProps.property.approvers"></a>

```typescript
public readonly approvers: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

A list of AWS authenticated principals who are able to either approve or reject the action.

The maximum number of approvers is 10.

You can specify principals by using any of the following formats:
* An AWS Identity and Access Management (IAM) user name
* An IAM user ARN
* An IAM role ARN
* An IAM assume role user ARN

---

##### `approveHook`<sup>Optional</sup> <a name="approveHook" id="cdk-ssm-document.ApproveStepProps.property.approveHook"></a>

```typescript
public readonly approveHook: IApproveHook;
```

- *Type:* <a href="#cdk-ssm-document.IApproveHook">IApproveHook</a>
- *Default:* ApproveHook instance. ApproveHook may not work in exported JSII languages. Override interface as needed.

(Optional) Approve hook to be called to pause the execution.

To mock this implementation either inject an instance of IApproveHook or use the provided MockApprove class.

---

##### `message`<sup>Optional</sup> <a name="message" id="cdk-ssm-document.ApproveStepProps.property.message"></a>

```typescript
public readonly message: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The information you want to include in the Amazon SNS topic when the approval request is sent.

The maximum message length is 4096 characters.

---

##### `minRequiredApprovals`<sup>Optional</sup> <a name="minRequiredApprovals" id="cdk-ssm-document.ApproveStepProps.property.minRequiredApprovals"></a>

```typescript
public readonly minRequiredApprovals: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

(Optional) The minimum number of approvals required to resume the automation.

If you don't specify a value, the system defaults to one. The value for this parameter must be a positive number. The value for this parameter can't exceed the number of approvers defined by the Approvers parameter.

---

##### `notificationArn`<sup>Optional</sup> <a name="notificationArn" id="cdk-ssm-document.ApproveStepProps.property.notificationArn"></a>

```typescript
public readonly notificationArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN of an Amazon Simple Notification Service (Amazon SNS) topic for Automation approvals.

When you specify an aws:approve step in a runbook, Automation sends a message to this topic letting principals know that they must either approve or reject an Automation step. The title of the Amazon SNS topic must be prefixed with "Automation".

---

### AssertAwsResourceStepProps <a name="AssertAwsResourceStepProps" id="cdk-ssm-document.AssertAwsResourceStepProps"></a>

Properties for AssertAwsResourceStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.AssertAwsResourceStepProps.Initializer"></a>

```typescript
import { AssertAwsResourceStepProps } from 'cdk-ssm-document'

const assertAwsResourceStepProps: AssertAwsResourceStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | (Required) Value extracted from AWS response desired to be one of these desired values. |
| <code><a href="#cdk-ssm-document.AssertAwsResourceStepProps.property.selector">selector</a></code> | <code>string</code> | (Required) Json path selector to extract value from AWS response. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AssertAwsResourceStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.AssertAwsResourceStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.AssertAwsResourceStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.AssertAwsResourceStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.AssertAwsResourceStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.AssertAwsResourceStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.AssertAwsResourceStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.AssertAwsResourceStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.AssertAwsResourceStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-document.AssertAwsResourceStepProps.property.apiParams"></a>

```typescript
public readonly apiParams: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Required) API Params to submit with the request to the api.

You may include variables which will be substitued for inputs during step execution as such {{INPUT}}

---

*Example*

```typescript
{ 'VolumeIds': ['{{ EbsDescribeInstance.VolumeId }}'] }
```


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-document.AssertAwsResourceStepProps.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

(Required) The AWS api represented in PascalCase.

This value is used as-is in the SSM yaml/json.
This is used as the default for javaScriptApi (see that param).

---

*Example*

```typescript
DescribeInstances
```


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.AssertAwsResourceStepProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

(Required) The AWS service to be invoked.

---

*Example*

```typescript
ec2
```


##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.AssertAwsResourceStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-document.AssertAwsResourceStepProps.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string
- *Default:* will use the camelCaseApi param and substitute the first character for lowercase by default.

(Optional) The api as represented the AWS JavaScript API.

This is usually lowerCamelCase.
This is used in the simulation run to execute the AWS API against the JavaScript SDK.

---

*Example*

```typescript
describeInstances
```


##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-document.AssertAwsResourceStepProps.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

(Required) Value extracted from AWS response desired to be one of these desired values.

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-document.AssertAwsResourceStepProps.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

(Required) Json path selector to extract value from AWS response.

---

### AutomationDocumentProps <a name="AutomationDocumentProps" id="cdk-ssm-document.AutomationDocumentProps"></a>

Options for AutomationDocument.

#### Initializer <a name="Initializer" id="cdk-ssm-document.AutomationDocumentProps.Initializer"></a>

```typescript
import { AutomationDocumentProps } from 'cdk-ssm-document'

const automationDocumentProps: AutomationDocumentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.assumeRole">assumeRole</a></code> | <code>string</code> | (Optional) Assume role to use for this document. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.description">description</a></code> | <code>string</code> | (Optional) Description of the document. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | (Optional) Inputs required by the document. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | (Optional) Outputs to be emitted from the document. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.documentFormat">documentFormat</a></code> | <code><a href="#cdk-ssm-document.DocumentFormat">DocumentFormat</a></code> | (Optional) Specifies whether this document should be written as YAML or JSON. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.documentName">documentName</a></code> | <code>string</code> | (Optional) Name of the document. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.header">header</a></code> | <code>string</code> | (Optional) A Header/comment to include at the start of a YAML document. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.requires">requires</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty \| aws-cdk-lib.IResolvable[]</code> | `AWS::SSM::Document.Requires`. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | `AWS::SSM::Document.Tags`. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.targetType">targetType</a></code> | <code>string</code> | `AWS::SSM::Document.TargetType`. |
| <code><a href="#cdk-ssm-document.AutomationDocumentProps.property.versionName">versionName</a></code> | <code>string</code> | `AWS::SSM::Document.VersionName`. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.AutomationDocumentProps.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

(Optional) Assume role to use for this document.

If provided, this value MUST be included as one of the documentInput names.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AutomationDocumentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

(Optional) Description of the document.

Defaults to the document name.

---

##### `docInputs`<sup>Optional</sup> <a name="docInputs" id="cdk-ssm-document.AutomationDocumentProps.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

(Optional) Inputs required by the document.

---

##### `docOutputs`<sup>Optional</sup> <a name="docOutputs" id="cdk-ssm-document.AutomationDocumentProps.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]
- *Default:* []

(Optional) Outputs to be emitted from the document.

The outputs are placed in a StringSet called outputs (as is done in SSM).

---

##### `documentFormat`<sup>Optional</sup> <a name="documentFormat" id="cdk-ssm-document.AutomationDocumentProps.property.documentFormat"></a>

```typescript
public readonly documentFormat: DocumentFormat;
```

- *Type:* <a href="#cdk-ssm-document.DocumentFormat">DocumentFormat</a>
- *Default:* JSON

(Optional) Specifies whether this document should be written as YAML or JSON.

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="cdk-ssm-document.AutomationDocumentProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

(Optional) Name of the document.

Will default to the id provided for the CDK node.

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.AutomationDocumentProps.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

(Optional) A Header/comment to include at the start of a YAML document.

JSON documents do not support headers.

---

##### `requires`<sup>Optional</sup> <a name="requires" id="cdk-ssm-document.AutomationDocumentProps.property.requires"></a>

```typescript
public readonly requires: IResolvable | DocumentRequiresProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty | aws-cdk-lib.IResolvable[]

`AWS::SSM::Document.Requires`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-document.AutomationDocumentProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

`AWS::SSM::Document.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags)

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="cdk-ssm-document.AutomationDocumentProps.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

`AWS::SSM::Document.TargetType`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype)

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="cdk-ssm-document.AutomationDocumentProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

`AWS::SSM::Document.VersionName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname)

---

### AutomationStepProps <a name="AutomationStepProps" id="cdk-ssm-document.AutomationStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.AutomationStepProps.Initializer"></a>

```typescript
import { AutomationStepProps } from 'cdk-ssm-document'

const automationStepProps: AutomationStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.AutomationStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AutomationStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.AutomationStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.AutomationStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.AutomationStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.AutomationStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.AutomationStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.AutomationStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.AutomationStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.AutomationStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

### AwsApiStepProps <a name="AwsApiStepProps" id="cdk-ssm-document.AwsApiStepProps"></a>

Properties for AwsInvocation.

#### Initializer <a name="Initializer" id="cdk-ssm-document.AwsApiStepProps.Initializer"></a>

```typescript
import { AwsApiStepProps } from 'cdk-ssm-document'

const awsApiStepProps: AwsApiStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |
| <code><a href="#cdk-ssm-document.AwsApiStepProps.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-document.Output">Output</a>[]</code> | (Required) specify the outputs to extract from the JavaScript JSON response. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AwsApiStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.AwsApiStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.AwsApiStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.AwsApiStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.AwsApiStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.AwsApiStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.AwsApiStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.AwsApiStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.AwsApiStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-document.AwsApiStepProps.property.apiParams"></a>

```typescript
public readonly apiParams: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Required) API Params to submit with the request to the api.

You may include variables which will be substitued for inputs during step execution as such {{INPUT}}

---

*Example*

```typescript
{ 'VolumeIds': ['{{ EbsDescribeInstance.VolumeId }}'] }
```


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-document.AwsApiStepProps.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

(Required) The AWS api represented in PascalCase.

This value is used as-is in the SSM yaml/json.
This is used as the default for javaScriptApi (see that param).

---

*Example*

```typescript
DescribeInstances
```


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.AwsApiStepProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

(Required) The AWS service to be invoked.

---

*Example*

```typescript
ec2
```


##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.AwsApiStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-document.AwsApiStepProps.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string
- *Default:* will use the camelCaseApi param and substitute the first character for lowercase by default.

(Optional) The api as represented the AWS JavaScript API.

This is usually lowerCamelCase.
This is used in the simulation run to execute the AWS API against the JavaScript SDK.

---

*Example*

```typescript
describeInstances
```


##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-document.AwsApiStepProps.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-document.Output">Output</a>[]

(Required) specify the outputs to extract from the JavaScript JSON response.

---

### AwsInvocationProps <a name="AwsInvocationProps" id="cdk-ssm-document.AwsInvocationProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.AwsInvocationProps.Initializer"></a>

```typescript
import { AwsInvocationProps } from 'cdk-ssm-document'

const awsInvocationProps: AwsInvocationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.AwsInvocationProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.AwsInvocationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.AwsInvocationProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.AwsInvocationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.AwsInvocationProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.AwsInvocationProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.AwsInvocationProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.AwsInvocationProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.AwsInvocationProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.AwsInvocationProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-document.AwsInvocationProps.property.apiParams"></a>

```typescript
public readonly apiParams: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Required) API Params to submit with the request to the api.

You may include variables which will be substitued for inputs during step execution as such {{INPUT}}

---

*Example*

```typescript
{ 'VolumeIds': ['{{ EbsDescribeInstance.VolumeId }}'] }
```


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-document.AwsInvocationProps.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

(Required) The AWS api represented in PascalCase.

This value is used as-is in the SSM yaml/json.
This is used as the default for javaScriptApi (see that param).

---

*Example*

```typescript
DescribeInstances
```


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.AwsInvocationProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

(Required) The AWS service to be invoked.

---

*Example*

```typescript
ec2
```


##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.AwsInvocationProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-document.AwsInvocationProps.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string
- *Default:* will use the camelCaseApi param and substitute the first character for lowercase by default.

(Optional) The api as represented the AWS JavaScript API.

This is usually lowerCamelCase.
This is used in the simulation run to execute the AWS API against the JavaScript SDK.

---

*Example*

```typescript
describeInstances
```


### BodyOrUrlProp <a name="BodyOrUrlProp" id="cdk-ssm-document.BodyOrUrlProp"></a>

Allow passing in a body or URL version of the property value.

#### Initializer <a name="Initializer" id="cdk-ssm-document.BodyOrUrlProp.Initializer"></a>

```typescript
import { BodyOrUrlProp } from 'cdk-ssm-document'

const bodyOrUrlProp: BodyOrUrlProp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.BodyOrUrlProp.property.propType">propType</a></code> | <code><a href="#cdk-ssm-document.BodyOrUrlType">BodyOrUrlType</a></code> | Whether the body or URL was provided. |
| <code><a href="#cdk-ssm-document.BodyOrUrlProp.property.value">value</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | Body or URL string. |

---

##### `propType`<sup>Required</sup> <a name="propType" id="cdk-ssm-document.BodyOrUrlProp.property.propType"></a>

```typescript
public readonly propType: BodyOrUrlType;
```

- *Type:* <a href="#cdk-ssm-document.BodyOrUrlType">BodyOrUrlType</a>

Whether the body or URL was provided.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-document.BodyOrUrlProp.property.value"></a>

```typescript
public readonly value: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

Body or URL string.

---

### BranchStepProps <a name="BranchStepProps" id="cdk-ssm-document.BranchStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.BranchStepProps.Initializer"></a>

```typescript
import { BranchStepProps } from 'cdk-ssm-document'

const branchStepProps: BranchStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.choices">choices</a></code> | <code><a href="#cdk-ssm-document.Choice">Choice</a>[]</code> | (Required) list of choices. |
| <code><a href="#cdk-ssm-document.BranchStepProps.property.defaultStepName">defaultStepName</a></code> | <code>string</code> | (Optional) default step in all of the choices evaluate to false. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.BranchStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.BranchStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.BranchStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.BranchStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.BranchStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.BranchStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.BranchStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.BranchStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.BranchStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `choices`<sup>Required</sup> <a name="choices" id="cdk-ssm-document.BranchStepProps.property.choices"></a>

```typescript
public readonly choices: Choice[];
```

- *Type:* <a href="#cdk-ssm-document.Choice">Choice</a>[]

(Required) list of choices.

The first matched choice will be used to jump to the step specified in the choice.

---

##### `defaultStepName`<sup>Optional</sup> <a name="defaultStepName" id="cdk-ssm-document.BranchStepProps.property.defaultStepName"></a>

```typescript
public readonly defaultStepName: string;
```

- *Type:* string
- *Default:* undefined - the next step in the chain will be invoked. See AWS Documentation for branch below.

(Optional) default step in all of the choices evaluate to false.

---

### ChangeInstanceStateStepProps <a name="ChangeInstanceStateStepProps" id="cdk-ssm-document.ChangeInstanceStateStepProps"></a>

Properties for ChangeInstanceStateStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.ChangeInstanceStateStepProps.Initializer"></a>

```typescript
import { ChangeInstanceStateStepProps } from 'cdk-ssm-document'

const changeInstanceStateStepProps: ChangeInstanceStateStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.desiredState">desiredState</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | The desired state. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.instanceIds">instanceIds</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | The IDs of the instances. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) Reserved. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.checkStateOnly">checkStateOnly</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | (Optional) If false, sets the instance state to the desired state. |
| <code><a href="#cdk-ssm-document.ChangeInstanceStateStepProps.property.force">force</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | (Optional) If set, forces the instances to stop. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.desiredState"></a>

```typescript
public readonly desiredState: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

The desired state.

When set to running, this action waits for the Amazon EC2 state to be Running, the Instance Status to be OK,
and the System Status to be OK before completing.

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.instanceIds"></a>

```typescript
public readonly instanceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

The IDs of the instances.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) Reserved.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `checkStateOnly`<sup>Optional</sup> <a name="checkStateOnly" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.checkStateOnly"></a>

```typescript
public readonly checkStateOnly: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>
- *Default:* false

(Optional) If false, sets the instance state to the desired state.

If true, asserts the desired state using polling.

---

##### `force`<sup>Optional</sup> <a name="force" id="cdk-ssm-document.ChangeInstanceStateStepProps.property.force"></a>

```typescript
public readonly force: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

(Optional) If set, forces the instances to stop.

The instances don't have an opportunity to flush file system caches or file system metadata.
If you use this option, you must perform file system check and repair procedures.
This option isn't recommended for EC2 instances for Windows Server.

---

### ChoiceProps <a name="ChoiceProps" id="cdk-ssm-document.ChoiceProps"></a>

Properties for a Choice used by the BranchStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.ChoiceProps.Initializer"></a>

```typescript
import { ChoiceProps } from 'cdk-ssm-document'

const choiceProps: ChoiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ChoiceProps.property.constant">constant</a></code> | <code>any</code> | (Required) the constant to test against the inputToTest. |
| <code><a href="#cdk-ssm-document.ChoiceProps.property.jumpToStepName">jumpToStepName</a></code> | <code>string</code> | A step to jump to if this choice is evaluated to true. |
| <code><a href="#cdk-ssm-document.ChoiceProps.property.operation">operation</a></code> | <code><a href="#cdk-ssm-document.Operation">Operation</a></code> | (Required) The operation used to compare the inputToTest with the constant. |
| <code><a href="#cdk-ssm-document.ChoiceProps.property.variable">variable</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a> \| <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a> \| <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Required) the input used to test using the operation with the constant. |

---

##### `constant`<sup>Required</sup> <a name="constant" id="cdk-ssm-document.ChoiceProps.property.constant"></a>

```typescript
public readonly constant: any;
```

- *Type:* any

(Required) the constant to test against the inputToTest.

---

##### `jumpToStepName`<sup>Required</sup> <a name="jumpToStepName" id="cdk-ssm-document.ChoiceProps.property.jumpToStepName"></a>

```typescript
public readonly jumpToStepName: string;
```

- *Type:* string

A step to jump to if this choice is evaluated to true.

Must reference another step in the currently executing AutomationDocument.

---

##### `operation`<sup>Required</sup> <a name="operation" id="cdk-ssm-document.ChoiceProps.property.operation"></a>

```typescript
public readonly operation: Operation;
```

- *Type:* <a href="#cdk-ssm-document.Operation">Operation</a>

(Required) The operation used to compare the inputToTest with the constant.

---

##### `variable`<sup>Required</sup> <a name="variable" id="cdk-ssm-document.ChoiceProps.property.variable"></a>

```typescript
public readonly variable: IBooleanVariable | INumberVariable | IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a> | <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a> | <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Required) the input used to test using the operation with the constant.

---

### CommandDocumentProps <a name="CommandDocumentProps" id="cdk-ssm-document.CommandDocumentProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.CommandDocumentProps.Initializer"></a>

```typescript
import { CommandDocumentProps } from 'cdk-ssm-document'

const commandDocumentProps: CommandDocumentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.assumeRole">assumeRole</a></code> | <code>string</code> | (Optional) Assume role to use for this document. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.description">description</a></code> | <code>string</code> | (Optional) Description of the document. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | (Optional) Inputs required by the document. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | (Optional) Outputs to be emitted from the document. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.documentFormat">documentFormat</a></code> | <code><a href="#cdk-ssm-document.DocumentFormat">DocumentFormat</a></code> | (Optional) Specifies whether this document should be written as YAML or JSON. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.documentName">documentName</a></code> | <code>string</code> | (Optional) Name of the document. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.header">header</a></code> | <code>string</code> | (Optional) A Header/comment to include at the start of a YAML document. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.requires">requires</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty \| aws-cdk-lib.IResolvable[]</code> | `AWS::SSM::Document.Requires`. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | `AWS::SSM::Document.Tags`. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.targetType">targetType</a></code> | <code>string</code> | `AWS::SSM::Document.TargetType`. |
| <code><a href="#cdk-ssm-document.CommandDocumentProps.property.versionName">versionName</a></code> | <code>string</code> | `AWS::SSM::Document.VersionName`. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.CommandDocumentProps.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

(Optional) Assume role to use for this document.

If provided, this value MUST be included as one of the documentInput names.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CommandDocumentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

(Optional) Description of the document.

Defaults to the document name.

---

##### `docInputs`<sup>Optional</sup> <a name="docInputs" id="cdk-ssm-document.CommandDocumentProps.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

(Optional) Inputs required by the document.

---

##### `docOutputs`<sup>Optional</sup> <a name="docOutputs" id="cdk-ssm-document.CommandDocumentProps.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]
- *Default:* []

(Optional) Outputs to be emitted from the document.

The outputs are placed in a StringSet called outputs (as is done in SSM).

---

##### `documentFormat`<sup>Optional</sup> <a name="documentFormat" id="cdk-ssm-document.CommandDocumentProps.property.documentFormat"></a>

```typescript
public readonly documentFormat: DocumentFormat;
```

- *Type:* <a href="#cdk-ssm-document.DocumentFormat">DocumentFormat</a>
- *Default:* JSON

(Optional) Specifies whether this document should be written as YAML or JSON.

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="cdk-ssm-document.CommandDocumentProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

(Optional) Name of the document.

Will default to the id provided for the CDK node.

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.CommandDocumentProps.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

(Optional) A Header/comment to include at the start of a YAML document.

JSON documents do not support headers.

---

##### `requires`<sup>Optional</sup> <a name="requires" id="cdk-ssm-document.CommandDocumentProps.property.requires"></a>

```typescript
public readonly requires: IResolvable | DocumentRequiresProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty | aws-cdk-lib.IResolvable[]

`AWS::SSM::Document.Requires`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-document.CommandDocumentProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

`AWS::SSM::Document.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags)

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="cdk-ssm-document.CommandDocumentProps.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

`AWS::SSM::Document.TargetType`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype)

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="cdk-ssm-document.CommandDocumentProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

`AWS::SSM::Document.VersionName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname)

---

### CommandStepProps <a name="CommandStepProps" id="cdk-ssm-document.CommandStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.CommandStepProps.Initializer"></a>

```typescript
import { CommandStepProps } from 'cdk-ssm-document'

const commandStepProps: CommandStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.CommandStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CommandStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.CommandStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.CommandStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.CommandStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-document.CommandStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-document.CommandStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-document.CommandStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.CommandStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CommandStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

### CopyImageStepProps <a name="CopyImageStepProps" id="cdk-ssm-document.CopyImageStepProps"></a>

Properties for CopyImageStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.CopyImageStepProps.Initializer"></a>

```typescript
import { CopyImageStepProps } from 'cdk-ssm-document'

const copyImageStepProps: CopyImageStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The name for the image. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.sourceImageId">sourceImageId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The AMI ID to copy from the source Region. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.sourceRegion">sourceRegion</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The region where the source AMI exists. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) A unique, case-sensitive identifier that you provide to ensure request idempotency. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.encrypted">encrypted</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Encrypt the target AMI. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) A description of the image. |
| <code><a href="#cdk-ssm-document.CopyImageStepProps.property.kmsKeyId">kmsKeyId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The full Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting the snapshots of an image during a copy operation. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CopyImageStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.CopyImageStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.CopyImageStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.CopyImageStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.CopyImageStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.CopyImageStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CopyImageStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CopyImageStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CopyImageStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-document.CopyImageStepProps.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The name for the image.

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="cdk-ssm-document.CopyImageStepProps.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The AMI ID to copy from the source Region.

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="cdk-ssm-document.CopyImageStepProps.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The region where the source AMI exists.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.CopyImageStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-document.CopyImageStepProps.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) A unique, case-sensitive identifier that you provide to ensure request idempotency.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="cdk-ssm-document.CopyImageStepProps.property.encrypted"></a>

```typescript
public readonly encrypted: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

(Optional) Encrypt the target AMI.

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-document.CopyImageStepProps.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) A description of the image.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="cdk-ssm-document.CopyImageStepProps.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The full Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting the snapshots of an image during a copy operation.

---

### CreateImageStepProps <a name="CreateImageStepProps" id="cdk-ssm-document.CreateImageStepProps"></a>

Properties for CreateImageStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.CreateImageStepProps.Initializer"></a>

```typescript
import { CreateImageStepProps } from 'cdk-ssm-document'

const createImageStepProps: CreateImageStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The name for the image. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.instanceId">instanceId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The ID of the instance. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The block devices for the instance. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) A description of the image. |
| <code><a href="#cdk-ssm-document.CreateImageStepProps.property.noReboot">noReboot</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | (Optional) By default, Amazon Elastic Compute Cloud (Amazon EC2) attempts to shut down and reboot the instance before creating the image. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CreateImageStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.CreateImageStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.CreateImageStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.CreateImageStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.CreateImageStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.CreateImageStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CreateImageStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CreateImageStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CreateImageStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-document.CreateImageStepProps.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The name for the image.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-ssm-document.CreateImageStepProps.property.instanceId"></a>

```typescript
public readonly instanceId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The ID of the instance.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.CreateImageStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-document.CreateImageStepProps.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

(Optional) The block devices for the instance.

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-document.CreateImageStepProps.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) A description of the image.

---

##### `noReboot`<sup>Optional</sup> <a name="noReboot" id="cdk-ssm-document.CreateImageStepProps.property.noReboot"></a>

```typescript
public readonly noReboot: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

(Optional) By default, Amazon Elastic Compute Cloud (Amazon EC2) attempts to shut down and reboot the instance before creating the image.

If the No Reboot option is set to true, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.
If you don't want the instance to run after you create an AMI from it, first use the aws:changeInstanceState – Change or assert instance state action to stop the instance, and then use this aws:createImage action with the NoReboot option set to true.

---

### CreateStackStepProps <a name="CreateStackStepProps" id="cdk-ssm-document.CreateStackStepProps"></a>

Properties for CreateStackStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.CreateStackStepProps.Initializer"></a>

```typescript
import { CreateStackStepProps } from 'cdk-ssm-document'

const createStackStepProps: CreateStackStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.stackName">stackName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The name that is associated with the stack. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.template">template</a></code> | <code><a href="#cdk-ssm-document.BodyOrUrlProp">BodyOrUrlProp</a></code> | Template body or URL. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.capabilities">capabilities</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | (Optional) A list of values that you specify before CloudFormation can create certain stacks. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.clientRequestToken">clientRequestToken</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) A unique identifier for this CreateStack request. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.notificationARNs">notificationARNs</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | (Optional) The Amazon Simple Notification Service (Amazon SNS) topic ARNs for publishing stack-related events. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.onStackFailure">onStackFailure</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | (Optional) Determines the action to take if stack creation failed. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.parameterResolver">parameterResolver</a></code> | <code><a href="#cdk-ssm-document.IParameterResolver">IParameterResolver</a></code> | (Optional) Resolver for secure strings in parameters. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | (Optional) A list of Parameter structures that specify input parameters for the stack. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.resourceTypes">resourceTypes</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | (Optional) The template resource types that you have permissions to work with for this create stack action. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | (Optional) Whether to really perform a pause of the runtime. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.stackPolicy">stackPolicy</a></code> | <code><a href="#cdk-ssm-document.BodyOrUrlProp">BodyOrUrlProp</a></code> | (Optional) Stack policy body or URL. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.tags">tags</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | (Optional) Key-value pairs to associate with this stack. |
| <code><a href="#cdk-ssm-document.CreateStackStepProps.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | (Optional) The amount of time that can pass before the stack status becomes CREATE_FAILED. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CreateStackStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.CreateStackStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.CreateStackStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.CreateStackStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.CreateStackStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.CreateStackStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CreateStackStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CreateStackStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CreateStackStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-ssm-document.CreateStackStepProps.property.stackName"></a>

```typescript
public readonly stackName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The name that is associated with the stack.

The name must be unique in the Region in which you're creating the stack.

---

##### `template`<sup>Required</sup> <a name="template" id="cdk-ssm-document.CreateStackStepProps.property.template"></a>

```typescript
public readonly template: BodyOrUrlProp;
```

- *Type:* <a href="#cdk-ssm-document.BodyOrUrlProp">BodyOrUrlProp</a>

Template body or URL.

For more information, see [Template Anatomy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html).

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.CreateStackStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="cdk-ssm-document.CreateStackStepProps.property.capabilities"></a>

```typescript
public readonly capabilities: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

(Optional) A list of values that you specify before CloudFormation can create certain stacks.

Some stack templates include resources that can affect permissions in your AWS account.
For example, creating new AWS Identity and Access Management (IAM) users can affect permissions in your account.
For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter.

Valid values include CAPABILITY_IAM, CAPABILITY_NAMED_IAM, and CAPABILITY_AUTO_EXPAND.

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-ssm-document.CreateStackStepProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) A unique identifier for this CreateStack request.

Specify this token if you set maxAttempts in this step to a value greater than 1.
By specifying this token, CloudFormation knows that you aren't attempting to create a new stack with the same name.

---

##### `notificationARNs`<sup>Optional</sup> <a name="notificationARNs" id="cdk-ssm-document.CreateStackStepProps.property.notificationARNs"></a>

```typescript
public readonly notificationARNs: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

(Optional) The Amazon Simple Notification Service (Amazon SNS) topic ARNs for publishing stack-related events.

---

##### `onStackFailure`<sup>Optional</sup> <a name="onStackFailure" id="cdk-ssm-document.CreateStackStepProps.property.onStackFailure"></a>

```typescript
public readonly onStackFailure: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>
- *Default:* Rollback on failure

(Optional) Determines the action to take if stack creation failed.

---

##### `parameterResolver`<sup>Optional</sup> <a name="parameterResolver" id="cdk-ssm-document.CreateStackStepProps.property.parameterResolver"></a>

```typescript
public readonly parameterResolver: IParameterResolver;
```

- *Type:* <a href="#cdk-ssm-document.IParameterResolver">IParameterResolver</a>
- *Default:* Treats parameters as literal

(Optional) Resolver for secure strings in parameters.

Required to simulate if using tokens in parameters input.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-document.CreateStackStepProps.property.parameters"></a>

```typescript
public readonly parameters: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

(Optional) A list of Parameter structures that specify input parameters for the stack.

For more information, see the [Parameter](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html) data type.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="cdk-ssm-document.CreateStackStepProps.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

(Optional) The template resource types that you have permissions to work with for this create stack action.

For example: AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-document.CreateStackStepProps.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack.

CloudFormation uses the role's credentials to make calls on your behalf.
CloudFormation always uses this role for all future operations on the stack.
As long as users have permission to operate on the stack, CloudFormation uses this role even
if the users don't have permission to pass it. Ensure that the role grants the least amount of privileges.

If you don't specify a value, CloudFormation uses the role that was previously associated with the stack.
If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.CreateStackStepProps.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>
- *Default:* SleeperImpl

(Optional) Whether to really perform a pause of the runtime.

To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.

---

##### `stackPolicy`<sup>Optional</sup> <a name="stackPolicy" id="cdk-ssm-document.CreateStackStepProps.property.stackPolicy"></a>

```typescript
public readonly stackPolicy: BodyOrUrlProp;
```

- *Type:* <a href="#cdk-ssm-document.BodyOrUrlProp">BodyOrUrlProp</a>

(Optional) Stack policy body or URL.

For more information, see [Prevent Updates to Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html).

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-document.CreateStackStepProps.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

(Optional) Key-value pairs to associate with this stack.

CloudFormation also propagates these tags to the resources created in the stack. You can specify a maximum number of 10 tags.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="cdk-ssm-document.CreateStackStepProps.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

(Optional) The amount of time that can pass before the stack status becomes CREATE_FAILED.

If DisableRollback isn't set or is set to false, the stack will be rolled back.

---

### CreateTagsStepProps <a name="CreateTagsStepProps" id="cdk-ssm-document.CreateTagsStepProps"></a>

Properties for CreateTagStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.CreateTagsStepProps.Initializer"></a>

```typescript
import { CreateTagsStepProps } from 'cdk-ssm-document'

const createTagsStepProps: CreateTagsStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.resourceIds">resourceIds</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | The IDs of the resource(s) to be tagged. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.tags">tags</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | The tags to associate with the resource(s). |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.resourceType">resourceType</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | (Optional) The type of resource(s) to be tagged. |
| <code><a href="#cdk-ssm-document.CreateTagsStepProps.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | (Optional) Whether to really perform a pause of the runtime. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.CreateTagsStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.CreateTagsStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.CreateTagsStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.CreateTagsStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.CreateTagsStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.CreateTagsStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.CreateTagsStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.CreateTagsStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.CreateTagsStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="cdk-ssm-document.CreateTagsStepProps.property.resourceIds"></a>

```typescript
public readonly resourceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

The IDs of the resource(s) to be tagged.

If resource type isn't “EC2”, this field can contain only a single item.

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-ssm-document.CreateTagsStepProps.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

The tags to associate with the resource(s).

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.CreateTagsStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="cdk-ssm-document.CreateTagsStepProps.property.resourceType"></a>

```typescript
public readonly resourceType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>
- *Default:* EC2

(Optional) The type of resource(s) to be tagged.

Valid values: EC2 | ManagedInstance | MaintenanceWindow | Parameter

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.CreateTagsStepProps.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>
- *Default:* SleeperImpl

(Optional) Whether to really perform a pause of the runtime.

To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.

---

### DeleteImageStepProps <a name="DeleteImageStepProps" id="cdk-ssm-document.DeleteImageStepProps"></a>

Properties for DeleteImageStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.DeleteImageStepProps.Initializer"></a>

```typescript
import { DeleteImageStepProps } from 'cdk-ssm-document'

const deleteImageStepProps: DeleteImageStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The ID of the image to be deleted. |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.DeleteImageStepProps.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | (Optional) Whether to really perform a pause of the runtime. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.DeleteImageStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.DeleteImageStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.DeleteImageStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.DeleteImageStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.DeleteImageStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.DeleteImageStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.DeleteImageStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.DeleteImageStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.DeleteImageStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-document.DeleteImageStepProps.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The ID of the image to be deleted.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.DeleteImageStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.DeleteImageStepProps.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>
- *Default:* SleeperImpl

(Optional) Whether to really perform a pause of the runtime.

To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.

---

### DeleteStackStepProps <a name="DeleteStackStepProps" id="cdk-ssm-document.DeleteStackStepProps"></a>

Properties for DeleteStackStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.DeleteStackStepProps.Initializer"></a>

```typescript
import { DeleteStackStepProps } from 'cdk-ssm-document'

const deleteStackStepProps: DeleteStackStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.stackNameVariable">stackNameVariable</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) Variable that is fed into this step declaring which stack to delete. |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.DeleteStackStepProps.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.DeleteStackStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.DeleteStackStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.DeleteStackStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.DeleteStackStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.DeleteStackStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.DeleteStackStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.DeleteStackStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.DeleteStackStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.DeleteStackStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `stackNameVariable`<sup>Required</sup> <a name="stackNameVariable" id="cdk-ssm-document.DeleteStackStepProps.property.stackNameVariable"></a>

```typescript
public readonly stackNameVariable: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>
- *Default:* StackName is the default value.

(Optional) Variable that is fed into this step declaring which stack to delete.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.DeleteStackStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-document.DeleteStackStepProps.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack.

CloudFormation uses the role's credentials to make calls on your behalf.
CloudFormation always uses this role for all future operations on the stack.
As long as users have permission to operate on the stack, CloudFormation uses this role even
if the users don't have permission to pass it. Ensure that the role grants the least amount of privileges.

If you don't specify a value, CloudFormation uses the role that was previously associated with the stack.
If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.

---

### DocumentOutput <a name="DocumentOutput" id="cdk-ssm-document.DocumentOutput"></a>

Outputs from a document via one of the steps.

The outputs are available for use in other documents calling this document via aws:executeAutomation.
The outputs returned from an automation document are returned as a String list named "ouptuts".

#### Initializer <a name="Initializer" id="cdk-ssm-document.DocumentOutput.Initializer"></a>

```typescript
import { DocumentOutput } from 'cdk-ssm-document'

const documentOutput: DocumentOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DocumentOutput.property.name">name</a></code> | <code>string</code> | The step and name (in STEP.NAME format) to identify an output expected from one of the document steps. The name must therefore identify a step and an output or will fail validation. |
| <code><a href="#cdk-ssm-document.DocumentOutput.property.outputType">outputType</a></code> | <code><a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a></code> | The DataType expected by this output. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.DocumentOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The step and name (in STEP.NAME format) to identify an output expected from one of the document steps. The name must therefore identify a step and an output or will fail validation.

---

*Example*

```typescript
MyStep.MyOutput
```


##### `outputType`<sup>Required</sup> <a name="outputType" id="cdk-ssm-document.DocumentOutput.property.outputType"></a>

```typescript
public readonly outputType: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a>

The DataType expected by this output.

This will be validated in simulation mode and will also be used when printing to yaml/json.

---

### DocumentResult <a name="DocumentResult" id="cdk-ssm-document.DocumentResult"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.DocumentResult.Initializer"></a>

```typescript
import { DocumentResult } from 'cdk-ssm-document'

const documentResult: DocumentResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DocumentResult.property.executedSteps">executedSteps</a></code> | <code>string[]</code> | All the steps that were executed in this Simulation. |
| <code><a href="#cdk-ssm-document.DocumentResult.property.responseCode">responseCode</a></code> | <code><a href="#cdk-ssm-document.ResponseCode">ResponseCode</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DocumentResult.property.outputs">outputs</a></code> | <code>{[ key: string ]: any}</code> | May be empty if responseCode is FAILED/CANCELLED. |
| <code><a href="#cdk-ssm-document.DocumentResult.property.stackTrace">stackTrace</a></code> | <code>string</code> | undefined if responseCode is SUCCESS. |
| <code><a href="#cdk-ssm-document.DocumentResult.property.documentOutputs">documentOutputs</a></code> | <code>string[]</code> | *No description.* |

---

##### `executedSteps`<sup>Required</sup> <a name="executedSteps" id="cdk-ssm-document.DocumentResult.property.executedSteps"></a>

```typescript
public readonly executedSteps: string[];
```

- *Type:* string[]

All the steps that were executed in this Simulation.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="cdk-ssm-document.DocumentResult.property.responseCode"></a>

```typescript
public readonly responseCode: ResponseCode;
```

- *Type:* <a href="#cdk-ssm-document.ResponseCode">ResponseCode</a>

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="cdk-ssm-document.DocumentResult.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

May be empty if responseCode is FAILED/CANCELLED.

There are no outputs provided for Command steps or documents.

---

##### `stackTrace`<sup>Optional</sup> <a name="stackTrace" id="cdk-ssm-document.DocumentResult.property.stackTrace"></a>

```typescript
public readonly stackTrace: string;
```

- *Type:* string

undefined if responseCode is SUCCESS.

---

##### `documentOutputs`<sup>Required</sup> <a name="documentOutputs" id="cdk-ssm-document.DocumentResult.property.documentOutputs"></a>

```typescript
public readonly documentOutputs: string[];
```

- *Type:* string[]

---

### ExecuteScriptStepProps <a name="ExecuteScriptStepProps" id="cdk-ssm-document.ExecuteScriptStepProps"></a>

Properties for ExecuteScriptStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.ExecuteScriptStepProps.Initializer"></a>

```typescript
import { ExecuteScriptStepProps } from 'cdk-ssm-document'

const executeScriptStepProps: ExecuteScriptStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.inputs">inputs</a></code> | <code>string[]</code> | (Optional) Inputs that the function needs in order to execute. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.language">language</a></code> | <code><a href="#cdk-ssm-document.ScriptLanguage">ScriptLanguage</a></code> | (Required) Language used to execute the script. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.fullPathToCode">fullPathToCode</a></code> | <code>string</code> | Full path to the code to execute. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.handlerName">handlerName</a></code> | <code>string</code> | (Optional) Function name in fullPathToCode file to use as entry point for script handler. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.inlineCode">inlineCode</a></code> | <code>string</code> | Inline code to be executed. |
| <code><a href="#cdk-ssm-document.ExecuteScriptStepProps.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-document.Output">Output</a>[]</code> | (Optional) Outputs that the function is expected to return. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ExecuteScriptStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.ExecuteScriptStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.ExecuteScriptStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.ExecuteScriptStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.ExecuteScriptStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.ExecuteScriptStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ExecuteScriptStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ExecuteScriptStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ExecuteScriptStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ExecuteScriptStepProps.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]
- *Default:* []

(Optional) Inputs that the function needs in order to execute.

---

##### `language`<sup>Required</sup> <a name="language" id="cdk-ssm-document.ExecuteScriptStepProps.property.language"></a>

```typescript
public readonly language: ScriptLanguage;
```

- *Type:* <a href="#cdk-ssm-document.ScriptLanguage">ScriptLanguage</a>

(Required) Language used to execute the script.

---

##### `fullPathToCode`<sup>Optional</sup> <a name="fullPathToCode" id="cdk-ssm-document.ExecuteScriptStepProps.property.fullPathToCode"></a>

```typescript
public readonly fullPathToCode: string;
```

- *Type:* string

Full path to the code to execute.

File is parsed to produce yaml/json.
Simulation will execute this file using the language specified.
Either this OR inclineCode must be provided.

---

##### `handlerName`<sup>Optional</sup> <a name="handlerName" id="cdk-ssm-document.ExecuteScriptStepProps.property.handlerName"></a>

```typescript
public readonly handlerName: string;
```

- *Type:* string
- *Default:* script_handler

(Optional) Function name in fullPathToCode file to use as entry point for script handler.

---

##### `inlineCode`<sup>Optional</sup> <a name="inlineCode" id="cdk-ssm-document.ExecuteScriptStepProps.property.inlineCode"></a>

```typescript
public readonly inlineCode: string;
```

- *Type:* string

Inline code to be executed.

String will be used to produce function in yaml/json.
Simulation will execute the function in this string using the language specified.
Either this OR fullPathToCode must be provided.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="cdk-ssm-document.ExecuteScriptStepProps.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-document.Output">Output</a>[]
- *Default:* []

(Optional) Outputs that the function is expected to return.

Be sure to prefix the selector for these outputs with "$.Payload." for executeScript step outputs.

---

### ExecuteStateMachineStepProps <a name="ExecuteStateMachineStepProps" id="cdk-ssm-document.ExecuteStateMachineStepProps"></a>

Props for ExecuteStateMachine step.

#### Initializer <a name="Initializer" id="cdk-ssm-document.ExecuteStateMachineStepProps.Initializer"></a>

```typescript
import { ExecuteStateMachineStepProps } from 'cdk-ssm-document'

const executeStateMachineStepProps: ExecuteStateMachineStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.stateMachineArn">stateMachineArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The Amazon Resource Name (ARN) of the Step Functions state machine. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.executionName">executionName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The name of the execution. |
| <code><a href="#cdk-ssm-document.ExecuteStateMachineStepProps.property.input">input</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) A string that contains the JSON input data for the execution. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The Amazon Resource Name (ARN) of the Step Functions state machine.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `executionName`<sup>Optional</sup> <a name="executionName" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.executionName"></a>

```typescript
public readonly executionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The name of the execution.

---

##### `input`<sup>Optional</sup> <a name="input" id="cdk-ssm-document.ExecuteStateMachineStepProps.property.input"></a>

```typescript
public readonly input: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) A string that contains the JSON input data for the execution.

---

### Input <a name="Input" id="cdk-ssm-document.Input"></a>

Properties of inputs supported by SSM documents.

These are NOT used for declaring step inputs, rather only for document inputs.
See https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-doc-syntax.html

#### Initializer <a name="Initializer" id="cdk-ssm-document.Input.Initializer"></a>

```typescript
import { Input } from 'cdk-ssm-document'

const input: Input = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Input.property.inputType">inputType</a></code> | <code><a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a></code> | (Required) The DataTypeEnum of the input. |
| <code><a href="#cdk-ssm-document.Input.property.name">name</a></code> | <code>string</code> | (Required) The name of the input by which to be referenced by steps in the document. |
| <code><a href="#cdk-ssm-document.Input.property.allowedPattern">allowedPattern</a></code> | <code>string</code> | (Optional) Pattern that this input value must match. |
| <code><a href="#cdk-ssm-document.Input.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | (Optional) List of allowed values that this input may be. |
| <code><a href="#cdk-ssm-document.Input.property.defaultValue">defaultValue</a></code> | <code>string</code> | (Optional) Default value to use for this input if not specified when invoking the document. |
| <code><a href="#cdk-ssm-document.Input.property.description">description</a></code> | <code>string</code> | (Optional) The description of the input. |
| <code><a href="#cdk-ssm-document.Input.property.maxItems">maxItems</a></code> | <code>number</code> | (Optional) Maximum number of items that this input value (list) must contain. |
| <code><a href="#cdk-ssm-document.Input.property.minItems">minItems</a></code> | <code>number</code> | (Optional) Minimum number of items that this input value (list) must contain. |

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="cdk-ssm-document.Input.property.inputType"></a>

```typescript
public readonly inputType: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a>

(Required) The DataTypeEnum of the input.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.Input.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Required) The name of the input by which to be referenced by steps in the document.

---

##### `allowedPattern`<sup>Optional</sup> <a name="allowedPattern" id="cdk-ssm-document.Input.property.allowedPattern"></a>

```typescript
public readonly allowedPattern: string;
```

- *Type:* string
- *Default:* undefined

(Optional) Pattern that this input value must match.

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="cdk-ssm-document.Input.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]
- *Default:* undefined

(Optional) List of allowed values that this input may be.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="cdk-ssm-document.Input.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string
- *Default:* undefined

(Optional) Default value to use for this input if not specified when invoking the document.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.Input.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* name

(Optional) The description of the input.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="cdk-ssm-document.Input.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number
- *Default:* undefined

(Optional) Maximum number of items that this input value (list) must contain.

---

##### `minItems`<sup>Optional</sup> <a name="minItems" id="cdk-ssm-document.Input.property.minItems"></a>

```typescript
public readonly minItems: number;
```

- *Type:* number
- *Default:* undefined

(Optional) Minimum number of items that this input value (list) must contain.

---

### Invocation <a name="Invocation" id="cdk-ssm-document.Invocation"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.Invocation.Initializer"></a>

```typescript
import { Invocation } from 'cdk-ssm-document'

const invocation: Invocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Invocation.property.awsApi">awsApi</a></code> | <code>string</code> | (Required) AWS api to invoke; |
| <code><a href="#cdk-ssm-document.Invocation.property.awsParams">awsParams</a></code> | <code>{[ key: string ]: any}</code> | (Required )AWS params. |
| <code><a href="#cdk-ssm-document.Invocation.property.service">service</a></code> | <code>string</code> | (Required) AWS service to invoke. |

---

##### `awsApi`<sup>Required</sup> <a name="awsApi" id="cdk-ssm-document.Invocation.property.awsApi"></a>

```typescript
public readonly awsApi: string;
```

- *Type:* string

(Required) AWS api to invoke;

should be referenced using lowerCamelCase.

---

*Example*

```typescript
describeInstance
```


##### `awsParams`<sup>Required</sup> <a name="awsParams" id="cdk-ssm-document.Invocation.property.awsParams"></a>

```typescript
public readonly awsParams: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Required )AWS params.

---

*Example*

```typescript
{ 'Filters': [{'Name': 'instance-id', 'Values': ['{{ InstanceId }}'] }] }
```


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.Invocation.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

(Required) AWS service to invoke.

---

*Example*

```typescript
ec2
```


### InvokeLambdaFunctionStepProps <a name="InvokeLambdaFunctionStepProps" id="cdk-ssm-document.InvokeLambdaFunctionStepProps"></a>

Properties for InvokeLambdaFunctionStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.Initializer"></a>

```typescript
import { InvokeLambdaFunctionStepProps } from 'cdk-ssm-document'

const invokeLambdaFunctionStepProps: InvokeLambdaFunctionStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.functionName">functionName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The name of the Lambda function. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.clientContext">clientContext</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The client-specific information. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.invocationType">invocationType</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The invocation type. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.logType">logType</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) If the default value is Tail, the invocation type must be RequestResponse. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.payload">payload</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The JSON input for your Lambda function. |
| <code><a href="#cdk-ssm-document.InvokeLambdaFunctionStepProps.property.qualifier">qualifier</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The function version or alias name. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.functionName"></a>

```typescript
public readonly functionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The name of the Lambda function.

This function must exist.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `clientContext`<sup>Optional</sup> <a name="clientContext" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.clientContext"></a>

```typescript
public readonly clientContext: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The client-specific information.

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.invocationType"></a>

```typescript
public readonly invocationType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The invocation type.

The default value is RequestResponse.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.logType"></a>

```typescript
public readonly logType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) If the default value is Tail, the invocation type must be RequestResponse.

Lambda returns the last 4 KB of log data produced by your Lambda function, base64-encoded.

---

##### `payload`<sup>Optional</sup> <a name="payload" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.payload"></a>

```typescript
public readonly payload: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

(Optional) The JSON input for your Lambda function.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="cdk-ssm-document.InvokeLambdaFunctionStepProps.property.qualifier"></a>

```typescript
public readonly qualifier: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The function version or alias name.

---

### InvokeWebhookProps <a name="InvokeWebhookProps" id="cdk-ssm-document.InvokeWebhookProps"></a>

The properties for IWebhook.Invoke.

#### Initializer <a name="Initializer" id="cdk-ssm-document.InvokeWebhookProps.Initializer"></a>

```typescript
import { InvokeWebhookProps } from 'cdk-ssm-document'

const invokeWebhookProps: InvokeWebhookProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookProps.property.integrationName">integrationName</a></code> | <code>string</code> | The name of the Automation integration. |
| <code><a href="#cdk-ssm-document.InvokeWebhookProps.property.body">body</a></code> | <code>string</code> | (Optional) The payload you want to send when your webhook integration is invoked. |

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="cdk-ssm-document.InvokeWebhookProps.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

The name of the Automation integration.

For example, exampleIntegration. The integration you specify must already exist.

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk-ssm-document.InvokeWebhookProps.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

(Optional) The payload you want to send when your webhook integration is invoked.

---

### InvokeWebhookResult <a name="InvokeWebhookResult" id="cdk-ssm-document.InvokeWebhookResult"></a>

Response from IWebhook.Invoke.

#### Initializer <a name="Initializer" id="cdk-ssm-document.InvokeWebhookResult.Initializer"></a>

```typescript
import { InvokeWebhookResult } from 'cdk-ssm-document'

const invokeWebhookResult: InvokeWebhookResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookResult.property.response">response</a></code> | <code>string</code> | The text received from the webhook provider response. |
| <code><a href="#cdk-ssm-document.InvokeWebhookResult.property.responseCode">responseCode</a></code> | <code>number</code> | The HTTP status code received from the webhook provider response. |

---

##### `response`<sup>Required</sup> <a name="response" id="cdk-ssm-document.InvokeWebhookResult.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The text received from the webhook provider response.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="cdk-ssm-document.InvokeWebhookResult.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

The HTTP status code received from the webhook provider response.

---

### InvokeWebhookStepProps <a name="InvokeWebhookStepProps" id="cdk-ssm-document.InvokeWebhookStepProps"></a>

Properties for InvokeWebhookStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.InvokeWebhookStepProps.Initializer"></a>

```typescript
import { InvokeWebhookStepProps } from 'cdk-ssm-document'

const invokeWebhookStepProps: InvokeWebhookStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.integrationName">integrationName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The name of the Automation integration. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.body">body</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The payload you want to send when your webhook integration is invoked. |
| <code><a href="#cdk-ssm-document.InvokeWebhookStepProps.property.webhook">webhook</a></code> | <code><a href="#cdk-ssm-document.IWebhook">IWebhook</a></code> | (Optional) Hook for simulating aws:invokeWebhook. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.InvokeWebhookStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.InvokeWebhookStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.InvokeWebhookStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.InvokeWebhookStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.InvokeWebhookStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.InvokeWebhookStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.InvokeWebhookStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.InvokeWebhookStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.InvokeWebhookStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="cdk-ssm-document.InvokeWebhookStepProps.property.integrationName"></a>

```typescript
public readonly integrationName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The name of the Automation integration.

For example, exampleIntegration. The integration you specify must already exist.

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk-ssm-document.InvokeWebhookStepProps.property.body"></a>

```typescript
public readonly body: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The payload you want to send when your webhook integration is invoked.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="cdk-ssm-document.InvokeWebhookStepProps.property.webhook"></a>

```typescript
public readonly webhook: IWebhook;
```

- *Type:* <a href="#cdk-ssm-document.IWebhook">IWebhook</a>
- *Default:* Returns 204 with an empty response

(Optional) Hook for simulating aws:invokeWebhook.

---

### Output <a name="Output" id="cdk-ssm-document.Output"></a>

Object used to specify step output.

#### Initializer <a name="Initializer" id="cdk-ssm-document.Output.Initializer"></a>

```typescript
import { Output } from 'cdk-ssm-document'

const output: Output = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Output.property.name">name</a></code> | <code>string</code> | The name that can be used by subsequent steps to refernce the stored value. |
| <code><a href="#cdk-ssm-document.Output.property.outputType">outputType</a></code> | <code><a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a></code> | The DataType expected by this output. |
| <code><a href="#cdk-ssm-document.Output.property.selector">selector</a></code> | <code>string</code> | Json selector for locating the value in the json step response. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-document.Output.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name that can be used by subsequent steps to refernce the stored value.

Note that Outputs will be PREPENDED with the step name.

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="cdk-ssm-document.Output.property.outputType"></a>

```typescript
public readonly outputType: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a>

The DataType expected by this output.

This will be validated in simulation mode and will also be used when printing to yaml/json.

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-document.Output.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Json selector for locating the value in the json step response.

---

### PauseStepProps <a name="PauseStepProps" id="cdk-ssm-document.PauseStepProps"></a>

Properties for PauseStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.PauseStepProps.Initializer"></a>

```typescript
import { PauseStepProps } from 'cdk-ssm-document'

const pauseStepProps: PauseStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.PauseStepProps.property.pauseHook">pauseHook</a></code> | <code><a href="#cdk-ssm-document.IPauseHook">IPauseHook</a></code> | (Optional) Pause hook to be called to pause the execution. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.PauseStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.PauseStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.PauseStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.PauseStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.PauseStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.PauseStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.PauseStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.PauseStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.PauseStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `pauseHook`<sup>Optional</sup> <a name="pauseHook" id="cdk-ssm-document.PauseStepProps.property.pauseHook"></a>

```typescript
public readonly pauseHook: IPauseHook;
```

- *Type:* <a href="#cdk-ssm-document.IPauseHook">IPauseHook</a>
- *Default:* PauseHook instance. PauseHook may not work in exported JSII languages. Override interface as needed.

(Optional) Pause hook to be called to pause the execution.

To mock this implementation either inject an instance of IPauseHook or use the provided MockPause class.

---

### PsModuleStepProps <a name="PsModuleStepProps" id="cdk-ssm-document.PsModuleStepProps"></a>

Properties for ps Module step.

#### Initializer <a name="Initializer" id="cdk-ssm-document.PsModuleStepProps.Initializer"></a>

```typescript
import { PsModuleStepProps } from 'cdk-ssm-document'

const psModuleStepProps: PsModuleStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.source">source</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The URL or local path on the instance to the application .zip file. The name of the zip file must be the name of the module to be installed. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.environment">environment</a></code> | <code><a href="#cdk-ssm-document.IEnvironment">IEnvironment</a></code> | (Optional) Specify here the environment in which to execute the scripts. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]</code> | Specify the commands to run or the path to an existing script on the instance. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.sourceHash">sourceHash</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The SHA256 hash of the .zip file. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The time in seconds for a command to be completed before it's considered to have failed. |
| <code><a href="#cdk-ssm-document.PsModuleStepProps.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The path to the working directory on your instance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.PsModuleStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.PsModuleStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.PsModuleStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.PsModuleStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-document.PsModuleStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-document.PsModuleStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-document.PsModuleStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.PsModuleStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.PsModuleStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-ssm-document.PsModuleStepProps.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The URL or local path on the instance to the application .zip file. The name of the zip file must be the name of the module to be installed.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ssm-document.PsModuleStepProps.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>
- *Default:* LoggingEnvironment

(Optional) Specify here the environment in which to execute the scripts.

Use the DockerEnvironment to execute the commands inside the docker.
You can alternatively use the LoggingEnvironment which simply logs the commands
or MockEnvironment which saves them for validation.

---

##### `runCommand`<sup>Optional</sup> <a name="runCommand" id="cdk-ssm-document.PsModuleStepProps.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]

Specify the commands to run or the path to an existing script on the instance.

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="cdk-ssm-document.PsModuleStepProps.property.sourceHash"></a>

```typescript
public readonly sourceHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The SHA256 hash of the .zip file.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.PsModuleStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The time in seconds for a command to be completed before it's considered to have failed.

When the timeout is reached, Systems Manager stops the command execution.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-document.PsModuleStepProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The path to the working directory on your instance.

---

### RunCommandOutputs <a name="RunCommandOutputs" id="cdk-ssm-document.RunCommandOutputs"></a>

Outputs for aws:runCommand.

#### Initializer <a name="Initializer" id="cdk-ssm-document.RunCommandOutputs.Initializer"></a>

```typescript
import { RunCommandOutputs } from 'cdk-ssm-document'

const runCommandOutputs: RunCommandOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandOutputs.property.commandId">commandId</a></code> | <code>string</code> | The ID of the command. |
| <code><a href="#cdk-ssm-document.RunCommandOutputs.property.status">status</a></code> | <code>string</code> | The status of the command. |
| <code><a href="#cdk-ssm-document.RunCommandOutputs.property.output">output</a></code> | <code>string</code> | The output of the command. |
| <code><a href="#cdk-ssm-document.RunCommandOutputs.property.responseCode">responseCode</a></code> | <code>number</code> | The response code of the command. |

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="cdk-ssm-document.RunCommandOutputs.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

The ID of the command.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-ssm-document.RunCommandOutputs.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the command.

---

##### `output`<sup>Optional</sup> <a name="output" id="cdk-ssm-document.RunCommandOutputs.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

The output of the command.

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="cdk-ssm-document.RunCommandOutputs.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

The response code of the command.

---

### RunCommandProps <a name="RunCommandProps" id="cdk-ssm-document.RunCommandProps"></a>

Inputs for aws:runCommand.

#### Initializer <a name="Initializer" id="cdk-ssm-document.RunCommandProps.Initializer"></a>

```typescript
import { RunCommandProps } from 'cdk-ssm-document'

const runCommandProps: RunCommandProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.documentName">documentName</a></code> | <code>string</code> | If the Command type document is owned by you or AWS, specify the name of the document. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.targets">targets</a></code> | <code>string[]</code> | The instance IDs where you want the command to run. You can specify a maximum of 50 IDs. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.cloudWatchOutputConfig">cloudWatchOutputConfig</a></code> | <code>{[ key: string ]: any}</code> | (Optional) Configuration options for sending command output to Amazon CloudWatch Logs. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.comment">comment</a></code> | <code>string</code> | (Optional) User-defined information about the command. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.documentHash">documentHash</a></code> | <code>string</code> | (Optional) The hash for the document. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.documentHashType">documentHashType</a></code> | <code><a href="#cdk-ssm-document.DocumentHashType">DocumentHashType</a></code> | (Optional) The type of the hash. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | (Optional) The maximum concurrency. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.maxErrors">maxErrors</a></code> | <code>number</code> | (Optional) The maximum errors. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.notificationConfig">notificationConfig</a></code> | <code>{[ key: string ]: any}</code> | (Optional) The configurations for sending notifications. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.outputS3BucketName">outputS3BucketName</a></code> | <code>string</code> | (Optional) The name of the S3 bucket for command output responses. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>string</code> | (Optional) The prefix. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | (Optional) The required and optional parameters specified in the document. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | (Optional) The ARN of the AWS Identity and Access Management (IAM) role. |
| <code><a href="#cdk-ssm-document.RunCommandProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance. |

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.RunCommandProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

If the Command type document is owned by you or AWS, specify the name of the document.

If you're using a document shared with you by a different AWS account, specify the Amazon Resource Name (ARN) of the document.

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-ssm-document.RunCommandProps.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

The instance IDs where you want the command to run. You can specify a maximum of 50 IDs.

You can also use the pseudo parameter {{RESOURCE_ID}} in place of instance IDs to run the command on all instances in the target group. For more information about pseudo parameters, see [About pseudo parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-register-tasks-parameters.html).

Another alternative is to send commands to a fleet of instances by using the Targets parameter. The Targets parameter accepts Amazon Elastic Compute Cloud (Amazon EC2) tags. For more information about how to use the Targets parameter, see [Using targets and rate controls to send commands to a fleet](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html).

---

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="cloudWatchOutputConfig" id="cdk-ssm-document.RunCommandProps.property.cloudWatchOutputConfig"></a>

```typescript
public readonly cloudWatchOutputConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Optional) Configuration options for sending command output to Amazon CloudWatch Logs.

For more information about sending command output to CloudWatch Logs, see [Configuring Amazon CloudWatch Logs for Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-rc-setting-up-cwlogs.html).

---

##### `comment`<sup>Optional</sup> <a name="comment" id="cdk-ssm-document.RunCommandProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

(Optional) User-defined information about the command.

---

##### `documentHash`<sup>Optional</sup> <a name="documentHash" id="cdk-ssm-document.RunCommandProps.property.documentHash"></a>

```typescript
public readonly documentHash: string;
```

- *Type:* string

(Optional) The hash for the document.

---

##### `documentHashType`<sup>Optional</sup> <a name="documentHashType" id="cdk-ssm-document.RunCommandProps.property.documentHashType"></a>

```typescript
public readonly documentHashType: DocumentHashType;
```

- *Type:* <a href="#cdk-ssm-document.DocumentHashType">DocumentHashType</a>

(Optional) The type of the hash.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="cdk-ssm-document.RunCommandProps.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

(Optional) The maximum concurrency.

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="cdk-ssm-document.RunCommandProps.property.maxErrors"></a>

```typescript
public readonly maxErrors: number;
```

- *Type:* number

(Optional) The maximum errors.

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="cdk-ssm-document.RunCommandProps.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Optional) The configurations for sending notifications.

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="cdk-ssm-document.RunCommandProps.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: string;
```

- *Type:* string

(Optional) The name of the S3 bucket for command output responses.

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="cdk-ssm-document.RunCommandProps.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: string;
```

- *Type:* string

(Optional) The prefix.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-document.RunCommandProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Optional) The required and optional parameters specified in the document.

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-ssm-document.RunCommandProps.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

(Optional) The ARN of the AWS Identity and Access Management (IAM) role.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunCommandProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance.

If the command isn't received by the SSM Agent on the instance before the value specified is reached, then the status of the command changes to Delivery Timed Out.

---

### RunCommandStepProps <a name="RunCommandStepProps" id="cdk-ssm-document.RunCommandStepProps"></a>

Properties for RunCommandStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.RunCommandStepProps.Initializer"></a>

```typescript
import { RunCommandStepProps } from 'cdk-ssm-document'

const runCommandStepProps: RunCommandStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.documentName">documentName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | If the Command type document is owned by you or AWS, specify the name of the document. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.targets">targets</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a> \| <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | The instance IDs where you want the command to run. You can specify a maximum of 50 IDs. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.cloudWatchOutputConfig">cloudWatchOutputConfig</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | (Optional) Configuration options for sending command output to Amazon CloudWatch Logs. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.commandTimeoutSeconds">commandTimeoutSeconds</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | (Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.comment">comment</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) User-defined information about the command. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.documentHash">documentHash</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The hash for the document. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.documentHashType">documentHashType</a></code> | <code><a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a></code> | (Optional) The type of the hash. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.maxConcurrency">maxConcurrency</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | (Optional) The maximum concurrency. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.maxErrors">maxErrors</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | (Optional) The maximum errors. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.notificationConfig">notificationConfig</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The configurations for sending notifications. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.outputS3BucketName">outputS3BucketName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The name of the S3 bucket for command output responses. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The prefix. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The required and optional parameters specified in the document. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.runCommandHook">runCommandHook</a></code> | <code><a href="#cdk-ssm-document.IRunCommandHook">IRunCommandHook</a></code> | Hook for simulating aws:runCommand. |
| <code><a href="#cdk-ssm-document.RunCommandStepProps.property.serviceRoleArn">serviceRoleArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The ARN of the AWS Identity and Access Management (IAM) role. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunCommandStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.RunCommandStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.RunCommandStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.RunCommandStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.RunCommandStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.RunCommandStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.RunCommandStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.RunCommandStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunCommandStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-document.RunCommandStepProps.property.documentName"></a>

```typescript
public readonly documentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

If the Command type document is owned by you or AWS, specify the name of the document.

If you're using a document shared with you by a different AWS account, specify the Amazon Resource Name (ARN) of the document.

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-ssm-document.RunCommandStepProps.property.targets"></a>

```typescript
public readonly targets: IStringListVariable | IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a> | <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

The instance IDs where you want the command to run. You can specify a maximum of 50 IDs.

You can also use the pseudo parameter {{RESOURCE_ID}} in place of instance IDs to run the command on all instances in the target group. For more information about pseudo parameters, see [About pseudo parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-register-tasks-parameters.html).

Another alternative is to send commands to a fleet of instances by using the Targets parameter. The Targets parameter accepts Amazon Elastic Compute Cloud (Amazon EC2) tags. For more information about how to use the Targets parameter, see [Using targets and rate controls to send commands to a fleet](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html).

---

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="cloudWatchOutputConfig" id="cdk-ssm-document.RunCommandStepProps.property.cloudWatchOutputConfig"></a>

```typescript
public readonly cloudWatchOutputConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

(Optional) Configuration options for sending command output to Amazon CloudWatch Logs.

For more information about sending command output to CloudWatch Logs, see [Configuring Amazon CloudWatch Logs for Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-rc-setting-up-cwlogs.html).

---

##### `commandTimeoutSeconds`<sup>Optional</sup> <a name="commandTimeoutSeconds" id="cdk-ssm-document.RunCommandStepProps.property.commandTimeoutSeconds"></a>

```typescript
public readonly commandTimeoutSeconds: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

(Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance.

If the command isn't received by the SSM Agent on the instance before the value specified is reached, then the status of the command changes to Delivery Timed Out.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="cdk-ssm-document.RunCommandStepProps.property.comment"></a>

```typescript
public readonly comment: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) User-defined information about the command.

---

##### `documentHash`<sup>Optional</sup> <a name="documentHash" id="cdk-ssm-document.RunCommandStepProps.property.documentHash"></a>

```typescript
public readonly documentHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The hash for the document.

---

##### `documentHashType`<sup>Optional</sup> <a name="documentHashType" id="cdk-ssm-document.RunCommandStepProps.property.documentHashType"></a>

```typescript
public readonly documentHashType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

(Optional) The type of the hash.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="cdk-ssm-document.RunCommandStepProps.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

(Optional) The maximum concurrency.

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="cdk-ssm-document.RunCommandStepProps.property.maxErrors"></a>

```typescript
public readonly maxErrors: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

(Optional) The maximum errors.

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="cdk-ssm-document.RunCommandStepProps.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

(Optional) The configurations for sending notifications.

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="cdk-ssm-document.RunCommandStepProps.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The name of the S3 bucket for command output responses.

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="cdk-ssm-document.RunCommandStepProps.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The prefix.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-document.RunCommandStepProps.property.parameters"></a>

```typescript
public readonly parameters: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

(Optional) The required and optional parameters specified in the document.

---

##### `runCommandHook`<sup>Optional</sup> <a name="runCommandHook" id="cdk-ssm-document.RunCommandStepProps.property.runCommandHook"></a>

```typescript
public readonly runCommandHook: IRunCommandHook;
```

- *Type:* <a href="#cdk-ssm-document.IRunCommandHook">IRunCommandHook</a>
- *Default:* Uses AWS API to execute the document remotely.

Hook for simulating aws:runCommand.

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-ssm-document.RunCommandStepProps.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The ARN of the AWS Identity and Access Management (IAM) role.

---

### RunInstanceStepProps <a name="RunInstanceStepProps" id="cdk-ssm-document.RunInstanceStepProps"></a>

Properties for RunInstanceStep.

#### Initializer <a name="Initializer" id="cdk-ssm-document.RunInstanceStepProps.Initializer"></a>

```typescript
import { RunInstanceStepProps } from 'cdk-ssm-document'

const runInstanceStepProps: RunInstanceStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | The ID of the Amazon Machine Image (AMI). |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) Reserved. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | (Optional) The block devices for the instance. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The identifier to ensure idempotency of the request. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.disableApiTermination">disableApiTermination</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Turns on or turns off instance API termination. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.ebsOptimized">ebsOptimized</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Turns on or turns off Amazon Elastic Block Store (Amazon EBS) optimization. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) instance profile for the instance. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.iamInstanceProfileName">iamInstanceProfileName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The name of the IAM instance profile for the instance. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) Indicates whether the instance stops or terminates on system shutdown. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.instanceType">instanceType</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The instance type. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.kernelId">kernelId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The ID of the kernel. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.keyName">keyName</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The name of the key pair. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.maxInstanceCount">maxInstanceCount</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | (Optional) The maximum number of instances to be launched. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.minInstanceCount">minInstanceCount</a></code> | <code><a href="#cdk-ssm-document.INumberVariable">INumberVariable</a></code> | (Optional) The minimum number of instances to be launched. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.monitoring">monitoring</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Turns on or turns off detailed monitoring. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | (Optional) The network interfaces. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.placement">placement</a></code> | <code><a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The placement for the instance. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.privateIpAddress">privateIpAddress</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The primary IPv4 address. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.ramdiskId">ramdiskId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The ID of the RAM disk. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.securityGroupIds">securityGroupIds</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | (Optional) The IDs of the security groups for the instance. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.securityGroups">securityGroups</a></code> | <code><a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a></code> | (Optional) The names of the security groups for the instance. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.subnetId">subnetId</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The subnet ID. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a></code> | (Optional) The tags to apply to the resources during launch. |
| <code><a href="#cdk-ssm-document.RunInstanceStepProps.property.userData">userData</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) A script provided as a string literal value. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunInstanceStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.RunInstanceStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.RunInstanceStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.RunInstanceStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.RunInstanceStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.RunInstanceStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.RunInstanceStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.RunInstanceStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunInstanceStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-document.RunInstanceStepProps.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

The ID of the Amazon Machine Image (AMI).

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-document.RunInstanceStepProps.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) Reserved.

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.RunInstanceStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-document.RunInstanceStepProps.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

(Optional) The block devices for the instance.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-document.RunInstanceStepProps.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The identifier to ensure idempotency of the request.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="cdk-ssm-document.RunInstanceStepProps.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

(Optional) Turns on or turns off instance API termination.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="cdk-ssm-document.RunInstanceStepProps.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

(Optional) Turns on or turns off Amazon Elastic Block Store (Amazon EBS) optimization.

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="cdk-ssm-document.RunInstanceStepProps.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) instance profile for the instance.

---

##### `iamInstanceProfileName`<sup>Optional</sup> <a name="iamInstanceProfileName" id="cdk-ssm-document.RunInstanceStepProps.property.iamInstanceProfileName"></a>

```typescript
public readonly iamInstanceProfileName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The name of the IAM instance profile for the instance.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="cdk-ssm-document.RunInstanceStepProps.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) Indicates whether the instance stops or terminates on system shutdown.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-ssm-document.RunInstanceStepProps.property.instanceType"></a>

```typescript
public readonly instanceType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The instance type.

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="cdk-ssm-document.RunInstanceStepProps.property.kernelId"></a>

```typescript
public readonly kernelId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The ID of the kernel.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="cdk-ssm-document.RunInstanceStepProps.property.keyName"></a>

```typescript
public readonly keyName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The name of the key pair.

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="cdk-ssm-document.RunInstanceStepProps.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

(Optional) The maximum number of instances to be launched.

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="cdk-ssm-document.RunInstanceStepProps.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

(Optional) The minimum number of instances to be launched.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="cdk-ssm-document.RunInstanceStepProps.property.monitoring"></a>

```typescript
public readonly monitoring: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

(Optional) Turns on or turns off detailed monitoring.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="cdk-ssm-document.RunInstanceStepProps.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

(Optional) The network interfaces.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="cdk-ssm-document.RunInstanceStepProps.property.placement"></a>

```typescript
public readonly placement: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

(Optional) The placement for the instance.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="cdk-ssm-document.RunInstanceStepProps.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The primary IPv4 address.

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="cdk-ssm-document.RunInstanceStepProps.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The ID of the RAM disk.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="cdk-ssm-document.RunInstanceStepProps.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

(Optional) The IDs of the security groups for the instance.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-ssm-document.RunInstanceStepProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

(Optional) The names of the security groups for the instance.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="cdk-ssm-document.RunInstanceStepProps.property.subnetId"></a>

```typescript
public readonly subnetId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The subnet ID.

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="cdk-ssm-document.RunInstanceStepProps.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

(Optional) The tags to apply to the resources during launch.

You can only tag instances and volumes at launch. The specified tags are applied to all instances or volumes that are created during launch.
To tag an instance after it has been launched, use the aws:createTags – Create tags for AWS resources action.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="cdk-ssm-document.RunInstanceStepProps.property.userData"></a>

```typescript
public readonly userData: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) A script provided as a string literal value.

If a literal value is entered, then it must be Base64-encoded.

---

### RunPowerShellScriptStepProps <a name="RunPowerShellScriptStepProps" id="cdk-ssm-document.RunPowerShellScriptStepProps"></a>

Properties for runPowerShellScript step.

#### Initializer <a name="Initializer" id="cdk-ssm-document.RunPowerShellScriptStepProps.Initializer"></a>

```typescript
import { RunPowerShellScriptStepProps } from 'cdk-ssm-document'

const runPowerShellScriptStepProps: RunPowerShellScriptStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]</code> | Specify the commands to run or the path to an existing script on the instance. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.environment">environment</a></code> | <code><a href="#cdk-ssm-document.IEnvironment">IEnvironment</a></code> | (Optional) Specify here the environment in which to execute the scripts. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The time in seconds for a command to be completed before it's considered to have failed. |
| <code><a href="#cdk-ssm-document.RunPowerShellScriptStepProps.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The path to the working directory on your instance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]

Specify the commands to run or the path to an existing script on the instance.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>
- *Default:* LoggingEnvironment

(Optional) Specify here the environment in which to execute the scripts.

Use the DockerEnvironment to execute the commands inside the docker.
You can alternatively use the LoggingEnvironment which simply logs the commands
or MockEnvironment which saves them for validation.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The time in seconds for a command to be completed before it's considered to have failed.

When the timeout is reached, Systems Manager stops the command execution.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-document.RunPowerShellScriptStepProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The path to the working directory on your instance.

---

### RunShellScriptStepProps <a name="RunShellScriptStepProps" id="cdk-ssm-document.RunShellScriptStepProps"></a>

Properties for sleep step.

#### Initializer <a name="Initializer" id="cdk-ssm-document.RunShellScriptStepProps.Initializer"></a>

```typescript
import { RunShellScriptStepProps } from 'cdk-ssm-document'

const runShellScriptStepProps: RunShellScriptStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]</code> | Specify the commands to run or the path to an existing script on the instance. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.environment">environment</a></code> | <code><a href="#cdk-ssm-document.IEnvironment">IEnvironment</a></code> | (Optional) Specify here the environment in which to execute the scripts. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The time in seconds for a command to be completed before it's considered to have failed. |
| <code><a href="#cdk-ssm-document.RunShellScriptStepProps.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | (Optional) The path to the working directory on your instance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.RunShellScriptStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.RunShellScriptStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.RunShellScriptStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.RunShellScriptStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-document.RunShellScriptStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-document.RunShellScriptStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-document.RunShellScriptStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-document.RunShellScriptStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.RunShellScriptStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-document.RunShellScriptStepProps.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>[]

Specify the commands to run or the path to an existing script on the instance.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ssm-document.RunShellScriptStepProps.property.environment"></a>

```typescript
public readonly environment: IEnvironment;
```

- *Type:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>
- *Default:* LoggingEnvironment

(Optional) Specify here the environment in which to execute the scripts.

Use the DockerEnvironment to execute the commands inside the docker.
You can alternatively use the LoggingEnvironment which simply logs the commands
or MockEnvironment which saves them for validation.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.RunShellScriptStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The time in seconds for a command to be completed before it's considered to have failed.

When the timeout is reached, Systems Manager stops the command execution.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-document.RunShellScriptStepProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

(Optional) The path to the working directory on your instance.

---

### SimulationProps <a name="SimulationProps" id="cdk-ssm-document.SimulationProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.SimulationProps.Initializer"></a>

```typescript
import { SimulationProps } from 'cdk-ssm-document'

const simulationProps: SimulationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SimulationProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.SimulationProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.SimulationProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.SimulationProps.property.pauseHook">pauseHook</a></code> | <code><a href="#cdk-ssm-document.IPauseHook">IPauseHook</a></code> | (Optional) Pause hook to be called to pause the execution. |
| <code><a href="#cdk-ssm-document.SimulationProps.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | (Optional) Hook to inject alternate ISleeper (to mock the sleep between failed invocations). |

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.SimulationProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.SimulationProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.SimulationProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `pauseHook`<sup>Optional</sup> <a name="pauseHook" id="cdk-ssm-document.SimulationProps.property.pauseHook"></a>

```typescript
public readonly pauseHook: IPauseHook;
```

- *Type:* <a href="#cdk-ssm-document.IPauseHook">IPauseHook</a>
- *Default:* PauseHook instance. PauseHook may not work in exported JSII languages. Override interface as needed.

(Optional) Pause hook to be called to pause the execution.

To mock this implemenation either inject an instance of IPauseHook or use the provided MockPause class.

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.SimulationProps.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>
- *Default:* really perform sleep using SleeperImpl class.

(Optional) Hook to inject alternate ISleeper (to mock the sleep between failed invocations).

---

### SimulationResult <a name="SimulationResult" id="cdk-ssm-document.SimulationResult"></a>

Response object returned from steps.

A successful response will contain the outputs expected.
A failed/canceled response will contain the stackTrace.
A failure will propagate up the stack unless the step is marked to succeed on failure.

#### Initializer <a name="Initializer" id="cdk-ssm-document.SimulationResult.Initializer"></a>

```typescript
import { SimulationResult } from 'cdk-ssm-document'

const simulationResult: SimulationResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SimulationResult.property.executedSteps">executedSteps</a></code> | <code>string[]</code> | All the steps that were executed in this Simulation. |
| <code><a href="#cdk-ssm-document.SimulationResult.property.responseCode">responseCode</a></code> | <code><a href="#cdk-ssm-document.ResponseCode">ResponseCode</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.SimulationResult.property.outputs">outputs</a></code> | <code>{[ key: string ]: any}</code> | May be empty if responseCode is FAILED/CANCELLED. |
| <code><a href="#cdk-ssm-document.SimulationResult.property.stackTrace">stackTrace</a></code> | <code>string</code> | undefined if responseCode is SUCCESS. |

---

##### `executedSteps`<sup>Required</sup> <a name="executedSteps" id="cdk-ssm-document.SimulationResult.property.executedSteps"></a>

```typescript
public readonly executedSteps: string[];
```

- *Type:* string[]

All the steps that were executed in this Simulation.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="cdk-ssm-document.SimulationResult.property.responseCode"></a>

```typescript
public readonly responseCode: ResponseCode;
```

- *Type:* <a href="#cdk-ssm-document.ResponseCode">ResponseCode</a>

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="cdk-ssm-document.SimulationResult.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

May be empty if responseCode is FAILED/CANCELLED.

There are no outputs provided for Command steps or documents.

---

##### `stackTrace`<sup>Optional</sup> <a name="stackTrace" id="cdk-ssm-document.SimulationResult.property.stackTrace"></a>

```typescript
public readonly stackTrace: string;
```

- *Type:* string

undefined if responseCode is SUCCESS.

---

### SleepStepProps <a name="SleepStepProps" id="cdk-ssm-document.SleepStepProps"></a>

Properties for sleep step.

#### Initializer <a name="Initializer" id="cdk-ssm-document.SleepStepProps.Initializer"></a>

```typescript
import { SleepStepProps } from 'cdk-ssm-document'

const sleepStepProps: SleepStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.sleepSeconds">sleepSeconds</a></code> | <code>number</code> | (Required) The amount of seconds to sleep for. |
| <code><a href="#cdk-ssm-document.SleepStepProps.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | (Optional) Whether to really perform a pause of the runtime. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.SleepStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.SleepStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.SleepStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.SleepStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.SleepStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.SleepStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.SleepStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.SleepStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.SleepStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `sleepSeconds`<sup>Required</sup> <a name="sleepSeconds" id="cdk-ssm-document.SleepStepProps.property.sleepSeconds"></a>

```typescript
public readonly sleepSeconds: number;
```

- *Type:* number

(Required) The amount of seconds to sleep for.

May not exceed 604800.
This will be used in the SSM doc as well as how long to indicate sleep to the sleepHook.

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.SleepStepProps.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>
- *Default:* SleeperImpl

(Optional) Whether to really perform a pause of the runtime.

To override sleep behavior, inject an ISleepHook impl or use the provided MockSleep class.

---

### SsmDocumentProps <a name="SsmDocumentProps" id="cdk-ssm-document.SsmDocumentProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.SsmDocumentProps.Initializer"></a>

```typescript
import { SsmDocumentProps } from 'cdk-ssm-document'

const ssmDocumentProps: SsmDocumentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.assumeRole">assumeRole</a></code> | <code>string</code> | (Optional) Assume role to use for this document. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.description">description</a></code> | <code>string</code> | (Optional) Description of the document. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-document.Input">Input</a>[]</code> | (Optional) Inputs required by the document. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]</code> | (Optional) Outputs to be emitted from the document. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.documentFormat">documentFormat</a></code> | <code><a href="#cdk-ssm-document.DocumentFormat">DocumentFormat</a></code> | (Optional) Specifies whether this document should be written as YAML or JSON. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.documentName">documentName</a></code> | <code>string</code> | (Optional) Name of the document. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.header">header</a></code> | <code>string</code> | (Optional) A Header/comment to include at the start of a YAML document. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.requires">requires</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty \| aws-cdk-lib.IResolvable[]</code> | `AWS::SSM::Document.Requires`. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | `AWS::SSM::Document.Tags`. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.targetType">targetType</a></code> | <code>string</code> | `AWS::SSM::Document.TargetType`. |
| <code><a href="#cdk-ssm-document.SsmDocumentProps.property.versionName">versionName</a></code> | <code>string</code> | `AWS::SSM::Document.VersionName`. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-document.SsmDocumentProps.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

(Optional) Assume role to use for this document.

If provided, this value MUST be included as one of the documentInput names.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.SsmDocumentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

(Optional) Description of the document.

Defaults to the document name.

---

##### `docInputs`<sup>Optional</sup> <a name="docInputs" id="cdk-ssm-document.SsmDocumentProps.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-document.Input">Input</a>[]

(Optional) Inputs required by the document.

---

##### `docOutputs`<sup>Optional</sup> <a name="docOutputs" id="cdk-ssm-document.SsmDocumentProps.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-document.DocumentOutput">DocumentOutput</a>[]
- *Default:* []

(Optional) Outputs to be emitted from the document.

The outputs are placed in a StringSet called outputs (as is done in SSM).

---

##### `documentFormat`<sup>Optional</sup> <a name="documentFormat" id="cdk-ssm-document.SsmDocumentProps.property.documentFormat"></a>

```typescript
public readonly documentFormat: DocumentFormat;
```

- *Type:* <a href="#cdk-ssm-document.DocumentFormat">DocumentFormat</a>
- *Default:* JSON

(Optional) Specifies whether this document should be written as YAML or JSON.

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="cdk-ssm-document.SsmDocumentProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

(Optional) Name of the document.

Will default to the id provided for the CDK node.

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-document.SsmDocumentProps.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

(Optional) A Header/comment to include at the start of a YAML document.

JSON documents do not support headers.

---

##### `requires`<sup>Optional</sup> <a name="requires" id="cdk-ssm-document.SsmDocumentProps.property.requires"></a>

```typescript
public readonly requires: IResolvable | DocumentRequiresProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty | aws-cdk-lib.IResolvable[]

`AWS::SSM::Document.Requires`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-document.SsmDocumentProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

`AWS::SSM::Document.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags)

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="cdk-ssm-document.SsmDocumentProps.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

`AWS::SSM::Document.TargetType`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype)

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="cdk-ssm-document.SsmDocumentProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

`AWS::SSM::Document.VersionName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname)

---

### StepProps <a name="StepProps" id="cdk-ssm-document.StepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.StepProps.Initializer"></a>

```typescript
import { StepProps } from 'cdk-ssm-document'

const stepProps: StepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.StepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.StepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.StepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.StepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.StepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.StepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.StepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

### WaitForResourceStepProps <a name="WaitForResourceStepProps" id="cdk-ssm-document.WaitForResourceStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-document.WaitForResourceStepProps.Initializer"></a>

```typescript
import { WaitForResourceStepProps } from 'cdk-ssm-document'

const waitForResourceStepProps: WaitForResourceStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-document.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-document.Step">Step</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | (Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call). |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | (Required) Value extracted from AWS response desired to be one of these desired values. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.selector">selector</a></code> | <code>string</code> | (Required) Json path selector to extract value from AWS response. |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.sleeper">sleeper</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | (Optional) Hook to inject alternate ISleeper (to mock the sleep between failed invocations). |
| <code><a href="#cdk-ssm-document.WaitForResourceStepProps.property.sleepIntervalMillis">sleepIntervalMillis</a></code> | <code>number</code> | (Optional) How much time to sleep after not receiving desired response from AWS SDK. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-document.WaitForResourceStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-document.WaitForResourceStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-document.WaitForResourceStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-document.WaitForResourceStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-document.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-document.WaitForResourceStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-document.WaitForResourceStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-document.WaitForResourceStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-document.WaitForResourceStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: Step;
```

- *Type:* <a href="#cdk-ssm-document.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-document.WaitForResourceStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-document.WaitForResourceStepProps.property.apiParams"></a>

```typescript
public readonly apiParams: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Required) API Params to submit with the request to the api.

You may include variables which will be substitued for inputs during step execution as such {{INPUT}}

---

*Example*

```typescript
{ 'VolumeIds': ['{{ EbsDescribeInstance.VolumeId }}'] }
```


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-document.WaitForResourceStepProps.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

(Required) The AWS api represented in PascalCase.

This value is used as-is in the SSM yaml/json.
This is used as the default for javaScriptApi (see that param).

---

*Example*

```typescript
DescribeInstances
```


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-document.WaitForResourceStepProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

(Required) The AWS service to be invoked.

---

*Example*

```typescript
ec2
```


##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.WaitForResourceStepProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>
- *Default:* will perform a real invocation of the JavaScript AWS SDK using ReflectiveAwsInvoker class.

(Optional) Use this as a hook to inject an alternate IAwsInvoker (for mocking the AWS API call).

---

##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-document.WaitForResourceStepProps.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string
- *Default:* will use the camelCaseApi param and substitute the first character for lowercase by default.

(Optional) The api as represented the AWS JavaScript API.

This is usually lowerCamelCase.
This is used in the simulation run to execute the AWS API against the JavaScript SDK.

---

*Example*

```typescript
describeInstances
```


##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-document.WaitForResourceStepProps.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

(Required) Value extracted from AWS response desired to be one of these desired values.

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-document.WaitForResourceStepProps.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

(Required) Json path selector to extract value from AWS response.

---

##### `sleeper`<sup>Optional</sup> <a name="sleeper" id="cdk-ssm-document.WaitForResourceStepProps.property.sleeper"></a>

```typescript
public readonly sleeper: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>
- *Default:* really perform sleep using SleeperImpl class.

(Optional) Hook to inject alternate ISleeper (to mock the sleep between failed invocations).

---

##### `sleepIntervalMillis`<sup>Optional</sup> <a name="sleepIntervalMillis" id="cdk-ssm-document.WaitForResourceStepProps.property.sleepIntervalMillis"></a>

```typescript
public readonly sleepIntervalMillis: number;
```

- *Type:* number
- *Default:* 2000 millis

(Optional) How much time to sleep after not receiving desired response from AWS SDK.

This is only used for the run simulation.
This is not used by SSM and is therefore not declared in the SSM yaml/json.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiRunCommandHook <a name="ApiRunCommandHook" id="cdk-ssm-document.ApiRunCommandHook"></a>

- *Implements:* <a href="#cdk-ssm-document.IRunCommandHook">IRunCommandHook</a>

RunCommand implementation using AWS API.

#### Initializers <a name="Initializers" id="cdk-ssm-document.ApiRunCommandHook.Initializer"></a>

```typescript
import { ApiRunCommandHook } from 'cdk-ssm-document'

new ApiRunCommandHook(awsInvoker?: IAwsInvoker, sleepHook?: ISleepHook)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ApiRunCommandHook.Initializer.parameter.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApiRunCommandHook.Initializer.parameter.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | *No description.* |

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-document.ApiRunCommandHook.Initializer.parameter.awsInvoker"></a>

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.ApiRunCommandHook.Initializer.parameter.sleepHook"></a>

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ApiRunCommandHook.execute">execute</a></code> | Simulate the aws:runCommand. |

---

##### `execute` <a name="execute" id="cdk-ssm-document.ApiRunCommandHook.execute"></a>

```typescript
public execute(props: RunCommandProps): RunCommandOutputs
```

Simulate the aws:runCommand.

###### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.ApiRunCommandHook.execute.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.RunCommandProps">RunCommandProps</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ApiRunCommandHook.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ApiRunCommandHook.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-document.ISleepHook">ISleepHook</a></code> | *No description.* |

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-document.ApiRunCommandHook.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

---

##### `sleepHook`<sup>Optional</sup> <a name="sleepHook" id="cdk-ssm-document.ApiRunCommandHook.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

---


### ApproveImpl <a name="ApproveImpl" id="cdk-ssm-document.ApproveImpl"></a>

- *Implements:* <a href="#cdk-ssm-document.IApproveHook">IApproveHook</a>

This IApproveHook implementation provides a real ask and waits for user input of Enter.

This implementation does not work well on all exported JSII languages.
Users can provide their own impl using the IAskHook interface.

#### Initializers <a name="Initializers" id="cdk-ssm-document.ApproveImpl.Initializer"></a>

```typescript
import { ApproveImpl } from 'cdk-ssm-document'

new ApproveImpl()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ApproveImpl.ask">ask</a></code> | Ask for approval. |

---

##### `ask` <a name="ask" id="cdk-ssm-document.ApproveImpl.ask"></a>

```typescript
public ask(approver: string): boolean
```

Ask for approval.

###### `approver`<sup>Required</sup> <a name="approver" id="cdk-ssm-document.ApproveImpl.ask.parameter.approver"></a>

- *Type:* string

---




### BooleanVariable <a name="BooleanVariable" id="cdk-ssm-document.BooleanVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

A boolean variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.BooleanVariable.Initializer"></a>

```typescript
import { BooleanVariable } from 'cdk-ssm-document'

new BooleanVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.BooleanVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.BooleanVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.BooleanVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.BooleanVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.BooleanVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.BooleanVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.BooleanVariable.resolveToBoolean">resolveToBoolean</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.BooleanVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.BooleanVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.BooleanVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.BooleanVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.BooleanVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToBoolean` <a name="resolveToBoolean" id="cdk-ssm-document.BooleanVariable.resolveToBoolean"></a>

```typescript
public resolveToBoolean(inputs: {[ key: string ]: any}): boolean
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.BooleanVariable.resolveToBoolean.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.BooleanVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.BooleanVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### Choice <a name="Choice" id="cdk-ssm-document.Choice"></a>

Choices are supplied to the BranchStep to determine under which conditions to jump to which steps.

#### Initializers <a name="Initializers" id="cdk-ssm-document.Choice.Initializer"></a>

```typescript
import { Choice } from 'cdk-ssm-document'

new Choice(props: ChoiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Choice.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-document.ChoiceProps">ChoiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.Choice.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.ChoiceProps">ChoiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.Choice.asSsmEntry">asSsmEntry</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Choice.evaluate">evaluate</a></code> | Evaluates this choice against the provided inputs. |

---

##### `asSsmEntry` <a name="asSsmEntry" id="cdk-ssm-document.Choice.asSsmEntry"></a>

```typescript
public asSsmEntry(): {[ key: string ]: any}
```

##### `evaluate` <a name="evaluate" id="cdk-ssm-document.Choice.evaluate"></a>

```typescript
public evaluate(inputs: {[ key: string ]: any}): boolean
```

Evaluates this choice against the provided inputs.

The value keyed on the inputToTest will be tested against the declared constant using the Operation specified.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.Choice.evaluate.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.Choice.fromOperationName">fromOperationName</a></code> | *No description.* |

---

##### `fromOperationName` <a name="fromOperationName" id="cdk-ssm-document.Choice.fromOperationName"></a>

```typescript
import { Choice } from 'cdk-ssm-document'

Choice.fromOperationName(operationName: string)
```

###### `operationName`<sup>Required</sup> <a name="operationName" id="cdk-ssm-document.Choice.fromOperationName.parameter.operationName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Choice.property.constant">constant</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-ssm-document.Choice.property.jumpToStepName">jumpToStepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.Choice.property.operation">operation</a></code> | <code><a href="#cdk-ssm-document.Operation">Operation</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Choice.property.variable">variable</a></code> | <code><a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a> \| <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a> \| <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `constant`<sup>Required</sup> <a name="constant" id="cdk-ssm-document.Choice.property.constant"></a>

```typescript
public readonly constant: any;
```

- *Type:* any

---

##### `jumpToStepName`<sup>Required</sup> <a name="jumpToStepName" id="cdk-ssm-document.Choice.property.jumpToStepName"></a>

```typescript
public readonly jumpToStepName: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="cdk-ssm-document.Choice.property.operation"></a>

```typescript
public readonly operation: Operation;
```

- *Type:* <a href="#cdk-ssm-document.Operation">Operation</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="cdk-ssm-document.Choice.property.variable"></a>

```typescript
public readonly variable: IBooleanVariable | INumberVariable | IStringVariable;
```

- *Type:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a> | <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a> | <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.Choice.property.STRING_TO_OPERATION">STRING_TO_OPERATION</a></code> | <code>{[ key: string ]: <a href="#cdk-ssm-document.Operation">Operation</a>}</code> | *No description.* |

---

##### `STRING_TO_OPERATION`<sup>Required</sup> <a name="STRING_TO_OPERATION" id="cdk-ssm-document.Choice.property.STRING_TO_OPERATION"></a>

```typescript
public readonly STRING_TO_OPERATION: {[ key: string ]: Operation};
```

- *Type:* {[ key: string ]: <a href="#cdk-ssm-document.Operation">Operation</a>}

---

### DataType <a name="DataType" id="cdk-ssm-document.DataType"></a>

JSII does not allow functions or constants declared in an enum class directly.

Therefore, interaction with DataTypeEnum happens through this class.

#### Initializers <a name="Initializers" id="cdk-ssm-document.DataType.Initializer"></a>

```typescript
import { DataType } from 'cdk-ssm-document'

new DataType(dataTypeEnum: DataTypeEnum)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DataType.Initializer.parameter.dataTypeEnum">dataTypeEnum</a></code> | <code><a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a></code> | *No description.* |

---

##### `dataTypeEnum`<sup>Required</sup> <a name="dataTypeEnum" id="cdk-ssm-document.DataType.Initializer.parameter.dataTypeEnum"></a>

- *Type:* <a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DataType.toSsmString">toSsmString</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DataType.validateType">validateType</a></code> | *No description.* |

---

##### `toSsmString` <a name="toSsmString" id="cdk-ssm-document.DataType.toSsmString"></a>

```typescript
public toSsmString(): string
```

##### `validateType` <a name="validateType" id="cdk-ssm-document.DataType.validateType"></a>

```typescript
public validateType(val: any): boolean
```

###### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.DataType.validateType.parameter.val"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DataType.fromDataType">fromDataType</a></code> | *No description.* |

---

##### `fromDataType` <a name="fromDataType" id="cdk-ssm-document.DataType.fromDataType"></a>

```typescript
import { DataType } from 'cdk-ssm-document'

DataType.fromDataType(ssmDataType: string)
```

###### `ssmDataType`<sup>Required</sup> <a name="ssmDataType" id="cdk-ssm-document.DataType.fromDataType.parameter.ssmDataType"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DataType.property.dataTypeEnum">dataTypeEnum</a></code> | <code><a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a></code> | *No description.* |

---

##### `dataTypeEnum`<sup>Required</sup> <a name="dataTypeEnum" id="cdk-ssm-document.DataType.property.dataTypeEnum"></a>

```typescript
public readonly dataTypeEnum: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-document.DataTypeEnum">DataTypeEnum</a>

---


### DesiredStateVariable <a name="DesiredStateVariable" id="cdk-ssm-document.DesiredStateVariable"></a>

A desired state variable reference.

#### Initializers <a name="Initializers" id="cdk-ssm-document.DesiredStateVariable.Initializer"></a>

```typescript
import { DesiredStateVariable } from 'cdk-ssm-document'

new DesiredStateVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DesiredStateVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.DesiredStateVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DesiredStateVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.DesiredStateVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.DesiredStateVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.DesiredStateVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.DesiredStateVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.DesiredStateVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.DesiredStateVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.DesiredStateVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DesiredStateVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.DesiredStateVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.DesiredStateVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DesiredStateVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DesiredStateVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.DesiredStateVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### DictFormat <a name="DictFormat" id="cdk-ssm-document.DictFormat"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.DictFormat.Initializer"></a>

```typescript
import { DictFormat } from 'cdk-ssm-document'

new DictFormat(format: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DictFormat.Initializer.parameter.format">format</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-document.DictFormat.Initializer.parameter.format"></a>

- *Type:* {[ key: string ]: any}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DictFormat.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.DictFormat.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.DictFormat.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.DictFormat.resolveToDict">resolveToDict</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DictFormat.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.DictFormat.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.DictFormat.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.DictFormat.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.DictFormat.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DictFormat.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToDict` <a name="resolveToDict" id="cdk-ssm-document.DictFormat.resolveToDict"></a>

```typescript
public resolveToDict(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DictFormat.resolveToDict.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-document.DictFormat.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DictFormat.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.DictFormat.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DictFormat.property.format">format</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-document.DictFormat.property.format"></a>

```typescript
public readonly format: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### DockerEnvironment <a name="DockerEnvironment" id="cdk-ssm-document.DockerEnvironment"></a>

- *Implements:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>

Provides a Docker client against which customers can execute their commands.

This utility will not download docker images, rather will create containers from images provided.
You can use this rather than running your run commands against a real EC2 machine.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DockerEnvironment.removeContainer">removeContainer</a></code> | Force removes the container associated with this instance. |
| <code><a href="#cdk-ssm-document.DockerEnvironment.run">run</a></code> | Runs commands against the docker specified during construction. |

---

##### `removeContainer` <a name="removeContainer" id="cdk-ssm-document.DockerEnvironment.removeContainer"></a>

```typescript
public removeContainer(): void
```

Force removes the container associated with this instance.

##### `run` <a name="run" id="cdk-ssm-document.DockerEnvironment.run"></a>

```typescript
public run(command: string): string
```

Runs commands against the docker specified during construction.

This function runs synchronously.

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-document.DockerEnvironment.run.parameter.command"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DockerEnvironment.fromContainer">fromContainer</a></code> | Use an existing container against which to run commands using the run function. |
| <code><a href="#cdk-ssm-document.DockerEnvironment.fromImage">fromImage</a></code> | Create a container from the provided image. |

---

##### `fromContainer` <a name="fromContainer" id="cdk-ssm-document.DockerEnvironment.fromContainer"></a>

```typescript
import { DockerEnvironment } from 'cdk-ssm-document'

DockerEnvironment.fromContainer(containerId: string)
```

Use an existing container against which to run commands using the run function.

###### `containerId`<sup>Required</sup> <a name="containerId" id="cdk-ssm-document.DockerEnvironment.fromContainer.parameter.containerId"></a>

- *Type:* string

---

##### `fromImage` <a name="fromImage" id="cdk-ssm-document.DockerEnvironment.fromImage"></a>

```typescript
import { DockerEnvironment } from 'cdk-ssm-document'

DockerEnvironment.fromImage(image: string)
```

Create a container from the provided image.

The container created will be used by this instance to run commands using the run function.

###### `image`<sup>Required</sup> <a name="image" id="cdk-ssm-document.DockerEnvironment.fromImage.parameter.image"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DockerEnvironment.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="cdk-ssm-document.DockerEnvironment.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---


### DocumentHashTypeVariable <a name="DocumentHashTypeVariable" id="cdk-ssm-document.DocumentHashTypeVariable"></a>

Reference to document hash type.

#### Initializers <a name="Initializers" id="cdk-ssm-document.DocumentHashTypeVariable.Initializer"></a>

```typescript
import { DocumentHashTypeVariable } from 'cdk-ssm-document'

new DocumentHashTypeVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DocumentHashTypeVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.DocumentHashTypeVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DocumentHashTypeVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.DocumentHashTypeVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.DocumentHashTypeVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.DocumentHashTypeVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.DocumentHashTypeVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.DocumentHashTypeVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.DocumentHashTypeVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.DocumentHashTypeVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DocumentHashTypeVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.DocumentHashTypeVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.DocumentHashTypeVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.DocumentHashTypeVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.DocumentHashTypeVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.DocumentHashTypeVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### EnumVariable <a name="EnumVariable" id="cdk-ssm-document.EnumVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

An enum variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.EnumVariable.Initializer"></a>

```typescript
import { EnumVariable } from 'cdk-ssm-document'

new EnumVariable(reference: string, enumType: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.EnumVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.EnumVariable.Initializer.parameter.enumType">enumType</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.EnumVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

##### `enumType`<sup>Required</sup> <a name="enumType" id="cdk-ssm-document.EnumVariable.Initializer.parameter.enumType"></a>

- *Type:* {[ key: string ]: any}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.EnumVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.EnumVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.EnumVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.EnumVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.EnumVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.EnumVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.EnumVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.EnumVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.EnumVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.EnumVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.EnumVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.EnumVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.EnumVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.EnumVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### GenericVariable <a name="GenericVariable" id="cdk-ssm-document.GenericVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

Abstraction of SSM variables.

Variables are printed as using this syntax: {{myVariable}}
To resolve a variable, you must supply the available inputs and the variable will resolve the value.

#### Initializers <a name="Initializers" id="cdk-ssm-document.GenericVariable.Initializer"></a>

```typescript
import { GenericVariable } from 'cdk-ssm-document'

new GenericVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.GenericVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.GenericVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.GenericVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.GenericVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.GenericVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.GenericVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.GenericVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.GenericVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.GenericVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.GenericVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.GenericVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.GenericVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.GenericVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### HardCodedBoolean <a name="HardCodedBoolean" id="cdk-ssm-document.HardCodedBoolean"></a>

- *Implements:* <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

A hard-coded boolean variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedBoolean.Initializer"></a>

```typescript
import { HardCodedBoolean } from 'cdk-ssm-document'

new HardCodedBoolean(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedBoolean.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedBoolean.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedBoolean.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedBoolean.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedBoolean.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedBoolean.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.HardCodedBoolean.resolveToBoolean">resolveToBoolean</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedBoolean.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedBoolean.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedBoolean.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedBoolean.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedBoolean.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToBoolean` <a name="resolveToBoolean" id="cdk-ssm-document.HardCodedBoolean.resolveToBoolean"></a>

```typescript
public resolveToBoolean(inputs: {[ key: string ]: any}): boolean
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.HardCodedBoolean.resolveToBoolean.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedBoolean.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedBoolean.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedDesiredState <a name="HardCodedDesiredState" id="cdk-ssm-document.HardCodedDesiredState"></a>

A hard coded desired state.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedDesiredState.Initializer"></a>

```typescript
import { HardCodedDesiredState } from 'cdk-ssm-document'

new HardCodedDesiredState(value: DesiredState)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedDesiredState.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-document.DesiredState">DesiredState</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-document.HardCodedDesiredState.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-document.DesiredState">DesiredState</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedDesiredState.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedDesiredState.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedDesiredState.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedDesiredState.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedDesiredState.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedDesiredState.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedDesiredState.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedDesiredState.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedDesiredState.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.HardCodedDesiredState.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedDesiredState.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedDesiredState.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedDocumentHashType <a name="HardCodedDocumentHashType" id="cdk-ssm-document.HardCodedDocumentHashType"></a>

Hard coded document hash type.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedDocumentHashType.Initializer"></a>

```typescript
import { HardCodedDocumentHashType } from 'cdk-ssm-document'

new HardCodedDocumentHashType(value: DocumentHashType)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedDocumentHashType.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-document.DocumentHashType">DocumentHashType</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-document.HardCodedDocumentHashType.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-document.DocumentHashType">DocumentHashType</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedDocumentHashType.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedDocumentHashType.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedDocumentHashType.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedDocumentHashType.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedDocumentHashType.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedDocumentHashType.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedDocumentHashType.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedDocumentHashType.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedDocumentHashType.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.HardCodedDocumentHashType.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedDocumentHashType.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedDocumentHashType.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedEnum <a name="HardCodedEnum" id="cdk-ssm-document.HardCodedEnum"></a>

- *Implements:* <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

A hard-coded enum variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedEnum.Initializer"></a>

```typescript
import { HardCodedEnum } from 'cdk-ssm-document'

new HardCodedEnum(value: any, enumType: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedEnum.Initializer.parameter.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-ssm-document.HardCodedEnum.Initializer.parameter.enumType">enumType</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-document.HardCodedEnum.Initializer.parameter.value"></a>

- *Type:* any

---

##### `enumType`<sup>Required</sup> <a name="enumType" id="cdk-ssm-document.HardCodedEnum.Initializer.parameter.enumType"></a>

- *Type:* {[ key: string ]: any}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedEnum.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedEnum.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedEnum.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedEnum.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedEnum.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedEnum.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedEnum.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedEnum.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedEnum.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.HardCodedEnum.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedEnum.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedEnum.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedMapList <a name="HardCodedMapList" id="cdk-ssm-document.HardCodedMapList"></a>

- *Implements:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

A hard-coded map list variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedMapList.Initializer"></a>

```typescript
import { HardCodedMapList } from 'cdk-ssm-document'

new HardCodedMapList(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedMapList.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedMapList.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedMapList.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedMapList.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedMapList.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedMapList.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.HardCodedMapList.resolveToMapList">resolveToMapList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedMapList.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedMapList.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedMapList.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedMapList.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedMapList.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToMapList` <a name="resolveToMapList" id="cdk-ssm-document.HardCodedMapList.resolveToMapList"></a>

```typescript
public resolveToMapList(inputs: {[ key: string ]: any}): {[ key: string ]: any}[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.HardCodedMapList.resolveToMapList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedMapList.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedMapList.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedNumber <a name="HardCodedNumber" id="cdk-ssm-document.HardCodedNumber"></a>

- *Implements:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

A hard-coded number variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedNumber.Initializer"></a>

```typescript
import { HardCodedNumber } from 'cdk-ssm-document'

new HardCodedNumber(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedNumber.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedNumber.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedNumber.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedNumber.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedNumber.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedNumber.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.HardCodedNumber.resolveToNumber">resolveToNumber</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedNumber.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedNumber.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedNumber.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedNumber.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedNumber.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToNumber` <a name="resolveToNumber" id="cdk-ssm-document.HardCodedNumber.resolveToNumber"></a>

```typescript
public resolveToNumber(inputs: {[ key: string ]: any}): number
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.HardCodedNumber.resolveToNumber.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedNumber.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedNumber.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedOnFailure <a name="HardCodedOnFailure" id="cdk-ssm-document.HardCodedOnFailure"></a>

Hard coded OnFailure value.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedOnFailure.Initializer"></a>

```typescript
import { HardCodedOnFailure } from 'cdk-ssm-document'

new HardCodedOnFailure(value: OnFailure)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedOnFailure.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-document.OnFailure">OnFailure</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-document.HardCodedOnFailure.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-document.OnFailure">OnFailure</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedOnFailure.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedOnFailure.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedOnFailure.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedOnFailure.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedOnFailure.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedOnFailure.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedOnFailure.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedOnFailure.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedOnFailure.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.HardCodedOnFailure.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedOnFailure.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedOnFailure.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedResourceType <a name="HardCodedResourceType" id="cdk-ssm-document.HardCodedResourceType"></a>

A hard coded resource type.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedResourceType.Initializer"></a>

```typescript
import { HardCodedResourceType } from 'cdk-ssm-document'

new HardCodedResourceType(value: ResourceType)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedResourceType.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-document.ResourceType">ResourceType</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-document.HardCodedResourceType.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-document.ResourceType">ResourceType</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedResourceType.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedResourceType.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedResourceType.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedResourceType.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedResourceType.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedResourceType.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedResourceType.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedResourceType.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedResourceType.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.HardCodedResourceType.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedResourceType.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedResourceType.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedString <a name="HardCodedString" id="cdk-ssm-document.HardCodedString"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

A hard-coded string variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedString.Initializer"></a>

```typescript
import { HardCodedString } from 'cdk-ssm-document'

new HardCodedString(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedString.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedString.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedString.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedString.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedString.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedString.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.HardCodedString.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedString.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedString.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedString.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedString.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedString.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-document.HardCodedString.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.HardCodedString.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedString.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedString.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedStringList <a name="HardCodedStringList" id="cdk-ssm-document.HardCodedStringList"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

A hard-coded string list variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedStringList.Initializer"></a>

```typescript
import { HardCodedStringList } from 'cdk-ssm-document'

new HardCodedStringList(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedStringList.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedStringList.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedStringList.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedStringList.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedStringList.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedStringList.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.HardCodedStringList.resolveToStringList">resolveToStringList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedStringList.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedStringList.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedStringList.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedStringList.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedStringList.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringList` <a name="resolveToStringList" id="cdk-ssm-document.HardCodedStringList.resolveToStringList"></a>

```typescript
public resolveToStringList(inputs: {[ key: string ]: any}): string[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.HardCodedStringList.resolveToStringList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedStringList.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedStringList.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedStringMap <a name="HardCodedStringMap" id="cdk-ssm-document.HardCodedStringMap"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

A hard-coded string map variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedStringMap.Initializer"></a>

```typescript
import { HardCodedStringMap } from 'cdk-ssm-document'

new HardCodedStringMap(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedStringMap.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedStringMap.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedStringMap.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedStringMap.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedStringMap.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedStringMap.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.HardCodedStringMap.resolveToStringMap">resolveToStringMap</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedStringMap.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedStringMap.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedStringMap.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedStringMap.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedStringMap.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringMap` <a name="resolveToStringMap" id="cdk-ssm-document.HardCodedStringMap.resolveToStringMap"></a>

```typescript
public resolveToStringMap(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.HardCodedStringMap.resolveToStringMap.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedStringMap.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedStringMap.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedValueBase <a name="HardCodedValueBase" id="cdk-ssm-document.HardCodedValueBase"></a>

- *Implements:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.HardCodedValueBase.Initializer"></a>

```typescript
import { HardCodedValueBase } from 'cdk-ssm-document'

new HardCodedValueBase(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedValueBase.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedValueBase.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedValueBase.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.HardCodedValueBase.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedValueBase.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.HardCodedValueBase.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.HardCodedValueBase.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.HardCodedValueBase.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.HardCodedValueBase.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-document.HardCodedValueBase.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.HardCodedValueBase.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.HardCodedValueBase.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-document.HardCodedValueBase.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### LoggingEnvironment <a name="LoggingEnvironment" id="cdk-ssm-document.LoggingEnvironment"></a>

- *Implements:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>

Environment that simply logs the commands that it receives and displays them on the console.

#### Initializers <a name="Initializers" id="cdk-ssm-document.LoggingEnvironment.Initializer"></a>

```typescript
import { LoggingEnvironment } from 'cdk-ssm-document'

new LoggingEnvironment()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.LoggingEnvironment.run">run</a></code> | *No description.* |

---

##### `run` <a name="run" id="cdk-ssm-document.LoggingEnvironment.run"></a>

```typescript
public run(command: string): string
```

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-document.LoggingEnvironment.run.parameter.command"></a>

- *Type:* string

---




### MapListVariable <a name="MapListVariable" id="cdk-ssm-document.MapListVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

A map list variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.MapListVariable.Initializer"></a>

```typescript
import { MapListVariable } from 'cdk-ssm-document'

new MapListVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.MapListVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.MapListVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.MapListVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.MapListVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.MapListVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.MapListVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.MapListVariable.resolveToMapList">resolveToMapList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.MapListVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.MapListVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.MapListVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.MapListVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.MapListVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToMapList` <a name="resolveToMapList" id="cdk-ssm-document.MapListVariable.resolveToMapList"></a>

```typescript
public resolveToMapList(inputs: {[ key: string ]: any}): {[ key: string ]: any}[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.MapListVariable.resolveToMapList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.MapListVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.MapListVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### MockApprove <a name="MockApprove" id="cdk-ssm-document.MockApprove"></a>

- *Implements:* <a href="#cdk-ssm-document.IApproveHook">IApproveHook</a>

Mock implementation of IApproveHook.

Does not simulate an approval request.

#### Initializers <a name="Initializers" id="cdk-ssm-document.MockApprove.Initializer"></a>

```typescript
import { MockApprove } from 'cdk-ssm-document'

new MockApprove()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.MockApprove.ask">ask</a></code> | Ask for approval. |

---

##### `ask` <a name="ask" id="cdk-ssm-document.MockApprove.ask"></a>

```typescript
public ask(_approver: string): boolean
```

Ask for approval.

###### `_approver`<sup>Required</sup> <a name="_approver" id="cdk-ssm-document.MockApprove.ask.parameter._approver"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.MockApprove.property.timesInvoked">timesInvoked</a></code> | <code>number</code> | *No description.* |

---

##### `timesInvoked`<sup>Required</sup> <a name="timesInvoked" id="cdk-ssm-document.MockApprove.property.timesInvoked"></a>

```typescript
public readonly timesInvoked: number;
```

- *Type:* number

---


### MockAwsInvoker <a name="MockAwsInvoker" id="cdk-ssm-document.MockAwsInvoker"></a>

- *Implements:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

Mock implementation of IAwsInvoker.

This class can be reused for testing in exported JSII languages.

#### Initializers <a name="Initializers" id="cdk-ssm-document.MockAwsInvoker.Initializer"></a>

```typescript
import { MockAwsInvoker } from 'cdk-ssm-document'

new MockAwsInvoker()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.MockAwsInvoker.invoke">invoke</a></code> | Saves the invocation to be retieved using getInvocations(). |
| <code><a href="#cdk-ssm-document.MockAwsInvoker.nextReturn">nextReturn</a></code> | Set the next return value. |
| <code><a href="#cdk-ssm-document.MockAwsInvoker.whenThen">whenThen</a></code> | Allows developers to mock out responses from the AwsInvoker depending on the input that it receives. |

---

##### `invoke` <a name="invoke" id="cdk-ssm-document.MockAwsInvoker.invoke"></a>

```typescript
public invoke(invocation: Invocation): any
```

Saves the invocation to be retieved using getInvocations().

###### `invocation`<sup>Required</sup> <a name="invocation" id="cdk-ssm-document.MockAwsInvoker.invoke.parameter.invocation"></a>

- *Type:* <a href="#cdk-ssm-document.Invocation">Invocation</a>

---

##### `nextReturn` <a name="nextReturn" id="cdk-ssm-document.MockAwsInvoker.nextReturn"></a>

```typescript
public nextReturn(awsResult: any): MockAwsInvoker
```

Set the next return value.

This function can be chained to return subsequent return values.
Values are read in order they were inserted.
The last value is used as a default if there are no other values retrieved.
In that way this function behaves the same way as Mockito .thenReturn(val).

###### `awsResult`<sup>Required</sup> <a name="awsResult" id="cdk-ssm-document.MockAwsInvoker.nextReturn.parameter.awsResult"></a>

- *Type:* any

---

##### `whenThen` <a name="whenThen" id="cdk-ssm-document.MockAwsInvoker.whenThen"></a>

```typescript
public whenThen(when: Invocation, then: {[ key: string ]: any}): void
```

Allows developers to mock out responses from the AwsInvoker depending on the input that it receives.

###### `when`<sup>Required</sup> <a name="when" id="cdk-ssm-document.MockAwsInvoker.whenThen.parameter.when"></a>

- *Type:* <a href="#cdk-ssm-document.Invocation">Invocation</a>

defines the invocation to match and return the then.

---

###### `then`<sup>Required</sup> <a name="then" id="cdk-ssm-document.MockAwsInvoker.whenThen.parameter.then"></a>

- *Type:* {[ key: string ]: any}

is the value that should be returned if the above when Invocation is matched.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.MockAwsInvoker.property.previousInvocations">previousInvocations</a></code> | <code><a href="#cdk-ssm-document.Invocation">Invocation</a>[]</code> | All of the invocations that have been submitted to this invoker until present. |

---

##### `previousInvocations`<sup>Required</sup> <a name="previousInvocations" id="cdk-ssm-document.MockAwsInvoker.property.previousInvocations"></a>

```typescript
public readonly previousInvocations: Invocation[];
```

- *Type:* <a href="#cdk-ssm-document.Invocation">Invocation</a>[]

All of the invocations that have been submitted to this invoker until present.

---


### MockEnvironment <a name="MockEnvironment" id="cdk-ssm-document.MockEnvironment"></a>

- *Implements:* <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>

Environment that simply saves commands into a previousCommands variable.

This is useful if you want to unit test the commands that would be sent to a real environment.

#### Initializers <a name="Initializers" id="cdk-ssm-document.MockEnvironment.Initializer"></a>

```typescript
import { MockEnvironment } from 'cdk-ssm-document'

new MockEnvironment()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.MockEnvironment.run">run</a></code> | *No description.* |

---

##### `run` <a name="run" id="cdk-ssm-document.MockEnvironment.run"></a>

```typescript
public run(command: string): string
```

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-document.MockEnvironment.run.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.MockEnvironment.property.previousCommands">previousCommands</a></code> | <code>string[]</code> | *No description.* |

---

##### `previousCommands`<sup>Required</sup> <a name="previousCommands" id="cdk-ssm-document.MockEnvironment.property.previousCommands"></a>

```typescript
public readonly previousCommands: string[];
```

- *Type:* string[]

---


### MockPause <a name="MockPause" id="cdk-ssm-document.MockPause"></a>

- *Implements:* <a href="#cdk-ssm-document.IPauseHook">IPauseHook</a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.MockPause.Initializer"></a>

```typescript
import { MockPause } from 'cdk-ssm-document'

new MockPause()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.MockPause.pause">pause</a></code> | *No description.* |

---

##### `pause` <a name="pause" id="cdk-ssm-document.MockPause.pause"></a>

```typescript
public pause(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.MockPause.property.timesInvoked">timesInvoked</a></code> | <code>number</code> | *No description.* |

---

##### `timesInvoked`<sup>Required</sup> <a name="timesInvoked" id="cdk-ssm-document.MockPause.property.timesInvoked"></a>

```typescript
public readonly timesInvoked: number;
```

- *Type:* number

---


### MockSleep <a name="MockSleep" id="cdk-ssm-document.MockSleep"></a>

- *Implements:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

Mock ISleeper implementation.

Simply logs that it is sleeping and returns immediately.

#### Initializers <a name="Initializers" id="cdk-ssm-document.MockSleep.Initializer"></a>

```typescript
import { MockSleep } from 'cdk-ssm-document'

new MockSleep()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.MockSleep.sleep">sleep</a></code> | *No description.* |

---

##### `sleep` <a name="sleep" id="cdk-ssm-document.MockSleep.sleep"></a>

```typescript
public sleep(timeMillis: number): void
```

###### `timeMillis`<sup>Required</sup> <a name="timeMillis" id="cdk-ssm-document.MockSleep.sleep.parameter.timeMillis"></a>

- *Type:* number

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.MockSleep.property.sleepMilliInvocations">sleepMilliInvocations</a></code> | <code>number[]</code> | *No description.* |

---

##### `sleepMilliInvocations`<sup>Required</sup> <a name="sleepMilliInvocations" id="cdk-ssm-document.MockSleep.property.sleepMilliInvocations"></a>

```typescript
public readonly sleepMilliInvocations: number[];
```

- *Type:* number[]

---


### NoopObserver <a name="NoopObserver" id="cdk-ssm-document.NoopObserver"></a>

- *Implements:* <a href="#cdk-ssm-document.IObserver">IObserver</a>

#### Initializers <a name="Initializers" id="cdk-ssm-document.NoopObserver.Initializer"></a>

```typescript
import { NoopObserver } from 'cdk-ssm-document'

new NoopObserver()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.NoopObserver.accept">accept</a></code> | *No description.* |

---

##### `accept` <a name="accept" id="cdk-ssm-document.NoopObserver.accept"></a>

```typescript
public accept(_value: {[ key: string ]: any}): void
```

###### `_value`<sup>Required</sup> <a name="_value" id="cdk-ssm-document.NoopObserver.accept.parameter._value"></a>

- *Type:* {[ key: string ]: any}

---




### NumberVariable <a name="NumberVariable" id="cdk-ssm-document.NumberVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

A number variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.NumberVariable.Initializer"></a>

```typescript
import { NumberVariable } from 'cdk-ssm-document'

new NumberVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.NumberVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.NumberVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.NumberVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.NumberVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.NumberVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.NumberVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.NumberVariable.resolveToNumber">resolveToNumber</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.NumberVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.NumberVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.NumberVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.NumberVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.NumberVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToNumber` <a name="resolveToNumber" id="cdk-ssm-document.NumberVariable.resolveToNumber"></a>

```typescript
public resolveToNumber(inputs: {[ key: string ]: any}): number
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.NumberVariable.resolveToNumber.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.NumberVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.NumberVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### OnFailureVariable <a name="OnFailureVariable" id="cdk-ssm-document.OnFailureVariable"></a>

OnFailure reference value.

#### Initializers <a name="Initializers" id="cdk-ssm-document.OnFailureVariable.Initializer"></a>

```typescript
import { OnFailureVariable } from 'cdk-ssm-document'

new OnFailureVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.OnFailureVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.OnFailureVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.OnFailureVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.OnFailureVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.OnFailureVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.OnFailureVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.OnFailureVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.OnFailureVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.OnFailureVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.OnFailureVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.OnFailureVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.OnFailureVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.OnFailureVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.OnFailureVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.OnFailureVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.OnFailureVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### PauseImpl <a name="PauseImpl" id="cdk-ssm-document.PauseImpl"></a>

- *Implements:* <a href="#cdk-ssm-document.IPauseHook">IPauseHook</a>

This IPauseHook implementation provides a real pause and wait for user input of Enter.

This implementation does not work well on all exported JSII languages.
Users can provide their own impl using the IPauseHook interface.

#### Initializers <a name="Initializers" id="cdk-ssm-document.PauseImpl.Initializer"></a>

```typescript
import { PauseImpl } from 'cdk-ssm-document'

new PauseImpl()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.PauseImpl.pause">pause</a></code> | *No description.* |

---

##### `pause` <a name="pause" id="cdk-ssm-document.PauseImpl.pause"></a>

```typescript
public pause(): void
```




### ReflectiveAwsInvoker <a name="ReflectiveAwsInvoker" id="cdk-ssm-document.ReflectiveAwsInvoker"></a>

- *Implements:* <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

Implementation of IAwsInvoker that executes the AWS api for real.

If using this implementation, be sure that AWS credentials are available to the execution.

#### Initializers <a name="Initializers" id="cdk-ssm-document.ReflectiveAwsInvoker.Initializer"></a>

```typescript
import { ReflectiveAwsInvoker } from 'cdk-ssm-document'

new ReflectiveAwsInvoker()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ReflectiveAwsInvoker.invoke">invoke</a></code> | Invoke AWS with the provided invocation request. |

---

##### `invoke` <a name="invoke" id="cdk-ssm-document.ReflectiveAwsInvoker.invoke"></a>

```typescript
public invoke(invocation: Invocation): any
```

Invoke AWS with the provided invocation request.

###### `invocation`<sup>Required</sup> <a name="invocation" id="cdk-ssm-document.ReflectiveAwsInvoker.invoke.parameter.invocation"></a>

- *Type:* <a href="#cdk-ssm-document.Invocation">Invocation</a>

---




### ResourceTypeVariable <a name="ResourceTypeVariable" id="cdk-ssm-document.ResourceTypeVariable"></a>

A resource type variable reference.

#### Initializers <a name="Initializers" id="cdk-ssm-document.ResourceTypeVariable.Initializer"></a>

```typescript
import { ResourceTypeVariable } from 'cdk-ssm-document'

new ResourceTypeVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ResourceTypeVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.ResourceTypeVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ResourceTypeVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.ResourceTypeVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.ResourceTypeVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.ResourceTypeVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.ResourceTypeVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.ResourceTypeVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.ResourceTypeVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.ResourceTypeVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ResourceTypeVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.ResourceTypeVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.ResourceTypeVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.ResourceTypeVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.ResourceTypeVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.ResourceTypeVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### SleepImpl <a name="SleepImpl" id="cdk-ssm-document.SleepImpl"></a>

- *Implements:* <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

Performs a real sleep.

#### Initializers <a name="Initializers" id="cdk-ssm-document.SleepImpl.Initializer"></a>

```typescript
import { SleepImpl } from 'cdk-ssm-document'

new SleepImpl()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.SleepImpl.sleep">sleep</a></code> | Synchronously sleeps for duration specified in millis. |

---

##### `sleep` <a name="sleep" id="cdk-ssm-document.SleepImpl.sleep"></a>

```typescript
public sleep(timeMillis: number): void
```

Synchronously sleeps for duration specified in millis.

###### `timeMillis`<sup>Required</sup> <a name="timeMillis" id="cdk-ssm-document.SleepImpl.sleep.parameter.timeMillis"></a>

- *Type:* number

---




### StepCollector <a name="StepCollector" id="cdk-ssm-document.StepCollector"></a>

- *Implements:* aws-cdk-lib.IAspect

Collects steps found in the tree using the visitor pattern (IAspect).

#### Initializers <a name="Initializers" id="cdk-ssm-document.StepCollector.Initializer"></a>

```typescript
import { StepCollector } from 'cdk-ssm-document'

new StepCollector()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StepCollector.visit">visit</a></code> | This is called prior to synthesis thereby allowing all Steps to be found. |

---

##### `visit` <a name="visit" id="cdk-ssm-document.StepCollector.visit"></a>

```typescript
public visit(node: IConstruct): void
```

This is called prior to synthesis thereby allowing all Steps to be found.

###### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-document.StepCollector.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StepCollector.property.automationSteps">automationSteps</a></code> | <code><a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]</code> | All AutomationSteps found in tree. |
| <code><a href="#cdk-ssm-document.StepCollector.property.runCommandSteps">runCommandSteps</a></code> | <code><a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]</code> | All RunCommandSteps found in tree. |

---

##### `automationSteps`<sup>Required</sup> <a name="automationSteps" id="cdk-ssm-document.StepCollector.property.automationSteps"></a>

```typescript
public readonly automationSteps: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-document.AutomationStep">AutomationStep</a>[]

All AutomationSteps found in tree.

---

##### `runCommandSteps`<sup>Required</sup> <a name="runCommandSteps" id="cdk-ssm-document.StepCollector.property.runCommandSteps"></a>

```typescript
public readonly runCommandSteps: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-document.CommandStep">CommandStep</a>[]

All RunCommandSteps found in tree.

---


### StringFormat <a name="StringFormat" id="cdk-ssm-document.StringFormat"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

Replacement for strings using Java String format style "%s" replacements.

Example: new StringFormat("This %s a replacement: %s", [new HardCodedValue("is"), new ExportedVariable("myInput")]);
The supported variable strings are either:
1. Implicit indices: "%s" where the first occurrence will match the first variable, the next will match the second...
2. Explicit indices: Example: "%1$s"; where "%1$s" matches the first variable and "%1$s" matches the second.
Do not combine usage of implicit and explicit indices. Choose one per StringFormat instance.

#### Initializers <a name="Initializers" id="cdk-ssm-document.StringFormat.Initializer"></a>

```typescript
import { StringFormat } from 'cdk-ssm-document'

new StringFormat(format: string, variables?: IGenericVariable[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringFormat.Initializer.parameter.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringFormat.Initializer.parameter.variables">variables</a></code> | <code><a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>[]</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-document.StringFormat.Initializer.parameter.format"></a>

- *Type:* string

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-ssm-document.StringFormat.Initializer.parameter.variables"></a>

- *Type:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringFormat.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.StringFormat.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.StringFormat.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.StringFormat.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.StringFormat.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.StringFormat.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.StringFormat.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.StringFormat.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringFormat.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-document.StringFormat.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringFormat.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.StringFormat.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringFormat.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-document.StringFormat.property.variables">variables</a></code> | <code><a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>[]</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-document.StringFormat.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="cdk-ssm-document.StringFormat.property.variables"></a>

```typescript
public readonly variables: IGenericVariable[];
```

- *Type:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>[]

---


### StringListVariable <a name="StringListVariable" id="cdk-ssm-document.StringListVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

A string list variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.StringListVariable.Initializer"></a>

```typescript
import { StringListVariable } from 'cdk-ssm-document'

new StringListVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringListVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.StringListVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringListVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.StringListVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.StringListVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.StringListVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.StringListVariable.resolveToStringList">resolveToStringList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.StringListVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.StringListVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.StringListVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringListVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.StringListVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringList` <a name="resolveToStringList" id="cdk-ssm-document.StringListVariable.resolveToStringList"></a>

```typescript
public resolveToStringList(inputs: {[ key: string ]: any}): string[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringListVariable.resolveToStringList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringListVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.StringListVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### StringMapVariable <a name="StringMapVariable" id="cdk-ssm-document.StringMapVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

A string map variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.StringMapVariable.Initializer"></a>

```typescript
import { StringMapVariable } from 'cdk-ssm-document'

new StringMapVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringMapVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.StringMapVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringMapVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.StringMapVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.StringMapVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.StringMapVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.StringMapVariable.resolveToStringMap">resolveToStringMap</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.StringMapVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.StringMapVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.StringMapVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringMapVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.StringMapVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringMap` <a name="resolveToStringMap" id="cdk-ssm-document.StringMapVariable.resolveToStringMap"></a>

```typescript
public resolveToStringMap(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringMapVariable.resolveToStringMap.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringMapVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.StringMapVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### StringVariable <a name="StringVariable" id="cdk-ssm-document.StringVariable"></a>

- *Implements:* <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

A string variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-document.StringVariable.Initializer"></a>

```typescript
import { StringVariable } from 'cdk-ssm-document'

new StringVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.StringVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StringVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.StringVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.StringVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.StringVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-document.StringVariable.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.StringVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.StringVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.StringVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.StringVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-document.StringVariable.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.StringVariable.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-document.StringVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-document.StringVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### SynthUtils <a name="SynthUtils" id="cdk-ssm-document.SynthUtils"></a>

Wraps SynthUtils from @aws-cdk/assert because that package is not exported via JSII.

#### Initializers <a name="Initializers" id="cdk-ssm-document.SynthUtils.Initializer"></a>

```typescript
import { SynthUtils } from 'cdk-ssm-document'

new SynthUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.SynthUtils.synthesize">synthesize</a></code> | Wraps @aws-cdk/assert SynthUtils.synthesize(stack). Synthesizes the stack provided. |

---

##### `synthesize` <a name="synthesize" id="cdk-ssm-document.SynthUtils.synthesize"></a>

```typescript
import { SynthUtils } from 'cdk-ssm-document'

SynthUtils.synthesize(stack: Stack)
```

Wraps @aws-cdk/assert SynthUtils.synthesize(stack). Synthesizes the stack provided.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-document.SynthUtils.synthesize.parameter.stack"></a>

- *Type:* aws-cdk-lib.Stack

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IApproveHook <a name="IApproveHook" id="cdk-ssm-document.IApproveHook"></a>

- *Implemented By:* <a href="#cdk-ssm-document.ApproveImpl">ApproveImpl</a>, <a href="#cdk-ssm-document.MockApprove">MockApprove</a>, <a href="#cdk-ssm-document.IApproveHook">IApproveHook</a>

This can be used to provide a hook for approval implementation for ApproveStep.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IApproveHook.ask">ask</a></code> | Ask for approval. |

---

##### `ask` <a name="ask" id="cdk-ssm-document.IApproveHook.ask"></a>

```typescript
public ask(approver: string): boolean
```

Ask for approval.

###### `approver`<sup>Required</sup> <a name="approver" id="cdk-ssm-document.IApproveHook.ask.parameter.approver"></a>

- *Type:* string

---


### IAwsInvoker <a name="IAwsInvoker" id="cdk-ssm-document.IAwsInvoker"></a>

- *Implemented By:* <a href="#cdk-ssm-document.MockAwsInvoker">MockAwsInvoker</a>, <a href="#cdk-ssm-document.ReflectiveAwsInvoker">ReflectiveAwsInvoker</a>, <a href="#cdk-ssm-document.IAwsInvoker">IAwsInvoker</a>

Aws invoker interface.

This can be used to provide a hook for AWS invocation of steps so as to mock AWS behavior for simulation runs.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IAwsInvoker.invoke">invoke</a></code> | Invoke AWS with the provided invocation request. |

---

##### `invoke` <a name="invoke" id="cdk-ssm-document.IAwsInvoker.invoke"></a>

```typescript
public invoke(invocation: Invocation): any
```

Invoke AWS with the provided invocation request.

> [Invocation](Invocation)

###### `invocation`<sup>Required</sup> <a name="invocation" id="cdk-ssm-document.IAwsInvoker.invoke.parameter.invocation"></a>

- *Type:* <a href="#cdk-ssm-document.Invocation">Invocation</a>

---


### IBooleanVariable <a name="IBooleanVariable" id="cdk-ssm-document.IBooleanVariable"></a>

- *Extends:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-document.BooleanVariable">BooleanVariable</a>, <a href="#cdk-ssm-document.HardCodedBoolean">HardCodedBoolean</a>, <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>

A boolean variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IBooleanVariable.resolveToBoolean">resolveToBoolean</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToBoolean` <a name="resolveToBoolean" id="cdk-ssm-document.IBooleanVariable.resolveToBoolean"></a>

```typescript
public resolveToBoolean(inputs: {[ key: string ]: any}): boolean
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.IBooleanVariable.resolveToBoolean.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IEnumVariable <a name="IEnumVariable" id="cdk-ssm-document.IEnumVariable"></a>

- *Extends:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-document.DesiredStateVariable">DesiredStateVariable</a>, <a href="#cdk-ssm-document.DocumentHashTypeVariable">DocumentHashTypeVariable</a>, <a href="#cdk-ssm-document.EnumVariable">EnumVariable</a>, <a href="#cdk-ssm-document.HardCodedDesiredState">HardCodedDesiredState</a>, <a href="#cdk-ssm-document.HardCodedDocumentHashType">HardCodedDocumentHashType</a>, <a href="#cdk-ssm-document.HardCodedEnum">HardCodedEnum</a>, <a href="#cdk-ssm-document.HardCodedOnFailure">HardCodedOnFailure</a>, <a href="#cdk-ssm-document.HardCodedResourceType">HardCodedResourceType</a>, <a href="#cdk-ssm-document.OnFailureVariable">OnFailureVariable</a>, <a href="#cdk-ssm-document.ResourceTypeVariable">ResourceTypeVariable</a>, <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>

An enum variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IEnumVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-document.IEnumVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.IEnumVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IEnvironment <a name="IEnvironment" id="cdk-ssm-document.IEnvironment"></a>

- *Implemented By:* <a href="#cdk-ssm-document.DockerEnvironment">DockerEnvironment</a>, <a href="#cdk-ssm-document.LoggingEnvironment">LoggingEnvironment</a>, <a href="#cdk-ssm-document.MockEnvironment">MockEnvironment</a>, <a href="#cdk-ssm-document.IEnvironment">IEnvironment</a>

IEnvironment is an abstraction for EC2 instances.

The implementations of this interface provides customers with
alternatives to test their commands rather than a real instance.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IEnvironment.run">run</a></code> | *No description.* |

---

##### `run` <a name="run" id="cdk-ssm-document.IEnvironment.run"></a>

```typescript
public run(command: string): string
```

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-document.IEnvironment.run.parameter.command"></a>

- *Type:* string

---


### IGenericVariable <a name="IGenericVariable" id="cdk-ssm-document.IGenericVariable"></a>

- *Implemented By:* <a href="#cdk-ssm-document.BooleanVariable">BooleanVariable</a>, <a href="#cdk-ssm-document.DesiredStateVariable">DesiredStateVariable</a>, <a href="#cdk-ssm-document.DictFormat">DictFormat</a>, <a href="#cdk-ssm-document.DocumentHashTypeVariable">DocumentHashTypeVariable</a>, <a href="#cdk-ssm-document.EnumVariable">EnumVariable</a>, <a href="#cdk-ssm-document.GenericVariable">GenericVariable</a>, <a href="#cdk-ssm-document.HardCodedBoolean">HardCodedBoolean</a>, <a href="#cdk-ssm-document.HardCodedDesiredState">HardCodedDesiredState</a>, <a href="#cdk-ssm-document.HardCodedDocumentHashType">HardCodedDocumentHashType</a>, <a href="#cdk-ssm-document.HardCodedEnum">HardCodedEnum</a>, <a href="#cdk-ssm-document.HardCodedMapList">HardCodedMapList</a>, <a href="#cdk-ssm-document.HardCodedNumber">HardCodedNumber</a>, <a href="#cdk-ssm-document.HardCodedOnFailure">HardCodedOnFailure</a>, <a href="#cdk-ssm-document.HardCodedResourceType">HardCodedResourceType</a>, <a href="#cdk-ssm-document.HardCodedString">HardCodedString</a>, <a href="#cdk-ssm-document.HardCodedStringList">HardCodedStringList</a>, <a href="#cdk-ssm-document.HardCodedStringMap">HardCodedStringMap</a>, <a href="#cdk-ssm-document.HardCodedValueBase">HardCodedValueBase</a>, <a href="#cdk-ssm-document.MapListVariable">MapListVariable</a>, <a href="#cdk-ssm-document.NumberVariable">NumberVariable</a>, <a href="#cdk-ssm-document.OnFailureVariable">OnFailureVariable</a>, <a href="#cdk-ssm-document.ResourceTypeVariable">ResourceTypeVariable</a>, <a href="#cdk-ssm-document.StringFormat">StringFormat</a>, <a href="#cdk-ssm-document.StringListVariable">StringListVariable</a>, <a href="#cdk-ssm-document.StringMapVariable">StringMapVariable</a>, <a href="#cdk-ssm-document.StringVariable">StringVariable</a>, <a href="#cdk-ssm-document.IBooleanVariable">IBooleanVariable</a>, <a href="#cdk-ssm-document.IEnumVariable">IEnumVariable</a>, <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>, <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>, <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>, <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>, <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>, <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

Variables hold references to a value.

There are two implementations: HardCodedValue and ExportedVariable.
This interface allows you to reference variable outputs from previous steps via the exported step.variable().
If you do not have a reference to a variable, you may generate your own variable using the ExportedVariable ctor.
In the event that a hardcoded value is passed into a step, you can reference the value with a HardCodedValue.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IGenericVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-document.IGenericVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-document.IGenericVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-document.IGenericVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-document.IGenericVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

*Example*

```typescript
{{MyVariable}}
```


##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-document.IGenericVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-document.IGenericVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.IGenericVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-document.IGenericVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


### IMapListVariable <a name="IMapListVariable" id="cdk-ssm-document.IMapListVariable"></a>

- *Extends:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-document.HardCodedMapList">HardCodedMapList</a>, <a href="#cdk-ssm-document.MapListVariable">MapListVariable</a>, <a href="#cdk-ssm-document.IMapListVariable">IMapListVariable</a>

A map list variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IMapListVariable.resolveToMapList">resolveToMapList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToMapList` <a name="resolveToMapList" id="cdk-ssm-document.IMapListVariable.resolveToMapList"></a>

```typescript
public resolveToMapList(inputs: {[ key: string ]: any}): {[ key: string ]: any}[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.IMapListVariable.resolveToMapList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### INumberVariable <a name="INumberVariable" id="cdk-ssm-document.INumberVariable"></a>

- *Extends:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-document.HardCodedNumber">HardCodedNumber</a>, <a href="#cdk-ssm-document.NumberVariable">NumberVariable</a>, <a href="#cdk-ssm-document.INumberVariable">INumberVariable</a>

A number variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.INumberVariable.resolveToNumber">resolveToNumber</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToNumber` <a name="resolveToNumber" id="cdk-ssm-document.INumberVariable.resolveToNumber"></a>

```typescript
public resolveToNumber(inputs: {[ key: string ]: any}): number
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.INumberVariable.resolveToNumber.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IObserver <a name="IObserver" id="cdk-ssm-document.IObserver"></a>

- *Implemented By:* <a href="#cdk-ssm-document.NoopObserver">NoopObserver</a>, <a href="#cdk-ssm-document.IObserver">IObserver</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IObserver.accept">accept</a></code> | *No description.* |

---

##### `accept` <a name="accept" id="cdk-ssm-document.IObserver.accept"></a>

```typescript
public accept(value: {[ key: string ]: any}): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-document.IObserver.accept.parameter.value"></a>

- *Type:* {[ key: string ]: any}

---


### IParameterResolver <a name="IParameterResolver" id="cdk-ssm-document.IParameterResolver"></a>

- *Implemented By:* <a href="#cdk-ssm-document.IParameterResolver">IParameterResolver</a>

Resolver for secure strings in Parameters.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IParameterResolver.resolve">resolve</a></code> | Resolve the token to its value. |

---

##### `resolve` <a name="resolve" id="cdk-ssm-document.IParameterResolver.resolve"></a>

```typescript
public resolve(input: string): string
```

Resolve the token to its value.

###### `input`<sup>Required</sup> <a name="input" id="cdk-ssm-document.IParameterResolver.resolve.parameter.input"></a>

- *Type:* string

---


### IPauseHook <a name="IPauseHook" id="cdk-ssm-document.IPauseHook"></a>

- *Implemented By:* <a href="#cdk-ssm-document.MockPause">MockPause</a>, <a href="#cdk-ssm-document.PauseImpl">PauseImpl</a>, <a href="#cdk-ssm-document.IPauseHook">IPauseHook</a>

This can be used to provide a hook for pausing implementation for PauseStep.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IPauseHook.pause">pause</a></code> | *No description.* |

---

##### `pause` <a name="pause" id="cdk-ssm-document.IPauseHook.pause"></a>

```typescript
public pause(): void
```


### IRunCommandHook <a name="IRunCommandHook" id="cdk-ssm-document.IRunCommandHook"></a>

- *Implemented By:* <a href="#cdk-ssm-document.ApiRunCommandHook">ApiRunCommandHook</a>, <a href="#cdk-ssm-document.IRunCommandHook">IRunCommandHook</a>

Interface for simulating aws:runCommand.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IRunCommandHook.execute">execute</a></code> | Simulate the aws:runCommand. |

---

##### `execute` <a name="execute" id="cdk-ssm-document.IRunCommandHook.execute"></a>

```typescript
public execute(props: RunCommandProps): RunCommandOutputs
```

Simulate the aws:runCommand.

###### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.IRunCommandHook.execute.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.RunCommandProps">RunCommandProps</a>

---


### ISleepHook <a name="ISleepHook" id="cdk-ssm-document.ISleepHook"></a>

- *Implemented By:* <a href="#cdk-ssm-document.MockSleep">MockSleep</a>, <a href="#cdk-ssm-document.SleepImpl">SleepImpl</a>, <a href="#cdk-ssm-document.ISleepHook">ISleepHook</a>

This can be used to provide a hook for sleeping for SleepStep (and other places where sleep is required).

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ISleepHook.sleep">sleep</a></code> | *No description.* |

---

##### `sleep` <a name="sleep" id="cdk-ssm-document.ISleepHook.sleep"></a>

```typescript
public sleep(timeMillis: number): void
```

###### `timeMillis`<sup>Required</sup> <a name="timeMillis" id="cdk-ssm-document.ISleepHook.sleep.parameter.timeMillis"></a>

- *Type:* number

---


### IStringListVariable <a name="IStringListVariable" id="cdk-ssm-document.IStringListVariable"></a>

- *Extends:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-document.HardCodedStringList">HardCodedStringList</a>, <a href="#cdk-ssm-document.StringListVariable">StringListVariable</a>, <a href="#cdk-ssm-document.IStringListVariable">IStringListVariable</a>

A string list variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IStringListVariable.resolveToStringList">resolveToStringList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToStringList` <a name="resolveToStringList" id="cdk-ssm-document.IStringListVariable.resolveToStringList"></a>

```typescript
public resolveToStringList(inputs: {[ key: string ]: any}): string[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.IStringListVariable.resolveToStringList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IStringMapVariable <a name="IStringMapVariable" id="cdk-ssm-document.IStringMapVariable"></a>

- *Extends:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-document.HardCodedStringMap">HardCodedStringMap</a>, <a href="#cdk-ssm-document.StringMapVariable">StringMapVariable</a>, <a href="#cdk-ssm-document.IStringMapVariable">IStringMapVariable</a>

A string map variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IStringMapVariable.resolveToStringMap">resolveToStringMap</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToStringMap` <a name="resolveToStringMap" id="cdk-ssm-document.IStringMapVariable.resolveToStringMap"></a>

```typescript
public resolveToStringMap(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.IStringMapVariable.resolveToStringMap.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IStringVariable <a name="IStringVariable" id="cdk-ssm-document.IStringVariable"></a>

- *Extends:* <a href="#cdk-ssm-document.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-document.DictFormat">DictFormat</a>, <a href="#cdk-ssm-document.HardCodedString">HardCodedString</a>, <a href="#cdk-ssm-document.StringFormat">StringFormat</a>, <a href="#cdk-ssm-document.StringVariable">StringVariable</a>, <a href="#cdk-ssm-document.IStringVariable">IStringVariable</a>

A string variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IStringVariable.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-document.IStringVariable.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-document.IStringVariable.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IWebhook <a name="IWebhook" id="cdk-ssm-document.IWebhook"></a>

- *Implemented By:* <a href="#cdk-ssm-document.IWebhook">IWebhook</a>

Hook for simulating aws:invokeWebhook.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.IWebhook.invoke">invoke</a></code> | Invoke the web hook. |

---

##### `invoke` <a name="invoke" id="cdk-ssm-document.IWebhook.invoke"></a>

```typescript
public invoke(props: InvokeWebhookProps): InvokeWebhookResult
```

Invoke the web hook.

###### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-document.IWebhook.invoke.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-document.InvokeWebhookProps">InvokeWebhookProps</a>

---


## Enums <a name="Enums" id="Enums"></a>

### BodyOrUrlType <a name="BodyOrUrlType" id="cdk-ssm-document.BodyOrUrlType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.BodyOrUrlType.BODY">BODY</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.BodyOrUrlType.URL">URL</a></code> | *No description.* |

---

##### `BODY` <a name="BODY" id="cdk-ssm-document.BodyOrUrlType.BODY"></a>

---


##### `URL` <a name="URL" id="cdk-ssm-document.BodyOrUrlType.URL"></a>

---


### DataTypeEnum <a name="DataTypeEnum" id="cdk-ssm-document.DataTypeEnum"></a>

DataTypes as supported by SSM Documents.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DataTypeEnum.STRING">STRING</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DataTypeEnum.INTEGER">INTEGER</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DataTypeEnum.BOOLEAN">BOOLEAN</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DataTypeEnum.STRING_LIST">STRING_LIST</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DataTypeEnum.STRING_MAP">STRING_MAP</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DataTypeEnum.MAP_LIST">MAP_LIST</a></code> | *No description.* |

---

##### `STRING` <a name="STRING" id="cdk-ssm-document.DataTypeEnum.STRING"></a>

---


##### `INTEGER` <a name="INTEGER" id="cdk-ssm-document.DataTypeEnum.INTEGER"></a>

---


##### `BOOLEAN` <a name="BOOLEAN" id="cdk-ssm-document.DataTypeEnum.BOOLEAN"></a>

---


##### `STRING_LIST` <a name="STRING_LIST" id="cdk-ssm-document.DataTypeEnum.STRING_LIST"></a>

---


##### `STRING_MAP` <a name="STRING_MAP" id="cdk-ssm-document.DataTypeEnum.STRING_MAP"></a>

---


##### `MAP_LIST` <a name="MAP_LIST" id="cdk-ssm-document.DataTypeEnum.MAP_LIST"></a>

---


### DesiredState <a name="DesiredState" id="cdk-ssm-document.DesiredState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DesiredState.RUNNING">RUNNING</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DesiredState.STOPPED">STOPPED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DesiredState.TERMINATED">TERMINATED</a></code> | *No description.* |

---

##### `RUNNING` <a name="RUNNING" id="cdk-ssm-document.DesiredState.RUNNING"></a>

---


##### `STOPPED` <a name="STOPPED" id="cdk-ssm-document.DesiredState.STOPPED"></a>

---


##### `TERMINATED` <a name="TERMINATED" id="cdk-ssm-document.DesiredState.TERMINATED"></a>

---


### DocumentFormat <a name="DocumentFormat" id="cdk-ssm-document.DocumentFormat"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DocumentFormat.JSON">JSON</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DocumentFormat.YAML">YAML</a></code> | *No description.* |

---

##### `JSON` <a name="JSON" id="cdk-ssm-document.DocumentFormat.JSON"></a>

---


##### `YAML` <a name="YAML" id="cdk-ssm-document.DocumentFormat.YAML"></a>

---


### DocumentHashType <a name="DocumentHashType" id="cdk-ssm-document.DocumentHashType"></a>

Type of document hash.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.DocumentHashType.SHA256">SHA256</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.DocumentHashType.SHA1">SHA1</a></code> | *No description.* |

---

##### `SHA256` <a name="SHA256" id="cdk-ssm-document.DocumentHashType.SHA256"></a>

---


##### `SHA1` <a name="SHA1" id="cdk-ssm-document.DocumentHashType.SHA1"></a>

---


### OnFailure <a name="OnFailure" id="cdk-ssm-document.OnFailure"></a>

Values for CreateStackStep's OnFailure property.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.OnFailure.DO_NOTHING">DO_NOTHING</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.OnFailure.ROLLBACK">ROLLBACK</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.OnFailure.DELETE">DELETE</a></code> | *No description.* |

---

##### `DO_NOTHING` <a name="DO_NOTHING" id="cdk-ssm-document.OnFailure.DO_NOTHING"></a>

---


##### `ROLLBACK` <a name="ROLLBACK" id="cdk-ssm-document.OnFailure.ROLLBACK"></a>

---


##### `DELETE` <a name="DELETE" id="cdk-ssm-document.OnFailure.DELETE"></a>

---


### Operation <a name="Operation" id="cdk-ssm-document.Operation"></a>

Operation to use for comparing a Choice's constant with the value provided.

See https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.Operation.BOOLEAN_EQUALS">BOOLEAN_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.CONTAINS">CONTAINS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.ENDS_WITH">ENDS_WITH</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.STARTS_WITH">STARTS_WITH</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.STRING_EQUALS">STRING_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.EQUALS_IGNORE_CASE">EQUALS_IGNORE_CASE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.NUMERIC_EQUALS">NUMERIC_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.NUMERIC_GREATER">NUMERIC_GREATER</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.NUMERIC_GREATER_OR_EQUALS">NUMERIC_GREATER_OR_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.NUMERIC_LESSER">NUMERIC_LESSER</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Operation.NUMERIC_LESSER_OR_EQUALS">NUMERIC_LESSER_OR_EQUALS</a></code> | *No description.* |

---

##### `BOOLEAN_EQUALS` <a name="BOOLEAN_EQUALS" id="cdk-ssm-document.Operation.BOOLEAN_EQUALS"></a>

---


##### `CONTAINS` <a name="CONTAINS" id="cdk-ssm-document.Operation.CONTAINS"></a>

---


##### `ENDS_WITH` <a name="ENDS_WITH" id="cdk-ssm-document.Operation.ENDS_WITH"></a>

---


##### `STARTS_WITH` <a name="STARTS_WITH" id="cdk-ssm-document.Operation.STARTS_WITH"></a>

---


##### `STRING_EQUALS` <a name="STRING_EQUALS" id="cdk-ssm-document.Operation.STRING_EQUALS"></a>

---


##### `EQUALS_IGNORE_CASE` <a name="EQUALS_IGNORE_CASE" id="cdk-ssm-document.Operation.EQUALS_IGNORE_CASE"></a>

---


##### `NUMERIC_EQUALS` <a name="NUMERIC_EQUALS" id="cdk-ssm-document.Operation.NUMERIC_EQUALS"></a>

---


##### `NUMERIC_GREATER` <a name="NUMERIC_GREATER" id="cdk-ssm-document.Operation.NUMERIC_GREATER"></a>

---


##### `NUMERIC_GREATER_OR_EQUALS` <a name="NUMERIC_GREATER_OR_EQUALS" id="cdk-ssm-document.Operation.NUMERIC_GREATER_OR_EQUALS"></a>

---


##### `NUMERIC_LESSER` <a name="NUMERIC_LESSER" id="cdk-ssm-document.Operation.NUMERIC_LESSER"></a>

---


##### `NUMERIC_LESSER_OR_EQUALS` <a name="NUMERIC_LESSER_OR_EQUALS" id="cdk-ssm-document.Operation.NUMERIC_LESSER_OR_EQUALS"></a>

---


### Platform <a name="Platform" id="cdk-ssm-document.Platform"></a>

Command steps are not all applicable to all platforms.

Each command step declares which Platforms it supports.
That allows customers to validate their CommandDocument against a given platform prior to execution.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.Platform.LINUX">LINUX</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Platform.WINDOWS">WINDOWS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.Platform.MAC_OS">MAC_OS</a></code> | *No description.* |

---

##### `LINUX` <a name="LINUX" id="cdk-ssm-document.Platform.LINUX"></a>

---


##### `WINDOWS` <a name="WINDOWS" id="cdk-ssm-document.Platform.WINDOWS"></a>

---


##### `MAC_OS` <a name="MAC_OS" id="cdk-ssm-document.Platform.MAC_OS"></a>

---


### ResourceType <a name="ResourceType" id="cdk-ssm-document.ResourceType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ResourceType.EC2">EC2</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ResourceType.MAINTENANCE_INSTANCE">MAINTENANCE_INSTANCE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ResourceType.MAINTENANCE_WINDOW">MAINTENANCE_WINDOW</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ResourceType.PARAMETER">PARAMETER</a></code> | *No description.* |

---

##### `EC2` <a name="EC2" id="cdk-ssm-document.ResourceType.EC2"></a>

---


##### `MAINTENANCE_INSTANCE` <a name="MAINTENANCE_INSTANCE" id="cdk-ssm-document.ResourceType.MAINTENANCE_INSTANCE"></a>

---


##### `MAINTENANCE_WINDOW` <a name="MAINTENANCE_WINDOW" id="cdk-ssm-document.ResourceType.MAINTENANCE_WINDOW"></a>

---


##### `PARAMETER` <a name="PARAMETER" id="cdk-ssm-document.ResourceType.PARAMETER"></a>

---


### ResponseCode <a name="ResponseCode" id="cdk-ssm-document.ResponseCode"></a>

Steps report their ResponseCode using this enum.

A successful response will contain the outputs expected.
A failed/canceled response will contain the stackTrace.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ResponseCode.SUCCESS">SUCCESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ResponseCode.CANCELED">CANCELED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.ResponseCode.FAILED">FAILED</a></code> | *No description.* |

---

##### `SUCCESS` <a name="SUCCESS" id="cdk-ssm-document.ResponseCode.SUCCESS"></a>

---


##### `CANCELED` <a name="CANCELED" id="cdk-ssm-document.ResponseCode.CANCELED"></a>

---


##### `FAILED` <a name="FAILED" id="cdk-ssm-document.ResponseCode.FAILED"></a>

---


### ScriptLanguage <a name="ScriptLanguage" id="cdk-ssm-document.ScriptLanguage"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.ScriptLanguage.PYTHON">PYTHON</a></code> | *No description.* |

---

##### `PYTHON` <a name="PYTHON" id="cdk-ssm-document.ScriptLanguage.PYTHON"></a>

---


### StackStatus <a name="StackStatus" id="cdk-ssm-document.StackStatus"></a>

Cloud formation stack status.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-document.StackStatus.CREATE_IN_PROGRESS">CREATE_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.CREATE_FAILED">CREATE_FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.CREATE_COMPLETE">CREATE_COMPLETE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.ROLLBACK_IN_PROGRESS">ROLLBACK_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.ROLLBACK_FAILED">ROLLBACK_FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.ROLLBACK_COMPLETE">ROLLBACK_COMPLETE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.DELETE_IN_PROGRESS">DELETE_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.DELETE_FAILED">DELETE_FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.DELETE_COMPLETE">DELETE_COMPLETE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_IN_PROGRESS">UPDATE_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_COMPLETE_CLEANUP_IN_PROGRESS">UPDATE_COMPLETE_CLEANUP_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_COMPLETE">UPDATE_COMPLETE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_FAILED">UPDATE_FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_IN_PROGRESS">UPDATE_ROLLBACK_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_FAILED">UPDATE_ROLLBACK_FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS">UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_COMPLETE">UPDATE_ROLLBACK_COMPLETE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.REVIEW_IN_PROGRESS">REVIEW_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.IMPORT_IN_PROGRESS">IMPORT_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.IMPORT_COMPLETE">IMPORT_COMPLETE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.IMPORT_ROLLBACK_IN_PROGRESS">IMPORT_ROLLBACK_IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.IMPORT_ROLLBACK_FAILED">IMPORT_ROLLBACK_FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-document.StackStatus.IMPORT_ROLLBACK_COMPLETE">IMPORT_ROLLBACK_COMPLETE</a></code> | *No description.* |

---

##### `CREATE_IN_PROGRESS` <a name="CREATE_IN_PROGRESS" id="cdk-ssm-document.StackStatus.CREATE_IN_PROGRESS"></a>

---


##### `CREATE_FAILED` <a name="CREATE_FAILED" id="cdk-ssm-document.StackStatus.CREATE_FAILED"></a>

---


##### `CREATE_COMPLETE` <a name="CREATE_COMPLETE" id="cdk-ssm-document.StackStatus.CREATE_COMPLETE"></a>

---


##### `ROLLBACK_IN_PROGRESS` <a name="ROLLBACK_IN_PROGRESS" id="cdk-ssm-document.StackStatus.ROLLBACK_IN_PROGRESS"></a>

---


##### `ROLLBACK_FAILED` <a name="ROLLBACK_FAILED" id="cdk-ssm-document.StackStatus.ROLLBACK_FAILED"></a>

---


##### `ROLLBACK_COMPLETE` <a name="ROLLBACK_COMPLETE" id="cdk-ssm-document.StackStatus.ROLLBACK_COMPLETE"></a>

---


##### `DELETE_IN_PROGRESS` <a name="DELETE_IN_PROGRESS" id="cdk-ssm-document.StackStatus.DELETE_IN_PROGRESS"></a>

---


##### `DELETE_FAILED` <a name="DELETE_FAILED" id="cdk-ssm-document.StackStatus.DELETE_FAILED"></a>

---


##### `DELETE_COMPLETE` <a name="DELETE_COMPLETE" id="cdk-ssm-document.StackStatus.DELETE_COMPLETE"></a>

---


##### `UPDATE_IN_PROGRESS` <a name="UPDATE_IN_PROGRESS" id="cdk-ssm-document.StackStatus.UPDATE_IN_PROGRESS"></a>

---


##### `UPDATE_COMPLETE_CLEANUP_IN_PROGRESS` <a name="UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" id="cdk-ssm-document.StackStatus.UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"></a>

---


##### `UPDATE_COMPLETE` <a name="UPDATE_COMPLETE" id="cdk-ssm-document.StackStatus.UPDATE_COMPLETE"></a>

---


##### `UPDATE_FAILED` <a name="UPDATE_FAILED" id="cdk-ssm-document.StackStatus.UPDATE_FAILED"></a>

---


##### `UPDATE_ROLLBACK_IN_PROGRESS` <a name="UPDATE_ROLLBACK_IN_PROGRESS" id="cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_IN_PROGRESS"></a>

---


##### `UPDATE_ROLLBACK_FAILED` <a name="UPDATE_ROLLBACK_FAILED" id="cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_FAILED"></a>

---


##### `UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS` <a name="UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" id="cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"></a>

---


##### `UPDATE_ROLLBACK_COMPLETE` <a name="UPDATE_ROLLBACK_COMPLETE" id="cdk-ssm-document.StackStatus.UPDATE_ROLLBACK_COMPLETE"></a>

---


##### `REVIEW_IN_PROGRESS` <a name="REVIEW_IN_PROGRESS" id="cdk-ssm-document.StackStatus.REVIEW_IN_PROGRESS"></a>

---


##### `IMPORT_IN_PROGRESS` <a name="IMPORT_IN_PROGRESS" id="cdk-ssm-document.StackStatus.IMPORT_IN_PROGRESS"></a>

---


##### `IMPORT_COMPLETE` <a name="IMPORT_COMPLETE" id="cdk-ssm-document.StackStatus.IMPORT_COMPLETE"></a>

---


##### `IMPORT_ROLLBACK_IN_PROGRESS` <a name="IMPORT_ROLLBACK_IN_PROGRESS" id="cdk-ssm-document.StackStatus.IMPORT_ROLLBACK_IN_PROGRESS"></a>

---


##### `IMPORT_ROLLBACK_FAILED` <a name="IMPORT_ROLLBACK_FAILED" id="cdk-ssm-document.StackStatus.IMPORT_ROLLBACK_FAILED"></a>

---


##### `IMPORT_ROLLBACK_COMPLETE` <a name="IMPORT_ROLLBACK_COMPLETE" id="cdk-ssm-document.StackStatus.IMPORT_ROLLBACK_COMPLETE"></a>

---

