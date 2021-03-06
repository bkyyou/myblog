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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
            text: 'node',
            link: '/node/'
          },
          {
            text: 'http',
            link: '/http/'
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
              title: 'api', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                // '', // 你的md文件地址
                '原生api/Object.defineProperty()和defineProperties()',
                '原生api/hasOwnProperty,instanceof,typeof',
                '原生api/js中的隐式转换',
                '原生api/promise源码分析',

              ]
            },
            {
              title: '实用方法', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '实用方法/将数据转换成树结构',
              ]
            },
            {
              title: '作用域', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '作用域/if中的函数声明',
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
              title: '异步编程', // 侧边栏名称
              collapsable: true, // 可折叠
              children: [
                '异步编程/1.理解异步',
                '异步编程/2.Event Loop机制',
                '异步编程/3.异步编程方法-发布和订阅',
                '异步编程/4.深入理解promise',
              ]
            }

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
            'webpack/', // 你的md文件地址
            'webpack/1 webpack的使用',
            'webpack/2 webpack的核心概念',
            'webpack/3 webpack 打包',
            'webpack/4 js的编译',
            'webpack/26 webpack打包速度优化', // 你的md文件地址
            'webpack/27 webpack工程化实践'
          ]
        },
        {
          title: 'nvm', // 侧边栏名称
          collapsable: true, // 可折叠
          children: [
            'nvm/', // 你的md文件地址
          ]
        }
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
