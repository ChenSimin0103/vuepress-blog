(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{245:function(v,_,r){"use strict";r.r(_);var t=r(0),e=Object(t.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"javascript-中常见设计模式整理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-中常见设计模式整理","aria-hidden":"true"}},[v._v("#")]),v._v(" JavaScript 中常见设计模式整理")]),v._v(" "),r("h3",{attrs:{id:"简单，常用的-设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单，常用的-设计模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 简单，常用的 设计模式")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("单例模式"),r("br"),v._v("\n每个构造函数(类)都只有唯一的一个实例"),r("br"),v._v("\n实现：定义构造函数时，在其中定义一个变量用于保存实例的创建状态，若实例没有被创建过，就创建这个实例，否则返回以创建的实例")])]),v._v(" "),r("li",[r("p",[v._v("工厂模式"),r("br"),v._v("\n使用 new 创建一个构造函数 的 实例"),r("br"),v._v("\n工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型。")])]),v._v(" "),r("li",[r("p",[v._v("桥接模式")])]),v._v(" "),r("li",[r("p",[v._v("组合模式")])]),v._v(" "),r("li",[r("p",[v._v("外观模式"),r("br"),v._v("\n将多个子接口封装为一个统一的总接口，统一管理，")]),v._v(" "),r("p",[v._v("例如：设计了多个解耦的模块，并在 index.js 中统一引入使用的方式")])]),v._v(" "),r("li",[r("p",[v._v("适配器模式"),r("br"),v._v("\n抽象多种需要同时兼容/支持的操作，以达到写一次代码，多处使用的方法，或者适配多种接口不同的对象，能让它们一起工作。")]),v._v(" "),r("p",[v._v("例如：向后端请求数据的接口同时适配真实后端接口和mock数据，并能通过参数控制，开发时使用mock数据，在前端业务逻辑开发完，后端接口也写好后，修改请求数据的封装接口的参数，切到真实后端接口，这样好处是 除了数据接口的参数，其他地方都不用变化")])]),v._v(" "),r("li",[r("p",[v._v("装饰者模式"),r("br"),v._v("\n对一个函数/对象/类 进行功能拓展的方法，即在不直接修改原对象的条件下，向原对象添加一些 非必要/额外功能（以后某一时刻可能不再需要的功能）")]),v._v(" "),r("p",[v._v("例如：")]),v._v(" "),r("ul",[r("li",[v._v("设计用来包装一个函数的高阶函数，向原函数添加 状态监控，节流 之类的功能。")]),v._v(" "),r("li",[v._v("typescript 中的 "),r("code",[v._v("@")]),v._v(" 装饰器(decorators)，向class 添加功能")])])]),v._v(" "),r("li",[r("p",[v._v("享元模式")])]),v._v(" "),r("li",[r("p",[v._v("观察者模式"),r("br"),v._v("\n观察者模式(Observer)又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。\n其添加了 "),r("code",[v._v("目标对象")]),v._v(" 和 "),r("code",[v._v("观察者")]),v._v(" 之间的 动态关联关系，是一种 广播和监听 的关系")])]),v._v(" "),r("li",[r("p",[v._v("命令模式"),r("br"),v._v("\n该模式旨在将函数的调用、请求和操作封装成一个单一的对象，然后对这个对象进行一系列的处理。"),r("br"),v._v("\n例如： 将一个对象的所有方法封装为一个总方法，调用总方法时额外传入一个参数(命令)来决定具体调用的是哪个方法。"),r("br"),v._v("\n其好处是 命令模式比较容易设计一个命令队列，在需求的情况下比较容易将命令计入日志，并且允许接受请求的一方决定是否需要调用"),r("code",[v._v("??")]),v._v("，而且可以实现对请求的撤销和重设"),r("code",[v._v("??")]),v._v("，而且由于新增的具体类不影响其他的类，所以很容易实现。")])]),v._v(" "),r("li",[r("p",[v._v("职责链模式\n例如： express框架中 的中间件处理模式，DOM事件里的事件冒泡和事件捕获机制")])])]),v._v(" "),r("h3",{attrs:{id:"较复杂的设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#较复杂的设计模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 较复杂的设计模式")])])}],!1,null,null,null);_.default=e.exports}}]);