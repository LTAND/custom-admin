m odule.exports = {
  // 可选类型
  types: [
    { value: ':sparkles: feat', name: '✨ feat:     新功能' },
    { value: ':bug: fix', name: '🐛 fix:      修复' },
    { value: ':memo: doc', name: '📝 doc:      文档变更' },
    { value: ':art: style', name: '🎨 style:    代码格式(不影响代码运行的变动)' },
    { value: ':recycle: refactor', name: '♻️ refactor: 重构(既不是增加feature),也不是修复bug' },
    { value: ':zap: perf', name: '⚡️perf:     性能优化' },
    { value: ':white_check_mark: test', name: '✅ test:     添加测试' },
    { value: ':rocket: chore', name: '🚀 chore:    开发工具变动(构建、脚手架工具等)' },
    { value: ':package: build', name: '📦️ build:   打包' },
    { value: ':rewind: revert', name: '⏪️ revert:  回退版本' },
    { value: ':tada: version', name: '🎉 version:  发布版本' },
    { value: ':twisted_rightwards_arrows: merge', name: '🔀 merge:    合并分支' }
  ],
  // scopes: [{ name: '业务' }, { name: '发版' }, { name: '图片调整' }, { name: '基础配置' }],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // 消息步骤
  messages: {
    type: '选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    breaking: '非兼容性说明 (可选):',
    footer: '请输入要关闭的issue,例如:#31, #34(可选):',
    confirmCommit: '确定提交以上信息?(y/n)'
  },
  // subject文字默认长度是72
  subjectLimit: 72,
  // 跳过空scope
  skipEmptyScopes: true,
  // 跳过问题
  skipQuestions: ['body', 'footer'],

  // 设置为 true，在 scope 选择的时候，会有 empty 和 custom 可以选择
  // 顾名思义，选择 empty 表示 scope 缺省，如果选择 custom，则可以自己输入信息
  allowCustomScopes: true,
  // 只有我们 type 选择了 feat 或者是 fix，才会询问我们 breaking message.
  allowBreakingChanges: [':sparkles: feat', ':bug: fix']
}
