import Benchmark from 'benchmark';

import { encodeClassical, encodeFast } from '../src/index.ts';

const bytes = new Uint8Array(256 * 1024 * 1024);
for (let i = 0; i < bytes.length; i++) {
  bytes[i] = i % 256;
}

console.log(
  'bytes:',
  bytes.length,
  '| same output:',
  encodeClassical(bytes.subarray(0, 3000)).join(',') ===
    encodeFast(bytes.subarray(0, 3000)).join(','),
);

const options = { minSamples: 30, maxTime: 30 };

new Benchmark.Suite('256 MB')
  .add('encodeClassical', () => encodeClassical(bytes), options)
  .add('encodeFast', () => encodeFast(bytes), options)
  .on('cycle', (event) => {
    const perElement = (1e9 / event.target.hz / bytes.length).toFixed(3);
    console.log(`${String(event.target)} — ${perElement} ns/byte`);
  })
  .run();
