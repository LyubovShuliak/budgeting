module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'unused-imports',
    'simple-import-sort',
    'react',
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
  ],
  rules: {
    'no-console': 'off',
    'no-empty': 'error',
    'no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { destructuredArrayIgnorePattern: '^_' },
    ],
    'simple-import-sort/imports': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': 'error',
  },
};
