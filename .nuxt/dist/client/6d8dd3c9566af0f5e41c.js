(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{251:function(t,e,o){"use strict";var n={props:["testobject"],data:function(){return{backendurl:"http://whostsite.com/",frontendurl:"http://front.whostsite.com/"}}},l=o(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"padding-bottom-xl bg-contrast-lower"},[o("div",{staticClass:"slideshow slideshow--transition-slide testimonial-slideshow js-slideshow",attrs:{"data-swipe":"on"}},[o("p",{staticClass:"sr-only"},[t._v("Slideshow Items")]),t._v(" "),o("ul",{staticClass:"slideshow__content"},t._l(t.testobject,(function(e,n){return o("li",{key:n,staticClass:"slideshow__item js-slideshow__item"},[o("div",{staticClass:"container max-width-sm"},[o("blockquote",{staticClass:"testimonial-slideshow__quote text-component"},[o("p",[t._v('"'+t._s(e.content)+'"')])]),t._v(" "),o("footer",{staticClass:"margin-top-md"},[o("figure",{staticClass:"testimonial-slideshow__img margin-bottom-sm",attrs:{"aria-hidden":"true"}},[e.image?o("img",{staticClass:"avatar__img",attrs:{src:t.backendurl+e.image.url}}):t._e()]),t._v(" "),o("cite",{staticClass:"testimonial-slideshow__cite"},[o("strong",[t._v(t._s(e.name))]),t._v(" "),o("span",[t._v(t._s(e.title))])])])])])})),0),t._v(" "),o("ul",[o("li",{staticClass:"slideshow__control js-slideshow__control"},[o("button",{staticClass:"reset slideshow__btn js-tab-focus"},[o("svg",{staticClass:"icon",attrs:{viewBox:"0 0 32 32"}},[o("title",[t._v("Show previous slide")]),o("path",{attrs:{d:"M20.768,31.395L10.186,16.581c-0.248-0.348-0.248-0.814,0-1.162L20.768,0.605l1.627,1.162L12.229,16 l10.166,14.232L20.768,31.395z"}})])])]),t._v(" "),o("li",{staticClass:"slideshow__control js-slideshow__control"},[o("button",{staticClass:"reset slideshow__btn js-tab-focus"},[o("svg",{staticClass:"icon",attrs:{viewBox:"0 0 32 32"}},[o("title",[t._v("Show next slide")]),o("path",{attrs:{d:"M11.232,31.395l-1.627-1.162L19.771,16L9.605,1.768l1.627-1.162l10.582,14.813 c0.248,0.348,0.248,0.814,0,1.162L11.232,31.395z"}})])])])])])])])}),[],!1,null,null,null);e.a=component.exports},263:function(t,e,o){"use strict";o.r(e);o(19),o(12),o(31);var n=o(44),l=(o(28),o(4)),r={head:function(){return{script:[]}},components:{testimonials:o(251).a},data:function(){return{backendurl:"http://whostsite.com/",frontendurl:"http://front.whostsite.com/"}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var o,l,r,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,t.query,e.next=3,Promise.all([o.$get("http://whostsite.com/home"),o.$get("http://whostsite.com/testimonials")]);case 3:return l=e.sent,r=Object(n.a)(l,2),c=r[0],m=r[1],e.abrupt("return",{home:c,tests:m});case 8:case"end":return e.stop()}}),e)})))()}},c=o(11),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("testimonials",{attrs:{testobject:t.tests}}),t._v(" "),o("section",{staticClass:"padding-y-xl",attrs:{id:"jcase"}},[o("div",{staticClass:"articles"},[o("div",{staticClass:"container max-width-adaptive-lg"},[t._m(1),t._v(" "),o("div",{staticClass:"grid grid-gap-sm"},[t._l(t.home.homecase,(function(e,n){return o("article",{key:n,staticClass:"story col-3@md"},[o("a",{staticClass:"story__img",attrs:{href:t.frontendurl+"article/"+e.slug}},[o("figure",[e.thumbnail?o("img",{attrs:{src:t.backendurl+e.thumbnail.url}}):t._e()])]),t._v(" "),o("div",{staticClass:"story__content"},[o("div",{staticClass:"text-component"},[o("h4",{staticClass:"story__title padding-bottom-xs"},[t._v(t._s(e.title))]),t._v(" "),o("span",{staticClass:"text-sm knowmore"},[t._v("了解更多")])])])])})),t._v(" "),o("p",{staticClass:"text-center"},[o("a",{staticClass:"margin-top-lg btn btn--primary",attrs:{href:t.frontendurl+"category/sharings"}},[t._v("查看更多")])])],2)])])])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"container max-width-adaptive-sm padding-y-xl"},[o("div",{staticClass:"text-component line-height-lg v-space-md"},[o("h1",[t._v("你準備好入讀心儀的英國學校了嗎？")]),t._v(" "),o("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 免費與我們進行1對1咨詢！")]),t._v(" "),o("form",[o("div",{staticClass:"margin-bottom-sm"},[o("label",{staticClass:"form-label margin-bottom-xxxs",attrs:{for:"input-email"}},[t._v("名字")]),t._v(" "),o("input",{staticClass:"form-control width-100%",attrs:{type:"text",name:"input-name"}})]),t._v(" "),o("div",{staticClass:"margin-bottom-sm"},[o("label",{staticClass:"form-label margin-bottom-xxxs",attrs:{for:"input-email"}},[t._v("電郵")]),t._v(" "),o("input",{staticClass:"form-control width-100%",attrs:{type:"email",name:"input-email"}})]),t._v(" "),o("div",{staticClass:"margin-bottom-sm"},[o("label",{staticClass:"form-label margin-bottom-xxxs",attrs:{for:"input-email"}},[t._v("電話")]),t._v(" "),o("input",{staticClass:"form-control width-100%",attrs:{type:"text",name:"input-phone"}})]),t._v(" "),o("div",{staticClass:"margin-bottom-sm"},[o("button",{staticClass:"btn btn--primary btn--md width-100%"},[t._v("立即預約")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("h3",{staticClass:"margin-bottom-lg"},[this._v("留學生分享")])])}],!1,null,null,null);e.default=component.exports}}]);