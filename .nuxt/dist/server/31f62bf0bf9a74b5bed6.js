exports.ids=[2],exports.modules={26:function(t,e,o){"use strict";var l={props:["testobject"],data:()=>({backendurl:"http://whostsite.com/",frontendurl:"http://front.whostsite.com/"})},n=o(1),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<section class="padding-bottom-xl bg-contrast-lower"><div data-swipe="on" class="slideshow slideshow--transition-slide testimonial-slideshow js-slideshow"><p class="sr-only">Slideshow Items</p> <ul class="slideshow__content">'+t._ssrList(t.testobject,(function(e,o){return'<li class="slideshow__item js-slideshow__item"><div class="container max-width-sm"><blockquote class="testimonial-slideshow__quote text-component"><p>'+t._ssrEscape('"'+t._s(e.content)+'"')+'</p></blockquote> <footer class="margin-top-md"><figure aria-hidden="true" class="testimonial-slideshow__img margin-bottom-sm">'+(e.image?"<img"+t._ssrAttr("src",t.backendurl+e.image.url)+' class="avatar__img">':"\x3c!----\x3e")+'</figure> <cite class="testimonial-slideshow__cite"><strong>'+t._ssrEscape(t._s(e.name))+"</strong> <span>"+t._ssrEscape(t._s(e.title))+"</span></cite></footer></div></li>"}))+'</ul> <ul><li class="slideshow__control js-slideshow__control"><button class="reset slideshow__btn js-tab-focus"><svg viewBox="0 0 32 32" class="icon"><title>Show previous slide</title><path d="M20.768,31.395L10.186,16.581c-0.248-0.348-0.248-0.814,0-1.162L20.768,0.605l1.627,1.162L12.229,16 l10.166,14.232L20.768,31.395z"></path></svg></button></li> <li class="slideshow__control js-slideshow__control"><button class="reset slideshow__btn js-tab-focus"><svg viewBox="0 0 32 32" class="icon"><title>Show next slide</title><path d="M11.232,31.395l-1.627-1.162L19.771,16L9.605,1.768l1.627-1.162l10.582,14.813 c0.248,0.348,0.248,0.814,0,1.162L11.232,31.395z"></path></svg></button></li></ul></div></section>')])}),[],!1,null,null,"991f5b38");e.a=component.exports},38:function(t,e,o){"use strict";o.r(e);var l={head:()=>({script:[]}),components:{testimonials:o(26).a},data:()=>({backendurl:"http://whostsite.com/",frontendurl:"http://front.whostsite.com/"}),async asyncData({$axios:t,query:e}){const[o,l]=await Promise.all([t.$get("http://whostsite.com/home"),t.$get("http://whostsite.com/testimonials")]);return{home:o,tests:l}}},n=o(1),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._ssrNode('<section><div class="container max-width-adaptive-sm padding-y-xl"><div class="text-component line-height-lg v-space-md"><h1>你準備好入讀心儀的英國學校了嗎？</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 免費與我們進行1對1咨詢！</p> <form><div class="margin-bottom-sm"><label for="input-email" class="form-label margin-bottom-xxxs">名字</label> <input type="text" name="input-name" class="form-control width-100%"></div> <div class="margin-bottom-sm"><label for="input-email" class="form-label margin-bottom-xxxs">電郵</label> <input type="email" name="input-email" class="form-control width-100%"></div> <div class="margin-bottom-sm"><label for="input-email" class="form-label margin-bottom-xxxs">電話</label> <input type="text" name="input-phone" class="form-control width-100%"></div> <div class="margin-bottom-sm"><button class="btn btn--primary btn--md width-100%">立即預約</button></div></form></div></div></section> '),o("testimonials",{attrs:{testobject:t.tests}}),t._ssrNode(' <section id="jcase" class="padding-y-xl"><div class="articles"><div class="container max-width-adaptive-lg"><div class="text-center"><h3 class="margin-bottom-lg">留學生分享</h3></div> <div class="grid grid-gap-sm">'+t._ssrList(t.home.homecase,(function(e,o){return'<article class="story col-3@md"><a'+t._ssrAttr("href",t.frontendurl+"article/"+e.slug)+' class="story__img"><figure>'+(e.thumbnail?"<img"+t._ssrAttr("src",t.backendurl+e.thumbnail.url)+">":"\x3c!----\x3e")+'</figure></a> <div class="story__content"><div class="text-component"><h4 class="story__title padding-bottom-xs">'+t._ssrEscape(t._s(e.title))+'</h4> <span class="text-sm knowmore">了解更多</span></div></div></article>'}))+' <p class="text-center"><a'+t._ssrAttr("href",t.frontendurl+"category/sharings")+' class="margin-top-lg btn btn--primary">查看更多</a></p></div></div></div></section>')],2)}),[],!1,null,null,"2fb5e13a");e.default=component.exports}};