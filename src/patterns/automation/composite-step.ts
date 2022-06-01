import { Construct } from 'constructs';
import { IAutomationComponent, ICommandComponent } from '../../construct/document-component';
import { AutomationDocumentBuilder, CommandDocumentBuilder } from '../../document/document-builder';

export abstract class CompositeAutomationStep extends Construct implements IAutomationComponent {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  abstract addToDocument(doc: AutomationDocumentBuilder): void;
}

export abstract class CompositeCommandStep extends Construct implements ICommandComponent {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  abstract addToDocument(doc: CommandDocumentBuilder): void;
}