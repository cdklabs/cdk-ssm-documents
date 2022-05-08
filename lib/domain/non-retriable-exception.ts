/**
 * Used to mark a step as non-retriable.
 * (If this is thrown, no retries will be attempted)
 */
export class NonRetriableException extends Error {
    
}