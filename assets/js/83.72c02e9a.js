(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1047:function(t,_,v){"use strict";v.r(_);var a=v(10),d=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_13-微信接入支付"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-微信接入支付"}},[t._v("#")]),t._v(" 13.微信接入支付")]),t._v(" "),_("p",[t._v("最常规的普通模式，适用于有自己开发团队或者外包开发商的直连商户收款。")]),t._v(" "),_("h2",{attrs:{id:"开通支付流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开通支付流程"}},[t._v("#")]),t._v(" 开通支付流程")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("获取到小程序开发者账号后， 进行微信认证。微信认证指引 : http://mp.weixin.qq.com/debug/wxadoc/introduction/#小程序申请微信认证")])]),t._v(" "),_("li",[_("p",[t._v("小程序开通微信支付，即申请或复用微信支付商户号， 申请完小程序后，登录小程序后台（mp.weixin.qq.com）。 点击左侧导航栏的微信支付， 在页面中进行开通。（开通申请要求小程序已发布上线）")])])]),t._v(" "),_("p",[_("img",{attrs:{src:v(668),alt:"eg"}})]),t._v(" "),_("p",[t._v("点击开通按钮后，有两种方式可以获取微信支付能力，新申请微信支付商户号或绑定一个已有微信支付商号，请根据你的业务需要和具体情况选择，只能二选一。开通指引：http://kf.qq.com/faq/140225MveaUz161230yqilby.html")]),t._v(" "),_("p",[_("img",{attrs:{src:v(669),alt:"eg"}})]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("商户在微信公众平台或开放平台提交微信支付申请，微信支付工作人员审核资料无误后开通相应的微信支付权限。微信支付申请审核通过后，商户在申请资料填写的邮箱中收取到由微信支付小助手发送邮件，此邮件包含开发时需要使用的支付账户信息。")])]),t._v(" "),_("h2",{attrs:{id:"调起支付流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调起支付流程"}},[t._v("#")]),t._v(" 调起支付流程")]),t._v(" "),_("p",[t._v("http://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=5")]),t._v(" "),_("p",[t._v("调用统一下单接口进行订单生成")]),t._v(" "),_("p",[t._v("将关键信息返回给微信小程序端口后使用支付接口")]),t._v(" "),_("p",[t._v("wx.requestPayment(Object, Object)")]),t._v(" "),_("p",[t._v("发起微信支付。了解更多，需查看微信支付接口文档")]),t._v(" "),_("p",[t._v("参数 [Object, object]")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("timeStamp")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("时间戳，从 1970年1月1日 00：00：00至今的秒数，即当前的时间。")])]),t._v(" "),_("tr",[_("td",[t._v("nonceStr")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("随机字符串，长度为 32 个字符一下")])]),t._v(" "),_("tr",[_("td",[t._v("package")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v('统一下单接口返回的 prepay_id 参数值，提交格式如 prepay_id=""')])]),t._v(" "),_("tr",[_("td",[t._v("signType")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("MD5")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("签名算法")])]),t._v(" "),_("tr",[_("td",[t._v("paySign")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("签名, 具体签名方案参见 小程序支付接口文档")])]),t._v(" "),_("tr",[_("td",[t._v("scuccess")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用成功的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用失败的回调函数")])]),t._v(" "),_("tr",[_("td",[t._v("complete")]),t._v(" "),_("td",[t._v("function")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("接口调用结束的回调函数 （调用成功，失败都会执行）")])])])]),t._v(" "),_("p",[t._v("objcet.signType 的合法值\n值  | 说明 | 最低版本\nMD5 | MD5 |\nHMAC-SHA256 | HMAC-SHA256")]),t._v(" "),_("blockquote",[_("p",[t._v("回调接口里面有支付成功， 获取之后失败提示， 失败有失败原因，比如余额不足等。")])])])}),[],!1,null,null,null);_.default=d.exports},668:function(t,_,v){t.exports=v.p+"assets/img/13.1.f9a254c8.png"},669:function(t,_,v){t.exports=v.p+"assets/img/13.1.2.0532bb7a.png"}}]);