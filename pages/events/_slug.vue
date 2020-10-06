<template>
    <div>
             <section>
          <div class="container max-width-adaptive-lg padding-y-xl">
                <div class="grid grid-gap-md">
                    <div class="col-4@md">
                        <h2>{{ article.title }}</h2>
                        <div class="margin-top-xs card-v3__label2 text-lg color-accent">{{ article.date }}</div>
                        <div class=" card-v3__label"><span class="text-md">{{ article.time }}</span></div>
                        <div class="margin-top-sm" v-if="article.sidecontent" v-html="$md.render(article.sidecontent)">

                        </div>
                        <a :href="article.formlink" target='_blank' class="margin-top-md width-100% btn btn--accent">立即報名</a>
                       <div class="t-article-v3__divider container margin-top-xl max-width-adaptive-sm margin-bottom-xl" aria-hidden="true"><span></span></div>
                        <div class="text-center">
                          <img class='circle' width="150" v-if='article.author' :src="backendurl + article.author.profile.url">
                          <div class="margin-auto showbox bg-contrast-lower">
                              <h4 v-if='article.author' class="text-md color-primary margin-bottom-sm">{{ article.author.name }}</h4>
                              <p v-if='article.author && !article.consultantcomment' class="text-sm">{{ article.author.slogan }}</p>
                              <div class='text-component text-sm' v-if="article.author && article.consultantcomment" v-html="$md.render(article.consultantcomment)"> </div>
                              </div>
                          </div>
                        </div>
                    
                    <div class="col-8@md">
                    
                            <article class="article text-component">

                                    <figure class="text-component__block ">
                                           
                                           <img v-if='article.thumbnail' :src="backendurl + article.thumbnail.url">
                                    </figure>

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
                                   
                                  </article>

                    </div>
                </div>
          </div>
      </section>

    
<section>
          <div class="responsive-iframe margin-top-xxl" v-if="article.map" v-html="article.map">
         
        </div>
</section>
        <section class="padding-y-xl">
                <div class="container max-width-adaptive-lg">
                  <div class="margin-bottom-md">
                    <h1 class="text-md">你可能也會喜歡...</h1>
                  </div>
                
              
                  <div class="grid grid-gap-md">
                    <article class="story-v2 col-6@md col-4@xl" v-for='(article,idx) in ranarticles' v-bind:key="idx">
                      <div class="story-v2__meta">
                        <p> <span role="separator"></span> <time datetime="2020-05-20">{{ article.date }}</time> </p>
                      </div>
              
                      <div class="text-component">
                        <h2 class="story-v2__headline"> <a :href="frontendurl + 'article/' + article.slug">{{ article.title }}</a></h2>
                        <p class="story-v2__excerpt">{{ article.excerpt }}</p>
                      </div>
                    </article>
                
                 
                  </div>
                </div>
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
    const articles = await $axios.$get(process.env.backendurl+'talks?slug='+params.slug)
    const relatedarticles = await $axios.$get(process.env.backendurl+'articles?_limit=9&_sort=date:DESC')
    let article = articles[0];
    let ranarticles = relatedarticles.sort(function() {
     return .5 - Math.random();
    }).slice(0,3); 
    return { article,ranarticles }
  },



}
</script> 