import { IGenericVariable } from '../interface/variables/variable';

/**
 * Removes keys from the given record that are undefined and transforms the defined values with the given function.
 * @param record String map to prune and transform
 * @param transform Method for transforming defined values
 * @returns A pruned and transformed version of the given record
 */
export function pruneAndTransformRecord<T>(record: Record<string, IGenericVariable | undefined>, transform:
(input: IGenericVariable) => T): Record<string, T> {
  const result: Record<string, T> = {};
  for (const key of Object.keys(record)) {
    const value = record[key];
    if (value === undefined) { continue; }
    result[key] = transform(value);
  }
  return result;
};