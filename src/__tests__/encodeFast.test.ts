import { describe, expect, it } from 'vitest';

import { encodeFast } from '../encodeFast';

import { tests, allBytes, base64AllBytes } from './data';

const textEncoder = new TextEncoder();

describe('encodeFast', () => {
  it.each(tests)('%s -> %s', (base64: string, binary: string) => {
    const encodedBinary = textEncoder.encode(binary);
    const encodedBase64 = textEncoder.encode(base64);
    expect(Array.from(encodeFast(encodedBinary))).toStrictEqual(
      Array.from(encodedBase64),
    );
  });

  it('All possibles values', () => {
    const encodedBase64 = textEncoder.encode(base64AllBytes);
    expect(Array.from(encodeFast(allBytes))).toStrictEqual(
      Array.from(encodedBase64),
    );
  });
});
