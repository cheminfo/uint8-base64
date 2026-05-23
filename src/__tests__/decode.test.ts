import { expect, test } from 'vitest';

import { decode } from '../index.ts';

import { allBytes, base64AllBytes, tests } from './data.ts';

const textEncoder = new TextEncoder();

test.each(tests)('%s -> %s', (base64, binary) => {
  const encodedBase64 = textEncoder.encode(base64);
  const encodedBinary = textEncoder.encode(binary);

  expect(Array.from(decode(encodedBase64))).toStrictEqual(
    Array.from(encodedBinary),
  );
});

test('All possibles values', () => {
  const encodeBase64 = textEncoder.encode(base64AllBytes);

  expect(Array.from(decode(encodeBase64))).toStrictEqual(Array.from(allBytes));
});
