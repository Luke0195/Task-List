module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,

    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/state-in-constructor': 'off',
    'import/no-duplicates': 'off',
    'no-console': 'off',
    'prefer-const': 'off'

  },
};
