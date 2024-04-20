(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{1054:function(t,n,a){"use strict";a.r(n);var s=a(10),v=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_7-生命周期和运行机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-生命周期和运行机制"}},[t._v("#")]),t._v(" 7.生命周期和运行机制")]),t._v(" "),n("h2",{attrs:{id:"小程序生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序生命周期"}},[t._v("#")]),t._v(" 小程序生命周期")]),t._v(" "),n("p",[t._v("App(Object object)\n注册小程序。 接收一个 object 参数， 指定小程序的声明周期回调等")]),t._v(" "),n("p",[n("strong",[t._v("App() 必须在 app.js 中调用，必须调用且只能调用一次。 不然会出现无法预料的后果。")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("必填")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("onLanunch")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("生命周期回调-监听小程序初始化")])]),t._v(" "),n("tr",[n("td",[t._v("onShow")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("生命周期回调-监听小程序启动或切前台")])]),t._v(" "),n("tr",[n("td",[t._v("onHide")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("生命周期回调-监听小程序切后台")])]),t._v(" "),n("tr",[n("td",[t._v("onError")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("错误监听事件")])]),t._v(" "),n("tr",[n("td",[t._v("onPageNotFound")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("页面不存在监听函数")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("onPageNotFound 在编译旁边的 input 可以演示")])]),t._v(" "),n("blockquote",[n("p",[t._v("关于小程序前后台的定义和小程序的运行机制， 需参考运行机制章节")])]),t._v(" "),n("p",[t._v("AppObject getApp(Object object)\n获取到小程序全局唯一的 App 实例")]),t._v(" "),n("blockquote",[n("p",[t._v("注意：\n不要在定义于 App() 内的函数， 或调用 App 前调用\tgetApp(), 使用 this 就可以拿到 app 实例\n通过 getApp() 获取实例后 ，不要私自调用生命周期函数")])]),t._v(" "),n("h2",{attrs:{id:"页面生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面生命周期"}},[t._v("#")]),t._v(" 页面生命周期")]),t._v(" "),n("p",[t._v("Page(Object object)\n注册小程序的一个页面。 接受一个 object 参数， 其指定页面的初始数据、生命周期回调、 事件处理函数等。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("必填")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("页面的初始数据")])]),t._v(" "),n("tr",[n("td",[t._v("onLoad")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("生命周期回调-监听页面加载")])]),t._v(" "),n("tr",[n("td",[t._v("onShow")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("生命周期回调-监听页面显示")])]),t._v(" "),n("tr",[n("td",[t._v("onReady")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("生命周期回调-监听页面初次渲染完成")])]),t._v(" "),n("tr",[n("td",[t._v("onHide")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("生命周期回调-监听页面隐藏")])]),t._v(" "),n("tr",[n("td",[t._v("onUnload")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("生命周期回调-监听页面写在")])]),t._v(" "),n("tr",[n("td",[t._v("onPullDownRefresh")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("监听用户下拉动作")])]),t._v(" "),n("tr",[n("td",[t._v("onReachBottom")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("页面上拉触底事件的处理函数")])]),t._v(" "),n("tr",[n("td",[t._v("onShareAppMessage")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("用户点击右上角转发")])]),t._v(" "),n("tr",[n("td",[t._v("onPageScroll")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("页面滚动触发事件的处理函数")])]),t._v(" "),n("tr",[n("td",[t._v("onResize")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("页面尺寸改变时触发 ， 详见 相应显示区域变化")])]),t._v(" "),n("tr",[n("td",[t._v("onTabItemTap")]),t._v(" "),n("td",[t._v("function")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("当前是 tab 页时，点击 tab 时触发")])])])]),t._v(" "),n("p",[t._v("跳转")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/pages/logs/logs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 跳转 "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳转")]),t._v("\nwx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/logs/logs'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重定向 会触发页面卸载 ")]),t._v("\nwx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirectTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/logs/logs'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// demo.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\twx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showShareMenu")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPullDownRefresh")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page onPullDownRefresh'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当数据加载完之后")]),t._v("\n\t\twx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPullDownRefresh")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以注销 使用 showShareMenu 方法也是可以的实现分享")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// onShareAppMessage: function() {")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"小程序的运行机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小程序的运行机制"}},[t._v("#")]),t._v(" 小程序的运行机制")]),t._v(" "),n("p",[t._v("TODO")]),t._v(" "),n("p",[t._v("onSaveEXitState 当离开小程序保留一些数据")])])}),[],!1,null,null,null);n.default=v.exports}}]);