# 3 webpack 打包

## 没有利用配置文件，直接指定出口 与 入口
```js
// 4以上的版本
webpack-cli –entry <entry> --output <output>
// 4以下的版本
webpack –entry <entry> --output <output>
```

## 利用配置文件进行一次打包
```js
// 直接以当前目录下的名为 wepback.config.js 的文件作为配置文件进行打包。
webpack
// 指定一个文件作为配置文件打包
webpack -config configfilename
```

## 全局 和 局部webapck

* webpack 命令 使用的是全局 webpack
* npm install webpack@3.10.0 –save  // 安装局部指定的webpack
* 在 package.json 中的 script 配置 命令 ， 或者 npx ， 使用局部webpack 
```js
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" // 打包命令  npm run build
  },
```