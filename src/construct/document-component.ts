import { AutomationDocumentBuilder, CommandDocumentBuilder } from '../document/document-builder';

export interface IAutomationComponent {
  addToDocument(doc: AutomationDocumentBuilder): void;
}

export interface ICommandComponent {
  addToDocument(doc: CommandDocumentBuilder): void;
}