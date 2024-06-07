module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    camelcase: "off",
    "no-useless-constructor": "off",
    "no-console": "off",
    "no-prototype-builtins": "off",
    eqeqeq: "off",
    "no-fallthrough": "off",
    "unicorn/error-message": "off",
  },
  ignorePatterns: ["dist/*", ".output/*"],
};
