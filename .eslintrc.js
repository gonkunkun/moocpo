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
    'standard',
    'plugin:nuxt/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier',
    'plugin:vue/recommended'
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {}
}
