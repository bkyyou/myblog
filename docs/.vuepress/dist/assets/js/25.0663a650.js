(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{479:function(t,s,a){t.exports=a.p+"assets/img/1.1.70400b81.png"},480:function(t,s,a){t.exports=a.p+"assets/img/1.2.89b787b7.png"},481:function(t,s,a){t.exports=a.p+"assets/img/1.3.376cfd07.png"},706:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1-自动化构建与持续集成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-自动化构建与持续集成"}},[t._v("#")]),t._v(" 1.自动化构建与持续集成")]),t._v(" "),n("ul",[n("li",[t._v("掌握自动化构建的概念（狭义和广义）")]),t._v(" "),n("li",[t._v("了解自动化构建和人工构建的区别")]),t._v(" "),n("li",[t._v("了解前端项目和后端项目自动化构建的差异")]),t._v(" "),n("li",[t._v("掌握两个模式和三种环境的概念")]),t._v(" "),n("li",[t._v("掌握三类构建工具的使用及构建脚本的编写")]),t._v(" "),n("li",[t._v("掌握自动化构建的工作流程")]),t._v(" "),n("li",[t._v("了解 GitBook 电子书的自动化构建")])]),t._v(" "),n("h2",{attrs:{id:"自动化构建与持续集成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建与持续集成"}},[t._v("#")]),t._v(" 自动化构建与持续集成")]),t._v(" "),n("h3",{attrs:{id:"前后端常见的构建任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前后端常见的构建任务"}},[t._v("#")]),t._v(" 前后端常见的构建任务")]),t._v(" "),n("ul",[n("li",[t._v("前端 5 类")]),t._v(" "),n("li",[t._v("后端 2 类")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(479),alt:"前后端常见的构建任务"}}),t._v(";")]),t._v(" "),n("h3",{attrs:{id:"软件开发过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#软件开发过程"}},[t._v("#")]),t._v(" 软件开发过程")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("版本控制\n单一集中的代码仓库")])]),t._v(" "),n("li",[n("p",[t._v("自动化构建\n无人工干预的编译和构建软件")])]),t._v(" "),n("li",[n("p",[t._v("自动化测试\n无人工干预的执行单元测试和集成测试")])]),t._v(" "),n("li",[n("p",[t._v("持续集成\n开发人员每天多次向仓库主干合并代码变更并触发构建和测试任务")])]),t._v(" "),n("li",[n("p",[t._v("自动发布\n无人工干预的打包和部署")])]),t._v(" "),n("li",[n("p",[t._v("持续提交\n每个代码变更都及时并入代码仓库")])])]),t._v(" "),n("h3",{attrs:{id:"自动化构建的优势"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建的优势"}},[t._v("#")]),t._v(" 自动化构建的优势")]),t._v(" "),n("ul",[n("li",[t._v("减少构建，部署出错的可能性")]),t._v(" "),n("li",[t._v("提高开发效率，降低开发成本")]),t._v(" "),n("li",[t._v("代码更加模块化，易于维护和重构")]),t._v(" "),n("li",[t._v("可以有效提升软件质量")]),t._v(" "),n("li",[t._v("使软件代码更符合代码规范")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(480),alt:"前后端常见的构建任务"}}),t._v(";")]),t._v(" "),n("p",[t._v("npm i --production")]),t._v(" "),n("h3",{attrs:{id:"自动化构建的软件支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建的软件支持"}},[t._v("#")]),t._v(" 自动化构建的软件支持")]),t._v(" "),n("ul",[n("li",[t._v("版本控制系统\ngit github")]),t._v(" "),n("li",[t._v("构建任务工具\nnpm grunt")]),t._v(" "),n("li",[t._v("持续集成工具\ntravis CL")])]),t._v(" "),n("h3",{attrs:{id:"自动化构建的演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建的演示"}},[t._v("#")]),t._v(" 自动化构建的演示")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('1. 在 gitlab 新建一个项目 wdbook， 并勾选 新建 readme，添加 .gitignore: Node, license:MIT Licence\n2. 将项目 clone\n3. 创建新分支 gh-pages, 用来发布\n4. 切换到 master 分支， 新建 ch01.md ch02.md SUMMARY.md(左侧导航栏)\n5. 编辑新创建的文件 SUMMARY 文件 \n\t\t* [简介](README.md)\n\t\t* [第一张](ch01.md)\n\t\t* [第二张](ch02.md)\n    // 注意前面的 * \nhttps://www.jianshu.com/p/421cc442f06c\n6. npm i -g gitbook-cli\n\n// 7-12 可以不操作\n7. 当前目录下 gitbook build， 会构建出 _book\n8. 将 _book 添加到 .gitignore 中，后提交到 gitlab\n9. cd _book\n10. _book 目录下 git init\n11 把当前 master 分支推到远程仓库 git push -u origin master:gh-pages\n  // 注： 只将 _book 文件下的内容提交到 gh-pages\n\t这块推不上去，远程没有 gh-pages 分支 \n\trm -rf .git\n\tcd ../\n\tmv _book ~/tmp\n\tgit checkout gh-pages\n\tcp .r ~/tmp/_book/* .   // 递归拷贝？\n\tgit push -u origin gh-pages\n12. 通过 github 来访问 bkyyou.github.io/wdbook/\n\n13. 编写脚本文件 .travis.yml  注： 第一次编写会失败，因为没有配置环境变量\n14. 在 travis 网站 配置环境变量\n  点击 more options (右上角) => setting\n  在 name value 的地方配置环境变量\n  access_token \n    github => setting => developer settings => Personal access tokens\n    点击 Generate new token  只选第一项 repo\n15. npm init -y \n16. 修改 scripts， exit 0 \n    test: \'echo \\ " no test specified \\ " && exit 0\'\n17. 将 依赖 放到 package.json 中\n    "devDependencies": {\n      "gitbook-cli": "^2.3.2"\n    }\n18. gp -f 强制覆盖\n')])])]),n("p",[t._v("构建电子书的两个动作，分别是构建和发布，把这两个动作自动完成")]),t._v(" "),n("ol",[n("li",[t._v("gitbook build    // 把 md 文件转成 html 文件")]),t._v(" "),n("li",[t._v("git push    // 把 html 文件推送到远程 gh-pages")])]),t._v(" "),n("p",[t._v("满足上面需求新建文件  .travis.yml")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// 新建 文件  .travis.yml\nlanguage: node_js\nnode_js:\n  - "node"\n\nafter_script:\n  // - gitbook install   不需要\n  - gitbook build\n  // - grunt minify      不需要\n  - cd ./_book\n  - git init\n  - git config user.name "${USER_NAME}"\n  - git config user.email "${USER_EMAIL}"\n  // - cp ../CNAME .     不需要\n  - git add .\n  - git commit -m "publish gitbook"\n  - git push --force --quiet "https://${ACC_TOKEN}@${GH_REF}" master:${BRANCH}\n\nbranches:\n  only:\n    - master\n\n')])])]),n("blockquote",[n("p",[t._v("${} 里边的是变量，需要在 travis 里面修改， 不想要别人知道敏感信息")])]),t._v(" "),n("p",[t._v("配置的环境变量实例")]),t._v(" "),n("blockquote",[n("p",[t._v("粉色是要修改\n"),n("img",{attrs:{src:a(481),alt:"环境变量的例子"}}),t._v(";")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// git 缩写命令\ngit clone repos-url\ngit add [file1] [file2]  \t\t\t\t\t\tgaa\ngit commit -m [message]  \t\t\t\t\t\tgcmsg \ngit push [-u] [remote] [branch] \t\tgp\ngit checkout -b gh-pages  \t\t\t\t\tgco -b gh-pages\n\ngsb???   git status \n")])])]),n("h3",{attrs:{id:"travis-cl-默认执行两个脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#travis-cl-默认执行两个脚本"}},[t._v("#")]),t._v(" Travis Cl 默认执行两个脚本")]),t._v(" "),n("ul",[n("li",[t._v("npm install   安装项目依赖")]),t._v(" "),n("li",[t._v("npm test    执行测试")])]),t._v(" "),n("p",[t._v("package.json 中默认的 test 脚本，会导致 构建失败")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意这个 1， 应该改成 0")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"travis-cl-默认依次执行一下九个版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#travis-cl-默认依次执行一下九个版本"}},[t._v("#")]),t._v(" Travis Cl 默认依次执行一下九个版本")]),t._v(" "),n("ul",[n("li",[t._v("before_install")]),t._v(" "),n("li",[t._v("install   // 安装依赖目录")]),t._v(" "),n("li",[t._v("before_script")]),t._v(" "),n("li",[t._v("before    // 执行构建任务，包括单元测试（run test）")]),t._v(" "),n("li",[t._v("after_sucess 或者 after_failure")]),t._v(" "),n("li",[t._v("after_script")]),t._v(" "),n("li",[t._v("before_deploy (可选)")]),t._v(" "),n("li",[t._v("deploy (可选)   // 执行部署任务")]),t._v(" "),n("li",[t._v("after_deploy")])]),t._v(" "),n("h2",{attrs:{id:"单元测试概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单元测试概念"}},[t._v("#")]),t._v(" 单元测试概念")]),t._v(" "),n("h2",{attrs:{id:"单元测试实战"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单元测试实战"}},[t._v("#")]),t._v(" 单元测试实战")]),t._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")])])}),[],!1,null,null,null);s.default=e.exports}}]);