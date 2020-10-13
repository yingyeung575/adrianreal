<template>
    <div>


<section class="contact-v3 padding-top-xl">
        <div class="container max-width-xs margin-bottom-lg">
          <div class="text-component text-center">
            <h1>聯絡我們 </h1>
            <p>{{ pagecontent.maintext }}</p>
          </div>
        </div>
      
        <div class="container max-width-adaptive-md">
          <div class="grid grid-gap-lg">
            <div class="col-6@md">
              <dl class="details-list-v2 ">
                <div class="details-list-v2__item">
                  <dt class="details-list-v2__dt">油麻地辦公室</dt>
                  <dd class="details-list-v2__dd">
                        彌敦道555號<br>九龍行10樓1001室<br>
                        (油麻地MTR A1 出口)
                  </dd>
                </div>
                <div class="details-list-v2__item">
                        <dt class="details-list-v2__dt">中環辦公室</dt>
                        <dd class="details-list-v2__dd">
                                德輔道中113-125A號<br>
                                遠東發展大廈17樓05室 <br>
                                (中環MTR B 出口)
                              (油麻地MTR A1 出口)
                        </dd>
                      </div>      
                <div class="details-list-v2__item">
                  <dt class="details-list-v2__dt">電郵</dt>
                  <dd class="details-list-v2__dd">
                    <a href='mailto:enquiry@linkedu.hk'>enquiry@linkedu.hk</a>
                  </dd>
                </div>
      
                <div class="details-list-v2__item">
                  <dt class="details-list-v2__dt">電話</dt>
                  <dd class="details-list-v2__dd">
                    <a href='tel:+852 2116 3234'>+852 2116 3234</a> <br><small class='color-contrast-medium'>Mon - Fri, 9AM - 5PM</small>
                  </dd>
                </div>
              </dl>
            </div>
      
            <div class="col-6@md">
              
              <form  @submit.prevent="addContact">
                <div class="margin-bottom-sm">
                  <label class="form-label margin-bottom-xxs" for="contactName">名字</label>
                  <input class="form-control width-100%" type="text" v-model='contactName' name="contactName" id="contactName" required>
                </div>
            
                <div class="margin-bottom-sm">
                  <label class="form-label margin-bottom-xxs" for="contactEmail">電郵</label>
                  <input class="form-control width-100%" type="email" v-model='contactEmail' name="contactEmail" id="contactEmail" required>
                </div>
                <div class="margin-bottom-sm">
                        <label class="form-label margin-bottom-xxs" for="contactPhone">電話</label>
                        <input class="form-control width-100%" type="text" v-model='contactPhone' name="contactPhone" id="contactPhone" required>
                      </div>           
                <div class="margin-bottom-sm">
                  <label class="form-label margin-bottom-xxs" for="contactMessage">信息</label>
                  <textarea class="form-control width-100%" rows="9" v-model='contactMessage' name="contactMessage" id="contactMessage"></textarea>
                </div>
              
                <div class="text-right" v-if='!isSubmit'>
                  <button class="btn btn--primary">提交</button>
                </div>
                <h3 class="margin-bottom-sm jalertmsg" v-if='isSubmit'>謝謝你的提交！我們會盡快聯絡你！</h3>
              </form>
            </div>
          </div>
        </div>

        <div class="responsive-iframe margin-top-xxl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.812216421877!2d114.15334435045449!3d22.28510208525946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007ccc6342a1%3A0x33348c978cb0fc56!2sFar%20East%20Consortium%20Building%2C%20113-125A%20Des%20Voeux%20Rd%20Central%2C%20Central!5e0!3m2!1sen!2shk!4v1588653827845!5m2!1sen!2shk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        
    
      </section>


    </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const pagecontent = await $axios.$get(process.env.backendurl+'contactpage')
    return { pagecontent }
  },
  data() {
    return {
     backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      contactMessage: '',
      isSubmit : false
    }
  },
  head() {
    return {
      script: [
        { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAwutFTptdqFWUYqkbIplagTm1aYqzDArc&callback=initGoogleMap' , defer: true, body: true } 
      ],
      title: '聯絡我們｜LINKEDU 領優教育'
    }
  },
  methods: {
  
    async addContact() {
      await this.$axios.$post(process.env.backendurl+'contacts',{
        name: this.contactName,
        email: this.contactEmail,
        phone: this.contactPhone,
        message: this.contactMessage,
        securitytoken: 'ds%sdfj3asfaf%d'
      })
      .then((response) => {
        console.log(response)
        this.isSubmit = true
      })
      .catch((response) => {
        console.log(response)
      })
    }
  }
}

</script>