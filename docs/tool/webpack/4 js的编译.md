# 4 js的编译

先介绍两个有用的插件，方便后面的学习
* clean-webpack-plugin
	* 清除之前打包的内容
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 配置
module.exports ={
	plugins: [
		new CleanWebpackPlugin()
	]
}
```
* html-webpack-plugin
	* 以某个文件为模板，将打包之后的js 插入 模板中
```js
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	]
}
```

## es6 的编译

### 下载 loader 

* 下载 babel-loader @babel/core

```js
// 使用 bable-loader 编译 es6 语法
// babel-loader 是利用 @babel/core 进行编译的
npm install babel-loader @babel/core -save-dev
```

* 还需要下载 babel-preset (只识别语法)
	* 作用
	presets 是存储 js 不同标准的插件， 通过使用正确的 presets， 告诉 babel 按照哪个规范编译

	* 常见 的规范
		* es2015
		* es2016
		* es2017
		* env (通常采用)
			需要安装 @babel/preset-env  npm i @babel/preset-env -save-dev
		* babel-preset-stage

> ***bable-preset 只识别 es6 语法，不识别 es6 方法*** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   这是一个坑,需注意

```js
npm install @babel/preset-env -save-dev
```

### babel-preset 配置参数
```js
module.exports = {
	module: {
		rules: [
			{
				test: /.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							{
								// 主要参数
								targets: {
									node: '10', // 以 node 设置
									browsers: ['>1%'], // 以 全部浏览器 设置
									chrome: '59' // 以某个浏览器进行设置
								},
								spec: false, // 启用更符合规范的转换，但速度会更慢，默认为 false
								loose: false, // 是否使用 loose mode，默认为 false
								modules: false, // 将 ES6 module 转换为其他模块规范，可选 "adm" | "umd" | "systemjs" | "commonjs" | "cjs" | false，默认为 false
								debug: false, //启用debug，默认 false
								include: [], // 一个包含使用的 plugins 的数组
								exclude: [], // 一个包含不使用的 plugins 的数组
								useBuiltIns: false // 为 polyfills 应用 @babel/preset-env ，可选 "usage" | "entry" | false，默认为 false
							}
						]
					}
				}
			}
		]
	}
}
```

### 配置
```js
module.exports = {
	mode: 'development',
	entry: {

	},
	output: {

	},
	module: {
		rules: [
			// 1 
			{
				test: /.js$/,
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env',
							{
								targets: {
									browsers: ['>1%']
								}
							}
						],
					],
				}
			}
			// 2
			{
				test: /.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env',
								{
									targets: {
										browsers: ['>1%']
									}
								}
							],
						],
					}
				}
			}
		]
	},
	plugins:[
	]
}

```