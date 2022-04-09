module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    impliedStrict: true,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    curly: ['error', 'multi'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        comments: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: 'eslint-disable+',
      },
    ],
    'no-undef': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': ['error', { default: { order: 'alphabetically' } }],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
    'prettier/prettier': ['warn']
  },
  settings: {
    'import/resolver': {
      "node": {
        "paths": ["src"]
      },
      typescript: {},
    },
  },
};