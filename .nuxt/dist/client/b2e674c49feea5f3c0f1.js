(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{264:function(t,e,r){"use strict";r.r(e);r(28);var n=r(4),o={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",noofpost:10}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.query,o=0,n.page&&(o=10*(n.page-1)),e.next=5,r.$get("https://whostsite.com/articles?_limit=10&_start="+o+"&_sort=date:DESC");case 5:return l=e.sent,e.next=8,r.$get("https://whostsite.com/categories");case 8:return c=e.sent,e.next=11,r.$get("https://whostsite.com/articles/count");case 11:return _=e.sent,e.abrupt("return",{articles:l,noarticles:_,categories:c});case 13:case"end":return e.stop()}}),e)})))()},methods:{gopage:function(t){return"/article?page="+t}},computed:{backlink:function(){return"/article?page="+(parseInt(this.$route.query.page)-1)},nextlink:function(){var t=2;return this.$route.query.page&&(t=parseInt(this.$route.query.page)+1),"/article?page="+t},maxpage:function(){return this.noarticles%this.noofpost==0?parseInt(this.noarticles/this.noofpost):parseInt(this.noarticles/this.noofpost+1)},currentPage:function(){return this.$route.query.page?this.$route.query.page:1},filteredarticles:function(){return this.articles}}},l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"padding-y-xl"},[r("div",{staticClass:"articles"},[r("div",{staticClass:"container max-width-adaptive-lg"},[r("div",{staticClass:"text-center margin-bottom-xl"},[r("h1",[t._v("升學攻略")]),t._v(" "),r("div",{staticClass:"margin-top-lg"},t._l(t.categories,(function(e,n){return r("a",{key:n,staticClass:"story__category margin-x-sm",attrs:{href:"/category/"+e.slug}},[r("i",[t._v(t._s(e.name))])])})),0)]),t._v(" "),r("div",{staticClass:"grid grid-gap-lg"},[t._l(t.filteredarticles,(function(article,e){return 0==e?r("article",{key:e,staticClass:"story story--featured"},[r("a",{staticClass:"story__img",attrs:{href:t.frontendurl+"article/"+article.slug}},[r("figure",{staticClass:"media-wrapper media-wrapper--5:3"},[article.thumbnail?r("img",{attrs:{src:t.backendurl+article.thumbnail.url}}):t._e()])]),t._v(" "),r("div",{staticClass:"story__content"},[r("div",{staticClass:"margin-bottom-xs"},t._l(article.categories,(function(e,n){return r("a",{key:n,staticClass:"story__category",attrs:{href:t.frontendurl+"category/"+e.slug}},[r("i",[t._v(t._s(e.name))])])})),0),t._v(" "),r("div",{staticClass:"text-component"},[r("h2",{staticClass:"story__title"},[r("a",{attrs:{href:t.frontendurl+"article/"+article.slug}},[t._v(t._s(article.title))])]),t._v(" "),r("p",[t._v(t._s(article.excerpt))])]),t._v(" "),r("div",{staticClass:"story__author margin-top-sm"},[r("span",{staticClass:"block"},[article.author?r("img",{attrs:{src:t.backendurl+article.author.profile.url}}):t._e()]),t._v(" "),r("div",[article.author?r("address",{staticClass:"story__author-name"},[r("span",{attrs:{rel:"author"}},[t._v(t._s(article.author.name))])]):t._e(),t._v(" "),r("p",{staticClass:"story__meta"},[r("time",[t._v(t._s(article.date))])])])])])]):t._e()})),t._v(" "),t._l(t.filteredarticles,(function(article,e){return 0!=e?r("article",{key:e,staticClass:"story col-4@md"},[r("a",{staticClass:"story__img",attrs:{href:t.frontendurl+"article/"+article.slug}},[r("figure",{staticClass:"media-wrapper media-wrapper--5:3"},[article.thumbnail?r("img",{attrs:{src:t.backendurl+article.thumbnail.url}}):t._e()])]),t._v(" "),r("div",{staticClass:"story__content"},[r("div",{staticClass:"margin-bottom-xs"},t._l(article.categories,(function(e,n){return r("a",{key:n,staticClass:"story__category",attrs:{href:t.frontendurl+"category/"+e.slug}},[r("i",[t._v(t._s(e.name))])])})),0),t._v(" "),r("div",{staticClass:"text-component"},[r("h2",{staticClass:"story__title"},[r("a",{attrs:{href:t.frontendurl+"article/"+article.slug}},[t._v(t._s(article.title))])])]),t._v(" "),r("div",{staticClass:"story__author margin-top-sm"},[r("span",{staticClass:"block"},[article.author?r("img",{attrs:{src:t.backendurl+article.author.profile.url}}):t._e()]),t._v(" "),r("div",[article.author?r("address",{staticClass:"story__author-name"},[r("span",{attrs:{rel:"author"}},[t._v(t._s(article.author.name))])]):t._e(),t._v(" "),r("p",{staticClass:"story__meta"},[r("time",[t._v(t._s(article.date))])])])])])]):t._e()}))],2),t._v(" "),1!=t.maxpage&&0!=t.maxpage?r("nav",{staticClass:"pagination margin-top-xxl",attrs:{"aria-label":"Pagination"}},[r("ol",{staticClass:"pagination__list flex flex-wrap flex-gap-xxs justify-center"},[r("li",[1!=t.currentPage?r("a",{staticClass:"pagination__item",attrs:{href:t.backlink,"aria-label":"Go to previous page"}},[r("svg",{staticClass:"icon margin-right-xxxs",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("title",[t._v("Previous")]),r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"9.5,3.5 5,8 9.5,12.5 "}})])]),t._v(" "),r("span",[t._v("上一頁")])]):t._e()]),t._v(" "),t._l(t.maxpage,(function(e){return r("span",{key:e,staticClass:"display@sm"},[e-t.currentPage>=1&&e-t.currentPage<3?r("li",[r("a",{staticClass:"pagination__item",attrs:{href:t.gopage(e)}},[t._v(t._s(e))])]):t._e(),t._v(" "),e==t.currentPage?r("li",[r("a",{staticClass:"pagination__item pagination__item--selected",attrs:{href:t.gopage(e)}},[t._v(t._s(e))])]):t._e()])})),t._v(" "),t.maxpage-t.currentPage>2?r("li",{staticClass:"display@sm",attrs:{"aria-hidden":"true"}},[r("span",{staticClass:"pagination__item pagination__item--ellipsis"},[t._v("...")])]):t._e(),t._v(" "),r("li",[t.currentPage!=t.maxpage?r("a",{staticClass:"pagination__item",attrs:{href:t.nextlink,"aria-label":"Go to next page"}},[r("span",[t._v("下一頁")]),t._v(" "),r("svg",{staticClass:"icon margin-left-xxxs",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("title",[t._v("Next")]),r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"6.5,3.5 11,8 6.5,12.5 "}})])])]):t._e()])],2)]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports}}]);