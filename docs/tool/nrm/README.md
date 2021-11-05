# nrm

* 作用： 使用 nrm 管理 npm 源

## nrm 的使用

1. 安装

npm install nrm -g

2. 可以使用 nrm ls 命令查看默认配置, 带*号即为当前使用的配置

3. nrm add 命令添加公司私有npm源, 起个别名叫taikangnpm

4. 切到公司npm源，命令：nrm use taikangnpm

5. 可以用nrm current查看当前源


## 不通过nrm , 只用npm进行源配置

### 临时使用

1. 以淘宝镜像为例：

```s
npm --registry https://registry.npm.taobao.org install 
```

2. 持久使用

```s
npm config set registry https://registry.npm.taobao.org 
 
// 配置后可通过下面方式来验证是否成功 
 
npm config get registry 
```

### npm代理设置

```s
npm config set proxy http://server:port

npm config set https-proxy http://server:port
```

### npm代理取消

```s
npm config delete proxy

npm config delete https-proxy
```

* 查看npm的所有配置属性（包括默认配置），可以使用npm config ls -l


