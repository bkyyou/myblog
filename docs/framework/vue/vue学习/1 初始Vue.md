# 1 初识Vue

## 介绍Vue
Vue (读音类似view)，是一个构建数据驱动的web界面的渐进式框架


## Vue 开发与传统开发思路对比

## 使用Vue

### vue的引入
* 直接引入
1. 最新稳定版本 <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
2. 指定具体版本 <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>

* 大型项目安装 <br>
最新稳定版 npm install vue

* 命令行工具 cli 构建
1. 安装  npm install -g @vue/cli 或 yarn global add @vue/cli
2. 创建项目  vue create my-project 或者使用图形ui界面 vue ui

## 简单使用

```html
<div id="id">

</div>
```

```javascript
new Vue({
	el: '#app',
	data: {

	}
})
```