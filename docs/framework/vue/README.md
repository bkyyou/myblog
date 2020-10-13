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