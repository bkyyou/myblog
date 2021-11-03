(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{461:function(t,a,v){t.exports=v.p+"assets/img/1.1.208efc3a.png"},462:function(t,a,v){t.exports=v.p+"assets/img/1.2.d0e7faa7.png"},463:function(t,a,v){t.exports=v.p+"assets/img/1.3.8448a591.png"},464:function(t,a,v){t.exports=v.p+"assets/img/1.4.902877a9.png"},676:function(t,a,v){"use strict";v.r(a);var r=v(29),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_1-javascript中内存管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-javascript中内存管理"}},[t._v("#")]),t._v(" 1 JavaScript中内存管理")]),t._v(" "),r("h2",{attrs:{id:"数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),r("ul",[r("li",[t._v("原始数据类型\n字符串 （String）、数字 （Number）、 布尔 （Boolean）、 空对象 （Null）、 未定义 （Undefined）、Symbol （表示独一无二的值）")]),t._v(" "),r("li",[t._v("引用数据类型\nObject")]),t._v(" "),r("li",[t._v("内存空间\n栈内存 （stack） 、 堆内存（heap）")])]),t._v(" "),r("h2",{attrs:{id:"javascript-的垃圾回收机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-的垃圾回收机制"}},[t._v("#")]),t._v(" JavaScript 的垃圾回收机制")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("垃圾回收\n找出那些不在继续使用的变量，然后释放其所占用的内存， 垃圾回收器会按照固定的事件间隔周期性地执行这一操作")])]),t._v(" "),r("li",[r("p",[t._v("JavaScript 使用垃圾回收机制来自动管理内存， 垃圾回收是一把双刃剑\n优势： 可以大幅简化程序地内存管理代码， 减低程序员地负担， 减少因长时间运转而带来地内存泄漏问题\n不足：意味着程序员将无法掌控内存。JavaScript没有暴漏任何序内存的 api。我们无法强迫其进行垃圾回收， 更无法干预内存管理。")])])]),t._v(" "),r("h2",{attrs:{id:"垃圾回收机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[t._v("#")]),t._v(" 垃圾回收机制")]),t._v(" "),r("h3",{attrs:{id:"引用计数-reference-counting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引用计数-reference-counting"}},[t._v("#")]),t._v(" 引用计数 （reference counting）")]),t._v(" "),r("p",[t._v("跟踪记录每个值被引用的次数， 如果一个值引用次数是0， 就表示这个值不在用到了，因此可以将这块内存释放。")]),t._v(" "),r("ul",[r("li",[t._v("原理\n每次引用加一， 被释放时减一， 当这个值得引用次数变成 0 时， 就可以将其内存空间回收")])]),t._v(" "),r("blockquote",[r("p",[t._v("使用这种方式得bug ， 循环引用")])]),t._v(" "),r("h3",{attrs:{id:"标记清除"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[t._v("#")]),t._v(" 标记清除")]),t._v(" "),r("p",[t._v("标记清除指的是当变量进入环境时， 这个变量标记为 “进入环境”；而当变量离开环境时，则将其标记为 “离开环境” ， 最后， 垃圾回收器完成内存清除工作， 销毁那些带标记的值并回收它们所占用得内存空间")]),t._v(" "),r("p",[t._v("环境指的是执行环境")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("执行环境\n执行环境定义了变量或函数有权访问得其他数据，决定了他们各自得行为。每个执行环境都有一个与之关联得变量对象 （variable object）， 环境中定义得所有变量和函数都保存在这个对象中")])]),t._v(" "),r("li",[r("p",[t._v("全局执行环境")]),t._v(" "),r("ul",[r("li",[t._v("最外围得一个执行环境")]),t._v(" "),r("li",[t._v("根据宿主环境不同表示执行环境得对象也不一样。在浏览器中， 全局执行环境被认为是 window 对象， 在 node 中 全局执行环境是 globel")]),t._v(" "),r("li",[t._v("全局变量和函数都是作为 window 对象得属性和方法创建的")]),t._v(" "),r("li",[t._v("某个执行环境中的所有代码执行完毕后， 该环境被销毁，保存在其中的所有变量和函数定义页随之销毁")])])]),t._v(" "),r("li",[r("p",[t._v("环境栈 （局部）\n每个函数都有自己的执行环境。当执行流进入一个函数时， 函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将其环境弹出， 把控制权返回给之前的执行环境。ECMAScript 程序中执行流正是由这个方便的机制控制着")])])]),t._v(" "),r("h2",{attrs:{id:"v8-内存管理机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v8-内存管理机制"}},[t._v("#")]),t._v(" V8 内存管理机制")]),t._v(" "),r("h3",{attrs:{id:"限制内存的原因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#限制内存的原因"}},[t._v("#")]),t._v(" 限制内存的原因")]),t._v(" "),r("ul",[r("li",[t._v("V8 最初为浏览器而设计， 不太可能遇到大量内存的使用场景")]),t._v(" "),r("li",[t._v("防止因为垃圾回收所导致的线程暂停执行的时间过长")])]),t._v(" "),r("h3",{attrs:{id:"v8-的回收策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v8-的回收策略"}},[t._v("#")]),t._v(" V8 的回收策略")]),t._v(" "),r("p",[t._v("回收策略")]),t._v(" "),r("ul",[r("li",[t._v("V8 采用了一种分代回收的策略， 将内存分为两个生代： 新生代 和 老生代。")]),t._v(" "),r("li",[t._v("V8 分别对新生代和老生代使用不同的垃圾回收算法来提升垃圾回收的效率。")])]),t._v(" "),r("p",[t._v("新生代的内存结构\n"),r("img",{attrs:{src:v(461),alt:"动态路由匹配"}}),t._v(";")]),t._v(" "),r("blockquote",[r("p",[t._v("from 和 to 组成 Semispace\n现在 from 中进行分配\nfrom 空间中存放不需要回收的对象， to 空间中存放不需要回收的对象")])]),t._v(" "),r("p",[t._v("新生代对象的晋升")]),t._v(" "),r("ul",[r("li",[t._v("在新生代垃圾回收的过程中， 当一个对象经过多次赋值后依然存活， 它将会被认为是生命周期较长的对象， 随后会被移动到老生代中， 采用新的算法进行管理")]),t._v(" "),r("li",[t._v("在 from 空间和 to 空间进行反转的过程中， 如果 to 空间中的使用量已经超过了 25% , 那么From 中的对象直接晋升到老生代内存空间中")])]),t._v(" "),r("p",[t._v("老生代的内存结构\n老生代的内存结构是一个连续的结构分为： 标记清除 （mark sweep） 和 标记合并 （Mark Compact）\n"),r("img",{attrs:{src:v(462),alt:"老生代的内存结构"}}),t._v(";")]),t._v(" "),r("ul",[r("li",[t._v("标记清除 （mark sweep）\nMark Sweep 是将需要被回收的对象进行标记， 在垃圾回收运行时直接释放响应的地址空间")])]),t._v(" "),r("blockquote",[r("p",[t._v("红色部分为清除部分\n"),r("img",{attrs:{src:v(463),alt:"标记清除"}}),t._v(";\n产生问题： 产生了内存不连续的现象")])]),t._v(" "),r("ul",[r("li",[t._v("标记合并 （Mark Compact）\nMark Compact 将存活的对象移动到一边， 将需要被回收的对象移动到另一边， 然后对需要被回收的对象区域进行整体的垃圾回收")])]),t._v(" "),r("blockquote",[r("p",[t._v("蓝色部分为清除部分\n"),r("img",{attrs:{src:v(464),alt:"标记合并"}}),t._v(";")])])])}),[],!1,null,null,null);a.default=_.exports}}]);