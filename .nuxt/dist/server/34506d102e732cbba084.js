exports.ids=[10],exports.modules={73:function(t,r,e){"use strict";e.r(r);var l={data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/",noofpost:10}),async asyncData({$axios:t,query:r,params:e}){let l=0;e.page&&(l=10*(e.page-1));const n=await t.$get("https://whostsite.com/articles?categories.slug="+e.slug+"&_limit=10&_start="+l+"&_sort=date:DESC"),o=await t.$get("https://whostsite.com/categories");return{articles:n,noarticles:(await t.$get("https://whostsite.com/articles?categories.slug="+e.slug)).length,categories:o}},methods:{gopage(t){return"/category/"+this.$route.params.slug+"/"+t}},computed:{backlink(){let t=parseInt(this.$route.params.page)-1;return"/category/"+this.$route.params.slug+"/"+t},nextlink(){let t=2;return this.$route.params.page&&(t=parseInt(this.$route.params.page)+1),"/category/"+this.$route.params.slug+"/"+t},maxpage(){return this.noarticles%this.noofpost==0?parseInt(this.noarticles/this.noofpost):parseInt(this.noarticles/this.noofpost+1)},currentPage(){return this.$route.params.page?this.$route.params.page:1},filteredarticles(){return this.articles}}},n=e(1),component=Object(n.a)(l,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("div",[t._ssrNode('<section class="padding-y-xl"><div class="articles"><div class="container max-width-adaptive-lg"><div class="text-center margin-bottom-xl">'+t._ssrList(t.categories,(function(r,e){return"<h1"+t._ssrStyle(null,null,{display:r.slug==t.$route.params.slug?"":"none"})+">"+t._ssrEscape(t._s(r.name))+"</h1>"}))+' <div class="margin-top-lg">'+t._ssrList(t.categories,(function(r,e){return"<a"+t._ssrAttr("href","/category/"+r.slug)+' class="story__category margin-x-sm"><i>'+t._ssrEscape(t._s(r.name))+"</i></a>"}))+'</div></div> <div class="grid grid-gap-lg">'+t._ssrList(t.filteredarticles,(function(article,r){return'<article class="story story--featured"'+t._ssrStyle(null,null,{display:0==r?"":"none"})+"><a"+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+' class="story__img"><figure class="media-wrapper media-wrapper--5:3"><img'+t._ssrAttr("src",t.backendurl+article.thumbnail.url)+t._ssrStyle(null,null,{display:article.thumbnail?"":"none"})+'></figure></a> <div class="story__content"><div class="margin-bottom-xs">'+t._ssrList(article.categories,(function(r,e){return"<a"+t._ssrAttr("href",t.frontendurl+"category/"+r.slug)+' class="story__category"><i>'+t._ssrEscape(t._s(r.name))+"</i></a>"}))+'</div> <div class="text-component"><h2 class="story__title"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+">"+t._ssrEscape(t._s(article.title))+"</a></h2> <p>"+t._ssrEscape(t._s(article.excerpt))+'</p></div> <div class="story__author margin-top-sm"><span class="block"><img'+t._ssrAttr("src",t.backendurl+article.author.profile.url)+t._ssrStyle(null,null,{display:article.author?"":"none"})+'></span> <div><address class="story__author-name"'+t._ssrStyle(null,null,{display:article.author?"":"none"})+'><span rel="author">'+t._ssrEscape(t._s(article.author.name))+'</span></address> <p class="story__meta"><time>'+t._ssrEscape(t._s(article.date))+"</time></p></div></div></div></article>"}))+" "+t._ssrList(t.filteredarticles,(function(article,r){return'<article class="story col-4@md"'+t._ssrStyle(null,null,{display:0!=r?"":"none"})+"><a"+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+' class="story__img"><figure class="media-wrapper media-wrapper--5:3"><img'+t._ssrAttr("src",t.backendurl+article.thumbnail.url)+t._ssrStyle(null,null,{display:article.thumbnail?"":"none"})+'></figure></a> <div class="story__content"><div class="margin-bottom-xs">'+t._ssrList(article.categories,(function(r,e){return"<a"+t._ssrAttr("href",t.frontendurl+"category/"+r.slug)+' class="story__category"><i>'+t._ssrEscape(t._s(r.name))+"</i></a>"}))+'</div> <div class="text-component"><h2 class="story__title"><a'+t._ssrAttr("href",t.frontendurl+"article/"+article.slug)+">"+t._ssrEscape(t._s(article.title))+'</a></h2></div> <div class="story__author margin-top-sm"><span class="block"><img'+t._ssrAttr("src",t.backendurl+article.author.profile.url)+t._ssrStyle(null,null,{display:article.author?"":"none"})+'></span> <div><address class="story__author-name"'+t._ssrStyle(null,null,{display:article.author?"":"none"})+'><span rel="author">'+t._ssrEscape(t._s(article.author.name))+'</span></address> <p class="story__meta"><time>'+t._ssrEscape(t._s(article.date))+"</time></p></div></div></div></article>"}))+'</div> <nav aria-label="Pagination" class="pagination margin-top-xxl"'+t._ssrStyle(null,null,{display:1!=t.maxpage&&0!=t.maxpage?"":"none"})+'><ol class="pagination__list flex flex-wrap flex-gap-xxs justify-center"><li><a'+t._ssrAttr("href",t.backlink)+' aria-label="Go to previous page" class="pagination__item"'+t._ssrStyle(null,null,{display:1!=t.currentPage?"":"none"})+'><svg aria-hidden="true" viewBox="0 0 16 16" class="icon margin-right-xxxs"><title>Previous</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.5,3.5 5,8 9.5,12.5 "></polyline></g></svg> <span>上一頁</span></a></li> '+t._ssrList(t.maxpage,(function(r){return'<span class="display@sm"><li'+t._ssrStyle(null,null,{display:r-t.currentPage>=1&&r-t.currentPage<3?"":"none"})+"><a"+t._ssrAttr("href",t.gopage(r))+' class="pagination__item">'+t._ssrEscape(t._s(r))+"</a></li> <li"+t._ssrStyle(null,null,{display:r==t.currentPage?"":"none"})+"><a"+t._ssrAttr("href",t.gopage(r))+' class="pagination__item pagination__item--selected">'+t._ssrEscape(t._s(r))+"</a></li></span>"}))+' <li aria-hidden="true" class="display@sm"'+t._ssrStyle(null,null,{display:t.maxpage-t.currentPage>2?"":"none"})+'><span class="pagination__item pagination__item--ellipsis">...</span></li> <li><a'+t._ssrAttr("href",t.nextlink)+' aria-label="Go to next page" class="pagination__item"'+t._ssrStyle(null,null,{display:t.currentPage!=t.maxpage?"":"none"})+'><span>下一頁</span> <svg aria-hidden="true" viewBox="0 0 16 16" class="icon margin-left-xxxs"><title>Next</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg></a></li></ol></nav></div></div></section>')])}),[],!1,null,null,"12683208");r.default=component.exports}};