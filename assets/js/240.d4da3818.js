(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{847:function(t,a,s){"use strict";s.r(a);var r=s(10),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-js类型转换总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-js类型转换总结"}},[t._v("#")]),t._v(" 3.js类型转换总结")]),t._v(" "),a("h2",{attrs:{id:"_3-1-相加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-相加"}},[t._v("#")]),t._v(" 3.1 相加")]),t._v(" "),a("p",[t._v("有字符串相加，基本类型的值和引用类型的值都转换为了字符串")]),t._v(" "),a("p",[t._v("调用了 toString 方法；")]),t._v(" "),a("ul",[a("li",[t._v("Array toString 被重写过")])]),t._v(" "),a("h2",{attrs:{id:"_3-2-减乘除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-减乘除"}},[t._v("#")]),t._v(" 3.2 减乘除")]),t._v(" "),a("p",[t._v("转换了 number")]),t._v(" "),a("p",[t._v("ToNumber:")]),t._v(" "),a("ul",[a("li",[t._v("基本类型的值 Number(x) 进行转换")]),t._v(" "),a("li",[t._v("引用类型的值 (ToNumber 强制转换的规则)\n"),a("ul",[a("li",[t._v("先尝试调用 valueof 方法，返回基本类型的值用 Number(x) 进行转换")]),t._v(" "),a("li",[t._v("valueof 方法 失败，调用 toString 方法进行转换，返回基本类型的值用 Number(x) 进行转换")]),t._v(" "),a("li",[t._v("valueof， toString 都没有基本类型的值报错")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-3-比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-比较"}},[t._v("#")]),t._v(" 3.3 比较 == === >= > < <=")]),t._v(" "),a("ul",[a("li",[t._v("相同基本类型 直接相比较\n"),a("ul",[a("li",[t._v("字符转 是比较 unicode 码进行比较")]),t._v(" "),a("li",[t._v("其他的都会转换为数字之后再进行比较")])])]),t._v(" "),a("li",[t._v("引用类型 和 减乘除 规则相同")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// >= 表示取反 ？？？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h2",{attrs:{id:"对象转基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象转基本类型"}},[t._v("#")]),t._v(" 对象转基本类型：")]),t._v(" "),a("ul",[a("li",[t._v("调用 Symbol.toPrimitive，转成功就结束")]),t._v(" "),a("li",[t._v("调用 valueOf，转成功就结束")]),t._v(" "),a("li",[t._v("调用 toString，转成功就结束")]),t._v(" "),a("li",[t._v("报错")])]),t._v(" "),a("h2",{attrs:{id:"四则运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四则运算符"}},[t._v("#")]),t._v(" 四则运算符：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("只有当加法运算时，其中一方是字符串类型，就会把另一个也转为字符串类型")])]),t._v(" "),a("li",[a("p",[t._v("其他运算只要其中一方是数字，那么另一方就转为数字")])]),t._v(" "),a("li",[a("p",[t._v("其他基本类型转为 数字")])]),t._v(" "),a("li",[a("p",[t._v("总结： Number类型会先调用valueOf(), String类型会先调用toString(),  如果结果是原始值，则返回原始值，否则继续用toString 或 valueOf(),继续计算，如果结果还不是原始值，则抛出一个类型错误;")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);