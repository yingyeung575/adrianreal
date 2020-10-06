<template>
    <div>
       
         <section>
            <div class="container max-width-adaptive-lg padding-y-xl">
                  <div class="grid grid-gap-md">
                      <div class="col-4@md">
                            <div class="text-center">
                               
                                <img class='circle' width="150" v-if='article.author' :src="backendurl + article.author.profile.url">
                                <div class="margin-auto showbox bg-contrast-lower">
                                    <h4 v-if='article.author' class="text-md color-primary margin-bottom-sm">{{ article.author.name }}</h4>
                                    <p v-if='article.author && !article.consultantcomment' class="text-sm">{{ article.author.slogan }}</p>
                                    <p v-if='article.author && article.consultantcomment' class="text-sm">{{ article.consultantcomment }}</p>
                                    <a href="#0" class="margin-top-sm width-100% btn btn--accent">預約免費諮詢</a>
                                </div>
                            </div>
                      </div>

                      <div class="col-8@md">
                        <article class="padding-y-lg">
                                <header class="container max-width-adaptive-sm margin-bottom-lg">
                                <div class="text-component text-left line-height-lg v-space-md margin-bottom-md">
                                        <figure class="container max-width-lg margin-bottom-lg">
        
                                          <img width='200' v-if='article.thumbnail' :src="backendurl + article.thumbnail.url">
                                        </figure>
                                    <h1 class="mb0">{{ article.title }}</h1>
                                    <span role="separator"></span> <time>{{ article.date }}</time> 
                                      /
                                    <span v-for='(tag,idx) in article.tag' v-bind:key="idx" class="story__category margin-x-sm"><i class=" text-md">{{ tag.tag }}</i></span>
                                    <!-- <p class="color-contrast-medium text-md margin-top-sm">
                                        學生：Edward<br>
                                        入讀學校：University of Liverpool International College <br>就讀科目：Engineering Foundation</p> -->
                                </div>
                            
                                
                                </header>
                        
                            
                                <div class="container max-width-adaptive-sm">
                                    <div class="text-component line-height-lg v-space-md">
                                       
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
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section class="padding-y-xl bg-contrast-lower">
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
    const articles = await $axios.$get(process.env.backendurl+'cases?slug='+params.slug)
    const relatedarticles = await $axios.$get(process.env.backendurl+'articles?_limit=9&_sort=date:DESC')
    let article = articles[0];
    let ranarticles = relatedarticles.sort(function() {
     return .5 - Math.random();
    }).slice(0,3); 
    return { article,ranarticles }
  },



}
</script> 