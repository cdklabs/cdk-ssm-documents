# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproveStep <a name="ApproveStep" id="cdk-ssm-documents.ApproveStep"></a>

AutomationStep implementation for aws:approve https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-approve.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ApproveStep.Initializer"></a>

```typescript
import { ApproveStep } from 'cdk-ssm-documents'

new ApproveStep(scope: Construct, id: string, props: ApproveStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ApproveStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.ApproveStepProps">ApproveStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.ApproveStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.ApproveStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.ApproveStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.ApproveStepProps">ApproveStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ApproveStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.ApproveStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.ApproveStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.ApproveStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.ApproveStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.ApproveStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.ApproveStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.ApproveStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.ApproveStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.ApproveStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.ApproveStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.ApproveStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ApproveStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.ApproveStep.isConstruct"></a>

```typescript
import { ApproveStep } from 'cdk-ssm-documents'

ApproveStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.ApproveStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.approvers">approvers</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.message">message</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.minRequiredApprovals">minRequiredApprovals</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.notificationArn">notificationArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.ApproveStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.ApproveStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.ApproveStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.ApproveStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.ApproveStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ApproveStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.ApproveStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.ApproveStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ApproveStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ApproveStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ApproveStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.ApproveStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.ApproveStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="cdk-ssm-documents.ApproveStep.property.approvers"></a>

```typescript
public readonly approvers: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `message`<sup>Optional</sup> <a name="message" id="cdk-ssm-documents.ApproveStep.property.message"></a>

```typescript
public readonly message: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `minRequiredApprovals`<sup>Optional</sup> <a name="minRequiredApprovals" id="cdk-ssm-documents.ApproveStep.property.minRequiredApprovals"></a>

```typescript
public readonly minRequiredApprovals: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

---

##### `notificationArn`<sup>Optional</sup> <a name="notificationArn" id="cdk-ssm-documents.ApproveStep.property.notificationArn"></a>

```typescript
public readonly notificationArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApproveStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.ApproveStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.ApproveStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### AssertAwsResourceStep <a name="AssertAwsResourceStep" id="cdk-ssm-documents.AssertAwsResourceStep"></a>

AutomationStep implementation of aws:assertAwsResourceProperty.

https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-assertAwsResourceProperty.html

#### Initializers <a name="Initializers" id="cdk-ssm-documents.AssertAwsResourceStep.Initializer"></a>

```typescript
import { AssertAwsResourceStep } from 'cdk-ssm-documents'

new AssertAwsResourceStep(scope: Construct, id: string, props: AssertAwsResourceStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps">AssertAwsResourceStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.AssertAwsResourceStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.AssertAwsResourceStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.AssertAwsResourceStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.AssertAwsResourceStepProps">AssertAwsResourceStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.listInputs">listInputs</a></code> | Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}"). |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.listOutputs">listOutputs</a></code> | There are no outputs for this step. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.AssertAwsResourceStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.AssertAwsResourceStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}").

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.AssertAwsResourceStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

There are no outputs for this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.AssertAwsResourceStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.AssertAwsResourceStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.AssertAwsResourceStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.AssertAwsResourceStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.AssertAwsResourceStep.isConstruct"></a>

```typescript
import { AssertAwsResourceStep } from 'cdk-ssm-documents'

AssertAwsResourceStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.AssertAwsResourceStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.apiParams">apiParams</a></code> | <code><a href="#cdk-ssm-documents.DictFormat">DictFormat</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-documents.Output">Output</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.selector">selector</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.AssertAwsResourceStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.AssertAwsResourceStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.AssertAwsResourceStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.AssertAwsResourceStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.AssertAwsResourceStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AssertAwsResourceStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.AssertAwsResourceStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.AssertAwsResourceStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.AssertAwsResourceStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.AssertAwsResourceStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.AssertAwsResourceStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.AssertAwsResourceStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.AssertAwsResourceStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-documents.AssertAwsResourceStep.property.apiParams"></a>

```typescript
public readonly apiParams: DictFormat;
```

- *Type:* <a href="#cdk-ssm-documents.DictFormat">DictFormat</a>

---

##### `javaScriptApi`<sup>Required</sup> <a name="javaScriptApi" id="cdk-ssm-documents.AssertAwsResourceStep.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-documents.AssertAwsResourceStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-documents.Output">Output</a>[]

---

##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-documents.AssertAwsResourceStep.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.AssertAwsResourceStep.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-documents.AssertAwsResourceStep.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-documents.AssertAwsResourceStep.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.AssertAwsResourceStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.AssertAwsResourceStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### AutomationDocument <a name="AutomationDocument" id="cdk-ssm-documents.AutomationDocument"></a>

The AutomationDocuemnt used to both build the SSM Automation yaml/json and to use in simulation.

The AutomationDocument will delegate execution responsibility to the AutomationSteps that it receives.
The SsmDocument parent class contains methods to runSimulation() as well as print().

#### Initializers <a name="Initializers" id="cdk-ssm-documents.AutomationDocument.Initializer"></a>

```typescript
import { AutomationDocument } from 'cdk-ssm-documents'

new AutomationDocument(scope: Construct, id: string, props: AutomationDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.AutomationDocumentProps">AutomationDocumentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.AutomationDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.AutomationDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.AutomationDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentProps">AutomationDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.AutomationDocument.documentType">documentType</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-documents.AutomationDocument.addStep">addStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.collectedSteps">collectedSteps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.AutomationDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `documentType` <a name="documentType" id="cdk-ssm-documents.AutomationDocument.documentType"></a>

```typescript
public documentType(): string
```

##### `print` <a name="print" id="cdk-ssm-documents.AutomationDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `addStep` <a name="addStep" id="cdk-ssm-documents.AutomationDocument.addStep"></a>

```typescript
public addStep(component: IAutomationComponent): void
```

###### `component`<sup>Required</sup> <a name="component" id="cdk-ssm-documents.AutomationDocument.addStep.parameter.component"></a>

- *Type:* <a href="#cdk-ssm-documents.IAutomationComponent">IAutomationComponent</a>

---

##### `collectedSteps` <a name="collectedSteps" id="cdk-ssm-documents.AutomationDocument.collectedSteps"></a>

```typescript
public collectedSteps(): AutomationStep[]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.AutomationDocument.isConstruct"></a>

```typescript
import { AutomationDocument } from 'cdk-ssm-documents'

AutomationDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.AutomationDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-documents.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationDocument.property.builder">builder</a></code> | <code><a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.AutomationDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-documents.AutomationDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-documents.AutomationDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-documents.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-documents.AutomationDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-documents.AutomationDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.AutomationDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-documents.AutomationDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-documents.AutomationDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `builder`<sup>Required</sup> <a name="builder" id="cdk-ssm-documents.AutomationDocument.property.builder"></a>

```typescript
public readonly builder: AutomationDocumentBuilder;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---


### AutomationStep <a name="AutomationStep" id="cdk-ssm-documents.AutomationStep"></a>

- *Implements:* <a href="#cdk-ssm-documents.IAutomationComponent">IAutomationComponent</a>

Parent class for AutomationSteps.

These steps are using in an AutomationDocument.
You can instantiate steps using the AutomationBuilder for convenience.
You can use these steps to simulate their execution (mimics the SSM run) AND to build their yaml/json declaration.
Control flow of the subsequent step is determined by the currently executing step.
The flow of the execution therefore follows a chain-of-responsibility pattern.
The inputs received into a step AND the outputs of previous steps are merged to form inputs of subsequent steps.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.AutomationStep.Initializer"></a>

```typescript
import { AutomationStep } from 'cdk-ssm-documents'

new AutomationStep(scope: Construct, id: string, props: AutomationStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.AutomationStepProps">AutomationStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.AutomationStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.AutomationStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.AutomationStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationStepProps">AutomationStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.AutomationStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.AutomationStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.AutomationStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.AutomationStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.AutomationStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.AutomationStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.AutomationStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.AutomationStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.AutomationStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.AutomationStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.AutomationStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.AutomationStep.isConstruct"></a>

```typescript
import { AutomationStep } from 'cdk-ssm-documents'

AutomationStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.AutomationStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.AutomationStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.AutomationStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.AutomationStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.AutomationStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.AutomationStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AutomationStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.AutomationStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.AutomationStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.AutomationStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.AutomationStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.AutomationStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.AutomationStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.AutomationStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AutomationStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.AutomationStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.AutomationStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### AwsApiStep <a name="AwsApiStep" id="cdk-ssm-documents.AwsApiStep"></a>

AutomationStep implementation of aws:executeAwsApi.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.AwsApiStep.Initializer"></a>

```typescript
import { AwsApiStep } from 'cdk-ssm-documents'

new AwsApiStep(scope: Construct, id: string, props: AwsApiStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AwsApiStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.AwsApiStepProps">AwsApiStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.AwsApiStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.AwsApiStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.AwsApiStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.AwsApiStepProps">AwsApiStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AwsApiStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.AwsApiStep.listInputs">listInputs</a></code> | Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}"). |
| <code><a href="#cdk-ssm-documents.AwsApiStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.AwsApiStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.AwsApiStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.AwsApiStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.AwsApiStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}").

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.AwsApiStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.AwsApiStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.AwsApiStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.AwsApiStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.AwsApiStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AwsApiStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.AwsApiStep.isConstruct"></a>

```typescript
import { AwsApiStep } from 'cdk-ssm-documents'

AwsApiStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.AwsApiStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.apiParams">apiParams</a></code> | <code><a href="#cdk-ssm-documents.DictFormat">DictFormat</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-documents.Output">Output</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.AwsApiStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.AwsApiStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.AwsApiStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.AwsApiStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.AwsApiStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AwsApiStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.AwsApiStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.AwsApiStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.AwsApiStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.AwsApiStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.AwsApiStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.AwsApiStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.AwsApiStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-documents.AwsApiStep.property.apiParams"></a>

```typescript
public readonly apiParams: DictFormat;
```

- *Type:* <a href="#cdk-ssm-documents.DictFormat">DictFormat</a>

---

##### `javaScriptApi`<sup>Required</sup> <a name="javaScriptApi" id="cdk-ssm-documents.AwsApiStep.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-documents.AwsApiStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-documents.Output">Output</a>[]

---

##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-documents.AwsApiStep.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.AwsApiStep.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.AwsApiStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.AwsApiStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.AwsApiStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### BranchStep <a name="BranchStep" id="cdk-ssm-documents.BranchStep"></a>

AutomationStep implementation of aws:branch https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.BranchStep.Initializer"></a>

```typescript
import { BranchStep } from 'cdk-ssm-documents'

new BranchStep(scope: Construct, id: string, props: BranchStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.BranchStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.BranchStepProps">BranchStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.BranchStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.BranchStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.BranchStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.BranchStepProps">BranchStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.BranchStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.BranchStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.BranchStep.listOutputs">listOutputs</a></code> | There is no output from branch steps. |
| <code><a href="#cdk-ssm-documents.BranchStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.BranchStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.BranchStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.BranchStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.BranchStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

There is no output from branch steps.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.BranchStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.BranchStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.BranchStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.BranchStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.BranchStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.BranchStep.isConstruct"></a>

```typescript
import { BranchStep } from 'cdk-ssm-documents'

BranchStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.BranchStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.BranchStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.BranchStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.choices">choices</a></code> | <code><a href="#cdk-ssm-documents.Choice">Choice</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.defaultStepName">defaultStepName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.BranchStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.BranchStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.BranchStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.BranchStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.BranchStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.BranchStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.BranchStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.BranchStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.BranchStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.BranchStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.BranchStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.BranchStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.BranchStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `choices`<sup>Required</sup> <a name="choices" id="cdk-ssm-documents.BranchStep.property.choices"></a>

```typescript
public readonly choices: Choice[];
```

- *Type:* <a href="#cdk-ssm-documents.Choice">Choice</a>[]

---

##### `defaultStepName`<sup>Optional</sup> <a name="defaultStepName" id="cdk-ssm-documents.BranchStep.property.defaultStepName"></a>

```typescript
public readonly defaultStepName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.BranchStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BranchStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.BranchStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.BranchStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### ChangeInstanceStateStep <a name="ChangeInstanceStateStep" id="cdk-ssm-documents.ChangeInstanceStateStep"></a>

AutomationStep implemenation for aws:changeInstanceState https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-changestate.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ChangeInstanceStateStep.Initializer"></a>

```typescript
import { ChangeInstanceStateStep } from 'cdk-ssm-documents'

new ChangeInstanceStateStep(scope: Construct, id: string, props: ChangeInstanceStateStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps">ChangeInstanceStateStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.ChangeInstanceStateStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.ChangeInstanceStateStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.ChangeInstanceStateStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.ChangeInstanceStateStepProps">ChangeInstanceStateStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.listOutputs">listOutputs</a></code> | This step has no outputs. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.ChangeInstanceStateStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.ChangeInstanceStateStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.ChangeInstanceStateStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

This step has no outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.ChangeInstanceStateStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.ChangeInstanceStateStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.ChangeInstanceStateStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.ChangeInstanceStateStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.ChangeInstanceStateStep.isConstruct"></a>

```typescript
import { ChangeInstanceStateStep } from 'cdk-ssm-documents'

ChangeInstanceStateStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.ChangeInstanceStateStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.desiredState">desiredState</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.instanceIds">instanceIds</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.checkStateOnly">checkStateOnly</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.force">force</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.ChangeInstanceStateStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.ChangeInstanceStateStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.ChangeInstanceStateStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.ChangeInstanceStateStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.ChangeInstanceStateStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ChangeInstanceStateStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.ChangeInstanceStateStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.ChangeInstanceStateStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ChangeInstanceStateStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ChangeInstanceStateStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ChangeInstanceStateStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.ChangeInstanceStateStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.ChangeInstanceStateStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="cdk-ssm-documents.ChangeInstanceStateStep.property.desiredState"></a>

```typescript
public readonly desiredState: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="cdk-ssm-documents.ChangeInstanceStateStep.property.instanceIds"></a>

```typescript
public readonly instanceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-documents.ChangeInstanceStateStep.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `checkStateOnly`<sup>Optional</sup> <a name="checkStateOnly" id="cdk-ssm-documents.ChangeInstanceStateStep.property.checkStateOnly"></a>

```typescript
public readonly checkStateOnly: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

##### `force`<sup>Optional</sup> <a name="force" id="cdk-ssm-documents.ChangeInstanceStateStep.property.force"></a>

```typescript
public readonly force: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.ChangeInstanceStateStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.ChangeInstanceStateStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CommandDocument <a name="CommandDocument" id="cdk-ssm-documents.CommandDocument"></a>

https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html The CommandDocument will delegate execution responsibility to the CammandSteps that it receives. The SsmDocument parent class contains methods to runSimulation() as well as print().

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CommandDocument.Initializer"></a>

```typescript
import { CommandDocument } from 'cdk-ssm-documents'

new CommandDocument(scope: Construct, id: string, props: CommandDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CommandDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.CommandDocumentProps">CommandDocumentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CommandDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CommandDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.CommandDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentProps">CommandDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CommandDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CommandDocument.documentType">documentType</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-documents.CommandDocument.addStep">addStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.collectedSteps">collectedSteps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CommandDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `documentType` <a name="documentType" id="cdk-ssm-documents.CommandDocument.documentType"></a>

```typescript
public documentType(): string
```

##### `print` <a name="print" id="cdk-ssm-documents.CommandDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `addStep` <a name="addStep" id="cdk-ssm-documents.CommandDocument.addStep"></a>

```typescript
public addStep(component: ICommandComponent): void
```

###### `component`<sup>Required</sup> <a name="component" id="cdk-ssm-documents.CommandDocument.addStep.parameter.component"></a>

- *Type:* <a href="#cdk-ssm-documents.ICommandComponent">ICommandComponent</a>

---

##### `collectedSteps` <a name="collectedSteps" id="cdk-ssm-documents.CommandDocument.collectedSteps"></a>

```typescript
public collectedSteps(): CommandStep[]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CommandDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CommandDocument.isConstruct"></a>

```typescript
import { CommandDocument } from 'cdk-ssm-documents'

CommandDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CommandDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-documents.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandDocument.property.builder">builder</a></code> | <code><a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CommandDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-documents.CommandDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-documents.CommandDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-documents.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-documents.CommandDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-documents.CommandDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.CommandDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-documents.CommandDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-documents.CommandDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `builder`<sup>Required</sup> <a name="builder" id="cdk-ssm-documents.CommandDocument.property.builder"></a>

```typescript
public readonly builder: CommandDocumentBuilder;
```

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---


### CommandStep <a name="CommandStep" id="cdk-ssm-documents.CommandStep"></a>

- *Implements:* <a href="#cdk-ssm-documents.ICommandComponent">ICommandComponent</a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CommandStep.Initializer"></a>

```typescript
import { CommandStep } from 'cdk-ssm-documents'

new CommandStep(scope: Construct, id: string, props: CommandStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CommandStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.CommandStepProps">CommandStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CommandStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CommandStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.CommandStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandStepProps">CommandStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CommandStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CommandStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.CommandStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.CommandStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.CommandStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CommandStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.CommandStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.CommandStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.CommandStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.CommandStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.CommandStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.CommandStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CommandStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CommandStep.isConstruct"></a>

```typescript
import { CommandStep } from 'cdk-ssm-documents'

CommandStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CommandStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CommandStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.CommandStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CommandStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.CommandStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.CommandStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.CommandStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.CommandStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CommandStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.CommandStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.CommandStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.CommandStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.CommandStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.CommandStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.CommandStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.CommandStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.CommandStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---


### CompositeAutomationStep <a name="CompositeAutomationStep" id="cdk-ssm-documents.CompositeAutomationStep"></a>

- *Implements:* <a href="#cdk-ssm-documents.IAutomationComponent">IAutomationComponent</a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CompositeAutomationStep.Initializer"></a>

```typescript
import { CompositeAutomationStep } from 'cdk-ssm-documents'

new CompositeAutomationStep(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeAutomationStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CompositeAutomationStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CompositeAutomationStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CompositeAutomationStep.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeAutomationStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CompositeAutomationStep.addToDocument">addToDocument</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CompositeAutomationStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.CompositeAutomationStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.CompositeAutomationStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeAutomationStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CompositeAutomationStep.isConstruct"></a>

```typescript
import { CompositeAutomationStep } from 'cdk-ssm-documents'

CompositeAutomationStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CompositeAutomationStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeAutomationStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CompositeAutomationStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CompositeCommandStep <a name="CompositeCommandStep" id="cdk-ssm-documents.CompositeCommandStep"></a>

- *Implements:* <a href="#cdk-ssm-documents.ICommandComponent">ICommandComponent</a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CompositeCommandStep.Initializer"></a>

```typescript
import { CompositeCommandStep } from 'cdk-ssm-documents'

new CompositeCommandStep(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeCommandStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CompositeCommandStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CompositeCommandStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CompositeCommandStep.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeCommandStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CompositeCommandStep.addToDocument">addToDocument</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CompositeCommandStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.CompositeCommandStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.CompositeCommandStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeCommandStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CompositeCommandStep.isConstruct"></a>

```typescript
import { CompositeCommandStep } from 'cdk-ssm-documents'

CompositeCommandStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CompositeCommandStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CompositeCommandStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CompositeCommandStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ConfigurePackageStep <a name="ConfigurePackageStep" id="cdk-ssm-documents.ConfigurePackageStep"></a>

AutomationStep implemenation for aws:configurePackage https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-updateagent.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ConfigurePackageStep.Initializer"></a>

```typescript
import { ConfigurePackageStep } from 'cdk-ssm-documents'

new ConfigurePackageStep(scope: Construct, id: string, props: ConfigurePackageStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps">ConfigurePackageStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.ConfigurePackageStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.ConfigurePackageStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.ConfigurePackageStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.ConfigurePackageStepProps">ConfigurePackageStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.listInputs">listInputs</a></code> | Inputs required for this command include ... |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.ConfigurePackageStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.ConfigurePackageStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command include ...

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.ConfigurePackageStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.ConfigurePackageStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.ConfigurePackageStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.ConfigurePackageStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.ConfigurePackageStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.ConfigurePackageStep.isConstruct"></a>

```typescript
import { ConfigurePackageStep } from 'cdk-ssm-documents'

ConfigurePackageStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.ConfigurePackageStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.packageAction">packageAction</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.packageName">packageName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.additionalArguments">additionalArguments</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.installationType">installationType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStep.property.version">version</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.ConfigurePackageStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.ConfigurePackageStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.ConfigurePackageStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.ConfigurePackageStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.ConfigurePackageStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ConfigurePackageStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.ConfigurePackageStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.ConfigurePackageStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.ConfigurePackageStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.ConfigurePackageStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.ConfigurePackageStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.ConfigurePackageStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.ConfigurePackageStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.ConfigurePackageStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---

##### `packageAction`<sup>Required</sup> <a name="packageAction" id="cdk-ssm-documents.ConfigurePackageStep.property.packageAction"></a>

```typescript
public readonly packageAction: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="cdk-ssm-documents.ConfigurePackageStep.property.packageName"></a>

```typescript
public readonly packageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `additionalArguments`<sup>Optional</sup> <a name="additionalArguments" id="cdk-ssm-documents.ConfigurePackageStep.property.additionalArguments"></a>

```typescript
public readonly additionalArguments: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

---

##### `installationType`<sup>Optional</sup> <a name="installationType" id="cdk-ssm-documents.ConfigurePackageStep.property.installationType"></a>

```typescript
public readonly installationType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk-ssm-documents.ConfigurePackageStep.property.version"></a>

```typescript
public readonly version: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### CopyImageStep <a name="CopyImageStep" id="cdk-ssm-documents.CopyImageStep"></a>

AutomationStep implemenation for aws:copyImage https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-copyimage.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CopyImageStep.Initializer"></a>

```typescript
import { CopyImageStep } from 'cdk-ssm-documents'

new CopyImageStep(scope: Construct, id: string, props: CopyImageStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CopyImageStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.CopyImageStepProps">CopyImageStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CopyImageStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CopyImageStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.CopyImageStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.CopyImageStepProps">CopyImageStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CopyImageStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CopyImageStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.CopyImageStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.CopyImageStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.CopyImageStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CopyImageStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.CopyImageStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.CopyImageStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.CopyImageStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.CopyImageStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.CopyImageStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.CopyImageStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CopyImageStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CopyImageStep.isConstruct"></a>

```typescript
import { CopyImageStep } from 'cdk-ssm-documents'

CopyImageStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CopyImageStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.sourceImageId">sourceImageId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.sourceRegion">sourceRegion</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.encrypted">encrypted</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.kmsKeyId">kmsKeyId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CopyImageStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.CopyImageStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.CopyImageStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.CopyImageStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.CopyImageStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CopyImageStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.CopyImageStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.CopyImageStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CopyImageStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CopyImageStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CopyImageStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.CopyImageStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.CopyImageStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-documents.CopyImageStep.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="cdk-ssm-documents.CopyImageStep.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="cdk-ssm-documents.CopyImageStep.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-documents.CopyImageStep.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="cdk-ssm-documents.CopyImageStep.property.encrypted"></a>

```typescript
public readonly encrypted: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-documents.CopyImageStep.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="cdk-ssm-documents.CopyImageStep.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CopyImageStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.CopyImageStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.CopyImageStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CreateImageStep <a name="CreateImageStep" id="cdk-ssm-documents.CreateImageStep"></a>

AutomationStep implemenation for aws:createImage https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-create.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CreateImageStep.Initializer"></a>

```typescript
import { CreateImageStep } from 'cdk-ssm-documents'

new CreateImageStep(scope: Construct, id: string, props: CreateImageStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateImageStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.CreateImageStepProps">CreateImageStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CreateImageStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CreateImageStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.CreateImageStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.CreateImageStepProps">CreateImageStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CreateImageStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CreateImageStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.CreateImageStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.CreateImageStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.CreateImageStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CreateImageStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.CreateImageStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.CreateImageStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.CreateImageStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.CreateImageStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.CreateImageStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.CreateImageStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CreateImageStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CreateImageStep.isConstruct"></a>

```typescript
import { CreateImageStep } from 'cdk-ssm-documents'

CreateImageStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CreateImageStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.instanceId">instanceId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.noReboot">noReboot</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CreateImageStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.CreateImageStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.CreateImageStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.CreateImageStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.CreateImageStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CreateImageStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.CreateImageStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.CreateImageStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CreateImageStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CreateImageStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CreateImageStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.CreateImageStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.CreateImageStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-documents.CreateImageStep.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-ssm-documents.CreateImageStep.property.instanceId"></a>

```typescript
public readonly instanceId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-documents.CreateImageStep.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-documents.CreateImageStep.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `noReboot`<sup>Optional</sup> <a name="noReboot" id="cdk-ssm-documents.CreateImageStep.property.noReboot"></a>

```typescript
public readonly noReboot: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateImageStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.CreateImageStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.CreateImageStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CreateStackStep <a name="CreateStackStep" id="cdk-ssm-documents.CreateStackStep"></a>

AutomationStep implementation for aws:createStack https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createstack.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CreateStackStep.Initializer"></a>

```typescript
import { CreateStackStep } from 'cdk-ssm-documents'

new CreateStackStep(scope: Construct, id: string, props: CreateStackStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateStackStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.CreateStackStepProps">CreateStackStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CreateStackStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CreateStackStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.CreateStackStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.CreateStackStepProps">CreateStackStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CreateStackStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CreateStackStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.CreateStackStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.CreateStackStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.CreateStackStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CreateStackStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.CreateStackStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.CreateStackStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.CreateStackStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.CreateStackStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.CreateStackStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.CreateStackStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CreateStackStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CreateStackStep.isConstruct"></a>

```typescript
import { CreateStackStep } from 'cdk-ssm-documents'

CreateStackStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CreateStackStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.stackName">stackName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.capabilities">capabilities</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.clientRequestToken">clientRequestToken</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.notificationARNs">notificationARNs</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.onStackFailure">onStackFailure</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.resourceTypes">resourceTypes</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.stackPolicyBody">stackPolicyBody</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.stackPolicyUrl">stackPolicyUrl</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.tags">tags</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.templateBody">templateBody</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.templateUrl">templateUrl</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CreateStackStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.CreateStackStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.CreateStackStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.CreateStackStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.CreateStackStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CreateStackStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.CreateStackStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.CreateStackStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CreateStackStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CreateStackStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CreateStackStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.CreateStackStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.CreateStackStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-ssm-documents.CreateStackStep.property.stackName"></a>

```typescript
public readonly stackName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="cdk-ssm-documents.CreateStackStep.property.capabilities"></a>

```typescript
public readonly capabilities: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-ssm-documents.CreateStackStep.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `notificationARNs`<sup>Optional</sup> <a name="notificationARNs" id="cdk-ssm-documents.CreateStackStep.property.notificationARNs"></a>

```typescript
public readonly notificationARNs: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `onStackFailure`<sup>Optional</sup> <a name="onStackFailure" id="cdk-ssm-documents.CreateStackStep.property.onStackFailure"></a>

```typescript
public readonly onStackFailure: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-documents.CreateStackStep.property.parameters"></a>

```typescript
public readonly parameters: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="cdk-ssm-documents.CreateStackStep.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-documents.CreateStackStep.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `stackPolicyBody`<sup>Optional</sup> <a name="stackPolicyBody" id="cdk-ssm-documents.CreateStackStep.property.stackPolicyBody"></a>

```typescript
public readonly stackPolicyBody: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `stackPolicyUrl`<sup>Optional</sup> <a name="stackPolicyUrl" id="cdk-ssm-documents.CreateStackStep.property.stackPolicyUrl"></a>

```typescript
public readonly stackPolicyUrl: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-documents.CreateStackStep.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="cdk-ssm-documents.CreateStackStep.property.templateBody"></a>

```typescript
public readonly templateBody: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="cdk-ssm-documents.CreateStackStep.property.templateUrl"></a>

```typescript
public readonly templateUrl: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="cdk-ssm-documents.CreateStackStep.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateStackStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.CreateStackStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.CreateStackStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### CreateTagsStep <a name="CreateTagsStep" id="cdk-ssm-documents.CreateTagsStep"></a>

AutomationStep implemenation for aws:createTags https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-createtag.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CreateTagsStep.Initializer"></a>

```typescript
import { CreateTagsStep } from 'cdk-ssm-documents'

new CreateTagsStep(scope: Construct, id: string, props: CreateTagsStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.CreateTagsStepProps">CreateTagsStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.CreateTagsStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.CreateTagsStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.CreateTagsStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.CreateTagsStepProps">CreateTagsStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.listOutputs">listOutputs</a></code> | This step has no outputs. |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.CreateTagsStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.CreateTagsStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.CreateTagsStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

This step has no outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.CreateTagsStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.CreateTagsStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.CreateTagsStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.CreateTagsStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.CreateTagsStep.isConstruct"></a>

```typescript
import { CreateTagsStep } from 'cdk-ssm-documents'

CreateTagsStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.CreateTagsStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.resourceIds">resourceIds</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.tags">tags</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.resourceType">resourceType</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.CreateTagsStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.CreateTagsStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.CreateTagsStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.CreateTagsStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.CreateTagsStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CreateTagsStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.CreateTagsStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.CreateTagsStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CreateTagsStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CreateTagsStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CreateTagsStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.CreateTagsStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.CreateTagsStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="cdk-ssm-documents.CreateTagsStep.property.resourceIds"></a>

```typescript
public readonly resourceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-ssm-documents.CreateTagsStep.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="cdk-ssm-documents.CreateTagsStep.property.resourceType"></a>

```typescript
public readonly resourceType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CreateTagsStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.CreateTagsStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.CreateTagsStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### DeleteImageStep <a name="DeleteImageStep" id="cdk-ssm-documents.DeleteImageStep"></a>

AutomationStep implementation for aws:deleteImage https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-delete.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.DeleteImageStep.Initializer"></a>

```typescript
import { DeleteImageStep } from 'cdk-ssm-documents'

new DeleteImageStep(scope: Construct, id: string, props: DeleteImageStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.DeleteImageStepProps">DeleteImageStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.DeleteImageStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.DeleteImageStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.DeleteImageStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.DeleteImageStepProps">DeleteImageStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.listOutputs">listOutputs</a></code> | This step has no outputs. |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.DeleteImageStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.DeleteImageStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.DeleteImageStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

This step has no outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.DeleteImageStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.DeleteImageStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.DeleteImageStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.DeleteImageStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.DeleteImageStep.isConstruct"></a>

```typescript
import { DeleteImageStep } from 'cdk-ssm-documents'

DeleteImageStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.DeleteImageStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.DeleteImageStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.DeleteImageStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.DeleteImageStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.DeleteImageStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.DeleteImageStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.DeleteImageStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.DeleteImageStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.DeleteImageStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.DeleteImageStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.DeleteImageStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.DeleteImageStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.DeleteImageStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.DeleteImageStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-documents.DeleteImageStep.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteImageStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.DeleteImageStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.DeleteImageStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### DeleteStackStep <a name="DeleteStackStep" id="cdk-ssm-documents.DeleteStackStep"></a>

AutomationStep implemenation for aws:deleteStack https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-deletestack.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.DeleteStackStep.Initializer"></a>

```typescript
import { DeleteStackStep } from 'cdk-ssm-documents'

new DeleteStackStep(scope: Construct, id: string, props: DeleteStackStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.DeleteStackStepProps">DeleteStackStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.DeleteStackStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.DeleteStackStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.DeleteStackStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.DeleteStackStepProps">DeleteStackStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.listInputs">listInputs</a></code> | The input required for this step is the stackNameVariable. |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.listOutputs">listOutputs</a></code> | No outputs emitted from Delete Stack step. |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.DeleteStackStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.DeleteStackStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

The input required for this step is the stackNameVariable.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.DeleteStackStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Delete Stack step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.DeleteStackStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.DeleteStackStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.DeleteStackStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.DeleteStackStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.DeleteStackStep.isConstruct"></a>

```typescript
import { DeleteStackStep } from 'cdk-ssm-documents'

DeleteStackStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.DeleteStackStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.stackNameVariable">stackNameVariable</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.DeleteStackStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.DeleteStackStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.DeleteStackStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.DeleteStackStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.DeleteStackStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.DeleteStackStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.DeleteStackStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.DeleteStackStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.DeleteStackStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.DeleteStackStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.DeleteStackStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.DeleteStackStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.DeleteStackStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `stackNameVariable`<sup>Required</sup> <a name="stackNameVariable" id="cdk-ssm-documents.DeleteStackStep.property.stackNameVariable"></a>

```typescript
public readonly stackNameVariable: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-documents.DeleteStackStep.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DeleteStackStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.DeleteStackStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.DeleteStackStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### ExecuteScriptStep <a name="ExecuteScriptStep" id="cdk-ssm-documents.ExecuteScriptStep"></a>

AutomationStep implementation for aws:executeScript https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeScript.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ExecuteScriptStep.Initializer"></a>

```typescript
import { ExecuteScriptStep } from 'cdk-ssm-documents'

new ExecuteScriptStep(stage: Construct, id: string, props: ExecuteScriptStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.Initializer.parameter.stage">stage</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps">ExecuteScriptStepProps</a></code> | *No description.* |

---

##### `stage`<sup>Required</sup> <a name="stage" id="cdk-ssm-documents.ExecuteScriptStep.Initializer.parameter.stage"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.ExecuteScriptStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.ExecuteScriptStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.ExecuteScriptStepProps">ExecuteScriptStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.ExecuteScriptStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.ExecuteScriptStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.ExecuteScriptStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.ExecuteScriptStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.ExecuteScriptStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.ExecuteScriptStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.ExecuteScriptStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.getLanguage">getLanguage</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.ExecuteScriptStep.isConstruct"></a>

```typescript
import { ExecuteScriptStep } from 'cdk-ssm-documents'

ExecuteScriptStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.ExecuteScriptStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `getLanguage` <a name="getLanguage" id="cdk-ssm-documents.ExecuteScriptStep.getLanguage"></a>

```typescript
import { ExecuteScriptStep } from 'cdk-ssm-documents'

ExecuteScriptStep.getLanguage(runtime: string)
```

###### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-ssm-documents.ExecuteScriptStep.getLanguage.parameter.runtime"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.fullPathToCode">fullPathToCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.handlerName">handlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.language">language</a></code> | <code><a href="#cdk-ssm-documents.ScriptLanguage">ScriptLanguage</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-documents.Output">Output</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.ExecuteScriptStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.ExecuteScriptStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.ExecuteScriptStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.ExecuteScriptStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.ExecuteScriptStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ExecuteScriptStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.ExecuteScriptStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.ExecuteScriptStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ExecuteScriptStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ExecuteScriptStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ExecuteScriptStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.ExecuteScriptStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.ExecuteScriptStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `fullPathToCode`<sup>Required</sup> <a name="fullPathToCode" id="cdk-ssm-documents.ExecuteScriptStep.property.fullPathToCode"></a>

```typescript
public readonly fullPathToCode: string;
```

- *Type:* string

---

##### `handlerName`<sup>Required</sup> <a name="handlerName" id="cdk-ssm-documents.ExecuteScriptStep.property.handlerName"></a>

```typescript
public readonly handlerName: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.ExecuteScriptStep.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

##### `language`<sup>Required</sup> <a name="language" id="cdk-ssm-documents.ExecuteScriptStep.property.language"></a>

```typescript
public readonly language: ScriptLanguage;
```

- *Type:* <a href="#cdk-ssm-documents.ScriptLanguage">ScriptLanguage</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-documents.ExecuteScriptStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-documents.Output">Output</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.ExecuteScriptStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.ExecuteScriptStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### ExecuteStateMachineStep <a name="ExecuteStateMachineStep" id="cdk-ssm-documents.ExecuteStateMachineStep"></a>

AutomationStep implementation of [aws:executeStateMachine](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-executeStateMachine.html).

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ExecuteStateMachineStep.Initializer"></a>

```typescript
import { ExecuteStateMachineStep } from 'cdk-ssm-documents'

new ExecuteStateMachineStep(scope: Construct, id: string, props: ExecuteStateMachineStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps">ExecuteStateMachineStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.ExecuteStateMachineStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.ExecuteStateMachineStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.ExecuteStateMachineStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.ExecuteStateMachineStepProps">ExecuteStateMachineStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.listOutputs">listOutputs</a></code> | No outputs emitted from Delete Stack step. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.ExecuteStateMachineStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.ExecuteStateMachineStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.ExecuteStateMachineStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Delete Stack step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.ExecuteStateMachineStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.ExecuteStateMachineStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.ExecuteStateMachineStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.ExecuteStateMachineStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.ExecuteStateMachineStep.isConstruct"></a>

```typescript
import { ExecuteStateMachineStep } from 'cdk-ssm-documents'

ExecuteStateMachineStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.ExecuteStateMachineStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.stateMachineArn">stateMachineArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.executionName">executionName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.input">input</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.ExecuteStateMachineStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.ExecuteStateMachineStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.ExecuteStateMachineStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.ExecuteStateMachineStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.ExecuteStateMachineStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ExecuteStateMachineStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.ExecuteStateMachineStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.ExecuteStateMachineStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ExecuteStateMachineStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ExecuteStateMachineStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ExecuteStateMachineStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.ExecuteStateMachineStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.ExecuteStateMachineStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="cdk-ssm-documents.ExecuteStateMachineStep.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `executionName`<sup>Optional</sup> <a name="executionName" id="cdk-ssm-documents.ExecuteStateMachineStep.property.executionName"></a>

```typescript
public readonly executionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `input`<sup>Optional</sup> <a name="input" id="cdk-ssm-documents.ExecuteStateMachineStep.property.input"></a>

```typescript
public readonly input: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.ExecuteStateMachineStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.ExecuteStateMachineStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### HelloWorld <a name="HelloWorld" id="cdk-ssm-documents.HelloWorld"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HelloWorld.Initializer"></a>

```typescript
import { HelloWorld } from 'cdk-ssm-documents'

new HelloWorld(app: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HelloWorld.Initializer.parameter.app">app</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.HelloWorld.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `app`<sup>Required</sup> <a name="app" id="cdk-ssm-documents.HelloWorld.Initializer.parameter.app"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.HelloWorld.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HelloWorld.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.HelloWorld.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#cdk-ssm-documents.HelloWorld.exportValue">exportValue</a></code> | Create a CloudFormation Export for a value. |
| <code><a href="#cdk-ssm-documents.HelloWorld.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#cdk-ssm-documents.HelloWorld.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#cdk-ssm-documents.HelloWorld.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#cdk-ssm-documents.HelloWorld.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#cdk-ssm-documents.HelloWorld.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#cdk-ssm-documents.HelloWorld.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.HelloWorld.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="cdk-ssm-documents.HelloWorld.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="cdk-ssm-documents.HelloWorld.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="cdk-ssm-documents.HelloWorld.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="cdk-ssm-documents.HelloWorld.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="cdk-ssm-documents.HelloWorld.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="cdk-ssm-documents.HelloWorld.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
   stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
   remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
   will make sure the CloudFormation Export continues to exist while the relationship
   between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="cdk-ssm-documents.HelloWorld.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-ssm-documents.HelloWorld.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="cdk-ssm-documents.HelloWorld.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

   arn:{partition}:{service}:{region}:{account}:{resource}{sep}}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="cdk-ssm-documents.HelloWorld.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="cdk-ssm-documents.HelloWorld.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="cdk-ssm-documents.HelloWorld.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `renameLogicalId` <a name="renameLogicalId" id="cdk-ssm-documents.HelloWorld.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="cdk-ssm-documents.HelloWorld.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="cdk-ssm-documents.HelloWorld.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="cdk-ssm-documents.HelloWorld.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="cdk-ssm-documents.HelloWorld.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HelloWorld.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-ssm-documents.HelloWorld.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="cdk-ssm-documents.HelloWorld.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="cdk-ssm-documents.HelloWorld.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="cdk-ssm-documents.HelloWorld.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="cdk-ssm-documents.HelloWorld.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="cdk-ssm-documents.HelloWorld.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="cdk-ssm-documents.HelloWorld.toJsonString.parameter.space"></a>

- *Type:* number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HelloWorld.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ssm-documents.HelloWorld.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.HelloWorld.isConstruct"></a>

```typescript
import { HelloWorld } from 'cdk-ssm-documents'

HelloWorld.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.HelloWorld.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="cdk-ssm-documents.HelloWorld.isStack"></a>

```typescript
import { HelloWorld } from 'cdk-ssm-documents'

HelloWorld.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.HelloWorld.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk-ssm-documents.HelloWorld.of"></a>

```typescript
import { HelloWorld } from 'cdk-ssm-documents'

HelloWorld.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-ssm-documents.HelloWorld.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#cdk-ssm-documents.HelloWorld.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.HelloWorld.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="cdk-ssm-documents.HelloWorld.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
    either be a concerete account (e.g. `585695031111`) or the
    `Aws.accountId` token.
3. `Aws.accountId`, which represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="cdk-ssm-documents.HelloWorld.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="cdk-ssm-documents.HelloWorld.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="cdk-ssm-documents.HelloWorld.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="cdk-ssm-documents.HelloWorld.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.account` or `Aws.region`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="cdk-ssm-documents.HelloWorld.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="cdk-ssm-documents.HelloWorld.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="cdk-ssm-documents.HelloWorld.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="cdk-ssm-documents.HelloWorld.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="cdk-ssm-documents.HelloWorld.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="cdk-ssm-documents.HelloWorld.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
    either be a concerete region (e.g. `us-west-2`) or the `Aws.region`
    token.
3. `Aws.region`, which is represents the CloudFormation intrinsic reference
    `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="cdk-ssm-documents.HelloWorld.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-ssm-documents.HelloWorld.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.stackName` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdk-ssm-documents.HelloWorld.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-ssm-documents.HelloWorld.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="cdk-ssm-documents.HelloWorld.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="cdk-ssm-documents.HelloWorld.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="cdk-ssm-documents.HelloWorld.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="cdk-ssm-documents.HelloWorld.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---


### InvokeLambdaFunctionStep <a name="InvokeLambdaFunctionStep" id="cdk-ssm-documents.InvokeLambdaFunctionStep"></a>

AutomationStep implemenation for aws:invokeLambdaFunction https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-lamb.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.InvokeLambdaFunctionStep.Initializer"></a>

```typescript
import { InvokeLambdaFunctionStep } from 'cdk-ssm-documents'

new InvokeLambdaFunctionStep(scope: Construct, id: string, props: InvokeLambdaFunctionStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps">InvokeLambdaFunctionStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.InvokeLambdaFunctionStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.InvokeLambdaFunctionStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.InvokeLambdaFunctionStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps">InvokeLambdaFunctionStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.variables">variables</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.formatInputMap">formatInputMap</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.InvokeLambdaFunctionStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.InvokeLambdaFunctionStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.InvokeLambdaFunctionStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.InvokeLambdaFunctionStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.InvokeLambdaFunctionStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.InvokeLambdaFunctionStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.InvokeLambdaFunctionStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

##### `formatInputMap` <a name="formatInputMap" id="cdk-ssm-documents.InvokeLambdaFunctionStep.formatInputMap"></a>

```typescript
public formatInputMap(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.InvokeLambdaFunctionStep.isConstruct"></a>

```typescript
import { InvokeLambdaFunctionStep } from 'cdk-ssm-documents'

InvokeLambdaFunctionStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.InvokeLambdaFunctionStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.functionName">functionName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.clientContext">clientContext</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.invocationType">invocationType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.logType">logType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.payload">payload</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.qualifier">qualifier</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.functionName"></a>

```typescript
public readonly functionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `awsInvoker`<sup>Optional</sup> <a name="awsInvoker" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a>

---

##### `clientContext`<sup>Optional</sup> <a name="clientContext" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.clientContext"></a>

```typescript
public readonly clientContext: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.invocationType"></a>

```typescript
public readonly invocationType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `logType`<sup>Optional</sup> <a name="logType" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.logType"></a>

```typescript
public readonly logType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `payload`<sup>Optional</sup> <a name="payload" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.payload"></a>

```typescript
public readonly payload: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.qualifier"></a>

```typescript
public readonly qualifier: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.InvokeLambdaFunctionStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### InvokeWebhookStep <a name="InvokeWebhookStep" id="cdk-ssm-documents.InvokeWebhookStep"></a>

AutomationStep implementation for [aws:invokeWebhook](https://docs.aws.amazon.com/systems-manager/latest/userguide/invoke-webhook.html).

#### Initializers <a name="Initializers" id="cdk-ssm-documents.InvokeWebhookStep.Initializer"></a>

```typescript
import { InvokeWebhookStep } from 'cdk-ssm-documents'

new InvokeWebhookStep(scope: Construct, id: string, props: InvokeWebhookStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps">InvokeWebhookStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.InvokeWebhookStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.InvokeWebhookStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.InvokeWebhookStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.InvokeWebhookStepProps">InvokeWebhookStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.InvokeWebhookStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.InvokeWebhookStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.InvokeWebhookStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.InvokeWebhookStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.InvokeWebhookStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.InvokeWebhookStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.InvokeWebhookStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.InvokeWebhookStep.isConstruct"></a>

```typescript
import { InvokeWebhookStep } from 'cdk-ssm-documents'

InvokeWebhookStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.InvokeWebhookStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.integrationName">integrationName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.body">body</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.InvokeWebhookStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.InvokeWebhookStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.InvokeWebhookStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.InvokeWebhookStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.InvokeWebhookStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.InvokeWebhookStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.InvokeWebhookStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.InvokeWebhookStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.InvokeWebhookStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.InvokeWebhookStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.InvokeWebhookStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.InvokeWebhookStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.InvokeWebhookStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="cdk-ssm-documents.InvokeWebhookStep.property.integrationName"></a>

```typescript
public readonly integrationName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk-ssm-documents.InvokeWebhookStep.property.body"></a>

```typescript
public readonly body: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.InvokeWebhookStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.InvokeWebhookStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### PauseStep <a name="PauseStep" id="cdk-ssm-documents.PauseStep"></a>

AutomationStep implementation for aws:pause https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-pause.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.PauseStep.Initializer"></a>

```typescript
import { PauseStep } from 'cdk-ssm-documents'

new PauseStep(scope: Construct, id: string, props: AutomationStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.PauseStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.AutomationStepProps">AutomationStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.PauseStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.PauseStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.PauseStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationStepProps">AutomationStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.PauseStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.PauseStep.listInputs">listInputs</a></code> | No inputs required for Pause step. |
| <code><a href="#cdk-ssm-documents.PauseStep.listOutputs">listOutputs</a></code> | No outputs emitted from Pause step. |
| <code><a href="#cdk-ssm-documents.PauseStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.PauseStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.PauseStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.PauseStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

No inputs required for Pause step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.PauseStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Pause step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.PauseStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.PauseStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.PauseStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.PauseStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.PauseStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.PauseStep.isConstruct"></a>

```typescript
import { PauseStep } from 'cdk-ssm-documents'

PauseStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.PauseStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.PauseStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.PauseStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.PauseStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.PauseStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.PauseStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.PauseStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.PauseStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.PauseStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.PauseStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.PauseStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.PauseStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.PauseStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.PauseStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.PauseStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.PauseStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.PauseStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PauseStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.PauseStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.PauseStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### PsModuleStep <a name="PsModuleStep" id="cdk-ssm-documents.PsModuleStep"></a>

AutomationStep implemenation for aws:psmodule https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-psModule.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.PsModuleStep.Initializer"></a>

```typescript
import { PsModuleStep } from 'cdk-ssm-documents'

new PsModuleStep(scope: Construct, id: string, props: PsModuleStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.PsModuleStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.PsModuleStepProps">PsModuleStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.PsModuleStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.PsModuleStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.PsModuleStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.PsModuleStepProps">PsModuleStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.PsModuleStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.PsModuleStep.listInputs">listInputs</a></code> | Inputs required for this command includes both the runCommand variables and workingDirectory if provided. |
| <code><a href="#cdk-ssm-documents.PsModuleStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.PsModuleStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.PsModuleStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.PsModuleStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.PsModuleStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command includes both the runCommand variables and workingDirectory if provided.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.PsModuleStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.PsModuleStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.PsModuleStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.PsModuleStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.PsModuleStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.PsModuleStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.PsModuleStep.isConstruct"></a>

```typescript
import { PsModuleStep } from 'cdk-ssm-documents'

PsModuleStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.PsModuleStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.source">source</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.sourceHash">sourceHash</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStep.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.PsModuleStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.PsModuleStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.PsModuleStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.PsModuleStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.PsModuleStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.PsModuleStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.PsModuleStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.PsModuleStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.PsModuleStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.PsModuleStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.PsModuleStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.PsModuleStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.PsModuleStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.PsModuleStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-ssm-documents.PsModuleStep.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `runCommand`<sup>Optional</sup> <a name="runCommand" id="cdk-ssm-documents.PsModuleStep.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="cdk-ssm-documents.PsModuleStep.property.sourceHash"></a>

```typescript
public readonly sourceHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.PsModuleStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-documents.PsModuleStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### RebootInstanceAndWait <a name="RebootInstanceAndWait" id="cdk-ssm-documents.RebootInstanceAndWait"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.RebootInstanceAndWait.Initializer"></a>

```typescript
import { RebootInstanceAndWait } from 'cdk-ssm-documents'

new RebootInstanceAndWait(scope: Construct, id: string, instanceId: IStringVariable)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.Initializer.parameter.instanceId">instanceId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.RebootInstanceAndWait.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.RebootInstanceAndWait.Initializer.parameter.id"></a>

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-ssm-documents.RebootInstanceAndWait.Initializer.parameter.instanceId"></a>

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.addToDocument">addToDocument</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.RebootInstanceAndWait.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.RebootInstanceAndWait.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.RebootInstanceAndWait.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.RebootInstanceAndWait.isConstruct"></a>

```typescript
import { RebootInstanceAndWait } from 'cdk-ssm-documents'

RebootInstanceAndWait.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.RebootInstanceAndWait.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.property.describe">describe</a></code> | <code><a href="#cdk-ssm-documents.WaitForResourceStep">WaitForResourceStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RebootInstanceAndWait.property.reboot">reboot</a></code> | <code><a href="#cdk-ssm-documents.AwsApiStep">AwsApiStep</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.RebootInstanceAndWait.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `describe`<sup>Required</sup> <a name="describe" id="cdk-ssm-documents.RebootInstanceAndWait.property.describe"></a>

```typescript
public readonly describe: WaitForResourceStep;
```

- *Type:* <a href="#cdk-ssm-documents.WaitForResourceStep">WaitForResourceStep</a>

---

##### `reboot`<sup>Required</sup> <a name="reboot" id="cdk-ssm-documents.RebootInstanceAndWait.property.reboot"></a>

```typescript
public readonly reboot: AwsApiStep;
```

- *Type:* <a href="#cdk-ssm-documents.AwsApiStep">AwsApiStep</a>

---


### RunCommandStep <a name="RunCommandStep" id="cdk-ssm-documents.RunCommandStep"></a>

AutomationStep implementation of [aws:runCommand](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runcommand.html).

#### Initializers <a name="Initializers" id="cdk-ssm-documents.RunCommandStep.Initializer"></a>

```typescript
import { RunCommandStep } from 'cdk-ssm-documents'

new RunCommandStep(scope: Construct, id: string, props: RunCommandStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.RunCommandStepProps">RunCommandStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.RunCommandStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.RunCommandStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.RunCommandStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.RunCommandStepProps">RunCommandStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.RunCommandStep.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.RunCommandStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.RunCommandStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.RunCommandStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.RunCommandStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.RunCommandStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.RunCommandStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.RunCommandStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.RunCommandStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.RunCommandStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.RunCommandStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.RunCommandStep.isConstruct"></a>

```typescript
import { RunCommandStep } from 'cdk-ssm-documents'

RunCommandStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.RunCommandStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.documentName">documentName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.targets">targets</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a> \| <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.cloudWatchOutputConfig">cloudWatchOutputConfig</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.commandTimeoutSeconds">commandTimeoutSeconds</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.comment">comment</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.documentHash">documentHash</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.documentHashType">documentHashType</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.maxConcurrency">maxConcurrency</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.maxErrors">maxErrors</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.notificationConfig">notificationConfig</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.outputS3BucketName">outputS3BucketName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.serviceRoleArn">serviceRoleArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.RunCommandStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.RunCommandStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.RunCommandStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.RunCommandStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.RunCommandStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunCommandStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.RunCommandStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.RunCommandStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunCommandStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.RunCommandStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.RunCommandStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.RunCommandStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.RunCommandStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-documents.RunCommandStep.property.documentName"></a>

```typescript
public readonly documentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-ssm-documents.RunCommandStep.property.targets"></a>

```typescript
public readonly targets: IStringListVariable | IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a> | <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

---

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="cloudWatchOutputConfig" id="cdk-ssm-documents.RunCommandStep.property.cloudWatchOutputConfig"></a>

```typescript
public readonly cloudWatchOutputConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

---

##### `commandTimeoutSeconds`<sup>Optional</sup> <a name="commandTimeoutSeconds" id="cdk-ssm-documents.RunCommandStep.property.commandTimeoutSeconds"></a>

```typescript
public readonly commandTimeoutSeconds: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

---

##### `comment`<sup>Optional</sup> <a name="comment" id="cdk-ssm-documents.RunCommandStep.property.comment"></a>

```typescript
public readonly comment: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `documentHash`<sup>Optional</sup> <a name="documentHash" id="cdk-ssm-documents.RunCommandStep.property.documentHash"></a>

```typescript
public readonly documentHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `documentHashType`<sup>Optional</sup> <a name="documentHashType" id="cdk-ssm-documents.RunCommandStep.property.documentHashType"></a>

```typescript
public readonly documentHashType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="cdk-ssm-documents.RunCommandStep.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="cdk-ssm-documents.RunCommandStep.property.maxErrors"></a>

```typescript
public readonly maxErrors: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="cdk-ssm-documents.RunCommandStep.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="cdk-ssm-documents.RunCommandStep.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="cdk-ssm-documents.RunCommandStep.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-documents.RunCommandStep.property.parameters"></a>

```typescript
public readonly parameters: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-ssm-documents.RunCommandStep.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunCommandStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.RunCommandStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.RunCommandStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### RunInstanceStep <a name="RunInstanceStep" id="cdk-ssm-documents.RunInstanceStep"></a>

AutomationStep implemenation for aws:runInstance https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-runinstance.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.RunInstanceStep.Initializer"></a>

```typescript
import { RunInstanceStep } from 'cdk-ssm-documents'

new RunInstanceStep(scope: Construct, id: string, props: RunInstanceStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.RunInstanceStepProps">RunInstanceStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.RunInstanceStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.RunInstanceStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.RunInstanceStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.RunInstanceStepProps">RunInstanceStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.listInputs">listInputs</a></code> | Derives the inputs based on given variables. |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.RunInstanceStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.RunInstanceStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs based on given variables.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.RunInstanceStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.RunInstanceStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.RunInstanceStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.RunInstanceStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.RunInstanceStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.RunInstanceStep.isConstruct"></a>

```typescript
import { RunInstanceStep } from 'cdk-ssm-documents'

RunInstanceStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.RunInstanceStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.disableApiTermination">disableApiTermination</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.ebsOptimized">ebsOptimized</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.iamInstanceProfileName">iamInstanceProfileName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.instanceType">instanceType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.kernelId">kernelId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.keyName">keyName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.maxInstanceCount">maxInstanceCount</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.minInstanceCount">minInstanceCount</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.monitoring">monitoring</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.placement">placement</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.privateIpAddress">privateIpAddress</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.ramdiskId">ramdiskId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.securityGroupIds">securityGroupIds</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.securityGroups">securityGroups</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.subnetId">subnetId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.userData">userData</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.RunInstanceStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.RunInstanceStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.RunInstanceStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.RunInstanceStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.RunInstanceStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunInstanceStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.RunInstanceStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.RunInstanceStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunInstanceStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.RunInstanceStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.RunInstanceStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.RunInstanceStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.RunInstanceStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-documents.RunInstanceStep.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-documents.RunInstanceStep.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-documents.RunInstanceStep.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-documents.RunInstanceStep.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="cdk-ssm-documents.RunInstanceStep.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="cdk-ssm-documents.RunInstanceStep.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="cdk-ssm-documents.RunInstanceStep.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `iamInstanceProfileName`<sup>Optional</sup> <a name="iamInstanceProfileName" id="cdk-ssm-documents.RunInstanceStep.property.iamInstanceProfileName"></a>

```typescript
public readonly iamInstanceProfileName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="cdk-ssm-documents.RunInstanceStep.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-ssm-documents.RunInstanceStep.property.instanceType"></a>

```typescript
public readonly instanceType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="cdk-ssm-documents.RunInstanceStep.property.kernelId"></a>

```typescript
public readonly kernelId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="cdk-ssm-documents.RunInstanceStep.property.keyName"></a>

```typescript
public readonly keyName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="cdk-ssm-documents.RunInstanceStep.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="cdk-ssm-documents.RunInstanceStep.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="cdk-ssm-documents.RunInstanceStep.property.monitoring"></a>

```typescript
public readonly monitoring: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="cdk-ssm-documents.RunInstanceStep.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

---

##### `placement`<sup>Optional</sup> <a name="placement" id="cdk-ssm-documents.RunInstanceStep.property.placement"></a>

```typescript
public readonly placement: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="cdk-ssm-documents.RunInstanceStep.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="cdk-ssm-documents.RunInstanceStep.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="cdk-ssm-documents.RunInstanceStep.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-ssm-documents.RunInstanceStep.property.securityGroups"></a>

```typescript
public readonly securityGroups: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="cdk-ssm-documents.RunInstanceStep.property.subnetId"></a>

```typescript
public readonly subnetId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="cdk-ssm-documents.RunInstanceStep.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

---

##### `userData`<sup>Optional</sup> <a name="userData" id="cdk-ssm-documents.RunInstanceStep.property.userData"></a>

```typescript
public readonly userData: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunInstanceStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.RunInstanceStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.RunInstanceStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### RunPowerShellScriptStep <a name="RunPowerShellScriptStep" id="cdk-ssm-documents.RunPowerShellScriptStep"></a>

AutomationStep implementation for aws:runPowerShellScript https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-runPowerShellScript.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.RunPowerShellScriptStep.Initializer"></a>

```typescript
import { RunPowerShellScriptStep } from 'cdk-ssm-documents'

new RunPowerShellScriptStep(scope: Construct, id: string, props: RunPowerShellScriptStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps">RunPowerShellScriptStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.RunPowerShellScriptStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.RunPowerShellScriptStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.RunPowerShellScriptStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.RunPowerShellScriptStepProps">RunPowerShellScriptStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.listInputs">listInputs</a></code> | Inputs required for this command includes both the runCommand variables and workingDirectory if provided. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.RunPowerShellScriptStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.RunPowerShellScriptStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command includes both the runCommand variables and workingDirectory if provided.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.RunPowerShellScriptStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.RunPowerShellScriptStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.RunPowerShellScriptStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.RunPowerShellScriptStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.RunPowerShellScriptStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.RunPowerShellScriptStep.isConstruct"></a>

```typescript
import { RunPowerShellScriptStep } from 'cdk-ssm-documents'

RunPowerShellScriptStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.RunPowerShellScriptStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStep.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.RunPowerShellScriptStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.RunPowerShellScriptStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.RunPowerShellScriptStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.RunPowerShellScriptStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.RunPowerShellScriptStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunPowerShellScriptStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.RunPowerShellScriptStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.RunPowerShellScriptStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.RunPowerShellScriptStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.RunPowerShellScriptStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.RunPowerShellScriptStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.RunPowerShellScriptStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.RunPowerShellScriptStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.RunPowerShellScriptStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-documents.RunPowerShellScriptStep.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunPowerShellScriptStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-documents.RunPowerShellScriptStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### RunShellScriptStep <a name="RunShellScriptStep" id="cdk-ssm-documents.RunShellScriptStep"></a>

AutomationStep implemenation for aws:sleep https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-sleep.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.RunShellScriptStep.Initializer"></a>

```typescript
import { RunShellScriptStep } from 'cdk-ssm-documents'

new RunShellScriptStep(scope: Construct, id: string, props: RunShellScriptStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.RunShellScriptStepProps">RunShellScriptStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.RunShellScriptStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.RunShellScriptStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.RunShellScriptStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.RunShellScriptStepProps">RunShellScriptStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.listInputs">listInputs</a></code> | Inputs required for this command includes both the runCommand variables and workingDirectory if provided. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.RunShellScriptStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.RunShellScriptStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command includes both the runCommand variables and workingDirectory if provided.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.RunShellScriptStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.RunShellScriptStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.RunShellScriptStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.RunShellScriptStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.RunShellScriptStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.RunShellScriptStep.isConstruct"></a>

```typescript
import { RunShellScriptStep } from 'cdk-ssm-documents'

RunShellScriptStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.RunShellScriptStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStep.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.RunShellScriptStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.RunShellScriptStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.RunShellScriptStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.RunShellScriptStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.RunShellScriptStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunShellScriptStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.RunShellScriptStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.RunShellScriptStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.RunShellScriptStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.RunShellScriptStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.RunShellScriptStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.RunShellScriptStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.RunShellScriptStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.RunShellScriptStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-documents.RunShellScriptStep.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunShellScriptStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-documents.RunShellScriptStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### SleepStep <a name="SleepStep" id="cdk-ssm-documents.SleepStep"></a>

AutomationStep implemenation for aws:sleep https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-sleep.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.SleepStep.Initializer"></a>

```typescript
import { SleepStep } from 'cdk-ssm-documents'

new SleepStep(scope: Construct, id: string, props: SleepStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SleepStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.SleepStepProps">SleepStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.SleepStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.SleepStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.SleepStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.SleepStepProps">SleepStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SleepStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.SleepStep.listInputs">listInputs</a></code> | No inputs required for Sleep step. |
| <code><a href="#cdk-ssm-documents.SleepStep.listOutputs">listOutputs</a></code> | No outputs emitted from Sleep step. |
| <code><a href="#cdk-ssm-documents.SleepStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.SleepStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.SleepStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.SleepStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

No inputs required for Sleep step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.SleepStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

No outputs emitted from Sleep step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.SleepStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.SleepStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.SleepStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.SleepStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SleepStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.SleepStep.isConstruct"></a>

```typescript
import { SleepStep } from 'cdk-ssm-documents'

SleepStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.SleepStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SleepStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.SleepStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.sleepSeconds">sleepSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.SleepStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.SleepStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.SleepStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.SleepStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.SleepStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.SleepStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.SleepStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.SleepStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.SleepStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.SleepStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.SleepStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.SleepStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.SleepStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `sleepSeconds`<sup>Required</sup> <a name="sleepSeconds" id="cdk-ssm-documents.SleepStep.property.sleepSeconds"></a>

```typescript
public readonly sleepSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SleepStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SleepStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.SleepStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.SleepStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

### SoftwareInventoryStep <a name="SoftwareInventoryStep" id="cdk-ssm-documents.SoftwareInventoryStep"></a>

AutomationStep implemenation for aws:softwareInventory https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-softwareinventory.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.SoftwareInventoryStep.Initializer"></a>

```typescript
import { SoftwareInventoryStep } from 'cdk-ssm-documents'

new SoftwareInventoryStep(scope: Construct, id: string, props: SoftwareInventoryStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps">SoftwareInventoryStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.SoftwareInventoryStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.SoftwareInventoryStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.SoftwareInventoryStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.SoftwareInventoryStepProps">SoftwareInventoryStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.listInputs">listInputs</a></code> | All Inputs for this command are optional. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.SoftwareInventoryStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.SoftwareInventoryStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

All Inputs for this command are optional.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.SoftwareInventoryStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.SoftwareInventoryStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.SoftwareInventoryStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.SoftwareInventoryStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.SoftwareInventoryStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.SoftwareInventoryStep.isConstruct"></a>

```typescript
import { SoftwareInventoryStep } from 'cdk-ssm-documents'

SoftwareInventoryStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.SoftwareInventoryStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.applications">applications</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.awsComponents">awsComponents</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.customInventory">customInventory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.files">files</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.instanceDetailedInformation">instanceDetailedInformation</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.networkConfig">networkConfig</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.services">services</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.windowsRegistry">windowsRegistry</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.windowsRoles">windowsRoles</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStep.property.windowsUpdates">windowsUpdates</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.SoftwareInventoryStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.SoftwareInventoryStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.SoftwareInventoryStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.SoftwareInventoryStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.SoftwareInventoryStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.SoftwareInventoryStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.SoftwareInventoryStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.SoftwareInventoryStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.SoftwareInventoryStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.SoftwareInventoryStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.SoftwareInventoryStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.SoftwareInventoryStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.SoftwareInventoryStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.SoftwareInventoryStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---

##### `applications`<sup>Optional</sup> <a name="applications" id="cdk-ssm-documents.SoftwareInventoryStep.property.applications"></a>

```typescript
public readonly applications: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `awsComponents`<sup>Optional</sup> <a name="awsComponents" id="cdk-ssm-documents.SoftwareInventoryStep.property.awsComponents"></a>

```typescript
public readonly awsComponents: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `customInventory`<sup>Optional</sup> <a name="customInventory" id="cdk-ssm-documents.SoftwareInventoryStep.property.customInventory"></a>

```typescript
public readonly customInventory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `files`<sup>Optional</sup> <a name="files" id="cdk-ssm-documents.SoftwareInventoryStep.property.files"></a>

```typescript
public readonly files: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `instanceDetailedInformation`<sup>Optional</sup> <a name="instanceDetailedInformation" id="cdk-ssm-documents.SoftwareInventoryStep.property.instanceDetailedInformation"></a>

```typescript
public readonly instanceDetailedInformation: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="cdk-ssm-documents.SoftwareInventoryStep.property.networkConfig"></a>

```typescript
public readonly networkConfig: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk-ssm-documents.SoftwareInventoryStep.property.services"></a>

```typescript
public readonly services: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `windowsRegistry`<sup>Optional</sup> <a name="windowsRegistry" id="cdk-ssm-documents.SoftwareInventoryStep.property.windowsRegistry"></a>

```typescript
public readonly windowsRegistry: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `windowsRoles`<sup>Optional</sup> <a name="windowsRoles" id="cdk-ssm-documents.SoftwareInventoryStep.property.windowsRoles"></a>

```typescript
public readonly windowsRoles: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `windowsUpdates`<sup>Optional</sup> <a name="windowsUpdates" id="cdk-ssm-documents.SoftwareInventoryStep.property.windowsUpdates"></a>

```typescript
public readonly windowsUpdates: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### SsmDocument <a name="SsmDocument" id="cdk-ssm-documents.SsmDocument"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.SsmDocument.Initializer"></a>

```typescript
import { SsmDocument } from 'cdk-ssm-documents'

new SsmDocument(scope: Construct, id: string, props: SsmDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SsmDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.SsmDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.SsmDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.SsmDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SsmDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.SsmDocument.documentType">documentType</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.SsmDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `documentType` <a name="documentType" id="cdk-ssm-documents.SsmDocument.documentType"></a>

```typescript
public documentType(): string
```

##### `print` <a name="print" id="cdk-ssm-documents.SsmDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SsmDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.SsmDocument.isConstruct"></a>

```typescript
import { SsmDocument } from 'cdk-ssm-documents'

SsmDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.SsmDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-documents.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SsmDocument.property.header">header</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.SsmDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-documents.SsmDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-documents.SsmDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-documents.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-documents.SsmDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-documents.SsmDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.SsmDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-documents.SsmDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-documents.SsmDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---


### Step <a name="Step" id="cdk-ssm-documents.Step"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.Step.Initializer"></a>

```typescript
import { Step } from 'cdk-ssm-documents'

new Step(scope: Construct, id: string, props: StepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Step.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Step.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Step.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.StepProps">StepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.Step.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.Step.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.Step.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.StepProps">StepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Step.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.Step.listInputs">listInputs</a></code> | Lists the inputs that are required for this step. |
| <code><a href="#cdk-ssm-documents.Step.listOutputs">listOutputs</a></code> | Lists the outputs that will be returned from this step. |
| <code><a href="#cdk-ssm-documents.Step.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.Step.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.Step.listInputs"></a>

```typescript
public listInputs(): string[]
```

Lists the inputs that are required for this step.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.Step.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

Lists the outputs that will be returned from this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.Step.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Step.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.Step.isConstruct"></a>

```typescript
import { Step } from 'cdk-ssm-documents'

Step.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.Step.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Step.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.Step.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Step.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Step.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Step.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Step.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.Step.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.Step.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.Step.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.Step.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.Step.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.Step.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


### StringStep <a name="StringStep" id="cdk-ssm-documents.StringStep"></a>

StringStep allows for including a step from an existing automation document verbatim.

This is useful in that it allows developers to integrate with existing document steps.
This step can be used just as you would use any other Step including simulation and deployment.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.StringStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.StringStep.addToDocument">addToDocument</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.StringStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.StringStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.StringStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.StringStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ssm-documents.StringStep.fromJson">fromJson</a></code> | Builds a step object from a json declaration. |
| <code><a href="#cdk-ssm-documents.StringStep.fromObject">fromObject</a></code> | Builds a step object from an object. |
| <code><a href="#cdk-ssm-documents.StringStep.fromYaml">fromYaml</a></code> | Builds a step object from a yaml declaration. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.StringStep.isConstruct"></a>

```typescript
import { StringStep } from 'cdk-ssm-documents'

StringStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.StringStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromJson` <a name="fromJson" id="cdk-ssm-documents.StringStep.fromJson"></a>

```typescript
import { StringStep } from 'cdk-ssm-documents'

StringStep.fromJson(scope: Construct, json: string)
```

Builds a step object from a json declaration.

You may cast the step afterword to the associated Step for this action
if you wish to gain access to action specific functionality,

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.StringStep.fromJson.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `json`<sup>Required</sup> <a name="json" id="cdk-ssm-documents.StringStep.fromJson.parameter.json"></a>

- *Type:* string

---

##### `fromObject` <a name="fromObject" id="cdk-ssm-documents.StringStep.fromObject"></a>

```typescript
import { StringStep } from 'cdk-ssm-documents'

StringStep.fromObject(scope: Construct, props: {[ key: string ]: any})
```

Builds a step object from an object.

You may cast the step afterword to the associated Step for this action
if you wish to gain access to action specific functionality,

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.StringStep.fromObject.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.StringStep.fromObject.parameter.props"></a>

- *Type:* {[ key: string ]: any}

---

##### `fromYaml` <a name="fromYaml" id="cdk-ssm-documents.StringStep.fromYaml"></a>

```typescript
import { StringStep } from 'cdk-ssm-documents'

StringStep.fromYaml(scope: Construct, inputYaml: string)
```

Builds a step object from a yaml declaration.

You may cast the step afterword to the associated Step for this action
if you wish to gain access to action specific functionality,

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.StringStep.fromYaml.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `inputYaml`<sup>Required</sup> <a name="inputYaml" id="cdk-ssm-documents.StringStep.fromYaml.parameter.inputYaml"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.StringStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### TimedDocument <a name="TimedDocument" id="cdk-ssm-documents.TimedDocument"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.TimedDocument.Initializer"></a>

```typescript
import { TimedDocument } from 'cdk-ssm-documents'

new TimedDocument(stage: Construct, id: string, props: AutomationDocumentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.TimedDocument.Initializer.parameter.stage">stage</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.AutomationDocumentProps">AutomationDocumentProps</a></code> | *No description.* |

---

##### `stage`<sup>Required</sup> <a name="stage" id="cdk-ssm-documents.TimedDocument.Initializer.parameter.stage"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.TimedDocument.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.TimedDocument.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentProps">AutomationDocumentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.TimedDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.TimedDocument.documentType">documentType</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.print">print</a></code> | Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack); |
| <code><a href="#cdk-ssm-documents.TimedDocument.addStep">addStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.collectedSteps">collectedSteps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.TimedDocument.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `documentType` <a name="documentType" id="cdk-ssm-documents.TimedDocument.documentType"></a>

```typescript
public documentType(): string
```

##### `print` <a name="print" id="cdk-ssm-documents.TimedDocument.print"></a>

```typescript
public print(): string
```

Synthesize before calling this function! You can use this to Synthesize: cdk.SynthUtils.synthesize(stack);

Converts the objects define in the SSM Document (including all of the steps) to an SSM document string.
The format is dependency on the documentFormat property provided to the class.
The yaml can be used as is and will behave (or at least should behave) as was simulated in the runSimulation().

##### `addStep` <a name="addStep" id="cdk-ssm-documents.TimedDocument.addStep"></a>

```typescript
public addStep(component: IAutomationComponent): void
```

###### `component`<sup>Required</sup> <a name="component" id="cdk-ssm-documents.TimedDocument.addStep.parameter.component"></a>

- *Type:* <a href="#cdk-ssm-documents.IAutomationComponent">IAutomationComponent</a>

---

##### `collectedSteps` <a name="collectedSteps" id="cdk-ssm-documents.TimedDocument.collectedSteps"></a>

```typescript
public collectedSteps(): AutomationStep[]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.TimedDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.TimedDocument.isConstruct"></a>

```typescript
import { TimedDocument } from 'cdk-ssm-documents'

TimedDocument.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.TimedDocument.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-documents.Input">Input</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.documentName">documentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.props">props</a></code> | <code><a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.assumeRole">assumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.header">header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.TimedDocument.property.builder">builder</a></code> | <code><a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.TimedDocument.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdk-ssm-documents.TimedDocument.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `docInputs`<sup>Required</sup> <a name="docInputs" id="cdk-ssm-documents.TimedDocument.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-documents.Input">Input</a>[]

---

##### `docOutputs`<sup>Required</sup> <a name="docOutputs" id="cdk-ssm-documents.TimedDocument.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-documents.TimedDocument.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.TimedDocument.property.props"></a>

```typescript
public readonly props: SsmDocumentProps;
```

- *Type:* <a href="#cdk-ssm-documents.SsmDocumentProps">SsmDocumentProps</a>

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-documents.TimedDocument.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-documents.TimedDocument.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

---

##### `builder`<sup>Required</sup> <a name="builder" id="cdk-ssm-documents.TimedDocument.property.builder"></a>

```typescript
public readonly builder: AutomationDocumentBuilder;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---


### UpdateAgentStep <a name="UpdateAgentStep" id="cdk-ssm-documents.UpdateAgentStep"></a>

AutomationStep implemenation for aws:UpdateAgent https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-updateagent.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.UpdateAgentStep.Initializer"></a>

```typescript
import { UpdateAgentStep } from 'cdk-ssm-documents'

new UpdateAgentStep(scope: Construct, id: string, props: UpdateAgentStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.UpdateAgentStepProps">UpdateAgentStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.UpdateAgentStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.UpdateAgentStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.UpdateAgentStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.UpdateAgentStepProps">UpdateAgentStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.listInputs">listInputs</a></code> | Inputs required for this command include agentName allowDowngrade source and targetVersion if version other than latest is desired. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.UpdateAgentStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.UpdateAgentStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command include agentName allowDowngrade source and targetVersion if version other than latest is desired.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.UpdateAgentStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.UpdateAgentStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.UpdateAgentStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.UpdateAgentStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.UpdateAgentStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.UpdateAgentStep.isConstruct"></a>

```typescript
import { UpdateAgentStep } from 'cdk-ssm-documents'

UpdateAgentStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.UpdateAgentStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.agentName">agentName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.source">source</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.allowDowngrade">allowDowngrade</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStep.property.targetVersion">targetVersion</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.UpdateAgentStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.UpdateAgentStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.UpdateAgentStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.UpdateAgentStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.UpdateAgentStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.UpdateAgentStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.UpdateAgentStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.UpdateAgentStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.UpdateAgentStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.UpdateAgentStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.UpdateAgentStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.UpdateAgentStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.UpdateAgentStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.UpdateAgentStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="cdk-ssm-documents.UpdateAgentStep.property.agentName"></a>

```typescript
public readonly agentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-ssm-documents.UpdateAgentStep.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `allowDowngrade`<sup>Optional</sup> <a name="allowDowngrade" id="cdk-ssm-documents.UpdateAgentStep.property.allowDowngrade"></a>

```typescript
public readonly allowDowngrade: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="cdk-ssm-documents.UpdateAgentStep.property.targetVersion"></a>

```typescript
public readonly targetVersion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### UpdateSSMAgentStep <a name="UpdateSSMAgentStep" id="cdk-ssm-documents.UpdateSSMAgentStep"></a>

AutomationStep implemenation for aws:UpdateSsmAgent https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-plugins.html#aws-updatessmagent.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.UpdateSSMAgentStep.Initializer"></a>

```typescript
import { UpdateSSMAgentStep } from 'cdk-ssm-documents'

new UpdateSSMAgentStep(scope: Construct, id: string, props: UpdateSSMAgentStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps">UpdateSSMAgentStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.UpdateSSMAgentStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.UpdateSSMAgentStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.UpdateSSMAgentStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.UpdateSSMAgentStepProps">UpdateSSMAgentStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.listInputs">listInputs</a></code> | Inputs required for this command include agentName allowDowngrade source and targetVersion if version other than latest is desired. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.listOutputs">listOutputs</a></code> | RunCommand Steps do not have outputs. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.UpdateSSMAgentStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.UpdateSSMAgentStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Inputs required for this command include agentName allowDowngrade source and targetVersion if version other than latest is desired.

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.UpdateSSMAgentStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

RunCommand Steps do not have outputs.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.UpdateSSMAgentStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.UpdateSSMAgentStep.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.UpdateSSMAgentStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.UpdateSSMAgentStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.UpdateSSMAgentStep.isConstruct"></a>

```typescript
import { UpdateSSMAgentStep } from 'cdk-ssm-documents'

UpdateSSMAgentStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.UpdateSSMAgentStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.platforms">platforms</a></code> | <code><a href="#cdk-ssm-documents.Platform">Platform</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.agentName">agentName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.allowDowngrade">allowDowngrade</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.source">source</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStep.property.targetVersion">targetVersion</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.UpdateSSMAgentStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.UpdateSSMAgentStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.UpdateSSMAgentStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.UpdateSSMAgentStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.UpdateSSMAgentStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.UpdateSSMAgentStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exitOnFailure`<sup>Required</sup> <a name="exitOnFailure" id="cdk-ssm-documents.UpdateSSMAgentStep.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean

---

##### `exitOnSuccess`<sup>Required</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.UpdateSSMAgentStep.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean

---

##### `finallyStep`<sup>Required</sup> <a name="finallyStep" id="cdk-ssm-documents.UpdateSSMAgentStep.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Required</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.UpdateSSMAgentStep.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="cdk-ssm-documents.UpdateSSMAgentStep.property.platforms"></a>

```typescript
public readonly platforms: Platform[];
```

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>[]

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.UpdateSSMAgentStep.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.UpdateSSMAgentStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.UpdateSSMAgentStep.property.nextStep"></a>

```typescript
public readonly nextStep: CommandStep;
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="cdk-ssm-documents.UpdateSSMAgentStep.property.agentName"></a>

```typescript
public readonly agentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `allowDowngrade`<sup>Required</sup> <a name="allowDowngrade" id="cdk-ssm-documents.UpdateSSMAgentStep.property.allowDowngrade"></a>

```typescript
public readonly allowDowngrade: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-ssm-documents.UpdateSSMAgentStep.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="cdk-ssm-documents.UpdateSSMAgentStep.property.targetVersion"></a>

```typescript
public readonly targetVersion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### WaitForResourceStep <a name="WaitForResourceStep" id="cdk-ssm-documents.WaitForResourceStep"></a>

AutomationStep impl for aws:waitForAwsResourceProperty https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-waitForAwsResourceProperty.html.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.WaitForResourceStep.Initializer"></a>

```typescript
import { WaitForResourceStep } from 'cdk-ssm-documents'

new WaitForResourceStep(scope: Construct, id: string, props: WaitForResourceStepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.WaitForResourceStepProps">WaitForResourceStepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-documents.WaitForResourceStep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.WaitForResourceStep.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.WaitForResourceStep.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.WaitForResourceStepProps">WaitForResourceStepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.listInputs">listInputs</a></code> | Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}"). |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.listOutputs">listOutputs</a></code> | There are no outputs for this step. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.toSsmEntry">toSsmEntry</a></code> | Converts this step into an object to prepare for yaml/json representation of this step. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.addToDocument">addToDocument</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.variables">variables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ssm-documents.WaitForResourceStep.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `listInputs` <a name="listInputs" id="cdk-ssm-documents.WaitForResourceStep.listInputs"></a>

```typescript
public listInputs(): string[]
```

Derives the inputs by parsing the apiParams to find matches for inputs in double circle braces ("{{INPUT}}").

##### `listOutputs` <a name="listOutputs" id="cdk-ssm-documents.WaitForResourceStep.listOutputs"></a>

```typescript
public listOutputs(): Output[]
```

There are no outputs for this step.

##### `toSsmEntry` <a name="toSsmEntry" id="cdk-ssm-documents.WaitForResourceStep.toSsmEntry"></a>

```typescript
public toSsmEntry(): {[ key: string ]: any}
```

Converts this step into an object to prepare for yaml/json representation of this step.

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.WaitForResourceStep.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.WaitForResourceStep.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---

##### `variables` <a name="variables" id="cdk-ssm-documents.WaitForResourceStep.variables"></a>

```typescript
public variables(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-documents.WaitForResourceStep.isConstruct"></a>

```typescript
import { WaitForResourceStep } from 'cdk-ssm-documents'

WaitForResourceStep.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-documents.WaitForResourceStep.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.isEnd">isEnd</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.allStepsInExecution">allStepsInExecution</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.nextStep">nextStep</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.apiParams">apiParams</a></code> | <code><a href="#cdk-ssm-documents.DictFormat">DictFormat</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-documents.Output">Output</a>[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.selector">selector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.sleepIntervalMillis">sleepIntervalMillis</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-documents.WaitForResourceStep.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ssm-documents.WaitForResourceStep.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `inputObserver`<sup>Required</sup> <a name="inputObserver" id="cdk-ssm-documents.WaitForResourceStep.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.WaitForResourceStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputObserver`<sup>Required</sup> <a name="outputObserver" id="cdk-ssm-documents.WaitForResourceStep.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.WaitForResourceStep.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isEnd`<sup>Required</sup> <a name="isEnd" id="cdk-ssm-documents.WaitForResourceStep.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="cdk-ssm-documents.WaitForResourceStep.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.WaitForResourceStep.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.WaitForResourceStep.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.WaitForResourceStep.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `allStepsInExecution`<sup>Optional</sup> <a name="allStepsInExecution" id="cdk-ssm-documents.WaitForResourceStep.property.allStepsInExecution"></a>

```typescript
public readonly allStepsInExecution: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---

##### `nextStep`<sup>Optional</sup> <a name="nextStep" id="cdk-ssm-documents.WaitForResourceStep.property.nextStep"></a>

```typescript
public readonly nextStep: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-documents.WaitForResourceStep.property.apiParams"></a>

```typescript
public readonly apiParams: DictFormat;
```

- *Type:* <a href="#cdk-ssm-documents.DictFormat">DictFormat</a>

---

##### `javaScriptApi`<sup>Required</sup> <a name="javaScriptApi" id="cdk-ssm-documents.WaitForResourceStep.property.javaScriptApi"></a>

```typescript
public readonly javaScriptApi: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-documents.WaitForResourceStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-documents.Output">Output</a>[]

---

##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-documents.WaitForResourceStep.property.pascalCaseApi"></a>

```typescript
public readonly pascalCaseApi: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.WaitForResourceStep.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-documents.WaitForResourceStep.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-documents.WaitForResourceStep.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

---

##### `sleepIntervalMillis`<sup>Required</sup> <a name="sleepIntervalMillis" id="cdk-ssm-documents.WaitForResourceStep.property.sleepIntervalMillis"></a>

```typescript
public readonly sleepIntervalMillis: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.DEFAULT_MAX_ATTEMPTS">DEFAULT_MAX_ATTEMPTS</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.WaitForResourceStep.property.DEFAULT_TIMEOUT">DEFAULT_TIMEOUT</a></code> | <code>number</code> | *No description.* |

---

##### `DEFAULT_MAX_ATTEMPTS`<sup>Required</sup> <a name="DEFAULT_MAX_ATTEMPTS" id="cdk-ssm-documents.WaitForResourceStep.property.DEFAULT_MAX_ATTEMPTS"></a>

```typescript
public readonly DEFAULT_MAX_ATTEMPTS: number;
```

- *Type:* number

---

##### `DEFAULT_TIMEOUT`<sup>Required</sup> <a name="DEFAULT_TIMEOUT" id="cdk-ssm-documents.WaitForResourceStep.property.DEFAULT_TIMEOUT"></a>

```typescript
public readonly DEFAULT_TIMEOUT: number;
```

- *Type:* number

---

## Structs <a name="Structs" id="Structs"></a>

### ApiRunCommandProps <a name="ApiRunCommandProps" id="cdk-ssm-documents.ApiRunCommandProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.ApiRunCommandProps.Initializer"></a>

```typescript
import { ApiRunCommandProps } from 'cdk-ssm-documents'

const apiRunCommandProps: ApiRunCommandProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ApiRunCommandProps.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApiRunCommandProps.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a></code> | *No description.* |

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-documents.ApiRunCommandProps.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a>

---

##### `sleepHook`<sup>Required</sup> <a name="sleepHook" id="cdk-ssm-documents.ApiRunCommandProps.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a>

---

### ApproveStepProps <a name="ApproveStepProps" id="cdk-ssm-documents.ApproveStepProps"></a>

Properties for ApproveStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.ApproveStepProps.Initializer"></a>

```typescript
import { ApproveStepProps } from 'cdk-ssm-documents'

const approveStepProps: ApproveStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.approvers">approvers</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | A list of AWS authenticated principals who are able to either approve or reject the action. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.message">message</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The information you want to include in the Amazon SNS topic when the approval request is sent. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.minRequiredApprovals">minRequiredApprovals</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | (Optional) The minimum number of approvals required to resume the automation. |
| <code><a href="#cdk-ssm-documents.ApproveStepProps.property.notificationArn">notificationArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN of an Amazon Simple Notification Service (Amazon SNS) topic for Automation approvals. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ApproveStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.ApproveStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.ApproveStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.ApproveStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.ApproveStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.ApproveStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ApproveStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ApproveStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ApproveStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="cdk-ssm-documents.ApproveStepProps.property.approvers"></a>

```typescript
public readonly approvers: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

A list of AWS authenticated principals who are able to either approve or reject the action.

The maximum number of approvers is 10.

You can specify principals by using any of the following formats:
* An AWS Identity and Access Management (IAM) user name
* An IAM user ARN
* An IAM role ARN
* An IAM assume role user ARN

---

##### `message`<sup>Optional</sup> <a name="message" id="cdk-ssm-documents.ApproveStepProps.property.message"></a>

```typescript
public readonly message: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The information you want to include in the Amazon SNS topic when the approval request is sent.

The maximum message length is 4096 characters.

---

##### `minRequiredApprovals`<sup>Optional</sup> <a name="minRequiredApprovals" id="cdk-ssm-documents.ApproveStepProps.property.minRequiredApprovals"></a>

```typescript
public readonly minRequiredApprovals: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

(Optional) The minimum number of approvals required to resume the automation.

If you don't specify a value, the system defaults to one. The value for this parameter must be a positive number. The value for this parameter can't exceed the number of approvers defined by the Approvers parameter.

---

##### `notificationArn`<sup>Optional</sup> <a name="notificationArn" id="cdk-ssm-documents.ApproveStepProps.property.notificationArn"></a>

```typescript
public readonly notificationArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN of an Amazon Simple Notification Service (Amazon SNS) topic for Automation approvals.

When you specify an aws:approve step in a runbook, Automation sends a message to this topic letting principals know that they must either approve or reject an Automation step. The title of the Amazon SNS topic must be prefixed with "Automation".

---

### AssertAwsResourceStepProps <a name="AssertAwsResourceStepProps" id="cdk-ssm-documents.AssertAwsResourceStepProps"></a>

Properties for AssertAwsResourceStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.AssertAwsResourceStepProps.Initializer"></a>

```typescript
import { AssertAwsResourceStepProps } from 'cdk-ssm-documents'

const assertAwsResourceStepProps: AssertAwsResourceStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | (Required) Value extracted from AWS response desired to be one of these desired values. |
| <code><a href="#cdk-ssm-documents.AssertAwsResourceStepProps.property.selector">selector</a></code> | <code>string</code> | (Required) Json path selector to extract value from AWS response. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.apiParams"></a>

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


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.pascalCaseApi"></a>

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


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.service"></a>

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


##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.javaScriptApi"></a>

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


##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

(Required) Value extracted from AWS response desired to be one of these desired values.

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-documents.AssertAwsResourceStepProps.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

(Required) Json path selector to extract value from AWS response.

---

### AutomationDocumentProps <a name="AutomationDocumentProps" id="cdk-ssm-documents.AutomationDocumentProps"></a>

Options for AutomationDocument.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.AutomationDocumentProps.Initializer"></a>

```typescript
import { AutomationDocumentProps } from 'cdk-ssm-documents'

const automationDocumentProps: AutomationDocumentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.assumeRole">assumeRole</a></code> | <code>string</code> | (Optional) Assume role to use for this document. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.description">description</a></code> | <code>string</code> | (Optional) Description of the document. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-documents.Input">Input</a>[]</code> | (Optional) Inputs required by the document. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]</code> | (Optional) Outputs to be emitted from the document. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.documentFormat">documentFormat</a></code> | <code><a href="#cdk-ssm-documents.DocumentFormat">DocumentFormat</a></code> | (Optional) Specifies whether this document should be written as YAML or JSON. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.documentName">documentName</a></code> | <code>string</code> | (Optional) Name of the document. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.header">header</a></code> | <code>string</code> | (Optional) A Header/comment to include at the start of a YAML document. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.requires">requires</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty \| aws-cdk-lib.IResolvable[]</code> | `AWS::SSM::Document.Requires`. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | `AWS::SSM::Document.Tags`. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.targetType">targetType</a></code> | <code>string</code> | `AWS::SSM::Document.TargetType`. |
| <code><a href="#cdk-ssm-documents.AutomationDocumentProps.property.versionName">versionName</a></code> | <code>string</code> | `AWS::SSM::Document.VersionName`. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-documents.AutomationDocumentProps.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

(Optional) Assume role to use for this document.

If provided, this value MUST be included as one of the documentInput names.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AutomationDocumentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

(Optional) Description of the document.

Defaults to the document name.

---

##### `docInputs`<sup>Optional</sup> <a name="docInputs" id="cdk-ssm-documents.AutomationDocumentProps.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-documents.Input">Input</a>[]

(Optional) Inputs required by the document.

---

##### `docOutputs`<sup>Optional</sup> <a name="docOutputs" id="cdk-ssm-documents.AutomationDocumentProps.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]
- *Default:* []

(Optional) Outputs to be emitted from the document.

The outputs are placed in a StringSet called outputs (as is done in SSM).

---

##### `documentFormat`<sup>Optional</sup> <a name="documentFormat" id="cdk-ssm-documents.AutomationDocumentProps.property.documentFormat"></a>

```typescript
public readonly documentFormat: DocumentFormat;
```

- *Type:* <a href="#cdk-ssm-documents.DocumentFormat">DocumentFormat</a>
- *Default:* JSON

(Optional) Specifies whether this document should be written as YAML or JSON.

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="cdk-ssm-documents.AutomationDocumentProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

(Optional) Name of the document.

Will default to the id provided for the CDK node.

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-documents.AutomationDocumentProps.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

(Optional) A Header/comment to include at the start of a YAML document.

JSON documents do not support headers.

---

##### `requires`<sup>Optional</sup> <a name="requires" id="cdk-ssm-documents.AutomationDocumentProps.property.requires"></a>

```typescript
public readonly requires: IResolvable | DocumentRequiresProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty | aws-cdk-lib.IResolvable[]

`AWS::SSM::Document.Requires`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-documents.AutomationDocumentProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

`AWS::SSM::Document.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags)

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="cdk-ssm-documents.AutomationDocumentProps.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

`AWS::SSM::Document.TargetType`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype)

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="cdk-ssm-documents.AutomationDocumentProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

`AWS::SSM::Document.VersionName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname)

---

### AutomationStepProps <a name="AutomationStepProps" id="cdk-ssm-documents.AutomationStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.AutomationStepProps.Initializer"></a>

```typescript
import { AutomationStepProps } from 'cdk-ssm-documents'

const automationStepProps: AutomationStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.AutomationStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AutomationStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.AutomationStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.AutomationStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.AutomationStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.AutomationStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.AutomationStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.AutomationStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.AutomationStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.AutomationStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

### AwsApiStepProps <a name="AwsApiStepProps" id="cdk-ssm-documents.AwsApiStepProps"></a>

Properties for AwsInvocation.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.AwsApiStepProps.Initializer"></a>

```typescript
import { AwsApiStepProps } from 'cdk-ssm-documents'

const awsApiStepProps: AwsApiStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |
| <code><a href="#cdk-ssm-documents.AwsApiStepProps.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-documents.Output">Output</a>[]</code> | (Required) specify the outputs to extract from the JavaScript JSON response. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AwsApiStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.AwsApiStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.AwsApiStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.AwsApiStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.AwsApiStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.AwsApiStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.AwsApiStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.AwsApiStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.AwsApiStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-documents.AwsApiStepProps.property.apiParams"></a>

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


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-documents.AwsApiStepProps.property.pascalCaseApi"></a>

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


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.AwsApiStepProps.property.service"></a>

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


##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-documents.AwsApiStepProps.property.javaScriptApi"></a>

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


##### `outputs`<sup>Required</sup> <a name="outputs" id="cdk-ssm-documents.AwsApiStepProps.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-documents.Output">Output</a>[]

(Required) specify the outputs to extract from the JavaScript JSON response.

---

### AwsInvocationProps <a name="AwsInvocationProps" id="cdk-ssm-documents.AwsInvocationProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.AwsInvocationProps.Initializer"></a>

```typescript
import { AwsInvocationProps } from 'cdk-ssm-documents'

const awsInvocationProps: AwsInvocationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-documents.AwsInvocationProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.AwsInvocationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.AwsInvocationProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.AwsInvocationProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.AwsInvocationProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.AwsInvocationProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.AwsInvocationProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.AwsInvocationProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.AwsInvocationProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.AwsInvocationProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-documents.AwsInvocationProps.property.apiParams"></a>

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


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-documents.AwsInvocationProps.property.pascalCaseApi"></a>

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


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.AwsInvocationProps.property.service"></a>

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


##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-documents.AwsInvocationProps.property.javaScriptApi"></a>

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


### BodyOrUrlProp <a name="BodyOrUrlProp" id="cdk-ssm-documents.BodyOrUrlProp"></a>

Allow passing in a body or URL version of the property value.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.BodyOrUrlProp.Initializer"></a>

```typescript
import { BodyOrUrlProp } from 'cdk-ssm-documents'

const bodyOrUrlProp: BodyOrUrlProp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.BodyOrUrlProp.property.propType">propType</a></code> | <code><a href="#cdk-ssm-documents.BodyOrUrlType">BodyOrUrlType</a></code> | Whether the body or URL was provided. |
| <code><a href="#cdk-ssm-documents.BodyOrUrlProp.property.value">value</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | Body or URL string. |

---

##### `propType`<sup>Required</sup> <a name="propType" id="cdk-ssm-documents.BodyOrUrlProp.property.propType"></a>

```typescript
public readonly propType: BodyOrUrlType;
```

- *Type:* <a href="#cdk-ssm-documents.BodyOrUrlType">BodyOrUrlType</a>

Whether the body or URL was provided.

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-documents.BodyOrUrlProp.property.value"></a>

```typescript
public readonly value: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

Body or URL string.

---

### BranchStepProps <a name="BranchStepProps" id="cdk-ssm-documents.BranchStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.BranchStepProps.Initializer"></a>

```typescript
import { BranchStepProps } from 'cdk-ssm-documents'

const branchStepProps: BranchStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.choices">choices</a></code> | <code><a href="#cdk-ssm-documents.Choice">Choice</a>[]</code> | (Required) list of choices. |
| <code><a href="#cdk-ssm-documents.BranchStepProps.property.defaultStepName">defaultStepName</a></code> | <code>string</code> | (Optional) default step in all of the choices evaluate to false. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.BranchStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.BranchStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.BranchStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.BranchStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.BranchStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.BranchStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.BranchStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.BranchStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.BranchStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `choices`<sup>Required</sup> <a name="choices" id="cdk-ssm-documents.BranchStepProps.property.choices"></a>

```typescript
public readonly choices: Choice[];
```

- *Type:* <a href="#cdk-ssm-documents.Choice">Choice</a>[]

(Required) list of choices.

The first matched choice will be used to jump to the step specified in the choice.

---

##### `defaultStepName`<sup>Optional</sup> <a name="defaultStepName" id="cdk-ssm-documents.BranchStepProps.property.defaultStepName"></a>

```typescript
public readonly defaultStepName: string;
```

- *Type:* string
- *Default:* undefined - the next step in the chain will be invoked. See AWS Documentation for branch below.

(Optional) default step in all of the choices evaluate to false.

---

### ChangeInstanceStateStepProps <a name="ChangeInstanceStateStepProps" id="cdk-ssm-documents.ChangeInstanceStateStepProps"></a>

Properties for ChangeInstanceStateStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.ChangeInstanceStateStepProps.Initializer"></a>

```typescript
import { ChangeInstanceStateStepProps } from 'cdk-ssm-documents'

const changeInstanceStateStepProps: ChangeInstanceStateStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.desiredState">desiredState</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | The desired state. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.instanceIds">instanceIds</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | The IDs of the instances. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Reserved. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.checkStateOnly">checkStateOnly</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | (Optional) If false, sets the instance state to the desired state. |
| <code><a href="#cdk-ssm-documents.ChangeInstanceStateStepProps.property.force">force</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | (Optional) If set, forces the instances to stop. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.desiredState"></a>

```typescript
public readonly desiredState: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

The desired state.

When set to running, this action waits for the Amazon EC2 state to be Running, the Instance Status to be OK,
and the System Status to be OK before completing.

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.instanceIds"></a>

```typescript
public readonly instanceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

The IDs of the instances.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Reserved.

---

##### `checkStateOnly`<sup>Optional</sup> <a name="checkStateOnly" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.checkStateOnly"></a>

```typescript
public readonly checkStateOnly: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>
- *Default:* false

(Optional) If false, sets the instance state to the desired state.

If true, asserts the desired state using polling.

---

##### `force`<sup>Optional</sup> <a name="force" id="cdk-ssm-documents.ChangeInstanceStateStepProps.property.force"></a>

```typescript
public readonly force: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

(Optional) If set, forces the instances to stop.

The instances don't have an opportunity to flush file system caches or file system metadata.
If you use this option, you must perform file system check and repair procedures.
This option isn't recommended for EC2 instances for Windows Server.

---

### ChoiceProps <a name="ChoiceProps" id="cdk-ssm-documents.ChoiceProps"></a>

Properties for a Choice used by the BranchStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.ChoiceProps.Initializer"></a>

```typescript
import { ChoiceProps } from 'cdk-ssm-documents'

const choiceProps: ChoiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ChoiceProps.property.constant">constant</a></code> | <code>any</code> | (Required) the constant to test against the inputToTest. |
| <code><a href="#cdk-ssm-documents.ChoiceProps.property.jumpToStepName">jumpToStepName</a></code> | <code>string</code> | A step to jump to if this choice is evaluated to true. |
| <code><a href="#cdk-ssm-documents.ChoiceProps.property.operation">operation</a></code> | <code><a href="#cdk-ssm-documents.Operation">Operation</a></code> | (Required) The operation used to compare the inputToTest with the constant. |
| <code><a href="#cdk-ssm-documents.ChoiceProps.property.variable">variable</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a> \| <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a> \| <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Required) the input used to test using the operation with the constant. |

---

##### `constant`<sup>Required</sup> <a name="constant" id="cdk-ssm-documents.ChoiceProps.property.constant"></a>

```typescript
public readonly constant: any;
```

- *Type:* any

(Required) the constant to test against the inputToTest.

---

##### `jumpToStepName`<sup>Required</sup> <a name="jumpToStepName" id="cdk-ssm-documents.ChoiceProps.property.jumpToStepName"></a>

```typescript
public readonly jumpToStepName: string;
```

- *Type:* string

A step to jump to if this choice is evaluated to true.

Must reference another step in the currently executing AutomationDocument.

---

##### `operation`<sup>Required</sup> <a name="operation" id="cdk-ssm-documents.ChoiceProps.property.operation"></a>

```typescript
public readonly operation: Operation;
```

- *Type:* <a href="#cdk-ssm-documents.Operation">Operation</a>

(Required) The operation used to compare the inputToTest with the constant.

---

##### `variable`<sup>Required</sup> <a name="variable" id="cdk-ssm-documents.ChoiceProps.property.variable"></a>

```typescript
public readonly variable: IBooleanVariable | INumberVariable | IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a> | <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a> | <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Required) the input used to test using the operation with the constant.

---

### CommandDocumentProps <a name="CommandDocumentProps" id="cdk-ssm-documents.CommandDocumentProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.CommandDocumentProps.Initializer"></a>

```typescript
import { CommandDocumentProps } from 'cdk-ssm-documents'

const commandDocumentProps: CommandDocumentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.assumeRole">assumeRole</a></code> | <code>string</code> | (Optional) Assume role to use for this document. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.description">description</a></code> | <code>string</code> | (Optional) Description of the document. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-documents.Input">Input</a>[]</code> | (Optional) Inputs required by the document. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]</code> | (Optional) Outputs to be emitted from the document. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.documentFormat">documentFormat</a></code> | <code><a href="#cdk-ssm-documents.DocumentFormat">DocumentFormat</a></code> | (Optional) Specifies whether this document should be written as YAML or JSON. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.documentName">documentName</a></code> | <code>string</code> | (Optional) Name of the document. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.header">header</a></code> | <code>string</code> | (Optional) A Header/comment to include at the start of a YAML document. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.requires">requires</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty \| aws-cdk-lib.IResolvable[]</code> | `AWS::SSM::Document.Requires`. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | `AWS::SSM::Document.Tags`. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.targetType">targetType</a></code> | <code>string</code> | `AWS::SSM::Document.TargetType`. |
| <code><a href="#cdk-ssm-documents.CommandDocumentProps.property.versionName">versionName</a></code> | <code>string</code> | `AWS::SSM::Document.VersionName`. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-documents.CommandDocumentProps.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

(Optional) Assume role to use for this document.

If provided, this value MUST be included as one of the documentInput names.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CommandDocumentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

(Optional) Description of the document.

Defaults to the document name.

---

##### `docInputs`<sup>Optional</sup> <a name="docInputs" id="cdk-ssm-documents.CommandDocumentProps.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-documents.Input">Input</a>[]

(Optional) Inputs required by the document.

---

##### `docOutputs`<sup>Optional</sup> <a name="docOutputs" id="cdk-ssm-documents.CommandDocumentProps.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]
- *Default:* []

(Optional) Outputs to be emitted from the document.

The outputs are placed in a StringSet called outputs (as is done in SSM).

---

##### `documentFormat`<sup>Optional</sup> <a name="documentFormat" id="cdk-ssm-documents.CommandDocumentProps.property.documentFormat"></a>

```typescript
public readonly documentFormat: DocumentFormat;
```

- *Type:* <a href="#cdk-ssm-documents.DocumentFormat">DocumentFormat</a>
- *Default:* JSON

(Optional) Specifies whether this document should be written as YAML or JSON.

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="cdk-ssm-documents.CommandDocumentProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

(Optional) Name of the document.

Will default to the id provided for the CDK node.

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-documents.CommandDocumentProps.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

(Optional) A Header/comment to include at the start of a YAML document.

JSON documents do not support headers.

---

##### `requires`<sup>Optional</sup> <a name="requires" id="cdk-ssm-documents.CommandDocumentProps.property.requires"></a>

```typescript
public readonly requires: IResolvable | DocumentRequiresProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty | aws-cdk-lib.IResolvable[]

`AWS::SSM::Document.Requires`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-documents.CommandDocumentProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

`AWS::SSM::Document.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags)

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="cdk-ssm-documents.CommandDocumentProps.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

`AWS::SSM::Document.TargetType`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype)

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="cdk-ssm-documents.CommandDocumentProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

`AWS::SSM::Document.VersionName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname)

---

### CommandStepProps <a name="CommandStepProps" id="cdk-ssm-documents.CommandStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.CommandStepProps.Initializer"></a>

```typescript
import { CommandStepProps } from 'cdk-ssm-documents'

const commandStepProps: CommandStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.CommandStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CommandStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.CommandStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.CommandStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.CommandStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.CommandStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.CommandStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.CommandStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.CommandStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CommandStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.CommandStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

### ConfigurePackageStepProps <a name="ConfigurePackageStepProps" id="cdk-ssm-documents.ConfigurePackageStepProps"></a>

Properties ConfigurePackage step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.ConfigurePackageStepProps.Initializer"></a>

```typescript
import { ConfigurePackageStepProps } from 'cdk-ssm-documents'

const configurePackageStepProps: ConfigurePackageStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.packageAction">packageAction</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | Install or uninstall a package. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.packageName">packageName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The name of the AWS package to install or uninstall. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.additionalArguments">additionalArguments</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | The additional parameters to provide to your install, uninstall, or update scripts. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.installationType">installationType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The type of installation to perform. |
| <code><a href="#cdk-ssm-documents.ConfigurePackageStepProps.property.version">version</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | A specific version of the package to install or uninstall. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ConfigurePackageStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.ConfigurePackageStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.ConfigurePackageStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.ConfigurePackageStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.ConfigurePackageStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.ConfigurePackageStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.ConfigurePackageStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.ConfigurePackageStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ConfigurePackageStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.ConfigurePackageStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

##### `packageAction`<sup>Required</sup> <a name="packageAction" id="cdk-ssm-documents.ConfigurePackageStepProps.property.packageAction"></a>

```typescript
public readonly packageAction: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

Install or uninstall a package.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="cdk-ssm-documents.ConfigurePackageStepProps.property.packageName"></a>

```typescript
public readonly packageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The name of the AWS package to install or uninstall.

Available packages include the following: AWSPVDriver, AwsEnaNetworkDriver, AwsVssComponents, and AmazonCloudWatchAgent.

---

##### `additionalArguments`<sup>Optional</sup> <a name="additionalArguments" id="cdk-ssm-documents.ConfigurePackageStepProps.property.additionalArguments"></a>

```typescript
public readonly additionalArguments: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

The additional parameters to provide to your install, uninstall, or update scripts.

Each parameter must be prefixed with SSM_.
You can reference a Parameter Store parameter in your additional arguments by using the convention {{ssm:parameter-name}}.
To use the additional parameter in your install, uninstall, or update script,
you must reference the parameter as an environment variable using the syntax appropriate for the operating system.
For example, in PowerShell, you reference the SSM_arg argument as $Env:SSM_arg.
There is no limit to the number of arguments you define, but the additional argument input has a 4096 character limit.
This limit includes all of the keys and values you define.

---

##### `installationType`<sup>Optional</sup> <a name="installationType" id="cdk-ssm-documents.ConfigurePackageStepProps.property.installationType"></a>

```typescript
public readonly installationType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The type of installation to perform.

If you specify Uninstall and reinstall, the package is completely uninstalled, and then reinstalled.
The application is unavailable until the reinstallation is complete.
If you specify In-place update, only new or changed files are added to the existing installation according you instructions you provide in an update script.
The application remains available throughout the update process.
The In-place update option isn't supported for AWS-published packages. Uninstall and reinstall is the default value.

---

##### `version`<sup>Optional</sup> <a name="version" id="cdk-ssm-documents.ConfigurePackageStepProps.property.version"></a>

```typescript
public readonly version: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

A specific version of the package to install or uninstall.

If installing, the system installs the latest published version, by default.
If uninstalling, the system uninstalls the currently installed version, by default.
If no installed version is found, the latest published version is downloaded, and the uninstall action is run.

---

### CopyImageStepProps <a name="CopyImageStepProps" id="cdk-ssm-documents.CopyImageStepProps"></a>

Properties for CopyImageStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.CopyImageStepProps.Initializer"></a>

```typescript
import { CopyImageStepProps } from 'cdk-ssm-documents'

const copyImageStepProps: CopyImageStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The name for the image. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.sourceImageId">sourceImageId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The AMI ID to copy from the source Region. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.sourceRegion">sourceRegion</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The region where the source AMI exists. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) A unique, case-sensitive identifier that you provide to ensure request idempotency. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.encrypted">encrypted</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Encrypt the target AMI. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) A description of the image. |
| <code><a href="#cdk-ssm-documents.CopyImageStepProps.property.kmsKeyId">kmsKeyId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The full Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting the snapshots of an image during a copy operation. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CopyImageStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.CopyImageStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.CopyImageStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.CopyImageStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.CopyImageStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.CopyImageStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CopyImageStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CopyImageStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CopyImageStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-documents.CopyImageStepProps.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The name for the image.

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="cdk-ssm-documents.CopyImageStepProps.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The AMI ID to copy from the source Region.

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="cdk-ssm-documents.CopyImageStepProps.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The region where the source AMI exists.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-documents.CopyImageStepProps.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) A unique, case-sensitive identifier that you provide to ensure request idempotency.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="cdk-ssm-documents.CopyImageStepProps.property.encrypted"></a>

```typescript
public readonly encrypted: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

(Optional) Encrypt the target AMI.

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-documents.CopyImageStepProps.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) A description of the image.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="cdk-ssm-documents.CopyImageStepProps.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The full Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting the snapshots of an image during a copy operation.

---

### CreateImageStepProps <a name="CreateImageStepProps" id="cdk-ssm-documents.CreateImageStepProps"></a>

Properties for CreateImageStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.CreateImageStepProps.Initializer"></a>

```typescript
import { CreateImageStepProps } from 'cdk-ssm-documents'

const createImageStepProps: CreateImageStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.imageName">imageName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The name for the image. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.instanceId">instanceId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The ID of the instance. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The block devices for the instance. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.imageDescription">imageDescription</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) A description of the image. |
| <code><a href="#cdk-ssm-documents.CreateImageStepProps.property.noReboot">noReboot</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | (Optional) By default, Amazon Elastic Compute Cloud (Amazon EC2) attempts to shut down and reboot the instance before creating the image. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CreateImageStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.CreateImageStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.CreateImageStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.CreateImageStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.CreateImageStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.CreateImageStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CreateImageStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CreateImageStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CreateImageStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-ssm-documents.CreateImageStepProps.property.imageName"></a>

```typescript
public readonly imageName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The name for the image.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-ssm-documents.CreateImageStepProps.property.instanceId"></a>

```typescript
public readonly instanceId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The ID of the instance.

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-documents.CreateImageStepProps.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

(Optional) The block devices for the instance.

---

##### `imageDescription`<sup>Optional</sup> <a name="imageDescription" id="cdk-ssm-documents.CreateImageStepProps.property.imageDescription"></a>

```typescript
public readonly imageDescription: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) A description of the image.

---

##### `noReboot`<sup>Optional</sup> <a name="noReboot" id="cdk-ssm-documents.CreateImageStepProps.property.noReboot"></a>

```typescript
public readonly noReboot: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

(Optional) By default, Amazon Elastic Compute Cloud (Amazon EC2) attempts to shut down and reboot the instance before creating the image.

If the No Reboot option is set to true, Amazon EC2 doesn't shut down the instance before creating the image. When this option is used, file system integrity on the created image can't be guaranteed.
If you don't want the instance to run after you create an AMI from it, first use the aws:changeInstanceState – Change or assert instance state action to stop the instance, and then use this aws:createImage action with the NoReboot option set to true.

---

### CreateStackStepProps <a name="CreateStackStepProps" id="cdk-ssm-documents.CreateStackStepProps"></a>

Properties for CreateStackStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.CreateStackStepProps.Initializer"></a>

```typescript
import { CreateStackStepProps } from 'cdk-ssm-documents'

const createStackStepProps: CreateStackStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.stackName">stackName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The name that is associated with the stack. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.template">template</a></code> | <code><a href="#cdk-ssm-documents.BodyOrUrlProp">BodyOrUrlProp</a></code> | Template body or URL. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.capabilities">capabilities</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | (Optional) A list of values that you specify before CloudFormation can create certain stacks. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.clientRequestToken">clientRequestToken</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) A unique identifier for this CreateStack request. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.notificationARNs">notificationARNs</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | (Optional) The Amazon Simple Notification Service (Amazon SNS) topic ARNs for publishing stack-related events. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.onStackFailure">onStackFailure</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | (Optional) Determines the action to take if stack creation failed. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | (Optional) A list of Parameter structures that specify input parameters for the stack. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.resourceTypes">resourceTypes</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | (Optional) The template resource types that you have permissions to work with for this create stack action. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.stackPolicy">stackPolicy</a></code> | <code><a href="#cdk-ssm-documents.BodyOrUrlProp">BodyOrUrlProp</a></code> | (Optional) Stack policy body or URL. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.tags">tags</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | (Optional) Key-value pairs to associate with this stack. |
| <code><a href="#cdk-ssm-documents.CreateStackStepProps.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | (Optional) The amount of time that can pass before the stack status becomes CREATE_FAILED. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CreateStackStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.CreateStackStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.CreateStackStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.CreateStackStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.CreateStackStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.CreateStackStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CreateStackStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CreateStackStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CreateStackStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="cdk-ssm-documents.CreateStackStepProps.property.stackName"></a>

```typescript
public readonly stackName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The name that is associated with the stack.

The name must be unique in the Region in which you're creating the stack.

---

##### `template`<sup>Required</sup> <a name="template" id="cdk-ssm-documents.CreateStackStepProps.property.template"></a>

```typescript
public readonly template: BodyOrUrlProp;
```

- *Type:* <a href="#cdk-ssm-documents.BodyOrUrlProp">BodyOrUrlProp</a>

Template body or URL.

For more information, see [Template Anatomy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html).

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="cdk-ssm-documents.CreateStackStepProps.property.capabilities"></a>

```typescript
public readonly capabilities: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

(Optional) A list of values that you specify before CloudFormation can create certain stacks.

Some stack templates include resources that can affect permissions in your AWS account.
For example, creating new AWS Identity and Access Management (IAM) users can affect permissions in your account.
For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter.

Valid values include CAPABILITY_IAM, CAPABILITY_NAMED_IAM, and CAPABILITY_AUTO_EXPAND.

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-ssm-documents.CreateStackStepProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) A unique identifier for this CreateStack request.

Specify this token if you set maxAttempts in this step to a value greater than 1.
By specifying this token, CloudFormation knows that you aren't attempting to create a new stack with the same name.

---

##### `notificationARNs`<sup>Optional</sup> <a name="notificationARNs" id="cdk-ssm-documents.CreateStackStepProps.property.notificationARNs"></a>

```typescript
public readonly notificationARNs: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

(Optional) The Amazon Simple Notification Service (Amazon SNS) topic ARNs for publishing stack-related events.

---

##### `onStackFailure`<sup>Optional</sup> <a name="onStackFailure" id="cdk-ssm-documents.CreateStackStepProps.property.onStackFailure"></a>

```typescript
public readonly onStackFailure: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>
- *Default:* Rollback on failure

(Optional) Determines the action to take if stack creation failed.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-documents.CreateStackStepProps.property.parameters"></a>

```typescript
public readonly parameters: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

(Optional) A list of Parameter structures that specify input parameters for the stack.

For more information, see the [Parameter](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html) data type.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="cdk-ssm-documents.CreateStackStepProps.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

(Optional) The template resource types that you have permissions to work with for this create stack action.

For example: AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-documents.CreateStackStepProps.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack.

CloudFormation uses the role's credentials to make calls on your behalf.
CloudFormation always uses this role for all future operations on the stack.
As long as users have permission to operate on the stack, CloudFormation uses this role even
if the users don't have permission to pass it. Ensure that the role grants the least amount of privileges.

If you don't specify a value, CloudFormation uses the role that was previously associated with the stack.
If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.

---

##### `stackPolicy`<sup>Optional</sup> <a name="stackPolicy" id="cdk-ssm-documents.CreateStackStepProps.property.stackPolicy"></a>

```typescript
public readonly stackPolicy: BodyOrUrlProp;
```

- *Type:* <a href="#cdk-ssm-documents.BodyOrUrlProp">BodyOrUrlProp</a>

(Optional) Stack policy body or URL.

For more information, see [Prevent Updates to Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html).

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-documents.CreateStackStepProps.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

(Optional) Key-value pairs to associate with this stack.

CloudFormation also propagates these tags to the resources created in the stack. You can specify a maximum number of 10 tags.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="cdk-ssm-documents.CreateStackStepProps.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

(Optional) The amount of time that can pass before the stack status becomes CREATE_FAILED.

If DisableRollback isn't set or is set to false, the stack will be rolled back.

---

### CreateTagsStepProps <a name="CreateTagsStepProps" id="cdk-ssm-documents.CreateTagsStepProps"></a>

Properties for CreateTagStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.CreateTagsStepProps.Initializer"></a>

```typescript
import { CreateTagsStepProps } from 'cdk-ssm-documents'

const createTagsStepProps: CreateTagsStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.resourceIds">resourceIds</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | The IDs of the resource(s) to be tagged. |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.tags">tags</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | The tags to associate with the resource(s). |
| <code><a href="#cdk-ssm-documents.CreateTagsStepProps.property.resourceType">resourceType</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | (Optional) The type of resource(s) to be tagged. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.CreateTagsStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.CreateTagsStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.CreateTagsStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.CreateTagsStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.CreateTagsStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.CreateTagsStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.CreateTagsStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.CreateTagsStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.CreateTagsStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="cdk-ssm-documents.CreateTagsStepProps.property.resourceIds"></a>

```typescript
public readonly resourceIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

The IDs of the resource(s) to be tagged.

If resource type isn't “EC2”, this field can contain only a single item.

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdk-ssm-documents.CreateTagsStepProps.property.tags"></a>

```typescript
public readonly tags: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

The tags to associate with the resource(s).

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="cdk-ssm-documents.CreateTagsStepProps.property.resourceType"></a>

```typescript
public readonly resourceType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>
- *Default:* EC2

(Optional) The type of resource(s) to be tagged.

Valid values: EC2 | ManagedInstance | MaintenanceWindow | Parameter

---

### DeleteImageStepProps <a name="DeleteImageStepProps" id="cdk-ssm-documents.DeleteImageStepProps"></a>

Properties for DeleteImageStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.DeleteImageStepProps.Initializer"></a>

```typescript
import { DeleteImageStepProps } from 'cdk-ssm-documents'

const deleteImageStepProps: DeleteImageStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.DeleteImageStepProps.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The ID of the image to be deleted. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.DeleteImageStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.DeleteImageStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.DeleteImageStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.DeleteImageStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.DeleteImageStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.DeleteImageStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.DeleteImageStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.DeleteImageStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.DeleteImageStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-documents.DeleteImageStepProps.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The ID of the image to be deleted.

---

### DeleteStackStepProps <a name="DeleteStackStepProps" id="cdk-ssm-documents.DeleteStackStepProps"></a>

Properties for DeleteStackStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.DeleteStackStepProps.Initializer"></a>

```typescript
import { DeleteStackStepProps } from 'cdk-ssm-documents'

const deleteStackStepProps: DeleteStackStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.stackNameVariable">stackNameVariable</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Variable that is fed into this step declaring which stack to delete. |
| <code><a href="#cdk-ssm-documents.DeleteStackStepProps.property.roleArn">roleArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.DeleteStackStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.DeleteStackStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.DeleteStackStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.DeleteStackStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.DeleteStackStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.DeleteStackStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.DeleteStackStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.DeleteStackStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.DeleteStackStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `stackNameVariable`<sup>Required</sup> <a name="stackNameVariable" id="cdk-ssm-documents.DeleteStackStepProps.property.stackNameVariable"></a>

```typescript
public readonly stackNameVariable: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>
- *Default:* StackName is the default value.

(Optional) Variable that is fed into this step declaring which stack to delete.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="cdk-ssm-documents.DeleteStackStepProps.property.roleArn"></a>

```typescript
public readonly roleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFormation assumes to create the stack.

CloudFormation uses the role's credentials to make calls on your behalf.
CloudFormation always uses this role for all future operations on the stack.
As long as users have permission to operate on the stack, CloudFormation uses this role even
if the users don't have permission to pass it. Ensure that the role grants the least amount of privileges.

If you don't specify a value, CloudFormation uses the role that was previously associated with the stack.
If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.

---

### DocumentOutput <a name="DocumentOutput" id="cdk-ssm-documents.DocumentOutput"></a>

Outputs from a document via one of the steps.

The outputs are available for use in other documents calling this document via aws:executeAutomation.
The outputs returned from an automation document are returned as a String list named "ouptuts".

#### Initializer <a name="Initializer" id="cdk-ssm-documents.DocumentOutput.Initializer"></a>

```typescript
import { DocumentOutput } from 'cdk-ssm-documents'

const documentOutput: DocumentOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DocumentOutput.property.name">name</a></code> | <code>string</code> | The step and name (in STEP.NAME format) to identify an output expected from one of the document steps. The name must therefore identify a step and an output or will fail validation. |
| <code><a href="#cdk-ssm-documents.DocumentOutput.property.outputType">outputType</a></code> | <code><a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a></code> | The DataType expected by this output. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.DocumentOutput.property.name"></a>

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


##### `outputType`<sup>Required</sup> <a name="outputType" id="cdk-ssm-documents.DocumentOutput.property.outputType"></a>

```typescript
public readonly outputType: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a>

The DataType expected by this output.

This will be validated in simulation mode and will also be used when printing to yaml/json.

---

### DocumentResult <a name="DocumentResult" id="cdk-ssm-documents.DocumentResult"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.DocumentResult.Initializer"></a>

```typescript
import { DocumentResult } from 'cdk-ssm-documents'

const documentResult: DocumentResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DocumentResult.property.executedSteps">executedSteps</a></code> | <code>string[]</code> | All the steps that were executed in this Simulation. |
| <code><a href="#cdk-ssm-documents.DocumentResult.property.responseCode">responseCode</a></code> | <code><a href="#cdk-ssm-documents.ResponseCode">ResponseCode</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DocumentResult.property.outputs">outputs</a></code> | <code>{[ key: string ]: any}</code> | May be empty if responseCode is FAILED/CANCELLED. |
| <code><a href="#cdk-ssm-documents.DocumentResult.property.stackTrace">stackTrace</a></code> | <code>string</code> | undefined if responseCode is SUCCESS. |
| <code><a href="#cdk-ssm-documents.DocumentResult.property.documentOutputs">documentOutputs</a></code> | <code>string[]</code> | *No description.* |

---

##### `executedSteps`<sup>Required</sup> <a name="executedSteps" id="cdk-ssm-documents.DocumentResult.property.executedSteps"></a>

```typescript
public readonly executedSteps: string[];
```

- *Type:* string[]

All the steps that were executed in this Simulation.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="cdk-ssm-documents.DocumentResult.property.responseCode"></a>

```typescript
public readonly responseCode: ResponseCode;
```

- *Type:* <a href="#cdk-ssm-documents.ResponseCode">ResponseCode</a>

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="cdk-ssm-documents.DocumentResult.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

May be empty if responseCode is FAILED/CANCELLED.

There are no outputs provided for Command steps or documents.

---

##### `stackTrace`<sup>Optional</sup> <a name="stackTrace" id="cdk-ssm-documents.DocumentResult.property.stackTrace"></a>

```typescript
public readonly stackTrace: string;
```

- *Type:* string

undefined if responseCode is SUCCESS.

---

##### `documentOutputs`<sup>Required</sup> <a name="documentOutputs" id="cdk-ssm-documents.DocumentResult.property.documentOutputs"></a>

```typescript
public readonly documentOutputs: string[];
```

- *Type:* string[]

---

### ExecuteScriptStepProps <a name="ExecuteScriptStepProps" id="cdk-ssm-documents.ExecuteScriptStepProps"></a>

Properties for ExecuteScriptStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.ExecuteScriptStepProps.Initializer"></a>

```typescript
import { ExecuteScriptStepProps } from 'cdk-ssm-documents'

const executeScriptStepProps: ExecuteScriptStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.inputs">inputs</a></code> | <code>string[]</code> | (Optional) Inputs that the function needs in order to execute. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.language">language</a></code> | <code><a href="#cdk-ssm-documents.ScriptLanguage">ScriptLanguage</a></code> | (Required) Language used to execute the script. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.fullPathToCode">fullPathToCode</a></code> | <code>string</code> | Full path to the code to execute. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.handlerName">handlerName</a></code> | <code>string</code> | (Optional) Function name in fullPathToCode file to use as entry point for script handler. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.inlineCode">inlineCode</a></code> | <code>string</code> | Inline code to be executed. |
| <code><a href="#cdk-ssm-documents.ExecuteScriptStepProps.property.outputs">outputs</a></code> | <code><a href="#cdk-ssm-documents.Output">Output</a>[]</code> | (Optional) Outputs that the function is expected to return. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ExecuteScriptStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.ExecuteScriptStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.ExecuteScriptStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.ExecuteScriptStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.ExecuteScriptStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.ExecuteScriptStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ExecuteScriptStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ExecuteScriptStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ExecuteScriptStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.ExecuteScriptStepProps.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]
- *Default:* []

(Optional) Inputs that the function needs in order to execute.

---

##### `language`<sup>Required</sup> <a name="language" id="cdk-ssm-documents.ExecuteScriptStepProps.property.language"></a>

```typescript
public readonly language: ScriptLanguage;
```

- *Type:* <a href="#cdk-ssm-documents.ScriptLanguage">ScriptLanguage</a>

(Required) Language used to execute the script.

---

##### `fullPathToCode`<sup>Optional</sup> <a name="fullPathToCode" id="cdk-ssm-documents.ExecuteScriptStepProps.property.fullPathToCode"></a>

```typescript
public readonly fullPathToCode: string;
```

- *Type:* string

Full path to the code to execute.

File is parsed to produce yaml/json.
Simulation will execute this file using the language specified.
Either this OR inclineCode must be provided.

---

##### `handlerName`<sup>Optional</sup> <a name="handlerName" id="cdk-ssm-documents.ExecuteScriptStepProps.property.handlerName"></a>

```typescript
public readonly handlerName: string;
```

- *Type:* string
- *Default:* script_handler

(Optional) Function name in fullPathToCode file to use as entry point for script handler.

---

##### `inlineCode`<sup>Optional</sup> <a name="inlineCode" id="cdk-ssm-documents.ExecuteScriptStepProps.property.inlineCode"></a>

```typescript
public readonly inlineCode: string;
```

- *Type:* string

Inline code to be executed.

String will be used to produce function in yaml/json.
Simulation will execute the function in this string using the language specified.
Either this OR fullPathToCode must be provided.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="cdk-ssm-documents.ExecuteScriptStepProps.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#cdk-ssm-documents.Output">Output</a>[]
- *Default:* []

(Optional) Outputs that the function is expected to return.

Be sure to prefix the selector for these outputs with "$.Payload." for executeScript step outputs.

---

### ExecuteStateMachineStepProps <a name="ExecuteStateMachineStepProps" id="cdk-ssm-documents.ExecuteStateMachineStepProps"></a>

Props for ExecuteStateMachine step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.ExecuteStateMachineStepProps.Initializer"></a>

```typescript
import { ExecuteStateMachineStepProps } from 'cdk-ssm-documents'

const executeStateMachineStepProps: ExecuteStateMachineStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.stateMachineArn">stateMachineArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The Amazon Resource Name (ARN) of the Step Functions state machine. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.executionName">executionName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The name of the execution. |
| <code><a href="#cdk-ssm-documents.ExecuteStateMachineStepProps.property.input">input</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) A string that contains the JSON input data for the execution. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The Amazon Resource Name (ARN) of the Step Functions state machine.

---

##### `executionName`<sup>Optional</sup> <a name="executionName" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.executionName"></a>

```typescript
public readonly executionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The name of the execution.

---

##### `input`<sup>Optional</sup> <a name="input" id="cdk-ssm-documents.ExecuteStateMachineStepProps.property.input"></a>

```typescript
public readonly input: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) A string that contains the JSON input data for the execution.

---

### Input <a name="Input" id="cdk-ssm-documents.Input"></a>

Properties of inputs supported by SSM documents.

These are NOT used for declaring step inputs, rather only for document inputs.
See https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-doc-syntax.html

#### Initializer <a name="Initializer" id="cdk-ssm-documents.Input.Initializer"></a>

```typescript
import { Input } from 'cdk-ssm-documents'

const input: Input = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Input.property.inputType">inputType</a></code> | <code><a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a></code> | (Required) The DataTypeEnum of the input. |
| <code><a href="#cdk-ssm-documents.Input.property.name">name</a></code> | <code>string</code> | (Required) The name of the input by which to be referenced by steps in the document. |
| <code><a href="#cdk-ssm-documents.Input.property.allowedPattern">allowedPattern</a></code> | <code>string</code> | (Optional) Pattern that this input value must match. |
| <code><a href="#cdk-ssm-documents.Input.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | (Optional) List of allowed values that this input may be. |
| <code><a href="#cdk-ssm-documents.Input.property.defaultValue">defaultValue</a></code> | <code>string</code> | (Optional) Default value to use for this input if not specified when invoking the document. |
| <code><a href="#cdk-ssm-documents.Input.property.description">description</a></code> | <code>string</code> | (Optional) The description of the input. |
| <code><a href="#cdk-ssm-documents.Input.property.maxItems">maxItems</a></code> | <code>number</code> | (Optional) Maximum number of items that this input value (list) must contain. |
| <code><a href="#cdk-ssm-documents.Input.property.minItems">minItems</a></code> | <code>number</code> | (Optional) Minimum number of items that this input value (list) must contain. |

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="cdk-ssm-documents.Input.property.inputType"></a>

```typescript
public readonly inputType: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a>

(Required) The DataTypeEnum of the input.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.Input.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Required) The name of the input by which to be referenced by steps in the document.

---

##### `allowedPattern`<sup>Optional</sup> <a name="allowedPattern" id="cdk-ssm-documents.Input.property.allowedPattern"></a>

```typescript
public readonly allowedPattern: string;
```

- *Type:* string
- *Default:* undefined

(Optional) Pattern that this input value must match.

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="cdk-ssm-documents.Input.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]
- *Default:* undefined

(Optional) List of allowed values that this input may be.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="cdk-ssm-documents.Input.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string
- *Default:* undefined

(Optional) Default value to use for this input if not specified when invoking the document.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.Input.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* name

(Optional) The description of the input.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="cdk-ssm-documents.Input.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number
- *Default:* undefined

(Optional) Maximum number of items that this input value (list) must contain.

---

##### `minItems`<sup>Optional</sup> <a name="minItems" id="cdk-ssm-documents.Input.property.minItems"></a>

```typescript
public readonly minItems: number;
```

- *Type:* number
- *Default:* undefined

(Optional) Minimum number of items that this input value (list) must contain.

---

### Invocation <a name="Invocation" id="cdk-ssm-documents.Invocation"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.Invocation.Initializer"></a>

```typescript
import { Invocation } from 'cdk-ssm-documents'

const invocation: Invocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Invocation.property.awsApi">awsApi</a></code> | <code>string</code> | (Required) AWS api to invoke; |
| <code><a href="#cdk-ssm-documents.Invocation.property.awsParams">awsParams</a></code> | <code>{[ key: string ]: any}</code> | (Required )AWS params. |
| <code><a href="#cdk-ssm-documents.Invocation.property.service">service</a></code> | <code>string</code> | (Required) AWS service to invoke. |

---

##### `awsApi`<sup>Required</sup> <a name="awsApi" id="cdk-ssm-documents.Invocation.property.awsApi"></a>

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


##### `awsParams`<sup>Required</sup> <a name="awsParams" id="cdk-ssm-documents.Invocation.property.awsParams"></a>

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


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.Invocation.property.service"></a>

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


### InvokeLambdaFunctionStepProps <a name="InvokeLambdaFunctionStepProps" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps"></a>

Properties for InvokeLambdaFunctionStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.Initializer"></a>

```typescript
import { InvokeLambdaFunctionStepProps } from 'cdk-ssm-documents'

const invokeLambdaFunctionStepProps: InvokeLambdaFunctionStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.functionName">functionName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The name of the Lambda function. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.clientContext">clientContext</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The client-specific information. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.invocationType">invocationType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The invocation type. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.logType">logType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) If the default value is Tail, the invocation type must be RequestResponse. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.payload">payload</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The JSON input for your Lambda function. |
| <code><a href="#cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.qualifier">qualifier</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The function version or alias name. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.functionName"></a>

```typescript
public readonly functionName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The name of the Lambda function.

This function must exist.

---

##### `clientContext`<sup>Optional</sup> <a name="clientContext" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.clientContext"></a>

```typescript
public readonly clientContext: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The client-specific information.

---

##### `invocationType`<sup>Optional</sup> <a name="invocationType" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.invocationType"></a>

```typescript
public readonly invocationType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The invocation type.

The default value is RequestResponse.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.logType"></a>

```typescript
public readonly logType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) If the default value is Tail, the invocation type must be RequestResponse.

Lambda returns the last 4 KB of log data produced by your Lambda function, base64-encoded.

---

##### `payload`<sup>Optional</sup> <a name="payload" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.payload"></a>

```typescript
public readonly payload: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

(Optional) The JSON input for your Lambda function.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="cdk-ssm-documents.InvokeLambdaFunctionStepProps.property.qualifier"></a>

```typescript
public readonly qualifier: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The function version or alias name.

---

### InvokeWebhookProps <a name="InvokeWebhookProps" id="cdk-ssm-documents.InvokeWebhookProps"></a>

The properties for IWebhook.Invoke.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.InvokeWebhookProps.Initializer"></a>

```typescript
import { InvokeWebhookProps } from 'cdk-ssm-documents'

const invokeWebhookProps: InvokeWebhookProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookProps.property.integrationName">integrationName</a></code> | <code>string</code> | The name of the Automation integration. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookProps.property.body">body</a></code> | <code>string</code> | (Optional) The payload you want to send when your webhook integration is invoked. |

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="cdk-ssm-documents.InvokeWebhookProps.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

The name of the Automation integration.

For example, exampleIntegration. The integration you specify must already exist.

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk-ssm-documents.InvokeWebhookProps.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

(Optional) The payload you want to send when your webhook integration is invoked.

---

### InvokeWebhookResult <a name="InvokeWebhookResult" id="cdk-ssm-documents.InvokeWebhookResult"></a>

Response from IWebhook.Invoke.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.InvokeWebhookResult.Initializer"></a>

```typescript
import { InvokeWebhookResult } from 'cdk-ssm-documents'

const invokeWebhookResult: InvokeWebhookResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookResult.property.response">response</a></code> | <code>string</code> | The text received from the webhook provider response. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookResult.property.responseCode">responseCode</a></code> | <code>number</code> | The HTTP status code received from the webhook provider response. |

---

##### `response`<sup>Required</sup> <a name="response" id="cdk-ssm-documents.InvokeWebhookResult.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The text received from the webhook provider response.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="cdk-ssm-documents.InvokeWebhookResult.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

The HTTP status code received from the webhook provider response.

---

### InvokeWebhookStepProps <a name="InvokeWebhookStepProps" id="cdk-ssm-documents.InvokeWebhookStepProps"></a>

Properties for InvokeWebhookStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.InvokeWebhookStepProps.Initializer"></a>

```typescript
import { InvokeWebhookStepProps } from 'cdk-ssm-documents'

const invokeWebhookStepProps: InvokeWebhookStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.integrationName">integrationName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The name of the Automation integration. |
| <code><a href="#cdk-ssm-documents.InvokeWebhookStepProps.property.body">body</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The payload you want to send when your webhook integration is invoked. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.InvokeWebhookStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.InvokeWebhookStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.InvokeWebhookStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.InvokeWebhookStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.InvokeWebhookStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.InvokeWebhookStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.InvokeWebhookStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.InvokeWebhookStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.InvokeWebhookStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="cdk-ssm-documents.InvokeWebhookStepProps.property.integrationName"></a>

```typescript
public readonly integrationName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The name of the Automation integration.

For example, exampleIntegration. The integration you specify must already exist.

---

##### `body`<sup>Optional</sup> <a name="body" id="cdk-ssm-documents.InvokeWebhookStepProps.property.body"></a>

```typescript
public readonly body: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The payload you want to send when your webhook integration is invoked.

---

### Output <a name="Output" id="cdk-ssm-documents.Output"></a>

Object used to specify step output.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.Output.Initializer"></a>

```typescript
import { Output } from 'cdk-ssm-documents'

const output: Output = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Output.property.name">name</a></code> | <code>string</code> | The name that can be used by subsequent steps to refernce the stored value. |
| <code><a href="#cdk-ssm-documents.Output.property.outputType">outputType</a></code> | <code><a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a></code> | The DataType expected by this output. |
| <code><a href="#cdk-ssm-documents.Output.property.selector">selector</a></code> | <code>string</code> | Json selector for locating the value in the json step response. |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ssm-documents.Output.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name that can be used by subsequent steps to refernce the stored value.

Note that Outputs will be PREPENDED with the step name.

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="cdk-ssm-documents.Output.property.outputType"></a>

```typescript
public readonly outputType: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a>

The DataType expected by this output.

This will be validated in simulation mode and will also be used when printing to yaml/json.

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-documents.Output.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

Json selector for locating the value in the json step response.

---

### PreconditionProps <a name="PreconditionProps" id="cdk-ssm-documents.PreconditionProps"></a>

The precondition parameter is used as a comparator of SSM documents inputs to determine whether a command step would be executed or not.

See https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html

#### Initializer <a name="Initializer" id="cdk-ssm-documents.PreconditionProps.Initializer"></a>

```typescript
import { PreconditionProps } from 'cdk-ssm-documents'

const preconditionProps: PreconditionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.PreconditionProps.property.operationType">operationType</a></code> | <code><a href="#cdk-ssm-documents.Operation">Operation</a></code> | (Required) the operation used to compare the parameter with the variable. |
| <code><a href="#cdk-ssm-documents.PreconditionProps.property.variable1">variable1</a></code> | <code><a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a></code> | (Required) the variable to compare against the constant. |
| <code><a href="#cdk-ssm-documents.PreconditionProps.property.variable2">variable2</a></code> | <code><a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a></code> | (Required) the being compared against the variable. |

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="cdk-ssm-documents.PreconditionProps.property.operationType"></a>

```typescript
public readonly operationType: Operation;
```

- *Type:* <a href="#cdk-ssm-documents.Operation">Operation</a>

(Required) the operation used to compare the parameter with the variable.

---

##### `variable1`<sup>Required</sup> <a name="variable1" id="cdk-ssm-documents.PreconditionProps.property.variable1"></a>

```typescript
public readonly variable1: IGenericVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

(Required) the variable to compare against the constant.

---

##### `variable2`<sup>Required</sup> <a name="variable2" id="cdk-ssm-documents.PreconditionProps.property.variable2"></a>

```typescript
public readonly variable2: IGenericVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

(Required) the being compared against the variable.

---

### PsModuleStepProps <a name="PsModuleStepProps" id="cdk-ssm-documents.PsModuleStepProps"></a>

Properties for ps Module step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.PsModuleStepProps.Initializer"></a>

```typescript
import { PsModuleStepProps } from 'cdk-ssm-documents'

const psModuleStepProps: PsModuleStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.source">source</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The URL or local path on the instance to the application .zip file. The name of the zip file must be the name of the module to be installed. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]</code> | Specify the commands to run or the path to an existing script on the instance. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.sourceHash">sourceHash</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The SHA256 hash of the .zip file. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The time in seconds for a command to be completed before it's considered to have failed. |
| <code><a href="#cdk-ssm-documents.PsModuleStepProps.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The path to the working directory on your instance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.PsModuleStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.PsModuleStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.PsModuleStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.PsModuleStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.PsModuleStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.PsModuleStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.PsModuleStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.PsModuleStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.PsModuleStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.PsModuleStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-ssm-documents.PsModuleStepProps.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The URL or local path on the instance to the application .zip file. The name of the zip file must be the name of the module to be installed.

---

##### `runCommand`<sup>Optional</sup> <a name="runCommand" id="cdk-ssm-documents.PsModuleStepProps.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]

Specify the commands to run or the path to an existing script on the instance.

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="cdk-ssm-documents.PsModuleStepProps.property.sourceHash"></a>

```typescript
public readonly sourceHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The SHA256 hash of the .zip file.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.PsModuleStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The time in seconds for a command to be completed before it's considered to have failed.

When the timeout is reached, Systems Manager stops the command execution.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-documents.PsModuleStepProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The path to the working directory on your instance.

---

### RunCommandOutputs <a name="RunCommandOutputs" id="cdk-ssm-documents.RunCommandOutputs"></a>

Outputs for aws:runCommand.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.RunCommandOutputs.Initializer"></a>

```typescript
import { RunCommandOutputs } from 'cdk-ssm-documents'

const runCommandOutputs: RunCommandOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandOutputs.property.commandId">commandId</a></code> | <code>string</code> | The ID of the command. |
| <code><a href="#cdk-ssm-documents.RunCommandOutputs.property.status">status</a></code> | <code>string</code> | The status of the command. |
| <code><a href="#cdk-ssm-documents.RunCommandOutputs.property.output">output</a></code> | <code>string</code> | The output of the command. |
| <code><a href="#cdk-ssm-documents.RunCommandOutputs.property.responseCode">responseCode</a></code> | <code>number</code> | The response code of the command. |

---

##### `commandId`<sup>Required</sup> <a name="commandId" id="cdk-ssm-documents.RunCommandOutputs.property.commandId"></a>

```typescript
public readonly commandId: string;
```

- *Type:* string

The ID of the command.

---

##### `status`<sup>Required</sup> <a name="status" id="cdk-ssm-documents.RunCommandOutputs.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the command.

---

##### `output`<sup>Optional</sup> <a name="output" id="cdk-ssm-documents.RunCommandOutputs.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

The output of the command.

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="cdk-ssm-documents.RunCommandOutputs.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

The response code of the command.

---

### RunCommandProps <a name="RunCommandProps" id="cdk-ssm-documents.RunCommandProps"></a>

Inputs for aws:runCommand.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.RunCommandProps.Initializer"></a>

```typescript
import { RunCommandProps } from 'cdk-ssm-documents'

const runCommandProps: RunCommandProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.documentName">documentName</a></code> | <code>string</code> | If the Command type document is owned by you or AWS, specify the name of the document. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.targets">targets</a></code> | <code>string[]</code> | The instance IDs where you want the command to run. You can specify a maximum of 50 IDs. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.cloudWatchOutputConfig">cloudWatchOutputConfig</a></code> | <code>{[ key: string ]: any}</code> | (Optional) Configuration options for sending command output to Amazon CloudWatch Logs. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.comment">comment</a></code> | <code>string</code> | (Optional) User-defined information about the command. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.documentHash">documentHash</a></code> | <code>string</code> | (Optional) The hash for the document. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.documentHashType">documentHashType</a></code> | <code><a href="#cdk-ssm-documents.DocumentHashType">DocumentHashType</a></code> | (Optional) The type of the hash. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.maxConcurrency">maxConcurrency</a></code> | <code>number</code> | (Optional) The maximum concurrency. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.maxErrors">maxErrors</a></code> | <code>number</code> | (Optional) The maximum errors. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.notificationConfig">notificationConfig</a></code> | <code>{[ key: string ]: any}</code> | (Optional) The configurations for sending notifications. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.outputS3BucketName">outputS3BucketName</a></code> | <code>string</code> | (Optional) The name of the S3 bucket for command output responses. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>string</code> | (Optional) The prefix. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: any}</code> | (Optional) The required and optional parameters specified in the document. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.serviceRoleArn">serviceRoleArn</a></code> | <code>string</code> | (Optional) The ARN of the AWS Identity and Access Management (IAM) role. |
| <code><a href="#cdk-ssm-documents.RunCommandProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance. |

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-documents.RunCommandProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

If the Command type document is owned by you or AWS, specify the name of the document.

If you're using a document shared with you by a different AWS account, specify the Amazon Resource Name (ARN) of the document.

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-ssm-documents.RunCommandProps.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

The instance IDs where you want the command to run. You can specify a maximum of 50 IDs.

You can also use the pseudo parameter {{RESOURCE_ID}} in place of instance IDs to run the command on all instances in the target group. For more information about pseudo parameters, see [About pseudo parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-register-tasks-parameters.html).

Another alternative is to send commands to a fleet of instances by using the Targets parameter. The Targets parameter accepts Amazon Elastic Compute Cloud (Amazon EC2) tags. For more information about how to use the Targets parameter, see [Using targets and rate controls to send commands to a fleet](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html).

---

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="cloudWatchOutputConfig" id="cdk-ssm-documents.RunCommandProps.property.cloudWatchOutputConfig"></a>

```typescript
public readonly cloudWatchOutputConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Optional) Configuration options for sending command output to Amazon CloudWatch Logs.

For more information about sending command output to CloudWatch Logs, see [Configuring Amazon CloudWatch Logs for Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-rc-setting-up-cwlogs.html).

---

##### `comment`<sup>Optional</sup> <a name="comment" id="cdk-ssm-documents.RunCommandProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

(Optional) User-defined information about the command.

---

##### `documentHash`<sup>Optional</sup> <a name="documentHash" id="cdk-ssm-documents.RunCommandProps.property.documentHash"></a>

```typescript
public readonly documentHash: string;
```

- *Type:* string

(Optional) The hash for the document.

---

##### `documentHashType`<sup>Optional</sup> <a name="documentHashType" id="cdk-ssm-documents.RunCommandProps.property.documentHashType"></a>

```typescript
public readonly documentHashType: DocumentHashType;
```

- *Type:* <a href="#cdk-ssm-documents.DocumentHashType">DocumentHashType</a>

(Optional) The type of the hash.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="cdk-ssm-documents.RunCommandProps.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: number;
```

- *Type:* number

(Optional) The maximum concurrency.

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="cdk-ssm-documents.RunCommandProps.property.maxErrors"></a>

```typescript
public readonly maxErrors: number;
```

- *Type:* number

(Optional) The maximum errors.

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="cdk-ssm-documents.RunCommandProps.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Optional) The configurations for sending notifications.

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="cdk-ssm-documents.RunCommandProps.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: string;
```

- *Type:* string

(Optional) The name of the S3 bucket for command output responses.

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="cdk-ssm-documents.RunCommandProps.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: string;
```

- *Type:* string

(Optional) The prefix.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-documents.RunCommandProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

(Optional) The required and optional parameters specified in the document.

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-ssm-documents.RunCommandProps.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: string;
```

- *Type:* string

(Optional) The ARN of the AWS Identity and Access Management (IAM) role.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunCommandProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance.

If the command isn't received by the SSM Agent on the instance before the value specified is reached, then the status of the command changes to Delivery Timed Out.

---

### RunCommandStepProps <a name="RunCommandStepProps" id="cdk-ssm-documents.RunCommandStepProps"></a>

Properties for RunCommandStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.RunCommandStepProps.Initializer"></a>

```typescript
import { RunCommandStepProps } from 'cdk-ssm-documents'

const runCommandStepProps: RunCommandStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.documentName">documentName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | If the Command type document is owned by you or AWS, specify the name of the document. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.targets">targets</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a> \| <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | The instance IDs where you want the command to run. You can specify a maximum of 50 IDs. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.cloudWatchOutputConfig">cloudWatchOutputConfig</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | (Optional) Configuration options for sending command output to Amazon CloudWatch Logs. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.commandTimeoutSeconds">commandTimeoutSeconds</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | (Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.comment">comment</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) User-defined information about the command. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.documentHash">documentHash</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The hash for the document. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.documentHashType">documentHashType</a></code> | <code><a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a></code> | (Optional) The type of the hash. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.maxConcurrency">maxConcurrency</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | (Optional) The maximum concurrency. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.maxErrors">maxErrors</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | (Optional) The maximum errors. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.notificationConfig">notificationConfig</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The configurations for sending notifications. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.outputS3BucketName">outputS3BucketName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The name of the S3 bucket for command output responses. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The prefix. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.parameters">parameters</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The required and optional parameters specified in the document. |
| <code><a href="#cdk-ssm-documents.RunCommandStepProps.property.serviceRoleArn">serviceRoleArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The ARN of the AWS Identity and Access Management (IAM) role. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunCommandStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.RunCommandStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.RunCommandStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.RunCommandStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.RunCommandStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.RunCommandStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.RunCommandStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.RunCommandStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunCommandStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="cdk-ssm-documents.RunCommandStepProps.property.documentName"></a>

```typescript
public readonly documentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

If the Command type document is owned by you or AWS, specify the name of the document.

If you're using a document shared with you by a different AWS account, specify the Amazon Resource Name (ARN) of the document.

---

##### `targets`<sup>Required</sup> <a name="targets" id="cdk-ssm-documents.RunCommandStepProps.property.targets"></a>

```typescript
public readonly targets: IStringListVariable | IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a> | <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

The instance IDs where you want the command to run. You can specify a maximum of 50 IDs.

You can also use the pseudo parameter {{RESOURCE_ID}} in place of instance IDs to run the command on all instances in the target group. For more information about pseudo parameters, see [About pseudo parameters](https://docs.aws.amazon.com/systems-manager/latest/userguide/mw-cli-register-tasks-parameters.html).

Another alternative is to send commands to a fleet of instances by using the Targets parameter. The Targets parameter accepts Amazon Elastic Compute Cloud (Amazon EC2) tags. For more information about how to use the Targets parameter, see [Using targets and rate controls to send commands to a fleet](https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html).

---

##### `cloudWatchOutputConfig`<sup>Optional</sup> <a name="cloudWatchOutputConfig" id="cdk-ssm-documents.RunCommandStepProps.property.cloudWatchOutputConfig"></a>

```typescript
public readonly cloudWatchOutputConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

(Optional) Configuration options for sending command output to Amazon CloudWatch Logs.

For more information about sending command output to CloudWatch Logs, see [Configuring Amazon CloudWatch Logs for Run Command](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-rc-setting-up-cwlogs.html).

---

##### `commandTimeoutSeconds`<sup>Optional</sup> <a name="commandTimeoutSeconds" id="cdk-ssm-documents.RunCommandStepProps.property.commandTimeoutSeconds"></a>

```typescript
public readonly commandTimeoutSeconds: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

(Optional) The amount of time in seconds to wait for a command to deliver to the AWS Systems Manager SSM Agent on an instance.

If the command isn't received by the SSM Agent on the instance before the value specified is reached, then the status of the command changes to Delivery Timed Out.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="cdk-ssm-documents.RunCommandStepProps.property.comment"></a>

```typescript
public readonly comment: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) User-defined information about the command.

---

##### `documentHash`<sup>Optional</sup> <a name="documentHash" id="cdk-ssm-documents.RunCommandStepProps.property.documentHash"></a>

```typescript
public readonly documentHash: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The hash for the document.

---

##### `documentHashType`<sup>Optional</sup> <a name="documentHashType" id="cdk-ssm-documents.RunCommandStepProps.property.documentHashType"></a>

```typescript
public readonly documentHashType: IEnumVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

(Optional) The type of the hash.

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="cdk-ssm-documents.RunCommandStepProps.property.maxConcurrency"></a>

```typescript
public readonly maxConcurrency: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

(Optional) The maximum concurrency.

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="cdk-ssm-documents.RunCommandStepProps.property.maxErrors"></a>

```typescript
public readonly maxErrors: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

(Optional) The maximum errors.

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="cdk-ssm-documents.RunCommandStepProps.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

(Optional) The configurations for sending notifications.

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="cdk-ssm-documents.RunCommandStepProps.property.outputS3BucketName"></a>

```typescript
public readonly outputS3BucketName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The name of the S3 bucket for command output responses.

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="cdk-ssm-documents.RunCommandStepProps.property.outputS3KeyPrefix"></a>

```typescript
public readonly outputS3KeyPrefix: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The prefix.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-ssm-documents.RunCommandStepProps.property.parameters"></a>

```typescript
public readonly parameters: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

(Optional) The required and optional parameters specified in the document.

---

##### `serviceRoleArn`<sup>Optional</sup> <a name="serviceRoleArn" id="cdk-ssm-documents.RunCommandStepProps.property.serviceRoleArn"></a>

```typescript
public readonly serviceRoleArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The ARN of the AWS Identity and Access Management (IAM) role.

---

### RunInstanceStepProps <a name="RunInstanceStepProps" id="cdk-ssm-documents.RunInstanceStepProps"></a>

Properties for RunInstanceStep.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.RunInstanceStepProps.Initializer"></a>

```typescript
import { RunInstanceStepProps } from 'cdk-ssm-documents'

const runInstanceStepProps: RunInstanceStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.imageId">imageId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The ID of the Amazon Machine Image (AMI). |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.additionalInfo">additionalInfo</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Reserved. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | (Optional) The block devices for the instance. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.clientToken">clientToken</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The identifier to ensure idempotency of the request. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.disableApiTermination">disableApiTermination</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Turns on or turns off instance API termination. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.ebsOptimized">ebsOptimized</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Turns on or turns off Amazon Elastic Block Store (Amazon EBS) optimization. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) instance profile for the instance. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.iamInstanceProfileName">iamInstanceProfileName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The name of the IAM instance profile for the instance. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Indicates whether the instance stops or terminates on system shutdown. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.instanceType">instanceType</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The instance type. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.kernelId">kernelId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The ID of the kernel. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.keyName">keyName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The name of the key pair. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.maxInstanceCount">maxInstanceCount</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | (Optional) The maximum number of instances to be launched. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.minInstanceCount">minInstanceCount</a></code> | <code><a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a></code> | (Optional) The minimum number of instances to be launched. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.monitoring">monitoring</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | (Optional) Turns on or turns off detailed monitoring. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | (Optional) The network interfaces. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.placement">placement</a></code> | <code><a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a></code> | (Optional) The placement for the instance. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.privateIpAddress">privateIpAddress</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The primary IPv4 address. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.ramdiskId">ramdiskId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The ID of the RAM disk. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.securityGroupIds">securityGroupIds</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | (Optional) The IDs of the security groups for the instance. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.securityGroups">securityGroups</a></code> | <code><a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a></code> | (Optional) The names of the security groups for the instance. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.subnetId">subnetId</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The subnet ID. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a></code> | (Optional) The tags to apply to the resources during launch. |
| <code><a href="#cdk-ssm-documents.RunInstanceStepProps.property.userData">userData</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) A script provided as a string literal value. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunInstanceStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.RunInstanceStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.RunInstanceStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.RunInstanceStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.RunInstanceStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.RunInstanceStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.RunInstanceStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.RunInstanceStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunInstanceStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-ssm-documents.RunInstanceStepProps.property.imageId"></a>

```typescript
public readonly imageId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The ID of the Amazon Machine Image (AMI).

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="cdk-ssm-documents.RunInstanceStepProps.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Reserved.

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-ssm-documents.RunInstanceStepProps.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

(Optional) The block devices for the instance.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="cdk-ssm-documents.RunInstanceStepProps.property.clientToken"></a>

```typescript
public readonly clientToken: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The identifier to ensure idempotency of the request.

---

##### `disableApiTermination`<sup>Optional</sup> <a name="disableApiTermination" id="cdk-ssm-documents.RunInstanceStepProps.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

(Optional) Turns on or turns off instance API termination.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="cdk-ssm-documents.RunInstanceStepProps.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

(Optional) Turns on or turns off Amazon Elastic Block Store (Amazon EBS) optimization.

---

##### `iamInstanceProfileArn`<sup>Optional</sup> <a name="iamInstanceProfileArn" id="cdk-ssm-documents.RunInstanceStepProps.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) instance profile for the instance.

---

##### `iamInstanceProfileName`<sup>Optional</sup> <a name="iamInstanceProfileName" id="cdk-ssm-documents.RunInstanceStepProps.property.iamInstanceProfileName"></a>

```typescript
public readonly iamInstanceProfileName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The name of the IAM instance profile for the instance.

---

##### `instanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="instanceInitiatedShutdownBehavior" id="cdk-ssm-documents.RunInstanceStepProps.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Indicates whether the instance stops or terminates on system shutdown.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-ssm-documents.RunInstanceStepProps.property.instanceType"></a>

```typescript
public readonly instanceType: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The instance type.

---

##### `kernelId`<sup>Optional</sup> <a name="kernelId" id="cdk-ssm-documents.RunInstanceStepProps.property.kernelId"></a>

```typescript
public readonly kernelId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The ID of the kernel.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="cdk-ssm-documents.RunInstanceStepProps.property.keyName"></a>

```typescript
public readonly keyName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The name of the key pair.

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="cdk-ssm-documents.RunInstanceStepProps.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

(Optional) The maximum number of instances to be launched.

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="cdk-ssm-documents.RunInstanceStepProps.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: INumberVariable;
```

- *Type:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

(Optional) The minimum number of instances to be launched.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="cdk-ssm-documents.RunInstanceStepProps.property.monitoring"></a>

```typescript
public readonly monitoring: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

(Optional) Turns on or turns off detailed monitoring.

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="cdk-ssm-documents.RunInstanceStepProps.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

(Optional) The network interfaces.

---

##### `placement`<sup>Optional</sup> <a name="placement" id="cdk-ssm-documents.RunInstanceStepProps.property.placement"></a>

```typescript
public readonly placement: IStringMapVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

(Optional) The placement for the instance.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="cdk-ssm-documents.RunInstanceStepProps.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The primary IPv4 address.

---

##### `ramdiskId`<sup>Optional</sup> <a name="ramdiskId" id="cdk-ssm-documents.RunInstanceStepProps.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The ID of the RAM disk.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="cdk-ssm-documents.RunInstanceStepProps.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

(Optional) The IDs of the security groups for the instance.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-ssm-documents.RunInstanceStepProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: IStringListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

(Optional) The names of the security groups for the instance.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="cdk-ssm-documents.RunInstanceStepProps.property.subnetId"></a>

```typescript
public readonly subnetId: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The subnet ID.

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="cdk-ssm-documents.RunInstanceStepProps.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: IMapListVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

(Optional) The tags to apply to the resources during launch.

You can only tag instances and volumes at launch. The specified tags are applied to all instances or volumes that are created during launch.
To tag an instance after it has been launched, use the aws:createTags – Create tags for AWS resources action.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="cdk-ssm-documents.RunInstanceStepProps.property.userData"></a>

```typescript
public readonly userData: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) A script provided as a string literal value.

If a literal value is entered, then it must be Base64-encoded.

---

### RunPowerShellScriptStepProps <a name="RunPowerShellScriptStepProps" id="cdk-ssm-documents.RunPowerShellScriptStepProps"></a>

Properties for runPowerShellScript step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.RunPowerShellScriptStepProps.Initializer"></a>

```typescript
import { RunPowerShellScriptStepProps } from 'cdk-ssm-documents'

const runPowerShellScriptStepProps: RunPowerShellScriptStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]</code> | Specify the commands to run or the path to an existing script on the instance. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The time in seconds for a command to be completed before it's considered to have failed. |
| <code><a href="#cdk-ssm-documents.RunPowerShellScriptStepProps.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The path to the working directory on your instance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]

Specify the commands to run or the path to an existing script on the instance.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The time in seconds for a command to be completed before it's considered to have failed.

When the timeout is reached, Systems Manager stops the command execution.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-documents.RunPowerShellScriptStepProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The path to the working directory on your instance.

---

### RunShellScriptStepProps <a name="RunShellScriptStepProps" id="cdk-ssm-documents.RunShellScriptStepProps"></a>

Properties for sleep step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.RunShellScriptStepProps.Initializer"></a>

```typescript
import { RunShellScriptStepProps } from 'cdk-ssm-documents'

const runShellScriptStepProps: RunShellScriptStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.runCommand">runCommand</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]</code> | Specify the commands to run or the path to an existing script on the instance. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) The time in seconds for a command to be completed before it's considered to have failed. |
| <code><a href="#cdk-ssm-documents.RunShellScriptStepProps.property.workingDirectory">workingDirectory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) The path to the working directory on your instance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.RunShellScriptStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.RunShellScriptStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.RunShellScriptStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.RunShellScriptStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.RunShellScriptStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.RunShellScriptStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.RunShellScriptStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.RunShellScriptStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.RunShellScriptStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.RunShellScriptStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

##### `runCommand`<sup>Required</sup> <a name="runCommand" id="cdk-ssm-documents.RunShellScriptStepProps.property.runCommand"></a>

```typescript
public readonly runCommand: IStringVariable[];
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>[]

Specify the commands to run or the path to an existing script on the instance.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.RunShellScriptStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

(Optional) The time in seconds for a command to be completed before it's considered to have failed.

When the timeout is reached, Systems Manager stops the command execution.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="cdk-ssm-documents.RunShellScriptStepProps.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) The path to the working directory on your instance.

---

### SimulationResult <a name="SimulationResult" id="cdk-ssm-documents.SimulationResult"></a>

Response object returned from steps.

A successful response will contain the outputs expected.
A failed/canceled response will contain the stackTrace.
A failure will propagate up the stack unless the step is marked to succeed on failure.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.SimulationResult.Initializer"></a>

```typescript
import { SimulationResult } from 'cdk-ssm-documents'

const simulationResult: SimulationResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SimulationResult.property.executedSteps">executedSteps</a></code> | <code>string[]</code> | All the steps that were executed in this Simulation. |
| <code><a href="#cdk-ssm-documents.SimulationResult.property.responseCode">responseCode</a></code> | <code><a href="#cdk-ssm-documents.ResponseCode">ResponseCode</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SimulationResult.property.outputs">outputs</a></code> | <code>{[ key: string ]: any}</code> | May be empty if responseCode is FAILED/CANCELLED. |
| <code><a href="#cdk-ssm-documents.SimulationResult.property.stackTrace">stackTrace</a></code> | <code>string</code> | undefined if responseCode is SUCCESS. |

---

##### `executedSteps`<sup>Required</sup> <a name="executedSteps" id="cdk-ssm-documents.SimulationResult.property.executedSteps"></a>

```typescript
public readonly executedSteps: string[];
```

- *Type:* string[]

All the steps that were executed in this Simulation.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="cdk-ssm-documents.SimulationResult.property.responseCode"></a>

```typescript
public readonly responseCode: ResponseCode;
```

- *Type:* <a href="#cdk-ssm-documents.ResponseCode">ResponseCode</a>

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="cdk-ssm-documents.SimulationResult.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

May be empty if responseCode is FAILED/CANCELLED.

There are no outputs provided for Command steps or documents.

---

##### `stackTrace`<sup>Optional</sup> <a name="stackTrace" id="cdk-ssm-documents.SimulationResult.property.stackTrace"></a>

```typescript
public readonly stackTrace: string;
```

- *Type:* string

undefined if responseCode is SUCCESS.

---

### SleepStepProps <a name="SleepStepProps" id="cdk-ssm-documents.SleepStepProps"></a>

Properties for sleep step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.SleepStepProps.Initializer"></a>

```typescript
import { SleepStepProps } from 'cdk-ssm-documents'

const sleepStepProps: SleepStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.SleepStepProps.property.sleepSeconds">sleepSeconds</a></code> | <code>number</code> | (Required) The amount of seconds to sleep for. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.SleepStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.SleepStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.SleepStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.SleepStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.SleepStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.SleepStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.SleepStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.SleepStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.SleepStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `sleepSeconds`<sup>Required</sup> <a name="sleepSeconds" id="cdk-ssm-documents.SleepStepProps.property.sleepSeconds"></a>

```typescript
public readonly sleepSeconds: number;
```

- *Type:* number

(Required) The amount of seconds to sleep for.

May not exceed 604800.
This will be used in the SSM doc as well as how long to indicate sleep to the sleepHook.

---

### SoftwareInventoryStepProps <a name="SoftwareInventoryStepProps" id="cdk-ssm-documents.SoftwareInventoryStepProps"></a>

Properties of SoftwareInventory step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.SoftwareInventoryStepProps.Initializer"></a>

```typescript
import { SoftwareInventoryStepProps } from 'cdk-ssm-documents'

const softwareInventoryStepProps: SoftwareInventoryStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.applications">applications</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Collect metadata for installed applications. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.awsComponents">awsComponents</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Collect metadata for AWS components like amazon-ssm-agent. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.customInventory">customInventory</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Collect custom inventory data. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.files">files</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional, requires SSM Agent version 2.2.64.0 or later) Collect metadata for files, including file names, the time files were created, the time files were last modified and accessed, and file sizes, to name a few. For more information about collecting file inventory, see Working with file and Windows registry. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.instanceDetailedInformation">instanceDetailedInformation</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Collect more instance information than is provided by the default inventory plugin (aws:instanceInformation), including CPU model, speed, and the number of cores, to name a few. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.networkConfig">networkConfig</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Collect metadata for network configurations. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.services">services</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect metadata for service configurations. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.windowsRegistry">windowsRegistry</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect Windows Registry keys and values. You can choose a key path and collect all keys and values recursively. You can also collect a specific registry key and its value for a specific path. Inventory collects the key path, name, type, and the value. For more information about collecting Windows Registry inventory, see Working with file and Windows registry inventory. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.windowsRoles">windowsRoles</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect metadata for Microsoft Windows role configurations. |
| <code><a href="#cdk-ssm-documents.SoftwareInventoryStepProps.property.windowsUpdates">windowsUpdates</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | (Optional) Collect metadata for all Windows updates. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.applications"></a>

```typescript
public readonly applications: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Collect metadata for installed applications.

---

##### `awsComponents`<sup>Optional</sup> <a name="awsComponents" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.awsComponents"></a>

```typescript
public readonly awsComponents: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Collect metadata for AWS components like amazon-ssm-agent.

---

##### `customInventory`<sup>Optional</sup> <a name="customInventory" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.customInventory"></a>

```typescript
public readonly customInventory: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Collect custom inventory data.

For more information about custom inventory, see Working with custom inventory

---

##### `files`<sup>Optional</sup> <a name="files" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.files"></a>

```typescript
public readonly files: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional, requires SSM Agent version 2.2.64.0 or later) Collect metadata for files, including file names, the time files were created, the time files were last modified and accessed, and file sizes, to name a few. For more information about collecting file inventory, see Working with file and Windows registry.

---

##### `instanceDetailedInformation`<sup>Optional</sup> <a name="instanceDetailedInformation" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.instanceDetailedInformation"></a>

```typescript
public readonly instanceDetailedInformation: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Collect more instance information than is provided by the default inventory plugin (aws:instanceInformation), including CPU model, speed, and the number of cores, to name a few.

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.networkConfig"></a>

```typescript
public readonly networkConfig: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Collect metadata for network configurations.

---

##### `services`<sup>Optional</sup> <a name="services" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.services"></a>

```typescript
public readonly services: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect metadata for service configurations.

---

##### `windowsRegistry`<sup>Optional</sup> <a name="windowsRegistry" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.windowsRegistry"></a>

```typescript
public readonly windowsRegistry: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect Windows Registry keys and values. You can choose a key path and collect all keys and values recursively. You can also collect a specific registry key and its value for a specific path. Inventory collects the key path, name, type, and the value. For more information about collecting Windows Registry inventory, see Working with file and Windows registry inventory.

---

##### `windowsRoles`<sup>Optional</sup> <a name="windowsRoles" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.windowsRoles"></a>

```typescript
public readonly windowsRoles: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional, Windows OS only, requires SSM Agent version 2.2.64.0 or later) Collect metadata for Microsoft Windows role configurations.

---

##### `windowsUpdates`<sup>Optional</sup> <a name="windowsUpdates" id="cdk-ssm-documents.SoftwareInventoryStepProps.property.windowsUpdates"></a>

```typescript
public readonly windowsUpdates: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

(Optional) Collect metadata for all Windows updates.

---

### SsmDocumentProps <a name="SsmDocumentProps" id="cdk-ssm-documents.SsmDocumentProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.SsmDocumentProps.Initializer"></a>

```typescript
import { SsmDocumentProps } from 'cdk-ssm-documents'

const ssmDocumentProps: SsmDocumentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.assumeRole">assumeRole</a></code> | <code>string</code> | (Optional) Assume role to use for this document. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.description">description</a></code> | <code>string</code> | (Optional) Description of the document. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.docInputs">docInputs</a></code> | <code><a href="#cdk-ssm-documents.Input">Input</a>[]</code> | (Optional) Inputs required by the document. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.docOutputs">docOutputs</a></code> | <code><a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]</code> | (Optional) Outputs to be emitted from the document. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.documentFormat">documentFormat</a></code> | <code><a href="#cdk-ssm-documents.DocumentFormat">DocumentFormat</a></code> | (Optional) Specifies whether this document should be written as YAML or JSON. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.documentName">documentName</a></code> | <code>string</code> | (Optional) Name of the document. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.header">header</a></code> | <code>string</code> | (Optional) A Header/comment to include at the start of a YAML document. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.requires">requires</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty \| aws-cdk-lib.IResolvable[]</code> | `AWS::SSM::Document.Requires`. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.tags">tags</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | `AWS::SSM::Document.Tags`. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.targetType">targetType</a></code> | <code>string</code> | `AWS::SSM::Document.TargetType`. |
| <code><a href="#cdk-ssm-documents.SsmDocumentProps.property.versionName">versionName</a></code> | <code>string</code> | `AWS::SSM::Document.VersionName`. |

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="cdk-ssm-documents.SsmDocumentProps.property.assumeRole"></a>

```typescript
public readonly assumeRole: string;
```

- *Type:* string

(Optional) Assume role to use for this document.

If provided, this value MUST be included as one of the documentInput names.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.SsmDocumentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

(Optional) Description of the document.

Defaults to the document name.

---

##### `docInputs`<sup>Optional</sup> <a name="docInputs" id="cdk-ssm-documents.SsmDocumentProps.property.docInputs"></a>

```typescript
public readonly docInputs: Input[];
```

- *Type:* <a href="#cdk-ssm-documents.Input">Input</a>[]

(Optional) Inputs required by the document.

---

##### `docOutputs`<sup>Optional</sup> <a name="docOutputs" id="cdk-ssm-documents.SsmDocumentProps.property.docOutputs"></a>

```typescript
public readonly docOutputs: DocumentOutput[];
```

- *Type:* <a href="#cdk-ssm-documents.DocumentOutput">DocumentOutput</a>[]
- *Default:* []

(Optional) Outputs to be emitted from the document.

The outputs are placed in a StringSet called outputs (as is done in SSM).

---

##### `documentFormat`<sup>Optional</sup> <a name="documentFormat" id="cdk-ssm-documents.SsmDocumentProps.property.documentFormat"></a>

```typescript
public readonly documentFormat: DocumentFormat;
```

- *Type:* <a href="#cdk-ssm-documents.DocumentFormat">DocumentFormat</a>
- *Default:* JSON

(Optional) Specifies whether this document should be written as YAML or JSON.

---

##### `documentName`<sup>Optional</sup> <a name="documentName" id="cdk-ssm-documents.SsmDocumentProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

(Optional) Name of the document.

Will default to the id provided for the CDK node.

---

##### `header`<sup>Optional</sup> <a name="header" id="cdk-ssm-documents.SsmDocumentProps.property.header"></a>

```typescript
public readonly header: string;
```

- *Type:* string

(Optional) A Header/comment to include at the start of a YAML document.

JSON documents do not support headers.

---

##### `requires`<sup>Optional</sup> <a name="requires" id="cdk-ssm-documents.SsmDocumentProps.property.requires"></a>

```typescript
public readonly requires: IResolvable | DocumentRequiresProperty | IResolvable[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_ssm.CfnDocument.DocumentRequiresProperty | aws-cdk-lib.IResolvable[]

`AWS::SSM::Document.Requires`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-requires)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ssm-documents.SsmDocumentProps.property.tags"></a>

```typescript
public readonly tags: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

`AWS::SSM::Document.Tags`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-tags)

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="cdk-ssm-documents.SsmDocumentProps.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

`AWS::SSM::Document.TargetType`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-targettype)

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="cdk-ssm-documents.SsmDocumentProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

`AWS::SSM::Document.VersionName`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html#cfn-ssm-document-versionname)

---

### StepProps <a name="StepProps" id="cdk-ssm-documents.StepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.StepProps.Initializer"></a>

```typescript
import { StepProps } from 'cdk-ssm-documents'

const stepProps: StepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.StepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.StepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.StepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.StepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.StepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.StepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.StepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

### UpdateAgentStepProps <a name="UpdateAgentStepProps" id="cdk-ssm-documents.UpdateAgentStepProps"></a>

Properties UpdateAgent step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.UpdateAgentStepProps.Initializer"></a>

```typescript
import { UpdateAgentStepProps } from 'cdk-ssm-documents'

const updateAgentStepProps: UpdateAgentStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.agentName">agentName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | EC2Config. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.source">source</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The location where Systems Manager copies the version of EC2Config to install. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.allowDowngrade">allowDowngrade</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | Allow the EC2Config service to be downgraded to an earlier version. |
| <code><a href="#cdk-ssm-documents.UpdateAgentStepProps.property.targetVersion">targetVersion</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | A specific version of the EC2Config service to install. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.UpdateAgentStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.UpdateAgentStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.UpdateAgentStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.UpdateAgentStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.UpdateAgentStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.UpdateAgentStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.UpdateAgentStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.UpdateAgentStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.UpdateAgentStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.UpdateAgentStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="cdk-ssm-documents.UpdateAgentStepProps.property.agentName"></a>

```typescript
public readonly agentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

EC2Config.

This is the name of the agent that runs the EC2Config service.

---

##### `source`<sup>Required</sup> <a name="source" id="cdk-ssm-documents.UpdateAgentStepProps.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The location where Systems Manager copies the version of EC2Config to install.

You can't change this location.

---

##### `allowDowngrade`<sup>Optional</sup> <a name="allowDowngrade" id="cdk-ssm-documents.UpdateAgentStepProps.property.allowDowngrade"></a>

```typescript
public readonly allowDowngrade: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

Allow the EC2Config service to be downgraded to an earlier version.

If set to false, the service can be upgraded to newer versions only (default).
If set to true, specify the earlier version.

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="cdk-ssm-documents.UpdateAgentStepProps.property.targetVersion"></a>

```typescript
public readonly targetVersion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

A specific version of the EC2Config service to install.

If not specified, the service will be updated to the latest version.

---

### UpdateSSMAgentStepProps <a name="UpdateSSMAgentStepProps" id="cdk-ssm-documents.UpdateSSMAgentStepProps"></a>

Properties UpdateAgent step.

#### Initializer <a name="Initializer" id="cdk-ssm-documents.UpdateSSMAgentStepProps.Initializer"></a>

```typescript
import { UpdateSSMAgentStepProps } from 'cdk-ssm-documents'

const updateSSMAgentStepProps: UpdateSSMAgentStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.exitOnFailure">exitOnFailure</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after failed execution of this step. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.exitOnSuccess">exitOnSuccess</a></code> | <code>boolean</code> | (Optional) Whether to exit the document execution after successful execution of this step. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.finallyStep">finallyStep</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.markSuccessAndExitOnFailure">markSuccessAndExitOnFailure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.Step">Step</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.precondition">precondition</a></code> | <code><a href="#cdk-ssm-documents.Precondition">Precondition</a></code> | (Optional) A precondition to test before execution occurrs. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.allowDowngrade">allowDowngrade</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a></code> | Allow the SSM Agent to be downgraded to an earlier version. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.agentName">agentName</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | amazon-ssm-agent. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.source">source</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | The location where Systems Manager copies the SSM Agent version to install. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | Must use one and only one of source or sourceRegion. |
| <code><a href="#cdk-ssm-documents.UpdateSSMAgentStepProps.property.targetVersion">targetVersion</a></code> | <code><a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | A specific version of SSM Agent to install. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `exitOnFailure`<sup>Optional</sup> <a name="exitOnFailure" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.exitOnFailure"></a>

```typescript
public readonly exitOnFailure: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after failed execution of this step.

Finally step will be run.

---

##### `exitOnSuccess`<sup>Optional</sup> <a name="exitOnSuccess" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.exitOnSuccess"></a>

```typescript
public readonly exitOnSuccess: boolean;
```

- *Type:* boolean
- *Default:* false

(Optional) Whether to exit the document execution after successful execution of this step.

Finally step will be run.

---

##### `finallyStep`<sup>Optional</sup> <a name="finallyStep" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.finallyStep"></a>

```typescript
public readonly finallyStep: boolean;
```

- *Type:* boolean

---

##### `markSuccessAndExitOnFailure`<sup>Optional</sup> <a name="markSuccessAndExitOnFailure" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.markSuccessAndExitOnFailure"></a>

```typescript
public readonly markSuccessAndExitOnFailure: boolean;
```

- *Type:* boolean

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: Step;
```

- *Type:* <a href="#cdk-ssm-documents.Step">Step</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `precondition`<sup>Optional</sup> <a name="precondition" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.precondition"></a>

```typescript
public readonly precondition: Precondition;
```

- *Type:* <a href="#cdk-ssm-documents.Precondition">Precondition</a>
- *Default:* undefined

(Optional) A precondition to test before execution occurrs.

When the precondition isn't met, the command step isn't executed.

---

##### `allowDowngrade`<sup>Required</sup> <a name="allowDowngrade" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.allowDowngrade"></a>

```typescript
public readonly allowDowngrade: IBooleanVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

Allow the SSM Agent to be downgraded to an earlier version.

If set to false, the agent can be upgraded to newer versions only (default).
If set to true, specify the earlier version.

---

##### `agentName`<sup>Optional</sup> <a name="agentName" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.agentName"></a>

```typescript
public readonly agentName: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

amazon-ssm-agent.

This is the name of the Systems Manager agent that processes requests and runs commands on the instance.

---

##### `source`<sup>Optional</sup> <a name="source" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.source"></a>

```typescript
public readonly source: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

The location where Systems Manager copies the SSM Agent version to install.

You can't change this location.

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

Must use one and only one of source or sourceRegion.

If source is provided it will be used as is.
If sourceRegion is provided it will populate source with https://s3.{sourceRegion}.amazonaws.com/aws-ssm-{sourceRegion}/manifest.json

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="cdk-ssm-documents.UpdateSSMAgentStepProps.property.targetVersion"></a>

```typescript
public readonly targetVersion: IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

A specific version of SSM Agent to install.

If not specified, the agent will be updated to the latest version.

---

### WaitForResourceStepProps <a name="WaitForResourceStepProps" id="cdk-ssm-documents.WaitForResourceStepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ssm-documents.WaitForResourceStepProps.Initializer"></a>

```typescript
import { WaitForResourceStepProps } from 'cdk-ssm-documents'

const waitForResourceStepProps: WaitForResourceStepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.description">description</a></code> | <code>string</code> | (Optional) description of the current step. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.inputObserver">inputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the input to steps as they run. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.name">name</a></code> | <code>string</code> | (Optional) Name of the current step. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.outputObserver">outputObserver</a></code> | <code><a href="#cdk-ssm-documents.IObserver">IObserver</a></code> | (Optional) Allows for observing the output of steps as they run. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.isEnd">isEnd</a></code> | <code>boolean</code> | Whether to stop document execution after this step. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | (Optional) max attempts to run this step if there are failures. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.onCancel">onCancel</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step is cancelled. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.onFailure">onFailure</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a></code> | (Optional) Step to jump to in the event that this step fails. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | (Optional) timeout seconds to run this step. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.apiParams">apiParams</a></code> | <code>{[ key: string ]: any}</code> | (Required) API Params to submit with the request to the api. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.pascalCaseApi">pascalCaseApi</a></code> | <code>string</code> | (Required) The AWS api represented in PascalCase. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.service">service</a></code> | <code>string</code> | (Required) The AWS service to be invoked. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.javaScriptApi">javaScriptApi</a></code> | <code>string</code> | (Optional) The api as represented the AWS JavaScript API. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.desiredValues">desiredValues</a></code> | <code>string[]</code> | (Required) Value extracted from AWS response desired to be one of these desired values. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.selector">selector</a></code> | <code>string</code> | (Required) Json path selector to extract value from AWS response. |
| <code><a href="#cdk-ssm-documents.WaitForResourceStepProps.property.sleepIntervalMillis">sleepIntervalMillis</a></code> | <code>number</code> | (Optional) How much time to sleep after not receiving desired response from AWS SDK. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-ssm-documents.WaitForResourceStepProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* undefined

(Optional) description of the current step.

---

##### `inputObserver`<sup>Optional</sup> <a name="inputObserver" id="cdk-ssm-documents.WaitForResourceStepProps.property.inputObserver"></a>

```typescript
public readonly inputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the input to steps as they run.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ssm-documents.WaitForResourceStepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

(Optional) Name of the current step.

The name will be prepended onto all of the outputs emitted from this step.
This name will also be used to reference this step in logs.
Defaults to the id of the CDK node.

---

##### `outputObserver`<sup>Optional</sup> <a name="outputObserver" id="cdk-ssm-documents.WaitForResourceStepProps.property.outputObserver"></a>

```typescript
public readonly outputObserver: IObserver;
```

- *Type:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>
- *Default:* NoopObserver

(Optional) Allows for observing the output of steps as they run.

---

##### `isEnd`<sup>Optional</sup> <a name="isEnd" id="cdk-ssm-documents.WaitForResourceStepProps.property.isEnd"></a>

```typescript
public readonly isEnd: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to stop document execution after this step.

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="cdk-ssm-documents.WaitForResourceStepProps.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_MAX_ATTEMPTS

(Optional) max attempts to run this step if there are failures.

---

##### `onCancel`<sup>Optional</sup> <a name="onCancel" id="cdk-ssm-documents.WaitForResourceStepProps.property.onCancel"></a>

```typescript
public readonly onCancel: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step is cancelled.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-ssm-documents.WaitForResourceStepProps.property.onFailure"></a>

```typescript
public readonly onFailure: AutomationStep;
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>
- *Default:* undefined

(Optional) Step to jump to in the event that this step fails.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="cdk-ssm-documents.WaitForResourceStepProps.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number
- *Default:* Step.DEFAULT_TIMEOUT

(Optional) timeout seconds to run this step.

In a simulation run, this will only be encorced after-the-fact but execution will not be stopped mid-step.

---

##### `apiParams`<sup>Required</sup> <a name="apiParams" id="cdk-ssm-documents.WaitForResourceStepProps.property.apiParams"></a>

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


##### `pascalCaseApi`<sup>Required</sup> <a name="pascalCaseApi" id="cdk-ssm-documents.WaitForResourceStepProps.property.pascalCaseApi"></a>

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


##### `service`<sup>Required</sup> <a name="service" id="cdk-ssm-documents.WaitForResourceStepProps.property.service"></a>

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


##### `javaScriptApi`<sup>Optional</sup> <a name="javaScriptApi" id="cdk-ssm-documents.WaitForResourceStepProps.property.javaScriptApi"></a>

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


##### `desiredValues`<sup>Required</sup> <a name="desiredValues" id="cdk-ssm-documents.WaitForResourceStepProps.property.desiredValues"></a>

```typescript
public readonly desiredValues: string[];
```

- *Type:* string[]

(Required) Value extracted from AWS response desired to be one of these desired values.

---

##### `selector`<sup>Required</sup> <a name="selector" id="cdk-ssm-documents.WaitForResourceStepProps.property.selector"></a>

```typescript
public readonly selector: string;
```

- *Type:* string

(Required) Json path selector to extract value from AWS response.

---

##### `sleepIntervalMillis`<sup>Optional</sup> <a name="sleepIntervalMillis" id="cdk-ssm-documents.WaitForResourceStepProps.property.sleepIntervalMillis"></a>

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

### ApiRunCommandHook <a name="ApiRunCommandHook" id="cdk-ssm-documents.ApiRunCommandHook"></a>

- *Implements:* <a href="#cdk-ssm-documents.IRunCommandHook">IRunCommandHook</a>

RunCommand implementation using AWS API.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ApiRunCommandHook.Initializer"></a>

```typescript
import { ApiRunCommandHook } from 'cdk-ssm-documents'

new ApiRunCommandHook(awsInvoker: IAwsInvoker, sleepHook: ISleepHook)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ApiRunCommandHook.Initializer.parameter.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApiRunCommandHook.Initializer.parameter.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a></code> | *No description.* |

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-documents.ApiRunCommandHook.Initializer.parameter.awsInvoker"></a>

- *Type:* <a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a>

---

##### `sleepHook`<sup>Required</sup> <a name="sleepHook" id="cdk-ssm-documents.ApiRunCommandHook.Initializer.parameter.sleepHook"></a>

- *Type:* <a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ApiRunCommandHook.execute">execute</a></code> | Simulate the aws:runCommand. |

---

##### `execute` <a name="execute" id="cdk-ssm-documents.ApiRunCommandHook.execute"></a>

```typescript
public execute(props: RunCommandProps): RunCommandOutputs
```

Simulate the aws:runCommand.

###### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.ApiRunCommandHook.execute.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.RunCommandProps">RunCommandProps</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ApiRunCommandHook.property.awsInvoker">awsInvoker</a></code> | <code><a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApiRunCommandHook.property.props">props</a></code> | <code><a href="#cdk-ssm-documents.ApiRunCommandProps">ApiRunCommandProps</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ApiRunCommandHook.property.sleepHook">sleepHook</a></code> | <code><a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a></code> | *No description.* |

---

##### `awsInvoker`<sup>Required</sup> <a name="awsInvoker" id="cdk-ssm-documents.ApiRunCommandHook.property.awsInvoker"></a>

```typescript
public readonly awsInvoker: IAwsInvoker;
```

- *Type:* <a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a>

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.ApiRunCommandHook.property.props"></a>

```typescript
public readonly props: ApiRunCommandProps;
```

- *Type:* <a href="#cdk-ssm-documents.ApiRunCommandProps">ApiRunCommandProps</a>

---

##### `sleepHook`<sup>Required</sup> <a name="sleepHook" id="cdk-ssm-documents.ApiRunCommandHook.property.sleepHook"></a>

```typescript
public readonly sleepHook: ISleepHook;
```

- *Type:* <a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a>

---


### ApproveImpl <a name="ApproveImpl" id="cdk-ssm-documents.ApproveImpl"></a>

- *Implements:* <a href="#cdk-ssm-documents.IApproveHook">IApproveHook</a>

This IApproveHook implementation provides a real ask and waits for user input of Enter.

This implementation does not work well on all exported JSII languages.
Users can provide their own impl using the IAskHook interface.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ApproveImpl.Initializer"></a>

```typescript
import { ApproveImpl } from 'cdk-ssm-documents'

new ApproveImpl()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ApproveImpl.ask">ask</a></code> | Ask for approval. |

---

##### `ask` <a name="ask" id="cdk-ssm-documents.ApproveImpl.ask"></a>

```typescript
public ask(approver: string): boolean
```

Ask for approval.

###### `approver`<sup>Required</sup> <a name="approver" id="cdk-ssm-documents.ApproveImpl.ask.parameter.approver"></a>

- *Type:* string

---




### AutomationDocumentBuilder <a name="AutomationDocumentBuilder" id="cdk-ssm-documents.AutomationDocumentBuilder"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.AutomationDocumentBuilder.Initializer"></a>

```typescript
import { AutomationDocumentBuilder } from 'cdk-ssm-documents'

new AutomationDocumentBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationDocumentBuilder.addStep">addStep</a></code> | *No description.* |

---

##### `addStep` <a name="addStep" id="cdk-ssm-documents.AutomationDocumentBuilder.addStep"></a>

```typescript
public addStep(step: AutomationStep): void
```

###### `step`<sup>Required</sup> <a name="step" id="cdk-ssm-documents.AutomationDocumentBuilder.addStep.parameter.step"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.AutomationDocumentBuilder.property.steps">steps</a></code> | <code><a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]</code> | *No description.* |

---

##### `steps`<sup>Required</sup> <a name="steps" id="cdk-ssm-documents.AutomationDocumentBuilder.property.steps"></a>

```typescript
public readonly steps: AutomationStep[];
```

- *Type:* <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>[]

---


### BooleanVariable <a name="BooleanVariable" id="cdk-ssm-documents.BooleanVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

A boolean variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.BooleanVariable.Initializer"></a>

```typescript
import { BooleanVariable } from 'cdk-ssm-documents'

new BooleanVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.BooleanVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.BooleanVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.BooleanVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.BooleanVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.BooleanVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.BooleanVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.BooleanVariable.resolveToBoolean">resolveToBoolean</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.BooleanVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.BooleanVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.BooleanVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.BooleanVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.BooleanVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToBoolean` <a name="resolveToBoolean" id="cdk-ssm-documents.BooleanVariable.resolveToBoolean"></a>

```typescript
public resolveToBoolean(inputs: {[ key: string ]: any}): boolean
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.BooleanVariable.resolveToBoolean.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.BooleanVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.BooleanVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### Choice <a name="Choice" id="cdk-ssm-documents.Choice"></a>

Choices are supplied to the BranchStep to determine under which conditions to jump to which steps.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.Choice.Initializer"></a>

```typescript
import { Choice } from 'cdk-ssm-documents'

new Choice(props: ChoiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Choice.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-documents.ChoiceProps">ChoiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.Choice.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.ChoiceProps">ChoiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Choice.asSsmEntry">asSsmEntry</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Choice.evaluate">evaluate</a></code> | Evaluates this choice against the provided inputs. |

---

##### `asSsmEntry` <a name="asSsmEntry" id="cdk-ssm-documents.Choice.asSsmEntry"></a>

```typescript
public asSsmEntry(): {[ key: string ]: any}
```

##### `evaluate` <a name="evaluate" id="cdk-ssm-documents.Choice.evaluate"></a>

```typescript
public evaluate(inputs: {[ key: string ]: any}): boolean
```

Evaluates this choice against the provided inputs.

The value keyed on the inputToTest will be tested against the declared constant using the Operation specified.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.Choice.evaluate.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Choice.property.constant">constant</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Choice.property.jumpToStepName">jumpToStepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Choice.property.operation">operation</a></code> | <code><a href="#cdk-ssm-documents.Operation">Operation</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Choice.property.variable">variable</a></code> | <code><a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a> \| <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a> \| <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a></code> | *No description.* |

---

##### `constant`<sup>Required</sup> <a name="constant" id="cdk-ssm-documents.Choice.property.constant"></a>

```typescript
public readonly constant: any;
```

- *Type:* any

---

##### `jumpToStepName`<sup>Required</sup> <a name="jumpToStepName" id="cdk-ssm-documents.Choice.property.jumpToStepName"></a>

```typescript
public readonly jumpToStepName: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="cdk-ssm-documents.Choice.property.operation"></a>

```typescript
public readonly operation: Operation;
```

- *Type:* <a href="#cdk-ssm-documents.Operation">Operation</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="cdk-ssm-documents.Choice.property.variable"></a>

```typescript
public readonly variable: IBooleanVariable | INumberVariable | IStringVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a> | <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a> | <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

---


### CommandDocumentBuilder <a name="CommandDocumentBuilder" id="cdk-ssm-documents.CommandDocumentBuilder"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.CommandDocumentBuilder.Initializer"></a>

```typescript
import { CommandDocumentBuilder } from 'cdk-ssm-documents'

new CommandDocumentBuilder()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.CommandDocumentBuilder.addStep">addStep</a></code> | *No description.* |

---

##### `addStep` <a name="addStep" id="cdk-ssm-documents.CommandDocumentBuilder.addStep"></a>

```typescript
public addStep(step: CommandStep): void
```

###### `step`<sup>Required</sup> <a name="step" id="cdk-ssm-documents.CommandDocumentBuilder.addStep.parameter.step"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.CommandDocumentBuilder.property.steps">steps</a></code> | <code><a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]</code> | *No description.* |

---

##### `steps`<sup>Required</sup> <a name="steps" id="cdk-ssm-documents.CommandDocumentBuilder.property.steps"></a>

```typescript
public readonly steps: CommandStep[];
```

- *Type:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>[]

---


### DataType <a name="DataType" id="cdk-ssm-documents.DataType"></a>

JSII does not allow functions or constants declared in an enum class directly.

Therefore, interaction with DataTypeEnum happens through this class.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.DataType.Initializer"></a>

```typescript
import { DataType } from 'cdk-ssm-documents'

new DataType(dataTypeEnum: DataTypeEnum)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DataType.Initializer.parameter.dataTypeEnum">dataTypeEnum</a></code> | <code><a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a></code> | *No description.* |

---

##### `dataTypeEnum`<sup>Required</sup> <a name="dataTypeEnum" id="cdk-ssm-documents.DataType.Initializer.parameter.dataTypeEnum"></a>

- *Type:* <a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DataType.toSsmString">toSsmString</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DataType.validateType">validateType</a></code> | *No description.* |

---

##### `toSsmString` <a name="toSsmString" id="cdk-ssm-documents.DataType.toSsmString"></a>

```typescript
public toSsmString(): string
```

##### `validateType` <a name="validateType" id="cdk-ssm-documents.DataType.validateType"></a>

```typescript
public validateType(val: any): boolean
```

###### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.DataType.validateType.parameter.val"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DataType.fromDataType">fromDataType</a></code> | *No description.* |

---

##### `fromDataType` <a name="fromDataType" id="cdk-ssm-documents.DataType.fromDataType"></a>

```typescript
import { DataType } from 'cdk-ssm-documents'

DataType.fromDataType(ssmDataType: string)
```

###### `ssmDataType`<sup>Required</sup> <a name="ssmDataType" id="cdk-ssm-documents.DataType.fromDataType.parameter.ssmDataType"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DataType.property.dataTypeEnum">dataTypeEnum</a></code> | <code><a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a></code> | *No description.* |

---

##### `dataTypeEnum`<sup>Required</sup> <a name="dataTypeEnum" id="cdk-ssm-documents.DataType.property.dataTypeEnum"></a>

```typescript
public readonly dataTypeEnum: DataTypeEnum;
```

- *Type:* <a href="#cdk-ssm-documents.DataTypeEnum">DataTypeEnum</a>

---


### DesiredStateVariable <a name="DesiredStateVariable" id="cdk-ssm-documents.DesiredStateVariable"></a>

A desired state variable reference.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.DesiredStateVariable.Initializer"></a>

```typescript
import { DesiredStateVariable } from 'cdk-ssm-documents'

new DesiredStateVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DesiredStateVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.DesiredStateVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DesiredStateVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.DesiredStateVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.DesiredStateVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.DesiredStateVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.DesiredStateVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.DesiredStateVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.DesiredStateVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.DesiredStateVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.DesiredStateVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.DesiredStateVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.DesiredStateVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.DesiredStateVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DesiredStateVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.DesiredStateVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### DictFormat <a name="DictFormat" id="cdk-ssm-documents.DictFormat"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.DictFormat.Initializer"></a>

```typescript
import { DictFormat } from 'cdk-ssm-documents'

new DictFormat(format: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DictFormat.Initializer.parameter.format">format</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-documents.DictFormat.Initializer.parameter.format"></a>

- *Type:* {[ key: string ]: any}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DictFormat.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.DictFormat.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.DictFormat.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.DictFormat.resolveToDict">resolveToDict</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DictFormat.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.DictFormat.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.DictFormat.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.DictFormat.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.DictFormat.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.DictFormat.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToDict` <a name="resolveToDict" id="cdk-ssm-documents.DictFormat.resolveToDict"></a>

```typescript
public resolveToDict(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.DictFormat.resolveToDict.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-documents.DictFormat.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.DictFormat.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.DictFormat.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DictFormat.property.format">format</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-documents.DictFormat.property.format"></a>

```typescript
public readonly format: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### DockerEnvironment <a name="DockerEnvironment" id="cdk-ssm-documents.DockerEnvironment"></a>

- *Implements:* <a href="#cdk-ssm-documents.IEnvironment">IEnvironment</a>

Provides a Docker client against which customers can execute their commands.

This utility will not download docker images, rather will create containers from images provided.
You can use this rather than running your run commands against a real EC2 machine.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DockerEnvironment.removeContainer">removeContainer</a></code> | Force removes the container associated with this instance. |
| <code><a href="#cdk-ssm-documents.DockerEnvironment.run">run</a></code> | Runs commands against the docker specified during construction. |

---

##### `removeContainer` <a name="removeContainer" id="cdk-ssm-documents.DockerEnvironment.removeContainer"></a>

```typescript
public removeContainer(): void
```

Force removes the container associated with this instance.

##### `run` <a name="run" id="cdk-ssm-documents.DockerEnvironment.run"></a>

```typescript
public run(command: string): string
```

Runs commands against the docker specified during construction.

This function runs synchronously.

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-documents.DockerEnvironment.run.parameter.command"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DockerEnvironment.fromContainer">fromContainer</a></code> | Use an existing container against which to run commands using the run function. |
| <code><a href="#cdk-ssm-documents.DockerEnvironment.fromImage">fromImage</a></code> | Create a container from the provided image. |

---

##### `fromContainer` <a name="fromContainer" id="cdk-ssm-documents.DockerEnvironment.fromContainer"></a>

```typescript
import { DockerEnvironment } from 'cdk-ssm-documents'

DockerEnvironment.fromContainer(containerId: string)
```

Use an existing container against which to run commands using the run function.

###### `containerId`<sup>Required</sup> <a name="containerId" id="cdk-ssm-documents.DockerEnvironment.fromContainer.parameter.containerId"></a>

- *Type:* string

---

##### `fromImage` <a name="fromImage" id="cdk-ssm-documents.DockerEnvironment.fromImage"></a>

```typescript
import { DockerEnvironment } from 'cdk-ssm-documents'

DockerEnvironment.fromImage(image: string)
```

Create a container from the provided image.

The container created will be used by this instance to run commands using the run function.

###### `image`<sup>Required</sup> <a name="image" id="cdk-ssm-documents.DockerEnvironment.fromImage.parameter.image"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DockerEnvironment.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="cdk-ssm-documents.DockerEnvironment.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---


### DocumentHashTypeVariable <a name="DocumentHashTypeVariable" id="cdk-ssm-documents.DocumentHashTypeVariable"></a>

Reference to document hash type.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.DocumentHashTypeVariable.Initializer"></a>

```typescript
import { DocumentHashTypeVariable } from 'cdk-ssm-documents'

new DocumentHashTypeVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DocumentHashTypeVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.DocumentHashTypeVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DocumentHashTypeVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.DocumentHashTypeVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.DocumentHashTypeVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.DocumentHashTypeVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.DocumentHashTypeVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.DocumentHashTypeVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.DocumentHashTypeVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.DocumentHashTypeVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.DocumentHashTypeVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.DocumentHashTypeVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.DocumentHashTypeVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.DocumentHashTypeVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.DocumentHashTypeVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.DocumentHashTypeVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### EnumVariable <a name="EnumVariable" id="cdk-ssm-documents.EnumVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

An enum variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.EnumVariable.Initializer"></a>

```typescript
import { EnumVariable } from 'cdk-ssm-documents'

new EnumVariable(reference: string, enumType: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.EnumVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.EnumVariable.Initializer.parameter.enumType">enumType</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.EnumVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

##### `enumType`<sup>Required</sup> <a name="enumType" id="cdk-ssm-documents.EnumVariable.Initializer.parameter.enumType"></a>

- *Type:* {[ key: string ]: any}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.EnumVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.EnumVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.EnumVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.EnumVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.EnumVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.EnumVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.EnumVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.EnumVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.EnumVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.EnumVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.EnumVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.EnumVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.EnumVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.EnumVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### GenericVariable <a name="GenericVariable" id="cdk-ssm-documents.GenericVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

Abstraction of SSM variables.

Variables are printed as using this syntax: {{myVariable}}
To resolve a variable, you must supply the available inputs and the variable will resolve the value.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.GenericVariable.Initializer"></a>

```typescript
import { GenericVariable } from 'cdk-ssm-documents'

new GenericVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.GenericVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.GenericVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.GenericVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.GenericVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.GenericVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.GenericVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.GenericVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.GenericVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.GenericVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.GenericVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.GenericVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.GenericVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.GenericVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### HardCodedBoolean <a name="HardCodedBoolean" id="cdk-ssm-documents.HardCodedBoolean"></a>

- *Implements:* <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

A hard-coded boolean variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedBoolean.Initializer"></a>

```typescript
import { HardCodedBoolean } from 'cdk-ssm-documents'

new HardCodedBoolean(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedBoolean.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedBoolean.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedBoolean.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedBoolean.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedBoolean.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedBoolean.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedBoolean.resolveToBoolean">resolveToBoolean</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedBoolean.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedBoolean.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedBoolean.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedBoolean.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedBoolean.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToBoolean` <a name="resolveToBoolean" id="cdk-ssm-documents.HardCodedBoolean.resolveToBoolean"></a>

```typescript
public resolveToBoolean(inputs: {[ key: string ]: any}): boolean
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.HardCodedBoolean.resolveToBoolean.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedBoolean.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedBoolean.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedDesiredState <a name="HardCodedDesiredState" id="cdk-ssm-documents.HardCodedDesiredState"></a>

A hard coded desired state.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedDesiredState.Initializer"></a>

```typescript
import { HardCodedDesiredState } from 'cdk-ssm-documents'

new HardCodedDesiredState(value: DesiredState)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedDesiredState.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-documents.DesiredState">DesiredState</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-documents.HardCodedDesiredState.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-documents.DesiredState">DesiredState</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedDesiredState.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedDesiredState.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedDesiredState.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedDesiredState.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedDesiredState.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedDesiredState.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedDesiredState.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedDesiredState.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedDesiredState.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.HardCodedDesiredState.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedDesiredState.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedDesiredState.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedDocumentHashType <a name="HardCodedDocumentHashType" id="cdk-ssm-documents.HardCodedDocumentHashType"></a>

Hard coded document hash type.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedDocumentHashType.Initializer"></a>

```typescript
import { HardCodedDocumentHashType } from 'cdk-ssm-documents'

new HardCodedDocumentHashType(value: DocumentHashType)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedDocumentHashType.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-documents.DocumentHashType">DocumentHashType</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-documents.HardCodedDocumentHashType.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-documents.DocumentHashType">DocumentHashType</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedDocumentHashType.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedDocumentHashType.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedDocumentHashType.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedDocumentHashType.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedDocumentHashType.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedDocumentHashType.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedDocumentHashType.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedDocumentHashType.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedDocumentHashType.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.HardCodedDocumentHashType.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedDocumentHashType.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedDocumentHashType.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedEnum <a name="HardCodedEnum" id="cdk-ssm-documents.HardCodedEnum"></a>

- *Implements:* <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

A hard-coded enum variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedEnum.Initializer"></a>

```typescript
import { HardCodedEnum } from 'cdk-ssm-documents'

new HardCodedEnum(value: any, enumType: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedEnum.Initializer.parameter.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.HardCodedEnum.Initializer.parameter.enumType">enumType</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-documents.HardCodedEnum.Initializer.parameter.value"></a>

- *Type:* any

---

##### `enumType`<sup>Required</sup> <a name="enumType" id="cdk-ssm-documents.HardCodedEnum.Initializer.parameter.enumType"></a>

- *Type:* {[ key: string ]: any}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedEnum.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedEnum.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedEnum.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedEnum.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedEnum.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedEnum.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedEnum.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedEnum.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedEnum.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.HardCodedEnum.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedEnum.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedEnum.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedMapList <a name="HardCodedMapList" id="cdk-ssm-documents.HardCodedMapList"></a>

- *Implements:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

A hard-coded map list variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedMapList.Initializer"></a>

```typescript
import { HardCodedMapList } from 'cdk-ssm-documents'

new HardCodedMapList(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedMapList.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedMapList.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedMapList.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedMapList.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedMapList.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedMapList.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedMapList.resolveToMapList">resolveToMapList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedMapList.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedMapList.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedMapList.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedMapList.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedMapList.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToMapList` <a name="resolveToMapList" id="cdk-ssm-documents.HardCodedMapList.resolveToMapList"></a>

```typescript
public resolveToMapList(inputs: {[ key: string ]: any}): {[ key: string ]: any}[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.HardCodedMapList.resolveToMapList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedMapList.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedMapList.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedNumber <a name="HardCodedNumber" id="cdk-ssm-documents.HardCodedNumber"></a>

- *Implements:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

A hard-coded number variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedNumber.Initializer"></a>

```typescript
import { HardCodedNumber } from 'cdk-ssm-documents'

new HardCodedNumber(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedNumber.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedNumber.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedNumber.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedNumber.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedNumber.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedNumber.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedNumber.resolveToNumber">resolveToNumber</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedNumber.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedNumber.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedNumber.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedNumber.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedNumber.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToNumber` <a name="resolveToNumber" id="cdk-ssm-documents.HardCodedNumber.resolveToNumber"></a>

```typescript
public resolveToNumber(inputs: {[ key: string ]: any}): number
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.HardCodedNumber.resolveToNumber.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedNumber.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedNumber.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedOnFailure <a name="HardCodedOnFailure" id="cdk-ssm-documents.HardCodedOnFailure"></a>

Hard coded OnFailure value.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedOnFailure.Initializer"></a>

```typescript
import { HardCodedOnFailure } from 'cdk-ssm-documents'

new HardCodedOnFailure(value: OnFailure)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedOnFailure.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-documents.OnFailure">OnFailure</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-documents.HardCodedOnFailure.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-documents.OnFailure">OnFailure</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedOnFailure.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedOnFailure.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedOnFailure.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedOnFailure.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedOnFailure.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedOnFailure.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedOnFailure.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedOnFailure.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedOnFailure.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.HardCodedOnFailure.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedOnFailure.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedOnFailure.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedResourceType <a name="HardCodedResourceType" id="cdk-ssm-documents.HardCodedResourceType"></a>

A hard coded resource type.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedResourceType.Initializer"></a>

```typescript
import { HardCodedResourceType } from 'cdk-ssm-documents'

new HardCodedResourceType(value: ResourceType)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedResourceType.Initializer.parameter.value">value</a></code> | <code><a href="#cdk-ssm-documents.ResourceType">ResourceType</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-documents.HardCodedResourceType.Initializer.parameter.value"></a>

- *Type:* <a href="#cdk-ssm-documents.ResourceType">ResourceType</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedResourceType.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedResourceType.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedResourceType.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedResourceType.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedResourceType.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedResourceType.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedResourceType.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedResourceType.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedResourceType.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.HardCodedResourceType.resolveToEnum"></a>

```typescript
public resolveToEnum(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedResourceType.resolveToEnum.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedResourceType.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.




### HardCodedString <a name="HardCodedString" id="cdk-ssm-documents.HardCodedString"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

A hard-coded string variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedString.Initializer"></a>

```typescript
import { HardCodedString } from 'cdk-ssm-documents'

new HardCodedString(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedString.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedString.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedString.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedString.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedString.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedString.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedString.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedString.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedString.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedString.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedString.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedString.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-documents.HardCodedString.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.HardCodedString.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedString.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedString.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedStringList <a name="HardCodedStringList" id="cdk-ssm-documents.HardCodedStringList"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

A hard-coded string list variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedStringList.Initializer"></a>

```typescript
import { HardCodedStringList } from 'cdk-ssm-documents'

new HardCodedStringList(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedStringList.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedStringList.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedStringList.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedStringList.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedStringList.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedStringList.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedStringList.resolveToStringList">resolveToStringList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedStringList.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedStringList.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedStringList.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedStringList.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedStringList.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringList` <a name="resolveToStringList" id="cdk-ssm-documents.HardCodedStringList.resolveToStringList"></a>

```typescript
public resolveToStringList(inputs: {[ key: string ]: any}): string[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.HardCodedStringList.resolveToStringList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedStringList.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedStringList.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedStringMap <a name="HardCodedStringMap" id="cdk-ssm-documents.HardCodedStringMap"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

A hard-coded string map variable.

Used when not dependent on step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedStringMap.Initializer"></a>

```typescript
import { HardCodedStringMap } from 'cdk-ssm-documents'

new HardCodedStringMap(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedStringMap.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedStringMap.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedStringMap.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedStringMap.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedStringMap.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedStringMap.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedStringMap.resolveToStringMap">resolveToStringMap</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedStringMap.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedStringMap.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedStringMap.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedStringMap.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedStringMap.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringMap` <a name="resolveToStringMap" id="cdk-ssm-documents.HardCodedStringMap.resolveToStringMap"></a>

```typescript
public resolveToStringMap(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.HardCodedStringMap.resolveToStringMap.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedStringMap.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedStringMap.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### HardCodedValueBase <a name="HardCodedValueBase" id="cdk-ssm-documents.HardCodedValueBase"></a>

- *Implements:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.HardCodedValueBase.Initializer"></a>

```typescript
import { HardCodedValueBase } from 'cdk-ssm-documents'

new HardCodedValueBase(val: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedValueBase.Initializer.parameter.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedValueBase.Initializer.parameter.val"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedValueBase.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.HardCodedValueBase.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedValueBase.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.HardCodedValueBase.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.HardCodedValueBase.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.HardCodedValueBase.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.HardCodedValueBase.resolve"></a>

```typescript
public resolve(_inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `_inputs`<sup>Required</sup> <a name="_inputs" id="cdk-ssm-documents.HardCodedValueBase.resolve.parameter._inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.HardCodedValueBase.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.HardCodedValueBase.property.val">val</a></code> | <code>any</code> | *No description.* |

---

##### `val`<sup>Required</sup> <a name="val" id="cdk-ssm-documents.HardCodedValueBase.property.val"></a>

```typescript
public readonly val: any;
```

- *Type:* any

---


### LoggingEnvironment <a name="LoggingEnvironment" id="cdk-ssm-documents.LoggingEnvironment"></a>

- *Implements:* <a href="#cdk-ssm-documents.IEnvironment">IEnvironment</a>

Environment that simply logs the commands that it receives and displays them on the console.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.LoggingEnvironment.Initializer"></a>

```typescript
import { LoggingEnvironment } from 'cdk-ssm-documents'

new LoggingEnvironment()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.LoggingEnvironment.run">run</a></code> | *No description.* |

---

##### `run` <a name="run" id="cdk-ssm-documents.LoggingEnvironment.run"></a>

```typescript
public run(command: string): string
```

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-documents.LoggingEnvironment.run.parameter.command"></a>

- *Type:* string

---




### MapListVariable <a name="MapListVariable" id="cdk-ssm-documents.MapListVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

A map list variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.MapListVariable.Initializer"></a>

```typescript
import { MapListVariable } from 'cdk-ssm-documents'

new MapListVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.MapListVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.MapListVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.MapListVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.MapListVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.MapListVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.MapListVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.MapListVariable.resolveToMapList">resolveToMapList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.MapListVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.MapListVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.MapListVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.MapListVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.MapListVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToMapList` <a name="resolveToMapList" id="cdk-ssm-documents.MapListVariable.resolveToMapList"></a>

```typescript
public resolveToMapList(inputs: {[ key: string ]: any}): {[ key: string ]: any}[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.MapListVariable.resolveToMapList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.MapListVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.MapListVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### MockApprove <a name="MockApprove" id="cdk-ssm-documents.MockApprove"></a>

- *Implements:* <a href="#cdk-ssm-documents.IApproveHook">IApproveHook</a>

Mock implementation of IApproveHook.

Does not simulate an approval request.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.MockApprove.Initializer"></a>

```typescript
import { MockApprove } from 'cdk-ssm-documents'

new MockApprove()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.MockApprove.ask">ask</a></code> | Ask for approval. |

---

##### `ask` <a name="ask" id="cdk-ssm-documents.MockApprove.ask"></a>

```typescript
public ask(_approver: string): boolean
```

Ask for approval.

###### `_approver`<sup>Required</sup> <a name="_approver" id="cdk-ssm-documents.MockApprove.ask.parameter._approver"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.MockApprove.property.timesInvoked">timesInvoked</a></code> | <code>number</code> | *No description.* |

---

##### `timesInvoked`<sup>Required</sup> <a name="timesInvoked" id="cdk-ssm-documents.MockApprove.property.timesInvoked"></a>

```typescript
public readonly timesInvoked: number;
```

- *Type:* number

---


### MockAwsInvoker <a name="MockAwsInvoker" id="cdk-ssm-documents.MockAwsInvoker"></a>

- *Implements:* <a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a>

Mock implementation of IAwsInvoker.

This class can be reused for testing in exported JSII languages.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.MockAwsInvoker.Initializer"></a>

```typescript
import { MockAwsInvoker } from 'cdk-ssm-documents'

new MockAwsInvoker()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.MockAwsInvoker.invoke">invoke</a></code> | Saves the invocation to be retieved using getInvocations(). |
| <code><a href="#cdk-ssm-documents.MockAwsInvoker.nextReturn">nextReturn</a></code> | Set the next return value. |
| <code><a href="#cdk-ssm-documents.MockAwsInvoker.whenThen">whenThen</a></code> | Allows developers to mock out responses from the AwsInvoker depending on the input that it receives. |

---

##### `invoke` <a name="invoke" id="cdk-ssm-documents.MockAwsInvoker.invoke"></a>

```typescript
public invoke(invocation: Invocation): any
```

Saves the invocation to be retieved using getInvocations().

###### `invocation`<sup>Required</sup> <a name="invocation" id="cdk-ssm-documents.MockAwsInvoker.invoke.parameter.invocation"></a>

- *Type:* <a href="#cdk-ssm-documents.Invocation">Invocation</a>

---

##### `nextReturn` <a name="nextReturn" id="cdk-ssm-documents.MockAwsInvoker.nextReturn"></a>

```typescript
public nextReturn(awsResult: any): MockAwsInvoker
```

Set the next return value.

This function can be chained to return subsequent return values.
Values are read in order they were inserted.
The last value is used as a default if there are no other values retrieved.
In that way this function behaves the same way as Mockito .thenReturn(val).

###### `awsResult`<sup>Required</sup> <a name="awsResult" id="cdk-ssm-documents.MockAwsInvoker.nextReturn.parameter.awsResult"></a>

- *Type:* any

---

##### `whenThen` <a name="whenThen" id="cdk-ssm-documents.MockAwsInvoker.whenThen"></a>

```typescript
public whenThen(when: Invocation, then: {[ key: string ]: any}): void
```

Allows developers to mock out responses from the AwsInvoker depending on the input that it receives.

###### `when`<sup>Required</sup> <a name="when" id="cdk-ssm-documents.MockAwsInvoker.whenThen.parameter.when"></a>

- *Type:* <a href="#cdk-ssm-documents.Invocation">Invocation</a>

defines the invocation to match and return the then.

---

###### `then`<sup>Required</sup> <a name="then" id="cdk-ssm-documents.MockAwsInvoker.whenThen.parameter.then"></a>

- *Type:* {[ key: string ]: any}

is the value that should be returned if the above when Invocation is matched.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.MockAwsInvoker.property.previousInvocations">previousInvocations</a></code> | <code><a href="#cdk-ssm-documents.Invocation">Invocation</a>[]</code> | All of the invocations that have been submitted to this invoker until present. |

---

##### `previousInvocations`<sup>Required</sup> <a name="previousInvocations" id="cdk-ssm-documents.MockAwsInvoker.property.previousInvocations"></a>

```typescript
public readonly previousInvocations: Invocation[];
```

- *Type:* <a href="#cdk-ssm-documents.Invocation">Invocation</a>[]

All of the invocations that have been submitted to this invoker until present.

---


### MockEnvironment <a name="MockEnvironment" id="cdk-ssm-documents.MockEnvironment"></a>

- *Implements:* <a href="#cdk-ssm-documents.IEnvironment">IEnvironment</a>

Environment that simply saves commands into a previousCommands variable.

This is useful if you want to unit test the commands that would be sent to a real environment.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.MockEnvironment.Initializer"></a>

```typescript
import { MockEnvironment } from 'cdk-ssm-documents'

new MockEnvironment()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.MockEnvironment.run">run</a></code> | *No description.* |

---

##### `run` <a name="run" id="cdk-ssm-documents.MockEnvironment.run"></a>

```typescript
public run(command: string): string
```

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-documents.MockEnvironment.run.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.MockEnvironment.property.previousCommands">previousCommands</a></code> | <code>string[]</code> | *No description.* |

---

##### `previousCommands`<sup>Required</sup> <a name="previousCommands" id="cdk-ssm-documents.MockEnvironment.property.previousCommands"></a>

```typescript
public readonly previousCommands: string[];
```

- *Type:* string[]

---


### MockPause <a name="MockPause" id="cdk-ssm-documents.MockPause"></a>

- *Implements:* <a href="#cdk-ssm-documents.IPauseHook">IPauseHook</a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.MockPause.Initializer"></a>

```typescript
import { MockPause } from 'cdk-ssm-documents'

new MockPause()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.MockPause.pause">pause</a></code> | *No description.* |

---

##### `pause` <a name="pause" id="cdk-ssm-documents.MockPause.pause"></a>

```typescript
public pause(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.MockPause.property.timesInvoked">timesInvoked</a></code> | <code>number</code> | *No description.* |

---

##### `timesInvoked`<sup>Required</sup> <a name="timesInvoked" id="cdk-ssm-documents.MockPause.property.timesInvoked"></a>

```typescript
public readonly timesInvoked: number;
```

- *Type:* number

---


### MockSleep <a name="MockSleep" id="cdk-ssm-documents.MockSleep"></a>

- *Implements:* <a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a>

Mock ISleeper implementation.

Simply logs that it is sleeping and returns immediately.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.MockSleep.Initializer"></a>

```typescript
import { MockSleep } from 'cdk-ssm-documents'

new MockSleep()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.MockSleep.sleep">sleep</a></code> | *No description.* |

---

##### `sleep` <a name="sleep" id="cdk-ssm-documents.MockSleep.sleep"></a>

```typescript
public sleep(timeMillis: number): void
```

###### `timeMillis`<sup>Required</sup> <a name="timeMillis" id="cdk-ssm-documents.MockSleep.sleep.parameter.timeMillis"></a>

- *Type:* number

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.MockSleep.property.sleepMilliInvocations">sleepMilliInvocations</a></code> | <code>number[]</code> | *No description.* |

---

##### `sleepMilliInvocations`<sup>Required</sup> <a name="sleepMilliInvocations" id="cdk-ssm-documents.MockSleep.property.sleepMilliInvocations"></a>

```typescript
public readonly sleepMilliInvocations: number[];
```

- *Type:* number[]

---


### NoopObserver <a name="NoopObserver" id="cdk-ssm-documents.NoopObserver"></a>

- *Implements:* <a href="#cdk-ssm-documents.IObserver">IObserver</a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.NoopObserver.Initializer"></a>

```typescript
import { NoopObserver } from 'cdk-ssm-documents'

new NoopObserver()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.NoopObserver.accept">accept</a></code> | *No description.* |

---

##### `accept` <a name="accept" id="cdk-ssm-documents.NoopObserver.accept"></a>

```typescript
public accept(_value: {[ key: string ]: any}): void
```

###### `_value`<sup>Required</sup> <a name="_value" id="cdk-ssm-documents.NoopObserver.accept.parameter._value"></a>

- *Type:* {[ key: string ]: any}

---




### NumberVariable <a name="NumberVariable" id="cdk-ssm-documents.NumberVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

A number variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.NumberVariable.Initializer"></a>

```typescript
import { NumberVariable } from 'cdk-ssm-documents'

new NumberVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.NumberVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.NumberVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.NumberVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.NumberVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.NumberVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.NumberVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.NumberVariable.resolveToNumber">resolveToNumber</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.NumberVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.NumberVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.NumberVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.NumberVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.NumberVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToNumber` <a name="resolveToNumber" id="cdk-ssm-documents.NumberVariable.resolveToNumber"></a>

```typescript
public resolveToNumber(inputs: {[ key: string ]: any}): number
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.NumberVariable.resolveToNumber.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.NumberVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.NumberVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### OnFailureVariable <a name="OnFailureVariable" id="cdk-ssm-documents.OnFailureVariable"></a>

OnFailure reference value.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.OnFailureVariable.Initializer"></a>

```typescript
import { OnFailureVariable } from 'cdk-ssm-documents'

new OnFailureVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.OnFailureVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.OnFailureVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.OnFailureVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.OnFailureVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.OnFailureVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.OnFailureVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.OnFailureVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.OnFailureVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.OnFailureVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.OnFailureVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.OnFailureVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.OnFailureVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.OnFailureVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.OnFailureVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.OnFailureVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.OnFailureVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### OperationEvaluator <a name="OperationEvaluator" id="cdk-ssm-documents.OperationEvaluator"></a>

#### Initializers <a name="Initializers" id="cdk-ssm-documents.OperationEvaluator.Initializer"></a>

```typescript
import { OperationEvaluator } from 'cdk-ssm-documents'

new OperationEvaluator(operation: Operation)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.OperationEvaluator.Initializer.parameter.operation">operation</a></code> | <code><a href="#cdk-ssm-documents.Operation">Operation</a></code> | *No description.* |

---

##### `operation`<sup>Required</sup> <a name="operation" id="cdk-ssm-documents.OperationEvaluator.Initializer.parameter.operation"></a>

- *Type:* <a href="#cdk-ssm-documents.Operation">Operation</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.OperationEvaluator.evaluate">evaluate</a></code> | Evaluates this operation against the provided inputs. |
| <code><a href="#cdk-ssm-documents.OperationEvaluator.toOperationName">toOperationName</a></code> | *No description.* |

---

##### `evaluate` <a name="evaluate" id="cdk-ssm-documents.OperationEvaluator.evaluate"></a>

```typescript
public evaluate(value1: any, value2: any): boolean
```

Evaluates this operation against the provided inputs.

###### `value1`<sup>Required</sup> <a name="value1" id="cdk-ssm-documents.OperationEvaluator.evaluate.parameter.value1"></a>

- *Type:* any

---

###### `value2`<sup>Required</sup> <a name="value2" id="cdk-ssm-documents.OperationEvaluator.evaluate.parameter.value2"></a>

- *Type:* any

---

##### `toOperationName` <a name="toOperationName" id="cdk-ssm-documents.OperationEvaluator.toOperationName"></a>

```typescript
public toOperationName(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.OperationEvaluator.fromOperationName">fromOperationName</a></code> | Converts a string to OperationType. |

---

##### `fromOperationName` <a name="fromOperationName" id="cdk-ssm-documents.OperationEvaluator.fromOperationName"></a>

```typescript
import { OperationEvaluator } from 'cdk-ssm-documents'

OperationEvaluator.fromOperationName(operationName: string)
```

Converts a string to OperationType.

###### `operationName`<sup>Required</sup> <a name="operationName" id="cdk-ssm-documents.OperationEvaluator.fromOperationName.parameter.operationName"></a>

- *Type:* string

an operation name to return its OperationType.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.OperationEvaluator.property.operation">operation</a></code> | <code><a href="#cdk-ssm-documents.Operation">Operation</a></code> | *No description.* |

---

##### `operation`<sup>Required</sup> <a name="operation" id="cdk-ssm-documents.OperationEvaluator.property.operation"></a>

```typescript
public readonly operation: Operation;
```

- *Type:* <a href="#cdk-ssm-documents.Operation">Operation</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.OperationEvaluator.property.STRING_TO_OPERATION">STRING_TO_OPERATION</a></code> | <code>{[ key: string ]: <a href="#cdk-ssm-documents.Operation">Operation</a>}</code> | *No description.* |

---

##### `STRING_TO_OPERATION`<sup>Required</sup> <a name="STRING_TO_OPERATION" id="cdk-ssm-documents.OperationEvaluator.property.STRING_TO_OPERATION"></a>

```typescript
public readonly STRING_TO_OPERATION: {[ key: string ]: Operation};
```

- *Type:* {[ key: string ]: <a href="#cdk-ssm-documents.Operation">Operation</a>}

---

### PauseImpl <a name="PauseImpl" id="cdk-ssm-documents.PauseImpl"></a>

- *Implements:* <a href="#cdk-ssm-documents.IPauseHook">IPauseHook</a>

This IPauseHook implementation provides a real pause and wait for user input of Enter.

This implementation does not work well on all exported JSII languages.
Users can provide their own impl using the IPauseHook interface.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.PauseImpl.Initializer"></a>

```typescript
import { PauseImpl } from 'cdk-ssm-documents'

new PauseImpl()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.PauseImpl.pause">pause</a></code> | *No description.* |

---

##### `pause` <a name="pause" id="cdk-ssm-documents.PauseImpl.pause"></a>

```typescript
public pause(): void
```




### Platforms <a name="Platforms" id="cdk-ssm-documents.Platforms"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Platforms.toPlatform">toPlatform</a></code> | Converts a string to Platform. |

---

##### `toPlatform` <a name="toPlatform" id="cdk-ssm-documents.Platforms.toPlatform"></a>

```typescript
import { Platforms } from 'cdk-ssm-documents'

Platforms.toPlatform(platformString: string)
```

Converts a string to Platform.

###### `platformString`<sup>Required</sup> <a name="platformString" id="cdk-ssm-documents.Platforms.toPlatform.parameter.platformString"></a>

- *Type:* string

a platform name to return its Platform type.

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Platforms.property.STRING_TO_PLATFORM">STRING_TO_PLATFORM</a></code> | <code>{[ key: string ]: <a href="#cdk-ssm-documents.Platform">Platform</a>}</code> | *No description.* |

---

##### `STRING_TO_PLATFORM`<sup>Required</sup> <a name="STRING_TO_PLATFORM" id="cdk-ssm-documents.Platforms.property.STRING_TO_PLATFORM"></a>

```typescript
public readonly STRING_TO_PLATFORM: {[ key: string ]: Platform};
```

- *Type:* {[ key: string ]: <a href="#cdk-ssm-documents.Platform">Platform</a>}

---

### Precondition <a name="Precondition" id="cdk-ssm-documents.Precondition"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Precondition.asSsmEntry">asSsmEntry</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Precondition.evaluate">evaluate</a></code> | Evaluates if the precondition is met, by comparing the variable with the constant using the operator. |

---

##### `asSsmEntry` <a name="asSsmEntry" id="cdk-ssm-documents.Precondition.asSsmEntry"></a>

```typescript
public asSsmEntry(): {[ key: string ]: any}
```

##### `evaluate` <a name="evaluate" id="cdk-ssm-documents.Precondition.evaluate"></a>

```typescript
public evaluate(inputs: {[ key: string ]: any}): boolean
```

Evaluates if the precondition is met, by comparing the variable with the constant using the operator.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.Precondition.evaluate.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Precondition.newPlatformPrecondition">newPlatformPrecondition</a></code> | Returns a new Precondition. |

---

##### `newPlatformPrecondition` <a name="newPlatformPrecondition" id="cdk-ssm-documents.Precondition.newPlatformPrecondition"></a>

```typescript
import { Precondition } from 'cdk-ssm-documents'

Precondition.newPlatformPrecondition(platform: Platform)
```

Returns a new Precondition.

###### `platform`<sup>Required</sup> <a name="platform" id="cdk-ssm-documents.Precondition.newPlatformPrecondition.parameter.platform"></a>

- *Type:* <a href="#cdk-ssm-documents.Platform">Platform</a>

The platform the preconditions tests against.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Precondition.property.operationType">operationType</a></code> | <code><a href="#cdk-ssm-documents.Operation">Operation</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Precondition.property.variable1">variable1</a></code> | <code><a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Precondition.property.variable2">variable2</a></code> | <code><a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a></code> | *No description.* |

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="cdk-ssm-documents.Precondition.property.operationType"></a>

```typescript
public readonly operationType: Operation;
```

- *Type:* <a href="#cdk-ssm-documents.Operation">Operation</a>

---

##### `variable1`<sup>Required</sup> <a name="variable1" id="cdk-ssm-documents.Precondition.property.variable1"></a>

```typescript
public readonly variable1: IGenericVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

---

##### `variable2`<sup>Required</sup> <a name="variable2" id="cdk-ssm-documents.Precondition.property.variable2"></a>

```typescript
public readonly variable2: IGenericVariable;
```

- *Type:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.Precondition.property.INJECTED_PLAYFORM_TYPE_KEY">INJECTED_PLAYFORM_TYPE_KEY</a></code> | <code>string</code> | *No description.* |

---

##### `INJECTED_PLAYFORM_TYPE_KEY`<sup>Required</sup> <a name="INJECTED_PLAYFORM_TYPE_KEY" id="cdk-ssm-documents.Precondition.property.INJECTED_PLAYFORM_TYPE_KEY"></a>

```typescript
public readonly INJECTED_PLAYFORM_TYPE_KEY: string;
```

- *Type:* string

---

### ReflectiveAwsInvoker <a name="ReflectiveAwsInvoker" id="cdk-ssm-documents.ReflectiveAwsInvoker"></a>

- *Implements:* <a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a>

Implementation of IAwsInvoker that executes the AWS api for real.

If using this implementation, be sure that AWS credentials are available to the execution.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ReflectiveAwsInvoker.Initializer"></a>

```typescript
import { ReflectiveAwsInvoker } from 'cdk-ssm-documents'

new ReflectiveAwsInvoker()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ReflectiveAwsInvoker.invoke">invoke</a></code> | Invoke AWS with the provided invocation request. |

---

##### `invoke` <a name="invoke" id="cdk-ssm-documents.ReflectiveAwsInvoker.invoke"></a>

```typescript
public invoke(invocation: Invocation): any
```

Invoke AWS with the provided invocation request.

###### `invocation`<sup>Required</sup> <a name="invocation" id="cdk-ssm-documents.ReflectiveAwsInvoker.invoke.parameter.invocation"></a>

- *Type:* <a href="#cdk-ssm-documents.Invocation">Invocation</a>

---




### ResourceTypeVariable <a name="ResourceTypeVariable" id="cdk-ssm-documents.ResourceTypeVariable"></a>

A resource type variable reference.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.ResourceTypeVariable.Initializer"></a>

```typescript
import { ResourceTypeVariable } from 'cdk-ssm-documents'

new ResourceTypeVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ResourceTypeVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.ResourceTypeVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ResourceTypeVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.ResourceTypeVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.ResourceTypeVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.ResourceTypeVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.ResourceTypeVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.ResourceTypeVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.ResourceTypeVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.ResourceTypeVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.ResourceTypeVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.ResourceTypeVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.ResourceTypeVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.ResourceTypeVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.ResourceTypeVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.ResourceTypeVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### SleepImpl <a name="SleepImpl" id="cdk-ssm-documents.SleepImpl"></a>

- *Implements:* <a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a>

Performs a real sleep.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.SleepImpl.Initializer"></a>

```typescript
import { SleepImpl } from 'cdk-ssm-documents'

new SleepImpl()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SleepImpl.sleep">sleep</a></code> | Synchronously sleeps for duration specified in millis. |

---

##### `sleep` <a name="sleep" id="cdk-ssm-documents.SleepImpl.sleep"></a>

```typescript
public sleep(timeMillis: number): void
```

Synchronously sleeps for duration specified in millis.

###### `timeMillis`<sup>Required</sup> <a name="timeMillis" id="cdk-ssm-documents.SleepImpl.sleep.parameter.timeMillis"></a>

- *Type:* number

---




### StringDocument <a name="StringDocument" id="cdk-ssm-documents.StringDocument"></a>

This AutomationDocument supports declaring your document from an existing document (JSON/YAML String/File).

Importing an existing file allows for benefiting from the simulated execution.
The simulated execution will run locally in the same fashion that SSM Execution would run the document.
You can supply mocks to the simulator and validate the calls and the flow of the document without running via SSM execution.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.StringDocument.Initializer"></a>

```typescript
import { StringDocument } from 'cdk-ssm-documents'

new StringDocument()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.StringDocument.fromFile">fromFile</a></code> | Create an AutomationDocument from an existing AutomationDocument yaml or json file. |
| <code><a href="#cdk-ssm-documents.StringDocument.fromJson">fromJson</a></code> | Create an AutomationDocument from an existing json string. |
| <code><a href="#cdk-ssm-documents.StringDocument.fromYaml">fromYaml</a></code> | Create an AutomationDocument from an existing yaml string. |

---

##### `fromFile` <a name="fromFile" id="cdk-ssm-documents.StringDocument.fromFile"></a>

```typescript
import { StringDocument } from 'cdk-ssm-documents'

StringDocument.fromFile(stack: Construct, id: string, documentFilePath: string)
```

Create an AutomationDocument from an existing AutomationDocument yaml or json file.

Note: This function will deduce whether the file is written in yaml or json based on whether it has a .yaml or .yml extention.
You can use the returned AutomationDocument to run simulations as you would other documents created using this library.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-documents.StringDocument.fromFile.parameter.stack"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.StringDocument.fromFile.parameter.id"></a>

- *Type:* string

---

###### `documentFilePath`<sup>Required</sup> <a name="documentFilePath" id="cdk-ssm-documents.StringDocument.fromFile.parameter.documentFilePath"></a>

- *Type:* string

---

##### `fromJson` <a name="fromJson" id="cdk-ssm-documents.StringDocument.fromJson"></a>

```typescript
import { StringDocument } from 'cdk-ssm-documents'

StringDocument.fromJson(stack: Construct, id: string, documentJson: string)
```

Create an AutomationDocument from an existing json string.

You can use the returned AutomationDocument to run simulations as you would other documents created using this library.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-documents.StringDocument.fromJson.parameter.stack"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.StringDocument.fromJson.parameter.id"></a>

- *Type:* string

---

###### `documentJson`<sup>Required</sup> <a name="documentJson" id="cdk-ssm-documents.StringDocument.fromJson.parameter.documentJson"></a>

- *Type:* string

---

##### `fromYaml` <a name="fromYaml" id="cdk-ssm-documents.StringDocument.fromYaml"></a>

```typescript
import { StringDocument } from 'cdk-ssm-documents'

StringDocument.fromYaml(stack: Construct, id: string, documentYaml: string)
```

Create an AutomationDocument from an existing yaml string.

You can use the returned AutomationDocument to run simulations as you would other documents created using this library.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-documents.StringDocument.fromYaml.parameter.stack"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-documents.StringDocument.fromYaml.parameter.id"></a>

- *Type:* string

---

###### `documentYaml`<sup>Required</sup> <a name="documentYaml" id="cdk-ssm-documents.StringDocument.fromYaml.parameter.documentYaml"></a>

- *Type:* string

---



### StringFormat <a name="StringFormat" id="cdk-ssm-documents.StringFormat"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

Replacement for strings using Java String format style "%s" replacements.

Example: new StringFormat("This %s a replacement: %s", [new HardCodedValue("is"), new ExportedVariable("myInput")]);
The supported variable strings are either:
1. Implicit indices: "%s" where the first occurrence will match the first variable, the next will match the second...
2. Explicit indices: Example: "%1$s"; where "%1$s" matches the first variable and "%1$s" matches the second.
Do not combine usage of implicit and explicit indices. Choose one per StringFormat instance.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.StringFormat.Initializer"></a>

```typescript
import { StringFormat } from 'cdk-ssm-documents'

new StringFormat(format: string, variables?: IGenericVariable[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringFormat.Initializer.parameter.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.StringFormat.Initializer.parameter.variables">variables</a></code> | <code><a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>[]</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-documents.StringFormat.Initializer.parameter.format"></a>

- *Type:* string

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-ssm-documents.StringFormat.Initializer.parameter.variables"></a>

- *Type:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.StringFormat.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.StringFormat.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.StringFormat.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.StringFormat.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.StringFormat.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.StringFormat.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.StringFormat.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.StringFormat.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringFormat.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-documents.StringFormat.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringFormat.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.StringFormat.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringFormat.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-documents.StringFormat.property.variables">variables</a></code> | <code><a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>[]</code> | *No description.* |

---

##### `format`<sup>Required</sup> <a name="format" id="cdk-ssm-documents.StringFormat.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="cdk-ssm-documents.StringFormat.property.variables"></a>

```typescript
public readonly variables: IGenericVariable[];
```

- *Type:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>[]

---


### StringListVariable <a name="StringListVariable" id="cdk-ssm-documents.StringListVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

A string list variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.StringListVariable.Initializer"></a>

```typescript
import { StringListVariable } from 'cdk-ssm-documents'

new StringListVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringListVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.StringListVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.StringListVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.StringListVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.StringListVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.StringListVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.StringListVariable.resolveToStringList">resolveToStringList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.StringListVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.StringListVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.StringListVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringListVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.StringListVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringList` <a name="resolveToStringList" id="cdk-ssm-documents.StringListVariable.resolveToStringList"></a>

```typescript
public resolveToStringList(inputs: {[ key: string ]: any}): string[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringListVariable.resolveToStringList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringListVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.StringListVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### StringMapVariable <a name="StringMapVariable" id="cdk-ssm-documents.StringMapVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

A string map variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.StringMapVariable.Initializer"></a>

```typescript
import { StringMapVariable } from 'cdk-ssm-documents'

new StringMapVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringMapVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.StringMapVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.StringMapVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.StringMapVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.StringMapVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.StringMapVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.StringMapVariable.resolveToStringMap">resolveToStringMap</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.StringMapVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.StringMapVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.StringMapVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringMapVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.StringMapVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToStringMap` <a name="resolveToStringMap" id="cdk-ssm-documents.StringMapVariable.resolveToStringMap"></a>

```typescript
public resolveToStringMap(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringMapVariable.resolveToStringMap.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringMapVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.StringMapVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### StringVariable <a name="StringVariable" id="cdk-ssm-documents.StringVariable"></a>

- *Implements:* <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

A string variable reference.

Used to resolve the value from step inputs.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.StringVariable.Initializer"></a>

```typescript
import { StringVariable } from 'cdk-ssm-documents'

new StringVariable(reference: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringVariable.Initializer.parameter.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.StringVariable.Initializer.parameter.reference"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.StringVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.StringVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.StringVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.StringVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |
| <code><a href="#cdk-ssm-documents.StringVariable.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.StringVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.StringVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.StringVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.StringVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-documents.StringVariable.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.StringVariable.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-documents.StringVariable.property.reference">reference</a></code> | <code>string</code> | *No description.* |

---

##### `reference`<sup>Required</sup> <a name="reference" id="cdk-ssm-documents.StringVariable.property.reference"></a>

```typescript
public readonly reference: string;
```

- *Type:* string

---


### SynthUtils <a name="SynthUtils" id="cdk-ssm-documents.SynthUtils"></a>

Wraps SynthUtils from @aws-cdk/assert because that package is not exported via JSII.

#### Initializers <a name="Initializers" id="cdk-ssm-documents.SynthUtils.Initializer"></a>

```typescript
import { SynthUtils } from 'cdk-ssm-documents'

new SynthUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.SynthUtils.synthesize">synthesize</a></code> | Wraps @aws-cdk/assert SynthUtils.synthesize(stack). Synthesizes the stack provided. |

---

##### `synthesize` <a name="synthesize" id="cdk-ssm-documents.SynthUtils.synthesize"></a>

```typescript
import { SynthUtils } from 'cdk-ssm-documents'

SynthUtils.synthesize(stack: Stack)
```

Wraps @aws-cdk/assert SynthUtils.synthesize(stack). Synthesizes the stack provided.

###### `stack`<sup>Required</sup> <a name="stack" id="cdk-ssm-documents.SynthUtils.synthesize.parameter.stack"></a>

- *Type:* aws-cdk-lib.Stack

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IApproveHook <a name="IApproveHook" id="cdk-ssm-documents.IApproveHook"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.ApproveImpl">ApproveImpl</a>, <a href="#cdk-ssm-documents.MockApprove">MockApprove</a>, <a href="#cdk-ssm-documents.IApproveHook">IApproveHook</a>

This can be used to provide a hook for approval implementation for ApproveStep.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IApproveHook.ask">ask</a></code> | Ask for approval. |

---

##### `ask` <a name="ask" id="cdk-ssm-documents.IApproveHook.ask"></a>

```typescript
public ask(approver: string): boolean
```

Ask for approval.

###### `approver`<sup>Required</sup> <a name="approver" id="cdk-ssm-documents.IApproveHook.ask.parameter.approver"></a>

- *Type:* string

---


### IAutomationComponent <a name="IAutomationComponent" id="cdk-ssm-documents.IAutomationComponent"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.ApproveStep">ApproveStep</a>, <a href="#cdk-ssm-documents.AssertAwsResourceStep">AssertAwsResourceStep</a>, <a href="#cdk-ssm-documents.AutomationStep">AutomationStep</a>, <a href="#cdk-ssm-documents.AwsApiStep">AwsApiStep</a>, <a href="#cdk-ssm-documents.BranchStep">BranchStep</a>, <a href="#cdk-ssm-documents.ChangeInstanceStateStep">ChangeInstanceStateStep</a>, <a href="#cdk-ssm-documents.CompositeAutomationStep">CompositeAutomationStep</a>, <a href="#cdk-ssm-documents.CopyImageStep">CopyImageStep</a>, <a href="#cdk-ssm-documents.CreateImageStep">CreateImageStep</a>, <a href="#cdk-ssm-documents.CreateStackStep">CreateStackStep</a>, <a href="#cdk-ssm-documents.CreateTagsStep">CreateTagsStep</a>, <a href="#cdk-ssm-documents.DeleteImageStep">DeleteImageStep</a>, <a href="#cdk-ssm-documents.DeleteStackStep">DeleteStackStep</a>, <a href="#cdk-ssm-documents.ExecuteScriptStep">ExecuteScriptStep</a>, <a href="#cdk-ssm-documents.ExecuteStateMachineStep">ExecuteStateMachineStep</a>, <a href="#cdk-ssm-documents.InvokeLambdaFunctionStep">InvokeLambdaFunctionStep</a>, <a href="#cdk-ssm-documents.InvokeWebhookStep">InvokeWebhookStep</a>, <a href="#cdk-ssm-documents.PauseStep">PauseStep</a>, <a href="#cdk-ssm-documents.RebootInstanceAndWait">RebootInstanceAndWait</a>, <a href="#cdk-ssm-documents.RunCommandStep">RunCommandStep</a>, <a href="#cdk-ssm-documents.RunInstanceStep">RunInstanceStep</a>, <a href="#cdk-ssm-documents.SleepStep">SleepStep</a>, <a href="#cdk-ssm-documents.StringStep">StringStep</a>, <a href="#cdk-ssm-documents.WaitForResourceStep">WaitForResourceStep</a>, <a href="#cdk-ssm-documents.IAutomationComponent">IAutomationComponent</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IAutomationComponent.addToDocument">addToDocument</a></code> | *No description.* |

---

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.IAutomationComponent.addToDocument"></a>

```typescript
public addToDocument(doc: AutomationDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.IAutomationComponent.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.AutomationDocumentBuilder">AutomationDocumentBuilder</a>

---


### IAwsInvoker <a name="IAwsInvoker" id="cdk-ssm-documents.IAwsInvoker"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.MockAwsInvoker">MockAwsInvoker</a>, <a href="#cdk-ssm-documents.ReflectiveAwsInvoker">ReflectiveAwsInvoker</a>, <a href="#cdk-ssm-documents.IAwsInvoker">IAwsInvoker</a>

Aws invoker interface.

This can be used to provide a hook for AWS invocation of steps so as to mock AWS behavior for simulation runs.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IAwsInvoker.invoke">invoke</a></code> | Invoke AWS with the provided invocation request. |

---

##### `invoke` <a name="invoke" id="cdk-ssm-documents.IAwsInvoker.invoke"></a>

```typescript
public invoke(invocation: Invocation): any
```

Invoke AWS with the provided invocation request.

> [Invocation](Invocation)

###### `invocation`<sup>Required</sup> <a name="invocation" id="cdk-ssm-documents.IAwsInvoker.invoke.parameter.invocation"></a>

- *Type:* <a href="#cdk-ssm-documents.Invocation">Invocation</a>

---


### IBooleanVariable <a name="IBooleanVariable" id="cdk-ssm-documents.IBooleanVariable"></a>

- *Extends:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-documents.BooleanVariable">BooleanVariable</a>, <a href="#cdk-ssm-documents.HardCodedBoolean">HardCodedBoolean</a>, <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>

A boolean variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IBooleanVariable.resolveToBoolean">resolveToBoolean</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToBoolean` <a name="resolveToBoolean" id="cdk-ssm-documents.IBooleanVariable.resolveToBoolean"></a>

```typescript
public resolveToBoolean(inputs: {[ key: string ]: any}): boolean
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.IBooleanVariable.resolveToBoolean.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### ICommandComponent <a name="ICommandComponent" id="cdk-ssm-documents.ICommandComponent"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.CommandStep">CommandStep</a>, <a href="#cdk-ssm-documents.CompositeCommandStep">CompositeCommandStep</a>, <a href="#cdk-ssm-documents.PsModuleStep">PsModuleStep</a>, <a href="#cdk-ssm-documents.RunPowerShellScriptStep">RunPowerShellScriptStep</a>, <a href="#cdk-ssm-documents.RunShellScriptStep">RunShellScriptStep</a>, <a href="#cdk-ssm-documents.SoftwareInventoryStep">SoftwareInventoryStep</a>, <a href="#cdk-ssm-documents.UpdateAgentStep">UpdateAgentStep</a>, <a href="#cdk-ssm-documents.UpdateSSMAgentStep">UpdateSSMAgentStep</a>, <a href="#cdk-ssm-documents.ICommandComponent">ICommandComponent</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ICommandComponent.addToDocument">addToDocument</a></code> | *No description.* |

---

##### `addToDocument` <a name="addToDocument" id="cdk-ssm-documents.ICommandComponent.addToDocument"></a>

```typescript
public addToDocument(doc: CommandDocumentBuilder): void
```

###### `doc`<sup>Required</sup> <a name="doc" id="cdk-ssm-documents.ICommandComponent.addToDocument.parameter.doc"></a>

- *Type:* <a href="#cdk-ssm-documents.CommandDocumentBuilder">CommandDocumentBuilder</a>

---


### IEnumVariable <a name="IEnumVariable" id="cdk-ssm-documents.IEnumVariable"></a>

- *Extends:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-documents.DesiredStateVariable">DesiredStateVariable</a>, <a href="#cdk-ssm-documents.DocumentHashTypeVariable">DocumentHashTypeVariable</a>, <a href="#cdk-ssm-documents.EnumVariable">EnumVariable</a>, <a href="#cdk-ssm-documents.HardCodedDesiredState">HardCodedDesiredState</a>, <a href="#cdk-ssm-documents.HardCodedDocumentHashType">HardCodedDocumentHashType</a>, <a href="#cdk-ssm-documents.HardCodedEnum">HardCodedEnum</a>, <a href="#cdk-ssm-documents.HardCodedOnFailure">HardCodedOnFailure</a>, <a href="#cdk-ssm-documents.HardCodedResourceType">HardCodedResourceType</a>, <a href="#cdk-ssm-documents.OnFailureVariable">OnFailureVariable</a>, <a href="#cdk-ssm-documents.ResourceTypeVariable">ResourceTypeVariable</a>, <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>

An enum variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IEnumVariable.resolveToEnum">resolveToEnum</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToEnum` <a name="resolveToEnum" id="cdk-ssm-documents.IEnumVariable.resolveToEnum"></a>

```typescript
public resolveToEnum(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.IEnumVariable.resolveToEnum.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IEnvironment <a name="IEnvironment" id="cdk-ssm-documents.IEnvironment"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.DockerEnvironment">DockerEnvironment</a>, <a href="#cdk-ssm-documents.LoggingEnvironment">LoggingEnvironment</a>, <a href="#cdk-ssm-documents.MockEnvironment">MockEnvironment</a>, <a href="#cdk-ssm-documents.IEnvironment">IEnvironment</a>

IEnvironment is an abstraction for EC2 instances.

The implementations of this interface provides customers with
alternatives to test their commands rather than a real instance.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IEnvironment.run">run</a></code> | *No description.* |

---

##### `run` <a name="run" id="cdk-ssm-documents.IEnvironment.run"></a>

```typescript
public run(command: string): string
```

###### `command`<sup>Required</sup> <a name="command" id="cdk-ssm-documents.IEnvironment.run.parameter.command"></a>

- *Type:* string

---


### IGenericVariable <a name="IGenericVariable" id="cdk-ssm-documents.IGenericVariable"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.BooleanVariable">BooleanVariable</a>, <a href="#cdk-ssm-documents.DesiredStateVariable">DesiredStateVariable</a>, <a href="#cdk-ssm-documents.DictFormat">DictFormat</a>, <a href="#cdk-ssm-documents.DocumentHashTypeVariable">DocumentHashTypeVariable</a>, <a href="#cdk-ssm-documents.EnumVariable">EnumVariable</a>, <a href="#cdk-ssm-documents.GenericVariable">GenericVariable</a>, <a href="#cdk-ssm-documents.HardCodedBoolean">HardCodedBoolean</a>, <a href="#cdk-ssm-documents.HardCodedDesiredState">HardCodedDesiredState</a>, <a href="#cdk-ssm-documents.HardCodedDocumentHashType">HardCodedDocumentHashType</a>, <a href="#cdk-ssm-documents.HardCodedEnum">HardCodedEnum</a>, <a href="#cdk-ssm-documents.HardCodedMapList">HardCodedMapList</a>, <a href="#cdk-ssm-documents.HardCodedNumber">HardCodedNumber</a>, <a href="#cdk-ssm-documents.HardCodedOnFailure">HardCodedOnFailure</a>, <a href="#cdk-ssm-documents.HardCodedResourceType">HardCodedResourceType</a>, <a href="#cdk-ssm-documents.HardCodedString">HardCodedString</a>, <a href="#cdk-ssm-documents.HardCodedStringList">HardCodedStringList</a>, <a href="#cdk-ssm-documents.HardCodedStringMap">HardCodedStringMap</a>, <a href="#cdk-ssm-documents.HardCodedValueBase">HardCodedValueBase</a>, <a href="#cdk-ssm-documents.MapListVariable">MapListVariable</a>, <a href="#cdk-ssm-documents.NumberVariable">NumberVariable</a>, <a href="#cdk-ssm-documents.OnFailureVariable">OnFailureVariable</a>, <a href="#cdk-ssm-documents.ResourceTypeVariable">ResourceTypeVariable</a>, <a href="#cdk-ssm-documents.StringFormat">StringFormat</a>, <a href="#cdk-ssm-documents.StringListVariable">StringListVariable</a>, <a href="#cdk-ssm-documents.StringMapVariable">StringMapVariable</a>, <a href="#cdk-ssm-documents.StringVariable">StringVariable</a>, <a href="#cdk-ssm-documents.IBooleanVariable">IBooleanVariable</a>, <a href="#cdk-ssm-documents.IEnumVariable">IEnumVariable</a>, <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>, <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>, <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>, <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>, <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>, <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

Variables hold references to a value.

There are two implementations: HardCodedValue and ExportedVariable.
This interface allows you to reference variable outputs from previous steps via the exported step.variable().
If you do not have a reference to a variable, you may generate your own variable using the ExportedVariable ctor.
In the event that a hardcoded value is passed into a step, you can reference the value with a HardCodedValue.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IGenericVariable.print">print</a></code> | Prints the variable in a way that SSM understands. |
| <code><a href="#cdk-ssm-documents.IGenericVariable.requiredInputs">requiredInputs</a></code> | The inputs that are required for determining the value of this variable. |
| <code><a href="#cdk-ssm-documents.IGenericVariable.resolve">resolve</a></code> | Given the execution inputs, return the resolved value of this variable. |
| <code><a href="#cdk-ssm-documents.IGenericVariable.toJSON">toJSON</a></code> | JSON.stringify(variable) will implicitly invoke this variable. |

---

##### `print` <a name="print" id="cdk-ssm-documents.IGenericVariable.print"></a>

```typescript
public print(): any
```

Prints the variable in a way that SSM understands.

This is typically in the form of {{Variable}} or the value.

*Example*

```typescript
{{MyVariable}}
```


##### `requiredInputs` <a name="requiredInputs" id="cdk-ssm-documents.IGenericVariable.requiredInputs"></a>

```typescript
public requiredInputs(): string[]
```

The inputs that are required for determining the value of this variable.

In the case of a single variable string, this will return a single value.

##### `resolve` <a name="resolve" id="cdk-ssm-documents.IGenericVariable.resolve"></a>

```typescript
public resolve(inputs: {[ key: string ]: any}): any
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.IGenericVariable.resolve.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---

##### `toJSON` <a name="toJSON" id="cdk-ssm-documents.IGenericVariable.toJSON"></a>

```typescript
public toJSON(): any
```

JSON.stringify(variable) will implicitly invoke this variable.


### IMapListVariable <a name="IMapListVariable" id="cdk-ssm-documents.IMapListVariable"></a>

- *Extends:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-documents.HardCodedMapList">HardCodedMapList</a>, <a href="#cdk-ssm-documents.MapListVariable">MapListVariable</a>, <a href="#cdk-ssm-documents.IMapListVariable">IMapListVariable</a>

A map list variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IMapListVariable.resolveToMapList">resolveToMapList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToMapList` <a name="resolveToMapList" id="cdk-ssm-documents.IMapListVariable.resolveToMapList"></a>

```typescript
public resolveToMapList(inputs: {[ key: string ]: any}): {[ key: string ]: any}[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.IMapListVariable.resolveToMapList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### INumberVariable <a name="INumberVariable" id="cdk-ssm-documents.INumberVariable"></a>

- *Extends:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-documents.HardCodedNumber">HardCodedNumber</a>, <a href="#cdk-ssm-documents.NumberVariable">NumberVariable</a>, <a href="#cdk-ssm-documents.INumberVariable">INumberVariable</a>

A number variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.INumberVariable.resolveToNumber">resolveToNumber</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToNumber` <a name="resolveToNumber" id="cdk-ssm-documents.INumberVariable.resolveToNumber"></a>

```typescript
public resolveToNumber(inputs: {[ key: string ]: any}): number
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.INumberVariable.resolveToNumber.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IObserver <a name="IObserver" id="cdk-ssm-documents.IObserver"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.NoopObserver">NoopObserver</a>, <a href="#cdk-ssm-documents.IObserver">IObserver</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IObserver.accept">accept</a></code> | *No description.* |

---

##### `accept` <a name="accept" id="cdk-ssm-documents.IObserver.accept"></a>

```typescript
public accept(value: {[ key: string ]: any}): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdk-ssm-documents.IObserver.accept.parameter.value"></a>

- *Type:* {[ key: string ]: any}

---


### IParameterResolver <a name="IParameterResolver" id="cdk-ssm-documents.IParameterResolver"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.IParameterResolver">IParameterResolver</a>

Resolver for secure strings in Parameters.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IParameterResolver.resolve">resolve</a></code> | Resolve the token to its value. |

---

##### `resolve` <a name="resolve" id="cdk-ssm-documents.IParameterResolver.resolve"></a>

```typescript
public resolve(input: string): string
```

Resolve the token to its value.

###### `input`<sup>Required</sup> <a name="input" id="cdk-ssm-documents.IParameterResolver.resolve.parameter.input"></a>

- *Type:* string

---


### IPauseHook <a name="IPauseHook" id="cdk-ssm-documents.IPauseHook"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.MockPause">MockPause</a>, <a href="#cdk-ssm-documents.PauseImpl">PauseImpl</a>, <a href="#cdk-ssm-documents.IPauseHook">IPauseHook</a>

This can be used to provide a hook for pausing implementation for PauseStep.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IPauseHook.pause">pause</a></code> | *No description.* |

---

##### `pause` <a name="pause" id="cdk-ssm-documents.IPauseHook.pause"></a>

```typescript
public pause(): void
```


### IRunCommandHook <a name="IRunCommandHook" id="cdk-ssm-documents.IRunCommandHook"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.ApiRunCommandHook">ApiRunCommandHook</a>, <a href="#cdk-ssm-documents.IRunCommandHook">IRunCommandHook</a>

Interface for simulating aws:runCommand.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IRunCommandHook.execute">execute</a></code> | Simulate the aws:runCommand. |

---

##### `execute` <a name="execute" id="cdk-ssm-documents.IRunCommandHook.execute"></a>

```typescript
public execute(props: RunCommandProps): RunCommandOutputs
```

Simulate the aws:runCommand.

###### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-documents.IRunCommandHook.execute.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-documents.RunCommandProps">RunCommandProps</a>

---


### ISleepHook <a name="ISleepHook" id="cdk-ssm-documents.ISleepHook"></a>

- *Implemented By:* <a href="#cdk-ssm-documents.MockSleep">MockSleep</a>, <a href="#cdk-ssm-documents.SleepImpl">SleepImpl</a>, <a href="#cdk-ssm-documents.ISleepHook">ISleepHook</a>

This can be used to provide a hook for sleeping for SleepStep (and other places where sleep is required).

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ISleepHook.sleep">sleep</a></code> | *No description.* |

---

##### `sleep` <a name="sleep" id="cdk-ssm-documents.ISleepHook.sleep"></a>

```typescript
public sleep(timeMillis: number): void
```

###### `timeMillis`<sup>Required</sup> <a name="timeMillis" id="cdk-ssm-documents.ISleepHook.sleep.parameter.timeMillis"></a>

- *Type:* number

---


### IStringListVariable <a name="IStringListVariable" id="cdk-ssm-documents.IStringListVariable"></a>

- *Extends:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-documents.HardCodedStringList">HardCodedStringList</a>, <a href="#cdk-ssm-documents.StringListVariable">StringListVariable</a>, <a href="#cdk-ssm-documents.IStringListVariable">IStringListVariable</a>

A string list variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IStringListVariable.resolveToStringList">resolveToStringList</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToStringList` <a name="resolveToStringList" id="cdk-ssm-documents.IStringListVariable.resolveToStringList"></a>

```typescript
public resolveToStringList(inputs: {[ key: string ]: any}): string[]
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.IStringListVariable.resolveToStringList.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IStringMapVariable <a name="IStringMapVariable" id="cdk-ssm-documents.IStringMapVariable"></a>

- *Extends:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-documents.HardCodedStringMap">HardCodedStringMap</a>, <a href="#cdk-ssm-documents.StringMapVariable">StringMapVariable</a>, <a href="#cdk-ssm-documents.IStringMapVariable">IStringMapVariable</a>

A string map variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IStringMapVariable.resolveToStringMap">resolveToStringMap</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToStringMap` <a name="resolveToStringMap" id="cdk-ssm-documents.IStringMapVariable.resolveToStringMap"></a>

```typescript
public resolveToStringMap(inputs: {[ key: string ]: any}): {[ key: string ]: any}
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.IStringMapVariable.resolveToStringMap.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


### IStringVariable <a name="IStringVariable" id="cdk-ssm-documents.IStringVariable"></a>

- *Extends:* <a href="#cdk-ssm-documents.IGenericVariable">IGenericVariable</a>

- *Implemented By:* <a href="#cdk-ssm-documents.DictFormat">DictFormat</a>, <a href="#cdk-ssm-documents.HardCodedString">HardCodedString</a>, <a href="#cdk-ssm-documents.StringFormat">StringFormat</a>, <a href="#cdk-ssm-documents.StringVariable">StringVariable</a>, <a href="#cdk-ssm-documents.IStringVariable">IStringVariable</a>

A string variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.IStringVariable.resolveToString">resolveToString</a></code> | Given the execution inputs, return the resolved value of this variable. |

---

##### `resolveToString` <a name="resolveToString" id="cdk-ssm-documents.IStringVariable.resolveToString"></a>

```typescript
public resolveToString(inputs: {[ key: string ]: any}): string
```

Given the execution inputs, return the resolved value of this variable.

###### `inputs`<sup>Required</sup> <a name="inputs" id="cdk-ssm-documents.IStringVariable.resolveToString.parameter.inputs"></a>

- *Type:* {[ key: string ]: any}

are the execution inputs.

---


## Enums <a name="Enums" id="Enums"></a>

### BodyOrUrlType <a name="BodyOrUrlType" id="cdk-ssm-documents.BodyOrUrlType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.BodyOrUrlType.BODY">BODY</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.BodyOrUrlType.URL">URL</a></code> | *No description.* |

---

##### `BODY` <a name="BODY" id="cdk-ssm-documents.BodyOrUrlType.BODY"></a>

---


##### `URL` <a name="URL" id="cdk-ssm-documents.BodyOrUrlType.URL"></a>

---


### DataTypeEnum <a name="DataTypeEnum" id="cdk-ssm-documents.DataTypeEnum"></a>

DataTypes as supported by SSM Documents.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DataTypeEnum.STRING">STRING</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DataTypeEnum.INTEGER">INTEGER</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DataTypeEnum.BOOLEAN">BOOLEAN</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DataTypeEnum.STRING_LIST">STRING_LIST</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DataTypeEnum.STRING_MAP">STRING_MAP</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DataTypeEnum.MAP_LIST">MAP_LIST</a></code> | *No description.* |

---

##### `STRING` <a name="STRING" id="cdk-ssm-documents.DataTypeEnum.STRING"></a>

---


##### `INTEGER` <a name="INTEGER" id="cdk-ssm-documents.DataTypeEnum.INTEGER"></a>

---


##### `BOOLEAN` <a name="BOOLEAN" id="cdk-ssm-documents.DataTypeEnum.BOOLEAN"></a>

---


##### `STRING_LIST` <a name="STRING_LIST" id="cdk-ssm-documents.DataTypeEnum.STRING_LIST"></a>

---


##### `STRING_MAP` <a name="STRING_MAP" id="cdk-ssm-documents.DataTypeEnum.STRING_MAP"></a>

---


##### `MAP_LIST` <a name="MAP_LIST" id="cdk-ssm-documents.DataTypeEnum.MAP_LIST"></a>

---


### DesiredState <a name="DesiredState" id="cdk-ssm-documents.DesiredState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DesiredState.RUNNING">RUNNING</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DesiredState.STOPPED">STOPPED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DesiredState.TERMINATED">TERMINATED</a></code> | *No description.* |

---

##### `RUNNING` <a name="RUNNING" id="cdk-ssm-documents.DesiredState.RUNNING"></a>

---


##### `STOPPED` <a name="STOPPED" id="cdk-ssm-documents.DesiredState.STOPPED"></a>

---


##### `TERMINATED` <a name="TERMINATED" id="cdk-ssm-documents.DesiredState.TERMINATED"></a>

---


### DocumentFormat <a name="DocumentFormat" id="cdk-ssm-documents.DocumentFormat"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DocumentFormat.JSON">JSON</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DocumentFormat.YAML">YAML</a></code> | *No description.* |

---

##### `JSON` <a name="JSON" id="cdk-ssm-documents.DocumentFormat.JSON"></a>

---


##### `YAML` <a name="YAML" id="cdk-ssm-documents.DocumentFormat.YAML"></a>

---


### DocumentHashType <a name="DocumentHashType" id="cdk-ssm-documents.DocumentHashType"></a>

Type of document hash.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.DocumentHashType.SHA256">SHA256</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.DocumentHashType.SHA1">SHA1</a></code> | *No description.* |

---

##### `SHA256` <a name="SHA256" id="cdk-ssm-documents.DocumentHashType.SHA256"></a>

---


##### `SHA1` <a name="SHA1" id="cdk-ssm-documents.DocumentHashType.SHA1"></a>

---


### OnFailure <a name="OnFailure" id="cdk-ssm-documents.OnFailure"></a>

Values for CreateStackStep's OnFailure property.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.OnFailure.DO_NOTHING">DO_NOTHING</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.OnFailure.ROLLBACK">ROLLBACK</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.OnFailure.DELETE">DELETE</a></code> | *No description.* |

---

##### `DO_NOTHING` <a name="DO_NOTHING" id="cdk-ssm-documents.OnFailure.DO_NOTHING"></a>

---


##### `ROLLBACK` <a name="ROLLBACK" id="cdk-ssm-documents.OnFailure.ROLLBACK"></a>

---


##### `DELETE` <a name="DELETE" id="cdk-ssm-documents.OnFailure.DELETE"></a>

---


### Operation <a name="Operation" id="cdk-ssm-documents.Operation"></a>

Operation to use for comparing a Choice's or Preconditions with provided value.

See https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-branch.html
or https://docs.aws.amazon.com/systems-manager/latest/userguide/document-schemas-features.html

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Operation.BOOLEAN_EQUALS">BOOLEAN_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.CONTAINS">CONTAINS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.ENDS_WITH">ENDS_WITH</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.STARTS_WITH">STARTS_WITH</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.STRING_EQUALS">STRING_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.EQUALS_IGNORE_CASE">EQUALS_IGNORE_CASE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.NUMERIC_EQUALS">NUMERIC_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.NUMERIC_GREATER">NUMERIC_GREATER</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.NUMERIC_GREATER_OR_EQUALS">NUMERIC_GREATER_OR_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.NUMERIC_LESSER">NUMERIC_LESSER</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Operation.NUMERIC_LESSER_OR_EQUALS">NUMERIC_LESSER_OR_EQUALS</a></code> | *No description.* |

---

##### `BOOLEAN_EQUALS` <a name="BOOLEAN_EQUALS" id="cdk-ssm-documents.Operation.BOOLEAN_EQUALS"></a>

---


##### `CONTAINS` <a name="CONTAINS" id="cdk-ssm-documents.Operation.CONTAINS"></a>

---


##### `ENDS_WITH` <a name="ENDS_WITH" id="cdk-ssm-documents.Operation.ENDS_WITH"></a>

---


##### `STARTS_WITH` <a name="STARTS_WITH" id="cdk-ssm-documents.Operation.STARTS_WITH"></a>

---


##### `STRING_EQUALS` <a name="STRING_EQUALS" id="cdk-ssm-documents.Operation.STRING_EQUALS"></a>

---


##### `EQUALS_IGNORE_CASE` <a name="EQUALS_IGNORE_CASE" id="cdk-ssm-documents.Operation.EQUALS_IGNORE_CASE"></a>

---


##### `NUMERIC_EQUALS` <a name="NUMERIC_EQUALS" id="cdk-ssm-documents.Operation.NUMERIC_EQUALS"></a>

---


##### `NUMERIC_GREATER` <a name="NUMERIC_GREATER" id="cdk-ssm-documents.Operation.NUMERIC_GREATER"></a>

---


##### `NUMERIC_GREATER_OR_EQUALS` <a name="NUMERIC_GREATER_OR_EQUALS" id="cdk-ssm-documents.Operation.NUMERIC_GREATER_OR_EQUALS"></a>

---


##### `NUMERIC_LESSER` <a name="NUMERIC_LESSER" id="cdk-ssm-documents.Operation.NUMERIC_LESSER"></a>

---


##### `NUMERIC_LESSER_OR_EQUALS` <a name="NUMERIC_LESSER_OR_EQUALS" id="cdk-ssm-documents.Operation.NUMERIC_LESSER_OR_EQUALS"></a>

---


### Platform <a name="Platform" id="cdk-ssm-documents.Platform"></a>

Command steps are not all applicable to all platforms.

Each command step declares which Platforms it supports.
That allows customers to validate their CommandDocument against a given platform prior to execution.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.Platform.LINUX">LINUX</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Platform.WINDOWS">WINDOWS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.Platform.MAC_OS">MAC_OS</a></code> | *No description.* |

---

##### `LINUX` <a name="LINUX" id="cdk-ssm-documents.Platform.LINUX"></a>

---


##### `WINDOWS` <a name="WINDOWS" id="cdk-ssm-documents.Platform.WINDOWS"></a>

---


##### `MAC_OS` <a name="MAC_OS" id="cdk-ssm-documents.Platform.MAC_OS"></a>

---


### ResourceType <a name="ResourceType" id="cdk-ssm-documents.ResourceType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ResourceType.EC2">EC2</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ResourceType.MAINTENANCE_INSTANCE">MAINTENANCE_INSTANCE</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ResourceType.MAINTENANCE_WINDOW">MAINTENANCE_WINDOW</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ResourceType.PARAMETER">PARAMETER</a></code> | *No description.* |

---

##### `EC2` <a name="EC2" id="cdk-ssm-documents.ResourceType.EC2"></a>

---


##### `MAINTENANCE_INSTANCE` <a name="MAINTENANCE_INSTANCE" id="cdk-ssm-documents.ResourceType.MAINTENANCE_INSTANCE"></a>

---


##### `MAINTENANCE_WINDOW` <a name="MAINTENANCE_WINDOW" id="cdk-ssm-documents.ResourceType.MAINTENANCE_WINDOW"></a>

---


##### `PARAMETER` <a name="PARAMETER" id="cdk-ssm-documents.ResourceType.PARAMETER"></a>

---


### ResponseCode <a name="ResponseCode" id="cdk-ssm-documents.ResponseCode"></a>

Steps report their ResponseCode using this enum.

A successful response will contain the outputs expected.
A failed/canceled response will contain the stackTrace.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ResponseCode.SUCCESS">SUCCESS</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ResponseCode.CANCELED">CANCELED</a></code> | *No description.* |
| <code><a href="#cdk-ssm-documents.ResponseCode.FAILED">FAILED</a></code> | *No description.* |

---

##### `SUCCESS` <a name="SUCCESS" id="cdk-ssm-documents.ResponseCode.SUCCESS"></a>

---


##### `CANCELED` <a name="CANCELED" id="cdk-ssm-documents.ResponseCode.CANCELED"></a>

---


##### `FAILED` <a name="FAILED" id="cdk-ssm-documents.ResponseCode.FAILED"></a>

---


### ScriptLanguage <a name="ScriptLanguage" id="cdk-ssm-documents.ScriptLanguage"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-documents.ScriptLanguage.PYTHON">PYTHON</a></code> | *No description.* |

---

##### `PYTHON` <a name="PYTHON" id="cdk-ssm-documents.ScriptLanguage.PYTHON"></a>

---

