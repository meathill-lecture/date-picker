<!--
title: date-picker-tutorail
description: a full tutorail of date-picker
-->

## 实战
# 手机日历组件

#### [@meathill](https://weibo.com/meathill/)

<!-- page -->

{{> author}}

<!-- page -->

## 教学目标

通过学习本系列教程，可以了解现代化前端开发的方方面面：

1. 学会搭建开发环境，使用 Webpack、Babel、Stylus、Gulp 等工具
3. 了解测试驱动开发，学会写测试用例、自动化测试
4. 学会打包发布代码
5. 学会用 GitHub Pages 维护产品文档
6. 学会写类似的组件

<!-- page -->

## 课程大纲

1. 项目启动 & 需求分析
2. npm & package.json
3. Stylus
4. 静态 HTML 开发

<!-- section -->

5. Webpack + Babel + ES6 配置
6. JavaScript 开发
7. 使用 Mocha + should.js 测试
8. 使用 Handlebars 处理模板
<!-- .element: start="5" -->

<!-- section -->

9. UI 自动化测试
10. Gulp 打包
11. 需求有变！增加时间段选择
12. Bug 来了！微信下有问题
<!-- .elment: start="9" -->

<!-- section -->

13. 使用 GitHub Pages 搭建文档网站
14. 回顾，总结
<!-- .element: start="13" -->

<!-- page -->

## 第一讲

1. 项目启动 & 需求分析
2. NPM & package.json
3. Stylus
4. 开发静态 HTML

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

### 语言

1. ES6 Class
2. Webpack + Babel
3. JS、CSS 分开打包

<!-- page -->

## 工作方式

1. 自动初始化页面中的特定输入框
2. 配置信息写在文本框上
3. 点击后，生成一个控件并绑定在输入框

<!-- section -->

![日历组件流程图](./img/flow.svg)<!-- .element: class="bg-w" -->

<!-- page -->

## NPM

Node Package Manager = Node 包管理工具

1. 管理依赖
2. 发布我们自己的包
3. 记录常用脚本

<!-- page -->

## Stylus

1. CSS 预处理工具
2. 简单方便快捷，基于 Node.js
3. 支持变量、函数、循环

<!-- page -->

## 开工！！

<!-- page -->

### 1. 创建项目

<!-- page -->

### 2. 创建 package.json

<!-- page -->

### 3. 开发静态 HTML

<!-- page -->

Q&A

<!-- page -->

## 第二讲

<!-- page -->

完整代码仓库：

[Github meathill-freelance/date-picker](https://github.com/meathill-freelance/date-picker)

<!-- page -->

参考阅读：

* [Using a package.json](https://docs.npmjs.com/getting-started/using-a-package.json)
* [Stylus](http://stylus-lang.com/)
