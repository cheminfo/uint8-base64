export const tests = [
  ['', ''],
  ['TWFu', 'Man'],
  ['QQ==', 'A'],
  ['SGVsbG8gd29ybGQ=', 'Hello world'],
  ['SGVsbG8gd29ybGRzIQ==', 'Hello worlds!'],
];

export const allBytes = new Uint8Array(256);
for (let i = 0; i < 256; i++) {
  allBytes[i] = i;
}

export const base64AllBytes =
  'AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==';
