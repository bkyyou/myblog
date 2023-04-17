const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '毕克有的技术笔记',
  /**
   * 部署线上
   */
  base: "/myblog/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
		['meta', { 'http-equiv': 'cache-control', content: 'no-cache' }],
		['meta', { 'http-equiv': 'expires', content: 'no-cache' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '主页',
        link: '/'
        // link: '/guide/',
      },
      {
        text: '技术笔记',
        items: [
          {
            text: 'js篇',
            link: '/js/'
          },
          {
            text: 'css篇',
            link: '/css/'
          },
          {
            text: '工具篇',
            link: '/tool/'
          },
          {
            text: '框架篇',
            link: '/framework/'
          },
          {
            text: '移动端app开发',
            link: '/webapp/'
          },
          {
            text: '小程序',
            link: '/weChatMiniProgram/'
          },
          {
            text: 'nodejs',
            link: '/node/'
          },
          {
            text: 'http',
            link: '/http/'
          },
          {
            text: '面试题',
            link: '/interviewQuestions/'
          },
          {
            text: '常见需求',
            link: '/demandSolution/'
          },
        ]
      },
      {
        text: '源码解析',
        // link: '/sourceCode/'
        items: [
          {
            text: 'jQuery',
            link: '/sourceCode/'
          }
        ]
      }
    ],
    sidebar: {
      '/js/': [
        {
          title: 'js篇',
          collapsable: false,
          children: [
            {
              title: '函数', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                // '', // 你的md文件地址
                '函数/1 JavaScript中内存管理',
                '函数/2. 如何保证代码质量',
                '函数/3.发布订阅和观察者模式',
                '函数/4.分片上传',
                '函数/5.函数回掉变为同步',
              ]
            },
            {
              title: '实用方法', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '实用方法/1.将数据转换成树结构',
                '实用方法/2.将数字每三个用逗号隔开',
                '实用方法/3.适配',
                '实用方法/4.分批请求',
                '实用方法/5.拖拽事件与点击事件共同执行',
              ]
            },
            {
              title: '数据处理', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '数据处理/1.JS获取数组最后5个值',
              ]
            },
            {
              title: '异步编程', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '异步编程/1.理解异步',
                '异步编程/2.Event Loop机制',
                '异步编程/3.异步编程方法-发布和订阅',
                '异步编程/4.深入理解promise',
              ]
            },
            {
              title: 'api', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                // '', // 你的md文件地址
                '原生api/1.promise源码分析',
                '原生api/2.Object.defineProperty()和defineProperties()',
                '原生api/3.js中的隐式转换',
                '原生api/4.hasOwnProperty,instanceof,typeof',
                '原生api/5.获取iframe节点的window对象',
                '原生api/6.Object.freeze 性能优化',
                '原生api/7.javascript的隐式转换和 toString valueof的调用情况',
                '原生api/8.js监听浏览器tab窗口切换',
                '原生api/9.获取iframe内和父元素的方法',
              ]
            },
            {
              title: '正则表达式学习', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '正则表达式学习/1.正则表达式',
                '正则表达式学习/2.正则学习',
                '正则表达式学习/3.正则小记',
              ]
            },
            {
              title: '作用域', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '作用域/1.if中的函数声明',
                '作用域/2.this指向',
              ]
            },
            {
              title: 'es6', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                'es6/Generator/1.Generator函数及其异步的应用',
                'es6/async和await',
              ]
            },
            {
              title: 'jquery', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                'jquery/1.offset的使用',
              ]
            },
            {
              title: 'js中的隐式转换', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                'js中的隐式转换/1.隐式转换',
                'js中的隐式转换/2.a===9 && a===3',
                'js中的隐式转换/3.js类型转换总结',
                'js中的隐式转换/4.==比较类型转换',
              ]
            },
          ]
        }
      ],
      '/css/': [
        {
          title: 'css篇',
          collapsable: false,
          children: [
            'flex/',
            // 'using-vue',
          ]
        }
      ],
      '/tool/': [
        {
          title: 'webpack', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            {
              title: '1.webpack学习', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                'webpack/1.webpack学习/1.初识 webpack',
                'webpack/1.webpack学习/2.webpack优化',
                'webpack/1.webpack学习/3.webpack的实现',
                'webpack/1.webpack学习/4.如何调适和阅读webpack源码',
                'webpack/1.webpack学习/5.webpack自定义loader',
              ]
            },
            {
              title: '2.整理练习webpack的错误',
              collapsable: true,
              children: [
                'webpack/2.整理练习webpack的错误/1.wrong'
              ]
            },
            {
              title: '3.webpack学习', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                // '3.webpack/', // 你的md文件地址
                'webpack/3.webpack学习/1 webpack的使用',
                'webpack/3.webpack学习/2 webpack的核心概念',
                'webpack/3.webpack学习/3 webpack 打包',
                'webpack/3.webpack学习/4 js的编译',
                'webpack/3.webpack学习/26 webpack打包速度优化', // 你的md文件地址
                'webpack/3.webpack学习/27 webpack工程化实践'
              ]
            },
            // 'webpack/', // 你的md文件地址
            // 'webpack/1 webpack的使用',
            // 'webpack/2 webpack的核心概念',
            // 'webpack/3 webpack 打包',
            // 'webpack/4 js的编译',
            // 'webpack/26 webpack打包速度优化', // 你的md文件地址
            // 'webpack/27 webpack工程化实践'
          ]
        },
        {
          title: 'nvm', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'nvm/', // 你的md文件地址
          ]
        },
        {
          title: 'nrm', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'nrm/', // 你的md文件地址
          ]
        },
        {
          title: 'yarn', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'yarn/', // 你的md文件地址
          ]
        },
        {
          title: 'git', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'git/1.git取消add操作',
            'git/2..gitignore 忽略文件和忽略已经提交过的文件', // 你的md文件地址
            'git/3.git merge 一个指定文件',
          ]
        },
        {
          title: 'Docker', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            {
              title: '1.Docker学习', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                'Docker/1.Docker学习/1.Docker学习大纲',
                'Docker/1.Docker学习/2.Docker基础',
                'Docker/1.Docker学习/3.练习',
                'Docker/1.Docker学习/4.Portainer可视化面板安装',
                'Docker/1.Docker学习/5.docker镜像讲解',
                'Docker/1.Docker学习/7.DockerFIle',
                'Docker/1.Docker学习/8.Docker网络',
              ]
            },
            {
              title: '2.Docker练习', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                'Docker/2.Docker练习/1.node服务部署',
              ]
            },
          ]
        },
        {
          title: 'mysql', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            {
              title: 'mysql学习', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                'mysql/mysql学习/1.初识mysql',
                'mysql/mysql学习/2.操作数据库',
                'mysql/mysql学习/3.列的数据类型讲解',
                'mysql/mysql学习/4.DQL 查询数据',
                'mysql/mysql学习/5.MySQL函数',
                'mysql/mysql学习/6.SELECT小结',
                'mysql/mysql学习/7.事务',
                'mysql/mysql学习/8.索引介绍及索引分类',
                'mysql/mysql学习/9.权限管理和备份',
                'mysql/mysql学习/10.规范数据库设计',
                'mysql/mysql学习/11.JDBC',
              ]
            },
          ]
        },
        {
          title: '脚手架工具', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'scaffoldingTools/1.创建 Generator 模块', // 你的md文件地址
          ]
        },
        {
          title: 'ts', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'ts/ts学习/1.基础环境搭建', // 你的md文件地址
            'ts/ts学习/2.基础类型',
            'ts/ts学习/3.数组和对象',
            'ts/ts学习/4.函数',
            'ts/ts学习/5.typescript类',
            'ts/ts学习/6.特殊类型和高级类型',
            'ts/ts学习/7.接口和type',
            'ts/ts学习/8.泛型和断言',
            'ts/ts学习/9.ts的推导机制',
            'ts/ts学习/10.Symbol和枚举',
            'ts/ts学习/11.工程化编译和tsconfig',
          ]
        },
      ],
      '/framework/': [
        {
          title: 'react', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'react/react学习/1.1-搭建React环境', // 你的md文件地址
            'react/react学习/2.1-组件和JSX', 
            'react/react学习/2.2-Props、列表渲染、条件渲染', 
            'react/react学习/2.3-Css In React', 
            'react/react学习/3.1-事件处理', 
            'react/react学习/3.2-认识State', 
            'react/react学习/3.3-State进阶', 
            'react/react学习/4.1-React Router(1)', 
            'react/react学习/4.2-Ant Design', 
            'react/react学习/5.1-React Virtual DOM 原理', 
            'react/react学习/5.2-React Reconciliation-上', 
            'react/react学习/6.4-React Hooks', 
            'react/react学习/6.5-React New Feature', 
            'react/react学习/7.1-Redux 入门', 
            'react/react学习/7.2-Redux 进阶', 
            'react/react学习/7.4-Mobx 入门', 
            'react/react学习/7.5-Context API 前世今生', 
            'react/react学习/8.1-TypeScript', 
          ]
        },
        {
          title: 'vue',
          collapsable: true,
          children: [
            // 'vue/vue文档阅读/mixins'
            {
              title: 'vue文档阅读',
              collapsable: true,
              children: [
                'vue/vue文档阅读/mixins',
                'vue/vue文档阅读/4.自定义事件',
              ]
            },
            {
              title: 'vue学习',
              collapsable: true,
              children: [
                'vue/vue学习/1 初始Vue',
                'vue/vue学习/2 模块语法，常用指令，事件绑定',
                'vue/vue学习/3 计算属性及watch',
                'vue/vue学习/4 条件渲染和列表渲染',
                'vue/vue学习/5 表单处理',
                'vue/vue学习/6 组件',
                'vue/vue学习/7 渲染函数及jsx语法',
                'vue/vue学习/8 过渡与动画',
                'vue/vue学习/9 vue的生命周期',
                'vue/vue学习/10 自定义指令',
                'vue/vue学习/11 vue-cli',
                'vue/vue学习/12 组件化的深入',
                'vue/vue学习/13 Vuex的使用及设计思想',
                'vue/vue学习/14 Vue-router',
                'vue/vue学习/15 组件通信',
                'vue/vue学习/16 自定义插件',
                'vue/vue学习/17 单元测试',
                'vue/vue学习/18 Vue编译器原理探秘1',
                'vue/vue学习/19 Vue编译器原理探秘2',
                'vue/vue学习/22.数据层的高级封装之网易实践',
                'vue/vue学习/23.SSR的作用及Vue-SSR在网易中的实践',
              ]
            },
            {
              title: 'vue简单记录',
              collapsable: true,
              children: [
                'vue/vue简单记录/provide和inject刷新当前路由（页面）',
                'vue/vue简单记录/keep-live',
                'vue/vue简单记录/Vue中computed和watch的区别',
                'vue/vue简单记录/4.父子组件-组件传值（一）',
                'vue/vue简单记录/5.Vue中插入HTML代码的方法',
                'vue/vue简单记录/6.watch得执行顺序',
                'vue/vue简单记录/7.Vue.extend()实现MessageBox弹窗',
                'vue/vue简单记录/8.vue.config.js 配置',
                'vue/vue简单记录/9.Vuex mapAction的基本使用',
                'vue/vue简单记录/10.组件传值（二）',
              ]
            }
          ]
        }
      ],
      '/sourceCode/': [
        {
          title: 'jQuery',
          collapsable: true,
          children: [
            'jquery/1 jquery整体架构-核心功能函数揭秘',
            'jquery/2 选择器'
          ]
        }
      ],
      '/http/': [
        {
          title: 'http',
          collapsable: true,
          children: [
            '1.在html页面设置不缓存',
          ]
        }
      ],
      '/webapp/': [
        {
          title: '移动端app',
          collapsable: true,
          children: [
            '1 HTML简介',
            '2 HTML5 新增标签',
            '3 HTML5选择器 拖拽 History',
            '4 跨文档消息通讯',
            '5 地理信息、本地存储、离线存储',
            '6 音频 与 视频',
            '7 canvas',
            '8 css3 弹性盒子模型与移动端事件',
            '9 transform详解&移动自定义滑动区域',
            '10 H5陀螺仪&多指操作与兼容',
            '11 上滑加载&响应式布局',
            '12 滑屏组件 better-scroll',
          ]
        }
      ],
      '/weChatMiniProgram/': [
        {
          title: 'weChatMiniProgram',
          collapsable: true,
          children: [
            '1.微信小程序快速入门',
            '2.小程序工具和项目解构',
            '3.数据绑定',
            '4.列表渲染',
            '5.wxs语法',
            '6.事件系统',
            '7.生命周期和运行机制',
            '8.小程序页面路由及页面数据传递',
            '9.小程序基础组件介绍',
            '10.自定义组件',
            '11.轻松部署小程序后端',
            '12.微信小程序权限',
          ]
        }
      ],
      '/node/': [
        {
          title: 'node入门学习',
          collapsable: true,
          children: [
            '入门学习/1.es6快速入门',
            '入门学习/2.服务端开发入门-node静态服务端',
            '入门学习/3.Linux快速上手玩转典型应用',
            '入门学习/4.Nginx反向代理 静态资源服务',
            '入门学习/5.redis的入门与应用',
            '入门学习/6.MongoDB入门与应用',
            '入门学习/7.MySQL入门与应用',
            '入门学习/8.通讯协议详解',
            '入门学习/9.异步IO实现现状',
            '入门学习/10.异步编程的优势与难点',
            '入门学习/11.ES6+异步编程解决方案',
          ],
        },
        {
          title: 'Koa源码分析',
          collapsable: true,
          children: [
            'koa源码分析/1.Koa整体结构',
            'koa源码分析/2.Koa类构造函数设计',
            'koa源码分析/3.请求处理流程解读',
            'koa源码分析/4.中间件机制剖析',
            'koa源码分析/5.异常捕获和错误处理',
            'koa源码分析/6.compose简单实现',
          ],
        },
        {
          title: 'egg.js应用实践',
          collapsable: true,
          children: [
            'egg.js应用实践/1.Egg vs Koa',
            'egg.js应用实践/2.基础概念-Egg应用',
            'egg.js应用实践/3.基础功能（一）',
            'egg.js应用实践/4.基础功能（二）',
            'egg.js应用实践/5.插件运用',
            'egg.js应用实践/6.egg应用实践',
            'egg.js应用实践/7.本地开发',
          ],
        },
        {
          title: 'Node.js 自动化测试',
          collapsable: true,
          children: [
            'Node.js 自动化测试/1.自动化构建与持续集成',
            'Node.js 自动化测试/2.单元测试概述',
            'Node.js 自动化测试/3.单元测试实战与答疑',
            'Node.js 自动化测试/4.单元小结',
          ],
        },
        {
          title: '第三方模块使用',
          collapsable: true,
          children: [
            '第三方模块使用/1.inquirer交互式命令行工具',
            '第三方模块使用/2.node读写excel-node-xlsx',
            '第三方模块使用/3.ora一个优雅的终端微调器',
          ],
        },
        {
          title: 'node内置对象学习',
          collapsable: true,
          children: [
            'node内置对象学习/1.child_process',
            'node内置对象学习/2.process介绍（核心对象）',
            'node内置对象学习/3.fs',
            'node内置对象学习/4.os',
          ],
        },
        {
          title: 'node学习',
          collapsable: true,
          children: [
            'node学习/1.常用工具块',
            'node学习/2.文件操作',
            'node学习/3.buffer和流',
            'node学习/4.node做http, https等各种服务',
            'node学习/5.node框架express和koa',
            'node学习/6.koa实战BFF中间层',
            'node学习/7.node工程化案例',
          ],
        },
      ],
      '/interviewQuestions/': [
        {
          title: 'js',
          collapsable: true,
          children: [
            'js/1.箭头函数和构造函数的区别',
          ]
        },
        {
          title: 'internet',
          collapsable: true,
          children: [
            'internet/1.TCP ISN、三次握手、四次挥手',
          ]
        },
      ],
      '/demandSolution': [
        {
          title: 'demandSolution',
          collapsable: true,
          children: [
            'demandSolution/1.前端文件上传与文件相关操作',
            'demandSolution/2.vue组件设计的经验和技巧',
            'demandSolution/3.前端玩转excel,word操作指南',
            'demandSolution/4.前端接收后端文件指南',
            'demandSolution/5.axios请求二次封装',
          ]
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
