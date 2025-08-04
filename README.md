# 🚀 Babel Learning Project

<div align="center">

![Babel Logo](https://babeljs.io/img/babel.png)

**A comprehensive Babel learning project demonstrating ES6+ to ES5 transpilation with modern JavaScript features**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)
[![Babel](https://img.shields.io/badge/babel-7.28.0-f9dc3e.svg)](https://babeljs.io/)
[![Core-js](https://img.shields.io/badge/core--js-3.44.0-e74c3c.svg)](https://github.com/zloirock/core-js)

</div>

## 📖 项目简介

这是一个专门用于学习 Babel 的实践项目，展示了如何使用 Babel 将现代 JavaScript (ES6+) 代码转换为向后兼容的 ES5 代码。项目包含了完整的配置示例、实用的代码演示和详细的文档说明。

### ✨ 特性

- 🔧 **完整的 Babel 配置** - 包含 preset-env 和 transform-runtime 插件
- 📦 **智能 Polyfill** - 按需引入 polyfill，减少打包体积
- 🎯 **多浏览器支持** - 兼容 IE11+、Chrome 58+、Firefox 60+ 等
- 🔄 **实时编译** - 支持 watch 模式，文件变化自动重新编译
- 📚 **学习友好** - 详细的注释和文档说明
- 🧪 **示例代码** - 包含各种 ES6+ 特性的使用示例

## 🛠️ 技术栈

- **Babel Core**: 7.28.0 - JavaScript 编译器核心
- **Babel Preset Env**: 7.28.0 - 智能预设，根据目标环境自动确定需要的转换
- **Babel Plugin Transform Runtime**: 7.28.0 - 优化运行时代码，减少重复
- **Core-js**: 3.44.0 - 现代 JavaScript 标准库的 polyfill
- **Node.js**: >=14.0.0 - 运行环境

## 📦 快速开始

### 前置要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装

```bash
# 克隆项目
git clone https://github.com/IT-NuanxinPro/Babel.git
cd Babel

# 安装依赖
npm install
```

### 使用方法

```bash
# 构建项目（一次性编译）
npm run build

# 开发模式（监听文件变化）
npm run dev

# 编译单个文件
npm run build:single

# 运行编译后的代码
npm run test

# 完整流程：清理 -> 构建 -> 运行
npm start
```

## 📁 项目结构

```
babel-learning-project/
├── 📁 src/                    # 源代码目录
│   └── 📄 index.js           # 主要的 ES6+ 代码示例
├── 📁 lib/                    # 编译输出目录
│   └── 📄 compiled.js        # 编译后的 ES5 代码
├── 📁 Doc/                    # 文档目录
│   ├── 📄 了解 babel.pdf     # Babel 基础知识
│   └── 📄 单独自己定义化配置babel.pdf  # 自定义配置指南
├── 📄 babel.config.js        # Babel 配置文件
├── 📄 package.json           # 项目配置和依赖
└── 📄 README.md              # 项目文档
```

## ⚙️ 配置详解

### Babel 配置 (babel.config.js)

```javascript
module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "debug": false,                    // 生产环境关闭调试
        "useBuiltIns": "usage",           // 按需引入 polyfill
        "corejs": {
          "version": 3,                   // 使用 core-js v3
          "proposals": true               // 包含提案阶段特性
        },
        "targets": {                      // 目标浏览器
          "chrome": "58",
          "ie": "11",
          "firefox": "60",
          "safari": "10",
          "edge": "17"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,                  // 不使用 runtime 的 corejs
        "helpers": true,                  // 提取 helper 函数
        "regenerator": true,              // 提取 regenerator
        "useESModules": false             // 使用 CommonJS 模块
      }
    ]
  ]
}
```

### 支持的 ES6+ 特性

- ✅ **箭头函数** - `() => {}`
- ✅ **模板字符串** - `` `Hello ${name}` ``
- ✅ **解构赋值** - `const {a, b} = obj`
- ✅ **展开运算符** - `...array`
- ✅ **可选链** - `obj?.property`
- ✅ **空值合并** - `value ?? 'default'`
- ✅ **async/await** - 异步函数
- ✅ **Promise** - 原生 Promise 支持
- ✅ **类语法** - `class MyClass {}`
- ✅ **模块导入导出** - `import/export`

## 🎯 使用示例

### 源代码 (src/index.js)

```javascript
// 可选链操作符
const obj = { a: 1, b: 2, c: 3 }
console.log(obj?.a, obj?.d)

// async/await 异步函数
async function asyncFunc() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('done')
    }, 1000)
  })
}
```

### 编译后代码 (lib/compiled.js)

```javascript
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");

var obj = { a: 1, b: 2, c: 3 };
console.log(obj === null || obj === void 0 ? void 0 : obj.a, 
           obj === null || obj === void 0 ? void 0 : obj.d);
```

## 🔧 可用脚本

| 脚本 | 描述 |
|------|------|
| `npm run build` | 编译整个 src 目录到 lib 目录 |
| `npm run build:watch` | 监听模式编译整个目录 |
| `npm run build:single` | 编译单个文件 |
| `npm run build:single:watch` | 监听模式编译单个文件 |
| `npm run clean` | 清理编译输出目录 |
| `npm run dev` | 开发模式（清理 + 监听编译） |
| `npm run test` | 运行编译后的代码 |
| `npm start` | 完整流程（构建 + 运行） |

## 🎓 学习资源

### 官方文档
- [Babel 官方网站](https://babeljs.io/)
- [Babel 配置指南](https://babeljs.io/docs/en/configuration)
- [Preset Env 文档](https://babeljs.io/docs/en/babel-preset-env)

### 项目文档
- 📄 `Doc/了解 babel.pdf` - Babel 基础概念和原理
- 📄 `Doc/单独自己定义化配置babel.pdf` - 高级配置技巧

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👨‍💻 作者

**liuhan** - [IT-NuanxinPro](https://github.com/IT-NuanxinPro)

## 🙏 致谢

- [Babel 团队](https://babeljs.io/team) - 提供了优秀的 JavaScript 编译器
- [Core-js 作者](https://github.com/zloirock) - 提供了完整的 polyfill 库
- 所有为开源社区做出贡献的开发者们

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️**

</div>
