(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1004:function(t,a,n){"use strict";n.r(a);var _=n(10),s=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_7-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-事务"}},[t._v("#")]),t._v(" 7.事务")]),t._v(" "),a("h2",{attrs:{id:"_7-1-什么是事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-什么是事务"}},[t._v("#")]),t._v(" 7.1 什么是事务")]),t._v(" "),a("p",[t._v("要么都成功，要么都失败")]),t._v(" "),a("hr"),t._v(" "),a("ol",[a("li",[t._v("sql 执行， A 给 B 钱 转账 A1000 -> 200 B200")]),t._v(" "),a("li",[t._v("SQL 执行， B 收到钱 A 800 B400")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("将一组sql放在一个批次中去执行")]),t._v(" "),a("h2",{attrs:{id:"_7-2-事务原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-事务原则"}},[t._v("#")]),t._v(" 7.2 事务原则")]),t._v(" "),a("blockquote",[a("p",[t._v("事务原则： ACID 原则，原则性，一致性，隔离性，持久性 （脏读...）")])]),t._v(" "),a("p",[t._v("最终一致性")]),t._v(" "),a("ul",[a("li",[t._v("原则性")])]),t._v(" "),a("p",[t._v("要么都成功，要么都失败")]),t._v(" "),a("ul",[a("li",[t._v("一致性")])]),t._v(" "),a("p",[t._v("事务前后的数据完整性保持一致 （总数不变）")]),t._v(" "),a("ul",[a("li",[t._v("隔离性")])]),t._v(" "),a("p",[t._v("事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事物的操作数据所干扰，事务之间要相互隔离")]),t._v(" "),a("ul",[a("li",[t._v("持久性")])]),t._v(" "),a("p",[t._v("事务没有提交，恢复到原装")]),t._v(" "),a("p",[t._v("事务已经提交，持久化到数据库")]),t._v(" "),a("blockquote",[a("p",[t._v("事务一旦提交不可逆")])]),t._v(" "),a("h3",{attrs:{id:"_7-2-1-隔离性所导致的一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-1-隔离性所导致的一些问题"}},[t._v("#")]),t._v(" 7.2.1 隔离性所导致的一些问题")]),t._v(" "),a("ul",[a("li",[t._v("脏读")])]),t._v(" "),a("p",[t._v("指一个事务读取了另外一个事务未提交的数据")]),t._v(" "),a("ul",[a("li",[t._v("不可重复读")])]),t._v(" "),a("p",[t._v("在一个事务内读取表中的某一个数据，多次读取结果不同。（这个不一定是错误，只是某些场合不对）")]),t._v(" "),a("ul",[a("li",[t._v("虚读 （幻读）")])]),t._v(" "),a("p",[t._v("是指一个事务内读取到了别的事务插入的数据，导致前后读取不一致")]),t._v(" "),a("h2",{attrs:{id:"_7-3-测试事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-测试事务"}},[t._v("#")]),t._v(" 7.3 测试事务")]),t._v(" "),a("blockquote",[a("p",[t._v("mysql 是默认开启事务自动提交的")])]),t._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# mysql 是默认开启事务自动提交的\nSET autocommit = 0 /* 关闭 */\nSET autocommit = 1 /* 开启 （默认开启） */\n\nSET autocommit = 0\n-- 开始事务\nSTART TRANSACTION -- 标记一个事务的开始，从这个开始的 sql 都在同一个事务内\n\n-- 提交 持久化 （成功）\nCOMMIT\n-- 回滚 回到以前的样子 （失败）\nROLLBACK\n\nSET autocommit = 1  -- 开启自动提交\n\n-- 事务结束\n\n-- 了解\nSAVEPOINT -- 保存点名 设置一个事务的保存点 了解\nROLLBACK TO SAVEPOINT 保存点名 -- 回滚到保存点\nRELEASE SAVEPOINT 保存点名 -- 撤销保存点\n")])])]),a("h3",{attrs:{id:"_7-3-1-模拟场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-1-模拟场景"}},[t._v("#")]),t._v(" 7.3.1 模拟场景")]),t._v(" "),a("div",{staticClass:"language-s extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-- 转账\nCREATE DATABASE shop CHARACTER SET utf8 COLLATE utf8_general_ci;\n\nUSE shop;\n\nCREATE TABLE account (\n\tid INT(3) NOT NULL AUTO_INCREMENT,\n\t`name` VARCHAR(30) NOT NULL,\n\tmoney DECIMAL(9, 2) NOT NULL,\n\tPRIMARY KEY (id)\n) ENGINE=INNODB DEFAULT CHARSET=utf8\n\nINSERT INTO account(`name`, money) VALUE('a', 2000.00), ('b', 10000.00)\n\n-- 模拟转账\nSET autocommit = 0; -- 关闭事务\nSTART TRANSACTION; -- 开启一个事务\n\nUPDATE account SET money = money - 500 WHERE `name` = 'a';\nUPDATE account SET money = money + 500 WHERE `name` = 'b';\n\nCOMMIT; -- 提交事务， 一提交，就被持久化了\nROLLBACK; -- 回滚\n\nSET autocommit = 1; -- 恢复默认值\n")])])]),a("p",[a("img",{attrs:{src:n(660),alt:"事务代码用法"}}),t._v(";")])])}),[],!1,null,null,null);a.default=s.exports},660:function(t,a,n){t.exports=n.p+"assets/img/8.1.e5e700d0.jpg"}}]);