import { decodeBufferToBuffer } from '..';

import { tests, allBytes, base64AllBytes } from './data';

const encoder = new TextEncoder();

describe('decodeBufferToBuffer', () => {
  it.each(tests)('%i -> %i', (base64: string, binary: string) => {
    const encodedBase64 = encoder.encode(base64);
    const encodedBinary = encoder.encode(binary);
    expect(Array.from(decodeBufferToBuffer(encodedBase64))).toStrictEqual(
      Array.from(encodedBinary),
    );
  });

  it('All possibles values', () => {
    const encodeBase64 = encoder.encode(base64AllBytes);
    expect(Array.from(decodeBufferToBuffer(encodeBase64))).toStrictEqual(
      Array.from(allBytes),
    );
  });
});
