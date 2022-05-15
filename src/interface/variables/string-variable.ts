import { GenericVariable, HardCodedValueBase, IGenericVariable } from "./variable";

/**
 * String type that can be null
 */
export type NullableString = string;

/**
 * A string variable
 */
export interface IStringVariable extends IGenericVariable {
    /**
     * Given the execution inputs, return the resolved value of this variable.
     * @param inputs are the execution inputs.
     */
    resolveToString(inputs: Record<string, any>): NullableString;
}

/**
 * A hard-coded string variable.
 * Used when not dependent on step inputs.
 */
export class HardCodedString extends HardCodedValueBase<string> implements IStringVariable {
    resolveToString(inputs: Record<string, any>): NullableString {
        return this.resolve(inputs);
    }

    protected assertType(value: any): void {
        assertString(value);
    }
}

/**
 * A string variable reference.
 * Used to resolve the value from step inputs.
 */
export class StringVariable extends GenericVariable implements IStringVariable {
    resolveToString(inputs: Record<string, any>): NullableString {
        return this.resolve(inputs);
    }

    protected assertType(value: any): void {
        assertString(value);
    }
}

/**
 * Replacement for strings using Java String format style "%s" replacements.
 * Example: new StringFormat("This %s a replacement: %s", [new HardCodedValue("is"), new ExportedVariable("myInput")]);
 * The supported variable strings are either:
 * 1. Implicit indices: "%s" where the first occurrence will match the first variable, the next will match the second...
 * 2. Explicit indices: Example: "%1$s"; where "%1$s" matches the first variable and "%1$s" matches the second.
 * Do not combine usage of implicit and explicit indices. Choose one per StringFormat instance.
 */
 export class StringFormat implements IStringVariable {
    readonly format: string;
    readonly variables: IGenericVariable[];

    constructor(format: string, variables?: IGenericVariable[]) {
        this.format = format;
        this.variables = variables ?? [];
        const count = (format.match(/%s/g) || []).length;
        if (count != this.variables.length && format.includes('%s')) {
            throw new Error(`Variable size must equal number of params expected using \"%s\".` +
                `${count} found, required ${this.variables.length}`)
        }
    }

    resolve(inputs: { [name: string]: any }): any {
        let replaced = this.format;
        if (this.format.includes('%s')) {
            this.variables.forEach(variable => {
                replaced = replaced.replace("%s", variable.resolve(inputs));
            });
        } else {
            for (let i = 0; i < this.variables.length; i++) {
                const find = `%${i + 1}$s`;
                const re = new RegExp(find, 'g');
                replaced = replaced.replace(re, this.variables[i].resolve(inputs));
            }
        }
        return replaced;
    }

    print(): string | any {
        let replaced = this.format;
        if (this.format.includes('%s')) {
            this.variables.forEach(variable => {
                replaced = replaced.replace("%s", variable.print());
            });
        } else {
            for (let i = 0; i < this.variables.length; i++) {
                const find = `%${i + 1}$s`;
                const re = new RegExp(find, 'g');
                replaced = replaced.replace(re, this.variables[i].print());
            }
        }
        return replaced;
    }

    requiredInputs(): string[] {
        return this.variables.flatMap(v => v.requiredInputs());
    }

    toJSON(): any {
        return this.print();
    }

    resolveToString(inputs: Record<string, any>): NullableString {
        const result = this.resolve(inputs);
        assertString(result);
        return result;
    }
}

export class DictFormat implements IStringVariable {

    readonly format: { [name: string]: any; };

    constructor(format: { [name: string]: any; }) {
        this.format = format;
    }

    resolveToDict(inputs: { [name: string]: any }): { [name: string]: any } {
        return JSON.parse(this.resolve(inputs));
    }

    toJSON(): any {
        return this.print();
    }

    print(): string | any {
        return JSON.stringify(this.format);
    }

    requiredInputs(): string[] {
        return JSON.stringify(this.format).match(/{{.*?}}/g)?.map(match =>
            match.slice(2, match.length - 2).trim()) || []
    }

    resolve(inputs: { [p: string]: any }): any {
        const inputWithVariables = JSON.stringify(this.format);
        let inputCopy = inputWithVariables;
        inputWithVariables.match(/{{.*?}}/g)?.forEach(match => {
            const variable = match.slice(2, match.length - 2).trim();
            const replacement = inputs[variable];
            if (replacement == undefined) {
                throw new Error(`Input required but not found: ${variable}`);
            }
            if (typeof replacement === "string") {
                inputCopy = inputCopy.replace(match, replacement);
            } else if (typeof replacement === "number") {
                inputCopy = inputCopy.replace('\'' + match + '\'', replacement.toString());
                inputCopy = inputCopy.replace('"' + match + '"', replacement.toString());
            } else if (Array.isArray(replacement)) {
                inputCopy = inputCopy.replace(match, JSON.stringify(replacement));
                inputCopy = inputCopy.replace(match, JSON.stringify(replacement));
            } else {
                throw new Error(`Unsupported data type ${typeof replacement} for ${JSON.stringify(replacement)}`);
            }
        });
        return inputCopy;
    }

    resolveToString(inputs: Record<string, any>): NullableString {
        const result = this.resolve(inputs);
        assertString(result);
        return result;
    }
}

/**
 * Assert that the given value is a NullableString.
 * @param value value to assert
 */
export function assertString(value: any): asserts value is NullableString {
    if (!isString(value)) { throw new Error(`${value} is not a string`); }
}

/**
 * Whether the given value is a NullableString.
 * @param value value to check
 * @returns true if the value is a NullableString, otherwise false
 */
export function isString(value: any): value is NullableString {
    if (value === null) { return true; }
    return typeof value === "string" || value instanceof String;
}