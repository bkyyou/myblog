(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{939:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3-fs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-fs"}},[t._v("#")]),t._v(" 3.fs")]),t._v(" "),s("h2",{attrs:{id:"existssync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#existssync"}},[t._v("#")]),t._v(" existsSync")]),t._v(" "),s("h3",{attrs:{id:"fs-existssync-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-existssync-path"}},[t._v("#")]),t._v(" fs.existsSync(path)")]),t._v(" "),s("ul",[s("li",[t._v("path < string>  | < Buffer> | < URL>")]),t._v(" "),s("li",[t._v("返回: < boolean>")])]),t._v(" "),s("blockquote",[s("p",[t._v("fs.existsSync() 不使用回调。")])]),t._v(" "),s("h2",{attrs:{id:"readfilesync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readfilesync"}},[t._v("#")]),t._v(" readFileSync")]),t._v(" "),s("h3",{attrs:{id:"fs-readfilesync-path-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-readfilesync-path-options"}},[t._v("#")]),t._v(" fs.readFileSync(path[, options])")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("* path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。\n* options <Object> | <string>\n  * encoding <string> | <null> 默认值: null。\n  * flag <string> 参见文件系统 flag 的支持。 默认值: 'r'。\n* 返回: <string> | <Buffer>\n")])])]),s("blockquote",[s("p",[t._v("如果指定了 encoding 选项，则此函数返回字符串。 否则，返回 buffer。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mouldVue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("../src/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("tsn"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/mould/Index.vue")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("encoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("与 fs.readFile() 相似，当路径是目录时， fs.readFileSync() 的行为是特定于平台的。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 macOS、Linux 和 Windows 上：")]),t._v("\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<目录>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [Error: EISDIR: illegal operation on a directory, read <目录>]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 FreeBSD 上：")]),t._v("\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<目录>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => <data>")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);