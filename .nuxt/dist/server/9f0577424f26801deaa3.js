exports.ids=[10],exports.modules={41:function(t,e,l){"use strict";l.r(e);var c={asyncData:async({$axios:t,params:e})=>({pagecontent:await t.$get("http://whostsite.com/contactpage")}),data:()=>({contactName:"",contactEmail:"",contactPhone:"",contactMessage:"",isSubmit:!1}),head:()=>({script:[{src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAwutFTptdqFWUYqkbIplagTm1aYqzDArc&callback=initGoogleMap",defer:!0,body:!0}]}),methods:{async addContact(){await this.$axios.$post("http://whostsite.com/contacts",{name:this.contactName,email:this.contactEmail,phone:this.contactPhone,message:this.contactMessage,securitytoken:"ds%sdfj3asfaf%d"}).then(t=>{console.log(t),this.isSubmit=!0}).catch(t=>{console.log(t)})}}},o=l(1),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<section class="contact-v3 padding-top-xl"><div class="container max-width-xs margin-bottom-lg"><div class="text-component text-center"><h1>聯絡我們 </h1> <p>'+t._ssrEscape(t._s(t.pagecontent.maintext))+'</p></div></div> <div class="container max-width-adaptive-md"><div class="grid grid-gap-lg"><div class="col-6@md"><dl class="details-list-v2 "><div class="details-list-v2__item"><dt class="details-list-v2__dt">油麻地辦公室</dt> <dd class="details-list-v2__dd">\n                        彌敦道555號<br>九龍行10樓1001室<br>\n                        (油麻地MTR A1 出口)\n                  </dd></div> <div class="details-list-v2__item"><dt class="details-list-v2__dt">中環辦公室</dt> <dd class="details-list-v2__dd">\n                                德輔道中113-125A號<br>\n                                遠東發展大廈17樓05室 <br>\n                                (中環MTR B 出口)\n                              (油麻地MTR A1 出口)\n                        </dd></div> <div class="details-list-v2__item"><dt class="details-list-v2__dt">電郵</dt> <dd class="details-list-v2__dd"><a href="mailto:enquiry@linkedu.hk">enquiry@linkedu.hk</a></dd></div> <div class="details-list-v2__item"><dt class="details-list-v2__dt">電話</dt> <dd class="details-list-v2__dd"><a href="tel:+852 2116 3234">+852 2116 3234</a> <br><small class="color-contrast-medium">Mon - Fri, 9AM - 5PM</small></dd></div></dl></div> <div class="col-6@md"><form><div class="margin-bottom-sm"><label for="contactName" class="form-label margin-bottom-xxs">名字</label> <input type="text" name="contactName" id="contactName" required="required"'+t._ssrAttr("value",t.contactName)+' class="form-control width-100%"></div> <div class="margin-bottom-sm"><label for="contactEmail" class="form-label margin-bottom-xxs">電郵</label> <input type="email" name="contactEmail" id="contactEmail"'+t._ssrAttr("value",t.contactEmail)+' class="form-control width-100%"></div> <div class="margin-bottom-sm"><label for="contactPhone" class="form-label margin-bottom-xxs">電話</label> <input type="text" name="contactPhone" id="contactPhone"'+t._ssrAttr("value",t.contactPhone)+' class="form-control width-100%"></div> <div class="margin-bottom-sm"><label for="contactMessage" class="form-label margin-bottom-xxs">信息</label> <textarea rows="9" name="contactMessage" id="contactMessage" class="form-control width-100%">'+t._ssrEscape(t._s(t.contactMessage))+"</textarea></div> "+(t.isSubmit?"\x3c!----\x3e":'<div class="text-right"><button type="submit" class="btn btn--primary">提交</button></div>')+" "+(t.isSubmit?'<h3 class="margin-bottom-sm">謝謝你的提交！我們會盡快聯絡你！</h3>':"\x3c!----\x3e")+'</form></div></div></div> <div class="responsive-iframe margin-top-xxl"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.812216421877!2d114.15334435045449!3d22.28510208525946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007ccc6342a1%3A0x33348c978cb0fc56!2sFar%20East%20Consortium%20Building%2C%20113-125A%20Des%20Voeux%20Rd%20Central%2C%20Central!5e0!3m2!1sen!2shk!4v1588653827845!5m2!1sen!2shk" width="600" height="450" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0" style="border:0;"></iframe></div></section>')])}),[],!1,null,null,"6b3bc828");e.default=component.exports}};