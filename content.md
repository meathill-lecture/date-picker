<!--
title: date-picker-tutorail
description: a full tutorail of date-picker
-->

### 实战
# 手机日历组件

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

{{> author}}

<!-- page -->

## 课程大纲

1. 项目启动 & 需求分析
2. npm & package.json
3. Stylus
4. 静态 HTML 开发

<!-- section -->

5. ES2015 简介
6. 使用 ES6 开发 JavaScript
7. 使用 Mocha + should.js + Babel 测试
<!-- .element: start="5" -->

<!-- section -->

8. 搭建 Webpack + Babel 编译环境
9. 使用 Handlebars 处理模板
10. 完成 UI 开发和测试
11. 使用策略模式解决分支需求
<!-- .element: start="8" -->

<!-- section -->

11. Gulp 打包
12. 配置 Webpack 适应不同环境的打包
13. 使用 Weinre 解决微信下的问题
<!-- .elment: start="11" -->

<!-- section -->

14. 使用 GitHub Pages 搭建文档网站
15. 回顾，总结
<!-- .element: start="13" -->

<!-- page -->

## 教学目标

通过学习本系列教程，可以了解现代化前端开发的方方面面：

1. 学会搭建开发环境，使用 Webpack、Babel、Stylus、Gulp 等工具
3. 了解测试驱动开发，学会写测试用例、自动化测试
4. 学会打包发布代码
5. 学会用 GitHub Pages 维护产品文档
6. 学会写类似的组件

<!-- page -->

## 第一讲

1. 项目启动 & 需求分析
2. 技术选型
3. 流程图
4. [实战] 初始化项目
5. [实战] 开发静态 HTML

<!-- page -->

## 需求分析

<!-- section -->

<div class="row">
  <div class="col">
    ![例子](./img/sample.png)<!-- .element: height="600" -->
  </div>
  <div class="col" markdown="1">
    <ol>
      <li>开发一个日历控件</li>
      <li>主要在手机浏览器中使用，包括公众号</li>
      <li>点击日期输入框，弹出控件，选择日期，收起控件</li>
      <li>尽量独立，少依赖，少引入框架</li>
      <li>样式如图</li>
    </ol>
  </div>
</div>

<!-- section -->

### 通用规则

1. 今日用黄点标记
2. 不可选的日期为灰色
3. 打开关闭都需要动画
4. 周末用橙色标记
5. 可以指定某个日期为橙色（端午节、清明节等）
6. 向上滚屏可以自动增加下个月
7. 可以用参数配置

<!-- section -->

### 选择单日

1. 点击日期视为选中
2. 点击同一日期视为取消
3. 点击其它日期视为多选
4. 若自动提交，点够数量就提交
5. 不自动提交，右上角有提交按钮，点击后提交

<!-- section -->

### 选择多日

1. 第一次点击时，视为选择时间段的一端，第二次点击为选择另一端
2. 允许用户先选择终点，再选择起点
3. 若自动提交，第二次点击后，控件伴随着动画关闭
4. 不自动提交，第三次点击会清空之前的选择，并重新选择起点

<!-- page -->

## 技术选型

1. 开发效率
2. 使用效率
3. 维护成本

<!-- section -->

### jQuery

1. 事件代理
2. 创建 DOM
3. 简单的 DOM 操作

<!-- section -->

### 模板引擎 Handlebars

1. 预编译
2. 比较熟

<!-- section -->

### Stylus -> CSS

1. 使用预处理工具，方便开发
2. 简单方便快捷，基于 Node.js
3. 支持变量、函数、循环
4. 丰富的内建函数

<!-- section -->

### 语言

1. ES6 Class
2. Webpack + Babel
4. 完整的测试用例

<!-- section -->

### 提交物料

1. 最终文件 CSS、JS 各一个
2. 源代码
3. 使用文档

<!-- page -->

## 这套方案的优势

1. 使用比较简单，嵌入资源文件即可
2. 使用 jQuery，前后兼容性好，对方容易接手
3. 源代码保持最大的弹性，方便扩展开发

<!-- page -->

## 工作流程

1. 将事件绑定在 `<body>` 上
2. 配置信息使用 `data-*` 写在 `<input>` 上
3. 用户点击 `input[type=text].tqb-date-picker` 后
    1. 如果此文本框尚无日历元素
    2. 则生成一个元素并绑定
4. 弹出日历窗口
5. 用户点击后选中日期

<!-- section -->

![日历组件流程图](./img/flow.svg)<!-- .element: class="bg-w" -->

<!-- page -->

## 开工！！

<!-- page -->

## 0. 准备阶段

1. 安装 node.js
2. 安装 Stylus
3. [可选] 安装 [Live-server](http://tapiov.net/live-server/)

<!-- section -->

### Live-server

Live-server 是开发服务器，基于 Node 实现，能够实现自动刷新。

用法：

```bash
live-server --port=8081 --host=localhost --ignore=styl
```

<!-- page -->

## 1. 初始化项目

<!-- section -->

### NPM

Node Package Manager = Node 包管理工具

1. 管理依赖
2. 发布我们自己的包
3. 记录常用脚本

<!-- section -->

### package.json

此项目的配置信息，可被 `npm` 读取。

1. 版本、内容、作者等描述
2. 依赖：运行时依赖 & 开发时依赖
3. 可执行脚本

<!-- page -->

## 2. 配置 Stylus

<!-- page -->

### 3. 开发静态 HTML

<!-- page -->

### 实战：手机日历组件 第二讲
# ES6 & 测试

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

## 课程大纲

1. ES2015（ES6）简介
2. 使用 ES6 开发 JavaScript
3. 使用 Mocha.js + Should.js 搭建测试环境

<!-- page -->

### 教学目标

## 1. 了解 ES2015

1. `let` 和 `const`
2. 变量解构
3. 箭头函数
4. `Class`
5. `Module`
6. 模板字符串

<!-- page -->

## 2. 了解测试

1. 为什么要写测试？
2. 什么是单元测试？怎么写？
3. 怎么开始写测试？

<!-- page -->

## 3. 测试驱动开发

#### [实战]

<!-- page -->

## ES2015 / ES6

<!-- section -->

ES

= ECMAScript

= 由 ECMA 国际（前身为欧洲计算机制造商协会）通过 ECMA-262标准化的脚本程序设计语言。

<!-- section -->

* JavaScript 是 ECMAScript 的一种方言
* 浏览器中的 JavaScript 增加了 DOM 和 BOM
* 目前 ES5 基本完成普及，主流浏览器部分或全部支持 ES6

<!-- section -->

* ES5 = ES6 之前的规范
* ES6 = ES2015
* ES7 = ES2016 + ES2017
* ES8 = ES2018（讨论中）
* ES9 = ES2019（征集想法中）

<!-- page -->

## JavaScript 的历史

<!-- section -->

### 妾本出身贫寒家，未想尊威仪天下

1. 为校验表单而生
2. 只花了10天就设计出原型
3. 连名字都是山寨的……

<!-- section -->

### 江山代有才人出，各领风骚数百年

1. JScript
2. Flash，ActiveX
3. SilverLight，JavaFX

<!-- section -->

### 天下逐鹿，终归秦属

1. ES3 大体上统一了 JavaScript
2. ES4 夭折
3. HTML5 获得浏览器之争的最终胜利
4. ES5 诞生
5. ES6 诞生

<!-- page -->

> ES2015 增加了很多优秀的新特性，可以让我们开发出更强壮，更好维护的代码。

> 以后的开发，都应当以 ES2015 为基础。

<!-- page -->

## ES2015 新特性

<!-- page -->

### `let` & `const`

1. 声明变量 `let a = 1;`
2. 声明常量 `const B = 2;`
3. 块级作用域 [code](./sample/let-const.js)
4. 没有变量提升 [code](./sample/let-const-2.js)

<!-- page -->

### 变量解构

Destructuring

按照一定模式，从数组和对象中提取值。

```javascript
// 解构数组
let [a, b, c] = [1, 2, 3];
// a = 1;
// b = 2;
// c = 3;
```

<!-- section -->

只要两边模式对照一致，可以有很多种拆法：

```javascript
let [a, ...b] = [1, 2, 3, 4];
// a = 1
// b = [2, 3, 4]

let [a, , b] = [1, 2, 3];
// a = 1
// b = 3
```

<!-- section -->

解构对象

```javascript
let {a, b, c} = {a: 1, b: 2, c: 3};
// a = 1
// b = 2
// c = 3

// 解构对象只关注键名，不关注顺序
let {b, c, a} = {a: 1, b:2, c: 3};
// a = 1
// b = 2
// c = 3
```

<!-- section -->

常见用法：函数返回多个值

```javascript
function sample() {
  return {
    a: 1,
    b: 2,
    c: 3
  };
}
let {a, b, c} = sample();
```

<!-- section -->

常见用法：作为函数参数

```javascript
function sample({id, name, age, sex, height, photo}) {
  // do something
}
sample({
  id: 1,
  name: 'meathill',
  age: 33,
  sex: MALE,
  height: 181,
  photo: './photo.jpg'
});
```

<!-- page -->

### 箭头函数

```javascript
let f1 = p1 => {
  // do something
};

let f2 = p1 => p1 * 100;
// 等价于
let f2 = p1 => {
  return p1 * 100;
}

let f3 = (p1, p2) => {
  // do something
};

let f4 = ([p1, p2]) => {
  // do something
}
```

* 箭头函数的 `this` 固定指向声明它的对象

<!-- page -->

### Class

```javascript
class A {
  constructor() {
    // 构造函数

    // 声明实例属性
    this.var = '';
  }

  method1() {

  }

  method2() {

  }
}
```

<!-- section -->

几个常见的点：

1. 这里的类仍然是原型继承
2. `class` 关键词不存在变量提升
3. 子类构造函数里，必须 `super()` 之后才有 `this`

<!-- page -->

### Module

终于有模块机制了！

```javascript
// profile.js
export let name = 'Meathill';
export let age = 33;
export let weight = 100;

// user.js
import * as user from './profile'
// user.name = 'Meathill';
// user.age = 33;
// user.weight = 100;
// 亦可使用解构方法
import {name, age, weight} from './profile'
```

<!-- section -->

默认值

```javascript
// profile.js
export default 'Meathill';
export let age = 33;
export let weight = 100;

// user.js
import anyname from './profile.js';
```

<!-- page -->

### 模板字符串

```javascript
let name = 'Meathill';
let age = 33;
let favor = 'Gakki';

alert(`Hi, I'm ${name}，I'm ${age}, I like ${favor}`);
// Hi, I'm Meathill, I'm 33, I like Gakki
```

1. 支持运算符，如 `Hi, ${user.name}` `${a * 3}`
2. 支持换行
3. 尽量不要在里面使用复杂的运算

<!-- page -->

## 测试与单元测试

<!-- page -->

### 我对测试的态度

1. 开发人员必须了解测试
    1. 测试用例
    2. 边界条件
    3. 回归测试
2. 开发人员应该自己写测试
    1. 稳定质量
    2. 方便重构
    3. 提升开发效率
3. 不用追求测试覆盖率

<!-- section -->

### 单元测试

<!-- section -->

### 什么是单元测试？

> 在计算机编程中，单元测试（英语：Unit Testing）又称为模块测试, 是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。 程序单元是应用的最小可测试部件。

> [Wiki](https://zh.wikipedia.org/zh-hans/单元测试)

<!-- section -->

### 怎么写单元测试？

以 Node.js 为例

```javascript
const assert = require('assert');

assert.equal(1, '1'); // 1 == '1' true
```

<!-- section -->

核心概念：

1. 断言
2. 边界条件

<!-- page -->

### 我以前没写过，现在要怎么开始？

1. 如果要重构，先写测试
2. 比较重要的操作，先写测试
3. 如果要修复 Bug，先写测试

> 总之，测试不嫌少，能写赶紧写。

<!-- page -->

## 测试驱动开发

1. Test Driven Development
2. 先想怎么用，而不是先想怎么写
3. 适用于前期规划项目

<!-- page -->

## 工具

* [Mocha.js](https://mochajs.org/)
* [Should.js](https://shouldjs.github.io/)

<!-- page -->

## Coding

<!-- page -->

### 实战：手机日历组件 第三讲
# UI 开发 & 策略模式

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

## 课程大纲

1. 使用 Webpack + Babel 搭建开发环境
2. 开发 UI 界面
3. 使用策略模式解决分支需求

<!-- page -->

### 教学目标

1. 学会搭建 Webpack + Babel 开发环境
2. 学会使用各种 Loader 解决问题
3. 学会开发本插件
4. 了解设计模式，学会使用策略模式

<!-- page -->

## Webpack

Webpack 是一个打包工具，降低 Web 中加载资源的难度。

* [官网](https://doc.webpack-china.org/)
* [文档](https://doc.webpack-china.org/configuration)
* 当前版本：2.6.1

<!-- section -->

### 依赖管理的发展

1. 最早：所有资源静态引入
2. 接下来：AMD/CMD/CommonJS/Sea.js
3. 打包流出现：Browserify
4. 打包一切：Webpack

<!-- section -->

![webpack 示意图](https://webpack.js.org/bf093af83ee5548ff10fef24927b7cd2.svg)

<!-- page -->

## Babel

Babel 是一个转译工具，将高版本的 JS 转译成低版本的 JS。亦可转译 JSX（React）。

* [官网](https://babeljs.io/)
* [文档](https://babeljs.io/docs/setup/#installation)
* 当前版本：
    * babel-core 6.24.1
    * babel-loader 7.0.0

<!-- section -->

### Babel 入门

1. 配置文件 [.babelrc](http://babeljs.io/docs/usage/babelrc/)
2. 预设环境 [preset env](http://babeljs.io/docs/plugins/preset-env/)
3. 插件

<!-- page -->

## 配置环境

<!-- page -->

## Coding

<!-- page -->

## 设计模式

> 可复用面向对象软件的基础

<!-- section -->

1. 面向对象
2. 提高代码的复用性和维护效率
3. 锦上添花

<!-- section -->

### 使用设计模式的正确姿势

1. 了解设计模式，暗记于心
2. 学习别人使用设计模式的方式、场景
3. 在合适的地方使用合适的模式

<!-- page -->

### JavaScript 中的设计模式

1. JS 有独特的语法，也有独特的实现模式
2. ES6 与 ES5 的实现模式也相差甚远
3. 不要照搬其它语言中的模式

<!-- page -->

### 策略模式

> 定义一系列算法，把它们一个个封装起来，并且使它们可相互替换。

1. 如果把所有可能用到的算法都写到一起，会使它变得巨大复杂难以维护
2. 不同的时候需要不同的算法，一个类里不应包含它不支持的方法
3. 新增同类型的需求时，增加算法和调整现有算法都会变得很困难

<!-- section -->

1. 所有策略的主要流程是一致的
2. 个别不一致的环节可以独立实现
3. 通常配合工厂类一起使用

<!-- page -->

[回顾一下我们的需求](#/5/3)

1. 主要业务流程一致
2. 少数逻辑有区别：
    1. 点击日期后的处理
    2. 输出日期到文本框
    3. 初始化日期的显示

这两个需求差异，很适合用策略模式来处理。

<!-- page -->

## 继续 Coding

<!-- page -->

### 实战：手机日历组件 第四讲
# 用 Gulp 打包发布吧！

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

## 课程大纲

1. 为什么要后（批）处理？
2. 使用 Gulp 进行批处理
3. 使用 ESLint 工具进行代码审查

<!-- page -->

### 教学目标

1. 了解什么是批处理，学会选用批处理工具
2. 学会使用 Gulp 进行批处理
3. 学会打包组件
4. 学会用 ESLint 审查代码

<!-- page -->

## 为什么要批（后）处理？

1. Stylus => CSS
2. ES2015/ES2017 => ES5
3. node_modules => CDN
4. 图片压缩
5. 开发环境 => 生产环境

<!-- page -->

一些可能的抱怨：

> 我直接写，写完直接 FTP 传上去多省事儿啊！

> 遇到问题我登到 FTP 上改不就好了么？

> 整这些乱七八糟的干嘛？

<!-- page -->

真的是这样么？

<!-- section -->

### “我直接写，写完直接 FTP 传上去多省事儿啊！”

1. 文件多，难以确定哪些需要上传
2. 无法区分开发环境与生产环境
3. HTML/CSS/JavaScript 天生的缺陷

<!-- section -->

### “遇到问题我登到 FTP 上改不就好了么？”

1. 版本管理的问题
2. 缓存的问题

<!-- page -->

结论：

> 使用中间代码 + 后处理代表着先进生产力，可以提高开发、维护、部署效率，我们应该学习运用。

<!-- page -->

## Gulp

1. Ant => Grunt => Gulp / npm script
2. 速度快
3. 用法简单，没有历史包袱

<!-- page -->

```javascript
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');

gulp.task('stylus', () => {
  return gulp.src('./styl/screen.styl')
    .pipe(stylus())
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('dist/screen.css'));
});
```

<!-- page -->

### 批处理

```javascript
gulp.task('stylus', () => {
  // ....
});

gulp.task('webpack', () => {
  // ....
});

gulp.task('html', () => {
  // ....
});

gulp.task('default', ['stylus', 'webpack', 'html']);
```

<!-- page -->

### 批处理顺序

```javascript
const sequence = require('run-sequence');
const del = require('del');

gulp.task('clear', () => {
  return del(['dist']);
});

gulp.task('default', callback => {
  sequence(
    'clear',
    ['other', 'task'],
    callback
  );
})
```

<!-- section -->

任务完成的判定依据：

1. `callback()`
2. 返回 gulp 流
3. 返回 Promise 对象

<!-- page -->

## Coding!

<!-- page -->

## 处理不同环境

1. 不同的配置
2. 适配不同平台
3.

<!-- page -->

### `webpack.DefinePlugin`

```javascript
const webpack = require('webpack');

module.exports = {
  ....
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: false,
      VERSION: JSON.stringify('1.0.0'),
      SUPPORT_ANDROID: false
    })
  ]
};
```

<!-- page -->

## Coding!

<!-- page -->

## 自动化代码审查

1. 确保所有代码风格一致
2. 加强团队配合能力

<!-- page -->

### ESLint

1. 检查代码是否符合规范
2. 执行最重要，有没有分号不重要

<!-- section -->

## Coding!

<!-- page -->

### [`pre-commit`](https://www.npmjs.com/package/pre-commit)

利用 Git pre-commit 钩子，检查代码，不合规不入库

<!-- section -->

现实中：

1. 从现在开始，先审查新代码
2. 如果重构，把重构的代码拿来一起审查

<!-- page -->

## Coding!

<!-- page -->

## 总结

1. 现代化前端开发，我们会写很多中间代码，需要批处理将其转换成最终代码
2. 一些资源，也在此时进行处理
3. 打包输出不同环境下的代码
4. 代码入库之前要进行审查，保证规范执行

<!-- page -->

### 实战：手机日历组件 第五讲
# 模块管理/文档/发布

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

### 前情回顾

[时光机](#/5/1)

Note:
我有一个朋友创业，他们公司后端实力很强，前端就比较一般。但是他们是一家2C的公司，基于微信做业务，所以迫切需要提升 Web 的用户体验。他们当时需求一个好用的日期选择组件，但是市面上暂时不好找；而且他们还有一些个性化的需求，即使找到了组件他们的前端也改不动。

这是我的幸运，同时也是他们的不幸。

（点击链接）好了，这就是他们的需求：（复述需求）

我当时正好没工作，所以就接了这个活儿。活儿本身不复杂，我大约花了3~4个工作日就完成了，其中一天受困于一个诡异的 Bug。交付之后，朋友公司的前端小妹找到我，希望看看我的源码，学习一下。我当然就给她了，结果她看不明白，因为我使用了大量的工具，开发过程和传统的基于 jQuery 的开发很不一样。所以我就产生了做这样一个系列教程的想法，一方面有机会帮助很多人，另一方面将来内训也可以省去很多力气。

前面我已经进行了4次分享，讲了从项目启动需求分析到结构搭建、CSS 预处理、编译、模板、打包、自动化测试，等等。这是我们第五次，也是原定最后一次分享，这次分享，我的目标是：

<!-- page -->

## 教学目标

1. 理解 JS 模块管理
2. 学会发布符合各种标准的代码
3. 学会发布 NPM 模块
4. 学会使用 GitHub Pages

<!-- page -->

## 课程大纲

1. JavaScript 的模块管理
2. 三种主流模块模型的特点
3. 打包输出同时支持三种模型的代码
4. 将代码发布到 NPM
5. 制作文档
6. 将文档发布到 GitHub Pages

Note:
为达到这个目标，今天的分享会分成这些章节。

<!-- page -->

## JavaScript 的模块管理

<!-- page -->

### 模块管理的起源

Note:
首先我们来了解一下模块管理的起源。可能有一些同学不很理解，尤其是一些接触过一定前端的后端同学。现代化的前端开发变得非常复杂，做任何一件事情几乎都要搭建好久的环境，这让很多习惯于抄起 jQuery 就是干的同学很不爽。

但是，这是有原因的。接下来我们来看看为什么。

<!-- section -->

程序员的基础行为准则：

DRY = Don't Repeat Yourself

不要重复你自己。

Note:
作为一名程序员，我们应该谨记：Dont repeat yourself，不要重复你做过的工作。这一点非常重要。只有程序员才有这样的能力，自己创造工具，避免重复性的劳动；同时，作为程序员，也必须这样，才能避免自己的精力和时间被重复性工作浪费掉。

<!-- section -->

早年的前端开发：

1. 以全局使用为主
2. 以复制粘贴为主

<!-- section -->

1. DOM 结构发生变化，代码失效
2. 修改了某段代码，其它页面失效
3. 不同代码容易冲突

<!-- section -->

模块管理 = 使用写好的代码

好处：

1. 节省开发时间
2. 节省测试时间
3. 可以使用更小的粒度
4. 可以版本管理

<!-- page -->

### 模块管理的发展

<!-- section -->

最早：

1. AMD => require.js
2. CMD => sea.js
3. CommonJS => Node.js
4. 全局，命名空间 => jQuery，Lodash/Underscore

<!-- section -->

接下来：

1. AMD vs CMD
2. Browserify
3. Webpack
4. UMD

Note:
Browserify 彻底的解决了 JS 模块管理问题。
Webpack 顺手解决了其它资源管理的问题。

<!-- section -->

最终胜出者：Webpack

优势：

1. 海量 NPM 资源
2. 打包所有资源，非常方便

<!-- page -->

## 现阶段的模块管理

<!-- page -->

### 全局

1. 基于全局，可以有简单的命名空间
2. 适用于羽量级项目
3. 快捷方便，寿命最长，支持最多

<!-- page -->

### CommonJS

1. `module.exports={}`
2. 支持广泛，资源丰富
3. 局部变量更方便

<!-- page -->

### ES6 Module

1. CommonJS 的取代者
2. 更严格，静态化，方便运行时优化
3. 支持 `export default`
4. 很容易转译成 CommonJS

<!-- page -->

## Coding!

<!-- page -->

## 将代码发布到 NPM

1. 方便复用代码
2. 方便管理依赖
3. 有机会为开发社区做出贡献
4. 好的项目在哪里都是加分项

Note:
“不到长城非好汉”，相信前端同学也会有“不发NPM也遗憾”的想法。

<!-- page -->

### package.json

1. version 版本
2. main 入口

<!-- section -->

### .npmignore

1. 可以忽略，此时会使用 .gitignore
2. 如有，则忽略 .gitignore
3. 建议只包含必要的文件，或编译后的文件

<!-- page -->

## Coding!

<!-- page -->

## 制作文档

1. 详细的文档非常必要
2. 好的文档对产品推广帮助巨大
3. 建议使用 markdown 维护文档

<!-- page -->

### Makrdown 的好处

1. 语法简单，结构和纯文本类似
2. 可以转换成 HTML，表现力丰富
3. 支持内嵌 HTML

<!-- page -->

## Coding!

<!-- page -->

## 使用 GitHub Pages
## 托管静态网站

1. GitHub Pages 是 GitHub 提供的免费的静态网站托管服务
2. 可以为任何仓库创建静态网站
3. 也可以为组织或个人创建静态网站

<!-- page -->

## Coding!

<!-- page -->

## 友情提示

请对自己的作品负责！

1. 请确保你的作品可以正常工作
2. 请使用测试框架保障历史功能
3. 请建设友好全面的文档

<!-- page -->

### 实战：手机日历组件 第六讲
# 重构为 Vue 版本

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

{{> author}}

<!-- page -->

## 教学目标

1. 知道什么是组件化，了解组件化的必要性
2. 了解 Vue 的组件化实现
3. 学会将 jQuery 插件重构为 Vue 组件的方法

Note:
去年春天，也就是我计划做这个系列教程的时候，如果你把教程看完，把里面介绍的知识点都学会，基本上已经是一个合格的前端工程师了。

但是前端技术发展就这么快，短短不到一年时间，Vue、React 已经取代 jQuery 之前的地位，现在几乎所有公司都把技术切到新架构上，前端工程化，工具复合使用是常规操作，随之而来的便是组件化。

所以，为了继续丰富大家的技术栈，便有了这次讲堂。

我希望通过这次讲堂，能够（复述）

<!-- page -->

## 课程大纲

1. 什么是组件化？组件化的优势是什么？
2. 组件化的几种实现方式
3. Vue 中的组件化
4. 重构日历选择组件

<!-- page -->

<!-- page -->

Q&A

<!-- page -->

完整项目代码仓库：

* [Github meathill-freelance/date-picker](https://github.com/meathill-freelance/date-picker)
* [线上文档](https://meathill-freelance.github.io/date-picker/)

<!-- page -->

## 参考阅读：

<!-- section -->

### 工具篇

* [NPM](https://docs.npmjs.com/)
* [Stylus](http://stylus-lang.com/)
* [Babeljs](https://babeljs.io/)
* [Mocha](https://mochajs.org/)
* [Should.js](https://shouldjs.github.io/)
* [Webpack](https://doc.webpack-china.org/)
* [ESLint](http://eslint.org/) | [ESLint 中文](http://eslint.cn/docs/user-guide/configuring)

<!-- section -->

### 工具使用篇

* [Using a package.json](https://docs.npmjs.com/getting-started/using-a-package.json)
* [阮一峰 测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
* [Babel 设置](https://babeljs.io/docs/setup/#installation)
* [Run npm scripts in a git pre-commit Hook](http://elijahmanor.com/npm-precommit-scripts/)

<!-- section -->

### 知识篇

* [ES6](http://es6.ruanyifeng.com)
* [Wiki ECMAScript](https://zh.wikipedia.org/wiki/ECMAScript)

<!-- section -->

### 图书篇

* [JavaScript 设计模式](https://www.amazon.cn/图书/dp/B00D6MT3LG/ref=sr_1_3?ie=UTF8&qid=1496569116&sr=8-3&keywords=javascript+设计模式)

<!-- section -->

### Debug 篇

* [一个超级诡异的 iOS Safari `position: fixed` 失效问题](https://blog.meathill.com/tech/fe/css/a-super-weird-ios-safari-postion-fixed-issue.html)
