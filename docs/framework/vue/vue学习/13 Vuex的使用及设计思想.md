# 13 Vuex的使用及设计思想

## Vuex 是什么
* Vuex 是一个 专为 Vue.js 应用程序开发的状态管理模式
* 它采用集中式存储管理应用的所有组件的状态，并以相应的规则， 保证状态以一种可预测的方式发生变化。

## 默认的五种基本对象

* state
存储状态 （变量）

* getters
对数据获取之前的再次编译，可以理解为 state 的计算属性

* mutations
修改状态， 并且是同步的。在组件中使用 $store.commit('', params)。 这个和我们组件中的自定义事件类似

* actions
异步操作。 在组件中使用是 $store.dispath('')

* modules
store 的子模块， 为了开发大型项目， 方便状态管理而使用

## Vuex 的使用
* 安装Vuex
```js
npm install vuex -save
```

* 引用Vuex
```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
```

* 创建仓库Store
```js
// 创建一个 store 
const store = new Vuex.Store({});
```

* store 对象包含四个子对象
	* state 用于存储数据， 类似vue实例的data属性
	* mutations 唯一修改 state 的方法， 修改过程是同步的
	* actions 发出事件， 事件见日你刚起程序一般会调用 mutations 对 state 进行需改， action 事件本身是异步的。 提交的是 mutation， 而不是直接变更状态
	* getters 用于对 state 的数据进行筛选， 过滤

```js
const myStore = new Vuex.Store({
	state: {
		// 存放组件之间共享的数据
		name: 'vuex'
	},
	mutations: {
		// 显示的更改state里的数据
	},
	getters: {
		// 获取数据的方法
	},
	actions: {
		// 异步处理
	}
})
```

## 理解Vuex设计思想

### Vuex 的思想
* Vuex 使用单一状态树，用一个对象 State 包含了整个应用层级的所有状态，可以理解为这些状态就是一堆全局变量和数据
* Vuex采用类似全局对象的形式来管理所有组件的公用数据， 如果想修改整个全局对象的数据， 得按照Vuex提供得方式来修改
