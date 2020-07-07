# 12 滑屏组件 better-scroll
简介： betterScroll 是一款重点解决移动端各种滚动场景需求的开源插件， 适用于滚动列表，选择器，轮播图，索引列表，开屏引导等应用场景
基于原生 javascript 实现，不依赖任何框架， 所以既可以原生 javascript 引用， 也可以与目前前端 	MVVM 框架结合使用

is-scroll

## 初始 better-scroll

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Document</title>
    <style>
        body{
            margin: 0;
        }
        body,html{
            height: 100%;
        }
        ul,ol{
            list-style: none;
            padding: 0;
            margin: 0;
        }
       
        .con{
            width: 100vw;
            height: 100vh;
            /* 外框一定要设置高度 如果不设置 将没有效果 */
            /* background: green; */
            overflow: hidden;
        } 
        /* 横向滑屏 */
        ul{
            /* width: 150vw; */
        }
        ul>li{
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-indent: 20px;
            border-bottom: 1px solid #666666;
            color: #333333;
        }
    </style>
</head>
<body>
    <div class="con">
        <ul class="list">
            
        </ul>
        <!-- <div style="width: 100%;height: 200px;">
            546565
        </div> -->
    </div>
</body>
<script type="text/javascript" src="./bscroll.js"></script>
<script>
    function getData(){
        var list = document.querySelector(".list");
        var html = "";
        for(var i = 0; i < 30; i++){
            html += "<li>我是第"+(i+1)+"个li</li>"
        }
        list.innerHTML = html;
    }
    window.onload = () => {
        getData();
        initCon();
    }
    function  initCon(){
        var con = document.querySelector(".con");
        var bscroll = new BScroll(con,{
            // XY 偏移量
            // startX: 150,
            // startY: 150,
            // X轴是否可以滑屏
            scrollX:true,
             // X轴是否可以滑屏
             scrollY:true
        })
        bscroll.on("beforeScrollStart",()=>{
            // 开始滚动的时候
            console.log("66")
        })
    }
   
</script>
</html>
```

>  **只会对实例化的元素下的第一个元素生效，其它的不显示** 

## 制作幻灯片

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Document</title>
    <style>
         body{
            margin: 0;
        }
        body,html{
            height: 100%;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .con{
            width: 100vw;
            /* height: 100vh; */
            overflow: hidden;
            position: relative;
        } 
        
        .list{
            width: 400vw;
            overflow: hidden;
            position: relative;
        }
        .list li{
            width: 100vw;
            height: 200px;
            float: left;
            text-align: center;
            box-sizing: border-box;
            font:24px/200px "微软雅黑";
            background: chocolate;
            color: white;
            /* border:1px solid green; */
        }
        .nav{
            position: absolute;
            bottom: 10px;
            left: 0;
            width: 100vw;
            text-align: center;
        }
        .nav a{
            display: inline-block;
            width: 12px;
            height: 12px;
            line-height: 12px;
            background: white;
        }
        .nav a.active{
            background: orange;
        }
    </style>
    <script type="text/javascript" src="./bscroll.js"></script>
</head>
<body>
    <div class="con">
        <ul class="list">
            <li>我是li1</li>
            <li>我是li2</li>
            <li>我是li3</li>
            <li>我是li4</li>
        </ul>
        <nav class="nav">
            <a class="active"></a>
            <a></a>
            <a></a>
            <a></a>
        </nav>
    </div>
    <script>
       window.onload = ()=>{
           var con = document.querySelector(".con");
           var list= document.querySelector(".list");
           var navs= document.querySelectorAll(".nav a");
           var bscroll= new BScroll(con,{
               scrollX: true,
               scrollY:false,
							 momentum: false, // 过渡效果
							 // 无限滚动，定时等
               snap:{
									// loop:true
									// 滑动距离为屏幕的百分之多少 换下一张
                  threshold: 0.2,
               }
           })
           bscroll.on("scrollEnd",  ()=>{
               var index = bscroll.getCurrentPage().pageX;
               navs.forEach((nav) => {
                   if (nav) nav.classList.remove("active");
               })
               navs[index].classList.add("active");
           }) 
       }
    </script>
</body>
</html>
```

## 上滑加载与下拉刷新

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Document</title>
    <style>
    </style>
    <style>
        body{
            margin: 0;
        }
        body,html{
            height: 100%;
        }
        ul,ol{
            list-style: none;
            padding: 0;
            margin: 0;
        }
       
        .con{
            width: 100vw;
            height: 100vh;
            /* 外框一定要设置高度 如果不设置 将没有效果 */
            /* background: green; */
            overflow: hidden;
        } 
        /* 横向滑屏 */
        ul{
            /* width: 150vw; */
            position: relative;
        }
        ul>li{
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-indent: 20px;
            border-bottom: 1px solid #666666;
            color: #333333;
        }
        .pullUp:after{
            content: "加载中，请稍候...";
        }
        .pullDown:before{
            content: "正在刷新，请稍候...";
            position: absolute;
            top: -30px;
        }

    </style>
</head>
<body>
    <div class="con">
        <ul class="list">
            
        </ul>
    </div>
</body>
<script type="text/javascript" src="./bscroll.js"></script>
<script>
    var list = document.querySelector(".list");
    //数据加载
    function getData(){
        var html = "";
        for(var i = 0; i < 20; i++){
            html += "<li>我是第"+(i+1)+"个li</li>"
        }
        list.innerHTML = html;
    }
    //上滑加载 or 下拉刷新
    function getNewData(type){
        var html = "";
        for(var i = 0; i < 10; i++){
            html += "<li>新加载数据第"+(i+1)+"条</li>"
        }
        if(type === "up"){
            list.innerHTML += html;
        }else{
            list.innerHTML = html + list.innerHTML;
        }
    }

    
    window.onload = () => {
        getData();
        initCon();
    }
    // 初始化容器
    function initCon(){
        var con = document.querySelector(".con");
        var bscroll = new BScroll(con,{
            // 上滑加载
            pullUpLoad: {
                // 距离底部所剩距离
                threshold: 50
            },
            pullDownRefresh:{
                // 触发事件的阙值 px
                threshold: 50,
                //  加载过程中 容器停留的位置  px
                stop: 30
            }
        })
        // 上滑加载事件
        bscroll.on("pullingUp",()=>{
            // var fal = false;
            setTimeout(()=>{
                getNewData("up");
                list.classList.add("pullUp");
                // 告诉bs 结束了某个动作
                bscroll.finishPullUp();
                // 刷新节点 本地造数据 bs监听不到 导致dom刷新不及时
                bscroll.refresh();
            },1000)
        })

        // 下拉加载
        bscroll.on("pullingDown",()=>{
            list.classList.add("pullDown");
            setTimeout(()=>{
                getNewData("down");
                // 告诉bs 结束了某个动作
                bscroll.finishPullDown();
                bscroll.refresh();
                list.classList.remove("pullDown");
            },1000)
        })
    }

   
</script>
</html>
```

### 城市导航