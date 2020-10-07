exports.ids=[6],exports.modules={25:function(t,e,l){"use strict";var c={props:["schoolobject"],data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"})},r=l(1),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<section id="jschools" class="bg-contrast-lower padding-y-xl"><div class="container max-width-adaptive-lg"><h3 class="margin-bottom-sm">英國大學介紹</h3> <div data-drag="on" class="carousel js-carousel"><p class="sr-only">Carousel items</p> <div class="carousel__wrapper"><ol class="carousel__list">'+t._ssrList(t.schoolobject.favschool,(function(e,l){return'<li class="carousel__item"><div class="carousel__demo-content"><a'+t._ssrAttr("href",t.frontendurl+e.linkslug)+' class="nodec"><div class="school__content">'+(e.image?"<img"+t._ssrAttr("src",t.backendurl+e.image.url)+">":"\x3c!----\x3e")+' <h5 class="color-primary text-base">'+t._ssrEscape(t._s(e.name))+"</h5> "+(e.tagline1?'<div class="school__characteristic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="purple"><path d="M18 24l-6-5.269-6 5.269v-24h12v24z"></path></svg> <span class="text-xs color-black">'+t._ssrEscape(t._s(e.tagline1))+"</span></div>":"\x3c!----\x3e")+" "+(e.tagline2?'<div class="school__characteristic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="color2"><circle cx="12" cy="12" r="12"></circle></svg> <span class="text-xs color-black">'+t._ssrEscape(t._s(e.tagline2))+"</span></div>":"\x3c!----\x3e")+"</div></a></div></li>"}))+'</ol></div> <nav class="carousel__controls padding-top-sm"><ul><li><button class="reset carousel__control carousel__control--prev js-carousel__control js-tab-focus"><svg viewBox="0 0 16 16" class="icon"><title>Show previous items</title><g><polygon points="11,3 5,8 11,13 "></polygon></g></svg></button></li> <li><button class="reset carousel__control carousel__control--next js-carousel__control js-tab-focus"><svg viewBox="0 0 16 16" class="icon"><title>Show next items</title><g><polygon points="5,13 11,8 5,3 "></polygon></g></svg></button></li></ul></nav></div></div></section>')])}),[],!1,null,null,"5c01c9d9");e.a=component.exports},64:function(t,e,l){"use strict";l.r(e);var c={components:{featureSchools:l(25).a},data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",selectedsubject:"computer-science",typedquery:""}),async asyncData({$axios:t,params:e}){const l=await t.$get("https://whostsite.com/boarding-schools?slug="+e.slug),c=await t.$get("https://whostsite.com/articles?_limit=12&_sort=date:DESC");return{article:l[0],ranarticles:c.sort((function(){return.5-Math.random()})).slice(0,4)}},computed:{jdate(){var t=new Date;return t.setDate(t.getDate()-2),t.toISOString().substring(0,10)}},methods:{goback(){this.$router.go(-1)}}},r=l(1),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._ssrNode('<section class="padding-top-xl padding-bottom-xxl">',"</section>",[t._ssrNode('<div class="container max-width-adaptive-md">',"</div>",[t._ssrNode('<div class="grid grid-gap-md">',"</div>",[t._ssrNode('<div class="col-8@md">',"</div>",[l("nuxt-link",{staticClass:"hjhj text-sm",attrs:{to:"/school-type/boarding-school"}},[t._v("< 返回")]),t._ssrNode(" <div>"+(t.article.image?"<img"+t._ssrAttr("src",t.backendurl+t.article.image.url)+' height="80" class="floatl margin-right-md margin-bottom-md">':"\x3c!----\x3e")+' <h4 class="color-primary floath"><span class="padding-left-xxxs"></span>'+t._ssrEscape(t._s(t.article.name))+'</h4></div> <div style="clear:both"></div> '+(t.article.author?'<div class="author bg-contrast-lower padding-md"><a href="#0" class="author__img-wrapper"><img'+t._ssrAttr("src",t.backendurl+t.article.author.profile.url)+'></a> <div class="author__content text-component v-space-xxs"><h4>'+t._ssrEscape("升學顧問 - "+t._s(t.article.author.name))+'</h4> <p class="padding-top-sm color-contrast-medium text-sm">'+t._ssrEscape(t._s(t.article.consultantcomment))+"</p></div></div>":"\x3c!----\x3e")+' <div class="text-component line-height-lg v-space-md margin-top-md"><h3>學校簡介</h3> <p class="text-italic">'+t._ssrEscape("最後更新日期："+t._s(t.jdate))+"</p> "+t._ssrList(t.article.maincontent,(function(content,e){return"<div>"+(content.text?"<div>"+t._s(t.$md.render(content.text))+"</div>":"\x3c!----\x3e")+" "+(content.html?'<div class="text-component__block text-component__block--outset">'+(content.html?'<figure class="media-wrapper">'+t._s(content.html)+"</figure>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+" "+("image.image"===content.__component?'<figure class="text-component__block">'+(content.link?"<a"+t._ssrAttr("href",content.link)+"><img"+t._ssrAttr("src",t.backendurl+content.image.url)+"></a>":"\x3c!----\x3e")+" "+(content.link?"\x3c!----\x3e":"<img"+t._ssrAttr("src",t.backendurl+content.image.url)+">")+" <figcaption>"+t._ssrEscape(t._s(content.caption))+"</figcaption></figure>":"\x3c!----\x3e")+" "+("twocol-table.twocol-table"===content.__component?'<table aria-label="Table Example" class="tablemargin twocol table table--expanded@xs js-table width-100% table--expanded table--loaded"><tbody class="table__body">'+t._ssrList(content.tablerow,(function(e,l){return'<tr class="table__row">'+(e.firstcol?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.firstcol))+"</td>":"\x3c!----\x3e")+" "+(e.secondcol?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.secondcol))+"</td>":"\x3c!----\x3e")+"</tr>"}))+"</tbody></table>":"\x3c!----\x3e")+" "+("academictable.academictable"===content.__component?'<table aria-label="Table Example" class="table table--expanded@xs js-table width-100% table--expanded table--loaded"><tbody class="table__body"><tr class="table__row"><td role="cell" class="table__cell">\n                                                            提供課程：\n                                                        </td> <td role="cell" class="table__cell">\n                                                            英國會考<br>\n                                                            GCSE\n                                                        </td> <td role="cell" class="table__cell">\n                                                            國際會考<br>\n                                                            (IGCSE)\n                                                        </td> <td role="cell" class="table__cell">\n                                                            英國高考<br>\n                                                            A-Level\n                                                        </td> <td role="cell" class="table__cell">\n                                                            國際文憑(IB)\n                                                        </td> <td role="cell" class="table__cell">\n                                                            BTEC\n                                                        </td></tr> <tr class="table__row"><td role="cell" class="table__cell"></td> <td role="cell" class="table__cell">'+(content.gcse?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"></path></svg>':"\x3c!----\x3e")+" "+(content.gcse?"\x3c!----\x3e":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"></path></svg>')+'</td> <td role="cell" class="table__cell">'+(content.igcse?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"></path></svg>':"\x3c!----\x3e")+" "+(content.igcse?"\x3c!----\x3e":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"></path></svg>')+'</td> <td role="cell" class="table__cell">'+(content.alevel?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"></path></svg>':"\x3c!----\x3e")+" "+(content.alevel?"\x3c!----\x3e":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"></path></svg>')+'</td> <td role="cell" class="table__cell">'+(content.ib?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"></path></svg>':"\x3c!----\x3e")+" "+(content.ib?"\x3c!----\x3e":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"></path></svg>')+'</td> <td role="cell" class="table__cell">'+(content.btec?'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"></path></svg>':"\x3c!----\x3e")+" "+(content.btec?"\x3c!----\x3e":'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"></path></svg>')+"</td></tr> "+t._ssrList(content.sixcoltable,(function(e,l){return'<tr class="table__row">'+(e.col1?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.col1))+"</td>":"\x3c!----\x3e")+" "+(e.col2?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.col2))+"</td>":"\x3c!----\x3e")+" "+(e.col3?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.col3))+"</td>":"\x3c!----\x3e")+" "+(e.col4?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.col4))+"</td>":"\x3c!----\x3e")+" "+(e.col5?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.col5))+"</td>":"\x3c!----\x3e")+" "+(e.col6?'<td role="cell" class="table__cell">'+t._s(t.$md.render(e.col6))+"</td>":"\x3c!----\x3e")+"</tr>"}))+"</tbody></table>":"\x3c!----\x3e")+"</div>"}))+"</div>")],2),t._ssrNode(' <div class="col-4@md"><a href="/apply" class="margin-top-lg width-100% btn btn--accent padding-y-sm">立即報名</a> <div data-theme="reverse" class="padding-x-md padding-y-sm margin-top-sm"><p>學校資料</p></div> <div class="bgmilk therightinfo padding-x-md padding-top-md padding-bottom-xxl">'+t._ssrList(t.article.briefcontent,(function(e,l){return"<p><strong>"+t._ssrEscape(t._s(e.property)+" :")+"</strong>"+t._ssrEscape(" "+t._s(e.value)+"\n                                ")+"</p>"}))+" "+t._ssrList(t.article.option,(function(t,e){return'<span class="margin-top-sm story__category margin-right-sm">'+("RusselGroup"==t.name?"<i>Russel Group</i>":"\x3c!----\x3e")+" "+("DSEchinese"==t.name?"<i>收DSE中文</i>":"\x3c!----\x3e")+" "+("Alevelchinese"==t.name?"<i>收Alevel中文</i>":"\x3c!----\x3e")+" "+("DSEEnglish"==t.name?"<i>可用DSE English</i>":"\x3c!----\x3e")+" "+("AdvancedEntryYear2"==t.name?"<i>Advanced Entry (Year 2)</i>":"\x3c!----\x3e")+" "+("AdvancedEntryYear3"==t.name?"<i>Advanced Entry (Year 3)</i>":"\x3c!----\x3e")+" "+("DirectEntry"==t.name?"<i>Direct Entry</i>":"\x3c!----\x3e")+" "+("Clearing"==t.name?"<i>Clearing</i>":"\x3c!----\x3e")+" "+("Fund"==t.name?"<i>香港學生獎學金</i>":"\x3c!----\x3e")+"</span>"}))+'</div> <div class="responsive-iframe margin-bottom-sm">'+t._s(t.article.map)+'</div> <a href class="margin-top-lg width-100% color-black">下載學校排名表 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"></path></svg></a></div>')],2)])]),t._ssrNode(' <section id="jeat" class="padding-y-xl bg-contrast-lower"><div class="articles"><div class="container max-width-adaptive-lg"><div class="text-left"><h3 class="margin-bottom-lg">相關文章</h3></div> '+(t.article.relatedarticles[0]?'<div class="grid grid-gap-sm">'+t._ssrList(t.article.relatedarticles,(function(article,e){return'<article class="story col-3@md"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.linkslug)+' class="story__img"><figure>'+(article.image?"<img"+t._ssrAttr("src",t.backendurl+article.image.url)+">":"\x3c!----\x3e")+'</figure></a> <div class="story__content"><div class="text-component"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.linkslug)+' class="nodecor"><h4 class="story__title padding-bottom-xs">'+t._ssrEscape(t._s(article.title))+'</h4> <span class="text-sm knowmore">了解更多</span></a></div></div></article>'}))+"</div>":"\x3c!----\x3e")+" "+(t.article.relatedarticles[0]?"\x3c!----\x3e":'<div class="grid grid-gap-sm">'+t._ssrList(t.ranarticles,(function(article,e){return'<article class="story col-3@md"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+' class="story__img"><figure>'+(article.thumbnail?"<img"+t._ssrAttr("src",t.backendurl+article.thumbnail.url)+">":"\x3c!----\x3e")+'</figure></a> <div class="story__content"><div class="text-component"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+' class="nodecor"><h4 class="story__title padding-bottom-xs">'+t._ssrEscape(t._s(article.title))+'</h4> <span class="text-sm knowmore">了解更多</span></a></div></div></article>'}))+"</div>")+"</div></div></section>")],2)}),[],!1,null,null,"b53b0e28");e.default=component.exports}};