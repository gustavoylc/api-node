module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'eslint-disable no-empty-function': off,
    'eslint-disable no-useless-constructor': off,
    'eslint-disable class-methods-use-this': off,
  },
};
