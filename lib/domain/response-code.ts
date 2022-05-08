/**
 * Steps report their ResponseCode using this enum.
 * A successful response will contain the outputs expected.
 * A failed/canceled response will contain the stackTrace.
 */
export enum ResponseCode {
    SUCCESS,
    CANCELED,
    FAILED
}