(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{270:function(t,e,n){"use strict";n.r(e);n(28);var l=n(4),r={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://whostsite.com/rankingboardings");case 3:return l=e.sent,e.next=6,n.$get("https://whostsite.com/boardingrankingpage");case 6:return r=e.sent,l.sort((function(a,b){return parseFloat(b.alevel)-parseFloat(a.alevel)})),e.abrupt("return",{articles:l,pagecontent:r});case 9:case"end":return e.stop()}}),e)})))()}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"padding-top-xl padding-bottom-xxl"},[n("div",{staticClass:"container max-width-sm"},[n("h3",{staticClass:"margin-bottom-sm  text-center"},[t._v("寄宿學校排名表")]),t._v(" "),n("p",{staticClass:"margin-bottom-lg"},[t._v(t._s(t.pagecontent.maintext))]),t._v(" "),n("div",{staticClass:"author bg-contrast-lower padding-md margin-top-md margin-bottom-xl"},[n("span",{staticClass:"author__img-wrapper"},[t.pagecontent.author?n("img",{attrs:{src:t.backendurl+t.pagecontent.author.profile.url}}):t._e()]),t._v(" "),t.pagecontent.author?n("div",{staticClass:"author__content text-component v-space-xxs"},[n("h4",{},[t._v("升學顧問 - "+t._s(t.pagecontent.author.name))]),t._v(" "),t.pagecontent.author&&!t.pagecontent.consultantcomment?n("p",{staticClass:"padding-top-sm color-contrast-medium text-sm"},[t._v(t._s(t.pagecontent.author.slogan))]):t._e(),t._v(" "),t.pagecontent.author&&t.pagecontent.consultantcomment?n("div",{staticClass:"text-component padding-top-sm color-contrast-medium text-sm",domProps:{innerHTML:t._s(t.$md.render(t.pagecontent.consultantcomment))}}):t._e()]):t._e()])]),t._v(" "),n("div",{staticClass:"container max-width-lg"},[t._m(0),t._v(" "),n("div",{staticClass:"int-table text-sm js-int-table"},[n("div",{staticClass:"int-table__inner"},[n("table",{staticClass:"int-table__table",attrs:{"aria-label":"Interactive table example"}},[n("thead",{staticClass:"int-table__header js-int-table__header"},[n("tr",{staticClass:"int-table__row"},[n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("學校名稱")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(1)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"flex items-center"},[n("span",[t._v("地區")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(2)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("學校類別")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(3)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("學費")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(4)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("學生人數")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(5)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("寄宿學生比例")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(6)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("最低入學年級")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(7)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("GCSE 7 - 9 (%)")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(8)]),t._v(" "),n("th",{staticClass:"int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"},[n("div",{staticClass:"items-center"},[n("span",[t._v("A Level A - A* (%)")]),t._v(" "),n("svg",{staticClass:"icon icon--xxs margin-left-xxxs int-table__sort-icon",attrs:{"aria-hidden":"true",viewBox:"0 0 12 12"}},[n("polygon",{staticClass:"arrow-up",attrs:{points:"6 0 10 5 2 5 6 0"}}),n("polygon",{staticClass:"arrow-down",attrs:{points:"6 12 2 7 10 7 6 12"}})])]),t._v(" "),t._m(9)])])]),t._v(" "),n("tbody",{staticClass:"int-table__body js-int-table__body"},t._l(t.articles,(function(e,l){return n("tr",{key:l,staticClass:"int-table__row"},[n("td",{staticClass:"int-table__cell"},[e.link?n("a",{attrs:{href:t.frontendurl+e.link}},[t._v(t._s(e.name))]):t._e(),e.link?t._e():n("span",[t._v(t._s(e.name))])]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.district))]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.type))]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.fee))]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.noofstudents))]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.percentage))]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.minyear))]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.cgse))]),t._v(" "),n("td",{staticClass:"int-table__cell"},[t._v(t._s(e.alevel))])])})),0)])])])])]),t._v(" "),t._m(10)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"margin-bottom-lg"},[e("a",{staticClass:"btn btn--subtle margin-right-md",attrs:{href:"/rank-school"}},[this._v("\n                        大學排名表\n                ")]),this._v(" "),e("a",{staticClass:"btn btn--primary margin-right-md",attrs:{href:"/rank-boarding"}},[this._v("\n                        寄宿學校排名表\n                ")]),this._v(" "),e("a",{staticClass:"btn btn--subtle",attrs:{href:"/rank-subject"}},[this._v("\n                        科目排名表\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingName",id:"sortingNameNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingNameNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingName",id:"sortingNameAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingNameAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingName",id:"sortingNameDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingNameDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"sr-only js-int-table__sort-list"},[n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailNone",value:"none",checked:""}}),t._v(" "),n("label",{attrs:{for:"sortingEmailNone"}},[t._v("No sorting")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailAsc",value:"asc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailAsc"}},[t._v("Sort in ascending order")])]),t._v(" "),n("li",[n("input",{attrs:{type:"radio",name:"sortingEmail",id:"sortingEmailDes",value:"desc"}}),t._v(" "),n("label",{attrs:{for:"sortingEmailDes"}},[t._v("Sort in descending order")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-contrast-lower radius-md padding-lg"},[e("div",{staticClass:"container max-width-lg"},[e("div",{staticClass:"grid grid-gap-md items-center"},[e("div",{staticClass:"col-6@md"},[e("div",{staticClass:"text-component"},[e("h3",[this._v("下載寄宿學校排名表PDF")]),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsum quo nihil ipsam sapiente. Suscipit, rerum!")])])]),this._v(" "),e("div",{staticClass:"col-6@md"},[e("form",{staticClass:"margin-bottom-sm"},[e("div",{staticClass:"flex flex-column flex-row@md flex-gap-xxxs"},[e("input",{staticClass:"form-control flex-grow",attrs:{"aria-label":"Email",type:"email",placeholder:"你的電郵"}}),this._v(" "),e("button",{staticClass:"btn btn--primary"},[this._v("提交")])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);