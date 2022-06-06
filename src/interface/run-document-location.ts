import { IStringVariable } from './variables/string-variable';

export interface IRunDocumentLocation {
  readonly type: string;
  readonly location: IStringVariable;
}

export class LocalRunDocument implements IRunDocumentLocation {
  readonly type: string = 'LocalPath';
  readonly location: IStringVariable;

  /**
   * Specify the path to the document on the local share
   */
  constructor(documentPath: IStringVariable) {
    this.location = documentPath;
  }
}

export class SsmRunDocument implements IRunDocumentLocation {
  readonly type: string = 'SSMDocument';
  readonly location: IStringVariable;

  /**
   * specify the name of the document
   */
  constructor(documentName: IStringVariable) {
    this.location = documentName;
  }
}
