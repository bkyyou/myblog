# promise源码分析

```js
function MyPromise(execute) {
	var self = this;
	self.resolvedCallback = [];

	function resolve(data) {
		setTimeout(() => {
			// console.log('self.data')
			console.log(self)
			self.data = data;
			self.resolvedCallback.forEach(callback => callback());
			// console.log('end')
		});
	}

	execute(resolve.bind(self));
}

/*
	callback = res => {
		console.log(res);
		return 3;
	}

*/

MyPromise.prototype.then = function (callback) {
	var self = this;
	return new MyPromise(resolve => {
		console.log('push');
		self.resolvedCallback.push(function () {
			var result = callback(self.data);
			if (result instanceof MyPromise) {
				result.then(resolve);
			} else {
				resolve(result);
			}
		})
	})
}

new MyPromise(resolve => {
	resolve(1);
})
	.then(res => {
		console.log(res);
		// return 2;
		return new MyPromise(resolve => { // p2
			resolve(2);
		})
	})
	.then(res => {
		console.log(res);
		return 3;
	})
// .then(res => {
// 	console.log(res);
// })


// setTimeout(() => {
// 	console.log(1);
// });

// setTimeout(() => {
// 	console.log(2);
// });

// setTimeout(() => {
// 	console.log(3);
// });

// setTimeout(() => {
// 	console.log(4);
// });

// setTimeout(() => {
// 	console.log(5);
// });


```

https://zhuanlan.zhihu.com/p/54403706