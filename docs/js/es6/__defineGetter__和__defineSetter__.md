# 关于__defineGetter__ 和__defineSetter__的说明

Getter是一种获取一个属性的值的方法，Setter是一种设置一个属性的值的方法。可以为任何预定义的核心对象或用户自定义对象定义getter和setter方法，从而为现有的对象添加新的属性。 有两种方法来定义Getter或Setter方法：

在对象初始化时定义  在对象定义后通过Object的__defineGetter__、__defineSetter__方法来追加定义  在使用对象初始化过程来定义Getter和Setter方法时唯一要做的事情就是在getter方法前面加上“get”，在setter方法前面加上“set”。 还有一点要注意的就是getter方法没有参数，setter方法必须有一个参数，也就是要设置的属性的新值。 例如：

```js
o = {     
    value:9,     
    get b() {return this.value;},     
    set setter(x) {this.value = x;}     
} 
```

在对象定义后给对象添加getter或setter方法要通过两个特殊的方法__defineGetter__和__defineSetter__。这两个函数要求第一个是getter或setter的名称，以string给出，第二个参数是作为getter或setter的函数。
例如我们给Date对象添加一个year属性：

```js
Date.prototype.__defineGetter__('year', function() {return this.getFullYear();});     
Date.prototype.__defineSetter__('year', function(y) {this.setFullYear(y)});     

var now = new Date;     
alert(now.year);     
now.year = 2006;     
alert(now);   

```

至于采用哪种形式主要取决于个人的编程风格，采用第一种形式结构紧凑，更容易理解。但是假如你想在对象定义以后再添加Getter或Setter，或者这个对象的原型不是你写的或是内置对象，那么只好采用第二种方式了。 下面是一个为Mozilla浏览器添加innerText属性的实现：

```js
HTMLElement.prototype.__defineGetter__      
(     
   "innerText",function()     
   //define a getter method to get the value of innerText,      
   //so you can read it now!      
   {     
      var textRange = this.ownerDocument.createRange();     
      //Using range to retrieve the content of the object     
      textRange.selectNodeContents(this);     
      //only get the content of the object node     
      return textRange.toString();     
      // give innerText the value of the node content     
   }     
); 
```

还可以使用 Object.defineProperty()和defineProperties() 进行定义

