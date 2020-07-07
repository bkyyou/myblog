# vue项目移动端测试

## 将host 配置成 当前  IPv4 地址 

在 cmd 中获得

```
// 命令
ipconfig
```

## 安装vConsole 

```js
npm install vconsole --save-dev
```

在main.js中引用并实例化：

```js
import VConsole from 'vconsole';
const vConsole = new VConsole(); // 不使用的时候，可以将这句屏蔽掉；
```