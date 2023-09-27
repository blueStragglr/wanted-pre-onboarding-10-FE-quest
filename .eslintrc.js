module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "eslint:recommended",
    // "plugin:storybook/recommended",
  ],
  ignorePatterns: [".eslintrc.js"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    // "storybook",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"], //사용하지 않은 변수 에러 표시
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off", //함수에서 return 타입을 명시하지 않았을 때
    "@typescript-eslint/no-explicit-any": "off", //any타입 허용 X
    "@typescript-eslint/no-var-requires": 0, //var foo = require("foo")와 같은 형태 금지 / import foo = require("foo")
    "@typescript-eslint/no-empty-function": "off", //{}처럼 빈 인터페이스 사용 금지
  },
  settings: {
    "import/external-module-folders": [".yarn"],
  },
};
