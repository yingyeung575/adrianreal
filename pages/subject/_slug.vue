<template>
    <div>
             <section>
            <div class="container max-width-adaptive-lg padding-y-xl">
                  <div class="grid grid-gap-md">
                      <div class="col-4@md">
                            <div class="text-center">
                                <img v-if='article.author' class='circle' :src='backendurl + article.author.profile.url' width="150">
                                <div class="margin-auto showbox bg-contrast-lower margin-bottom-sm">
                                    <h4 v-if='article.author' class="text-md color-primary margin-bottom-sm">升學顧問：{{ article.author.name }}</h4>
                                    <p v-if='article.author && !article.consultantcomment' class="text-sm">{{ article.author.slogan }}</p>
                                    <p v-if='article.author && article.consultantcomment' class="text-sm">{{ article.consultantcomment }}</p>
                                    <a href="#0" class="margin-top-sm width-100% btn btn--accent">預約免費諮詢</a>
                                </div>
                                <a href="" class=" width-100% color-black">下載科目排名表 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"></path></svg></a>

                                 <div class="text-component text-left bg-contrast-lower padding-y-md padding-x-lg margin-top-xxl line-height-lg v-space-md">
                                      <div v-html="$md.render(article.leftcontent)"> </div>               
                                 </div>
                           
                           
                            </div>
                            
                      </div>

                      <div class="col-8@md">
                        <article class="padding-y-lg">
                                <header class="container max-width-adaptive-sm margin-bottom-lg">
                                <div class="text-component text-left line-height-lg v-space-md margin-bottom-md">
                                        <figure class="max-width-lg margin-bottom-lg">
                                               
                                            <img v-if='article.image' style='margin:0' width='300' :src="backendurl + article.image.url">
                                        </figure>
                                    <h1>{{ article.name }}</h1>
                                    <p class="text-italic">最後更新日期：{{ jdate }}</p>
                                   <!-- <p class="color-contrast-medium text-md">
                                        學生：Edward<br>
                                        入讀學校：University of Liverpool International College <br>就讀科目：Engineering Foundation</p> -->
                                </div>
                            
                                
                                </header>
                        
                            
                                <div class="container max-width-adaptive-sm">
                                    <div class="text-component line-height-lg v-space-md">
                                         
                                         <div v-bind:key='idy' v-for='(content, idy) in article.maincontent'>
                                            <div v-if="content.text" v-html="$md.render(content.text)"> </div> 
                                        
                                            <div class="text-component__block text-component__block--outset" v-if="content.html" >
                                              <figure class="media-wrapper" v-if="content.html" v-html="content.html">
                                              
                                              </figure>
                                            </div>
                                        
                                            <figure class="text-component__block" v-if="content.__component === 'image.image'">
                                              <a v-if='content.link' :href='content.link'>
                                                  <img :src="backendurl + content.image.url">
                                              </a>
                                              <img v-if='!content.link' :src="backendurl + content.image.url">
                                              <figcaption>{{ content.caption }}</figcaption>
                                            </figure>
                                      
                                          </div>
                                    
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section class="home-popular-subjects othersubject">
                   
                    <div class="container">
                      <div class="grid justify-center">
                        <div class="col-12">
                          <h2 class="margin-bottom-md">熱門科目</h2>
                          <subjects :subjectobject="subjectss"/>
                         
                         
                        </div>
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
  async asyncData({ $axios, params }) {
    const subjectss = await $axios.$get(process.env.backendurl+'subjecttutorings')
    const articles = await $axios.$get(process.env.backendurl+'subjecttutorings?slug='+params.slug)
    let article = articles[0];
    return { article,subjectss }
  },
  computed:{
    jdate(){
      var d = new Date();
      d.setDate(d.getDate() - 2);
      return d.toISOString().substring(0, 10)
    }
  }
}
</script> 
