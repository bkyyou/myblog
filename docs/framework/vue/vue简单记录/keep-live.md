## keep-live 生命周期

```vue
<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
         <ul>
            <li><router-link to='/'>helloworld</router-link><li>
            <li><router-link to='/echart'>echart</router-link><li>
            <li><router-link to='/map'>map</router-link></li>
        </ul>
        
        <!-- <router-view></router-view> -->
 
        <!-- 方法一：缓存所有的 -->
        <keep-alive>
            <router-view/>
        </keep-alive>
 
        <!-- 方法二 -->
        <!-- 缓存模块名为List的模块，不会重复请求，其它模块重复请求 -->
        <keep-alive include="List">
            <router-view/>
        </keep-alive> 
        <!-- 不缓存模块名为List的模块，会重复请求，其它模块缓存 -->
        <keep-alive exclude="List">
            <router-view/>
        </keep-alive>
 
        <!-- 方法三 -->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view> 
    </div>
</template>
 
<script>
    export default {
        name: 'App'
        // activated,deactivated这两个生命周期函数一定是要在使用了keep-alive组件后才会有的，否则则不存在
        activated(){
            console.log('activated页面打开时触发');
        },
        deactivated(){
            console.log('deactivated页面关闭时触发');
        }
    } 
</script> 
```