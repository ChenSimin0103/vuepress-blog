(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{191:function(e,n,s){"use strict";s.r(n);var c=s(0),_=Object(c.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"content"},[s("p",[e._v("最近买了阿里云的云主机，装的是 Ubuntu 16.04 系统，是想用来跑node服务和熟悉linux系统操作的，现在把一些常用操作记录下来")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("screen 命令")]),e._v(" "),s("p",[e._v("要在远程主机跑服务，不受远程主机会话断开连接的影响，要用screen命令开一个新窗口来执行命令\n如： "),s("code",[e._v("screen node index.js")]),e._v("，"),s("code",[e._v("screen npm run dev")])])])]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("screen -ls")]),e._v(" 来查看 所有的screen")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("screen -r screenID")]),e._v("来进入某个screen，screenID一般为5位数字")]),e._v(" "),s("p",[e._v("在screen中输入 "),s("code",[e._v("exit")]),e._v(" 来关闭这个screen里的进程")]),e._v(" "),s("p",[e._v("或者：使用 "),s("code",[e._v("screen -S screenID -X quit")]),e._v(" 来直接退出某个screen")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[e._v("安装node环境（得安装较高版本的 >8.9.0，否则安装依赖时出问题）")])]),e._v(" "),s("li")])])}],!1,null,null,null);_.options.__file="linux基本操作.md";n.default=_.exports}}]);