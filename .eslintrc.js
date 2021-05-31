module.exports = {
  "parser": "vue-eslint-parser",
  extends: [
    "airbnb-typescript/base",
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: './tsconfig.json',
    extraFileExtensions: [".vue"]
  },
  rules: {
    // "no-nonoctal-decimal-escape": "off",
    "no-param-reassign": ["error", { "props": false }]
  }
};
