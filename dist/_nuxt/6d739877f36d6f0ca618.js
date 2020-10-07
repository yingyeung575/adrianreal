(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{250:function(t,e,l){"use strict";var r={props:["schoolobject"],data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}}},c=l(11),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("section",{staticClass:"bg-contrast-lower padding-y-xl",attrs:{id:"jschools"}},[l("div",{staticClass:"container max-width-adaptive-lg"},[l("h3",{staticClass:"margin-bottom-sm"},[t._v("英國大學介紹")]),t._v(" "),l("div",{staticClass:"carousel js-carousel",attrs:{"data-drag":"on"}},[l("p",{staticClass:"sr-only"},[t._v("Carousel items")]),t._v(" "),l("div",{staticClass:"carousel__wrapper"},[l("ol",{staticClass:"carousel__list"},t._l(t.schoolobject.favschool,(function(e,r){return l("li",{key:r,staticClass:"carousel__item"},[l("div",{staticClass:"carousel__demo-content"},[l("a",{staticClass:"nodec",attrs:{href:t.frontendurl+e.linkslug}},[l("div",{staticClass:"school__content"},[e.image?l("img",{attrs:{src:t.backendurl+e.image.url}}):t._e(),t._v(" "),l("h5",{staticClass:"color-primary text-base"},[t._v(t._s(e.name))]),t._v(" "),e.tagline1?l("div",{staticClass:"school__characteristic"},[l("svg",{staticClass:"purple",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M18 24l-6-5.269-6 5.269v-24h12v24z"}})]),t._v(" "),l("span",{staticClass:"text-xs color-black"},[t._v(t._s(e.tagline1))])]):t._e(),t._v(" "),e.tagline2?l("div",{staticClass:"school__characteristic"},[l("svg",{staticClass:"color2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[l("circle",{attrs:{cx:"12",cy:"12",r:"12"}})]),t._v(" "),l("span",{staticClass:"text-xs color-black"},[t._v(t._s(e.tagline2))])]):t._e()])])])])})),0)]),t._v(" "),l("nav",{staticClass:"carousel__controls padding-top-sm"},[l("ul",[l("li",[l("button",{staticClass:"reset carousel__control carousel__control--prev js-carousel__control js-tab-focus"},[l("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16"}},[l("title",[t._v("Show previous items")]),l("g",[l("polygon",{attrs:{points:"11,3 5,8 11,13 "}})])])])]),t._v(" "),l("li",[l("button",{staticClass:"reset carousel__control carousel__control--next js-carousel__control js-tab-focus"},[l("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16"}},[l("title",[t._v("Show next items")]),l("g",[l("polygon",{attrs:{points:"5,13 11,8 5,3 "}})])])])])])])])])])])}),[],!1,null,null,null);e.a=component.exports},293:function(t,e,l){"use strict";l.r(e);l(28);var r=l(4),c={components:{featureSchools:l(250).a},data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",selectedsubject:"computer-science",typedquery:""}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,c,o,article,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$axios,r=t.params,e.next=3,l.$get("https://whostsite.com/foundations?slug="+r.slug);case 3:return c=e.sent,e.next=6,l.$get("https://whostsite.com/articles?_limit=12&_sort=date:DESC");case 6:return o=e.sent,article=c[0],n=o.sort((function(){return.5-Math.random()})).slice(0,4),e.abrupt("return",{article:article,ranarticles:n});case 10:case"end":return e.stop()}}),e)})))()},computed:{jdate:function(){var t=new Date;return t.setDate(t.getDate()-2),t.toISOString().substring(0,10)}},methods:{goback:function(){this.$router.go(-1)}}},o=l(11),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("section",{staticClass:"padding-top-xl padding-bottom-xxl"},[l("div",{staticClass:"container max-width-adaptive-md"},[l("div",{staticClass:"grid grid-gap-md"},[l("div",{staticClass:"col-8@md"},[l("a",{staticClass:"hjhj text-sm",on:{click:t.goback}},[t._v("< 返回")]),t._v(" "),l("div",[t.article.image?l("img",{staticClass:"floatl margin-right-md margin-bottom-md",attrs:{src:t.backendurl+t.article.image.url,height:"80"}}):t._e(),t._v(" "),l("h4",{staticClass:"color-primary floath"},[l("span",{staticClass:"padding-left-xxxs"}),t._v(t._s(t.article.name))])]),t._v(" "),l("div",{staticStyle:{clear:"both"}}),t._v(" "),t.article.author?l("div",{staticClass:"author bg-contrast-lower padding-md"},[l("a",{staticClass:"author__img-wrapper",attrs:{href:"#0"}},[l("img",{attrs:{src:t.backendurl+t.article.author.profile.url}})]),t._v(" "),l("div",{staticClass:"author__content text-component v-space-xxs"},[l("h4",{},[t._v("升學顧問 - "+t._s(t.article.author.name))]),t._v(" "),l("p",{staticClass:"padding-top-sm color-contrast-medium text-sm"},[t._v(t._s(t.article.consultantcomment))])])]):t._e(),t._v(" "),l("div",{staticClass:"text-component line-height-lg v-space-md margin-top-md"},[l("h3",[t._v("學校簡介")]),t._v(" "),l("p",{staticClass:"text-italic"},[t._v("最後更新日期："+t._s(t.jdate))]),t._v(" "),t._l(t.article.maincontent,(function(content,e){return l("div",{key:e},[content.text?l("div",{domProps:{innerHTML:t._s(t.$md.render(content.text))}}):t._e(),t._v(" "),content.html?l("div",{staticClass:"text-component__block text-component__block--outset"},[content.html?l("figure",{staticClass:"media-wrapper",domProps:{innerHTML:t._s(content.html)}}):t._e()]):t._e(),t._v(" "),"image.image"===content.__component?l("figure",{staticClass:"text-component__block"},[content.link?l("a",{attrs:{href:content.link}},[l("img",{attrs:{src:t.backendurl+content.image.url}})]):t._e(),t._v(" "),content.link?t._e():l("img",{attrs:{src:t.backendurl+content.image.url}}),t._v(" "),l("figcaption",[t._v(t._s(content.caption))])]):t._e(),t._v(" "),"twocol-table.twocol-table"===content.__component?l("table",{staticClass:"tablemargin twocol table table--expanded@xs js-table width-100% table--expanded table--loaded",attrs:{"aria-label":"Table Example"}},[l("tbody",{staticClass:"table__body"},t._l(content.tablerow,(function(e,r){return l("tr",{key:r,staticClass:"table__row"},[e.firstcol?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.firstcol))}}):t._e(),t._v(" "),e.secondcol?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.secondcol))}}):t._e()])})),0)]):t._e(),t._v(" "),"academictable.academictable"===content.__component?l("table",{staticClass:"table table--expanded@xs js-table width-100% table--expanded table--loaded",attrs:{"aria-label":"Table Example"}},[l("tbody",{staticClass:"table__body"},[t._m(0,!0),t._v(" "),l("tr",{staticClass:"table__row"},[l("td",{staticClass:"table__cell",attrs:{role:"cell"}}),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[content.gcse?l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),content.gcse?t._e():l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[content.igcse?l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),content.igcse?t._e():l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[content.alevel?l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),content.alevel?t._e():l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[content.ib?l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),content.ib?t._e():l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[content.btec?l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),content.btec?t._e():l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])])]),t._v(" "),t._l(content.sixcoltable,(function(e,r){return l("tr",{key:r,staticClass:"table__row"},[e.col1?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.col1))}}):t._e(),t._v(" "),e.col2?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.col2))}}):t._e(),t._v(" "),e.col3?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.col3))}}):t._e(),t._v(" "),e.col4?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.col4))}}):t._e(),t._v(" "),e.col5?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.col5))}}):t._e(),t._v(" "),e.col6?l("td",{staticClass:"table__cell",attrs:{role:"cell"},domProps:{innerHTML:t._s(t.$md.render(e.col6))}}):t._e()])}))],2)]):t._e()])}))],2)]),t._v(" "),l("div",{staticClass:"col-4@md"},[l("a",{staticClass:"margin-top-lg width-100% btn btn--accent padding-y-sm",attrs:{href:"/apply"}},[t._v("立即報名")]),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"bgmilk therightinfo padding-x-md padding-top-md padding-bottom-xxl"},[t._l(t.article.briefcontent,(function(e,r){return l("p",{key:r},[l("strong",[t._v(t._s(e.property)+" :")]),t._v(" "+t._s(e.value)+"\n                                ")])})),t._v(" "),t._l(t.article.option,(function(e,r){return l("span",{key:r,staticClass:"margin-top-sm story__category margin-right-sm"},["RusselGroup"==e.name?l("i",[t._v("Russel Group")]):t._e(),t._v(" "),"DSEchinese"==e.name?l("i",[t._v("收DSE中文")]):t._e(),t._v(" "),"Alevelchinese"==e.name?l("i",[t._v("收Alevel中文")]):t._e(),t._v(" "),"DSEEnglish"==e.name?l("i",[t._v("可用DSE English")]):t._e(),t._v(" "),"AdvancedEntryYear2"==e.name?l("i",[t._v("Advanced Entry (Year 2)")]):t._e(),t._v(" "),"AdvancedEntryYear3"==e.name?l("i",[t._v("Advanced Entry (Year 3)")]):t._e(),t._v(" "),"DirectEntry"==e.name?l("i",[t._v("Direct Entry")]):t._e(),t._v(" "),"Clearing"==e.name?l("i",[t._v("Clearing")]):t._e(),t._v(" "),"Fund"==e.name?l("i",[t._v("香港學生獎學金")]):t._e()])}))],2),t._v(" "),l("div",{staticClass:"responsive-iframe margin-bottom-sm",domProps:{innerHTML:t._s(t.article.map)}}),t._v(" "),l("a",{staticClass:"margin-top-lg width-100% color-black",attrs:{href:""}},[t._v("下載學校排名表 "),l("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"}},[l("path",{attrs:{d:"M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"}})])])])])])]),t._v(" "),l("section",{staticClass:"padding-y-xl bg-contrast-lower",attrs:{id:"jeat"}},[l("div",{staticClass:"articles"},[l("div",{staticClass:"container max-width-adaptive-lg"},[t._m(2),t._v(" "),t.article.relatedarticles[0]?l("div",{staticClass:"grid grid-gap-sm"},t._l(t.article.relatedarticles,(function(article,e){return l("article",{key:e,staticClass:"story col-3@md"},[l("a",{staticClass:"story__img",attrs:{href:t.frontendurl+"article/"+article.linkslug}},[l("figure",{},[article.image?l("img",{attrs:{src:t.backendurl+article.image.url}}):t._e()])]),t._v(" "),l("div",{staticClass:"story__content"},[l("div",{staticClass:"text-component"},[l("a",{staticClass:"nodecor",attrs:{href:t.frontendurl+"article/"+article.linkslug}},[l("h4",{staticClass:"story__title padding-bottom-xs"},[t._v(t._s(article.title))]),t._v(" "),l("span",{staticClass:"text-sm knowmore"},[t._v("了解更多")])])])])])})),0):t._e(),t._v(" "),t.article.relatedarticles[0]?t._e():l("div",{staticClass:"grid grid-gap-sm"},t._l(t.ranarticles,(function(article,e){return l("article",{key:e,staticClass:"story col-3@md"},[l("a",{staticClass:"story__img",attrs:{href:t.frontendurl+"article/"+article.slug}},[l("figure",{},[article.thumbnail?l("img",{attrs:{src:t.backendurl+article.thumbnail.url}}):t._e()])]),t._v(" "),l("div",{staticClass:"story__content"},[l("div",{staticClass:"text-component"},[l("a",{staticClass:"nodecor",attrs:{href:t.frontendurl+"article/"+article.slug}},[l("h4",{staticClass:"story__title padding-bottom-xs"},[t._v(t._s(article.title))]),t._v(" "),l("span",{staticClass:"text-sm knowmore"},[t._v("了解更多")])])])])])})),0)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("tr",{staticClass:"table__row"},[l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[t._v("\n                                                            提供課程：\n                                                        ")]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[t._v("\n                                                            英國會考"),l("br"),t._v("\n                                                            GCSE\n                                                        ")]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[t._v("\n                                                            國際會考"),l("br"),t._v("\n                                                            (IGCSE)\n                                                        ")]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[t._v("\n                                                            英國高考"),l("br"),t._v("\n                                                            A-Level\n                                                        ")]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[t._v("\n                                                            國際文憑(IB)\n                                                        ")]),t._v(" "),l("td",{staticClass:"table__cell",attrs:{role:"cell"}},[t._v("\n                                                            BTEC\n                                                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-x-md padding-y-sm margin-top-sm",attrs:{"data-theme":"reverse"}},[e("p",[this._v("學校資料")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-left"},[e("h3",{staticClass:"margin-bottom-lg"},[this._v("相關文章")])])}],!1,null,null,null);e.default=component.exports}}]);