/**
 * Command steps are not all applicable to all platforms.
 * Each command step declares which Platforms it supports.
 * That allows customers to validate their CommandDocument against a given platform prior to execution.
 */
export enum Platform {
    LINUX,
    WINDOWS,
    MAC_OS
}
