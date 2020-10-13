<template>
    <div>
        <section>
            <div class="container max-width-adaptive-sm padding-y-xl">
                <div class="text-component line-height-lg v-space-md">
                    <h1>{{ pagecontent.title }}</h1>
                    <div v-if="pagecontent.content" v-html="$md.render(pagecontent.content)"> </div> 
                    <form @submit.prevent="addContact">
                        <div class="margin-bottom-sm">
                            <label class="form-label margin-bottom-xxxs" for="input-email">名字</label>
                            <input class="form-control width-100%" type="text" v-model='contactName' name="contactName" id="contactName" required>
                        </div>
                        <div class="margin-bottom-sm">
                            <label class="form-label margin-bottom-xxxs" for="input-email">電郵</label>
                             <input class="form-control width-100%" type="email" v-model='contactEmail' name="contactEmail" id="contactEmail" required>
                        </div>
                        <div class="margin-bottom-sm">
                            <label class="form-label margin-bottom-xxxs" for="input-email">電話</label>
                           <input class="form-control width-100%" type="text" v-model='contactPhone' name="contactPhone" id="contactPhone" required>
                        </div>
                        <div class="margin-bottom-sm" v-if='!isSubmit'>
                            <button class="btn btn--primary btn--md width-100%">立即預約</button>
                        </div>
                        <h3 class="margin-bottom-sm jalertmsg" v-if='isSubmit'>謝謝你的提交！我們會盡快聯絡你！</h3>
                    </form>
                </div>
            </div>
        </section>

        <testimonials :testobject="tests"/>

            <section id='jcase' class='padding-y-xl'>
                <div class="articles">
                    <div class="container max-width-adaptive-lg">
                      <div class="text-center">
                        <h3 class="margin-bottom-lg">留學生分享</h3>
                      </div>
                      <div class="grid grid-gap-sm">
                        
                        <article class="story col-3@md" v-for='(sharing,idx) in home.homecase' :key='idx'>
                         
                          <a :href="frontendurl+'article/'+sharing.slug" class="story__img">
                            <figure>
                              <img v-if='sharing.thumbnail' :src="backendurl2 + sharing.thumbnail.url">
                            </figure>
                          </a>
                  
                          <div class="story__content">
                            
                    
                            <div class="text-component">
                              <h4 class="story__title padding-bottom-xs">{{ sharing.title }}</h4>
                             <!-- <p class="text-sm">{{ sharing.excerpt }}</p> -->
                              <span class="text-sm knowmore">了解更多</span>
                            </div>
                    
                            
                          </div>
                        </article>
                           
                        <p class='text-center'> <a :href='frontendurl + "category/sharings"' class="margin-top-lg btn btn--primary">查看更多</a></p>

                      </div>
  
                    </div>
                  </div>
            </section>

       




    </div>
</template>

<script>

import testimonials from '~/components/testimonials'

export default {
  head() {
    return {
       title: '免費1對1咨詢｜LINKEDU 領優教育'
    }
  },
  components:{
   
    testimonials,

  },
  data(){
    return{
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
  async asyncData({ $axios,query }) {


    const [home,tests, pagecontent] = await Promise.all([

        $axios.$get(process.env.backendurl+'home'),
        $axios.$get(process.env.backendurl+'testimonials'),
        $axios.$get(process.env.backendurl+'applypage'),
        

    ])
  
    return { home,tests, pagecontent }
  },
  methods: {
  
    async addContact() {
      await this.$axios.$post(process.env.backendurl+'contacts',{
        name: this.contactName,
        email: this.contactEmail,
        phone: this.contactPhone,
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