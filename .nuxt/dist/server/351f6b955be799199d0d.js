exports.ids=[10],exports.modules={73:function(t,r,e){"use strict";e.r(r);var l={data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",noofpost:10}),async asyncData({$axios:t,query:r,params:e}){let l=0;e.page&&(l=10*(e.page-1));const n=await t.$get("https://whostsite.com/articles?categories.slug="+e.slug+"&_limit=10&_start="+l+"&_sort=date:DESC"),o=await t.$get("https://whostsite.com/categories");return{articles:n,noarticles:(await t.$get("https://whostsite.com/articles?categories.slug="+e.slug)).length,categories:o}},methods:{gopage(t){return"/category/"+this.$route.params.slug+"/"+t}},computed:{backlink(){let t=parseInt(this.$route.params.page)-1;return"/category/"+this.$route.params.slug+"/"+t},nextlink(){let t=2;return this.$route.params.page&&(t=parseInt(this.$route.params.page)+1),"/category/"+this.$route.params.slug+"/"+t},maxpage(){return this.noarticles%this.noofpost==0?parseInt(this.noarticles/this.noofpost):parseInt(this.noarticles/this.noofpost+1)},currentPage(){return this.$route.params.page?this.$route.params.page:1},filteredarticles(){return this.articles}}},n=e(1),component=Object(n.a)(l,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("div",[t._ssrNode('<section class="padding-y-xl"><div class="articles"><div class="container max-width-adaptive-lg"><div class="text-center margin-bottom-xl">'+t._ssrList(t.categories,(function(r,e){return r.slug==t.$route.params.slug?"<h1>"+t._ssrEscape(t._s(r.name))+"</h1>":"\x3c!----\x3e"}))+' <div class="margin-top-lg">'+t._ssrList(t.categories,(function(r,e){return"<a"+t._ssrAttr("href","/category/"+r.slug)+' class="story__category margin-x-sm"><i>'+t._ssrEscape(t._s(r.name))+"</i></a>"}))+'</div></div> <div class="grid grid-gap-lg">'+t._ssrList(t.filteredarticles,(function(article,r){return 0==r?'<article class="story story--featured"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+' class="story__img"><figure class="media-wrapper media-wrapper--5:3">'+(article.thumbnail?"<img"+t._ssrAttr("src",t.backendurl+article.thumbnail.url)+">":"\x3c!----\x3e")+'</figure></a> <div class="story__content"><div class="margin-bottom-xs">'+t._ssrList(article.categories,(function(r,e){return"<a"+t._ssrAttr("href",t.frontendurl+"category/"+r.slug)+' class="story__category"><i>'+t._ssrEscape(t._s(r.name))+"</i></a>"}))+'</div> <div class="text-component"><h2 class="story__title"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+">"+t._ssrEscape(t._s(article.title))+"</a></h2> <p>"+t._ssrEscape(t._s(article.excerpt))+'</p></div> <div class="story__author margin-top-sm"><span class="block">'+(article.author?"<img"+t._ssrAttr("src",t.backendurl+article.author.profile.url)+">":"\x3c!----\x3e")+"</span> <div>"+(article.author?'<address class="story__author-name"><span rel="author">'+t._ssrEscape(t._s(article.author.name))+"</span></address>":"\x3c!----\x3e")+' <p class="story__meta"><time>'+t._ssrEscape(t._s(article.date))+"</time></p></div></div></div></article>":"\x3c!----\x3e"}))+" "+t._ssrList(t.filteredarticles,(function(article,r){return 0!=r?'<article class="story col-4@md"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+' class="story__img"><figure class="media-wrapper media-wrapper--5:3">'+(article.thumbnail?"<img"+t._ssrAttr("src",t.backendurl+article.thumbnail.url)+">":"\x3c!----\x3e")+'</figure></a> <div class="story__content"><div class="margin-bottom-xs">'+t._ssrList(article.categories,(function(r,e){return"<a"+t._ssrAttr("href",t.frontendurl+"category/"+r.slug)+' class="story__category"><i>'+t._ssrEscape(t._s(r.name))+"</i></a>"}))+'</div> <div class="text-component"><h2 class="story__title"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+">"+t._ssrEscape(t._s(article.title))+'</a></h2></div> <div class="story__author margin-top-sm"><span class="block">'+(article.author?"<img"+t._ssrAttr("src",t.backendurl+article.author.profile.url)+">":"\x3c!----\x3e")+"</span> <div>"+(article.author?'<address class="story__author-name"><span rel="author">'+t._ssrEscape(t._s(article.author.name))+"</span></address>":"\x3c!----\x3e")+' <p class="story__meta"><time>'+t._ssrEscape(t._s(article.date))+"</time></p></div></div></div></article>":"\x3c!----\x3e"}))+"</div> "+(1!=t.maxpage&&0!=t.maxpage?'<nav aria-label="Pagination" class="pagination margin-top-xxl"><ol class="pagination__list flex flex-wrap flex-gap-xxs justify-center"><li>'+(1!=t.currentPage?"<a"+t._ssrAttr("href",t.backlink)+' aria-label="Go to previous page" class="pagination__item"><svg aria-hidden="true" viewBox="0 0 16 16" class="icon margin-right-xxxs"><title>Previous</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.5,3.5 5,8 9.5,12.5 "></polyline></g></svg> <span>上一頁</span></a>':"\x3c!----\x3e")+"</li> "+t._ssrList(t.maxpage,(function(r){return'<span class="display@sm">'+(r-t.currentPage>=1&&r-t.currentPage<3?"<li><a"+t._ssrAttr("href",t.gopage(r))+' class="pagination__item">'+t._ssrEscape(t._s(r))+"</a></li>":"\x3c!----\x3e")+" "+(r==t.currentPage?"<li><a"+t._ssrAttr("href",t.gopage(r))+' class="pagination__item pagination__item--selected">'+t._ssrEscape(t._s(r))+"</a></li>":"\x3c!----\x3e")+"</span>"}))+" "+(t.maxpage-t.currentPage>2?'<li aria-hidden="true" class="display@sm"><span class="pagination__item pagination__item--ellipsis">...</span></li>':"\x3c!----\x3e")+" <li>"+(t.currentPage!=t.maxpage?"<a"+t._ssrAttr("href",t.nextlink)+' aria-label="Go to next page" class="pagination__item"><span>下一頁</span> <svg aria-hidden="true" viewBox="0 0 16 16" class="icon margin-left-xxxs"><title>Next</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg></a>':"\x3c!----\x3e")+"</li></ol></nav>":"\x3c!----\x3e")+"</div></div></section>")])}),[],!1,null,null,"12683208");r.default=component.exports}};