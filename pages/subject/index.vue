<template>
    <div>
             <section class="home-popular-subjects othersubject" style="padding-top:5em;">
                   
                    <div class="container">
                      <div class="grid justify-center">
                        <div class="col-10">
                        <div class="container max-width-adaptive-sm">
                            <h2 class="margin-bottom-sm">熱門科目</h2>
                            <p class="margin-bottom-lg">{{ pagecontent.maintext }}</p>
                            
                            <div class="author bg-contrast-lower padding-md margin-top-md margin-bottom-xl">

                                    <span class="author__img-wrapper">
                                    <img v-if='pagecontent.author'  :src='backendurl + pagecontent.author.profile.url' >
                                    </span>
                            
                                    <div v-if='pagecontent.author' class="author__content text-component v-space-xxs">
                                    <h4 class="">升學顧問 - {{ pagecontent.author.name }}</h4>
                                    <p v-if='pagecontent.author && !pagecontent.consultantcomment' class="padding-top-sm color-contrast-medium text-sm">{{ pagecontent.author.slogan }}</p>
                                        <div v-html="$md.render(pagecontent.consultantcomment)" v-if='pagecontent.author && pagecontent.consultantcomment' class="text-component padding-top-sm color-contrast-medium text-sm">
                                    </div>
                                    
                                    </div>

                                    
                            </div>
                        </div>
                         
                        
                         
                        </div>
                      </div>

                      <subjects :subjectobject="articles"/>
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
    const articles = await $axios.$get(process.env.backendurl+'subjecttutorings')
    const pagecontent = await $axios.$get(process.env.backendurl+'subjectpage')  
    return { articles, pagecontent }
  },
}

</script>
