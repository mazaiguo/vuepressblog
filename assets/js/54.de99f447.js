(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{352:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"集成sass踩坑指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成sass踩坑指南"}},[s._v("#")]),s._v(" 集成sass踩坑指南")]),s._v(" "),t("p",[s._v("报错信息：")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("vite"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Internal server error"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EISDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" illegal operation on a directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" read \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个报错的大概意思是："),t("code",[s._v("[vite]服务器内部错误:EISDIR:对目录进行非法操作，读取")])]),s._v(" "),t("p",[s._v("上网查了好多资料，网友们提供的解决方式五花八门，并没找到一个能真正有效的方法。")]),s._v(" "),t("p",[s._v("经过不断的折腾，在vite.js的issues中找到答案。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/zerocaesar/vue3-admin-guide/raw/master/image/p26_sass.png",alt:"p26_sass"}})]),s._v(" "),t("p",[s._v("可参考尤大的回答。"),t("code",[s._v("大意为引入文件路径要完整")])]),s._v(" "),t("p",[s._v("所以之前引入全局样式")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引入全局样式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/styles'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("需要改为")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引入全局样式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/styles/index.scss'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("改完立马生效。")])])}),[],!1,null,null,null);t.default=n.exports}}]);