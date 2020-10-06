<template>
    <div>
           <section class="padding-y-xl">
            <div class="articles">
                    <div class="container max-width-adaptive-lg">
                      <div class="text-center margin-bottom-xl">
                            <h1>升學攻略</h1> 
                            <div class="margin-top-lg">
                                   <a :href="'/category/'+ category.slug" v-for="(category,idx) in categories" :key='idx' class="story__category margin-x-sm">
                                          <i>{{ category.name }}</i>
                                   </a>
                                  
                            </div>
                      </div>
                       
                      <div class="grid grid-gap-lg">
                        <article class="story story--featured" v-if='idx==0' v-for="(article, idx) in filteredarticles" v-bind:key="idx">
                          <a :href="frontendurl+'article/'+article.slug" class="story__img">
                            <figure class="media-wrapper media-wrapper--5:3">
                              <img v-if='article.thumbnail' :src="backendurl + article.thumbnail.url">
                            </figure>
                          </a>
                  
                          <div class="story__content">
                            <div class="margin-bottom-xs">
                              <a v-for='(category,idx) in article.categories' v-bind:key='idx' :href="frontendurl + 'category/' + category.slug" class="story__category">
                                <i>{{ category.name }}</i>
                              </a>
                            </div>
                    
                            <div class="text-component">
                              <h2 class="story__title"><a :href="frontendurl+'article/'+article.slug">{{ article.title }}</a></h2>
                              <p>{{ article.excerpt }}</p>
                            </div>
                    
                            <div class="story__author margin-top-sm">
                              <span class="block">
                                <img v-if='article.author' :src="backendurl + article.author.profile.url">
                              </span>
                  
                              <div>
                                <address v-if='article.author' class="story__author-name"><span rel="author">{{ article.author.name }}</span></address>
                                <p class="story__meta"><time>{{ article.date }}</time></p>
                              </div>
                            </div>
                          </div>
                        </article>
                        
                        <article class="story col-4@md" v-if='idx!=0' v-for="(article, idx) in filteredarticles" v-bind:key="idx" >
                          <a :href="frontendurl+'article/'+article.slug" class="story__img">
                            <figure class="media-wrapper media-wrapper--5:3">
                              <img v-if='article.thumbnail' :src="backendurl + article.thumbnail.url">
                            </figure>
                          </a>
                  
                          <div class="story__content">
                            <div class="margin-bottom-xs">
                              <a v-for='(category,idx) in article.categories' v-bind:key='idx' :href="frontendurl + 'category/' + category.slug" class="story__category">
                                <i>{{ category.name }}</i>
                              </a>
                            </div>
                    
                            <div class="text-component">
                              <h2 class="story__title"><a :href="frontendurl+'article/'+article.slug">{{ article.title }}</a></h2>
                            
                            </div>
                    
                            <div class="story__author margin-top-sm">
                              <span class="block">
                                <img v-if='article.author' :src="backendurl + article.author.profile.url">
                              </span>
                  
                              <div>
                                <address v-if='article.author' class="story__author-name"><span rel="author">{{ article.author.name }}</span></address>
                                <p class="story__meta"><time>{{ article.date }}</time></p>
                              </div>
                            </div>
                          </div>
                        </article>
                  
 
                  
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
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       noofpost: 10
    }
  },
  async asyncData({ $axios,query }) {
    let thepage = 0
    if (query.page)
      thepage = (query.page-1)*10
    const articles = await $axios.$get(process.env.backendurl+'articles?_limit=10&_start='+ thepage + '&_sort=date:DESC')
    const categories = await $axios.$get(process.env.backendurl+'categories')
    const noarticles = await $axios.$get(process.env.backendurl+'articles/count')
    return { articles,noarticles,categories }
  },
  methods:{
    gopage( para ){
      return '/article?page=' + para
    },
  },
  computed: {

    backlink(){
      let backpageno = parseInt(this.$route.query.page) - 1
      return '/article?page=' + backpageno
    },
    nextlink(){
      let nextpageno = 2
      if (this.$route.query.page)
        nextpageno = parseInt(this.$route.query.page) + 1
      return '/article?page=' + nextpageno
    },
    maxpage(){
   
      if ((this.noarticles)%this.noofpost==0)
        return parseInt((this.noarticles)/this.noofpost)
      else 
      return parseInt((this.noarticles)/this.noofpost+1)
    },
    currentPage(){
      if (this.$route.query.page)
        return this.$route.query.page
      else
        return 1
    },
    filteredarticles(){
      return this.articles
    }
  }
  
}
</script> 
