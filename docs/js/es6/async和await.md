# async和await 

## async 函数

* 一个语法糖 使异步操作更简单
* 返回值 返回值是一个 promise 对象
	* return 的值是promise resolved 时候的value
	* Throw 的值是promise rejected时候的reason

```js
async function test() {
	return 1;
}

let p = test();

console.log('p', p); // p, promise 实例 resolved 状态
p.then(function(data) {
	console.log(data); // 1
})
```

```js
async function test() {
	throw new Error();
}

let p = test();

console.log('p', p); // p, promise 实例 rejected 状态
p.catch(function(data) {
	console.log(data); // error
})
```

### await 
* 只能出现在 async 函数内或最外层
* 等待一个 promise 对象的值
* await 的 promise 状态为 rejected ，后续执行中断

> await 其实 是 yield的语法糖， yield 其实  也有 return的意思。

![await返回的值](./imgs/async.png)

```js
async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2() {
	return Promise.resolve().then(_ => {
		console.log('async2 promise');
	});
}

async1();
```

```js
async function f() {
	await Promise.reject('error');  // 后续代码不会执行
	console.log(1);
	await 100;
}

async function f() {
	await Promise.reject('error').catch(err => {
		// 处理异常
	});  // 后续代码不会执行
	console.log(1);
	await 100;
}

async function f() {
	try {
		await Promise.reject('error');
	} catch (e) {
		// 处理异常
	} finally {

	}
	console.log(1);
	await 100;
}


```

## async 实现原理

Generator + 自动执行器

```js
async function example() {

}

// 相当于

function example() {
	return spawn (function* () {

	})
}
```