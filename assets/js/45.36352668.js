(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{521:function(t,a,s){t.exports=s.p+"assets/img/6.1.e3f41714.png"},522:function(t,a,s){t.exports=s.p+"assets/img/6.2.1df64385.png"},523:function(t,a,s){t.exports=s.p+"assets/img/6.3.9abf5e3f.png"},524:function(t,a,s){t.exports=s.p+"assets/img/6.4.10fbd146.png"},525:function(t,a,s){t.exports=s.p+"assets/img/6.5.44028c3b.png"},895:function(t,a,s){"use strict";s.r(a);var r=s(10),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_6-文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-文件权限"}},[t._v("#")]),t._v(" 6.文件权限")]),t._v(" "),a("p",[t._v("属主， 这个文件属于谁")]),t._v(" "),a("p",[t._v("属组， 这个文件属于哪个组")]),t._v(" "),a("h2",{attrs:{id:"_6-1-权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-权限"}},[t._v("#")]),t._v(" 6.1.权限")]),t._v(" "),a("p",[a("img",{attrs:{src:s(521),alt:"文件权限"}})]),t._v(" "),a("h3",{attrs:{id:"_6-1-1-文件类型区分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-文件类型区分"}},[t._v("#")]),t._v(" 6.1.1.文件类型区分")]),t._v(" "),a("ul",[a("li",[t._v("通过开头第一个字母进行区分")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("d 开头是一个文件夹\n- 开头是一个文件\nl 开头是一个软连接，快捷方式等类型\n")])])]),a("ul",[a("li",[t._v("创建软连接 ln")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@bkyyou test_scripts]# ln -s 1.sh 1.link\n[root@bkyyou test_scripts]# ll\ntotal 68\nlrwxrwxrwx 1 root root    4 May 19 17:13 1.link -> 1.sh\n-rw-r--r-- 1 root root   18 May 17 15:08 1.sh\n-rw-r--r-- 1 root root   77 May 17 11:12 1.txt\ndrwxr-xr-x 2 root root 4096 May 17 15:20 alljs\n")])])]),a("ul",[a("li",[t._v("文件权限解读")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-rw-r--r-- 1 root root   18 May 17 15:08 1.sh\n\n第一个代表文件类型，后边每三个一组\n第一组  read 可读  write 可写  - 不可执行, 第一组权限属于 root (属主， 文件的主人)  user\n第二组  第二组属于 root ，属组(文件待在用户组)  group\n第三组  既不不是属主，又不是属组，就属于其他人   other\n\ndrwxr-xr-x 2 root root 4096 May 17 15:20 alljs\nd 代表root的一个文件夹\nrwx user，属主，代表文件夹主人权限\nr-x group, 属组，代表文件夹所属组的权限\nr-x 其他人的权限\n")])])]),a("ul",[a("li",[t._v("文件的读写执行")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("r read 可读 (可以使用 cat、more、less、head、tail等命令查看文件内容)\nw write 可写 (可以用 vim， 重定向符号等，向文件写入内容)\nx executable 可执行 (文件是可执行的)\n- 没有权限\n")])])]),a("ul",[a("li",[t._v("文件夹的读写执行")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("r read 可读 (ls命令)\nx 可以进入的权限 (cd)\nw write 可写 (文件夹必须的现有x权限，才能在文件夹中创建文件，touch mkdir 等 操作)\n- 没有权限\n")])])]),a("p",[a("img",{attrs:{src:s(522),alt:"文件权限"}})]),t._v(" "),a("h2",{attrs:{id:"_6-2-更改文件权限的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-更改文件权限的命令"}},[t._v("#")]),t._v(" 6.2.更改文件权限的命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chmod u+w\nchmod g+r\nchmod u-x\nchmod u=wr\n")])])]),a("ul",[a("li",[t._v("更改属主权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 给文件 user 属主添加可执行权限\nchmod u+x hello.sh\n\n# 取消文件所有权限\nchmod 0 hello.sh\n\n# 给文件属主添加可读权限\nchmod u+r hello.sh\n\n# 给文件减一个权限\nchmod u-r hello.sh\n")])])]),a("ul",[a("li",[t._v("更改属组权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 修改文件的属组权限，删除属组可读权限\nchmod g-r\n")])])]),a("p",[a("img",{attrs:{src:s(523),alt:"文件权限"}})]),t._v(" "),a("h3",{attrs:{id:"_6-2-1-练习文件权限的数字与字母转化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-练习文件权限的数字与字母转化"}},[t._v("#")]),t._v(" 6.2.1.练习文件权限的数字与字母转化")]),t._v(" "),a("ul",[a("li",[t._v("权限代表数字")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("r read 4\nw write 2\nx exec 1\n-      0\n")])])]),a("ul",[a("li",[t._v("最大权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("user 最大的权限  rwx 4+2+1=7\n\nr-x 4+0+1=5\n-w- 0+2+0=2\n")])])]),a("ul",[a("li",[t._v("文件权限所属")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("- 普通文件\n此时有一个文件权限如下\n- rwx(user) -w-(group) --x(other) chao.txt\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 第一题 修改chao.txt文件权限，属主只能读， 属组和其他人没有权限\n\n# 使用字母需改权限\nchmod g+w chao.txt # 给 属组添加可写权限\nchmod o=x chao.txt # 给 其他人只设置可执行权限\n\n#使用数字修改权限\nchmod 400 chao.txt\n\n# 第二题 chao.txt 权限是，属组只读，属主只写，其他人只读\n\n# 字母修改方式\nchmod u=w,g=r,o=r chao.txt\n\n# 数字表示形式\nchmod 244 chao.txt\n\n# 第三题， 修改权限为 755， 用字母表示该权限\n\nchmod u=rwx,g=rx,o=rx chao.txt\n")])])]),a("h2",{attrs:{id:"_6-3-权限范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-权限范围"}},[t._v("#")]),t._v(" 6.3.权限范围")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("操作对象\nu 文件属主权限\ng 同组用户权限\nu 其他用户权限\nu 所有用户(包括以上三种)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 文件属性修改\nchmod a=r file.txt # 一次性修改 user group other 权限为 r 只读\n# 相当于 444\nchmod 444 file.txt\n")])])]),a("h2",{attrs:{id:"_6-4-chown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-chown"}},[t._v("#")]),t._v(" 6.4.chown")]),t._v(" "),a("p",[t._v("修改文件属主，属组信息")]),t._v(" "),a("ul",[a("li",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown zs test.txt  # 文件属于zs\nchown :组 test.txt  # 修改文件属组\nchown 用户:组 test.txt  # 修改\n\n# 参数\n-R --recursive 递归处理所有文件及子目录\n-v --berbose 为处理所有信息显示诊断信息\n")])])]),a("ul",[a("li",[t._v("案例")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown zs:zs nginx.conf # 将 nginx.conf 所属用户和组改为 zs\nchown -R zs:zs data # 将 data 目录下所有内容属组和属主 改为 zs\nchown :zs test.txt # test.txt 的属组改为 zs\n\nchown -R root:root yu2 # 强制抢走 yu2 内容，改为 root 属主，属组\n")])])]),a("h2",{attrs:{id:"_6-6-setfacl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-setfacl"}},[t._v("#")]),t._v(" 6.6.setfacl")]),t._v(" "),a("p",[t._v("给用户，用户组添加 rwx 权限")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 给 -R 文件夹递归 -m 更改文件访问控制列表 u 代表用户 zs 用户\nsetfacl -R -m u:zs:rwx shell_program # 给 zs 用户添加 shell_program 这个文件夹 rwx 权限\n\n# 添加之前\n[zs@bkyyou /]$ getfacl shell_program/\n# file: shell_program/\n# owner: root\n# group: root\nuser::rwx\ngroup::r-x\nother::r-x\n\n# 添加之后\n[root@bkyyou /]# getfacl  shell_program\n# file: shell_program\n# owner: root\n# group: root\nuser::rwx\nuser:zs:rwx\ngroup::r-x\nmask::rwx\nother::r-x\n")])])]),a("p",[t._v("https://blog.csdn.net/weixin_38920945/article/details/118762592")]),t._v(" "),a("h2",{attrs:{id:"_6-5-umask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-umask"}},[t._v("#")]),t._v(" 6.5.umask")]),t._v(" "),a("p",[t._v("用来限制新文件权限掩码，也称之为遮罩码，防止文件创建的时候权限过大")]),t._v(" "),a("p",[t._v("当文件创建时， 其最初的权限由文件创建掩码决定")]),t._v(" "),a("p",[t._v("用户每次注册进入系统时， umask 命令都被执行了， 并自动设置掩码改变默认值，新的权限将会把就得覆盖")]),t._v(" "),a("p",[t._v("umask 默认配置在 /etc/prefile 61-64 行")]),t._v(" "),a("p",[t._v("文件、文件夹的最大权限是 777")]),t._v(" "),a("p",[t._v("linux 默认设置创建文件的最大权限是 666， 文件夹的权限最大是 777")]),t._v(" "),a("ul",[a("li",[t._v("通过root查看新创建文件权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@bkyyou test_scripts]# umask\n0022\n\n文件权限 = 666 - 022 = 644\n文件夹权限 = 777 - 022 = 755\n")])])]),a("ul",[a("li",[t._v("通过普通用户查看新创建文件权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[zs@bkyyou test_scripts]# umask\n0022\n\n文件权限 = 666 - 022 = 644\n文件夹权限 = 777 - 002 = 775\n")])])]),a("h2",{attrs:{id:"_6-6-chattr-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-chattr-命令"}},[t._v("#")]),t._v(" 6.6.chattr 命令")]),t._v(" "),a("p",[t._v("chattr 命令用于更改文件的扩展属性， 比 chmod 更改 rwx 权限更底层")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 参数\na 只能向文件添加数据，不能删除\n-R 递归更改目录属性\n-V 显示命令执行过程\n\n模式\n+ 增加参数\n- 移除参数\n= 指定参数\nA 不让系统修改文件最后的访问时间\na 只能向文件添加数据，不能删除\ni 文件不能删除、改名、修改内容\n")])])]),a("ul",[a("li",[t._v("查看特殊权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("lsattr chaoge.txt\n")])])]),a("ul",[a("li",[t._v("添加特殊权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chattr +a chaoge.txt\n")])])]),a("p",[a("img",{attrs:{src:s(524),alt:"练习题"}}),t._v(" "),a("img",{attrs:{src:s(525),alt:"练习题"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);