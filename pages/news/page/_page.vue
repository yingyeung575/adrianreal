<template>
    <div>
              <section class="padding-y-xxl bgmore" :style="'background-image: url('+frontendurl+'img/mainbg.jpg);'">
        <div class="container max-width-adaptive-sm">
          <div class="hero__content text-center">
            
            <div class="text-component margin-bottom-sm">
              <h1 class="color-white">最新消息 + 截止報名日期</h1>
              
            </div>
        
          </div>
        </div>
      </section>

      <section class="padding-bottom-xxl padding-top-lg">

        <div class="container max-width-adaptive-sm">
            <article class="story-v2" v-for="(article, idx) in filteredarticles" v-bind:key="idx">
                <div class="story-v2__meta">
                 <span role="separator"></span> <time>{{ article.date }}</time> 
                 /
                 <span v-for='(tag,idx) in article.tag' v-bind:key="idx" class="story__category margin-x-sm"><i class=" text-md">{{ tag.tag }}</i></span>
               
                </div>
            
                <div class="text-component">
                          <figure class="card-v3__img">
                            <img width='200' v-if='article.image' :src="backendurl2 + article.image.url">
                          </figure>
                <h2 class="story-v2__headline">{{ article.title }}</h2>
                
                <p class="story-v2__excerpt">{{ article.excerpt }}</p>
                </div>
            </article>
           

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

      </section>
    </div>
</template>

<script>  
export default {  
  head() {
    return {
       title: '最新消息 + 截止報名日期｜LINKEDU 領優教育'
    }
  },
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       noofpost: 10
    }
  },
  async asyncData({ $axios,query,params }) {
    let thepage = 0
    if (params.page)
      thepage = (params.page-1)*10
    const articles = await $axios.$get(process.env.backendurl+'deadlines?_limit=10&_start='+ thepage + '&_sort=date:DESC')
    const noarticles = await $axios.$get(process.env.backendurl+'deadlines/count')
    return { articles,noarticles }
  },
  methods:{
    gopage( para ){
      return '/news/page/' + para
    },
  },
  computed: {

    backlink(){
      let backpageno = parseInt(this.$route.params.page) - 1
      return '/news/page/' + backpageno
    },
    nextlink(){
      let nextpageno = 2
      if (this.$route.params.page)
        nextpageno = parseInt(this.$route.params.page) + 1
      return '/news/page/' + nextpageno
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
