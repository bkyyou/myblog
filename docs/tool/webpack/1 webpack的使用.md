# 1 构建webpack
1. 初始化项目
```javascript
npm init -y  // -y 表示直接使用默认值
```
2. 下载webpack
* webpack3
```javascript
npm i -save-dev webpack
// 或者
npm i -save-dev webpack@版本号 
```

* webpack4
需要同时安装 wepback 和 wepback-cli

3. 检查webpack版本号
* 检查全局 webpack -v 
* 检查局部 npx wepback -v  // 一般npx是安装npm时自动安装

>小提示<br/>
>使用webpack 命令打包，使用的时全局的webpack <br>
>使用局部的webpack， 需要在package.json中配置命令 或者 使用 npx webpack