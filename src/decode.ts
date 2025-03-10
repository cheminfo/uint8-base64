const base64codes = Uint8Array.from([
  255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
  255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
  255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255,
  255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255,
  255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
]);

/**
 * Convert a Uint8Array containing a base64 encoded bytes to a Uint8Array containing decoded values
 * @param input
 * @returns a Uint8Array containing the decoded bytes
 */

export function decode(
  input: Uint8Array, //| ArrayBuffer,
): Uint8Array {
  if (!ArrayBuffer.isView(input)) {
    input = new Uint8Array(input);
  }

  if (input.length % 4 !== 0) {
    throw new Error('Unable to parse base64 string.');
  }

  const output = new Uint8Array(3 * (input.length / 4));
  if (input.length === 0) return output;

  const missingOctets = input.at(-2) === 61 ? 2 : input.at(-1) === 61 ? 1 : 0;

  for (let i = 0, j = 0; i < input.length; i += 4, j += 3) {
    const buffer =
      (base64codes[input[i]] << 18) |
      (base64codes[input[i + 1]] << 12) |
      (base64codes[input[i + 2]] << 6) |
      base64codes[input[i + 3]];
    output[j] = buffer >> 16;
    output[j + 1] = (buffer >> 8) & 0xff;
    output[j + 2] = buffer & 0xff;
  }
  return output.subarray(0, output.length - missingOctets);
}
