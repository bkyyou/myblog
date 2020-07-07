# hasOwnProperty,instanceof,typeof

## hasOwnProperty 

Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（**非继承**）属性（和方法）。

### 判断自身属性是否存在

```js
var o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');  // true
changeO();
o.hasOwnProperty('prop');  // false
```

### 判断自身属性与继承属性

```js
function foo() {
  this.name = 'foo'
  this.sayHi = function () {
    console.log('Say Hi')
  }
}

foo.prototype.sayGoodBy = function () {
  console.log('Say Good By')
}

let myPro = new foo()

console.log(myPro.name) // foo
console.log(myPro.hasOwnProperty('name')) // true
console.log(myPro.hasOwnProperty('toString')) // false
console.log(myPro.hasOwnProperty('hasOwnProperty')) // fasle
console.log(myPro.hasOwnProperty('sayHi')) // true
console.log(myPro.hasOwnProperty('sayGoodBy')) // false
console.log('sayGoodBy' in myPro) // true
```

> for in 循环对象的所有枚举属性 (包括原型链上的属性)， for of 循环对象的所有枚举属性(不包括原型链上的属性)，循环数组结果也不一样。

## instanceof

在js代码中，我们经常使用 instanceof 就是判断一个实例是否属于某种类型，instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型

### 简单实例：
```
function Foo(){}
function Bar(){}
Bar.prototype = new Foo()
let obj = new Bar()
obj instanceof Bar //true
obj instanceof Foo //true
```

### 复杂实例
```
Number instanceof Number //false
String instanceof String //false
Object instanceof Object //true
Function instanceof Function //true
Function instanceof Object //true
 
function Foo(){};
Foo instanceof Function //true
Foo instanceof Foo //false
```

判断引用数据类型
```js
/**
 * js 判断数据类型
 * 基础类型 typeof string number boolean undefined null
 *
 * 引用类型 基础类型都可以使用 vue中使用这种方法判断数据类型
 * 使用: Object.prototype.toString.call(要判断的数据)
 *
 * 判断数组还可以
 * arr instanceof Array
 *
 */

 console.log(Object.prototype.toString.call(1)); // [object Number]
 console.log(Object.prototype.toString.call('abc')); // [object String]
 console.log(Object.prototype.toString.call(false)); // [object Boolean]
 console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
 console.log(Object.prototype.toString.call(null)); // [object Null]
 console.log(Object.prototype.toString.call([12,32,43,21,32,12])); // [object Array]
 console.log(Object.prototype.toString.call({x:1,y:3})); // [object Object]
 console.log(Object.prototype.toString.call(new Date())); // [object Date]
 console.log(Object.prototype.toString.call(/abc/)); // [object RegExp]
```

### typeof
```js
typeof 1 // number
typeof NaN // number
typeof '1' // string
typeof true // boolean
typeof underfined // underfined
typeof null // object
typeof function // function
```