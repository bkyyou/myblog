(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{762:function(t,e,a){"use strict";a.r(e);var s=a(29),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-gitignore-忽略文件和忽略已经提交过的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-gitignore-忽略文件和忽略已经提交过的文件"}},[t._v("#")]),t._v(" 2..gitignore 忽略文件和忽略已经提交过的文件")]),t._v(" "),a("h2",{attrs:{id:"_2-1-创建-gitignore-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建-gitignore-文件"}},[t._v("#")]),t._v(" 2.1 创建 .gitignore 文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/image/.settings  \n/image/.classpath\n/image/.project\n/image/.gradle\nbuild/        # 忽略 build/ 目录下的所有文件\nclass/*.class # 忽略 class文件夹下所有.class文件\n.gitignore    #忽略.gitignore文件本身\n.history\nnode_modules\nnode_modules/\n.DS_Store\npackages\n")])])]),a("h2",{attrs:{id:"_2-2-git-忽略已经被提交的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-git-忽略已经被提交的文件"}},[t._v("#")]),t._v(" 2.2 git 忽略已经被提交的文件")]),t._v(" "),a("p",[t._v("有时候在 .gitignore 文件中添加规则并未生效，原因是 .gitignore 只能忽略原来没有被 track 的文件，如果某些文件已经加入了版本管理中，修改 .gitignore 是无效的。解决方法：先把不想记录文件的本地缓存删除，再在 .gitignore 中添加忽略该文件，然后再提交。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git rm -r --cached xxx   //xxx表示不再想版本控制的文件，然后在  .gitignore 文件中加入该忽略的文件 \ngit add .\ngit commit -m 'update .gitignore'\n")])])]),a("p",[t._v("https://blog.csdn.net/u010566681/article/details/53183146")]),t._v(" "),a("p",[t._v("https://www.cnblogs.com/wt645631686/p/9721875.html")])])}),[],!1,null,null,null);e.default=i.exports}}]);