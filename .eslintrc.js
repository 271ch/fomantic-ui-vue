// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
  ],
  globals: {
    publicPath: true,
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'import/prefer-default-export': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'vue/no-dupe-keys': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-template-key': 'error',
    'vue/require-render-return': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/html-end-tags': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/order-in-components': 'error',
    'vue/require-prop-types': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-quotes': 'error',
    'vue/html-self-closing': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/name-property-casing': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
  }
}