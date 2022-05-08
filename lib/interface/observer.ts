
export interface IObserver {
    accept(value: { [name: string]: any; }): void;
}

export class NoopObserver implements IObserver {
    accept(_value: { [name: string]: any; }): void {
        // noop
    }
}