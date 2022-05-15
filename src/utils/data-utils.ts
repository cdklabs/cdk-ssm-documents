/**
 * Decodes the given string from base64 into UTF-8.
 * @param encodedString base64 encoded string
 * @returns UTF-8 representation of the string.
 */
export function decodeBase64String(encodedString: string): string | null {
    if (encodedString === null || encodedString === undefined) { return null; }
    return Buffer.from(encodedString, "base64").toString("utf-8");
}

/**
 * Remove beginning and end quotes from the given sting.
 * @param input string to strip
 * @returns input without the start or end quote if they existed.
 */
export function stripBeginAndEndQuotes(input: string): string | null {
    if (input === null || input === undefined) { return null; }
    return input.replace(/^\"|\"$/g, "");
}