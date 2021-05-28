module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript/base"
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "no-nonoctal-decimal-escape": "off",
  }
};
