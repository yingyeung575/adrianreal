/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{245:function(e,t,r){"use strict";var c=r(7),l=r(246)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),c(c.P+c.F*o,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),r(82)("find")},246:function(e,t,r){var c=r(29),l=r(81),o=r(30),n=r(21),d=r(247);e.exports=function(e,t){var r=1==e,f=2==e,v=3==e,h=4==e,k=6==e,_=5==e||k,m=t||d;return function(t,d,x){for(var y,A,C=o(t),w=l(C),j=c(d,x,3),P=n(w.length),N=0,I=r?m(t,P):f?m(t,0):void 0;P>N;N++)if((_||N in w)&&(A=j(y=w[N],N,C),e))if(r)I[N]=A;else if(A)switch(e){case 3:return!0;case 5:return y;case 6:return N;case 2:I.push(y)}else if(h)return!1;return k?-1:v||h?h:I}}},247:function(e,t,r){var c=r(248);e.exports=function(e,t){return new(c(e))(t)}},248:function(e,t,r){var c=r(13),l=r(130),o=r(3)("species");e.exports=function(e){var t;return l(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!l(t.prototype)||(t=void 0),c(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},249:function(e,t,r){var c,l;!function(o){if(void 0===(l="function"==typeof(c=o)?c.call(t,r,t,e):c)||(e.exports=l),!0,e.exports=o(),!!0){var n=window.Cookies,d=window.Cookies=o();d.noConflict=function(){return window.Cookies=n,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(c){function l(){}function o(t,r,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},l.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var n=JSON.stringify(r);/^[\{\[]/.test(n)&&(r=n)}catch(e){}r=c.write?c.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var f in o)o[f]&&(d+="; "+f,!0!==o[f]&&(d+="="+o[f].split(";")[0]));return document.cookie=t+"="+r+d}}function n(e,r){if("undefined"!=typeof document){for(var l={},o=document.cookie?document.cookie.split("; "):[],i=0;i<o.length;i++){var n=o[i].split("="),d=n.slice(1).join("=");r||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var f=t(n[0]);if(d=(c.read||c)(d,f)||t(d),r)try{d=JSON.parse(d)}catch(e){}if(l[f]=d,e===f)break}catch(e){}}return e?l[e]:l}}return l.set=o,l.get=function(e){return n(e,!1)},l.getJSON=function(e){return n(e,!0)},l.remove=function(t,r){o(t,"",e(r,{expires:-1}))},l.defaults={},l.withConverter=r,l}((function(){}))}))},278:function(e,t,r){"use strict";r.r(t);r(80),r(20),r(19),r(12),r(63),r(47),r(64),r(22),r(245);var c=r(48),l=(r(28),r(4)),o=(r(249),r(49));function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",selectedsubject:this.$route.query.subject,sort:"rankhigh",showing:10,arraylength:0,loading:!0,subjects:null,subjectlists:null}},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$axios;case 1:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("https://whostsite.com/subjects-inter-1-s");case 2:return e.subjectlists=t.sent,t.next=5,e.$axios.$get("https://whostsite.com/subjects?slug="+e.selectedsubject);case 5:e.subjects=t.sent,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)({setInternationalone:"schools/setInternationalone",updateinternationalonetypequery:"schools/updateinternationalonetypequery",updateinternationalonefilter1:"schools/updateinternationalonefilter1"}),{showmore:function(){this.showing=this.showing+10},onChange:function(e){window.location.href=this.frontendurl+"school-type/international-one?subject="+e.target.value},checkcount:function(e){if(this.subjects){var t=this.subjects[0].internationaloneranking;return(t=t.filter((function(t){var r=!0;return""!=e&&(r=t.internationalone.optioninternationalone.find((function(element){return e==element.name}))),r}))).length}}}),computed:{typequery:{get:function(){return this.$store.state.schools.internationalonetypequery},set:function(e){this.updateinternationalonetypequery(e)}},filter1:{get:function(){return this.$store.state.schools.internationalonefilter1},set:function(e){this.updateinternationalonefilter1(e)}},showsubjects:function(){return this.subjectlists},filteredList:function(){if(this.subjects){var e=this.subjects[0].internationaloneranking,t=this.typequery,r=this.filter1;return e=e.filter((function(e){var a=e.internationalone.name.toLowerCase(),c=t.toLowerCase(),l=!0;if(""!=r){var o=e.internationalone.optioninternationalone.map((function(e){return e.name}));return l=r.every((function(e){return o.includes(e)}))}return a.includes(c)&&l})),this.arraylength=e.length,"rankhigh"==this.sort&&e.sort((function(a,b){return a.rank-b.rank})),"ranklow"==this.sort&&(e.sort((function(a,b){return a.rank-b.rank})),e.reverse()),"percentlow"==this.sort&&e.sort((function(a,b){return a.internationalone.successrate-b.internationalone.successrate})),"percenthigh"==this.sort&&(e.sort((function(a,b){return a.internationalone.successrate-b.internationalone.successrate})),e.reverse()),"marklow"==this.sort&&e.sort((function(a,b){return a.internationalone.marks-b.internationalone.marks})),"markhigh"==this.sort&&(e.sort((function(a,b){return a.internationalone.marks-b.internationalone.marks})),e.reverse()),e}}}},f=r(11),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{attrs:{id:"newmainsearh"}},[r("div",{staticClass:"grid"},[r("div",{staticClass:"col-3@md bgmilk"},[r("div",{staticClass:"text-component padding-md"},[r("h5",{staticClass:"padding-bottom-xxs font-bold"},[e._v("科目")]),e._v(" "),r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedsubject,expression:"selectedsubject"}],staticClass:"select__input form-control rightfilter",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedsubject=t.target.multiple?r:r[0]},function(t){return e.onChange(t)}]}},e._l(e.showsubjects,(function(t,c){return r("option",{key:c,domProps:{value:t.slug}},[e._v(e._s(t.name))])})),0),e._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]),e._v(" "),r("h5",{staticClass:"padding-top-md padding-bottom-xxs font-bold"},[e._v("學校名稱")]),e._v(" "),r("div",{staticClass:"search-input search-input--icon-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typequery,expression:"typequery"}],staticClass:"form-control width-100%",staticStyle:{"font-size":"0.8em"},attrs:{type:"search",name:"searchInputX",id:"searchInputX",placeholder:"Search..."},domProps:{value:e.typequery},on:{input:function(t){t.target.composing||(e.typequery=t.target.value)}}}),e._v(" "),r("button",{staticClass:"search-input__btn"},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[r("title",[e._v("Search")]),r("g",{attrs:{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-miterlimit":"10"}},[r("line",{attrs:{x1:"22",y1:"22",x2:"15.656",y2:"15.656"}}),r("circle",{attrs:{cx:"10",cy:"10",r:"8"}})])])])]),e._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[e._v("International Year 1 類別")]),e._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nqf6",id:"checkbox3"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nqf6")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"nqf6");c.checked?o<0&&(e.filter1=r.concat(["nqf6"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox3"}},[e._v("Package Visa (NQF 6) ("+e._s(e.checkcount("nqf6"))+")")])])])]),e._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[e._v("收生要求")]),e._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts4",id:"checkbox4"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ielts4")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ielts4");c.checked?o<0&&(e.filter1=r.concat(["ielts4"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox4"}},[e._v("雅思 IELTS for UKVI 總分 4 ("+e._s(e.checkcount("ielts4"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts45",id:"checkbox5"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ielts45")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ielts45");c.checked?o<0&&(e.filter1=r.concat(["ielts45"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox5"}},[e._v("雅思 IELTS for UKVI 總分 4.5 ("+e._s(e.checkcount("ielts45"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts5",id:"checkbox6"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ielts5")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ielts5");c.checked?o<0&&(e.filter1=r.concat(["ielts5"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox6"}},[e._v("雅思 IELTS for UKVI 總分 5 ("+e._s(e.checkcount("ielts5"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts55",id:"checkbox7"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ielts55")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ielts55");c.checked?o<0&&(e.filter1=r.concat(["ielts55"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox7"}},[e._v("雅思 IELTS for UKVI 總分 5.5 ("+e._s(e.checkcount("ielts55"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ielts6",id:"checkbox8"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ielts6")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ielts6");c.checked?o<0&&(e.filter1=r.concat(["ielts6"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox8"}},[e._v("雅思 IELTS for UKVI 總分 6 ("+e._s(e.checkcount("ielts6"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"highdip",id:"checkbox9"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"highdip")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"highdip");c.checked?o<0&&(e.filter1=r.concat(["highdip"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox9"}},[e._v("收High Dip/Asso ("+e._s(e.checkcount("highdip"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"dse433",id:"checkbox10"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"dse433")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"dse433");c.checked?o<0&&(e.filter1=r.concat(["dse433"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox10"}},[e._v("收DSE 4-3-3 ("+e._s(e.checkcount("dse433"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"dse333",id:"checkbox11"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"dse333")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"dse333");c.checked?o<0&&(e.filter1=r.concat(["dse333"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox11"}},[e._v("收DSE 3-3-3 ("+e._s(e.checkcount("dse333"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"dse332",id:"checkbox30"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"dse332")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"dse332");c.checked?o<0&&(e.filter1=r.concat(["dse332"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox30"}},[e._v("收DSE 3-3-2 ("+e._s(e.checkcount("dse332"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"dse322",id:"checkbox31"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"dse322")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"dse322");c.checked?o<0&&(e.filter1=r.concat(["dse322"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox31"}},[e._v("收DSE 3-2-2 ("+e._s(e.checkcount("dse322"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"dse221",id:"checkbox32"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"dse221")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"dse221");c.checked?o<0&&(e.filter1=r.concat(["dse221"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox32"}},[e._v("收DSE 2-2-2 ("+e._s(e.checkcount("dse222"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"dse221",id:"checkbox33"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"dse221")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"dse221");c.checked?o<0&&(e.filter1=r.concat(["dse221"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox33"}},[e._v("收DSE 2-2-1 ("+e._s(e.checkcount("dse221"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"alevelccc",id:"checkbox34"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"alevelccc")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"alevelccc");c.checked?o<0&&(e.filter1=r.concat(["alevelccc"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox34"}},[e._v("收A-level C-C-C ("+e._s(e.checkcount("alevelccc"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"alevelccd",id:"checkbox35"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"alevelccd")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"alevelccd");c.checked?o<0&&(e.filter1=r.concat(["alevelccd"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox35"}},[e._v("收A-level C-C-D ("+e._s(e.checkcount("alevelccd"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"alevelcdd",id:"checkbox36"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"alevelcdd")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"alevelcdd");c.checked?o<0&&(e.filter1=r.concat(["alevelcdd"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox36"}},[e._v("收A-level C-D-D ("+e._s(e.checkcount("alevelcdd"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"alevelddd",id:"checkbox37"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"alevelddd")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"alevelddd");c.checked?o<0&&(e.filter1=r.concat(["alevelddd"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox37"}},[e._v("收A-level D-D-D ("+e._s(e.checkcount("alevelddd"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"aleveldde",id:"checkbox38"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"aleveldde")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"aleveldde");c.checked?o<0&&(e.filter1=r.concat(["aleveldde"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox38"}},[e._v("收A-level D-D-E ("+e._s(e.checkcount("aleveldde"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"aleveldee",id:"checkbox39"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"aleveldee")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"aleveldee");c.checked?o<0&&(e.filter1=r.concat(["aleveldee"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox39"}},[e._v("收A-level D-E-E ("+e._s(e.checkcount("aleveldee"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib30",id:"checkbox40"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib30")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib30");c.checked?o<0&&(e.filter1=r.concat(["ib30"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox40"}},[e._v("收IB30 ("+e._s(e.checkcount("ib30"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib29",id:"checkbox41"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib29")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib29");c.checked?o<0&&(e.filter1=r.concat(["ib29"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox41"}},[e._v("收IB29 ("+e._s(e.checkcount("ib29"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib28",id:"checkbox42"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib28")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib28");c.checked?o<0&&(e.filter1=r.concat(["ib28"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox42"}},[e._v("收IB28 ("+e._s(e.checkcount("ib28"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib27",id:"checkbox43"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib27")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib27");c.checked?o<0&&(e.filter1=r.concat(["ib27"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox43"}},[e._v("收IB27 ("+e._s(e.checkcount("ib27"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib26",id:"checkbox44"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib26")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib26");c.checked?o<0&&(e.filter1=r.concat(["ib26"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox44"}},[e._v("收IB26 ("+e._s(e.checkcount("ib26"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib25",id:"checkbox45"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib25")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib25");c.checked?o<0&&(e.filter1=r.concat(["ib25"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox45"}},[e._v("收IB25 ("+e._s(e.checkcount("ib25"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib24",id:"checkbox46"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib24")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib24");c.checked?o<0&&(e.filter1=r.concat(["ib24"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox46"}},[e._v("收IB24 ("+e._s(e.checkcount("ib24"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib23",id:"checkbox47"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib23")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib23");c.checked?o<0&&(e.filter1=r.concat(["ib23"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox47"}},[e._v("收IB23 ("+e._s(e.checkcount("ib23"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib22",id:"checkbox48"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib22")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib22");c.checked?o<0&&(e.filter1=r.concat(["ib22"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox48"}},[e._v("收IB22 ("+e._s(e.checkcount("ib22"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib21",id:"checkbox49"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib21")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib21");c.checked?o<0&&(e.filter1=r.concat(["ib21"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox49"}},[e._v("收IB21 ("+e._s(e.checkcount("ib21"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"ib20",id:"checkbox50"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"ib20")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o=e._i(r,"ib20");c.checked?o<0&&(e.filter1=r.concat(["ib20"])):o>-1&&(e.filter1=r.slice(0,o).concat(r.slice(o+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox50"}},[e._v("收IB20 ("+e._s(e.checkcount("ib20"))+")")])])])]),e._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[e._v("其他")]),e._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"scholarship",id:"checkbox51"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"scholarship")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o="scholarship",n=e._i(r,o);c.checked?n<0&&(e.filter1=r.concat([o])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox51"}},[e._v("有機會申請獎學金 ("+e._s(e.checkcount("scholarship"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearlondon",id:"checkbox52"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearlondon")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,l=!!c.checked;if(Array.isArray(r)){var o="nearlondon",n=e._i(r,o);c.checked?n<0&&(e.filter1=r.concat([o])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=l}}}),e._v(" "),r("label",{attrs:{for:"checkbox52"}},[e._v("近倫敦 ("+e._s(e.checkcount("nearlondon"))+")")])])])]),e._v(" "),r("br"),r("br")])]),e._v(" "),r("div",{staticClass:"col-9@md"},[r("main",{staticStyle:{width:"100%"},attrs:{id:"rightside"}},[""!=e.filteredList?r("div",{staticClass:"select reorder "},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.sort,expression:"sort"}],staticClass:"select__input form-control",attrs:{name:"selectThis",id:"selectThis"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sort=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"rankhigh"}},[e._v("科目排名（高至低）")]),e._v(" "),r("option",{attrs:{value:"ranklow"}},[e._v("科目排名（低至高）")]),e._v(" "),r("option",{attrs:{value:"percenthigh"}},[e._v("銜接成功率（高至低）")]),e._v(" "),r("option",{attrs:{value:"percentlow"}},[e._v("銜接成功率（低至高）")]),e._v(" "),r("option",{attrs:{value:"markhigh"}},[e._v("銜接分數（高至低）")]),e._v(" "),r("option",{attrs:{value:"marklow"}},[e._v("銜接分數（低至高）")])]),e._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]):e._e(),e._v(" "),r("nav",{staticClass:"s-tabs padding-top-sm padding-left-sm"},[r("ul",{staticClass:"s-tabs__list"},[r("li",[r("nuxt-link",{attrs:{to:"/school-type/boarding-school"}},[e._v("寄宿學校")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/foundation/step2"}},[e._v("大學基礎班")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/university/step2"}},[e._v("大學")])],1),e._v(" "),r("li",[r("nuxt-link",{staticClass:"s-tabs__item--selected",attrs:{to:"/school-type/international-one/step2"}},[e._v("國際一年級")])],1),e._v(" "),r("li",[r("a",{attrs:{href:e.frontendurl+"school-type/summer-school"}},[e._v("夏季學校")])])])]),e._v(" "),r("div",{staticClass:"text-component"},[r("p",{staticClass:"padding-top-sm padding-left-md text-sm"},[e._v("排名根據 The Complete University Guide 2021")]),e._v(" "),e._l(e.filteredList,(function(t,c){return r("div",{key:c},[e.showing>c?r("div",{staticClass:"mschool"},[r("div",{staticClass:"grid grid-gap-md"},[r("div",{staticClass:"text-left col-7@md padding-y-md padding-x-lg"},[r("nuxt-link",{staticClass:"nodecor",attrs:{to:"/international-one/"+t.internationalone.slug}},[t.internationalone.image?r("img",{attrs:{src:e.backendurl+t.internationalone.image.url,width:"100"}}):e._e(),e._v(" "),r("h4",{staticClass:"color-primary"},[r("span",{staticClass:"padding-left-xxxs"},[e._v(e._s(t.internationalone.name))])]),e._v(" "),r("p",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"}})]),e._v(e._s(t.internationalone.address))]),e._v(" "),r("p",[e._v(e._s(t.internationalone.excerpt))])]),e._v(" "),r("nuxt-link",{staticClass:"btn  btn--subtle btn--sm",attrs:{to:"/international-one/"+t.internationalone.slug}},[e._v("查看更多")])],1),e._v(" "),r("div",{staticClass:"col-5@md"},[r("div",{staticClass:"jschollright padding-top-xs"},[r("div",{staticClass:"showstat",staticStyle:{"padding-left":"1em"}},[r("h4",{staticClass:"text-sm"},[e._v("科目排名")]),e._v(" "),r("h3",{staticClass:"text-xl jthebg color-accent"},[e._v("#"+e._s(t.rank))])]),e._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[e._v("銜接成功率")]),e._v(" "),t.internationalone.successrate?r("h3",{staticClass:"text-xl jthebg color-accent"},[e._v(e._s(t.internationalone.successrate)+"%")]):e._e(),e._v(" "),t.internationalone.successrate?e._e():r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e._v("- ")])]),e._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[e._v("銜接分數")]),e._v(" "),t.internationalone.marks?r("h3",{staticClass:"text-xl jthebg color-accent"},[e._v(e._s(t.internationalone.marks))]):e._e(),e._v(" "),t.internationalone.marks?e._e():r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e._v("- ")])]),e._v(" "),r("div",{staticClass:"bg-contrast-lower padding-sm",staticStyle:{"padding-left":"1.5em"}},[r("span",[r("strong",[e._v("學費預算：")]),e._v(e._s(t.internationalone.schoolfee)+"\n\n                             ")]),r("br"),e._v(" "),r("span",[r("strong",[e._v("最低收生：")]),e._v(e._s(t.internationalone.minimumrequirement)+"\n\n                             ")])])])])])]):e._e()])})),e._v(" "),e.arraylength>e.showing?r("div",{staticClass:"width-100 text-center padding-bottom-lg",on:{click:e.showmore}},[r("a",{staticClass:"btn btn--accent"},[e._v("顯示更多")]),e._v(" "),r("br")]):e._e(),e._v(" "),e.loading?r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[e._v("請稍等。資料更新中...."),r("img",{staticClass:"loadingicon",attrs:{src:"/img/loading.svg"}})]):e._e(),e._v(" "),""!=e.filteredList||e.loading?e._e():r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[e._v("不好意思，沒有找到相關結果")])],2)])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);