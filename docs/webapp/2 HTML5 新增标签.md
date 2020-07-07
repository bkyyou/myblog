# 2 HTML 的新特性

## HTML5新增标签
* header 网站头部
* nav   导航栏
* section 	类似div
* aside	文件侧栏
* footer	网站脚本

## HTML5 新增表单输入框的类型
* type="email"  限制用户必须输入email类型。
* type="url"  限制用户必须输入url类型。
* type="data"  自动生成一个时间控件。
* type="number"  限制用户必须输入number类型。
* type="range"  产生一个进度条的表单
* type="search"  产生一个搜索意义的表单。
* type="color" 	生成一个颜色选择表单。

## HTML5 新增表单输入框的属性
* placeholder		占位文本
* autofocus		自动获取焦点
* autocomplete		提交一次后下次自动补全
* multiple		配合file控件实现多选

## HTML5 制图 & Canvas

简单的使用
```javascript
var c = document.querySelect('canvas');
var ctx = c.getContext('2d');
ctx.font = '30px Arial';
ctx.fillText('htllo world', 10, 50);
```

## HTML5 多媒体 & video/audio
```html
<video src="" width="50%" height="50%">
	<source src="" type="video/mp4">
	<source src="" type="video/mp4">
	<source src="" type="video/mp4">
	您的浏览器不支持video标签，请升级您的浏览器
</video>
```

## HTML 存储技术

## HTML5 的拖拽释放功能
* 定义
抓住一个对象拖拽到另一个位置

在拖拽目标上会触发的事件
* ondragstart		源对象开始拖动元素时触发
* ondrag		源对象正在拖动时触发
* ondrageend 		源对象完成拖动后触发

在目标对象上触发的事件
* ondragenter		目标对象进入其容器范围内时触发
* ondragover 		目标对象进入源对象范围内拖动时触发
* ondragleave	  源对象离开容器范围内时触发
* ondrop		释放鼠标键时触发

> 注意 <br>
> ondragover 默认事件 会阻止 ondrop 的触发， 需要使用 event.preventDefault()来阻止默认事件。