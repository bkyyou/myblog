# 27 webpack 工程化实践

## eslint

### eslint 相关包
* eslint + eslint-loader  // 核心内容
* eslint-plugin-html   // 检查html 中script标签下的 js
* eslint-friendly-formatter   // 友好提示
* eslint-config-stand  // 代码风格标准

#### eslint-loader

* 配置
```javascript
rules: [
	{
		test: '\.js$',
		loader: 'eslint-loader',
		options: {
			formatter: require('eslint-friendly-formatter')
		}
	}
]
```
* 自定义eslint规范 新建 .eslintrc.js
配置
```javascript
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
		// 灵活调控
		'generator-star-spacing': process.env.NODE_ENV === 'production'?'on':'off'
  }
}
```

## 一些特别的plugin 、 loader
1. webpack.DefinePlugin
* 作用： 定于全局变量
* 配置
```javascript
plugins: [
	// 定于全局变量 可以代替环境变量。 TODO 环境变量
	new webpack.DefinePlugin({
		'process.env': require('../config/dev.env')
	})
]
```
>简化命令行输入的命令

2. webpack.NoEmitOnErrorPlugin 
* 作用： 屏蔽错误。 （在打包过程中出现不致命的错误会屏蔽）
* 配置
```javascript
// 开发模式下使用， 方便调试
plugins: [
	new webpack.NoEmitOnErrorsPlugin()
]
```

3. webpack.ProvidePlugin
* 作用： 提供全局的模块
* 配置
```javascript
plugins: [
  new webpack.ProvidePlugin({
    Regular: 'Regular',
    $: 'jquery'
  })
]
```

4. copy-webpack-plugin
* 作用： 提供静态拷贝
* 配置
```javascript
// copy custom static assets
new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../static'),  // 来源
    to: config.build.assetsSubDirectory,
    ignore: ['.*'] // 都不忽略
  }
])
```

## 项目问题解决

### 如果是要对模块内容的处理
loader 是 第一解决方案

### 如果要增加一些特殊的功能
可以自定义增加插件

### 项目上的打包简化， 可变性配置等
通过编写相应的操作函数

## 插件编写

* 编写
```javascript
class myplugins{
  constructor(options){
    this.options = options || {
      // 默认配置
    }
  }
  // 通过complier监听打包进程
  apply(complier){
    // 介绍几个过程
    // emit 打包完成，即将输出
    // complier.hooks.emit
    // done 已经输出为dist目录
    // complier.hooks.done

    // 属性
    // complier.options  webpack默认配置，和自己定义的配置合并之后的配置。
    // complier.context  绝对路径

    // webpacks 是通过 compiler.plugin 监听的
    // hooks 是webpack4 的方式
    complier.hooks.emit.tap('myplugins', function(compilation){
      // 每个周期的compilation都会不同
      // compilation.assets 打包的结果， 字符串。
    })
  }
}
```
* 配置
```javascript
plugins: [
  new myplugins()
]
```

* webpack 调用过程
> 插件暴漏出去类， 在配置中实例化， 实例化之后，会传给webpack的插件集。<br/>
> 收集注册之后会依次调用插件的apply方法。

## 将所有使用staic文件， 替换成文件服务器的位置
```javascript
const path = require('path');
const fs = require('fs');
// fs.readFile 读取文件， 是异步操作
// 直接使用readFile 
// fs.readFile('./xx/xx.js', fucntion(){
// })
// node 在设计过程中没有考虑promise， 需要使用util工具
// 将回调的形式，包装成promise形式
const rendFileAsync = require('util').promisify(fs.readFile);
class AddStaticServer{
  constructor(options){
    this.options = options || {
      serverPath: '//kc.xxx.xxx'
    }
    this.serverPath = this.options.serverPath;
  }
  // 核心使用的三个周期：make emit  done
  apply () {
    compiler.hooks.done.tap('AddStaticServer', compilation => {
      let context = compiler.options.context;
      let pulicPath = path.resolve(context, 'dist');
      // assets 所有打包出来的文件名
      compilation.toJson().assets.forEach(ast => {
        let {dir ,base, ext} = path.parse(ast.name);
        // ext 后缀名 ftl 相当于 jsp
        readFileAsync(path.resolve(pulicPath, dir ,base)).then(function(cnt){
          cnt = cnt.replace(/\/staic\/css/g, this.serverPath).replace(/\/staic\/js/g, this.serverPath);
          writeFileAsync(path.resolve(publicPath, dir, base), cnt)
        })
      })
    })
  }
}
```

## 多入口
> 把webpack 当成一个程序。 <br/>

问题描述： 当多入口时手动的配置入口文件比较麻烦
解决方式： 动态配置entry

* 配置
```javascript
{
  entry: utils.entries()
}
```

* utils
```javascript
const PAGE_PATH = [path.resolve(__dirname, './src/pages/')];
function entries () {
  let entryFies = PAGE_PATH.reduce((pre, path) => [...pre, ...glob.sync(path + '/*/*.js')], []);
  let map = {};
  entryFies.forEach((filePath) => {
    // 对于文件名进行解析， 提取出页面名
    let filename = generateFileName(filePath);
    map[filename] = filePath;
    // babel-polyfill  babel-polyfill 有两种写法， 一种引入， 一种在入口文件进行配置
  })
  return map;
}
``` 