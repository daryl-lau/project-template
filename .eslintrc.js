module.exports = {
  env: {
    browser: true,
    es2021: true,
    // "jest": true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  // 添加全局变量
  globals: {
    test: true, // jest test
    expect: true, // jest expect
    _: true, // lodash
  },
  rules: {
    // 关闭导入定义检查，由于 react-script 和 eslint 规则不一致，导致检测出错
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // 添加 jsx 支持
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    // airbnb 默认只支持 js jsx mjx 文件导入，重写添加ts支持
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // 关闭 react prop types 校验，使用 ts 接口校验
    'react/prop-types': ['off'],
  },
};
