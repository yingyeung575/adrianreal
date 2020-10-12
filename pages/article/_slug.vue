<template>
    <div>
           <section >
            <article class="padding-y-xl">
                    <header class="container max-width-xs margin-bottom-lg">
                      <div class="text-component text-center line-height-lg v-space-md margin-bottom-md">
                        <h1>{{ article.title }}</h1>
                        <p v-if="article.excerpt" class="color-contrast-medium text-md">{{ article.excerpt }}</p>
                            <div class="margin-bottom-xs">
                              <a v-for='(category,idx) in article.categories' v-bind:key='idx' :href="frontendurl + 'category/' + category.slug" class="story__category">
                                <i>{{ category.name }}</i>
                              </a>
                             
                            </div>
                      </div>
                  
                      <div class="flex justify-center">
                        <div class="author author--meta">
                          <a href="#0" class="author__img-wrapper">
                            <img v-if='article.author' :src="backendurl2 + article.author.profile.url">
                          </a>
                  
                          <div class="author__content text-component v-space-xxs">
                            <h4 v-if='article.author' class="text-base"><span rel="author">{{ article.author.name }}</span></h4>
                            <p class="text-sm color-contrast-medium"><time>{{ article.date }}</time></p>
                                                   
                          </div>
                        </div>
                      </div>
                    </header>
                  
                  <!--  <figure class="container max-width-adaptive-sm margin-bottom-lg">
                       <img v-if='article.thumbnail' :src="backendurl2 + article.thumbnail.url">
                    </figure> -->
                  
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
                                <img :src="backendurl2 + content.image.url" :width='content.size'>
                             </a>
                             <img v-if='!content.link' :src="backendurl2 + content.image.url" :width='content.size'>
                            <figcaption>{{ content.caption }}</figcaption>
                          </figure>
                    
                        </div>
                     
                      </div>
                    </div>
                  </article>
     </section>
            

     <section class="padding-y-xl bg-contrast-lower">
            <div class="container max-width-adaptive-lg">
              <div class="margin-bottom-md">
                <h3 class="text-md">你可能也會喜歡...</h3>
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

          <!-- pop up -->

<div v-if='showpop' class="modal modal--full-screen js-modal modal--is-visible" id="modal4" data-animation="on">
   <div class="modal__content" role="alertdialog" tabindex="-1" aria-labelledby="modalTitle1" aria-describedby="modalDescription1">
      <header class="modal__header">
         <h4 class="text-truncate" id="modalTitle1"></h4>
         <button @click='closepop' class="reset modal__close-btn js-modal__close jclose2">
            <svg class="icon" viewBox="0 0 20 20">
               <title>Close modal window</title>
               <polygon points="18.707 2.707 17.293 1.293 10 8.586 2.707 1.293 1.293 2.707 8.586 10 1.293 17.293 2.707 18.707 10 11.414 17.293 18.707 18.707 17.293 11.414 10 18.707 2.707"></polygon>
            </svg>
         </button>
      </header>
      <div class="modal__body bg-contrast-lower">
         <div class="container max-width-adaptive-lg">
            <div class="grid grid-gap-lg">
               <div class="col-6@md text-center">
                  <!-- col -->
                  <div class="newsletter-card__inner margin-top-xl">
                     <div class="text-component text-left margin-bottom-md">
                        <h3 class="text-xxl ">免費課程<br><mark>英國升學</mark>全攻略<br>CRASH COURSE</h3>
                        <p>加入我們的Email List, 免費參加【英國升學全攻略CRASH COURSE】線上課程！</p>
                        <p>你將會學習到，xxxxxx
                        </p>
                        <p>讓你也可以xxxxx</p>
                     </div>
                     <form id="contactupdate2" class="flex flex-column flex-gap-xxs" data-request="onUpdateform" data-request-update="pbookingupdate633: '#contactupdate2'">
                        <input aria-label="Email" class="form-control" name="email" type="email" placeholder="輸入你的電郵地址...">
                        <!-- <input type="hidden" name="list" value="kc1FYCLgSQD5MxbkcSTsxA"> -->
                        <input type="hidden" name="list" value="4lxLpljX892J62NiBxn9g5Xg">
                        <!-- rp this  -->
                        <input type="hidden" name="listtr" value="hM7tnL892k3TIPC088cXBrkg">
                        <!-- rp this  -->
                        <input type="hidden" name="campaign" value="">
                        <input type="hidden" name="source" value="">                      <button type="submit" class="btn btn--primary" style="background:rgb(45, 189, 186)">免費參加課程</button>
                     </form>
                     <!--  <div class="margin-top-xs">
                        <small class="newsletter__small"><a href="#0">不用了，謝謝。</a></small>
                        </div> -->
                  </div>
                  <!-- col -->
               </div>
               <div class="col-6@md text-center">
                  <img class="margin-top-md" src="https://i0.wp.com/www.quartzmasters.com/wp-content/uploads/2017/01/dummy-pic.jpg">
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

          <!-- pop up -->

    </div>
</template>
<script>  
export default {  
  data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       showpop: false
   

    }
  },
  methods:{
    closepop(){
      this.showpop = false
    }
  },
  mounted(){
   
   /* setTimeout(function () {
      this.showpop = true; 
    }.bind(this),3000) */
    
  },
  async asyncData({ $axios, params }) {
    const articles = await $axios.$get(process.env.backendurl+'articles?slug='+params.slug)
    const relatedarticles = await $axios.$get(process.env.backendurl+'articles?_limit=7&_sort=date:DESC')
    let article = articles[0];
    let ranarticles = relatedarticles.sort(function() {
     return .5 - Math.random();
    }).slice(0,3); 
    return { article,ranarticles }
  },



}
</script> 
