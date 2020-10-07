exports.ids=[24],exports.modules={45:function(l,t,e){"use strict";e.r(t);var n={data:()=>({backendurl:"https://whostsite.com/",frontendurl:"https://vigilant-perlman-c214ff.netlify.app/"}),async asyncData({$axios:l}){const t=await l.$get("https://whostsite.com/rankingboardings"),e=await l.$get("https://whostsite.com/boardingrankingpage");return t.sort((a,b)=>parseFloat(b.alevel)-parseFloat(a.alevel)),{articles:t,pagecontent:e}}},o=e(1),component=Object(o.a)(n,(function(){var l=this,t=l.$createElement;return(l._self._c||t)("div",[l._ssrNode('<section class="padding-top-xl padding-bottom-xxl"><div class="container max-width-sm"><h3 class="margin-bottom-sm  text-center">寄宿學校排名表</h3> <p class="margin-bottom-lg">'+l._ssrEscape(l._s(l.pagecontent.maintext))+'</p> <div class="author bg-contrast-lower padding-md margin-top-md margin-bottom-xl"><span class="author__img-wrapper">'+(l.pagecontent.author?"<img"+l._ssrAttr("src",l.backendurl+l.pagecontent.author.profile.url)+">":"\x3c!----\x3e")+"</span> "+(l.pagecontent.author?'<div class="author__content text-component v-space-xxs"><h4>'+l._ssrEscape("升學顧問 - "+l._s(l.pagecontent.author.name))+"</h4> "+(l.pagecontent.author&&!l.pagecontent.consultantcomment?'<p class="padding-top-sm color-contrast-medium text-sm">'+l._ssrEscape(l._s(l.pagecontent.author.slogan))+"</p>":"\x3c!----\x3e")+" "+(l.pagecontent.author&&l.pagecontent.consultantcomment?'<div class="text-component padding-top-sm color-contrast-medium text-sm">'+l._s(l.$md.render(l.pagecontent.consultantcomment))+"</div>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+'</div></div> <div class="container max-width-lg"><div class="margin-bottom-lg"><a href="/rank-school" class="btn btn--subtle margin-right-md">\n                        大學排名表\n                </a> <a href="/rank-boarding" class="btn btn--primary margin-right-md">\n                        寄宿學校排名表\n                </a> <a href="/rank-subject" class="btn btn--subtle">\n                        科目排名表\n                </a></div> <div class="int-table text-sm js-int-table"><div class="int-table__inner"><table aria-label="Interactive table example" class="int-table__table"><thead class="int-table__header js-int-table__header"><tr class="int-table__row"><th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>學校名稱</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingName" id="sortingNameNone" value="none" checked="checked"> <label for="sortingNameNone">No sorting</label></li> <li><input type="radio" name="sortingName" id="sortingNameAsc" value="asc"> <label for="sortingNameAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingName" id="sortingNameDes" value="desc"> <label for="sortingNameDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="flex items-center"><span>地區</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>學校類別</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>學費</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>學生人數</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>寄宿學生比例</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>最低入學年級</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>GCSE 7 - 9 (%)</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th> <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort"><div class="items-center"><span>A Level A - A* (%)</span> <svg aria-hidden="true" viewBox="0 0 12 12" class="icon icon--xxs margin-left-xxxs int-table__sort-icon"><polygon points="6 0 10 5 2 5 6 0" class="arrow-up"></polygon><polygon points="6 12 2 7 10 7 6 12" class="arrow-down"></polygon></svg></div> <ul class="sr-only js-int-table__sort-list"><li><input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked="checked"> <label for="sortingEmailNone">No sorting</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc"> <label for="sortingEmailAsc">Sort in ascending order</label></li> <li><input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc"> <label for="sortingEmailDes">Sort in descending order</label></li></ul></th></tr></thead> <tbody class="int-table__body js-int-table__body">'+l._ssrList(l.articles,(function(t,e){return'<tr class="int-table__row"><td class="int-table__cell">'+(t.link?"<a"+l._ssrAttr("href",l.frontendurl+t.link)+">"+l._ssrEscape(l._s(t.name))+"</a>":"\x3c!----\x3e")+(t.link?"\x3c!----\x3e":"<span>"+l._ssrEscape(l._s(t.name))+"</span>")+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.district))+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.type))+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.fee))+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.noofstudents))+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.percentage))+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.minyear))+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.cgse))+'</td> <td class="int-table__cell">'+l._ssrEscape(l._s(t.alevel))+"</td></tr>"}))+'</tbody></table></div></div></div></section> <section class="bg-contrast-lower radius-md padding-lg"><div class="container max-width-lg"><div class="grid grid-gap-md items-center"><div class="col-6@md"><div class="text-component"><h3>下載寄宿學校排名表PDF</h3> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsum quo nihil ipsam sapiente. Suscipit, rerum!</p></div></div> <div class="col-6@md"><form class="margin-bottom-sm"><div class="flex flex-column flex-row@md flex-gap-xxxs"><input aria-label="Email" type="email" placeholder="你的電郵" class="form-control flex-grow"> <button class="btn btn--primary">提交</button></div></form></div></div></div></section>')])}),[],!1,null,null,"1e73ca09");t.default=component.exports}};