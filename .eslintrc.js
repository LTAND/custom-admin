// ESLint配置文件遵循common〕s的导出规则，所导出的对象就是ESLint的配置对象
// 文档:https://eslint.bootcss.com/docs/user-guide/configuring
module.exports = {
  // 表示当前目录即为根目录，ESLint规则将被限制到该目录下
  root: true,
  // env表示启用ESLint检测的环境
  env: {
    // 在node环境下启动ESLint检测
    node: true
  },
  // ESLint中基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  /** 错误级别分为三种:
   * "off"或-关闭规则
   * "warn"或1-开启规则，使用警告级别的错误:warn（不会导致程序退出）
   * "error"或2-开启规则，使用错误级别的错误:error〈当被触发的时候，程序会退出）
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off',
    'space-before-function-paren': 'off'
  }
}
