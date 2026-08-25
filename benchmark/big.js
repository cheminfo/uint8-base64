import { Buffer } from 'node:buffer';

import Benchmark from 'benchmark';

import { decode, encode } from '../src/index.ts';

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder('utf-8');

let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNIOQRSTUVWXYZ';
for (let i = 0; i < 20; i++) {
  string += string;
}

const uint8 = textEncoder.encode(string);
const buffer = Buffer.from(string, 'utf8');
const base64String = buffer.toString('base64');
const base64Uint8 = encode(uint8);

console.log(
  'bytes:',
  uint8.length,
  '| encode matches Buffer:',
  textDecoder.decode(base64Uint8) === base64String,
  '| decode round-trips:',
  textDecoder.decode(decode(base64Uint8)) === string,
);

const options = { minSamples: 30, maxTime: 30 };

new Benchmark.Suite('encode')
  .add('btoa', () => btoa(string), options)
  .add('Buffer#toString', () => buffer.toString('base64'), options)
  .add('encode', () => encode(uint8), options)
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .run();

new Benchmark.Suite('decode')
  .add('atob', () => atob(base64String), options)
  .add('Buffer.from', () => Buffer.from(base64String, 'base64'), options)
  .add('decode', () => decode(base64Uint8), options)
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .run();
