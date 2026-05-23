import { expect, test } from 'vitest';

import { encodeFast } from '../encodeFast.ts';

import { allBytes, base64AllBytes, tests } from './data.ts';

const textEncoder = new TextEncoder();

test.each(tests)('%s -> %s', (base64, binary) => {
  const encodedBinary = textEncoder.encode(binary);
  const encodedBase64 = textEncoder.encode(base64);

  expect(Array.from(encodeFast(encodedBinary))).toStrictEqual(
    Array.from(encodedBase64),
  );
});

test('All possibles values', () => {
  const encodedBase64 = textEncoder.encode(base64AllBytes);

  expect(Array.from(encodeFast(allBytes))).toStrictEqual(
    Array.from(encodedBase64),
  );
});
