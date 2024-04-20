(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{1051:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_5-wxs语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-wxs语法"}},[t._v("#")]),t._v(" 5.wxs语法")]),t._v(" "),s("p",[t._v("WXS (WeiXin Script) 是小程序一套脚本语言， 结合 wxml ， 可以构建出页面的结构\nWXS 与 Javascript 是不同的语言，有自己的语法，并不和 Javascript 一致")]),t._v(" "),s("h2",{attrs:{id:"wxs-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxs-模块"}},[t._v("#")]),t._v(" WXS 模块")]),t._v(" "),s("p",[t._v("WXS 代码可以写在 wsml 文件中的 wxs 标签内 或以 .wxs 为后缀的文件内")]),t._v(" "),s("p",[t._v("每一个 .wxs 文件 和 wxs 标签都是一个单独的模块")]),t._v(" "),s("p",[t._v("每一个模块都有自己单独的作用域。 即在这个模块定义的函数与变量都是这个模块私有的，对其它模块不可见。")]),t._v(" "),s("p",[t._v("一个模块想要对外暴露其内部私有的变量和函数， 只能通过 module.exports 实现。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v(".wxs 文件\n创建 .wxs 文件，在其中直接编写 WXS 脚本， 该 .wxs 文件可以被其他的 .wxs 或者 WXML 中的 wxs 标签所引用")])]),t._v(" "),s("li",[s("p",[t._v("module 对象\n每一个 wxs 模块均内置一个 module 对象")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("属性\nexports ： 通过该属性，可以对外共享本模块的私有变量和函数")])]),t._v(" "),s("li",[s("p",[t._v("module属性\nmodule属性 是当前 wxs 标签的模块名。 在单个 wxs 文件内， 建议其具有唯一性。有重复模块名则按照先后顺序覆盖（后者覆盖前者）。不同的文件的 wxs 模块不会相互覆盖。")])])]),t._v(" "),s("p",[t._v("module属性 的命名必须符合一下两个规则")]),t._v(" "),s("ol",[s("li",[t._v("首字母必须是： 字母（a-zA-Z）， 下划线（_）")]),t._v(" "),s("li",[t._v("剩余字母可以是： 字母（a-zA-Z）, 下划线（_） ， 数字")])])]),t._v(" "),s("li",[s("p",[t._v("wxs 的 使用")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// common.wxs 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("functio")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world. from common.wxs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bar\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wxs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../common.wxs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" {{common.foo}} "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" {{common.bar(1)}} "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("require 函数\n在 .wxs 模块中引用其他 wxs 文件模块， 可以使用 require 函数")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("引用时需要注意")]),t._v("\n只能引用 .wxs 文件模块， 只能使用相对路径。\nwxs 均为单例，wxs模块在第一次被引用时， 会自动初始化为单例对象。多个页面，多个地方，使用的都是同一个 wxs 模块对象。\n如果一个 wxs 模块被定义之后， 一直没有被引用，则该模块不会被解析和运行。")])]),t._v(" "),s("ul",[s("li",[t._v("src 属性\nsrc 属性可以用来引用其他的 wxs 文件模块")])])])}),[],!1,null,null,null);s.default=r.exports}}]);