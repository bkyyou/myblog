(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{915:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_9-shell的脚本开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-shell的脚本开发"}},[s._v("#")]),s._v(" 9.shell的脚本开发")]),s._v(" "),a("h2",{attrs:{id:"_9-1-shell-执行多脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-shell-执行多脚本"}},[s._v("#")]),s._v(" 9.1.shell 执行多脚本")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@VM-0-4-centos ~]# date;whoami\n2023年 04月 28日 星期五 10:38:45 CST\nroot\n")])])]),a("h2",{attrs:{id:"_9-2-编写-sh-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-编写-sh-脚本"}},[s._v("#")]),s._v(" 9.2.编写 sh 脚本")]),s._v(" "),a("p",[s._v("可以把复杂的命令执行进程，通过一个逻辑代码，组成一个脚本文件，再去执行该文件就好了")]),s._v(" "),a("p",[s._v("shebang")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n")])])]),a("h1",{attrs:{id:"_9-3-运行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-运行脚本"}},[s._v("#")]),s._v(" 9.3.运行脚本")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"当前的日期是： '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示登录时间和用户")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The time and date are: "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"let's see who's logged in the system: \"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User info for username: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User UID is: '),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$UID")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User Home is:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" test.sh\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" test.sh\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" test.sh\n\n./test.sh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要执行权限")]),s._v("\n")])])]),a("h1",{attrs:{id:"_9-4-echo-和转译符的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-echo-和转译符的概念"}},[s._v("#")]),s._v(" 9.4.echo 和转译符的概念")]),s._v(" "),a("p",[s._v("单引号和 \\ 所谓转义符，还原符号，原本的意思，不会被阅读为特殊含义")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$10000")]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$10000'")]),s._v("\n")])])]),a("h1",{attrs:{id:"_9-5-变量在脚本中的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-变量在脚本中的使用"}},[s._v("#")]),s._v(" 9.5.变量在脚本中的使用")]),s._v(" "),a("p",[s._v("变量被引用时，会赋予其值，脚本中变量，在 shell 执行完毕后，就会消失，根据执行的方式决定，但通过 source 或者 . 方式运行, 是在当前的 shell 环境中加载变量，执行脚本（脚本中变量会保存在当前shell中）。 bash或者sh执行脚本时，是开启子shell运行的，变量也是在子shell中加载，子 shell 运行结束退出后 ，变量消失。")]),s._v(" "),a("blockquote",[a("p",[s._v("对变量值的获取，要加 $ 符号")])]),s._v(" "),a("h2",{attrs:{id:"_9-6-linux-和-shell-变量的替换引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-linux-和-shell-变量的替换引用"}},[s._v("#")]),s._v(" 9.6.linux 和 shell 变量的替换引用")]),s._v(" "),a("p",[s._v("shell 一特性，就是可以从命令的执行结果中，在提取结果，因此特别适合编写脚本")]),s._v(" "),a("ul",[a("li",[s._v("$()")]),s._v(" "),a("li",[s._v("`` 反引号")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 命令已经运行了，但是shell不识别 date 的返回结果\n[root@VM-0-4-centos ~]# $(date)\n-bash: 2023年: 未找到命令\n")])])]),a("h3",{attrs:{id:"_9-6-1-对-linux-特殊符号的整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-1-对-linux-特殊符号的整理"}},[s._v("#")]),s._v(" 9.6.1.对 linux 特殊符号的整理")]),s._v(" "),a("ul",[a("li",[s._v("${}  取出变量结果")]),s._v(" "),a("li",[s._v("$()  在括号中执行命令，且拿到命令的执行结果")]),s._v(" "),a("li",[s._v("``   执行其中命令，且拿到命令的执行结果")]),s._v(" "),a("li",[s._v("()   开启子shell执行命令")]),s._v(" "),a("li",[s._v("$vars  取出变量结果")])])])}),[],!1,null,null,null);a.default=n.exports}}]);