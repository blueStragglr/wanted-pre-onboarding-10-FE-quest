module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: [
    'react-refresh',
    'react',
    'import',
    'node',
    'promise',
    'react-hooks',
    'prettier',
    'eslint-plugin-simple-import-sort',
    'unused-imports',
  ],
  rules: {
    'no-var': 'error',
    'no-empty-static-block': 'error',
    'unused-imports/no-unused-imports': 'error',
    'require-await': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
