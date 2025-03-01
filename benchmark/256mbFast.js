import { encodeFast } from '../lib/index.js';

const bytes = new Uint8Array(256 * 1024 * 1024).map((_, i) =>
  Math.floor(Math.random() * 256),
);

for (let i = 0; i < 10; i++) {
  console.time('base64');
  const base64 = encodeFast(bytes);
  console.timeEnd('base64');
  console.time('string');
  const string = new TextDecoder('utf8').decode(base64);
  console.timeEnd('string');
  console.log(string.slice(0, 100));
}
