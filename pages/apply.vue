<template>
    <div>
        <section>
            <div class="container max-width-adaptive-sm padding-y-xl">
                <div class="text-component line-height-lg v-space-md">
                    <h1>你準備好入讀心儀的英國學校了嗎？</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 免費與我們進行1對1咨詢！</p>
                    <form>
                        <div class="margin-bottom-sm">
                            <label class="form-label margin-bottom-xxxs" for="input-email">名字</label>
                            <input class="form-control width-100%" type="text" name="input-name">
                        </div>
                        <div class="margin-bottom-sm">
                            <label class="form-label margin-bottom-xxxs" for="input-email">電郵</label>
                            <input class="form-control width-100%" type="email" name="input-email">
                        </div>
                        <div class="margin-bottom-sm">
                            <label class="form-label margin-bottom-xxxs" for="input-email">電話</label>
                            <input class="form-control width-100%" type="text" name="input-phone">
                        </div>
                        <div class="margin-bottom-sm">
                            <button class="btn btn--primary btn--md width-100%">立即預約</button>
                        </div>
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
      script: [
       /* { src: 'js/home.js' , defer: true, body: true } */
      ]
    }
  },
  components:{
   
    testimonials,

  },
  data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl
    }
  },
  async asyncData({ $axios,query }) {


    const [home,tests] = await Promise.all([

        $axios.$get(process.env.backendurl+'home'),
        $axios.$get(process.env.backendurl+'testimonials'),
        

    ])
  
    return { home,tests }
  }
}


</script>