(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{725:function(t,a,s){"use strict";s.r(a);var r=s(10),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_6-1-react-virtual-dom-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-react-virtual-dom-原理"}},[t._v("#")]),t._v(" 6.1-React Virtual DOM 原理")]),t._v(" "),a("h2",{attrs:{id:"virtual-dom-定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-定义"}},[t._v("#")]),t._v(" Virtual DOM 定义")]),t._v(" "),a("p",[t._v("Virtual DOM 是一种编程理念，将 ui 虚拟的保存在内存中， 并且通过某些库渲染成真是的 dom")]),t._v(" "),a("ol",[a("li",[t._v("Virtual DOM 是一种编程理念")]),t._v(" "),a("li",[t._v("Virtual DOM 将 ui 节点抽象成 js 对象")])]),t._v(" "),a("h2",{attrs:{id:"ui-节点抽象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-节点抽象"}},[t._v("#")]),t._v(" UI 节点抽象")]),t._v(" "),a("ul",[a("li",[t._v("Learn Once， Write Anywhere: 因为提供了 HTML DOM 抽象，所以在 web 开发中，通常不需要去调用 DOM API。也是因为抽象，所以 React 也可以开发 Native（React Native）")])]),t._v(" "),a("h2",{attrs:{id:"react-渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-渲染"}},[t._v("#")]),t._v(" React 渲染")]),t._v(" "),a("h3",{attrs:{id:"通过-virtual-dom-渲染页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-virtual-dom-渲染页面"}},[t._v("#")]),t._v(" 通过 Virtual DOM 渲染页面")]),t._v(" "),a("p",[t._v("很简单的例子， 渲染 state 变量 text 的值")]),t._v(" "),a("p",[t._v("可以看到 React 是通过 render 方法渲染 Virtual DOM(这里不考虑优化)，从而绘制出真实 DOM。意味着， 每次修改了 state 的值就会执行 render 方法")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Virtual DOM'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"virtual-dom-vs-原生-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-vs-原生-dom"}},[t._v("#")]),t._v(" virtual dom vs 原生 dom")]),t._v(" "),a("ul",[a("li",[t._v("原生 DOM 更新")])]),t._v(" "),a("p",[t._v("DOM API 调用更新 UI")]),t._v(" "),a("ul",[a("li",[t._v("Virtual DOM 更新")])]),t._v(" "),a("ol",[a("li",[t._v("每次 render 都会产生一分新的 react dom")]),t._v(" "),a("li",[t._v("Virtual DOM 要对新旧 react dom 进行比较，从而确定在旧 dom 的基础上进行多少变更")]),t._v(" "),a("li",[t._v("确定最优的变更策略之后调用 DOM API 更新 UI")])]),t._v(" "),a("p",[t._v("页面重新绘制是影响页面的关键性指标（频繁的操作dom会导致页面重绘）")]),t._v(" "),a("h2",{attrs:{id:"virtual-dom数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom数据结构"}},[t._v("#")]),t._v(" Virtual DOM数据结构")]),t._v(" "),a("h3",{attrs:{id:"对-ui-节点抽象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对-ui-节点抽象"}},[t._v("#")]),t._v(" 对 UI 节点抽象")]),t._v(" "),a("p",[t._v("在 Virtual DOM 中， 对 HTML 节点进行抽象，用 JS 对象的形式表示 HTMl")]),t._v(" "),a("p",[t._v("改变了过去对 HTML 节点理解")]),t._v(" "),a("p",[t._v("呈现在用户面前的页面就是一个复杂的递归对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" globaldom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tagName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tagName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'head'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tagName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tagName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("attributes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"virtual-dom-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-diff"}},[t._v("#")]),t._v(" Virtual DOM Diff")]),t._v(" "),a("ul",[a("li",[t._v("Virtual DOM 如何提高性能")])]),t._v(" "),a("ol",[a("li",[t._v("我们将 render 产生的 Virtual DOM 简称 Vdom")]),t._v(" "),a("li",[t._v("通常调用 setState 方法触发 Vdom 更新")]),t._v(" "),a("li",[t._v("通过对比新旧 Vdom ， 确定最优实现新 Vdom 所需的操作")])]),t._v(" "),a("ul",[a("li",[t._v("Virtual DOM Diff 的操作")])]),t._v(" "),a("ol",[a("li",[t._v("组件级别比较")]),t._v(" "),a("li",[t._v("元素级别比较")])]),t._v(" "),a("p",[t._v("todo 后半段源码学习")])])}),[],!1,null,null,null);a.default=n.exports}}]);