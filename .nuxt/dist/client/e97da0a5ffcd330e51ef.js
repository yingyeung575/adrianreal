(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{252:function(t,e,n){"use strict";var c={props:["subjectobject"],data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}}},r=n(11),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-width-adaptive-lg  container margin-bottom-xl "},[n("div",{staticClass:"grid justify-center bg-contrast-lower innersubject padding-bottom-xl"},t._l(t.subjectobject,(function(e,c){return n("div",{key:c,staticClass:"col-2"},[n("a",{staticClass:"anone",attrs:{href:t.frontendurl+"subject/"+e.slug}},[n("div",{staticClass:"popular-subjects"},[n("div",{staticClass:"\bjsubject"},[n("div",{staticClass:"grid"},[n("div",{staticClass:"col-4 text-left"},[n("div",{staticClass:"jsubject-icon"},[n("span",{domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("svg",{staticClass:"jajaja",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"}})])])]),t._v(" "),n("div",{staticClass:"col-1"}),t._v(" "),n("div",{staticClass:"col-6"},[n("h4",{staticClass:"color-white text-base"},[t._v(t._s(e.name))])])])])])])])})),0)])])}),[],!1,null,null,null);e.a=component.exports},268:function(t,e,n){"use strict";n.r(e);n(28);var c=n(4),r={components:{subjects:n(252).a},data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://whostsite.com/faqs");case 3:return c=e.sent,e.next=6,n.$get("https://whostsite.com/faqpage");case 6:return r=e.sent,e.abrupt("return",{faqs:c,pagecontent:r});case 8:case"end":return e.stop()}}),e)})))()}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"padding-y-xxl"},[n("div",{staticClass:"container max-width-sm"},t._l(t.pagecontent.maincontent,(function(content,e){return n("div",{key:e},[content.title?n("h3",{staticClass:"margin-bottom-md"},[t._v(t._s(content.title))]):t._e(),t._v(" "),content.faq?n("ul",{staticClass:"accordion  js-accordion margin-bottom-xl",attrs:{"data-animation":"on","data-multi-items":"off"}},t._l(content.faq,(function(e,c){return n("li",{key:c,staticClass:"accordion__item js-accordion__item"},[n("button",{staticClass:"accordion__header js-tab-focus",attrs:{type:"button"}},[n("span",{staticClass:"accordion__header-title"},[t._v(t._s(e.question))]),t._v(" "),t._m(1,!0)]),t._v(" "),n("div",{staticClass:"accordion__panel js-accordion__panel"},[n("div",{staticClass:"accordion__panel-content"},[n("div",{staticClass:"text-component margin-bottom-md"},[n("p",[t._v(t._s(e.answer))])])])])])})),0):t._e()])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"padding-y-xxl bgmore",staticStyle:{"background-image":"url('/img/mainbg.jpg')"}},[e("div",{staticClass:"container max-width-adaptive-sm"},[e("div",{staticClass:"hero__content text-center"},[e("div",{staticClass:"text-component margin-bottom-sm"},[e("h1",{staticClass:"color-white"},[this._v("常見問題")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("em",{staticClass:"accordion__header-icon",attrs:{"aria-hidden":"true"}},[e("i")])}],!1,null,null,null);e.default=component.exports}}]);