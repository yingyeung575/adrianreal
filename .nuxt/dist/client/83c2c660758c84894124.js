(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{252:function(t,e,n){"use strict";var c={props:["subjectobject"],data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}}},o=n(11),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-width-adaptive-lg  container margin-bottom-xl "},[n("div",{staticClass:"grid justify-center bg-contrast-lower innersubject padding-bottom-xl"},t._l(t.subjectobject,(function(e,c){return n("div",{key:c,staticClass:"col-2"},[n("a",{staticClass:"anone",attrs:{href:t.frontendurl+"subject/"+e.slug}},[n("div",{staticClass:"popular-subjects"},[n("div",{staticClass:"\bjsubject"},[n("div",{staticClass:"grid"},[n("div",{staticClass:"col-4 text-left"},[n("div",{staticClass:"jsubject-icon"},[n("span",{domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("svg",{staticClass:"jajaja",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"}})])])]),t._v(" "),n("div",{staticClass:"col-1"}),t._v(" "),n("div",{staticClass:"col-6"},[n("h4",{staticClass:"color-white text-base"},[t._v(t._s(e.name))])])])])])])])})),0)])])}),[],!1,null,null,null);e.a=component.exports},274:function(t,e,n){"use strict";n.r(e);n(28);var c=n(4),o={components:{subjects:n(252).a},data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://whostsite.com/subjecttutorings");case 3:return c=e.sent,e.next=6,n.$get("https://whostsite.com/subjectpage");case 6:return o=e.sent,e.abrupt("return",{articles:c,pagecontent:o});case 8:case"end":return e.stop()}}),e)})))()}},r=n(11),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"home-popular-subjects othersubject",staticStyle:{"padding-top":"5em"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"grid justify-center"},[n("div",{staticClass:"col-10"},[n("div",{staticClass:"container max-width-adaptive-sm"},[n("h2",{staticClass:"margin-bottom-sm"},[t._v("熱門科目")]),t._v(" "),n("p",{staticClass:"margin-bottom-lg"},[t._v(t._s(t.pagecontent.maintext))]),t._v(" "),n("div",{staticClass:"author bg-contrast-lower padding-md margin-top-md margin-bottom-xl"},[n("span",{staticClass:"author__img-wrapper"},[t.pagecontent.author?n("img",{attrs:{src:t.backendurl+t.pagecontent.author.profile.url}}):t._e()]),t._v(" "),t.pagecontent.author?n("div",{staticClass:"author__content text-component v-space-xxs"},[n("h4",{},[t._v("升學顧問 - "+t._s(t.pagecontent.author.name))]),t._v(" "),t.pagecontent.author&&!t.pagecontent.consultantcomment?n("p",{staticClass:"padding-top-sm color-contrast-medium text-sm"},[t._v(t._s(t.pagecontent.author.slogan))]):t._e(),t._v(" "),t.pagecontent.author&&t.pagecontent.consultantcomment?n("div",{staticClass:"text-component padding-top-sm color-contrast-medium text-sm",domProps:{innerHTML:t._s(t.$md.render(t.pagecontent.consultantcomment))}}):t._e()]):t._e()])])])]),t._v(" "),n("subjects",{attrs:{subjectobject:t.articles}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);