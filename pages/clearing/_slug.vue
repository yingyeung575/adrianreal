<template>
    <div>
            <section class="padding-bottom-xl">
            <article class="t-article-v3 padding-bottom-lg">
                    <div class="t-article-v3__hero margin-bottom-lg" :style="'background-image: url('+ backendurl + article.thumbnail.url + ');'">
                      <div class="container max-width-adaptive-sm">
                        <div class="t-article-v3__intro-text text-component text-center">
                          <h1 class="text-xxxl color-inherit">{{ article.title }}</h1>
                          
                        </div>
                      </div>
                    </div>
                  
                    <div class="container max-width-adaptive-sm margin-bottom-xl">
                      <div class="text-component line-height-lg v-space-md">
                        <p class="text-italic">最後更新日期：{{ article.date}}</p>
                        
                                           <div v-bind:key='idy' v-for='(content, idy) in article.maincontent'>
                                            <div v-if="content.text" v-html="$md.render(content.text)"> </div> 
                                            <div class='tableofcontent' v-if="content.tableofcontent" v-html="$md.render(content.tableofcontent)"> </div> 
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
                  
                    <div class="t-article-v3__divider container max-width-adaptive-sm margin-bottom-xl" aria-hidden="true"><span></span></div>
                  
                    <div class="container max-width-adaptive-sm">
                      <div class="author ">
                        <a href="#0" class="author__img-wrapper">
                             <img class='circle' width="150" v-if='article.author' :src="backendurl + article.author.profile.url">
                        </a>
                  
                        <div class="author__content text-component v-space-xxs">
                          <h4 v-if='article.author' class="">{{ article.author.name }}</h4>
                          <p v-if='article.author && !article.consultantcomment' class="text-sm">{{ article.author.slogan }}</p>
                          <p v-if='article.author && article.consultantcomment' class="text-sm">{{ article.consultantcomment }}</p>
                         
                        </div>
                      </div>
                    </div>
                  </article>
                  
      </section>

    </div>
</template>

<script>  
export default {  
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
   

    }
  },
  async asyncData({ $axios, params }) {
    const articles = await $axios.$get(process.env.backendurl+'areas?slug='+params.slug)
    
    let article = articles[0];
    return { article }
  },



}
</script> 