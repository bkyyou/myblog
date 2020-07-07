# 8 css3 弹性盒子模型与移动端事件

## 移动端事件

### touchstart 和 touchmove
```html
<h1>移动端事件</h1>
<button 
		class="touchstart" 
		id="touchstart">
				touchstart
</button>
<div class="con" id = "con">
		<p></p>
</div>
```
```js
// 阻止浏览器默认事件 
// document.addEventListener("touchstart",(e)=>{
//     e = e || event;
//     e.preventDefault();
// })

// touchstart 与 click
var btn = document.getElementById("touchstart");
btn.addEventListener("touchstart", function(e) {
		console.log(e)
})
// btn.addEventListener("click", function(){
//     console.log("click")
// })

// touchmove
var con = document.getElementById("con");
var p = document.querySelector("p");
// 事件节流
let i = 1;
let time = null;
con.addEventListener("touchmove",(e) => {
		if(!time){
				time = setTimeout(()=>{
						p.innerHTML = e.target.tagName + " , " + i++;
						time = null;
				},1000)
		}
})
```
> touchstart 在使用时，可能会让浏览器认为你是在选中或者拖拽元素， 所以一般会禁止默认事件

### event 中常用的属性
* changedTouches
从上一次触摸事件到此事件过程中状态发生改变的触点
* targetTouches
获取所有触点，监听到每根手指的移动。 必须起始于当前元素
* touches
获取所有触点，监听到每根手指的移动。 接触 触摸屏 的 所有 touches
