(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{302:function(s,a,t){s.exports=t.p+"assets/img/P28_1.fa496aea.png"},303:function(s,a,t){s.exports=t.p+"assets/img/P28_2.18ec0eaa.png"},304:function(s,a,t){s.exports=t.p+"assets/img/P28_3.cc578459.png"},353:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"axios踩坑指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios踩坑指南"}},[s._v("#")]),s._v(" axios踩坑指南")]),s._v(" "),a("h3",{attrs:{id:"问题记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题记录"}},[s._v("#")]),s._v(" 问题记录")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("onMounted")]),s._v("执行"),a("code",[s._v("reqLogin")]),s._v("请求，却在浏览器找不到这个请求。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(302),alt:"image-20230722172119899"}})]),s._v(" "),a("p",[a("code",[s._v("判断")]),s._v("：我很纳闷，猜想如下几点出问题。")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("onMounted")]),s._v("没有进去，函数没有执行。")]),s._v(" "),a("li",[s._v("获取配置的环境变量不是"),a("code",[s._v("/api")]),s._v("。")])]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[s._v("onMounted(() => {\n  console.log(import.meta.env.VITE_APP_BASE_API)\n  reqLogin({ username: 'admin', password: '111111' })\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("code",[s._v("结果")]),s._v("：执行后数据都能打印出来，说明方法正确。")]),s._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("p",[s._v("后来经过长时间折腾，发现原来是这个问题。")]),s._v(" "),a("p",[s._v("当勾选第三方请求时，不会显示。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(303),alt:"image-20230722172922414"}})]),s._v(" "),a("p",[s._v("当取消勾选第三方请求时，会显示。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(304),alt:"image-20230722173035873"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);