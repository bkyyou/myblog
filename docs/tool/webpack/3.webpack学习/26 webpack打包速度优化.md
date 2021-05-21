# 26 webpack 打包速度优化

## 打包结果分析

>chunks </br>
>chunks即代码块，即webpack把js分割成几块代码 </br>
>module </br>
>模块，每个文件，即一个模块，每个图片都算一个模块

### 如何获取可视化的打包结果分析

#### 官方版本

>1. Mac: webpack --profile --json >stats.json 
>2. Window: webpack --profile --json | Out-file 'stats.json' -Encoding OEM

#### 可视化生成

* 登录网址： webpack.github.io/analyse
* 上传生成json文件

#### 社区版本

>webpack-bundle-analyzer

1. 安装并引入插件
```javascript
const wba=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
```

2. 配置
```javascript
plugins:[
  new wba()
]
```
3. 打包
每次打包都会弹出一个可视化的页面

## css提取

### extract-text-webpack-plugin
通用版本兼容webpack4
可以使用 extract-text-webpack-plugin@next

###  mini-css-extract-plugin

> * 使用mini-css-extract-plugin 不能使用 style-loader
> * 将style-loader 替换成 MiniCssExtractPlugin.loader

* 引入
```javascript
const MiniCssExtractPlugin = reuqire('mini-css-extract-plugin')
```
* 配置
```javascript
plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].css'
  })
]
```

## 优化打包速度

### 可以优化的点

* 项目本身
1. 减少依赖嵌套的深度。
2. 使用尽可能少的处理。

* webpack层面
1. Dll 处理
2. 通过include减少loader范围
3. HappyPack
4. Ugify 优化
5. 减少resolve, sourcemap, cache-loader, 用新版本的node 和 webpack

### dll 处理
>把不会更改的代码提前打包好

* 创建webpack.dll.js， 与webpack.config.js同级
```javascript
const webpack=require('webpack');
module.exports={
  entry:{
  	jquery:["jquery"], // 必须是一个数组
  	loadsh:["loadsh"]
  },
  output:{
    path:__dirname+"/src/dll",
    filename:"./[name].js",
    //引用名 引用的时候用名字
    library:'[name]'
  },
  plugins:[
     new webpack.DllPlugin({
      path:__dirname+"/src/dll/[name].json",
      name:"[name]"
     })
  ]  
}
```
>因为webpack本身能识别js，所以不用配置loader <br/>
>命令：webpack --config webpack.dll.js

* 在webpack.config.js 中进行配置
```javascript
plugins: [
  new webpack.DllReferencePlugin({
    manifest: require('./src/dll/jquery.json') // 与提前打包好的json进行关联
  }),
  new webpack.DllReferencePlugin({
    manifest: require('./src/dll/loadsh.json')
  }),
]
```

### 通过include减少loader范围
>下载第三方资源存在es6代码，但是webpack并没有处理，可以单独指定某一个文件
```javascript
rules: [
  {
    test: /\.js$/,
    loader: 'babel-loader'
    include: [resolve('src'), resolve('node_module/window')]
  }
]
```

### HappyPack
> 将 js 单线程转换为 多线程

* 将代替的loader改写成 
以 babel-loader 为例
```javascript
rules: [
  {
    test: /.js$/,
    loader: 'happypack/loader?id=happyBabel',
    include: [resolve('src')]
  }
]
```

* 引入
```javascript
const HappyPack = rquire('happypack');
// os node 自带
const os = require('os');
// os.cpus().length // 可以显示出来电脑又几个cpu
// 新建线程池
const happypackThreadPool = HappyPack.ThreadPoolZ({
  size: os.cpus().length, // 工作进程数量
})
```

* 配置
```javascript
plugins: [
  // 没代替一种loader，就 new 一个 HappyPack, 指定id
  new HappyPack({
    id: happyBabel,
    loaders: [
      {
        // cacheDirectory 是否缓存
        loader: 'babel-loader?cacheDirectory="true"'
      }
    ],
    // 指定线程池
    threadPool: happypackThreadPool
  })
]
```

### Ugify 优化

> webpack4已经移除

* webpack3 配置

```javascript
new UglifyJsPlugin({
  uglifyOptions: {
    compress: {
      warnings: false
    }
  },
  sourceMap: config.build.productionSourceMap,
  // 主要是配置这两个 开启压缩缓存
  parallel: true,
  cache:true
})
```

### 减少resolve, sourcemap, cache-loader , 用新版本的node 和 webpack

cache-loader <br/>
大部分的loader都有缓存, 作用不大, 以图片为例

```javascript
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: ['cache-loader', 'url-loader'],
  options: {
    limit: 10000,
    name:'[name].[hash:4].[ext]',
  }
}
```

## 长缓存优化

1. 把 hash 改为 chunkhash
* hash 表示打包hash， 每次打包都会变化
* chunkhash chunk发生改变chunkhash 才会变化， 文件修改时，chunkhash才会改变。

> 当业务代码引入第三方包发生改变的时候，也会导致第三方包的chunkhash的更改 <br/>
> 解决这个问题的方法, 如下

> chunckhash 是根据id 生成的。

2. NamedChunksPlugin 和 NamedModulesPlugin

> webpack 自带插件

* 将chunks 由 id 变为文件名字

* 配置
```javascript
plugins: [
  new webpack.NamedChunksPlugin(),
  new webpack.NamedModulesPlugin()
]
```

3. MiniCssExtractPlugin

>extractTextCss 不支持 hash 命名

* 配置
```javascript
plugins: [
  new webpack.NamedChunksPlugin({
    filename: '[name].[hash].css'
  }),
]
```


