module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-newline': 0,
    'vue/multiline-html-element-content-newline': 0
  }
}
