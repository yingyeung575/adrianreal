exports.ids=[14],exports.modules={42:function(t,e,r){"use strict";r.r(e);var n={data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",noofpost:9}),async asyncData({$axios:t,query:e,params:r}){let n=0;return r.page&&(n=9*(r.page-1)),{articles:await t.$get("https://whostsite.com/talks?_limit=9&_sort=date:DESC&_start="+n),noarticles:await t.$get("https://whostsite.com/talks/count")}},methods:{gopage:t=>"/events/page/"+t},computed:{backlink(){return"/events/page/"+(parseInt(this.$route.params.page)-1)},nextlink(){let t=2;return this.$route.params.page&&(t=parseInt(this.$route.params.page)+1),"/events/page/"+t},maxpage(){return this.noarticles%this.noofpost==0?parseInt(this.noarticles/this.noofpost):parseInt(this.noarticles/this.noofpost+1)},currentPage(){return this.$route.params.page?this.$route.params.page:1},filteredarticles(){return this.articles}}},l=r(1),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<section class="padding-y-xxl bgmore" style="background-image: url(\'/img/mainbg.jpg\');"><div class="container max-width-adaptive-sm"><div class="hero__content text-center"><div class="text-component margin-bottom-sm"><h1 class="color-white">最新講座</h1></div></div></div></section> <section id="jtalk" class="padding-bottom-xxl"><div class="container max-width-adaptive-lg"><div class="grid grid-gap-md">'+t._ssrList(t.filteredarticles,(function(article,e){return'<div class="col-4@md"><div class="card-v3 text-center "><a'+t._ssrAttr("href",t.frontendurl+"events/"+article.slug)+' aria-label="Description of the link" class="card-v3__link"><figure class="card-v3__img">'+(article.thumbnail?'<img width="200"'+t._ssrAttr("src",t.backendurl+article.thumbnail.url)+">":"\x3c!----\x3e")+'</figure> <div class="card-v3__content"><div class="card-v3__label2 text-md color-accent">'+t._ssrEscape(t._s(article.date))+'</div> <div class="card-v3__label">'+t._ssrEscape(t._s(article.time))+'</div> <h3 class="text-md">'+t._ssrEscape(t._s(article.title))+'</h3></div> <div class="card-v3__footer"><span>了解更多</span> <svg viewBox="0 0 16 16" class="icon"><g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="0.5" y1="8.5" x2="15.5" y2="8.5"></line><polyline points="10.5,3.5 15.5,8.5 10.5,13.5 "></polyline></g></svg></div></a></div></div>'}))+" "+(1!=t.maxpage&&0!=t.maxpage?'<nav aria-label="Pagination" class="pagination margin-top-xxl"><ol class="pagination__list flex flex-wrap flex-gap-xxs justify-center"><li>'+(1!=t.currentPage?"<a"+t._ssrAttr("href",t.backlink)+' aria-label="Go to previous page" class="pagination__item"><svg aria-hidden="true" viewBox="0 0 16 16" class="icon margin-right-xxxs"><title>Previous</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.5,3.5 5,8 9.5,12.5 "></polyline></g></svg> <span>上一頁</span></a>':"\x3c!----\x3e")+"</li> "+t._ssrList(t.maxpage,(function(e){return'<span class="display@sm">'+(e-t.currentPage>=1&&e-t.currentPage<3?"<li><a"+t._ssrAttr("href",t.gopage(e))+' class="pagination__item">'+t._ssrEscape(t._s(e))+"</a></li>":"\x3c!----\x3e")+" "+(e==t.currentPage?"<li><a"+t._ssrAttr("href",t.gopage(e))+' class="pagination__item pagination__item--selected">'+t._ssrEscape(t._s(e))+"</a></li>":"\x3c!----\x3e")+"</span>"}))+" "+(t.maxpage-t.currentPage>2?'<li aria-hidden="true" class="display@sm"><span class="pagination__item pagination__item--ellipsis">...</span></li>':"\x3c!----\x3e")+" <li>"+(t.currentPage!=t.maxpage?"<a"+t._ssrAttr("href",t.nextlink)+' aria-label="Go to next page" class="pagination__item"><span>下一頁</span> <svg aria-hidden="true" viewBox="0 0 16 16" class="icon margin-left-xxxs"><title>Next</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg></a>':"\x3c!----\x3e")+"</li></ol></nav>":"\x3c!----\x3e")+"</div></div></section>")])}),[],!1,null,null,"3186c840");e.default=component.exports}};