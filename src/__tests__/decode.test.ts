import { decode } from '..';

import { tests, allBytes, base64AllBytes } from './data';

const textEncoder = new TextEncoder();

describe('decode', () => {
  it.each(tests)('%s -> %s', (base64: string, binary: string) => {
    const encodedBase64 = textEncoder.encode(base64);
    const encodedBinary = textEncoder.encode(binary);
    expect(Array.from(decode(encodedBase64))).toStrictEqual(
      Array.from(encodedBinary),
    );
  });

  it('All possibles values', () => {
    const encodeBase64 = textEncoder.encode(base64AllBytes);
    expect(Array.from(decode(encodeBase64))).toStrictEqual(
      Array.from(allBytes),
    );
  });
});
