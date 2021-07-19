vue 学习记录


VUE动态加载路由是如何处理组件加载
https://www.jianshu.com/p/495588a49d8d
export const filterAsyncRouter = (routers) => { // 遍历后台传来的路由字符串，转换为组件对象
  return routers.filter(router => {
    if (router.component) {
      const component = router.component
      router.component = loadView(component)
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  })
}

export const loadView = (view) => {
  return () => import(`@/views/${view}`)
}


vue-cli3 会将public下的文件打包到 dist 目录下

Vue.js render函数那些事儿 
https://segmentfault.com/a/1190000022162951

基于VueJS的render渲染函数结合自定义组件打造一款非常强大的IView 的Table
https://segmentfault.com/a/1190000015970367/

完整vue项目地址
https://github.com/PanJiaChen/vue-element-admin

掘金网站 手摸手，带你用vue撸后台
https://juejin.cn/post/6844903478880370701

vue 生命周期
https://juejin.cn/post/6844904114879463437
