'use strict';

const { Buffer } = require('buffer');

const { decode, encode } = require('../lib/');

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNIOQRSTUVWXYZ';
for (let i = 0; i < 20; i++) {
  string += string;
}

const uint8 = textEncoder.encode(string);
const buffer = Buffer.from(string, 'utf8');

console.time('btoa');
const btoaString = btoa(string);
console.timeEnd('btoa');

console.time('atob');
const atobString = atob(btoaString);
console.timeEnd('atob');

console.time('buffer.toString');
const bufferToString = buffer.toString('base64');
console.timeEnd('buffer.toString');

console.time('Buffer.from');
const bufferFrom = Buffer.from(bufferToString, 'base64');
console.timeEnd('Buffer.from');

console.time('encode');
const bufferBase64 = encode(uint8);
console.timeEnd('encode');

console.time('decode');
const newBuffer = decode(bufferBase64);
console.timeEnd('decode');

const newString = textDecoder.decode(newBuffer);

console.log(
  string.length,
  uint8.length,
  atobString.length,
  bufferFrom.length,
  bufferBase64.length,
  bufferToString.length,
  btoaString.length,
  btoaString === textDecoder.decode(bufferBase64),
  newString === string,
  newString === atobString,
  newString === textDecoder.decode(bufferFrom),
);
