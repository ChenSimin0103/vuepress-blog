(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{212:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"总结设计组件的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结设计组件的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结设计组件的方法")]),t._v(" "),s("p",[t._v("独立组件的开发的侧重点是 API 的设计、兼容性、性能、以及复杂的功能。\n而独立组件不含业务，在任何项目中都可以使用，功能单一，比如一个具有数据校验功能的输入框")]),t._v(" "),s("p",[t._v("业务组件是包含部分业务内容，但也需要具有好的复用性和可维护性")]),t._v(" "),s("p",[t._v("在组件开发中，最难的环节应当是解耦组件的交互逻辑，尽量把复杂的逻辑分发到不同的子组件中，然后彼此建立联系，在这其中，计算属性（computed）和混合（mixins）是两个重要的技术点，合理利用，就能发挥出 Vue.js 语言的最大特点：把状态（数据）的维护交给 Vue.js 处理，我们只专注在交互上。")]),t._v(" "),s("p",[t._v("设计一个组件时，先构思使用场景，写几个使用样例，再根据使用的方式及功能设计api")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("遵循state唯一的原则，比如在vue里维护全局状态并映射至组件中，或react里无状态组件，完全接受父组件的数据源的props的设计方式")])]),t._v(" "),s("li",[s("p",[t._v("组件的表现功能，需要在组件中实现，使用时，父组件不应有除了子组件配置以外的其他业务逻辑代码，功能甚至html代码段都可作为配置项（配置为一个函数的引用，字符串等），以此为子组件添加新功能")])]),t._v(" "),s("li")])])}],!1,null,null,null);e.default=n.exports}}]);