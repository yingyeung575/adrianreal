(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{283:function(t,e,r){"use strict";r.r(e);r(80),r(20),r(19),r(12),r(63);var c=r(48),l=(r(28),r(4)),n=r(49);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{backendurl:"http://whostsite.com/",frontendurl:"http://front.whostsite.com/",selectedsubject:"",typequery:"",filter1:[],sort:"rankhigh",subjects:[],loading:!0}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios;case 1:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("http://whostsite.com/subjects-universities");case 2:t.subjects=e.sent,t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({setUniversity:"schools/setUniversity",updateuniversitytypequery:"schools/updateuniversitytypequery",updateuniversityfilter1:"schools/updateuniversityfilter1"}),{selectsubject:function(t){this.selectedsubject=t},checkcount:function(t){}}),computed:{showsubjects:function(){return this.subjects},filteredList:function(){}}},v=r(11),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.selectedsubject?t._e():r("div",{staticClass:"modal modal--select js-modal modal--is-visible modalblock",attrs:{id:"modal-select",role:"dialog","aria-labelledby":"modal-select-label","data-animation":"on"}},[r("div",{staticClass:"vvcenter max-width-xs text-center padding-md",attrs:{role:"alertdialog",tabindex:"-1","aria-labelledby":"modal-select-title","aria-describedby":""}},[r("h3",{staticClass:"margin-bottom-sm text-xxxl ls4"},[t._v("請選擇你的科目")]),t._v(" "),r("div",{staticClass:"steps",attrs:{"aria-label":"Multi-step indicator"}},[r("ol",{staticClass:"steps__list"},[r("li",{staticClass:"step step--completed"},[r("a",{staticClass:"step__label nodecor"},[t._v("選擇學校類型")]),t._v(" "),r("span",{staticClass:"step__separator",attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"6.5,3.5 11,8 6.5,12.5 "}})])])]),t._v(" "),r("div",{staticClass:"step__circle",attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"1,9 5,13 15,3 ","data-cap":"butt"}})])])])]),t._v(" "),r("li",{staticClass:"step step--current"},[r("a",{staticClass:"step__label"},[t._v("選擇科目")]),t._v(" "),r("span",{staticClass:"step__separator",attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"6.5,3.5 11,8 6.5,12.5 "}})])])]),t._v(" "),r("div",{staticClass:"step__circle",attrs:{"aria-hidden":"true"}},[t._v("2")])]),t._v(" "),t._m(0)])]),t._v(" "),r("ul",{staticClass:"margin-top-xl text-center full-screen-select__list js-full-screen-select__list",attrs:{role:"listbox"}},[t.loading?r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[t._v("請稍等。資料更新中...."),r("br"),r("br"),r("img",{staticClass:"loadingicon",attrs:{width:"40",src:"/img/loading.svg"}})]):t._e(),t._v(" "),t._l(t.showsubjects,(function(e,c){return r("li",{key:c},[0==c?r("nuxt-link",{staticClass:"full-screen-select__option full-screen-select__option--selected",attrs:{to:"/school-type/university?subject="+e.slug,role:"option"}},[t._v(t._s(e.name))]):t._e(),t._v(" "),0!=c?r("nuxt-link",{staticClass:"full-screen-select__option",attrs:{to:"/school-type/university?subject="+e.slug,role:"option"}},[t._v(t._s(e.name))]):t._e()],1)}))],2)])]),t._v(" "),r("section",{attrs:{id:"newmainsearh"}},[r("div",{staticClass:"grid"},[r("div",{staticClass:"col-3@md bgmilk"},[r("div",{staticClass:"text-component padding-md"},[r("h5",{staticClass:"padding-bottom-xxs font-bold"},[t._v("科目")]),t._v(" "),r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedsubject,expression:"selectedsubject"}],staticClass:"select__input form-control rightfilter",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedsubject=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"computer-science"}},[t._v("電腦科學")]),t._v(" "),r("option",{attrs:{value:"media-communication"}},[t._v("傳播媒體")])]),t._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]),t._v(" "),r("h5",{staticClass:"padding-top-md padding-bottom-xxs font-bold"},[t._v("學校名稱")]),t._v(" "),r("div",{staticClass:"search-input search-input--icon-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.typequery,expression:"typequery"}],staticClass:"form-control width-100%",staticStyle:{"font-size":"0.8em"},attrs:{type:"search",name:"searchInputX",id:"searchInputX",placeholder:"Search..."},domProps:{value:t.typequery},on:{input:function(e){e.target.composing||(t.typequery=e.target.value)}}}),t._v(" "),r("button",{staticClass:"search-input__btn"},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[r("title",[t._v("Search")]),r("g",{attrs:{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-miterlimit":"10"}},[r("line",{attrs:{x1:"22",y1:"22",x2:"15.656",y2:"15.656"}}),r("circle",{attrs:{cx:"10",cy:"10",r:"8"}})])])])]),t._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[t._v("篩選條件")]),t._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"RusselGroup",id:"checkbox1"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"RusselGroup")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n="RusselGroup",o=t._i(r,n);c.checked?o<0&&(t.filter1=r.concat([n])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox1"}},[t._v("Russel Group ("+t._s(t.checkcount("RusselGroup"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"DSEchinese",id:"checkbox2"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"DSEchinese")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n="DSEchinese",o=t._i(r,n);c.checked?o<0&&(t.filter1=r.concat([n])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox2"}},[t._v("收DSE中文 ("+t._s(t.checkcount("DSEchinese"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"Alevelchinese",id:"checkbox3"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"Alevelchinese")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n="Alevelchinese",o=t._i(r,n);c.checked?o<0&&(t.filter1=r.concat([n])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox3"}},[t._v("收Alevel中文 ("+t._s(t.checkcount("Alevelchinese"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"DSEEnglish",id:"checkbox4"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"DSEEnglish")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n="DSEEnglish",o=t._i(r,n);c.checked?o<0&&(t.filter1=r.concat([n])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox4"}},[t._v("可用DSE English ("+t._s(t.checkcount("DSEEnglish"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"AdvancedEntryYear2",id:"checkbox5"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"AdvancedEntryYear2")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n="AdvancedEntryYear2",o=t._i(r,n);c.checked?o<0&&(t.filter1=r.concat([n])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox5"}},[t._v("Advanced Entry (Year 2) ("+t._s(t.checkcount("AdvancedEntryYear2"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"AdvancedEntryYear3",id:"checkbox6"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"AdvancedEntryYear3")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n="AdvancedEntryYear3",o=t._i(r,n);c.checked?o<0&&(t.filter1=r.concat([n])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox6"}},[t._v("Advanced Entry (Year 3) ("+t._s(t.checkcount("AdvancedEntryYear3"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"DirectEntry",id:"checkbox7"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"DirectEntry")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n="DirectEntry",o=t._i(r,n);c.checked?o<0&&(t.filter1=r.concat([n])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox7"}},[t._v("Direct Entry ("+t._s(t.checkcount("DirectEntry"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"Clearing",id:"checkbox8"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"Clearing")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n=t._i(r,"Clearing");c.checked?n<0&&(t.filter1=r.concat(["Clearing"])):n>-1&&(t.filter1=r.slice(0,n).concat(r.slice(n+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox8"}},[t._v("Clearing ("+t._s(t.checkcount("Clearing"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"Fund",id:"checkbox9"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"Fund")>-1:t.filter1},on:{change:function(e){var r=t.filter1,c=e.target,l=!!c.checked;if(Array.isArray(r)){var n=t._i(r,"Fund");c.checked?n<0&&(t.filter1=r.concat(["Fund"])):n>-1&&(t.filter1=r.slice(0,n).concat(r.slice(n+1)))}else t.filter1=l}}}),t._v(" "),r("label",{attrs:{for:"checkbox9"}},[t._v("香港學生獎學金 ("+t._s(t.checkcount("Fund"))+")")])])])])])]),t._v(" "),r("div",{staticClass:"col-9@md"},[r("main",{staticStyle:{width:"100%"},attrs:{id:"rightside"}},[""!=t.filteredList?r("div",{staticClass:"select reorder "},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],staticClass:"select__input form-control",attrs:{name:"selectThis",id:"selectThis"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sort=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"rankhigh"}},[t._v("科目排名（高至低）")]),t._v(" "),r("option",{attrs:{value:"ranklow"}},[t._v("科目排名（低至高）")]),t._v(" "),r("option",{attrs:{value:"feehigh"}},[t._v("學費（高至低）")]),t._v(" "),r("option",{attrs:{value:"feelow"}},[t._v("學費（低至高）")])]),t._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]):t._e(),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"text-component"},[t._l(t.filteredList,(function(e,c){return r("div",{key:c,staticClass:"mschool"},[r("div",{staticClass:"grid grid-gap-md"},[r("div",{staticClass:"text-left col-7@md padding-y-md padding-x-lg"},[r("a",{staticClass:"nodecor",attrs:{href:"/university-school/"+e.university.slug}},[e.university.image?r("img",{attrs:{src:t.backendurl+e.university.image.url,width:"100"}}):t._e(),t._v(" "),r("h4",{staticClass:"color-primary"},[r("span",{staticClass:"padding-left-xxxs"}),t._v(t._s(e.university.name))]),t._v(" "),r("p",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"}})]),t._v(t._s(e.university.address))]),t._v(" "),r("p",[t._v(t._s(e.university.excerpt))])]),t._v(" "),r("a",{staticClass:"btn  btn--subtle btn--sm",attrs:{href:"/university-school/"+e.university.slug}},[t._v("查看大學")]),t._v(" "),r("a",{staticClass:"margin-left-sm btn btn--primary btn--sm",attrs:{href:"/university-school/"+e.university.slug}},[t._v("查看Foundation")]),t._v(" "),r("a",{staticClass:"margin-left-sm btn btn--accent btn--sm",attrs:{href:"/university-school/"+e.university.slug}},[t._v("查看International Year 1")])]),t._v(" "),r("div",{staticClass:"col-5@md"},[r("div",{staticClass:"jschollright padding-top-xs"},[r("div",{staticClass:"showstat",staticStyle:{"padding-left":"1em"}},[r("h4",{staticClass:"text-sm"},[t._v("科目排名")]),t._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent"},[t._v("#"+t._s(e.rank))])]),t._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[t._v("設有Foundation")]),t._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e.university.isfoundation?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),e.university.isfoundation?t._e():r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])])]),t._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[t._v("設有 International Year 1")]),t._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e.university.isinternational1?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),e.university.isinternational1?t._e():r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])])]),t._v(" "),r("div",{staticClass:"bg-contrast-lower padding-sm",staticStyle:{"padding-left":"1.5em"}},[r("span",[r("strong",[t._v("學費預算：")]),t._v(t._s(e.university.schoolfee)+"\n\n                             ")])])])])])])})),t._v(" "),""==t.filteredList?r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[t._v("不好意思，沒有找到相關結果")]):t._e()],2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"step"},[e("a",{staticClass:"step__label"},[this._v("查看學校資料")]),this._v(" "),e("div",{staticClass:"step__circle",attrs:{"aria-hidden":"true"}},[this._v("3")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"s-tabs padding-top-sm padding-left-sm"},[r("ul",{staticClass:"s-tabs__list"},[r("li",[r("a",{attrs:{href:"#0"}},[t._v("大學基礎班")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#0"}},[t._v("寄宿學校")])]),t._v(" "),r("li",{attrs:{"aria-current":"page"}},[r("a",{staticClass:"s-tabs__item--selected",attrs:{href:"#0"}},[t._v("大學")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#0"}},[t._v("國際一年級")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#0"}},[t._v("夏季學校")])])])])}],!1,null,null,null);e.default=component.exports}}]);