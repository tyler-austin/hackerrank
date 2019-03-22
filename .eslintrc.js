module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  rules: {
    'no-plusplus': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^__' }],
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off'
  }
};
