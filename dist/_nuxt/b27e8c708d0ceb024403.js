(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{292:function(t,e,r){"use strict";r.r(e);r(28);var n=r(4),c={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,article,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,e.next=3,r.$get("https://whostsite.com/talks?slug="+n.slug);case 3:return c=e.sent,e.next=6,r.$get("https://whostsite.com/articles?_limit=9&_sort=date:DESC");case 6:return l=e.sent,article=c[0],o=l.sort((function(){return.5-Math.random()})).slice(0,3),e.abrupt("return",{article:article,ranarticles:o});case 10:case"end":return e.stop()}}),e)})))()}},l=r(11),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",[r("div",{staticClass:"container max-width-adaptive-lg padding-y-xl"},[r("div",{staticClass:"grid grid-gap-md"},[r("div",{staticClass:"col-4@md"},[r("h2",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"margin-top-xs card-v3__label2 text-lg color-accent"},[t._v(t._s(t.article.date))]),t._v(" "),r("div",{staticClass:" card-v3__label"},[r("span",{staticClass:"text-md"},[t._v(t._s(t.article.time))])]),t._v(" "),t.article.sidecontent?r("div",{staticClass:"margin-top-sm",domProps:{innerHTML:t._s(t.$md.render(t.article.sidecontent))}}):t._e(),t._v(" "),r("a",{staticClass:"margin-top-md width-100% btn btn--accent",attrs:{href:t.article.formlink,target:"_blank"}},[t._v("立即報名")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"text-center"},[t.article.author?r("img",{staticClass:"circle",attrs:{width:"150",src:t.backendurl+t.article.author.profile.url}}):t._e(),t._v(" "),r("div",{staticClass:"margin-auto showbox bg-contrast-lower"},[t.article.author?r("h4",{staticClass:"text-md color-primary margin-bottom-sm"},[t._v(t._s(t.article.author.name))]):t._e(),t._v(" "),t.article.author&&!t.article.consultantcomment?r("p",{staticClass:"text-sm"},[t._v(t._s(t.article.author.slogan))]):t._e(),t._v(" "),t.article.author&&t.article.consultantcomment?r("div",{staticClass:"text-component text-sm",domProps:{innerHTML:t._s(t.$md.render(t.article.consultantcomment))}}):t._e()])])]),t._v(" "),r("div",{staticClass:"col-8@md"},[r("article",{staticClass:"article text-component"},[r("figure",{staticClass:"text-component__block "},[t.article.thumbnail?r("img",{attrs:{src:t.backendurl+t.article.thumbnail.url}}):t._e()]),t._v(" "),t._l(t.article.maincontent,(function(content,e){return r("div",{key:e},[content.text?r("div",{domProps:{innerHTML:t._s(t.$md.render(content.text))}}):t._e(),t._v(" "),content.tableofcontent?r("div",{staticClass:"tableofcontent",domProps:{innerHTML:t._s(t.$md.render(content.tableofcontent))}}):t._e(),t._v(" "),content.html?r("div",{staticClass:"text-component__block text-component__block--outset"},[content.html?r("figure",{staticClass:"media-wrapper",domProps:{innerHTML:t._s(content.html)}}):t._e()]):t._e(),t._v(" "),"image.image"===content.__component?r("figure",{staticClass:"text-component__block"},[content.link?r("a",{attrs:{href:content.link}},[r("img",{attrs:{src:t.backendurl+content.image.url}})]):t._e(),t._v(" "),content.link?t._e():r("img",{attrs:{src:t.backendurl+content.image.url}}),t._v(" "),r("figcaption",[t._v(t._s(content.caption))])]):t._e()])}))],2)])])])]),t._v(" "),r("section",[t.article.map?r("div",{staticClass:"responsive-iframe margin-top-xxl",domProps:{innerHTML:t._s(t.article.map)}}):t._e()]),t._v(" "),r("section",{staticClass:"padding-y-xl"},[r("div",{staticClass:"container max-width-adaptive-lg"},[t._m(1),t._v(" "),r("div",{staticClass:"grid grid-gap-md"},t._l(t.ranarticles,(function(article,e){return r("article",{key:e,staticClass:"story-v2 col-6@md col-4@xl"},[r("div",{staticClass:"story-v2__meta"},[r("p",[r("span",{attrs:{role:"separator"}}),t._v(" "),r("time",{attrs:{datetime:"2020-05-20"}},[t._v(t._s(article.date))])])]),t._v(" "),r("div",{staticClass:"text-component"},[r("h2",{staticClass:"story-v2__headline"},[r("a",{attrs:{href:t.frontendurl+"article/"+article.slug}},[t._v(t._s(article.title))])]),t._v(" "),r("p",{staticClass:"story-v2__excerpt"},[t._v(t._s(article.excerpt))])])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-article-v3__divider container margin-top-xl max-width-adaptive-sm margin-bottom-xl",attrs:{"aria-hidden":"true"}},[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-bottom-md"},[e("h1",{staticClass:"text-md"},[this._v("你可能也會喜歡...")])])}],!1,null,null,null);e.default=component.exports}}]);