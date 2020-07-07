# 常识

## 小程序中常用的标签
```html
<text></text>
<view></view>
<block></block>
```

## 小程序中的单位 rpx
小程序中将 屏幕等分成 750 份
占用屏幕 100% 就是  750rpx
占用屏幕 50% 就是  375rpx

## 实时更新数据
```js
this.setData({
	account: event.detail.value
})
```

## 小程序中全局的函数 获取 变量
* getApp() 获取小程序中的唯一的  APP 实例
* getCurrentPage() 获取页面栈数据
* wx.canIUse() 是否可以使用某方法