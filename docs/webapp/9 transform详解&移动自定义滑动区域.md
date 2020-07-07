# 9 transform详解&移动自定义滑动区域

## transform详解

```css
*{
	/* 阻止默认事件 */
	touch-action: none; 
}
```

### transform2D

> transform2D 执行顺序
先写的后执行

### transform3D

```css
*{
	/* 景深 加载 */
	perspective: 100px;

	/* 中心点 */
	transform-origin: 10px 10px;
}
```

### 属性 transform-style
默认值 是 flat， 在 父级有 3d 转换的时候， 子集不支持 3D 转换的
默认值 是 preserve-3d 在 父级有 3d 转换的时候， 子集保留 3D 转换的

> 面试题  
var a = {} 和 Object.create(null)
如果这个对象需要继承一些属性，继承原型上的方法，属性，用字面量 或者 是构造函数， 但如果说我只想要一个纯净的对象时，
相当于 省略了 object.hasOwnProperty(key) 这 一步判断 
```js
for (const key in object) {
	if (object.hasOwnProperty(key)) {
		const ele = object[key]
	}
}
```

> 设置属性时，需要定义 WebkitTransform

### 制作一个 transform 插件

## 移动自定义滑动区域
