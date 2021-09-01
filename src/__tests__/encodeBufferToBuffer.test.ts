import { encodeBufferToBuffer } from '..';

import { tests, allBytes, base64AllBytes } from './data';

const encoder = new TextEncoder();

describe('encodeBufferToBuffer', () => {
  it.each(tests)('%i -> %i', (base64: string, binary: string) => {
    const encodedBinary = encoder.encode(binary);
    const encodedBase64 = encoder.encode(base64);
    expect(Array.from(encodeBufferToBuffer(encodedBinary))).toStrictEqual(
      Array.from(encodedBase64),
    );
  });

  it('All possibles values', () => {
    const encodedBase64 = encoder.encode(base64AllBytes);
    expect(Array.from(encodeBufferToBuffer(allBytes))).toStrictEqual(
      Array.from(encodedBase64),
    );
  });
});
