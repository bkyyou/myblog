(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{578:function(v,_,e){v.exports=e.p+"assets/img/2.1.6b3fd86b.png"},579:function(v,_,e){v.exports=e.p+"assets/img/2.2.b4419f86.png"},923:function(v,_,e){"use strict";e.r(_);var t=e(10),l=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"_2-基础概念-egg应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-基础概念-egg应用"}},[v._v("#")]),v._v(" 2.基础概念-Egg应用")]),v._v(" "),_("p",[v._v("回顾初始化项目")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("mkdir egg-demo & cd egg-demo\nnpm init egg --type=simple\n")])])]),_("h2",{attrs:{id:"内置对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内置对象"}},[v._v("#")]),v._v(" 内置对象")]),v._v(" "),_("h3",{attrs:{id:"继承自-koa-的内置对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#继承自-koa-的内置对象"}},[v._v("#")]),v._v(" 继承自 Koa 的内置对象")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Application")])]),v._v(" "),_("li",[_("p",[v._v("Context")])]),v._v(" "),_("li",[_("p",[v._v("Request")])]),v._v(" "),_("li",[_("p",[v._v("Response")])]),v._v(" "),_("li",[_("p",[v._v("Application")]),v._v(" "),_("ul",[_("li",[v._v("全局应用对象，在一个应用下边，只会实例化一个")]),v._v(" "),_("li",[v._v("允许在它上面挂载一些全局的方法和对象")]),v._v(" "),_("li",[v._v("在编写应用时几乎在任何一个地方都能获取到 Applcation 对象")])])]),v._v(" "),_("li",[_("p",[v._v("Context")]),v._v(" "),_("ul",[_("li",[v._v("最常见的获取方式是在 MiddleWare , Controller 以及 Service 中。")]),v._v(" "),_("li",[v._v("Controller 中 获取 Context。")]),v._v(" "),_("li",[v._v("Service 中 获取 Context")]),v._v(" "),_("li",[v._v("Middleware 中 获取 Context")])])]),v._v(" "),_("li",[_("p",[v._v("Request 和 Response")]),v._v(" "),_("ul",[_("li",[v._v("Request 是一个请求级别的对象， Response 是一个请求级别的对象")]),v._v(" "),_("li",[v._v("与 Koa 一样，Egg 会在 Context 上代理一部分 Request 和 Response 上的方法和属性")]),v._v(" "),_("li",[v._v("ctx.request.query 和 ctx.query 是等价的，ctx.response.body= 和 ctx.body= 是等价的")]),v._v(" "),_("li",[v._v("获取请求对象 body 应该使用 ctx.request.body , 而不是使用 ctx.body")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("请求级别的对象: 每一次请求都会创建这个对象 "),_("br"),v._v("\nctx.body 请求的是 ctx.response.body  "),_("br"),v._v("\n等价的别名可以在koa的官网上查到")])]),v._v(" "),_("blockquote",[_("p",[v._v("get 请求 不推荐写 body")])]),v._v(" "),_("h3",{attrs:{id:"egg-自身扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#egg-自身扩展"}},[v._v("#")]),v._v(" Egg 自身扩展")]),v._v(" "),_("ul",[_("li",[v._v("Controller")]),v._v(" "),_("li",[v._v("Service")]),v._v(" "),_("li",[v._v("Helper")]),v._v(" "),_("li",[v._v("Config")]),v._v(" "),_("li",[v._v("Logger")])]),v._v(" "),_("p",[v._v("介绍")]),v._v(" "),_("ul",[_("li",[v._v("Egg 提供一个 Controller 基类， 并推荐 所有的 Controller 继承于该基类实现  (相当于C)")]),v._v(" "),_("li",[v._v("Egg 提供一个 Service 基类，  并推荐 所有的 Service 继承于该基类 实现  (相当于M)")]),v._v(" "),_("li",[v._v("这两个基类都有如下属性\n"),_("ul",[_("li",[v._v("ctx\t当前请求上下文实例")]),v._v(" "),_("li",[v._v("app\t当前的 Applcation 实例")]),v._v(" "),_("li",[v._v("config\t应用的配置项")]),v._v(" "),_("li",[v._v("service\t应用所有的 Service")]),v._v(" "),_("li",[v._v("controller\t应用所有的 Controller")]),v._v(" "),_("li",[v._v("logger\t为当前实例封装的 logger 对象")])])])]),v._v(" "),_("p",[v._v("MVC\nM Model 数据\nV View 视图\nC Controller 控制层")]),v._v(" "),_("ul",[_("li",[v._v("Helper")]),v._v(" "),_("li",[v._v("Helper 用来提供一些实用的 utility 函数。")]),v._v(" "),_("li",[v._v("我们可以将一些常用的动作抽离出来在 help.js 里面成为一个独立的函数")]),v._v(" "),_("li",[v._v("在 Context 的实例上获取到当前请求的 Helper 实例")]),v._v(" "),_("li",[v._v("Helper 实例还可以在模型中获取到")])]),v._v(" "),_("blockquote",[_("p",[v._v("只能通过 ctx.help 来访问")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Config")])]),v._v(" "),_("li",[_("p",[v._v("Egg 推荐应用开发遵循配置和代码分离的原则")])]),v._v(" "),_("li",[_("p",[v._v("配置文件支持各个不同的运行环境使用不同的配置")])]),v._v(" "),_("li",[_("p",[v._v("所有框架、插件和应用级别的配置都可以通过 Config 对象获取到")])]),v._v(" "),_("li",[_("p",[v._v("Logger")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("logger 对象的四个方法")]),v._v(" "),_("ol",[_("li",[v._v("logger.debug()")]),v._v(" "),_("li",[v._v("logger.info()")]),v._v(" "),_("li",[v._v("logger.warn()")]),v._v(" "),_("li",[v._v("logger.error()")])])]),v._v(" "),_("li",[_("p",[v._v("在框架中提供了多个 Logger 对象")]),v._v(" "),_("ol",[_("li",[v._v("App CoreLogger\n框架和插件需要通过它来打印应用级别的日志")]),v._v(" "),_("li",[v._v("ContextLogger\n与请求相关， 在前面带上一些当前请求相关的信息")]),v._v(" "),_("li",[v._v("ContextCoreLogger\n一般只有插件和框架会通过它来记录请求日志")]),v._v(" "),_("li",[v._v("Controller Logger 和 Service Logger\n其本质是一个ContextLogger")])])])])])]),v._v(" "),_("blockquote",[_("p",[v._v("每个 logger 都是一个实例")])]),v._v(" "),_("h2",{attrs:{id:"运行环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[v._v("#")]),v._v(" 运行环境")]),v._v(" "),_("h3",{attrs:{id:"运行环境指定和获取"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行环境指定和获取"}},[v._v("#")]),v._v(" 运行环境指定和获取")]),v._v(" "),_("ul",[_("li",[v._v("通过config/env文件指定， 该文件的内容就是运行环境")])]),v._v(" "),_("blockquote",[_("p",[v._v("直接在 config 文件夹 下面 建一个 env 文件 ， 无后缀名， 内容 prod...")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("// config/env\nprod\n")])])]),_("ul",[_("li",[v._v("通过 'EGG_SERVER_ENV' 环境变量指定运行环境更加方便，比如在生产环境启动应用")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("EGG_SERVER_ENV=prod npm start\n")])])]),_("p",[v._v("NODE_ENV=production npm run dev")]),v._v(" "),_("p",[v._v("此时就会加载config目录下的config.prod.js，并与config.default.js进行合并。同理")]),v._v(" "),_("p",[v._v("EGG_SERVER_ENV=testing1 npm start")]),v._v(" "),_("p",[v._v("此时就会加载config目录下的config.testing1.js，并与config.default.js进行合并。")]),v._v(" "),_("blockquote",[_("p",[v._v("config.default.js 为默认的配置文件，所有环境都会加载这个配置文件，一般也会作为开发环境的默认配置文件。当指定 env 时会同时加载对应的配置文件，并覆盖默认配置文件的同名配置。如：prod 环境会加载 config.prod.js 和 config.default.js 文件，config.prod.js 会覆盖 config.default.js 的同名配置。")])]),v._v(" "),_("ul",[_("li",[v._v("框架提供了变量 app.config.env 来表示应用当前的运行环境")])]),v._v(" "),_("blockquote",[_("p",[v._v("一个 Web 应用本身应该是无状态的，并拥有根据运行环境设置自身的能力")])]),v._v(" "),_("ul",[_("li",[v._v("EGG_SERVER_ENV\n"),_("ul",[_("li",[v._v("很多 Node.js 应用会使用 NODE_ENV 来区分运行环境")]),v._v(" "),_("li",[v._v("npm 也会使用这个变量， 在应用部署的时候一般不会安装开发依赖")]),v._v(" "),_("li",[v._v("Egg 支持自定义环境来适应自己的开发流程")]),v._v(" "),_("li",[v._v("在 Koa 中我们通过 app.env 来进行环境判断， 在 Egg 中， 配置统一都放置在 app.congfig上")])])])]),v._v(" "),_("blockquote",[_("p",[v._v("NODE_ENV 只有测试和生产环境")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("NODE_ENV")]),v._v(" "),_("th",[v._v("EGG_SERVER_ENV")]),v._v(" "),_("th",[v._v("注解")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("无")]),v._v(" "),_("td",[v._v("local")]),v._v(" "),_("td",[v._v("本地开发环境")])]),v._v(" "),_("tr",[_("td",[v._v("test")]),v._v(" "),_("td",[v._v("unittest")]),v._v(" "),_("td",[v._v("单元测试")])]),v._v(" "),_("tr",[_("td",[v._v("production")]),v._v(" "),_("td",[v._v("prod")]),v._v(" "),_("td",[v._v("生产环境")])])])]),v._v(" "),_("p",[v._v("例如，当NODE_ENV为production而EGG_SERVER_ENV未指定时，框架会将EGG_SERVER_ENV设置成prod。")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("NODE_ENV=production npm run start // app.config.env为 prod\nNODE_ENV=test npm run start // app.config.env为 test\nNODE_ENV=prod npm run dev // app.config.env为 local\nNODE_ENV=meng npm run dev // app.config.env为 local\n")])])]),_("p",[v._v("常规开发流程可能不仅仅只有以上几种环境，Egg 支持自定义环境来适应自己的开发流程。比如，要为开发流程增加集成测试环境 SIT。将 EGG_SERVER_ENV 设置成 sit（并建议设置 NODE_ENV = production），启动时会加载 config/config.sit.js，运行环境变量 app.config.env 会被设置成 sit。")]),v._v(" "),_("p",[v._v("在 Koa 中我们通过app.env来进行环境判断，app.env默认的值是process.env.NODE_ENV。但是在 Egg（和基于 Egg 的框架）中，配置统一都放置在app.config上，所以我们需要通过app.config.env来区分环境，app.env不再使用。app.config.env的值其实就是EGG_SERVER_ENV的值。")]),v._v(" "),_("blockquote",[_("p",[v._v("sit 集成测试")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("// 通过 创建文件夹来制定环境\n1. 在 config 文件夹下新建一个 env 文件\n2. 在 env 文件中 写上指定的环境， 可以是 自定义指定的环境\n")])])]),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("// 通过 'EGG_SERVER_ENV' 环境变量指定运行环境\n1. 在 cmd 中 设置临时环境变量  \n   set EGG_SERVER_ENV=prod     // 设置\n   set  // 查询当前的环境变量\n")])])]),_("p",[v._v("egg提供了egg-scripts来支持线上环境的运行和停止，默认会读取环境变量process.env.EGG_SERVER_ENV， 如未传递将使用框架内置环境prod。如下所示：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("egg-scripts start\n")])])]),_("p",[v._v("本地开发环境可以使用工具egg-bin，将以local为环境变量启动一个开发集群。如下所示：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("egg-bin dev\n")])])]),_("h2",{attrs:{id:"目录结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[v._v("#")]),v._v(" 目录结构")]),v._v(" "),_("p",[_("img",{attrs:{src:e(578),alt:"目录结构"}})]),v._v(" "),_("p",[v._v("app")]),v._v(" "),_("ul",[_("li",[v._v("router.js\t写路由的")]),v._v(" "),_("li",[v._v("controller\t控制器的文件夹")]),v._v(" "),_("li",[v._v("service(可选)  服务的文件夹")]),v._v(" "),_("li",[v._v("middlerware(可选)  中间件的文件夹")]),v._v(" "),_("li",[v._v("schedule(可选)  定时启动任务的文件夹")]),v._v(" "),_("li",[v._v("public(可选)  静态资源的文件夹")]),v._v(" "),_("li",[v._v("view(可选)  模板的文件夹")]),v._v(" "),_("li",[v._v("extend(可选)  专门用于扩展框架的文件夹")])]),v._v(" "),_("p",[v._v("config 配置文件")]),v._v(" "),_("p",[v._v("test 单元测试")]),v._v(" "),_("p",[_("img",{attrs:{src:e(579),alt:"文件作用"}})]),v._v(" "),_("blockquote",[_("p",[v._v("框架内置了 koa-static 或者是 express-static")])])])}),[],!1,null,null,null);_.default=l.exports}}]);