# react 初始化项目模板

通过`create-react-app`构建初始项目，集成 `typescript`, `eslint`, `prettier`

## 构建流程

### 1、使用 create-react-app 快速创建一个项目

```js
npx create-react-app myapp --typescript
```

### 2、初始化 eslint 配置

```js
# 安装eslint
yarn add eslint

# 初始化配置文件，使用Airbnb的规范
./node_modules/.bin/eslint --init
```

### 3、初始化 prettier 配置

```js
# 安装prettier及其扩展
yarn add prettier  eslint-plugin-prettier eslint-config-prettier
```

### 4、修改配置

- 修改`.eslintrc.js`文件

```js
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
```

- 修改`.prettierrc.json`文件，如果没有则新建

```js
{
  "useTabs": false,
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

- 创建`.vscode/settings.json`文件，配置保存自动格式化代码，会帮我们修改不符合规则的代码

```js
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "editor.renderWhitespace": "boundary",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

- 创建`.eslintignore`和`.prettierignore`文件，忽略无需校验的文件或目录

`.eslintignore`

```js
# 忽略eslint检查的文件或目录

build
node_modules
src/serviceWorker.ts
```

`.prettierignore`

```js
# 忽略的文件或目录

build
node_modules
coverage
```

### 最后贴出`package.json`文件

```js
{
  "name": "react-ts-eslint-prettier-template",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "@types/jest": "^24.0.0",
    "@types/node": "^12.0.0",
    "@types/react-dom": "^16.9.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.3",
    "typescript": "~3.7.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "lint": "eslint --ext .tsx --ext .ts --ext .js --ext .jsx src",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react": "^16.9.50",
    "@typescript-eslint/eslint-plugin": "^4.3.0",
    "@typescript-eslint/parser": "^4.3.0",
    "eslint": "^7.10.0",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-config-prettier": "^6.12.0",
    "eslint-config-react": "^1.1.7",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.21.3",
    "eslint-plugin-react-hooks": "^4.1.2",
    "prettier": "^2.1.2"
  }
}
```
