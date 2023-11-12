/**
 * @description 该插件主要为了方便配置Eslint，有属性提示
 * @description 弃用的属性警告
 */

//@ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  // 禁止继续查找父级目录
  root: true,
  // 支持环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  // Eslint默认处理es5,使用该配置修改相关配置
  parserOptions: {
    // 指定ES版本
    ecmaVersion: 2020,
    // 设置源类型，为module （代码是模块化）
    sourceType: 'module',
    jsxPragma: 'React',
    // 使用额为的语言特性
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 继承别的规则
  extends: ['plugin:vue/vue3-recommended', 'prettier', 'plugin:prettier/recommended'],
  // 规则
  rules: {
    'vue/script-setup-uses-vars': 'error',
    // 开不允许未使用的变量(并且阻止代码运行)
    'no-unused-vars': [
      'error',
      {
        // 指定字符不需要检测
        argsIgnorePattern: '^_',
        // 指定正则匹配字不检测
        varsIgnorePattern: '^_',
      },
    ],
    // // 关闭强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': 'off',
    // // 关闭强制执行属性顺序
    // 'vue/attributes-order': 'off',
    // // 关闭强制只有一个组件
    // 'vue/one-component-per-file': 'off',
    // // 关闭标签的右括号之前强制换行
    // 'vue/html-closing-bracket-newline': 'off',
    // // 关闭每行属性的限制
    // 'vue/max-attributes-per-line': 'off',
    // // 关闭此规则在多行元素的内容之前和之后强制换行,就是要让标签换行
    // 'vue/multiline-html-element-content-newline': 'off',
    // // 关闭此规则在单行元素的内容之前和之后强制换行,就是要让标签换行
    // 'vue/singleline-html-element-content-newline': 'off',
    // // 关闭强制使用-链接属性
    // 'vue/attribute-hyphenation': 'off',
    // // 每个未标记为required（Boolean道具除外）的道具设置默认值
    // 'vue/require-default-prop': 'off',
    // // 闭合标签
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
});
