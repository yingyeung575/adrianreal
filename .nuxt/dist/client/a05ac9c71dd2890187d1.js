/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{245:function(t,e,r){"use strict";var n=r(7),c=r(246)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),r(82)("find")},246:function(t,e,r){var n=r(29),c=r(81),o=r(30),l=r(21),v=r(247);t.exports=function(t,e){var r=1==t,d=2==t,f=3==t,h=4==t,m=6==t,y=5==t||m,_=e||v;return function(e,v,k){for(var x,w,C=o(e),A=c(C),j=n(v,k,3),E=l(A.length),D=0,O=r?_(e,E):d?_(e,0):void 0;E>D;D++)if((y||D in A)&&(w=j(x=A[D],D,C),t))if(r)O[D]=w;else if(w)switch(t){case 3:return!0;case 5:return x;case 6:return D;case 2:O.push(x)}else if(h)return!1;return m?-1:f||h?h:O}}},247:function(t,e,r){var n=r(248);t.exports=function(t,e){return new(n(t))(e)}},248:function(t,e,r){var n=r(13),c=r(130),o=r(3)("species");t.exports=function(t){var e;return c(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!c(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},249:function(t,e,r){var n,c;!function(o){if(void 0===(c="function"==typeof(n=o)?n.call(e,r,e,t):n)||(t.exports=c),!0,t.exports=o(),!!0){var l=window.Cookies,v=window.Cookies=o();v.noConflict=function(){return window.Cookies=l,v}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var r in e)t[r]=e[r]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function c(){}function o(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=t({path:"/"},c.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(t){}r=n.write?n.write(r,e):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var v="";for(var d in o)o[d]&&(v+="; "+d,!0!==o[d]&&(v+="="+o[d].split(";")[0]));return document.cookie=e+"="+r+v}}function l(t,r){if("undefined"!=typeof document){for(var c={},o=document.cookie?document.cookie.split("; "):[],i=0;i<o.length;i++){var l=o[i].split("="),v=l.slice(1).join("=");r||'"'!==v.charAt(0)||(v=v.slice(1,-1));try{var d=e(l[0]);if(v=(n.read||n)(v,d)||e(v),r)try{v=JSON.parse(v)}catch(t){}if(c[d]=v,t===d)break}catch(t){}}return t?c[t]:c}}return c.set=o,c.get=function(t){return l(t,!1)},c.getJSON=function(t){return l(t,!0)},c.remove=function(e,r){o(e,"",t(r,{expires:-1}))},c.defaults={},c.withConverter=r,c}((function(){}))}))},280:function(t,e,r){"use strict";r.r(e);r(80),r(20),r(19),r(12),r(63),r(47),r(64),r(22),r(245);var n=r(48),c=(r(28),r(4)),o=(r(249),r(49));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",selectedsubject:this.$route.query.subject,sort:"rankhigh",showing:10,arraylength:0,loading:!0,subjects:null,subjectlists:null}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios;case 1:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://whostsite.com/subjects-universities");case 2:return t.subjectlists=e.sent,e.next=5,t.$axios.$get("https://whostsite.com/subjects?slug="+t.selectedsubject);case 5:t.subjects=e.sent,t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({setUniversity:"schools/setUniversity",updateuniversitytypequery:"schools/updateuniversitytypequery",updateuniversityfilter1:"schools/updateuniversityfilter1"}),{showmore:function(){this.showing=this.showing+10},onChange:function(t){window.location.href=this.frontendurl+"school-type/university?subject="+t.target.value},checkcount:function(t){if(this.subjects){var e=this.subjects[0].universityranking;return(e=e.filter((function(e){var r=!0;return""!=t&&(r=e.university.option.find((function(element){return t==element.name}))),r}))).length}}}),computed:{typequery:{get:function(){return this.$store.state.schools.universitytypequery},set:function(t){this.updateuniversitytypequery(t)}},filter1:{get:function(){return this.$store.state.schools.universityfilter1},set:function(t){this.updateuniversityfilter1(t)}},showsubjects:function(){return this.subjectlists},filteredList:function(){if(this.subjects){var t=this.subjects[0].universityranking,e=this.typequery,r=this.filter1;return t=t.filter((function(t){var a=t.university.name.toLowerCase(),n=e.toLowerCase(),c=!0;if(""!=r){var o=t.university.option.map((function(t){return t.name}));return c=r.every((function(t){return o.includes(t)}))}return a.includes(n)&&c})),this.arraylength=t.length,"rankhigh"==this.sort&&t.sort((function(a,b){return a.rank-b.rank})),"ranklow"==this.sort&&(t.sort((function(a,b){return a.rank-b.rank})),t.reverse()),"feelow"==this.sort&&t.sort((function(a,b){return a.university.schoolfeesort-b.university.schoolfeesort})),"feehigh"==this.sort&&(t.sort((function(a,b){return a.university.schoolfeesort-b.university.schoolfeesort})),t.reverse()),t}}}},d=r(11),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{attrs:{id:"newmainsearh"}},[r("div",{staticClass:"grid"},[r("div",{staticClass:"col-3@md bgmilk"},[r("div",{staticClass:"text-component padding-md"},[r("h5",{staticClass:"padding-bottom-xxs font-bold"},[t._v("科目")]),t._v(" "),r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedsubject,expression:"selectedsubject"}],staticClass:"select__input form-control rightfilter",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedsubject=e.target.multiple?r:r[0]},function(e){return t.onChange(e)}]}},t._l(t.showsubjects,(function(e,n){return r("option",{key:n,domProps:{value:e.slug}},[t._v(t._s(e.name))])})),0),t._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]),t._v(" "),r("h5",{staticClass:"padding-top-md padding-bottom-xxs font-bold"},[t._v("學校名稱")]),t._v(" "),r("div",{staticClass:"search-input search-input--icon-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.typequery,expression:"typequery"}],staticClass:"form-control width-100%",staticStyle:{"font-size":"0.8em"},attrs:{type:"search",name:"searchInputX",id:"searchInputX",placeholder:"Search..."},domProps:{value:t.typequery},on:{input:function(e){e.target.composing||(t.typequery=e.target.value)}}}),t._v(" "),r("button",{staticClass:"search-input__btn"},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[r("title",[t._v("Search")]),r("g",{attrs:{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-miterlimit":"10"}},[r("line",{attrs:{x1:"22",y1:"22",x2:"15.656",y2:"15.656"}}),r("circle",{attrs:{cx:"10",cy:"10",r:"8"}})])])])]),t._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[t._v("篩選條件")]),t._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"RusselGroup",id:"checkbox1"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"RusselGroup")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o="RusselGroup",l=t._i(r,o);n.checked?l<0&&(t.filter1=r.concat([o])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox1"}},[t._v("Russel Group ("+t._s(t.checkcount("RusselGroup"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"DSEchinese",id:"checkbox2"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"DSEchinese")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o="DSEchinese",l=t._i(r,o);n.checked?l<0&&(t.filter1=r.concat([o])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox2"}},[t._v("收DSE中文 ("+t._s(t.checkcount("DSEchinese"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"Alevelchinese",id:"checkbox3"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"Alevelchinese")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o="Alevelchinese",l=t._i(r,o);n.checked?l<0&&(t.filter1=r.concat([o])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox3"}},[t._v("收Alevel中文 ("+t._s(t.checkcount("Alevelchinese"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"DSEEnglish",id:"checkbox4"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"DSEEnglish")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o="DSEEnglish",l=t._i(r,o);n.checked?l<0&&(t.filter1=r.concat([o])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox4"}},[t._v("可用DSE English ("+t._s(t.checkcount("DSEEnglish"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"AdvancedEntryYear2",id:"checkbox5"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"AdvancedEntryYear2")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o="AdvancedEntryYear2",l=t._i(r,o);n.checked?l<0&&(t.filter1=r.concat([o])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox5"}},[t._v("Advanced Entry (Year 2) ("+t._s(t.checkcount("AdvancedEntryYear2"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"AdvancedEntryYear3",id:"checkbox6"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"AdvancedEntryYear3")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o="AdvancedEntryYear3",l=t._i(r,o);n.checked?l<0&&(t.filter1=r.concat([o])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox6"}},[t._v("Advanced Entry (Year 3) ("+t._s(t.checkcount("AdvancedEntryYear3"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"DirectEntry",id:"checkbox7"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"DirectEntry")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o="DirectEntry",l=t._i(r,o);n.checked?l<0&&(t.filter1=r.concat([o])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox7"}},[t._v("Direct Entry ("+t._s(t.checkcount("DirectEntry"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"Clearing",id:"checkbox8"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"Clearing")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o=t._i(r,"Clearing");n.checked?o<0&&(t.filter1=r.concat(["Clearing"])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox8"}},[t._v("Clearing ("+t._s(t.checkcount("Clearing"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"Fund",id:"checkbox9"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"Fund")>-1:t.filter1},on:{change:function(e){var r=t.filter1,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o=t._i(r,"Fund");n.checked?o<0&&(t.filter1=r.concat(["Fund"])):o>-1&&(t.filter1=r.slice(0,o).concat(r.slice(o+1)))}else t.filter1=c}}}),t._v(" "),r("label",{attrs:{for:"checkbox9"}},[t._v("香港學生獎學金 ("+t._s(t.checkcount("Fund"))+")")])])])])])]),t._v(" "),r("div",{staticClass:"col-9@md"},[r("main",{staticStyle:{width:"100%"},attrs:{id:"rightside"}},[""!=t.filteredList?r("div",{staticClass:"select reorder "},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],staticClass:"select__input form-control",attrs:{name:"selectThis",id:"selectThis"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sort=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"rankhigh"}},[t._v("科目排名（高至低）")]),t._v(" "),r("option",{attrs:{value:"ranklow"}},[t._v("科目排名（低至高）")]),t._v(" "),r("option",{attrs:{value:"feehigh"}},[t._v("學費（高至低）")]),t._v(" "),r("option",{attrs:{value:"feelow"}},[t._v("學費（低至高）")])]),t._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]):t._e(),t._v(" "),r("nav",{staticClass:"s-tabs padding-top-sm padding-left-sm"},[r("ul",{staticClass:"s-tabs__list"},[r("li",[r("nuxt-link",{attrs:{to:"/school-type/boarding-school"}},[t._v("寄宿學校")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/foundation/step2"}},[t._v("大學基礎班")])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"s-tabs__item--selected",attrs:{to:"/school-type/university/step2"}},[t._v("大學")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/international-one/step2"}},[t._v("國際一年級")])],1),t._v(" "),r("li",[r("a",{attrs:{href:t.frontendurl+"school-type/summer-school"}},[t._v("夏季學校")])])])]),t._v(" "),r("div",{staticClass:"text-component"},[r("p",{staticClass:"padding-top-sm padding-left-md text-sm"},[t._v("排名根據 The Complete University Guide 2021")]),t._v(" "),t._l(t.filteredList,(function(e,n){return r("div",{key:n},[t.showing>n?r("div",{staticClass:"mschool"},[r("div",{staticClass:"grid grid-gap-md"},[r("div",{staticClass:"text-left col-7@md padding-y-md padding-x-lg"},[r("nuxt-link",{staticClass:"nodecor",attrs:{to:"/university-school/"+e.university.slug}},[e.university.image?r("img",{attrs:{src:t.backendurl+e.university.image.url,width:"100"}}):t._e(),t._v(" "),r("h4",{staticClass:"color-primary"},[r("span",{staticClass:"padding-left-xxxs"},[t._v(t._s(e.university.name))])]),t._v(" "),r("p",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"}})]),t._v(t._s(e.university.address))]),t._v(" "),r("p",[t._v(t._s(e.university.excerpt))])]),t._v(" "),r("nuxt-link",{staticClass:"btn  btn--subtle btn--sm",attrs:{to:"/university-school/"+e.university.slug}},[t._v("查看大學")]),t._v(" "),e.university.isfoundation?r("nuxt-link",{staticClass:"margin-left-sm btn btn--primary btn--sm",attrs:{to:"/foundation/"+e.university.slug+"-foundation"}},[t._v("查看Foundation")]):t._e(),t._v(" "),e.university.isinternational1?r("nuxt-link",{staticClass:"margin-left-sm btn btn--accent btn--sm",attrs:{to:"/international-one/"+e.university.slug+"-international-year-one"}},[t._v("查看International Year 1")]):t._e()],1),t._v(" "),r("div",{staticClass:"col-5@md"},[r("div",{staticClass:"jschollright padding-top-xs"},[r("div",{staticClass:"showstat",staticStyle:{"padding-left":"1em"}},[r("h4",{staticClass:"text-sm"},[t._v("科目排名")]),t._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent"},[t._v("#"+t._s(e.rank))])]),t._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[t._v("設有Foundation")]),t._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e.university.isfoundation?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),e.university.isfoundation?t._e():r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])])]),t._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[t._v("設有 International Year 1")]),t._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e.university.isinternational1?r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"}})]):t._e(),t._v(" "),e.university.isinternational1?t._e():r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"}})])])]),t._v(" "),r("div",{staticClass:"bg-contrast-lower padding-sm",staticStyle:{"padding-left":"1.5em"}},[r("span",[r("strong",[t._v("學費預算：")]),t._v(t._s(e.university.schoolfee)+"\n\n                             ")])])])])])]):t._e()])})),t._v(" "),t.arraylength>t.showing?r("div",{staticClass:"width-100 text-center padding-bottom-lg",on:{click:t.showmore}},[r("a",{staticClass:"btn btn--accent"},[t._v("顯示更多")]),t._v(" "),r("br")]):t._e(),t._v(" "),t.loading?r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[t._v("請稍等。資料更新中...."),r("img",{staticClass:"loadingicon",attrs:{src:"/img/loading.svg"}})]):t._e(),t._v(" "),""!=t.filteredList||t.loading?t._e():r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[t._v("不好意思，沒有找到相關結果")])],2)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);