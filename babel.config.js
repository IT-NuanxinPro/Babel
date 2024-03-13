module.exports = {
  "presets": [
    [
      "@babel/preset-env", // 预设插件的集合, 用于将 ES6+ 代码转换为 ES5
      {
        "useBuiltIns": "usage", // 按需引入 polyfill(兼容性代码/垫片)
        "corejs": 3, // 指定 core-js 版本
        "targets": { // 指定兼容的浏览器版本
          "chrome": "58",
          "ie": "11",
          "firefox": "60",
          "safari": "10",
          "edge": "17"
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // 作用是将代码中的公共部分抽离出来, 减少打包体积
  ]
}