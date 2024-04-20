(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{749:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_13-vuex的使用及设计思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-vuex的使用及设计思想"}},[t._v("#")]),t._v(" 13 Vuex的使用及设计思想")]),t._v(" "),s("h2",{attrs:{id:"vuex-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-是什么"}},[t._v("#")]),t._v(" Vuex 是什么")]),t._v(" "),s("ul",[s("li",[t._v("Vuex 是一个 专为 Vue.js 应用程序开发的状态管理模式")]),t._v(" "),s("li",[t._v("它采用集中式存储管理应用的所有组件的状态，并以相应的规则， 保证状态以一种可预测的方式发生变化。")])]),t._v(" "),s("h2",{attrs:{id:"默认的五种基本对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认的五种基本对象"}},[t._v("#")]),t._v(" 默认的五种基本对象")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("state\n存储状态 （变量）")])]),t._v(" "),s("li",[s("p",[t._v("getters\n对数据获取之前的再次编译，可以理解为 state 的计算属性")])]),t._v(" "),s("li",[s("p",[t._v("mutations\n修改状态， 并且是同步的。在组件中使用 $store.commit('', params)。 这个和我们组件中的自定义事件类似")])]),t._v(" "),s("li",[s("p",[t._v("actions\n异步操作。 在组件中使用是 $store.dispath('')")])]),t._v(" "),s("li",[s("p",[t._v("modules\nstore 的子模块， 为了开发大型项目， 方便状态管理而使用")])])]),t._v(" "),s("h2",{attrs:{id:"vuex-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的使用"}},[t._v("#")]),t._v(" Vuex 的使用")]),t._v(" "),s("ul",[s("li",[t._v("安装Vuex")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install vuex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("save\n")])])]),s("ul",[s("li",[t._v("引用Vuex")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("创建仓库Store")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个 store ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("store 对象包含四个子对象\n"),s("ul",[s("li",[t._v("state 用于存储数据， 类似vue实例的data属性")]),t._v(" "),s("li",[t._v("mutations 唯一修改 state 的方法， 修改过程是同步的")]),t._v(" "),s("li",[t._v("actions 发出事件， 事件见日你刚起程序一般会调用 mutations 对 state 进行需改， action 事件本身是异步的。 提交的是 mutation， 而不是直接变更状态")]),t._v(" "),s("li",[t._v("getters 用于对 state 的数据进行筛选， 过滤")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myStore "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放组件之间共享的数据")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mutations")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 显示的更改state里的数据")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("getters")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取数据的方法")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("actions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步处理")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"理解vuex设计思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解vuex设计思想"}},[t._v("#")]),t._v(" 理解Vuex设计思想")]),t._v(" "),s("h3",{attrs:{id:"vuex-的思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的思想"}},[t._v("#")]),t._v(" Vuex 的思想")]),t._v(" "),s("ul",[s("li",[t._v("Vuex 使用单一状态树，用一个对象 State 包含了整个应用层级的所有状态，可以理解为这些状态就是一堆全局变量和数据")]),t._v(" "),s("li",[t._v("Vuex采用类似全局对象的形式来管理所有组件的公用数据， 如果想修改整个全局对象的数据， 得按照Vuex提供得方式来修改")])])])}),[],!1,null,null,null);s.default=n.exports}}]);