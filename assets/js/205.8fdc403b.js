(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{770:function(_,v,t){"use strict";t.r(v);var a=t(29),l=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_3-列的数据类型讲解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-列的数据类型讲解"}},[_._v("#")]),_._v(" 3.列的数据类型讲解")]),_._v(" "),t("h2",{attrs:{id:"_3-1-数据库的列类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-数据库的列类型"}},[_._v("#")]),_._v(" 3.1 数据库的列类型")]),_._v(" "),t("ol",[t("li",[_._v("数值")])]),_._v(" "),t("ul",[t("li",[_._v("tinyint")])]),_._v(" "),t("p",[_._v("十分小的数据，1个字节")]),_._v(" "),t("ul",[t("li",[_._v("smalllint")])]),_._v(" "),t("p",[_._v("较小的数据，2个字节")]),_._v(" "),t("ul",[t("li",[_._v("mediumint")])]),_._v(" "),t("p",[_._v("中等大小的字节， 3个字节")]),_._v(" "),t("ul",[t("li",[_._v("int (常用的) java int")])]),_._v(" "),t("p",[_._v("标准的存储，4个字节")]),_._v(" "),t("ul",[t("li",[_._v("bigint")])]),_._v(" "),t("p",[_._v("较大的数据， 8个字节")]),_._v(" "),t("ul",[t("li",[_._v("float")])]),_._v(" "),t("p",[_._v("浮点数， 4个字节")]),_._v(" "),t("ul",[t("li",[_._v("double")])]),_._v(" "),t("p",[_._v("浮点数，8个字节")]),_._v(" "),t("p",[_._v("精度问题")]),_._v(" "),t("ul",[t("li",[_._v("decimal （金融常用）")])]),_._v(" "),t("p",[_._v("字符串形式的浮点数，金融计算的时候，一般使用")]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("字符串")])]),_._v(" "),t("ul",[t("li",[_._v("char")])]),_._v(" "),t("p",[_._v("字符串固定大小 0-255")]),_._v(" "),t("ul",[t("li",[_._v("varchar (常用) 常用的变量 java String")])]),_._v(" "),t("p",[_._v("可变字符串  0-65525")]),_._v(" "),t("ul",[t("li",[_._v("tinytext")])]),_._v(" "),t("p",[_._v("微型文本  2^8 - 1")]),_._v(" "),t("ul",[t("li",[_._v("text")])]),_._v(" "),t("p",[_._v("文本串  2^16 - 1")]),_._v(" "),t("p",[_._v("保存大文本")]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("时间日期")])]),_._v(" "),t("p",[_._v("java.util.Date")]),_._v(" "),t("ul",[t("li",[_._v("date")])]),_._v(" "),t("p",[_._v("YYYY-MM-DD 日期")]),_._v(" "),t("ul",[t("li",[_._v("time")])]),_._v(" "),t("p",[_._v("HH:mm:ss  时间格式")]),_._v(" "),t("ul",[t("li",[_._v("datetime (最常用的)")])]),_._v(" "),t("p",[_._v("YYYY-MM-DD  HH:mm:ss")]),_._v(" "),t("ul",[t("li",[_._v("timestamp")])]),_._v(" "),t("p",[_._v("时间戳， 1970.1.1 到现在的毫秒数，也较为常用")]),_._v(" "),t("ul",[t("li",[_._v("year")])]),_._v(" "),t("p",[_._v("年份表示")]),_._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[_._v("null")])]),_._v(" "),t("p",[_._v("没有值，未知")]),_._v(" "),t("blockquote",[t("p",[_._v("不要使用 NULL 进行金蒜，结果为 NULL")])]),_._v(" "),t("h2",{attrs:{id:"_3-2-数据库的字段属性-重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-数据库的字段属性-重点"}},[_._v("#")]),_._v(" 3.2 数据库的字段属性（重点）")]),_._v(" "),t("ol",[t("li",[_._v("Unsigned")])]),_._v(" "),t("ul",[t("li",[_._v("无符号的整数")]),_._v(" "),t("li",[_._v("不能声明为负数")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("zerofill")])]),_._v(" "),t("ul",[t("li",[_._v("0 填充")]),_._v(" "),t("li",[_._v("不足的位数使用 0 来填充， int(3)  5  005")])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("自增")])]),_._v(" "),t("ul",[t("li",[_._v("通常理解为自增，自动再上一条的基础上 +1 （默认）")]),_._v(" "),t("li",[_._v("通常用来设计唯一的主键 index，必须是整数类型")]),_._v(" "),t("li",[_._v("可以自定义设计主键的起始值和步长")])]),_._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[_._v("非空 NULL not null")])]),_._v(" "),t("ul",[t("li",[_._v("假设设计为 not null， 如果不给他赋值，就会报错")]),_._v(" "),t("li",[_._v("NULL， 如果不填写值，默认就是 null")])]),_._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[_._v("默认")])]),_._v(" "),t("ul",[t("li",[_._v("设置默认值")]),_._v(" "),t("li",[_._v("sex， 默认值为男， 如果不指定该列的值，则会有默认值")])]),_._v(" "),t("h3",{attrs:{id:"表中必备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表中必备"}},[_._v("#")]),_._v(" 表中必备")]),_._v(" "),t("p",[_._v("id  主键  "),t("br"),_._v(" "),t("code",[_._v("version")]),_._v("  乐观锁   "),t("br"),_._v("\nis_delete  伪删除    "),t("br"),_._v("\ngmt_cteate   创建时间  "),t("br"),_._v("\ngmt_update   修改时间")]),_._v(" "),t("h2",{attrs:{id:"_3-3-mysql-语句-重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-mysql-语句-重点"}},[_._v("#")]),_._v(" 3.3 mysql 语句 （重点）")]),_._v(" "),t("blockquote",[t("p",[_._v("注意：使用英文（），表的名称和字段尽量使用起来，用 `` 扩起来\n字符串使用 单引号或者双引号\n所有的语句后面加 ',' 最后一个不用加\nPRIMARY KEY 主键，一般一个表只有一个唯一的主键")])]),_._v(" "),t("ol",[t("li",[_._v("查看语句")])]),_._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("# 查看创建数据库的语句\nSHOW CREATE DATABASE school\n\n# 查看 student 数据表的定义语句\nSHOW CREATE TABLE student \n\n# 查看表的具体结构\nDESC student\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[_._v("创建表")])]),_._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("CREATE TABLE IF NOT EXISTS `student` (\n\t`id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',\n\t`name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',\n\t`pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',\n\t`sex` VARCHAR(2) NOT NULL DEFAULT  '女' COMMENT '性别',\n\t`birthday` DATETIME DEFAULT NULL COMMENT '出生日期',\n\t`address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',\n\t`email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',\n\tPRIMARY KEY (`id`)\n ) ENGINE=INNODB DEFAULT CHARSET=utf8\n")])])]),t("p",[_._v("格式")]),_._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("CREATE TABLE [IF NOT EXISTS] `表名` (\n  '字段名' 列类型 [属性] [索引] [注释],\n  '字段名' 列类型 [属性] [索引] [注释],\n  ...\n  '字段名' 列类型 [属性] [索引] [注释]\n)[表类型][字符集设置][注释]\n")])])]),t("h2",{attrs:{id:"_3-3-关于数据库的引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-关于数据库的引擎"}},[_._v("#")]),_._v(" 3.3 关于数据库的引擎")]),_._v(" "),t("p",[_._v("INNODB 默认使用")]),_._v(" "),t("p",[_._v("MYISAM  早些年使用")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("1")]),_._v(" "),t("th",[_._v("MYISAM")]),_._v(" "),t("th",[_._v("INNODB")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("事物支持")]),_._v(" "),t("td",[_._v("不支持")]),_._v(" "),t("td",[_._v("支持")])]),_._v(" "),t("tr",[t("td",[_._v("数据行锁定")]),_._v(" "),t("td",[_._v("不支持")]),_._v(" "),t("td",[_._v("支持")])]),_._v(" "),t("tr",[t("td",[_._v("外键约束")]),_._v(" "),t("td",[_._v("不支持")]),_._v(" "),t("td",[_._v("支持")])]),_._v(" "),t("tr",[t("td",[_._v("全文索引")]),_._v(" "),t("td",[_._v("支持")]),_._v(" "),t("td",[_._v("不支持")])]),_._v(" "),t("tr",[t("td",[_._v("表空间大小")]),_._v(" "),t("td",[_._v("较小")]),_._v(" "),t("td",[_._v("较大，约为 2 倍")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-1-常规使用操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-常规使用操作"}},[_._v("#")]),_._v(" 3.3.1 常规使用操作")]),_._v(" "),t("ul",[t("li",[_._v("MYISAM 节约空间，速度较快")]),_._v(" "),t("li",[_._v("INNODB  安全性高，事物的处理，多表多用户操作")])]),_._v(" "),t("h3",{attrs:{id:"_3-3-2-在物理空间存在的位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-在物理空间存在的位置"}},[_._v("#")]),_._v(" 3.3.2 在物理空间存在的位置")]),_._v(" "),t("p",[_._v("所有的数据库文件都存在 data 目录下，一个文件夹就对应一个数据库，本质还是文件存储！")]),_._v(" "),t("h3",{attrs:{id:"_3-3-3-mysql-引擎在物理文件上的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-mysql-引擎在物理文件上的区别"}},[_._v("#")]),_._v(" 3.3.3 MySQL 引擎在物理文件上的区别")]),_._v(" "),t("ul",[t("li",[_._v("InnoDB 在数据库表中只有一个 *.frm 文件，以及上级目录下的 ibdata1 文件")]),_._v(" "),t("li",[_._v("MYISAM 对应文件\n"),t("ul",[t("li",[_._v("*.frm - 表结构的定义文件")]),_._v(" "),t("li",[_._v("*.MYD - 数据文件（data）")]),_._v(" "),t("li",[_._v("*.MYI - 索引文件（index）")])])])]),_._v(" "),t("h3",{attrs:{id:"_3-3-4-设置数据库表的字符集编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-设置数据库表的字符集编码"}},[_._v("#")]),_._v(" 3.3.4 设置数据库表的字符集编码")]),_._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("CHARSET=utf8\n")])])]),t("blockquote",[t("p",[_._v("不设置的话，会是 mysql 默认的字符集编码（不支持中文）")])]),_._v(" "),t("p",[_._v("MySQL默认编码是 Latin1， 不支持中文")]),_._v(" "),t("ul",[t("li",[_._v("修改")])]),_._v(" "),t("p",[_._v("在 my.ini 中配置默认的编码（不推荐）")]),_._v(" "),t("div",{staticClass:"language-s extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("character-set-server=utf8\n")])])])])}),[],!1,null,null,null);v.default=l.exports}}]);