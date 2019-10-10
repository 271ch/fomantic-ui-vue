// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 6,
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  globals: {
    publicPath: true,
  },
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // https://eslint.org/docs/rules/

    // Best Practices -> to do

    // Stylistic Issues
    // 'array-bracket-newline' : 'error', // enforce linebreaks after opening and before closing array brackets
    // 'array-bracket-spacing' : 'error', // enforce consistent spacing inside array brackets
    // 'array-element-newline' : 'error', // enforce line breaks after each array element
    'block-spacing' : 'error', // disallow or enforce spaces inside of blocks after opening block and before closing block
    'brace-style' : 'error', // enforce consistent brace style for blocks
    'camelcase' : 'error', // enforce camelcase naming convention
    //'capitalized-comments' : 'warn', // enforce or disallow capitalization of the first letter of a comment
    'comma-dangle': ['warn', {
        'arrays': 'only-multiline',
        'objects': 'always',
        'imports': 'always',
        'exports': 'always',
        'functions': 'never'
    }], // require or disallow trailing commas
    'comma-spacing' : 'error', // enforce consistent spacing before and after commas
    'comma-style' : 'error', // enforce consistent comma style
    'func-call-spacing': ['error', 'never'], // require or disallow spacing between function identifiers and their invocations
    'func-name-matching': ['error', 'always'], // require function names to match the name of the variable or property to which they are assigned
    'indent': ['error', 2], // enforce consistent indentation
    'key-spacing' : 'error', // enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing' : 'error', // enforce consistent spacing before and after keywords
    'no-multiple-empty-lines' : 'error', // disallow multiple empty lines
    'no-tabs' : 'error', // disallow all tabs
    'no-trailing-spaces' : 'error', // disallow trailing whitespace at the end of lines
    'object-curly-newline' : 'error', // enforce consistent line breaks inside braces
    'object-curly-spacing' : 'error', // enforce consistent spacing inside braces
    'object-property-newline' : 'error', // enforce placing object properties on separate lines
    'semi': 'error', // require or disallow semicolons instead of ASI
    'space-before-blocks': 'error', // enforce consistent spacing before blocks
    'space-before-function-paren': 'error', // enforce consistent spacing before function definition opening parenthesis
    'space-in-parens': 'error', // enforce consistent spacing inside parentheses
    'space-infix-ops': 'error', // require spacing around infix operators
    'space-unary-ops': 'error', // enforce consistent spacing before or after unary operators
    'spaced-comment': 'error', // enforce consistent spacing after the // or /* in a comment

    // 'import/prefer-default-export': 'off',
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

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
