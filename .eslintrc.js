module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
  "no-use-before-define": ["error", { "variables": false }],
  "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
  "linebreak-style": ["error", "windows"]
  },
};
