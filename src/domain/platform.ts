/**
 * Command steps are not all applicable to all platforms.
 * Each command step declares which Platforms it supports.
 * That allows customers to validate their CommandDocument against a given platform prior to execution.
 */
export enum Platform {
  LINUX = 'Linux',
  WINDOWS = 'Windows',
  MAC_OS = 'MacOs'
}

export class Platforms {

  public static readonly STRING_TO_PLATFORM: { [name: string]: Platform } = {
    Linux: Platform.LINUX,
    Windows: Platform.WINDOWS,
    MacOs: Platform.MAC_OS,
  };

  /**
     * Converts a string to Platform
     * @param platformString a platform name to return its Platform type
     * @returns a Platform
     * @throws if platofrmString is not supported
     */
  public static toPlatform(platformString: string): Platform {
    const platform = this.STRING_TO_PLATFORM[platformString];
    if (platform != undefined) {
      return platform;
    } else {
      throw new Error(`Runtime ${platform} not supported.`);
    }
  }

  private constructor() {}

}
