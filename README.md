# base64-tools

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

You can find a lot of NPM libraries dealing with base64 encoding and decoding.

However we could not find one that would have as input AND output an ArrayBuffer. This library does exactly this.

## Installation

`$ npm i base64-tools`

## Usage

```js
import { encodeBufferToBuffer } from 'base64-tools';

const result = myModule(args);
// result is ...
```

## License

The code was largely inspired by: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/base64-tools.svg
[npm-url]: https://www.npmjs.com/package/base64-tools
[ci-image]: https://github.com/cheminfo/base64-tools/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/base64-tools/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/base64-tools.svg
[codecov-url]: https://codecov.io/gh/cheminfo/base64-tools
[download-image]: https://img.shields.io/npm/dm/base64-tools.svg
[download-url]: https://www.npmjs.com/package/base64-tools
