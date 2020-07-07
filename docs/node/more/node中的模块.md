# node 中的模块

## 全局模块

> 对象 

不需要下载， 也不需要下载 ， 比如 process

process.env    环境变量

process.argv   命令行上的命令

__dirname  



## 系统模块

不需要下载， 但需要引入

### path

用于处理文件路径和目录路径的实用工具

```js
const path = require('path');

var pathStr = '/node/a/b/c/1.jpg';
console.log(path.diranme(pathStr))  //  /node/a/b/c
console.log(path.basename(pathStr))  //  1.jpg
console.log(path.extname(pathStr))  //  .jpg

path.resolve('/node/a/b/c', '../../', 'd')  // node\a\d

console.log(path.resove(__dirname, 'index.js'))  // 获取到绝对路径
```

### fs

用于文件读写操作

```js
// readFile
```

## 自定义模块