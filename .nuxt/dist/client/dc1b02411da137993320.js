(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{269:function(t,e,r){"use strict";r.r(e);r(28);var n=r(4),o={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",noofpost:10}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.query,n=t.params,o=0,n.page&&(o=10*(n.page-1)),e.next=5,r.$get("https://whostsite.com/deadlines?_limit=10&_start="+o+"&_sort=date:DESC");case 5:return l=e.sent,e.next=8,r.$get("https://whostsite.com/deadlines/count");case 8:return c=e.sent,e.abrupt("return",{articles:l,noarticles:c});case 10:case"end":return e.stop()}}),e)})))()},methods:{gopage:function(t){return"/news/page/"+t}},computed:{backlink:function(){return"/news/page/"+(parseInt(this.$route.params.page)-1)},nextlink:function(){var t=2;return this.$route.params.page&&(t=parseInt(this.$route.params.page)+1),"/news/page/"+t},maxpage:function(){return this.noarticles%this.noofpost==0?parseInt(this.noarticles/this.noofpost):parseInt(this.noarticles/this.noofpost+1)},currentPage:function(){return this.$route.params.page?this.$route.params.page:1},filteredarticles:function(){return this.articles}}},l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"padding-y-xxl bgmore",style:"background-image: url("+t.frontendurl+"img/mainbg.jpg);"},[t._m(0)]),t._v(" "),r("section",{staticClass:"padding-bottom-xxl padding-top-lg"},[r("div",{staticClass:"container max-width-adaptive-sm"},[t._l(t.filteredarticles,(function(article,e){return r("article",{key:e,staticClass:"story-v2"},[r("div",{staticClass:"story-v2__meta"},[r("span",{attrs:{role:"separator"}}),t._v(" "),r("time",[t._v(t._s(article.date))]),t._v(" \n             /\n             "),t._l(article.tag,(function(e,n){return r("span",{key:n,staticClass:"story__category margin-x-sm"},[r("i",{staticClass:" text-md"},[t._v(t._s(e.tag))])])}))],2),t._v(" "),r("div",{staticClass:"text-component"},[r("h2",{staticClass:"story-v2__headline"},[t._v(t._s(article.title))]),t._v(" "),r("p",{staticClass:"story-v2__excerpt"},[t._v(t._s(article.excerpt))])])])})),t._v(" "),1!=t.maxpage&&0!=t.maxpage?r("nav",{staticClass:"pagination margin-top-xxl",attrs:{"aria-label":"Pagination"}},[r("ol",{staticClass:"pagination__list flex flex-wrap flex-gap-xxs justify-center"},[r("li",[1!=t.currentPage?r("a",{staticClass:"pagination__item",attrs:{href:t.backlink,"aria-label":"Go to previous page"}},[r("svg",{staticClass:"icon margin-right-xxxs",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("title",[t._v("Previous")]),r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"9.5,3.5 5,8 9.5,12.5 "}})])]),t._v(" "),r("span",[t._v("上一頁")])]):t._e()]),t._v(" "),t._l(t.maxpage,(function(e){return r("span",{key:e,staticClass:"display@sm"},[e-t.currentPage>=1&&e-t.currentPage<3?r("li",[r("a",{staticClass:"pagination__item",attrs:{href:t.gopage(e)}},[t._v(t._s(e))])]):t._e(),t._v(" "),e==t.currentPage?r("li",[r("a",{staticClass:"pagination__item pagination__item--selected",attrs:{href:t.gopage(e)}},[t._v(t._s(e))])]):t._e()])})),t._v(" "),t.maxpage-t.currentPage>2?r("li",{staticClass:"display@sm",attrs:{"aria-hidden":"true"}},[r("span",{staticClass:"pagination__item pagination__item--ellipsis"},[t._v("...")])]):t._e(),t._v(" "),r("li",[t.currentPage!=t.maxpage?r("a",{staticClass:"pagination__item",attrs:{href:t.nextlink,"aria-label":"Go to next page"}},[r("span",[t._v("下一頁")]),t._v(" "),r("svg",{staticClass:"icon margin-left-xxxs",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("title",[t._v("Next")]),r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"6.5,3.5 11,8 6.5,12.5 "}})])])]):t._e()])],2)]):t._e()],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container max-width-adaptive-sm"},[e("div",{staticClass:"hero__content text-center"},[e("div",{staticClass:"text-component margin-bottom-sm"},[e("h1",{staticClass:"color-white"},[this._v("最新消息 + 截止報名日期")])])])])}],!1,null,null,null);e.default=component.exports}}]);