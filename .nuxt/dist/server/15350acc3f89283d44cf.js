exports.ids=[30],exports.modules={55:function(e,t,r){"use strict";r.r(t);r(24);var o=r(4),n={data(){return{backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",selectedsubject:this.$route.query.subject,sort:"rankhigh",showing:10,arraylength:0,loading:!0,subjects:null,subjectlists:null}},async asyncData({$axios:e}){},async created(){this.subjectlists=await this.$axios.$get("https://whostsite.com/subjects-universities"),this.subjects=await this.$axios.$get("https://whostsite.com/subjects?slug="+this.selectedsubject),this.loading=!1},methods:{...Object(o.mapMutations)({setUniversity:"schools/setUniversity",updateuniversitytypequery:"schools/updateuniversitytypequery",updateuniversityfilter1:"schools/updateuniversityfilter1"}),showmore(){this.showing=this.showing+10},onChange(e){window.location.href=this.frontendurl+"school-type/university?subject="+e.target.value},checkcount(e){if(this.subjects){let t=this.subjects[0].universityranking;return t=t.filter(t=>{let r=!0;return""!=e&&(r=t.university.option.find(element=>e==element.name)),r}),t.length}}},computed:{typequery:{get(){return this.$store.state.schools.universitytypequery},set(e){this.updateuniversitytypequery(e)}},filter1:{get(){return this.$store.state.schools.universityfilter1},set(e){this.updateuniversityfilter1(e)}},showsubjects(){return this.subjectlists},filteredList(){if(this.subjects){let e=this.subjects[0].universityranking,t=this.typequery,r=this.filter1;return e=e.filter(e=>{let a=e.university.name.toLowerCase(),o=t.toLowerCase(),n=!0;if(""!=r){const t=e.university.option.map(e=>e.name);return n=r.every(e=>t.includes(e)),n}return a.includes(o)&&n}),this.arraylength=e.length,"rankhigh"==this.sort&&e.sort((a,b)=>a.rank-b.rank),"ranklow"==this.sort&&(e.sort((a,b)=>a.rank-b.rank),e.reverse()),"feelow"==this.sort&&e.sort((a,b)=>a.university.schoolfeesort-b.university.schoolfeesort),"feehigh"==this.sort&&(e.sort((a,b)=>a.university.schoolfeesort-b.university.schoolfeesort),e.reverse()),e}}}},l=r(1),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode('<section id="newmainsearh">',"</section>",[e._ssrNode('<div class="grid">',"</div>",[e._ssrNode('<div class="col-3@md bgmilk">',"</div>",[e._ssrNode('<div class="text-component padding-md">',"</div>",[e._ssrNode('<h5 class="padding-bottom-xxs font-bold">科目</h5> '),e._ssrNode('<div class="select">',"</div>",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedsubject,expression:"selectedsubject"}],staticClass:"select__input form-control rightfilter",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedsubject=t.target.multiple?r:r[0]},function(t){return e.onChange(t)}]}},e._l(e.showsubjects,(function(t,o){return r("option",{key:o,domProps:{value:t.slug}},[e._v(e._s(t.name))])})),0),e._ssrNode(' <svg aria-hidden="true" viewBox="0 0 16 16" class="icon select__icon"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>')],2),e._ssrNode(' <h5 class="padding-top-md padding-bottom-xxs font-bold">學校名稱</h5> <div class="search-input search-input--icon-right"><input type="search" name="searchInputX" id="searchInputX" placeholder="Search..."'+e._ssrAttr("value",e.typequery)+' class="form-control width-100%" style="font-size: 0.8em;"> <button class="search-input__btn"><svg viewBox="0 0 24 24" class="icon"><title>Search</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><line x1="22" y1="22" x2="15.656" y2="15.656"></line><circle cx="10" cy="10" r="8"></circle></g></svg></button></div> <h5 class="font-bold padding-bottom-xxs margin-top-md">篩選條件</h5> <fieldset><div class="checkbox-list flex flex-column flex-gap-xxxs"><div><input type="checkbox" value="RusselGroup" id="checkbox1"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"RusselGroup")>-1:e.filter1)+' class="checkbox"> <label for="checkbox1">'+e._ssrEscape("Russel Group ("+e._s(e.checkcount("RusselGroup"))+")")+'</label></div> <div><input type="checkbox" value="DSEchinese" id="checkbox2"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"DSEchinese")>-1:e.filter1)+' class="checkbox"> <label for="checkbox2">'+e._ssrEscape("收DSE中文 ("+e._s(e.checkcount("DSEchinese"))+")")+'</label></div> <div><input type="checkbox" value="Alevelchinese" id="checkbox3"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"Alevelchinese")>-1:e.filter1)+' class="checkbox"> <label for="checkbox3">'+e._ssrEscape("收Alevel中文 ("+e._s(e.checkcount("Alevelchinese"))+")")+'</label></div> <div><input type="checkbox" value="DSEEnglish" id="checkbox4"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"DSEEnglish")>-1:e.filter1)+' class="checkbox"> <label for="checkbox4">'+e._ssrEscape("可用DSE English ("+e._s(e.checkcount("DSEEnglish"))+")")+'</label></div> <div><input type="checkbox" value="AdvancedEntryYear2" id="checkbox5"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"AdvancedEntryYear2")>-1:e.filter1)+' class="checkbox"> <label for="checkbox5">'+e._ssrEscape("Advanced Entry (Year 2) ("+e._s(e.checkcount("AdvancedEntryYear2"))+")")+'</label></div> <div><input type="checkbox" value="AdvancedEntryYear3" id="checkbox6"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"AdvancedEntryYear3")>-1:e.filter1)+' class="checkbox"> <label for="checkbox6">'+e._ssrEscape("Advanced Entry (Year 3) ("+e._s(e.checkcount("AdvancedEntryYear3"))+")")+'</label></div> <div><input type="checkbox" value="DirectEntry" id="checkbox7"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"DirectEntry")>-1:e.filter1)+' class="checkbox"> <label for="checkbox7">'+e._ssrEscape("Direct Entry ("+e._s(e.checkcount("DirectEntry"))+")")+'</label></div> <div><input type="checkbox" value="Clearing" id="checkbox8"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"Clearing")>-1:e.filter1)+' class="checkbox"> <label for="checkbox8">'+e._ssrEscape("Clearing ("+e._s(e.checkcount("Clearing"))+")")+'</label></div> <div><input type="checkbox" value="Fund" id="checkbox9"'+e._ssrAttr("checked",Array.isArray(e.filter1)?e._i(e.filter1,"Fund")>-1:e.filter1)+' class="checkbox"> <label for="checkbox9">'+e._ssrEscape("香港學生獎學金 ("+e._s(e.checkcount("Fund"))+")")+"</label></div></div></fieldset>")],2)]),e._ssrNode(" "),e._ssrNode('<div class="col-9@md">',"</div>",[e._ssrNode('<main id="rightside" style="width:100%">',"</main>",[""!=e.filteredList?e._ssrNode('<div class="select reorder ">',"</div>",[r("select",{directives:[{name:"model",rawName:"v-model",value:e.sort,expression:"sort"}],staticClass:"select__input form-control",attrs:{name:"selectThis",id:"selectThis"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.sort=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"rankhigh"}},[e._v("科目排名（高至低）")]),e._v(" "),r("option",{attrs:{value:"ranklow"}},[e._v("科目排名（低至高）")]),e._v(" "),r("option",{attrs:{value:"feehigh"}},[e._v("學費（高至低）")]),e._v(" "),r("option",{attrs:{value:"feelow"}},[e._v("學費（低至高）")])]),e._ssrNode(' <svg aria-hidden="true" viewBox="0 0 16 16" class="icon select__icon"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>')],2):e._e(),e._ssrNode(" "),e._ssrNode('<nav class="s-tabs padding-top-sm padding-left-sm">',"</nav>",[e._ssrNode('<ul class="s-tabs__list">',"</ul>",[e._ssrNode("<li>","</li>",[r("nuxt-link",{attrs:{to:"/school-type/boarding-school"}},[e._v("寄宿學校")])],1),e._ssrNode(" "),e._ssrNode("<li>","</li>",[r("nuxt-link",{attrs:{to:"/school-type/foundation/step2"}},[e._v("大學基礎班")])],1),e._ssrNode(" "),e._ssrNode("<li>","</li>",[r("nuxt-link",{staticClass:"s-tabs__item--selected",attrs:{to:"/school-type/university/step2"}},[e._v("大學")])],1),e._ssrNode(" "),e._ssrNode("<li>","</li>",[r("nuxt-link",{attrs:{to:"/school-type/international-one/step2"}},[e._v("國際一年級")])],1),e._ssrNode(" <li><a"+e._ssrAttr("href",e.frontendurl+"school-type/summer-school")+">夏季學校</a></li>")],2)]),e._ssrNode(" "),e._ssrNode('<div class="text-component">',"</div>",[e._ssrNode('<p class="padding-top-sm padding-left-md text-sm">排名根據 The Complete University Guide 2021</p> '),e._l(e.filteredList,(function(t,o){return e._ssrNode("<div>","</div>",[e.showing>o?e._ssrNode('<div class="mschool">',"</div>",[e._ssrNode('<div class="grid grid-gap-md">',"</div>",[e._ssrNode('<div class="text-left col-7@md padding-y-md padding-x-lg">',"</div>",[r("nuxt-link",{staticClass:"nodecor",attrs:{to:"/university-school/"+t.university.slug}},[t.university.image?r("img",{attrs:{src:e.backendurl+t.university.image.url,width:"100"}}):e._e(),e._v(" "),r("h4",{staticClass:"color-primary"},[r("span",{staticClass:"padding-left-xxxs"},[e._v(e._s(t.university.name))])]),e._v(" "),r("p",[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"}})]),e._v(e._s(t.university.address))]),e._v(" "),r("p",[e._v(e._s(t.university.excerpt))])]),e._ssrNode(" "),r("nuxt-link",{staticClass:"btn  btn--subtle btn--sm",attrs:{to:"/university-school/"+t.university.slug}},[e._v("查看大學")]),e._ssrNode(" "),t.university.isfoundation?r("nuxt-link",{staticClass:"margin-left-sm btn btn--primary btn--sm",attrs:{to:"/foundation/"+t.university.slug+"-foundation"}},[e._v("查看Foundation")]):e._e(),e._ssrNode(" "),t.university.isinternational1?r("nuxt-link",{staticClass:"margin-left-sm btn btn--accent btn--sm",attrs:{to:"/international-one/"+t.university.slug+"-international-year-one"}},[e._v("查看International Year 1")]):e._e()],2),e._ssrNode(' <div class="col-5@md"><div class="jschollright padding-top-xs"><div class="showstat" style="padding-left:1em"><h4 class="text-sm">科目排名</h4> <h3 class="text-xl jthebg color-accent">'+e._ssrEscape("#"+e._s(t.rank))+'</h3></div> <div class="showstat"><h4 class="text-sm">設有Foundation</h4> <h3 class="text-xl jthebg color-accent text-center">'+(t.university.isfoundation?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"></path></svg>':"\x3c!----\x3e")+" "+(t.university.isfoundation?"\x3c!----\x3e":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"></path></svg>')+'</h3></div> <div class="showstat"><h4 class="text-sm">設有 International Year 1</h4> <h3 class="text-xl jthebg color-accent text-center">'+(t.university.isinternational1?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"></path></svg>':"\x3c!----\x3e")+" "+(t.university.isinternational1?"\x3c!----\x3e":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"></path></svg>')+'</h3></div> <div class="bg-contrast-lower padding-sm" style="padding-left:1.5em"><span><strong>學費預算：</strong>'+e._ssrEscape(e._s(t.university.schoolfee)+"\n\n                             ")+"</span></div></div></div>")],2)]):e._e()])})),e._ssrNode(" "+(e.arraylength>e.showing?'<div class="width-100 text-center padding-bottom-lg"><a class="btn btn--accent">顯示更多</a> <br></div>':"\x3c!----\x3e")+" "+(e.loading?'<p class="noresult padding-top-sm padding-left-sm text-md">請稍等。資料更新中....<img src="/img/loading.svg" class="loadingicon"></p>':"\x3c!----\x3e")+" "+(""!=e.filteredList||e.loading?"\x3c!----\x3e":'<p class="noresult padding-top-sm padding-left-sm text-md">不好意思，沒有找到相關結果</p>'))],2)],2)])],2)])])}),[],!1,null,null,"397d2611");t.default=component.exports}};