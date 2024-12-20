/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: '.',
  },
  ignorePatterns: ['postcss.config.cjs', 'dist', '.eslintrc.cjs', '**/*.cjs'],
  plugins: ['react-refresh', 'react', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-misused-promises': 'off',
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'no-restricted-imports': ['error', { patterns: ['../*', '../**/*'] }],
    'import/newline-after-import': 'warn',
    'import/no-default-export': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'src/',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
