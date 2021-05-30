module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    experimentaObjectRestSpread: true
  },
  plugins: ['react', '@typescript-eslint'],
  // 参考：https://cn.eslint.org/docs/rules/
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true, // 允许字符串使用单引号或双引号，只要字符串中包含了一个其他引号，否则需要转义
        allowTemplateLiterals: true // 允许字符串使用反勾号
      }
    ],
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'default-case': 'error', // 要求switch语句中有default分支
    eqeqeq: ['error', 'always'], // 使用 === / !==
    'no-caller': 'error', // 禁止使用arguments.caller / arguments.callee
    'no-else-return': 'error', // 禁止if语句中return语句之后还有else块
    'no-eval': 'error', // 禁止eval
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1, 4]
      }
    ], // 不允许使用意义不明的数字（magic numbers）,
    'no-sequences': 'error', // 不允许使用逗号操作符
    'eol-last': ['error', 'always'], // 要求文件末尾有空行
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'arrow-parens': ['error', 'always'], // 箭头函数的参数使用圆括号
    'constructor-super': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        ignoreReadBeforeAssign: false
      }
    ], // 尽量使用const
    'sort-imports': [
      'error',
      {
        ignoreCase: true, // 放宽，忽略大小写
        ignoreDeclarationSort: true, // 放宽，忽略声明顺序
        ignoreMemberSort: true // 放宽，忽略成员顺序
      }
    ],
    'prettier/prettier': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/prop-types': [0], // 关闭 propTypes 检测
    'react/display-name': [0]
  }
};
