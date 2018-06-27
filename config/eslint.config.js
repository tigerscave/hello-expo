module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'commonjs': true,
    'jquery': true
  },
  'extends': [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'plugins': [
    'react',
    'react-pug',
    'import'
  ],
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': [
      'error',
      'always', {
        'null': 'ignore'
      }
    ],
    'prefer-const': [
      'error', {
        'destructuring': 'all',
        'ignoreReadBeforeAssign': false
      }
    ],
    'max-len': [
      'error', {
        'code': 100,
        'ignoreUrls': true
      }
    ],
    'react/jsx-filename-extension': [
      1, { 'extensions': ['.js', '.jsx'] }
    ],
    'react/prefer-stateless-function': 'off',
  }
};
