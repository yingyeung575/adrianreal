/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{245:function(e,t,r){"use strict";var c=r(7),o=r(246)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),c(c.P+c.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(82)("find")},246:function(e,t,r){var c=r(29),o=r(81),l=r(30),n=r(21),f=r(247);e.exports=function(e,t){var r=1==e,d=2==e,v=3==e,h=4==e,m=6==e,k=5==e||m,_=t||f;return function(t,f,x){for(var y,A,w=l(t),C=o(w),P=c(f,x,3),N=n(C.length),j=0,O=r?_(t,N):d?_(t,0):void 0;N>j;j++)if((k||j in C)&&(A=P(y=C[j],j,w),e))if(r)O[j]=A;else if(A)switch(e){case 3:return!0;case 5:return y;case 6:return j;case 2:O.push(y)}else if(h)return!1;return m?-1:v||h?h:O}}},247:function(e,t,r){var c=r(248);e.exports=function(e,t){return new(c(e))(t)}},248:function(e,t,r){var c=r(13),o=r(130),l=r(3)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),c(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},249:function(e,t,r){var c,o;!function(l){if(void 0===(o="function"==typeof(c=l)?c.call(t,r,t,e):c)||(e.exports=o),!0,e.exports=l(),!!0){var n=window.Cookies,f=window.Cookies=l();f.noConflict=function(){return window.Cookies=n,f}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(c){function o(){}function l(t,r,l){if("undefined"!=typeof document){"number"==typeof(l=e({path:"/"},o.defaults,l)).expires&&(l.expires=new Date(1*new Date+864e5*l.expires)),l.expires=l.expires?l.expires.toUTCString():"";try{var n=JSON.stringify(r);/^[\{\[]/.test(n)&&(r=n)}catch(e){}r=c.write?c.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in l)l[d]&&(f+="; "+d,!0!==l[d]&&(f+="="+l[d].split(";")[0]));return document.cookie=t+"="+r+f}}function n(e,r){if("undefined"!=typeof document){for(var o={},l=document.cookie?document.cookie.split("; "):[],i=0;i<l.length;i++){var n=l[i].split("="),f=n.slice(1).join("=");r||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=t(n[0]);if(f=(c.read||c)(f,d)||t(f),r)try{f=JSON.parse(f)}catch(e){}if(o[d]=f,e===d)break}catch(e){}}return e?o[e]:o}}return o.set=l,o.get=function(e){return n(e,!1)},o.getJSON=function(e){return n(e,!0)},o.remove=function(t,r){l(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},279:function(e,t,r){"use strict";r.r(t);r(80),r(20),r(19),r(12),r(63),r(47),r(64),r(22),r(245);var c=r(48),o=(r(28),r(4)),l=(r(249),r(49));function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={data:function(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",selectedsubject:this.$route.query.subject,sort:"feelow",showing:10,arraylength:0,universities:[],loading:!0}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$axios;case 1:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$store.state.schools.boarding){t.next=4;break}e.universities=e.$store.state.schools.boarding,t.next=8;break;case 4:return t.next=6,e.$axios.$get("https://whostsite.com/summer-schools");case 6:e.universities=t.sent,e.setSummer(e.universities);case 8:e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({setSummer:"schools/setSummer",updatesummertypequery:"schools/updatesummertypequery",updatesummerfilter1:"schools/updatesummerfilter1"}),{showmore:function(){this.showing=this.showing+10},checkcount:function(e){var t=this.universities;return(t=t.filter((function(t){var r=!0;return""!=e&&(r=t.optionsummer.find((function(element){return e==element.name}))),r}))).length}}),computed:{typequery:{get:function(){return this.$store.state.schools.summertypequery},set:function(e){this.updatesummertypequery(e)}},filter1:{get:function(){return this.$store.state.schools.summerfilter1},set:function(e){this.updatesummerfilter1(e)}},filteredList:function(){var e=this.universities,t=this.typequery,r=this.filter1;return e=e.filter((function(e){var a=e.name.toLowerCase(),c=t.toLowerCase(),o=!0;if(""!=r){var l=e.optionsummer.map((function(e){return e.name}));return o=r.every((function(e){return l.includes(e)}))}return a.includes(c)&&o})),this.arraylength=e.length,"feelow"==this.sort&&e.sort((function(a,b){return a.schoolfeesort-b.schoolfeesort})),"feehigh"==this.sort&&(e.sort((function(a,b){return a.schoolfeesort-b.schoolfeesort})),e.reverse()),e}}},d=r(11),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{attrs:{id:"newmainsearh"}},[r("div",{staticClass:"grid"},[r("div",{staticClass:"col-3@md bgmilk"},[r("div",{staticClass:"text-component padding-md"},[r("h5",{staticClass:"padding-top-md padding-bottom-xxs font-bold"},[e._v("學校名稱")]),e._v(" "),r("div",{staticClass:"search-input search-input--icon-right"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typequery,expression:"typequery"}],staticClass:"form-control width-100%",staticStyle:{"font-size":"0.8em"},attrs:{type:"search",name:"searchInputX",id:"searchInputX",placeholder:"Search..."},domProps:{value:e.typequery},on:{input:function(t){t.target.composing||(e.typequery=t.target.value)}}}),e._v(" "),r("button",{staticClass:"search-input__btn"},[r("svg",{staticClass:"icon",attrs:{viewBox:"0 0 24 24"}},[r("title",[e._v("Search")]),r("g",{attrs:{"stroke-linecap":"square","stroke-linejoin":"miter","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-miterlimit":"10"}},[r("line",{attrs:{x1:"22",y1:"22",x2:"15.656",y2:"15.656"}}),r("circle",{attrs:{cx:"10",cy:"10",r:"8"}})])])])]),e._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[e._v("課程長度 (星期)")]),e._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"length1",id:"checkbox1"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"length1")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"length1");c.checked?l<0&&(e.filter1=r.concat(["length1"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox1"}},[e._v("1 ("+e._s(e.checkcount("length1"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"length2",id:"checkbox2"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"length2")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"length2");c.checked?l<0&&(e.filter1=r.concat(["length2"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox2"}},[e._v("2 ("+e._s(e.checkcount("length2"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"length3",id:"checkbox3"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"length3")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"length3");c.checked?l<0&&(e.filter1=r.concat(["length3"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox3"}},[e._v("3 ("+e._s(e.checkcount("length3"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"length4",id:"checkbox4"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"length4")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"length4");c.checked?l<0&&(e.filter1=r.concat(["length4"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox4"}},[e._v("4 ("+e._s(e.checkcount("length4"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"length5",id:"checkbox5"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"length5")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"length5");c.checked?l<0&&(e.filter1=r.concat(["length5"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox5"}},[e._v("5 ("+e._s(e.checkcount("length5"))+")")])])])]),e._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[e._v("年齡")]),e._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"age8",id:"checkbox14"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"age8")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"age8");c.checked?l<0&&(e.filter1=r.concat(["age8"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox14"}},[e._v("8至10 ("+e._s(e.checkcount("age8"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"age11",id:"checkbox15"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"age11")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"age11");c.checked?l<0&&(e.filter1=r.concat(["age11"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox15"}},[e._v("11 ("+e._s(e.checkcount("age11"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"age12",id:"checkbox16"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"age12")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"age12");c.checked?l<0&&(e.filter1=r.concat(["age12"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox16"}},[e._v("12 ("+e._s(e.checkcount("age12"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"age13",id:"checkbox40"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"age13")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"age13");c.checked?l<0&&(e.filter1=r.concat(["age13"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox40"}},[e._v("13 ("+e._s(e.checkcount("age13"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"age14",id:"checkbox41"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"age14")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"age14");c.checked?l<0&&(e.filter1=r.concat(["age14"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox41"}},[e._v("14 ("+e._s(e.checkcount("age14"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"age15",id:"checkbox42"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"age15")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"age15");c.checked?l<0&&(e.filter1=r.concat(["age15"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox42"}},[e._v("15 ("+e._s(e.checkcount("age15"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"age16",id:"checkbox43"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"age16")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"age16");c.checked?l<0&&(e.filter1=r.concat(["age16"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox43"}},[e._v("16 ("+e._s(e.checkcount("age16"))+")")])])])]),e._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[e._v("學校特點")]),e._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"boardingexp",id:"checkbox17"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"boardingexp")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="boardingexp",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox17"}},[e._v("寄宿學校體驗 ("+e._s(e.checkcount("boardingexp"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"prepuni",id:"checkbox18"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"prepuni")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"prepuni");c.checked?l<0&&(e.filter1=r.concat(["prepuni"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox18"}},[e._v("大學預備課程 ("+e._s(e.checkcount("prepuni"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"oxford",id:"checkbox19"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"oxford")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"oxford");c.checked?l<0&&(e.filter1=r.concat(["oxford"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox19"}},[e._v("牛劍預備課程 ("+e._s(e.checkcount("oxford"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"football",id:"checkbox44"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"football")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"football");c.checked?l<0&&(e.filter1=r.concat(["football"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox44"}},[e._v("足球訓練營 ("+e._s(e.checkcount("football"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"art",id:"checkbox45"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"art")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"art");c.checked?l<0&&(e.filter1=r.concat(["art"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox45"}},[e._v("藝術課程 ("+e._s(e.checkcount("art"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"topschoolcourse",id:"checkbox46"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"topschoolcourse")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="topschoolcourse",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox46"}},[e._v("頂尖學府體驗 ("+e._s(e.checkcount("topschoolcourse"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"uniexp",id:"checkbox47"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"uniexp")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"uniexp");c.checked?l<0&&(e.filter1=r.concat(["uniexp"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox47"}},[e._v("大學體驗 ("+e._s(e.checkcount("uniexp"))+")")])])])]),e._v(" "),r("h5",{staticClass:"font-bold padding-bottom-xxs margin-top-md"},[e._v("地點")]),e._v(" "),r("fieldset",[r("div",{staticClass:"checkbox-list flex flex-column flex-gap-xxxs"},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"city",id:"checkbox20"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"city")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l=e._i(r,"city");c.checked?l<0&&(e.filter1=r.concat(["city"])):l>-1&&(e.filter1=r.slice(0,l).concat(r.slice(l+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox20"}},[e._v("市區 ("+e._s(e.checkcount("city"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"farfromcity",id:"checkbox21"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"farfromcity")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="farfromcity",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox21"}},[e._v("偏離大城市 ("+e._s(e.checkcount("farfromcity"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearheathrow",id:"checkbox22"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearheathrow")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="nearheathrow",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox22"}},[e._v("鄰近Heathrow機場 ("+e._s(e.checkcount("nearheathrow"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearlondon",id:"checkbox23"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearlondon")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="nearlondon",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox23"}},[e._v("鄰近London ("+e._s(e.checkcount("nearlondon"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearmanchester",id:"checkbox24"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearmanchester")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="nearmanchester",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox24"}},[e._v("鄰近Manchester ("+e._s(e.checkcount("nearmanchester"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearbirmingham",id:"checkbox50"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearbirmingham")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="nearbirmingham",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox50"}},[e._v("鄰近Birmingham ("+e._s(e.checkcount("nearbirmingham"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearoxford",id:"checkbox51"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearoxford")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="nearoxford",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox51"}},[e._v("鄰近Oxford ("+e._s(e.checkcount("nearoxford"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearcambridge",id:"checkbox52"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearcambridge")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="nearcambridge",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox52"}},[e._v("鄰近Cambridge ("+e._s(e.checkcount("nearcambridge"))+")")])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter1,expression:"filter1"}],staticClass:"checkbox",attrs:{type:"checkbox",value:"nearbristol",id:"checkbox53"},domProps:{checked:Array.isArray(e.filter1)?e._i(e.filter1,"nearbristol")>-1:e.filter1},on:{change:function(t){var r=e.filter1,c=t.target,o=!!c.checked;if(Array.isArray(r)){var l="nearbristol",n=e._i(r,l);c.checked?n<0&&(e.filter1=r.concat([l])):n>-1&&(e.filter1=r.slice(0,n).concat(r.slice(n+1)))}else e.filter1=o}}}),e._v(" "),r("label",{attrs:{for:"checkbox53"}},[e._v("鄰近Bristol ("+e._s(e.checkcount("nearbristol"))+")")])])])]),e._v(" "),r("br"),r("br")])]),e._v(" "),r("div",{staticClass:"col-9@md therightj"},[r("main",{staticStyle:{width:"100%"},attrs:{id:"rightside"}},[""!=e.filteredList?r("div",{staticClass:"select reorder "},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.sort,expression:"sort"}],staticClass:"select__input form-control",attrs:{name:"selectThis",id:"selectThis"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sort=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"feelow"}},[e._v("學費（低至高）")]),e._v(" "),r("option",{attrs:{value:"feehigh"}},[e._v("學費（高至低）")])]),e._v(" "),r("svg",{staticClass:"icon select__icon",attrs:{"aria-hidden":"true",viewBox:"0 0 16 16"}},[r("g",{attrs:{"stroke-width":"1",stroke:"currentColor"}},[r("polyline",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,4.5 8,12 0.5,4.5 "}})])])]):e._e(),e._v(" "),r("nav",{staticClass:"s-tabs padding-top-sm padding-left-sm"},[r("ul",{staticClass:"s-tabs__list"},[r("li",[r("nuxt-link",{attrs:{to:"/school-type/boarding-school"}},[e._v("寄宿學校")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/foundation/step2"}},[e._v("大學基礎班")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/university/step2"}},[e._v("大學")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/school-type/international-one/step2"}},[e._v("國際一年級")])],1),e._v(" "),r("li",[r("nuxt-link",{staticClass:"s-tabs__item--selected",attrs:{to:"/school-type/summer-school"}},[e._v("夏季學校")])],1)])]),e._v(" "),r("div",{staticClass:"text-component"},[e._l(e.filteredList,(function(t,c){return r("div",{key:c},[e.showing>c?r("div",{staticClass:"mschool"},[r("div",{staticClass:"grid grid-gap-md"},[r("div",{staticClass:"text-left col-7@md padding-y-md padding-x-lg"},[r("nuxt-link",{staticClass:"nodecor",attrs:{to:"/summer-school/"+t.slug}},[t.image?r("img",{attrs:{src:e.backendurl+t.image.url,width:"100"}}):e._e(),e._v(" "),r("h4",{staticClass:"color-primary"},[r("span",{staticClass:"padding-left-xxxs"}),e._v(e._s(t.name))]),e._v(" "),r("p",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"}})]),e._v(e._s(t.address))]),e._v(" "),r("p",[e._v(e._s(t.excerpt))])]),e._v(" "),r("nuxt-link",{staticClass:"btn  btn--subtle btn--sm",attrs:{to:"/summer-school/"+t.slug}},[e._v("了解更多")])],1),e._v(" "),r("div",{staticClass:"col-5@md"},[r("div",{staticClass:"jschollright padding-top-xs"},[r("div",{staticClass:"showstat",staticStyle:{"padding-left":"1em"}},[r("h4",{staticClass:"text-sm"},[e._v("距離倫敦")]),e._v(" "),t.nearlondon?e._e():r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e._v("-")]),e._v(" "),t.nearlondon?r("h3",{staticClass:"text-xl jthebg color-accent"},[e._v(e._s(t.nearlondon)+"m")]):e._e()]),e._v(" "),r("div",{staticClass:"showstat"},[r("h4",{staticClass:"text-sm"},[e._v("距離曼徹斯特")]),e._v(" "),t.nearmanchester?r("h3",{staticClass:"text-xl jthebg color-accent"},[e._v(e._s(t.nearmanchester)+"m")]):e._e(),e._v(" "),t.nearmanchester?e._e():r("h3",{staticClass:"text-xl jthebg color-accent text-center"},[e._v("- ")])]),e._v(" "),r("div",{staticClass:"bg-contrast-lower padding-sm",staticStyle:{"padding-left":"1.5em"}},[r("span",[r("strong",[e._v("學費預算：")]),e._v(e._s(t.schoolfee)+"\n\n                             ")]),e._v(" "),r("br"),e._v(" "),r("span",[r("strong",[e._v("年齡：")]),e._v(e._s(t.age)+"\n\n                             ")])])])])])]):e._e()])})),e._v(" "),e.arraylength>e.showing?r("div",{staticClass:"width-100 text-center padding-bottom-lg",on:{click:e.showmore}},[r("a",{staticClass:"btn btn--accent"},[e._v("顯示更多")]),e._v(" "),r("br")]):e._e(),e._v(" "),e.loading?r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[e._v("請稍等。資料更新中...."),r("img",{staticClass:"loadingicon",attrs:{src:"/img/loading.svg"}})]):e._e(),e._v(" "),""!=e.filteredList||e.loading?e._e():r("p",{staticClass:"noresult padding-top-sm padding-left-sm text-md"},[e._v("不好意思，沒有找到相關結果")])],2)])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);