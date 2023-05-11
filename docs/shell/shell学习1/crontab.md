# 【Linux】 定时任务调度详解(crontab)

## 一、概述

crontab命令用于设置周期性被执行的指令。该命令从标准输入设备读取指令，并将 其存放于“crontab”文件中，以供之后读取和执行。

可以使用crontab定时处理离线任务，比如每天凌晨2点更新数据等，经常用于系统 任务调度。

## 二、服务启动和关闭

```
一般Linux系统中都会装有 crontab ，如果没有安装可以使用下面的命令安装：

yum -y install crontabs

crontab 服务的启动和关闭命令如下：

centos7服务管理命令，centos7之前版本使用service管理

systemctl start crond     # 启动服务

systemctl stop crond     # 关闭服务

systemctl restart crond  # 重启服务

systemctl reload crond  # 重新载入配置

systemctl status crond   # 查看crontab服务状态 #

可以使用下面的命令加入开机启动 systemctl enable crond
————————————————
版权声明：本文为CSDN博主「滨河四季」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_65690979/article/details/126176083
```
