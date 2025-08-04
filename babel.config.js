module.exports = {
  "presets": [
    [
      "@babel/preset-env", // 预设插件的集合, 用于将 ES6+ 代码转换为 ES5
      {
        "debug": false, // 生产环境关闭调试模式，开发时可设为 true
        "useBuiltIns": "usage", // 按需引入 polyfill(兼容性代码/垫片)
        "corejs": {
          "version": 3, // 使用 core-js 版本 3
          "proposals": true // 包含提案阶段的特性
        },
        "targets": { // 指定兼容的浏览器版本
          "chrome": "58",
          "ie": "11",
          "firefox": "60",
          "safari": "10",
          "edge": "17"
        },
        // 或者使用 browserslist 查询
        // "targets": "> 0.25%, not dead, ie >= 11"
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime", // 作用是将代码中的公共部分抽离出来, 减少打包体积
      {
        "corejs": false, // 不使用 runtime 的 corejs，因为我们已经在 preset-env 中配置了
        "helpers": true, // 提取 helper 函数
        "regenerator": true, // 提取 regenerator
        "useESModules": false // 使用 CommonJS 模块
      }
    ]
  ]
}
