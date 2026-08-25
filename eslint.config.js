import { defineConfig, globalIgnores } from 'eslint/config';
import cheminfo from 'eslint-config-cheminfo-typescript';

export default defineConfig([
  globalIgnores(['coverage', 'dist', 'lib']),
  cheminfo,
  {
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  {
    files: ['benchmark/**'],
    rules: {
      'no-console': 'off',
    },
  },
]);
