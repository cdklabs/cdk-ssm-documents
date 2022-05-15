import { SimulationResult } from './simulation-result';

export interface DocumentResult extends SimulationResult {
  readonly documentOutputs: string[];
}
