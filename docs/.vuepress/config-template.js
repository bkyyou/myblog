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
			// {
			//   text: 'VuePress',
			//   link: 'https://v1.vuepress.vuejs.org'
			// }
		],
		sidebar: {
			// '/guide/': [
			//   {
			//     title: 'Guide',
			//     collapsable: false,
			//     children: [
			//       '',
			//       'using-vue',
			//     ]
			//   }
			// ],
			'/js/': [
				{
					title: 'js篇',
					collapsable: false,
					children: [
						// '',
						'原生api/Object.defineProperty()和defineProperties()',
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
						'', // 你的md文件地址
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
								'vue/vue文档阅读/mixins'
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
							]
						},
						{
							title: 'vue简单记录',
							collapsable: true,
							children: [
								'vue/vue简单记录/父子组件',
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
						'jquery/1 jquery整体架构-核心功能函数揭秘'
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
					]
				}
			]
			// '/tool/webpack/': [
			//   {
			//     title: 'webpack',
			//     collapsable: true,
			//     children: [
			//       '',
			//       '26 webpack打包速度优化',
			//       // ['/webpack', '']
			//       // {
			//       //   title: 'webpack',
			//       //   collapsable: false,
			//       //   children: [
			//       //     '',
			//       //     ,
			//       //   ]
			//       // }

			//     ]
			//   },
			//   {
			//     title: 'nvm',
			//     collapsable: true,
			//   }
			// ],
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
