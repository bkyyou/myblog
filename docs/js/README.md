* 原生api
  1. Object.defineProperty()和defineProperties()

* 拖拽
https://blog.csdn.net/weixin_44134551/article/details/115126591


基本数据类型在实例修改时会直接在实例上创建该属性，而不会在原型上修改；而引用类型在实例修改时会改变原型对象上的属性。

* async await 注意事项

async await 同步执行的代码只要在有 async 和 await 的 函数中才是同步的, 没有 async 和 await 不会等有 async 和 await 函数执行完在执行

```js
const testfun1 = async () => {
  console.log('testfun1'); // 1
  await delay(1000);
  console.log('testfun2'); // 3
}

const testfun2 =  () => {
  testfun1();
  console.log('testfun3'); // 2
}
testfun2();
```

