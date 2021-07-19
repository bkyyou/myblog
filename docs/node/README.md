# 前言

console.log('可执行文件绝对路径', process.execPath);
console.log('版本号', process.version);
console.log('依赖库的版本号', process.versions);
console.log('运行平台', process.platform);
console.log('标准输入流', process.stdin);
console.log('标准输出流', process.stdout);
console.log('标准错误流', process.stderr);
console.log('命令行参数数组', process.argv);
console.log('系统环境变量', process.env);
console.log('进程ID', process.pid);
console.log('标题', process.title);
console.log('处理器架构', process.arch);

* 命令 模式下 输入 / 可以搜索
search hit BOTTOM, continuing at TOP     按 n 下一个搜索

* ipconfig /flushdns window下刷新 dns

* 查看日志 apache
<!-- tail -f /etc/httpd/logs/ -->
cd /etc/httpd/logs/
tail -f access_log
tail -f error_log

ip 192.168.31.114

* 设置模式
setenforce 0 将apache 设置成宽松模式
setenforce 1 将apache 设置成安全模式


ss from linux

* 强制退出
! q

* 产看隐藏文件
ls -a

.swo 是备份文件

shift g   // 文件中跳转到最后一行



cmder
vim \windows\System32\drivers\etc\hosts

开机启动 systemctl enable redis_6379

noh 查找时取消高亮

whereis log  // 查找 log 文件 <br>
which mongod

3yy 复制

rpm 的文件 需要我们自己去安装依赖 <br>
yum  不需要我们自己去安装依赖

fs读取到的 二进制模块 可以通过  toString() 转换

就是我们的浏览器，如果要打开一个网页是吧。在那个地址栏里边输入一个网址，敲回车，那么这样的话。那这个域名实际上是经过了一个DNS寻址是吧，DNS。他就是域名与一个IP绑定了，所以你敲域名其实就是去敲了一个IP地址跟一个端口加起来的。

服务器上呢，他其实他是有一套这样的网站程序是吧，比如说是静态页对不对？那也有的一些网站是一个动态网站，比如说它是asp，PHP等等，那么动态网站它的一个特点就是它的数据是从数据库里边读取到的。


那所以。我们去请求，如果是请求动态网站的话，那么在服务器上，他是不能去识别我们的PHP程序的。怎么办呢，那么就是有服务器。他自己去。请求去找到一个能执行PHP的程序是吧，当然这个服务器是我们配好的，那执行PHP之后呢。他再把它编译成这种我们能识别的HTML代码。最后返回回来。但是。关于数据的获取，那么就是PHP又去发起一个请求到MYSQL的服务器上。当然，我们一般情况下，如果硬件条件有限的话，就是我们的PHP呀。阿帕奇啊等等这些服务器程序以及PHP解释程序。以及我们的SQL程序都是放在同一台服务器上，那么这个时候就可以。用127.0.1或者localhost去访问。

但是考虑到我们网站如果流量很大的话，那么就要做并发，我们一台服务器可能。就是没有这么大的这个承载能力，所以我们的程序可能分别安装在不同的机器上，那么。这个时候其实还是一个一台机器去访问，另外一台机器。

我们学习node，node它的一个作用，它其实也就是相当于一台服务器.

那么node他要去操作redis的话，如果node服务器与我们redis服务器。两个在同一台机器上的话，那么就可以用127.0.0.1或者localhost去访问都可以。但是如果我们的MYSQL程序，也就是我们的服务器程序，跟我们的数据库程序，两个不是在同一台机器上，那么就需要一个域名，或者说一个IP地址加端口，这样才能去访问。

但是我们现在没有配置域名，所以就只是指采用这种IP地址加端口的方式去访问。



// egg demo
https://blog.csdn.net/weixin_34138056/article/details/88656654?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.nonecase

https://github.com/bing127/Node-background-management-system

http://c7sky.com/

https://blog.uproject.cn/articles/2019/02/26/1551161564273.html

node 文件转存

https://mp.weixin.qq.com/s?__biz=MzIyNDU2NTc5Mw==&mid=2247491558&idx=1&sn=c245c106fc3b6840f62c49b38293caf2&chksm=e80c50a8df7bd9be22e97888cad1373e8cff9c356f3f89f89e14f59fbdad56f7813bd8e5d486&scene=21#wechat_redirect
