(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{972:function(e,a,t){"use strict";t.r(a);var s=t(10),v=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_8-通讯协议详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-通讯协议详解"}},[e._v("#")]),e._v(" 8.通讯协议详解")]),e._v(" "),a("h2",{attrs:{id:"计算机网络协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络协议"}},[e._v("#")]),e._v(" 计算机网络协议")]),e._v(" "),a("p",[e._v("网络协议：计算机网络和分布系统中互相通信的对等实体之间交换信息时必须遵守的规则的集合。")]),e._v(" "),a("ul",[a("li",[e._v("负责在网络上建立通信通道和控制通过通道的信息流的规则")]),e._v(" "),a("li",[e._v("协议依赖于网络体系结构，由硬件和软件协同实现\n"),a("ul",[a("li",[e._v("网络体系结构：指通信系统的整体设计方案，是计算机之间相互通信的层次、以及各层中的协议和层次之间接口的集合，它为网络硬件和软件、协议、存取、控制和网络图谱提供标准。\n"),a("ul",[a("li",[e._v("OSI/RM：由ISO（国际化标准组织）统一规定的互联网参考模型，Open System Interconnection Reference Model（开放系统互连参考模型）")]),e._v(" "),a("li",[e._v("TCP/IP四层模型")]),e._v(" "),a("li",[e._v("TCP/IP五层模型")])])])])])]),e._v(" "),a("p",[e._v("网络协议由三要素组成：")]),e._v(" "),a("ul",[a("li",[e._v("语义：解释控制信息每一部分的意义。规定了需要发出何种控制信息，以及完成的动作与做出何种响应。")]),e._v(" "),a("li",[e._v("语法：用户数据与控制信息的结构与格式，以及数据出现的顺序。")]),e._v(" "),a("li",[e._v("时序：对事件发生顺序的详细说明。")])]),e._v(" "),a("blockquote",[a("p",[e._v("语义表示要做什么，语法表示要怎么做，时序表示做的顺序。")])]),e._v(" "),a("h2",{attrs:{id:"开放系统互连参考模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放系统互连参考模型"}},[e._v("#")]),e._v(" 开放系统互连参考模型")]),e._v(" "),a("p",[e._v("国际标准化组织（ISO）提出“开放系统互连参考模型”，将计算机网络体系结构的通信协议划分为七层：")]),e._v(" "),a("ul",[a("li",[e._v("应用层（Application Layer）")]),e._v(" "),a("li",[e._v("表示层（Pressentation Layer）")]),e._v(" "),a("li",[e._v("会话层（Session Layer）")]),e._v(" "),a("li",[e._v("传输层（Transport Layer）")]),e._v(" "),a("li",[e._v("网络层（Network Layer）")]),e._v(" "),a("li",[e._v("数据链路层（Data Link Layer)")]),e._v(" "),a("li",[e._v("物理层（Physics Layer)")])]),e._v(" "),a("blockquote",[a("p",[e._v("计算机应用程序到物理层，再从物理层到另一个计算机的应用程序，数据不断添加头部信息，然后再依次把头部信息剥掉。")]),e._v(" "),a("p",[e._v("在数据链路层传输过程中，不仅添加了头部信息，还添加了一个尾部帧，将数据封装称数据帧，由此来控制差错。")]),e._v(" "),a("p",[e._v("层与层之间的交互遵循的约定叫“接口”，同层之间的交互遵循的约定叫“协议”。")]),e._v(" "),a("p",[e._v("举个例子：两个好朋友通过电话来互相联系，他们都在用中文直接对话。这个过程可以抽象为“语言层”和“通信设备层”的交互，这两层的接口为调制器和解调器（将音频转为电信号，电信号转为音频信号）；而语言层遵循的协议就是“中文”，通信设备层遵循的协议为“无线电协议”或者说“电话协议”。")])]),e._v(" "),a("h3",{attrs:{id:"物理层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[e._v("#")]),e._v(" 物理层")]),e._v(" "),a("p",[e._v("物理层的作用是规定“0”和“1”代表电压的高低，灯光的明灭，规 定网线和连接器的规格等。")]),e._v(" "),a("p",[e._v("物理层也叫实体层，就是用物理实体的手段将电脑之间连接起来。")]),e._v(" "),a("h3",{attrs:{id:"链路层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路层"}},[e._v("#")]),e._v(" 链路层")]),e._v(" "),a("p",[e._v("光有物理层远远不够，0和1究竟会怎样去组合，不同的划分代表了什么意思，这就需要链路层来处理，它将0和1划分为具有意义的数据帧进行传送。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("以太网")]),e._v(" "),a("blockquote",[a("p",[e._v("在众多数据链路中，最广泛的为以太网（Ehernet，介质）的意思。以太网规定一组电信号为一个数据包，一个数据包包含了标头(head)和数据(data)。标头部分包括了"),a("strong",[e._v("目标MAC地址")]),e._v("(6字节)、"),a("strong",[e._v("源MAC地址")]),e._v("(6字节)，"),a("strong",[e._v("数据类型")]),e._v("(2字节)，就好像我们寄快递，写明收货人地址、发货人地址、以及货物的类别；数据(46-1500字节)部分就是真正传输的具体内容。")])])]),e._v(" "),a("li",[a("p",[e._v("MAC地址")]),e._v(" "),a("blockquote",[a("p",[e._v("Mac就好像我们每个人的身份证一样，全世界唯一（出去自己在微板上设置MAC地址的情况），在使用网卡的情况下，MAC（48比特，6字节）地址会呗烧到ROM里面。")]),e._v(" "),a("p",[e._v("数据包的传输，其实就是在一块块网卡之间进行的，因此以太网规定，连入互联网的设备，必须具备网卡接口。")])])]),e._v(" "),a("li",[a("p",[e._v("广播")]),e._v(" "),a("blockquote",[a("p",[e._v("网卡想知道另一块网卡在哪里怎么办，很古老的方法，像村里边，想让所有人知道明天要开会的消息，用挂在水泥杆上的大口径 喇叭，来广播放消息，好让我们所有人都接收到通知。")]),e._v(" "),a("p",[e._v("数据包以广播(Broadcasting)的方式，发送给本网络中的全部网卡，让各个计算机自己判断要还是不要。")])])])]),e._v(" "),a("h3",{attrs:{id:"网络层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[e._v("#")]),e._v(" 网络层")]),e._v(" "),a("p",[e._v("广播的方式是低效的，而且只局限在发送者的子网络，那么要是想找到别的子网络MAC地址，就需要Internet将他们相互连接在一起。网络层就出现了，让每一台主机都拥有一个除了MAC地址外的另一个重要的东西：IP地址。IP地址能帮助我们确定计算机所在的子网络。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("IP地址")]),e._v(" "),a("blockquote",[a("p",[e._v("规定IP地址的约定叫做“IP协议”。IP地址由网络和主机两部分标识组成，相同段内项链的主机必须由相同的网络地址，可是在相同网段内的主机不可以拥有相同的主机识别码，这样就保证了IP地址的唯一性。IPV4地址由32位证书来表示，人们为了方便，将其转换为每8位一组，共四组十进制的数来表示。")]),e._v(" "),a("p",[a("em",[e._v("所以全世界最多能容纳43亿个ipv4地址连接到互联网。")])])])]),e._v(" "),a("li",[a("p",[e._v("子网掩码")]),e._v(" "),a("blockquote",[a("p",[e._v("是子网络的特征参数，子网掩码用二进制表示的话，也是一个32位的数字，知道了子网掩码后，我们就可以判断两个IP地址是否在同一个子网络，方法是将两个IP地址分别与子网掩码进行AND运算，如果得出一致的结果，则表示在同一个子网掩码里面。")])])]),e._v(" "),a("li",[a("p",[e._v("DNS")]),e._v(" "),a("blockquote",[a("p",[e._v("在我们日常生活中，很少去输入这些数字去访问一个网站，都是输入域名去浏览网站。于是DNS（Domain Name System，域名系统)就出现了。你只需要输入域名，DNS就会帮你检索对应IP地址的数据库，并且迅速定位其IP地址。")])])]),e._v(" "),a("li",[a("p",[e._v("ARP")]),e._v(" "),a("blockquote",[a("p",[e._v("ARP 是解决地址问题的协议，以目标IP地址为线索，用来定位对应设备的MAC地址。如果二者不在同一个链路上面，那么就通过ARP查找下一个路由器的MAC。如果在同一个链路上，会把第一次通过ARP获取到的MAC地址作为IP对MAC的一个映射关系记录到一个缓存表，类似于电话本。")])])]),e._v(" "),a("li",[a("p",[e._v("IP数据包")]),e._v(" "),a("blockquote",[a("p",[e._v("根据IP协议发送的数据包叫IP数据包，他也包含head和data两个部分，其中head部分包括了版本、长度、ip地址；data部分则是包的具体内容，并且IP数据包时放在以太网数据包的data部分，完全不用修改以太网规格，只不过由于长度限制，需要分包发送。")])])])]),e._v(" "),a("h3",{attrs:{id:"传输层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[e._v("#")]),e._v(" 传输层")]),e._v(" "),a("p",[e._v("有了以上三层就可以建立通信了，可是那些数据究竟如何给电脑里边的应用程序呢？这时候就需要端口(port)，通过不同端口，服务器将数据分给不同程序(进程)。传输层就是建立"),a("strong",[e._v("端口到端口")]),e._v("的通信，网络层是"),a("strong",[e._v("主机到主机")]),e._v("的通信。只要确定了"),a("strong",[e._v("端口和主机")]),e._v("那么就可以实现交流了。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("UDP协议")]),e._v(" "),a("blockquote",[a("p",[e._v("一种面向**无连接（通信的两个应用程序之间的虚拟电路）**的通信服务，无复杂的控制机制，传输途中发生任何意外，也不负责重发，用户（程序编写者）说什么它就听什么。UDP随时发送数据，处理起来简单粗暴，因此经常用于以下方面：")]),e._v(" "),a("ul",[a("li",[e._v("及时通讯（视频、语音）")]),e._v(" "),a("li",[e._v("广播通信")]),e._v(" "),a("li",[e._v("包总量较少的通信（DNS）")])]),e._v(" "),a("p",[e._v("UDP也包含了head(8字节)和data两个部分，head部分包括了接收和发送的端口，然后又将整个数据包塞到IP数据包当中。")])])]),e._v(" "),a("li",[a("p",[e._v("TCP协议")]),e._v(" "),a("blockquote",[a("p",[e._v("UDP快，但是不可靠，所以就需要一种稳定的传输方式。TCP就是一种面向连接的、可靠的通信协议")])])]),e._v(" "),a("li",[a("p",[e._v("TCP三次握手")]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("甲：“你能收到吗？”")]),e._v(" "),a("li",[e._v("乙：“可以收到，你可以收到我吗？”")]),e._v(" "),a("li",[e._v("甲：“我可以收到你，准备传输！”")])]),e._v(" "),a("p",[e._v("接下来就是传输数据的过程。")])]),e._v(" "),a("p",[e._v("IP:A和IP:B的互传数据：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("第一次握手：A向B发送一个SKN=1，随机产生一个seq number=x，要求建立联机。")])]),e._v(" "),a("li",[a("p",[e._v("第二次握手：B接收到要求建立联机的请求，向A发送了一个ack number=x+1,sky=1,ack=1,并且随机产生seq number=y。")])]),e._v(" "),a("li",[a("p",[e._v("第三次握手：A会检查B发送过来的ack number是否为x+1，以及ack是否为1，如果是，就向B发送一个ack number=y+1,ack=1，连接建立成功")])])])]),e._v(" "),a("li",[a("p",[e._v("TCP四次挥手")]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("甲：“请求断开连接。”")]),e._v(" "),a("li",[e._v("乙：“收到”")]),e._v(" "),a("li",[e._v("乙：“断开连接”")]),e._v(" "),a("li",[e._v("甲：“收到”")])])]),e._v(" "),a("p",[e._v("详细过程：")]),e._v(" "),a("ul",[a("li",[e._v("第一次挥手：甲向乙发送一个FIN报文:seq number=x,ack number=y 请求断开连接")]),e._v(" "),a("li",[e._v("第二次挥手：乙向甲发送一个ack number = x+1，代表我同意你断开连接的请求")]),e._v(" "),a("li",[e._v("第三次挥手：乙向甲发送一个FIN报文:seq number=y 请求关闭连接")]),e._v(" "),a("li",[e._v("第四次挥手：甲收到乙的报文，并且发送ack number=y+1，乙收到这个报文就关闭连接，甲等待几秒没有收到回复后，就说明对方已经关闭，于是甲也断开连接")])])])]),e._v(" "),a("h3",{attrs:{id:"会话层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会话层"}},[e._v("#")]),e._v(" 会话层")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("建立会话")]),e._v(" "),a("p",[e._v("A、B两台网络设备之间要通信，要建立一条会话他们使用，在建立会话的过程中也会由身份验证，权限鉴定等环节。")]),e._v(" "),a("blockquote",[a("p",[e._v('A向B共享一个文件夹，B通过执行"\\\\192.168.2.1"访问A的共享文件夹，这时B电脑会弹出一个验证框，要求输入A电脑上的账号密码，输入A电脑的账号密码后，就能访问A共享出来的文件夹。')]),e._v(" "),a("p",[e._v("如果A电脑上设置这个账号没有对共享文件夹的访问权限，那么B进入A的共享文件列表时，无法读取文件列表，因为没有权限。")]),e._v(" "),a("p",[e._v("这就是会话建立时的身份验证、权限鉴定过程。")])])]),e._v(" "),a("li",[a("p",[e._v("保持会话")]),e._v(" "),a("p",[e._v("通信会话建立后，通信双方开始传递数据，当数据传递完成后，会话层不一定会立刻将这条通信会话断开，他会根据应用程序和应用层设置对该会话进行维护，在会话维持期间两者都可以随时使用这条会话传输数据")]),e._v(" "),a("blockquote",[a("p",[e._v("假设会话层设置的断开时间设置为60分钟，B电脑从A共享文件夹拷贝了自己需要的文件只花了10分钟，然后关闭了A共享窗口。此时关闭的是一个进程，然后而不是这条会话。")]),e._v(" "),a("p",[e._v('过了5分钟，A又向B共享了一个新文件，B再次执行"\\\\192.168.2.1"访问A共享文件夹，此时不用再次验证A的用户名密码了，直接可以进入共享文件夹，因为这条会话还没有断开，之前的身份和权限验证过程直接省略。')])])]),e._v(" "),a("li",[a("p",[e._v("断开会话")]),e._v(" "),a("p",[e._v("当应用程序或应用层规定的超时事件到期后，会话层将释放这条会话。A、B重启、关机、手动执行断开连接操作时，也会将会话断开。")]),e._v(" "),a("blockquote",[a("p",[e._v('A又向B共享另一个文件，然后电脑A此时重启了以下电脑，B再次执行"\\\\192.168.2.1"访问A共享文件夹，这时需要再次输入A的用户名和密码。因为A重启电脑的时候，电脑A的会话层将这条连接释放掉了。当过了60分钟后，电脑A、B也会释放该条会话连接。')])])])]),e._v(" "),a("h3",{attrs:{id:"表示层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表示层"}},[e._v("#")]),e._v(" 表示层")]),e._v(" "),a("p",[e._v("它的主要作用之际就是为异种机通信提供一种公共语言，以便进行交互操作。表示层处理所有与数据表示及运输有关的问题，包括转码、加密、压缩。每台计算机可能由自己的表示数据的方法，如ASCII码，所以需要表示层协议来保证不同计算机可以彼此理解。")]),e._v(" "),a("ul",[a("li",[e._v("语法转换：将抽象语法转换成传送语法，并在对方实现相反的转换（即将传送语法转换成抽象语法）。设计的内容有代码转换、字符转换、数据格式的修改，以及对数据结构操作的适应、数据压缩、加密等。")]),e._v(" "),a("li",[e._v("语法协商：根据应用层的要求协商选用合适的上下文，即确定传送语法并传送。")]),e._v(" "),a("li",[e._v("连接管理：包括利用会话层服务建立表示连接，管理在这个连接之上的数据运输和同步控制以及正常地或异常地终止连接。")])]),e._v(" "),a("h3",{attrs:{id:"应用层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[e._v("#")]),e._v(" 应用层")]),e._v(" "),a("p",[e._v("应用层也称为应用实体，它由若干个特定应用服务元素(CASE)和一个或多个公用应用服务元素(CASE)组成。每个CASE提供特定的应用服务。")]),e._v(" "),a("p",[e._v("网络感知应用软件：应用程序是指人们用于网络通信的软件程序。有些终端用户应用程序是网络感知应用程序，即这些应用程序实现了应用层协议，并可直接与协议栈的较低层通信。电子邮件客户端程序和web浏览器就属于这类型的应用程序。")]),e._v(" "),a("h2",{attrs:{id:"http协议详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议详解"}},[e._v("#")]),e._v(" HTTP协议详解")]),e._v(" "),a("blockquote",[a("p",[e._v("HTTP协议是Hyper Text Transfer Protocol(超文本传输协议)的缩写，是用于从万维网传输超文本到本地浏览器的传输协议。HTTP是基于TCP/IP通信协议来传递数据的，属于OSI/RM中的应用层协议。")]),e._v(" "),a("ul",[a("li",[e._v("HTTP协议通常承载于TCP协议之上，有时也承载于TLS或SSL协议层之上，这个时候，就称为了我们常说的HTTPS。")]),e._v(" "),a("li",[e._v("HTTP默认端口为80，HTTPS的默认端口号为443")]),e._v(" "),a("li",[e._v("浏览网页时HTTP的主要应用，但并不代表HTTP只能应用于网页浏览。HTTP是一种协议，只要通信的双方都遵守这种协议，HTTP就有用武之地，比如我们常用的QQ、迅雷等软件，都会使用HTTP协议。")])])]),e._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),a("p",[e._v("HTTP协议定义web客户端如何从web服务器请求web页面，以及服务器如何把web页面传送给客户端。HTTP协议采用了"),a("strong",[e._v("请求/响应模型")]),e._v("。客户端向服务器发送一个请求报文，请求报文包含请求的方法、URL、协议版本、请求头部和请求数据。服务器以一个状态行作为响应，响应的内容包括协议的版本、成功或错误代码、服务器信息、响应头和响应数据。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("客户端连接到web服务器")]),e._v(" "),a("p",[e._v("一个HTTP客户端，通常是浏览器与web服务器的HTTP端口（默认80）建立一个TCP套接字连接。")])]),e._v(" "),a("li",[a("p",[e._v("发送HTTP请求")]),e._v(" "),a("p",[e._v("通过TCP套接字，客户端向web服务器发送一个文本的请求报文。")])]),e._v(" "),a("li",[a("p",[e._v("服务器接受请求并返回HTTP响应")]),e._v(" "),a("p",[e._v("web服务器解析请求，定位请求资源。")])]),e._v(" "),a("li",[a("p",[e._v("释放TCP连接")]),e._v(" "),a("p",[e._v("若connection模式为close，则服务器主动关闭TCP请求，客户端被动关闭连接，释放TCP连接；若connection模式为keep-alive，则该链接会保持一段时间，在时间段内能继续接收请求；")])]),e._v(" "),a("li",[a("p",[e._v("客户端浏览器解析HTML内容")])])]),e._v(" "),a("h3",{attrs:{id:"消息结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息结构"}},[e._v("#")]),e._v(" 消息结构")]),e._v(" "),a("p",[e._v("HTTP是基于C/S架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。一个HTTP“客户端”是一个应用程序，通过连接到服务器，达到向服务器发送一个或多个HTTP请求的目的。一个HTTP“服务器”同样也是一个应用程序，通过接收客户端请求并向客户端发送HTTP响应数据。HTTP使用统一资源定位符（Uniform Resource Identifiers,URI)来传输数据和建立连接。一旦建立连接，数据消息通过类似Internet邮件所使用的格式（RFC5322)和多用途Internet邮件扩展(RFC2045)来传送。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("客户端请求消息")]),e._v(" "),a("p",[e._v("客户端发送一个HTTP请求消息包括以下格式：请求行（request line)、请求头（header)、空行和请求数据四个部分组成。")])]),e._v(" "),a("li",[a("p",[e._v("服务端响应消息")]),e._v(" "),a("p",[e._v("HTTP响应也由四个部分组成：状态行、消息报头、空行、响应报文")])])]),e._v(" "),a("h3",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[e._v("#")]),e._v(" 工作流程")]),e._v(" "),a("p",[e._v("一次HTTP操作称为一个事务，其工作过程可分为四步骤：")]),e._v(" "),a("ol",[a("li",[e._v("首先客户机于服务器需要建立连接。只要单击某个超级链接，HTTP的工作就开始了。")]),e._v(" "),a("li",[e._v("建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源定位符、协议版本号，后面是MIME信息、客户机信息和可能有的内容。")]),e._v(" "),a("li",[e._v("服务器接收到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的状态码，后边是MIME信息、服务器信息、实体信息和可能有的内容。")]),e._v(" "),a("li",[e._v("客户端接收服务器返回的信息，通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。")])]),e._v(" "),a("h3",{attrs:{id:"http请求方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求方法"}},[e._v("#")]),e._v(" HTTP请求方法")]),e._v(" "),a("p",[e._v("根据HTTP标准，HTTP请求可以使用多种请求方法。")]),e._v(" "),a("p",[e._v("HTTP1.0 定义了三种请求方法："),a("code",[e._v("GET")]),e._v("、"),a("code",[e._v("POST")]),e._v(" 和"),a("code",[e._v("HEAD")]),e._v("方法。")]),e._v(" "),a("p",[e._v("HTTP1.1 新增了五种请求方法："),a("code",[e._v("OPTIONS")]),e._v("、"),a("code",[e._v("PUT")]),e._v("、"),a("code",[e._v("DELETE")]),e._v("、"),a("code",[e._v("TRACE")]),e._v("和"),a("code",[e._v("CONNECT")]),e._v("方法。")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("GET \t\t\t\t请求指定的页面信息，并返回实体主体")]),e._v(" "),a("li",[e._v("HEAD\t\t\t  类似于GET请求，不过返回的响应中没有具体内容，用于获取报头")]),e._v(" "),a("li",[e._v("POST\t\t\t  向指定资源提交数据进行处理请求（例如提交表单、上传文件）。数据被包含在请求体中，POST请求会导致新的资源的建立 和 已有资源的修改。")]),e._v(" "),a("li",[e._v("PUT\t\t\t    从客户端向服务器传送的数据取代指定的文档的内容。")]),e._v(" "),a("li",[e._v("DELETE\t\t   请求服务器删除指定的页面")]),e._v(" "),a("li",[e._v("CONNECT\t\tHTTP/1.1协议中预留给能够将连接该文管道方式的代理服务器。")]),e._v(" "),a("li",[e._v("OPTIONS\t\t  允许客户端查看服务器的性能。")]),e._v(" "),a("li",[e._v("TRACE\t\t\t  回显服务器收到的请求，主要用于测试或诊断。")])])]),e._v(" "),a("p",[e._v("GET 和 POST的区别")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("GET请求的数据会放在URL上，以?分割URL和传输数据，参数之间以&相连；")]),e._v(" "),a("p",[e._v("POST方法是把提交数据放到HTTP包的body中。")])]),e._v(" "),a("li",[a("p",[e._v("GET提交的数据大小有限制（因为浏览器对URL长度有限制）；")]),e._v(" "),a("p",[e._v("POST方法提交的数据没有限制。")])]),e._v(" "),a("li",[a("p",[e._v("GET方式直接从URL的queryString部分获取值；")]),e._v(" "),a("p",[e._v("POST方式使用formData来获取变量的值。")])]),e._v(" "),a("li",[a("p",[e._v("GET方式提交数据，会带来安全问题，因为变量的值会出现在URL上，无法加密；")]),e._v(" "),a("p",[e._v("POST方式不会显示 提交的信息")])])]),e._v(" "),a("h3",{attrs:{id:"请求报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[e._v("#")]),e._v(" 请求报文")]),e._v(" "),a("p",[e._v("客户端发送一个HTTP请求到服务器的请求消息包括以下格式：")]),e._v(" "),a("p",[a("strong",[e._v("请求行")]),e._v("、"),a("strong",[e._v("请求头")]),e._v("、"),a("strong",[e._v("空行")]),e._v(" 和 "),a("strong",[e._v("请求数据")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("GET请求报文")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token method property"}},[e._v("GET")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token request-target url"}},[e._v("/templets/default/images/logo.gif")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("www.hxexam.com")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("keep-alive")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("max-age=0")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Upgrade-Insecure-Requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("1")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Encoding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("gzip, deflate")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("If-None-Match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v('"102923-4e8a-579e2bdf3bb7d"')])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("If-Modified-Since")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Mon, 05 Nov 2018 03:47:19 GMT")])]),e._v("\n")])])]),a("ul",[a("li",[a("p",[e._v("第一部分： 请求行，用来说明请求类型，要访问的资源以及所使用的HTTP版本")]),e._v(" "),a("p",[e._v("GET 说明请求类型为 GET ，后边接要访问的资源，最后一部分说明使用的是HTTP 1.1的版本")])]),e._v(" "),a("li",[a("p",[e._v("第二部分：请求头部，用来说明服务器要使用的附加信息")]),e._v(" "),a("p",[e._v("从第二行起为请求头，Host指请求目标主机；User-Agent字段，服务器和客户端脚本都能访问，用来检测浏览器类型的重要基础。")])]),e._v(" "),a("li",[a("p",[e._v("第三部分：空行，请求头后面的空行是必须的")])]),e._v(" "),a("li",[a("p",[e._v("第四部分：请求数据，也叫主体，可以添加任意的其它数据。")]),e._v(" "),a("p",[e._v("该例中，请求数据为空")])])])]),e._v(" "),a("li",[a("p",[e._v("POST请求报文")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token method property"}},[e._v("POST")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token request-target url"}},[e._v("/login/")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("passport.233.com")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("User-Agent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("keep-alive")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Cache-Control")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("no-cache")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("application/x-www-form-urlencoded")])]),e._v("\n\nuser=aaa&pass=aaa\n")])])]),a("ul",[a("li",[e._v("第一部分：请求行，说明本次请求为POST请求，请求路径为/login/，协议版本为HTTP 1.1")]),e._v(" "),a("li",[e._v("第二部分：请求头，说明User-Agent、Connection、Accept等字段信息")]),e._v(" "),a("li",[e._v("第三部分：空行")]),e._v(" "),a("li",[e._v("第四部分：请求数据，数据格式为x-www-form-urlencoded")])])])]),e._v(" "),a("h3",{attrs:{id:"响应报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[e._v("#")]),e._v(" 响应报文")]),e._v(" "),a("p",[e._v("一般情况下，服务器接收并处理客户端发过来的请求后会返回一个HTTP的响应消息。")]),e._v(" "),a("p",[e._v("HTTP响应也由四个部分组成："),a("strong",[e._v("状态行")]),e._v("、"),a("strong",[e._v("响应头")]),e._v("、"),a("strong",[e._v("空行")]),e._v("、"),a("strong",[e._v("响应正文")])]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[a("span",{pre:!0,attrs:{class:"token http-version property"}},[e._v("HTTP/1.1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token status-code number"}},[e._v("200")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[e._v("OK")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Tue, 24 Mar 2020 09:16:56 GMT")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Apache")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Last-Modified")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Tue, 24 Mar 2020 07:34:41 GMT")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("ETag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v('"1033dd-1070c-5a194c8e4db08"')])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Accept-Ranges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("bytes")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Vary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Accept-Encoding,User-Agent")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Encoding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("gzip")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("13951")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Keep-Alive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("timeout=15, max=299")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("Keep-Alive")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Content-Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[e._v("text/html")])]),e._v("\n")])])]),a("ul",[a("li",[a("p",[e._v("第一部分：状态行，由HTTP协议版本、状态码和状态消息组成")]),e._v(" "),a("p",[e._v("HTTP/1.1表明协议版本为HTTP 1.1，响应状态码 200，响应状态消息为 ok")])]),e._v(" "),a("li",[a("p",[e._v("第二部分：响应头，用来说明客户端要使用的一些信息")]),e._v(" "),a("p",[e._v("Data 指生成响应的日期时间；Content-Type指定MIME类型为 text/html，服务器程序为 Apache")])]),e._v(" "),a("li",[a("p",[e._v("第三部分：空行，响应头后边的空行是必须的")])]),e._v(" "),a("li",[a("p",[e._v("第四部分：响应正文，服务器返回给客户端的文本信息")]),e._v(" "),a("p",[e._v("空行后边的内容为 HTML代码")])])]),e._v(" "),a("h3",{attrs:{id:"http状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[e._v("#")]),e._v(" HTTP状态码")]),e._v(" "),a("p",[e._v("状态码由三位数字组成，第一个数字定义了响应类别，共分为五个类别：")]),e._v(" "),a("ul",[a("li",[e._v("1xx：指示信息\t\t\t\t表示请求已接收，继续处理")]),e._v(" "),a("li",[e._v("2xx：成功\t\t\t\t\t\t表示请求已成功接收")]),e._v(" "),a("li",[e._v("3xx：重定向\t\t\t\t\t表示要完成请求必须进行进一步的操作")]),e._v(" "),a("li",[e._v("4xx：客户端错误\t\t\t 表示请求由语法错误或者请求无法实现")]),e._v(" "),a("li",[e._v("5xx：服务器错误\t\t\t 表示服务器未能实现合法请求")])]),e._v(" "),a("blockquote",[a("p",[e._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status")])])])}),[],!1,null,null,null);a.default=v.exports}}]);