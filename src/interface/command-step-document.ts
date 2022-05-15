import {IStringVariable} from '../interface/variables/string-variable'

export interface ICommandStepDocument {
    pathGet(): IStringVariable;
    typeGet() : string;
}

export class LocalCommandStepDocument implements  ICommandStepDocument {
    readonly path: IStringVariable;
    constructor(path: IStringVariable) {
        this.path = path;
    }
    pathGet(): IStringVariable {
        return this.path;
    }
    typeGet(): string {
        return "LocalPath";
    }
}

export class SsmCommandStepDocument implements  ICommandStepDocument {
    readonly documentName: IStringVariable;
    constructor(documentName: IStringVariable) {
        this.documentName = documentName;
    }
    pathGet(): IStringVariable {
        return this.documentName;
    }
    typeGet(): string {
        return "SSMDocument";
    }
}