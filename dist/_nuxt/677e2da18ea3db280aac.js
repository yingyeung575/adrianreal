/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{245:function(t,e,r){"use strict";var o=r(7),n=r(246)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),o(o.P+o.F*c,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(82)("find")},246:function(t,e,r){var o=r(29),n=r(81),c=r(30),l=r(21),f=r(247);t.exports=function(t,e){var r=1==t,d=2==t,v=3==t,h=4==t,m=6==t,_=5==t||m,k=e||f;return function(e,f,x){for(var y,C,w=c(e),A=n(w),j=o(f,x,3),O=l(A.length),P=0,S=r?k(e,O):d?k(e,0):void 0;O>P;P++)if((_||P in A)&&(C=j(y=A[P],P,w),t))if(r)S[P]=C;else if(C)switch(t){case 3:return!0;case 5:return y;case 6:return P;case 2:S.push(y)}else if(h)return!1;return m?-1:v||h?h:S}}},247:function(t,e,r){var o=r(248);t.exports=function(t,e){return new(o(t))(e)}},248:function(t,e,r){var o=r(13),n=r(130),c=r(3)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),o(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},249:function(t,e,r){var o,n;!function(c){if(void 0===(n="function"==typeof(o=c)?o.call(e,r,e,t):o)||(t.exports=n),!0,t.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function t(){for(var i=0,t={};i<arguments.length;i++){var e=arguments[i];for(var r in e)t[r]=e[r]}return t}function e(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(o){function n(){}function c(e,r,c){if("undefined"!=typeof document){"number"==typeof(c=t({path:"/"},n.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(t){}r=o.write?o.write(r,e):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=e+"="+r+f}}function l(t,r){if("undefined"!=typeof document){for(var n={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");r||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=e(l[0]);if(f=(o.read||o)(f,d)||e(f),r)try{f=JSON.parse(f)}catch(t){}if(n[d]=f,t===d)break}catch(t){}}return t?n[t]:n}}return n.set=c,n.get=function(t){return l(t,!1)},n.getJSON=function(t){return l(t,!0)},n.remove=function(e,r){c(e,"",t(r,{expires:-1}))},n.defaults={},n.withConverter=r,n}((function(){}))}))},277:function(t,e,r){"use strict";r.r(e);r(80),r(20),r(19),r(12),r(63),r(47),r(64),r(22),r(245);var o=r(48),n=(r(28),r(4)),c=(r(249),r(49));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",selectedsubject:this.$route.query.subject,sort:"rankhigh",showing:10,arraylength:0,loading:!0,subjects:null,subjectlists:null}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios;case 1:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://whostsite.com/subjects-foundations");case 2:return t.subjectlists=e.sent,e.next=5,t.$axios.$get("https://whostsite.com/subjects?slug="+t.selectedsubject);case 5:t.subjects=e.sent,console.log(t.subjects),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({setFoundation:"schools/setFoundation",updatefoundationtypequery:"schools/updatefoundationtypequery",updatefoundationfilter1:"schools/updatefoundationfilter1"}),{showmore:function(){this.showing=this.showing+10},onChange:function(t){window.location.href=this.frontendurl+"school-type/foundation?subject="+t.target.value},checkcount:function(t){if(this.subjects){var e=this.subjects[0].foundationranking;return(e=e.filter((function(e){var r=!0;return""!=t&&(r=e.foundation.optionfoundation.find((function(element){return t==element.name}))),r}))).length}}}),computed:{typequery:{get:function(){return this.$store.state.schools.foundationtypequery},set:function(t){this.updatefoundationtypequery(t)}},filter1:{get:function(){return this.$store.state.schools.foundationfilter1},set:function(t){this.updatefoundationfilter1(t)}},showsubjects:function(){return this.subjectlists},filteredList:function(){if(this.subjects){var t=this.subjects[0].foundationranking,e=this.typequery,r=this.filter1;return t=t.filter((function(t){var a=t.foundation.name.toLowerCase(),o=e.toLowerCase(),n=!0;if(""!=r){var c=t.foundation.optionfoundation.map((function(t){return t.name}));return n=r.every((function(t){return c.includes(t)}))}return a.includes(o)&&n})),this.arraylength=t.length,"rankhigh"==this.sort&&t.sort((function(a,b){return a.rank-b.rank})),"ranklow"==this.sort&&(t.sort((function(a,b){return a.rank-b.rank})),t.reverse()),"percentlow"==this.sort&&t.sort((function(a,b){return a.foundation.successrate-b.foundation.successrate})),"percenthigh"==this.sort&&(t.sort((function(a,b){return a.foundation.successrate-b.foundation.successrate})),t.reverse()),"marklow"==this.sort&&t.sort((function(a,b){return a.foundation.marks-b.foundation.marks})),"markhigh"==this.sort&&(t.sort((function(a,b){return a.foundation.marks-b.foundation.marks})),t.reverse()),t}}}},d=r(11),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{attrs:{id:"newmainsearh"}},[r("div",{staticClass:"grid"},[r("div",{staticClass:"col-3@md bgmilk"},[r("div",{staticClass:"text-component padding-md"},[r("h5",{staticClass:"padding-bottom-xxs font-bold"},[t._v("科目")]),t._v(" "),r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedsubject,expression:"selectedsubject"}],staticClass:"select__input form-control rightfilter",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedsubject=e.target.multiple?r:r[0]},function(e){return t.onChange(e)}]}},t._l(t.showsubjects,(function(e,o){return r("option",{key:o,domProps:{value:e.slug}},[t._v(t._s(e.name))])})),0),t._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]),t._v(" "),r("h5",{staticClass:"padding-top-md padding-bottom-xxs font-bold"},[t._v("學校名稱")]),t._v(" "),r("div",{staticClass:"search-input search-input--icon-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.typequery,expression:"typequery"}],staticClass:"form-control width-100%",staticStyle:{"font-size":"0.8em"},attrs:{type:"search",name:"searchInputX",id:"searchInputX",placeholder:"Search..."},domProps:{value:t.typequery},on:{input:function(e){e.target.composing||(t.typequery=e.target.value)}}}),t._v(" "),r("button",{staticClass:"search-input__btn"},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[r("title",[t._v("Search")]),r("g",{attrs:{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-miterlimit":"10"}},[r("line",{attrs:{x1:"22",y1:"22",x2:"15.656",y2:"15.656"}}),r("circle",{attrs:{cx:"10",cy:"10",r:"8"}})])])])]),t._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[t._v("Foundation 類別")]),t._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"oneto1",id:"checkbox1"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"oneto1")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"oneto1");o.checked?c<0&&(t.filter1=r.concat(["oneto1"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox1"}},[t._v("大學 Foundation (1 to 1) ("+t._s(t.checkcount("oneto1"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"onetomany",id:"checkbox2"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"onetomany")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"onetomany");o.checked?c<0&&(t.filter1=r.concat(["onetomany"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox2"}},[t._v("學院 Foundation (1 to many) ("+t._s(t.checkcount("onetomany"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nqf6",id:"checkbox3"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"nqf6")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"nqf6");o.checked?c<0&&(t.filter1=r.concat(["nqf6"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox3"}},[t._v("Package Visa (NQF 6) ("+t._s(t.checkcount("nqf6"))+")")])])])]),t._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[t._v("收生要求")]),t._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts4",id:"checkbox4"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"ielts4")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"ielts4");o.checked?c<0&&(t.filter1=r.concat(["ielts4"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox4"}},[t._v("雅思 IELTS for UKVI 總分 4 ("+t._s(t.checkcount("ielts4"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts45",id:"checkbox5"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"ielts45")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"ielts45");o.checked?c<0&&(t.filter1=r.concat(["ielts45"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox5"}},[t._v("雅思 IELTS for UKVI 總分 4.5 ("+t._s(t.checkcount("ielts45"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts5",id:"checkbox6"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"ielts5")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"ielts5");o.checked?c<0&&(t.filter1=r.concat(["ielts5"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox6"}},[t._v("雅思 IELTS for UKVI 總分 5 ("+t._s(t.checkcount("ielts5"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts55",id:"checkbox7"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"ielts55")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"ielts55");o.checked?c<0&&(t.filter1=r.concat(["ielts55"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox7"}},[t._v("雅思 IELTS for UKVI 總分 5.5 ("+t._s(t.checkcount("ielts55"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts6",id:"checkbox8"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"ielts6")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"ielts6");o.checked?c<0&&(t.filter1=r.concat(["ielts6"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox8"}},[t._v("雅思 IELTS for UKVI 總分 6 ("+t._s(t.checkcount("ielts6"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"form5gcse",id:"checkbox9"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"form5gcse")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"form5gcse");o.checked?c<0&&(t.filter1=r.concat(["form5gcse"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox9"}},[t._v("收中五/GCSE ("+t._s(t.checkcount("form5gcse"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"as",id:"checkbox10"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"as")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"as");o.checked?c<0&&(t.filter1=r.concat(["as"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox10"}},[t._v("收AS ("+t._s(t.checkcount("as"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib",id:"checkbox11"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"ib")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c=t._i(r,"ib");o.checked?c<0&&(t.filter1=r.concat(["ib"])):c>-1&&(t.filter1=r.slice(0,c).concat(r.slice(c+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox11"}},[t._v("收IB ("+t._s(t.checkcount("ib"))+")")])])])]),t._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[t._v("其他")]),t._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"scholarship",id:"checkbox12"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"scholarship")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c="scholarship",l=t._i(r,c);o.checked?l<0&&(t.filter1=r.concat([c])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox12"}},[t._v("有機會申請獎學金 ("+t._s(t.checkcount("scholarship"))+")")])]),t._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearlondon",id:"checkbox13"},domProps:{checked:Array.isArray(t.filter1)?t._i(t.filter1,"nearlondon")>-1:t.filter1},on:{change:function(e){var r=t.filter1,o=e.target,n=!!o.checked;if(Array.isArray(r)){var c="nearlondon",l=t._i(r,c);o.checked?l<0&&(t.filter1=r.concat([c])):l>-1&&(t.filter1=r.slice(0,l).concat(r.slice(l+1)))}else t.filter1=n}}}),t._v(" "),r("label",{attrs:{for:"checkbox13"}},[t._v("近倫敦 ("+t._s(t.checkcount("nearlondon"))+")")])])])])])]),t._v(" "),r("div",{staticClass:"col-9@md"},[r("main",{staticStyle:{width:"100%"},attrs:{id:"rightside"}},[""!=t.filteredList?r("div",{staticClass:"select reorder "},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],staticClass:"select__input form-control",attrs:{name:"selectThis",id:"selectThis"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sort=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"rankhigh"}},[t._v("科目排名（高至低）")]),t._v(" "),r("option",{attrs:{value:"ranklow"}},[t._v("科目排名（低至高）")]),t._v(" "),r("option",{attrs:{value:"percenthigh"}},[t._v("銜接成功率（高至低）")]),t._v(" "),r("option",{attrs:{value:"percentlow"}},[t._v("銜接成功率（低至高）")]),t._v(" "),r("option",{attrs:{value:"markhigh"}},[t._v("銜接分數（高至低）")]),t._v(" "),r("option",{attrs:{value:"marklow"}},[t._v("銜接分數（低至高）")])]),t._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]):t._e(),t._v(" "),r("nav",{staticClass:"s-tabs padding-top-sm padding-left-sm"},[r("ul",{staticClass:"s-tabs__list"},[r("li",[r("nuxt-link",{attrs:{to:"/school-type/boarding-school"}},[t._v("寄宿學校")])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"s-tabs__item--selected",attrs:{to:"/school-type/foundation/step2"}},[t._v("大學基礎班")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/university/step2"}},[t._v("大學")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/international-one/step2"}},[t._v("國際一年級")])],1),t._v(" "),r("li",[r("a",{attrs:{href:t.frontendurl+"school-type/summer-school"}},[t._v("夏季學校")])])])]),t._v(" "),r("div",{staticClass:"text-component"},[r("p",{staticClass:"padding-top-sm padding-left-md text-sm"},[t._v("排名根據 The Complete University Guide 2021")]),t._v(" "),t._l(t.filteredList,(function(e,o){return r("div",{key:o},[t.showing>o?r("div",{staticClass:"mschool"},[r("div",{staticClass:"grid grid-gap-md"},[r("div",{staticClass:"text-left col-7@md padding-y-md padding-x-lg"},[r("nuxt-link",{staticClass:"nodecor",attrs:{to:"/foundation/"+e.foundation.slug}},[e.foundation.image?r("img",{attrs:{src:t.backendurl+e.foundation.image.url,width:"100"}}):t._e(),t._v(" "),r("h4",{staticClass:"color-primary"},[r("span",{staticClass:"padding-left-xxxs"},[t._v(t._s(e.foundation.name))])]),t._v(" "),r("p",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"}})]),t._v(t._s(e.foundation.address))]),t._v(" "),r("p",[t._v(t._s(e.foundation.excerpt))])]),t._v(" "),r("nuxt-link",{staticClass:"btn  btn--subtle btn--sm",attrs:{to:"/foundation/"+e.foundation.slug}},[t._v("查看更多")])],1),t._v(" "),r("div",{staticClass:"col-5@md"},[r("div",{staticClass:"jschollright padding-top-xs"},[r("div",{staticClass:"showstat",staticStyle:{"padding-left":"1em"}},[r("h4",{staticClass:"text-sm"},[t._v("科目排名")]),t._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent"},[t._v("#"+t._s(e.rank))])]),t._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[t._v("銜接成功率")]),t._v(" "),e.foundation.successrate?r("h3",{staticClass:"text-xl jthebg color-accent"},[t._v(t._s(e.foundation.successrate)+"%")]):t._e(),t._v(" "),e.foundation.successrate?t._e():r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[t._v("- ")])]),t._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[t._v("銜接分數")]),t._v(" "),e.foundation.marks?r("h3",{staticClass:"text-xl jthebg color-accent"},[t._v(t._s(e.foundation.marks))]):t._e(),t._v(" "),e.foundation.marks?t._e():r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[t._v("- ")])]),t._v(" "),r("div",{staticClass:"bg-contrast-lower padding-sm",staticStyle:{"padding-left":"1.5em"}},[r("span",[r("strong",[t._v("學費預算：")]),t._v(t._s(e.foundation.schoolfee)+"\n\n                             ")]),r("br"),t._v(" "),r("span",[r("strong",[t._v("最低收生：")]),t._v(t._s(e.foundation.minimumrequirement)+"\n\n                             ")])])])])])]):t._e()])})),t._v(" "),t.arraylength>t.showing?r("div",{staticClass:"width-100 text-center padding-bottom-lg",on:{click:t.showmore}},[r("a",{staticClass:"btn btn--accent"},[t._v("顯示更多")]),t._v(" "),r("br")]):t._e(),t._v(" "),t.loading?r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[t._v("請稍等。資料更新中...."),r("img",{staticClass:"loadingicon",attrs:{src:"/img/loading.svg"}})]):t._e(),t._v(" "),""!=t.filteredList||t.loading?t._e():r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[t._v("不好意思，沒有找到相關結果")])],2)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);