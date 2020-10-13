<template>
    <div>
            <section class="padding-y-xxl bgmore" :style="'background-image: url('+frontendurl+'img/mainbg.jpg);'">
        <div class="container max-width-adaptive-sm">
          <div class="hero__content text-center">
            
            <div class="text-component margin-bottom-sm">
              <h1 class="color-white">最新講座</h1>
              
            </div>
        
          </div>
        </div>
      </section>

      <section id='jtalk' class="padding-bottom-xxl">
        <div class="container max-width-adaptive-lg">
          <div class="grid grid-gap-md">
            <div class="col-4@md" v-for="(article, idx) in filteredarticles" v-bind:key="idx">
                <div class="card-v3 text-center ">
                    <a :href="frontendurl+'events/'+article.slug" class="card-v3__link" aria-label="Description of the link">
                        <figure class="card-v3__img">
                            <img width='200' v-if='article.thumbnail' :src="backendurl2 + article.thumbnail.url">
                          </figure>
                    
                      <div class="card-v3__content">
                        <div class="card-v3__label2 text-md color-accent">{{ article.date }}</div>
                        <div class="card-v3__label">{{ article.time }}</div>
                        <h3 class='text-md'>{{ article.title }}</h3>
                      </div>

                      
                  
                      <div class="card-v3__footer">
                        
                        <span>了解更多</span>
                        <svg class="icon" viewBox="0 0 16 16"><g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="0.5" y1="8.5" x2="15.5" y2="8.5"></line><polyline points="10.5,3.5 15.5,8.5 10.5,13.5 "></polyline></g></svg>
                      </div>
                    </a>
                </div>  
            </div>
         

         <nav v-if='maxpage!=1 && maxpage!=0' class="pagination margin-top-xxl" aria-label="Pagination">
                        <ol class="pagination__list flex flex-wrap flex-gap-xxs justify-center">
                          <li>
                            <a v-if='currentPage!=1' v-bind:href="backlink" class="pagination__item" aria-label="Go to previous page">
                              <svg class="icon margin-right-xxxs" aria-hidden="true" viewBox="0 0 16 16"><title>Previous</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.5,3.5 5,8 9.5,12.5 "></polyline></g></svg>
                              <span>上一頁</span>
                            </a>
                          </li>
                  
                        <!--  <li v-if='maxpage - $route.query.page < 2' class="display@sm" aria-hidden="true">
                            <span class="pagination__item pagination__item--ellipsis">...</span>
                          </li> -->

                          <span class="display@sm" v-for='id in maxpage' v-bind:key="id">
                          
                          <li v-if='id - currentPage>= 1 && id - currentPage < 3' >
                            <a :href="gopage(id)" class="pagination__item">{{id}}</a>
                          </li>
                          <li v-if='id == currentPage' >
                            <a :href="gopage(id)" class="pagination__item pagination__item--selected">{{id}}</a>
                          </li>
                          </span>

                          <li v-if='maxpage - currentPage > 2' class="display@sm" aria-hidden="true">
                            <span class="pagination__item pagination__item--ellipsis">...</span>
                          </li>
                  
                         
                  
                          <li>
                            <a v-if='currentPage!=maxpage' v-bind:href="nextlink" class="pagination__item" aria-label="Go to next page">
                              <span>下一頁</span>
                              <svg class="icon margin-left-xxxs" aria-hidden="true" viewBox="0 0 16 16"><title>Next</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg>
                            </a>
                          </li>
                        </ol>
                      </nav>

          </div>

        </div>
      </section>

    </div>
</template>


<script>  
export default {  
  head() {
    return {
       title: '最新講座｜LINKEDU 領優教育'
    }
  },
  data(){
    return{
       backendurl2 : process.env.backendurl2,
        backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       noofpost: 9
    }
  },
  async asyncData({ $axios,query,params }) {
    let thepage = 0
    if (params.page)
      thepage = (params.page-1)*9
    const articles = await $axios.$get(process.env.backendurl+'talks?_limit=9&_sort=date:DESC&_start='+ thepage)
    const noarticles = await $axios.$get(process.env.backendurl+'talks/count')
   
    return { articles,noarticles }
  },
  methods:{
    gopage( para ){
      return '/events/page/' + para
    },
  },
  computed: {

    backlink(){
      let backpageno = parseInt(this.$route.params.page) - 1
      return '/events/page/' + backpageno
    },
    nextlink(){
      let nextpageno = 2
      if (this.$route.params.page)
        nextpageno = parseInt(this.$route.params.page) + 1
      return '/events/page/' + nextpageno
    },
    maxpage(){
   
      if ((this.noarticles)%this.noofpost==0)
        return parseInt((this.noarticles)/this.noofpost)
      else 
      return parseInt((this.noarticles)/this.noofpost+1)
    },
    currentPage(){
      if (this.$route.params.page)
        return this.$route.params.page
      else
        return 1
    },
    filteredarticles(){
      return this.articles
    }
  }
  
}
</script> 
