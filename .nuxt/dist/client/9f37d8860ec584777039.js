(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{266:function(t,e,n){"use strict";n.r(e);n(28);var o=n(4),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.params,e.next=3,n.$get("http://whostsite.com/contactpage");case 3:return o=e.sent,e.abrupt("return",{pagecontent:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{contactName:"",contactEmail:"",contactPhone:"",contactMessage:"",isSubmit:!1}},head:function(){return{script:[{src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAwutFTptdqFWUYqkbIplagTm1aYqzDArc&callback=initGoogleMap",defer:!0,body:!0}]}},methods:{addContact:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("http://whostsite.com/contacts",{name:t.contactName,email:t.contactEmail,phone:t.contactPhone,message:t.contactMessage,securitytoken:"ds%sdfj3asfaf%d"}).then((function(e){console.log(e),t.isSubmit=!0})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},r=n(11),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"contact-v3 padding-top-xl"},[n("div",{staticClass:"container max-width-xs margin-bottom-lg"},[n("div",{staticClass:"text-component text-center"},[n("h1",[t._v("聯絡我們 ")]),t._v(" "),n("p",[t._v(t._s(t.pagecontent.maintext))])])]),t._v(" "),n("div",{staticClass:"container max-width-adaptive-md"},[n("div",{staticClass:"grid grid-gap-lg"},[t._m(0),t._v(" "),n("div",{staticClass:"col-6@md"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addContact(e)}}},[n("div",{staticClass:"margin-bottom-sm"},[n("label",{staticClass:"form-label margin-bottom-xxs",attrs:{for:"contactName"}},[t._v("名字")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],staticClass:"form-control width-100%",attrs:{type:"text",name:"contactName",id:"contactName",required:""},domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"margin-bottom-sm"},[n("label",{staticClass:"form-label margin-bottom-xxs",attrs:{for:"contactEmail"}},[t._v("電郵")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactEmail,expression:"contactEmail"}],staticClass:"form-control width-100%",attrs:{type:"email",name:"contactEmail",id:"contactEmail"},domProps:{value:t.contactEmail},on:{input:function(e){e.target.composing||(t.contactEmail=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"margin-bottom-sm"},[n("label",{staticClass:"form-label margin-bottom-xxs",attrs:{for:"contactPhone"}},[t._v("電話")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactPhone,expression:"contactPhone"}],staticClass:"form-control width-100%",attrs:{type:"text",name:"contactPhone",id:"contactPhone"},domProps:{value:t.contactPhone},on:{input:function(e){e.target.composing||(t.contactPhone=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"margin-bottom-sm"},[n("label",{staticClass:"form-label margin-bottom-xxs",attrs:{for:"contactMessage"}},[t._v("信息")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contactMessage,expression:"contactMessage"}],staticClass:"form-control width-100%",attrs:{rows:"9",name:"contactMessage",id:"contactMessage"},domProps:{value:t.contactMessage},on:{input:function(e){e.target.composing||(t.contactMessage=e.target.value)}}})]),t._v(" "),t.isSubmit?t._e():n("div",{staticClass:"text-right"},[n("button",{staticClass:"btn btn--primary",attrs:{type:"submit"}},[t._v("提交")])]),t._v(" "),t.isSubmit?n("h3",{staticClass:"margin-bottom-sm"},[t._v("謝謝你的提交！我們會盡快聯絡你！")]):t._e()])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6@md"},[n("dl",{staticClass:"details-list-v2 "},[n("div",{staticClass:"details-list-v2__item"},[n("dt",{staticClass:"details-list-v2__dt"},[t._v("油麻地辦公室")]),t._v(" "),n("dd",{staticClass:"details-list-v2__dd"},[t._v("\n                        彌敦道555號"),n("br"),t._v("九龍行10樓1001室"),n("br"),t._v("\n                        (油麻地MTR A1 出口)\n                  ")])]),t._v(" "),n("div",{staticClass:"details-list-v2__item"},[n("dt",{staticClass:"details-list-v2__dt"},[t._v("中環辦公室")]),t._v(" "),n("dd",{staticClass:"details-list-v2__dd"},[t._v("\n                                德輔道中113-125A號"),n("br"),t._v("\n                                遠東發展大廈17樓05室 "),n("br"),t._v("\n                                (中環MTR B 出口)\n                              (油麻地MTR A1 出口)\n                        ")])]),t._v(" "),n("div",{staticClass:"details-list-v2__item"},[n("dt",{staticClass:"details-list-v2__dt"},[t._v("電郵")]),t._v(" "),n("dd",{staticClass:"details-list-v2__dd"},[n("a",{attrs:{href:"mailto:enquiry@linkedu.hk"}},[t._v("enquiry@linkedu.hk")])])]),t._v(" "),n("div",{staticClass:"details-list-v2__item"},[n("dt",{staticClass:"details-list-v2__dt"},[t._v("電話")]),t._v(" "),n("dd",{staticClass:"details-list-v2__dd"},[n("a",{attrs:{href:"tel:+852 2116 3234"}},[t._v("+852 2116 3234")]),t._v(" "),n("br"),n("small",{staticClass:"color-contrast-medium"},[t._v("Mon - Fri, 9AM - 5PM")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"responsive-iframe margin-top-xxl"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.812216421877!2d114.15334435045449!3d22.28510208525946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007ccc6342a1%3A0x33348c978cb0fc56!2sFar%20East%20Consortium%20Building%2C%20113-125A%20Des%20Voeux%20Rd%20Central%2C%20Central!5e0!3m2!1sen!2shk!4v1588653827845!5m2!1sen!2shk",width:"600",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])}],!1,null,null,null);e.default=component.exports}}]);