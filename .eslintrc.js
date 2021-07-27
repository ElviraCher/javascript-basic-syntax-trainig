module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-alert": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "max-len": ["error", { ignoreComments: true }],
  },
  plugins: ["jest"],
};
