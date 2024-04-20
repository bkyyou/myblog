(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{912:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_6-shell子串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-shell子串"}},[s._v("#")]),s._v(" 6.shell子串")]),s._v(" "),t("h2",{attrs:{id:"_6-1-bash一些基础的内置命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-bash一些基础的内置命令"}},[s._v("#")]),s._v(" 6.1.bash一些基础的内置命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v("\n")])])]),t("h3",{attrs:{id:"_6-1-1-echo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-echo"}},[s._v("#")]),s._v(" 6.1.1.echo")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-n 不换行输出\n-e 解析字符串中的特殊符号\n\n\\n 换行\n\\r 回车\n\\t 制表符 四个空格\n\\b 推格\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@VM-0-4-centos ~]# echo 1;echo 2\n1\n2\n[root@VM-0-4-centos ~]# echo -n 1; echo 2\n12\n[root@VM-0-4-centos ~]# \n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[root@VM-0-4-centos ~]# echo  "1\\n2"\n1\\n2\n[root@VM-0-4-centos ~]# echo -e  "1\\n2"\n1\n2\n[root@VM-0-4-centos ~]# \n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// 打印命令 printf\n[root@VM-0-4-centos ~]# printf "1\\t1\\1\\n"\n1\t1\n[root@VM-0-4-centos ~]# printf "1\\t1\\1"\n1\t1[root@VM-0-4-centos ~]# \n')])])]),t("h3",{attrs:{id:"_6-1-2-eval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-eval"}},[s._v("#")]),s._v(" 6.1.2.eval")]),s._v(" "),t("p",[s._v("执行多个命令")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@VM-0-4-centos /]# eval ls;cd /tmp\napp  boot  dev  home  lib64       media  mydata  proc  run   srv  tmp  var\nbin  data  etc  lib   lost+found  mnt    opt     root  sbin  sys  usr\n[root@VM-0-4-centos tmp]# \n")])])]),t("h3",{attrs:{id:"_6-1-2-exec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-exec"}},[s._v("#")]),s._v(" 6.1.2.exec")]),s._v(" "),t("p",[s._v("不创建子进程，执行后续命令，且执行完毕后，自动 exit")]),s._v(" "),t("h2",{attrs:{id:"_6-2-shell子串的花式用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-shell子串的花式用法"}},[s._v("#")]),s._v(" 6.2.shell子串的花式用法")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# n 表示变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n}  返回变量值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${#n}  返回变量长度，字符长度")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n:start}  返回变量 start 数值之后的字符（包括start） ${n:4}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-4-centos tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# name='zhangsan'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-4-centos tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo ${name:4}")]),s._v("\ngsan\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n:start:length}  提取 start 之后的 length 限制字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n#word}  从变量开头删除最短的 word(word是你所写字符) 子串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-4-centos tmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo ${name#zhang}")]),s._v("\nsan \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n##word}  从变量开头删除最长匹配的 word")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n%word}  从变量结尾删除最短的 word")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n%%word}  从变量结尾删除最长匹配的 word")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n/pattern/string}  用 string 代替第一个匹配的 pattern")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ${n//pattern/string}  用 string 代替所有的 pattern")]),s._v("\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[root@VM-0-4-centos ~]# name="abcABC123ABCabc"\n[root@VM-0-4-centos ~]# echo ${name#a*c}\nABC123ABCabc\n[root@VM-0-4-centos ~]# echo ${name##a*c} # 输出是空的\n\n[root@VM-0-4-centos ~]# \n[root@VM-0-4-centos ~]# echo ${name%a*c}\nabcABC123ABC\n[root@VM-0-4-centos ~]# echo ${name%%a*c}\n\n[root@VM-0-4-centos ~]# echo ${name%%a*C}\nabcABC123ABCabc\n')])])]),t("ul",[t("li",[s._v("批量修改文件名")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@VM-0-4-centos str_sub]# touch you_{1..10}.finished.jpg\n[root@VM-0-4-centos str_sub]# ls\nyou_10.finished.jpg  you_3.finished.jpg  you_6.finished.jpg  you_9.finished.jpg\nyou_1.finished.jpg   you_4.finished.jpg  you_7.finished.jpg\nyou_2.finished.jpg   you_5.finished.jpg  you_8.finished.jpg\n[root@VM-0-4-centos str_sub]# for filename in `ls *fin*.jpg`;do mv $filename `echo ${filename//finished/}`;done \n[root@VM-0-4-centos str_sub]# ls\nyou_10..jpg  you_2..jpg  you_4..jpg  you_6..jpg  you_8..jpg\nyou_1..jpg   you_3..jpg  you_5..jpg  you_7..jpg  you_9..jpg\n[root@VM-0-4-centos str_sub]# \n")])])]),t("h2",{attrs:{id:"_6-3-子串的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-子串的使用"}},[s._v("#")]),s._v(" 6.3.子串的使用")]),s._v(" "),t("h2",{attrs:{id:"_6-4-计算变量长度的各种玩法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-计算变量长度的各种玩法"}},[s._v("#")]),s._v(" 6.4.计算变量长度的各种玩法")]),s._v(" "),t("p",[s._v("test.txt")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("123\n12345\n123345678\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多种统计长度的命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用 wc 统计")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取文件字符串个数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" test.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者最长子串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" test.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用 expr")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" length "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v('"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 利用 awk")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print length($0)}'")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# {1..100} 循环 100次")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("num")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$num")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写一行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("num")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$num")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [root@VM-0-4-centos ~]# for num in 10;do echo $num;done")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("num")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$str1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1:2:3:4:5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1:2:3:4:5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1:2:3:4:5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("str1}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[root@VM-0-4-centos ~]# seq 5\n1\n2\n3\n4\n5\n[root@VM-0-4-centos ~]# seq -s ":" 5\n1:2:3:4:5\n[root@VM-0-4-centos ~]# \n')])])]),t("h2",{attrs:{id:"_6-5-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-time"}},[s._v("#")]),s._v(" 6.5.time")]),s._v(" "),t("p",[s._v("计算命令时间")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("str1}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("shell 编程，尽量使用 linux 内置的命令，和内置的函数，效率最高c语言开发，尽可能减少管道符的使用")])]),s._v(" "),t("h2",{attrs:{id:"_6-6-特殊shell扩展变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-特殊shell扩展变量"}},[s._v("#")]),s._v(" 6.6.特殊shell扩展变量")]),s._v(" "),t("ol",[t("li",[s._v(":-")])]),s._v(" "),t("p",[s._v("如果 parameter 变量值为空，返回 word 字符串， 有值返回 parameter")]),s._v(" "),t("p",[s._v("${parameter:-word}")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# name 为空时，zs 赋值给result")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("result")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("zs}")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v(":=")])]),s._v(" "),t("p",[s._v("如果 parameter 变量为空，则word 也会赋值给 parameter，然后返回, 有值返回 parameter")]),s._v(" "),t("p",[s._v("${parameter:=word}")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@VM-0-4-centos ~]# echo $name $result\n\n[root@VM-0-4-centos ~]# result=${name:=zs}\n[root@VM-0-4-centos ~]# echo $name $result\nzs zs\n[root@VM-0-4-centos ~]# \n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v(":?")])]),s._v(" "),t("p",[s._v("如果 parameter 变量为空，则word当做stderr输出，否则输出变量值")]),s._v(" "),t("p",[s._v("用于设置变量值为空导致错误时，返回的错误信息")]),s._v(" "),t("p",[s._v("${parameter:?word}")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v(":+")])]),s._v(" "),t("p",[s._v("如果 parameter 变量为空，什么都不做，否则返回 word")]),s._v(" "),t("p",[s._v("${parameter:+word}")])])}),[],!1,null,null,null);t.default=n.exports}}]);