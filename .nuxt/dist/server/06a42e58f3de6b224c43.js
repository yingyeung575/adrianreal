exports.ids=[37],exports.modules={27:function(t,e,c){"use strict";var n={props:["subjectobject"],data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"})},o=c(1),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<div class="max-width-adaptive-lg  container margin-bottom-xl "><div class="grid justify-center bg-contrast-lower innersubject padding-bottom-xl">'+t._ssrList(t.subjectobject,(function(e,c){return'<div class="col-2"><a'+t._ssrAttr("href",t.frontendurl+"subject/"+e.slug)+' class="anone"><div class="popular-subjects"><div class="\bjsubject"><div class="grid"><div class="col-4 text-left"><div class="jsubject-icon"><span>'+t._s(e.icon)+'</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="jajaja"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"></path></svg></div></div> <div class="col-1"></div> <div class="col-6"><h4 class="color-white text-base">'+t._ssrEscape(t._s(e.name))+"</h4></div></div></div></div></a></div>"}))+"</div></div>")])}),[],!1,null,null,"08973df7");e.a=component.exports},49:function(t,e,c){"use strict";c.r(e);var n={components:{subjects:c(27).a},data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}),asyncData:async({$axios:t})=>({articles:await t.$get("https://whostsite.com/subjecttutorings"),pagecontent:await t.$get("https://whostsite.com/subjectpage")})},o=c(1),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t._ssrNode('<section class="home-popular-subjects othersubject" style="padding-top:5em;">',"</section>",[t._ssrNode('<div class="container">',"</div>",[t._ssrNode('<div class="grid justify-center"><div class="col-10"><div class="container max-width-adaptive-sm"><h2 class="margin-bottom-sm">熱門科目</h2> <p class="margin-bottom-lg">'+t._ssrEscape(t._s(t.pagecontent.maintext))+'</p> <div class="author bg-contrast-lower padding-md margin-top-md margin-bottom-xl"><span class="author__img-wrapper">'+(t.pagecontent.author?"<img"+t._ssrAttr("src",t.backendurl+t.pagecontent.author.profile.url)+">":"\x3c!----\x3e")+"</span> "+(t.pagecontent.author?'<div class="author__content text-component v-space-xxs"><h4>'+t._ssrEscape("升學顧問 - "+t._s(t.pagecontent.author.name))+"</h4> "+(t.pagecontent.author&&!t.pagecontent.consultantcomment?'<p class="padding-top-sm color-contrast-medium text-sm">'+t._ssrEscape(t._s(t.pagecontent.author.slogan))+"</p>":"\x3c!----\x3e")+" "+(t.pagecontent.author&&t.pagecontent.consultantcomment?'<div class="text-component padding-top-sm color-contrast-medium text-sm">'+t._s(t.$md.render(t.pagecontent.consultantcomment))+"</div>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+"</div></div></div></div> "),c("subjects",{attrs:{subjectobject:t.articles}})],2)])])}),[],!1,null,null,"1e4f537b");e.default=component.exports}};