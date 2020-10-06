<template>
    <div>

      <section class="padding-y-xxl bgmore" style="background-image: url('/img/mainbg.jpg');">
        <div class="container max-width-adaptive-sm">
          <div class="hero__content text-center">
            
            <div class="text-component margin-bottom-sm">
              <h1 class="color-white">常見問題</h1>
              
            </div>
        
          </div>
        </div>
      </section>

      <section class="padding-y-xxl">
        <div class="container max-width-sm">


                        <div v-bind:key='idy' v-for='(content, idy) in pagecontent.maincontent'>
                          
                          <h3 v-if="content.title" class='margin-bottom-md'>{{ content.title }}</h3>
                          
                          <ul v-if="content.faq" class="accordion  js-accordion margin-bottom-xl" data-animation="on" data-multi-items="off">
                                <li v-for='(faq,idx) in content.faq' :key='idx' class="accordion__item js-accordion__item">
                                <button class="accordion__header js-tab-focus" type="button">
                                    <span class="accordion__header-title">{{ faq.question }}</span>
                                    <em aria-hidden="true" class="accordion__header-icon"><i></i></em>
                                </button>
                        
                                <div class="accordion__panel js-accordion__panel">
                                    <div class="accordion__panel-content">
                                    <div class="text-component margin-bottom-md">
                                        <p>{{ faq.answer }}</p>
                                    </div>
                                    </div>
                                </div>
                                </li>
                        
                            
                         </ul>
                    
                        </div>
  

        </div>
      </section>
      


    </div>
</template>

<script>
import subjects from '~/components/subjects'
export default {
  components:{
    subjects
  },
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
    }
  },
  async asyncData({ $axios }) {
    const faqs = await $axios.$get(process.env.backendurl+'faqs')
    const pagecontent = await $axios.$get(process.env.backendurl+'faqpage')
    return { faqs, pagecontent }
  },
}

</script>