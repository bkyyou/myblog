# 2 webpack的核心概念

## enrty 和 output

### entry

* entry 是 webpack 的入口文件， 可以是多个

* 写法
```js
module.exports = {
	// 1
	entry: './app.js',

	// 2
	entry: ['./app.js', './app2.js'], // 最后打包还是会打包成一个文件

	// 3
	// 写一个的时候， 通常是单页面的写法， 单页面的入口文件
	// 写两个和两个以上，会有多入口文件， 多页面
	entry： {  
		app: './app.js',  
		app2: './app2.js'
	}
}
```

### output

* 写法
```js
module.exports = {
	output: {
		// 1
		filename: 'bundle.js', // 出口文件即为 bundle.js

		// 2 
		filename: '[name].[hash].js' // app.khg12khsad123.js  常用

		// 3
		filename: '[name].[hash:6][id][chunkhash].js'  // 6 代表截取hash 的前六位。也可以截取别的长度

		// 4
		filename: './js/[name].[hash:6][id][chunkhash].js' // 表示 dist 文件夹下的 js 文件夹 下的 js 文件

		// 5
		path:__dirname + '/src/mybundle' , // pathname只能接受绝对路径  __dirname表示当前项目绝对路径
		filename:'[name].[hash:6].js' // hash 随机字符串，取N位
	}
}
```
> **path只能接受绝对路径** 

## loader

### 作用
* webpack 自身只处理 javascript ， 所以对别的资源需要引入 需要的 loader
* webpack 只负责打包， 相关的编译等操作， 需要loader
* loader 本质是一个方法， 使用时大多需要额外的安装

### 写法

```js
module.exports = {
	mode: 'development',
	entry: {

	},
	output: {

	},
	module: {
		// 1
		rules: [
			{
				test: /.js$/,  // 代表 定义的 loader 处理什么 文件， 固定写法
				exclude: /node_modules/,  // 除去 某某 文件 
				include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]， // 包括 某某 文件
				// use 可以是一个 数组 ， 数组中的每一项 代表 一个 loader ， 可以是 字符串， 可以是对象
				use: {
					loader: 'babel-loader',
					options: {
						// 配置项
					}
				}
			}
		],

		// 2
		rules: [
			test: /.js$/,
			loader: 'babel-loader',
			options: {}
		]
	}
}

```

### 常用的 loader
* css-loader , style-loader 等 css处理loader
* url-loader imgage-loader 等 图片字体文件等资源的loader
* less-loader sass-loader babel-loader 等编译loader
* 还有语法糖 loader  eg： vue-loader

## plugin 

### 作用
* plugin 是 webpack 额外扩展一些插件式的额外功能是由plugin定义， 帮助webpack优化代码， 提供功能
*	Plugin 有的是webpack自带， 有的需要额外安装

### 写法
```js
plugins：[
	new webpack.HotModuleReplacementPlugin()  // 热更新插件
]
```
### 常用的plugins
* commonsChunkPlugin, uglifyjsWebpackPlugin,PurifyCss 等优化文件体积的插件。
* HtmlWwbpackPlugin  HotModuleReplacementPlugin 等额外功能的插件打包结果自动引入 html

