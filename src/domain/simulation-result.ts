import { ResponseCode } from './response-code';

/**
 * Response object returned from steps.
 * A successful response will contain the outputs expected.
 * A failed/canceled response will contain the stackTrace.
 * A failure will propagate up the stack unless the step is marked to succeed on failure.
 */
export interface SimulationResult {
  readonly responseCode: ResponseCode;
  /**
     * undefined if responseCode is SUCCESS.
     */
  readonly stackTrace?: string | undefined;
  /**
     * May be empty if responseCode is FAILED/CANCELLED.
     * There are no outputs provided for Command steps or documents.
     */
  readonly outputs?: { [name: string]: any };
  /**
     * All the steps that were executed in this Simulation
     */
  readonly executedSteps: string[];

}