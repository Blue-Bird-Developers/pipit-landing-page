module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true,
        endOfLine: 'auto',
      },
    ],
    'react/prefer-stateless-function': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'no-use-before-define': 'off',
    'no-nested-ternary': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
    'max-len': ['error', { code: 200 }],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-this-before-super': ['off'],
    'no-useless-constructor': ['off'],
    'no-empty-function': ['error', { allow: ['constructors', 'arrowFunctions'] }],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': ['off'],
    'no-new': ['off'],
    'prefer-template': ['error'],
    // typescript rules
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
        overrides: {
          accessors: 'no-public',
          methods: 'no-public',
          properties: 'no-public',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/no-object-literal-type-assertion': ['off'],
    '@typescript-eslint/no-parameter-properties': ['error', { allows: ['protected', 'public'] }],
    '@typescript-eslint/no-empty-function': ['off'], // use eslint no-empty-function rule
    '@typescript-eslint/no-use-before-define': ['off'], // use eslint no-use-before-define rule
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
};
