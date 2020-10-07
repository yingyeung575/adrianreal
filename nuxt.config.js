import axios from 'axios'
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Gentium+Basic|Noto+Sans+TC&display=swap' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/custom.css' },
    ],
    script: [
      { src: '/js/scripts.js' , defer: true, body: true }  
    ]
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
  markdownit: {  
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    backendurl: 'https://whostsite.com/',
    frontendurl: 'https://vigilant-perlman-c214ff.netlify.app/'
  },
 /* router: {
      base: '/adrian/adrian-nuxt/'
  } */
  generate: {
    async routes() {
 
      
      // events
      const resforEvents = await axios.get('https://whostsite.com/talks')
      
      const routesforEvents = resforEvents.data.map(post => {
          return {
            route: '/events/' + post.slug,
            payload: post
          }
      })

      const noofpost = 9
      const noofpage =  routesforEvents.length / noofpost
      
      let routesforEventsIndex = []
      for (var i = 1; i < noofpage + 1; i++) {
         routesforEventsIndex.push('/events/page/'+ i)
      } 

      // case
      const resforCases = await axios.get('https://whostsite.com/cases')
      
      const routesforCases = resforCases.data.map(post => {
          return {
            route: '/case-analysis/' + post.slug,
            payload: post
          }
      })

      const noofpagecase =  routesforCases.length / 10
      
      let routesforCasesIndex = []
      for (var i = 1; i < noofpagecase  + 1; i++) {
         routesforCasesIndex.push('/case-analysis/page/'+ i)
      } 

      // news
      const resforNews = await axios.get('https://whostsite.com/deadlines')
      
      const routesforNews = resforNews.data.map(post => {
          return {
            route: '/news/' + post.slug,
            payload: post
          }
      })

      const noofpagenews =  routesforNews.length / 10
      
      let routesforNewsIndex = []
      for (var i = 1; i < noofpagenews  + 1; i++) {
        routesforNewsIndex.push('/news/page/'+ i)
      } 

      // subjects
      const resforSubjects = await axios.get('https://whostsite.com/subjecttutorings')
      
      const routesforSubjects = resforSubjects.data.map(post => {
          return {
            route: '/subject/' + post.slug,
            payload: post
          }
      })

      // areas
      const resforAreas = await axios.get('https://whostsite.com/areas')
      
      const routesforAreas = resforAreas.data.map(post => {
          return {
            route: '/clearing/' + post.slug,
            payload: post
          }
      })

      // articles
      const resforArticles = await axios.get('https://whostsite.com/articles')
      
      const routesforArticles = resforArticles.data.map(post => {
          return {
            route: '/article/' + post.slug,
            payload: post
          }
      })

      const noofpageArticles =  routesforArticles.length / 10
      
      let routesforArticlesIndex = []
      for (var i = 1; i < noofpageArticles  + 1; i++) {
        routesforArticlesIndex.push('/article/page/'+ i)
      } 
      
    
      // articles category

      const resforCategory = await axios.get('https://whostsite.com/categories')
      
      const routesforCategory = resforCategory.data.map(post => {
          return {
            route: '/category/' + post.slug,
            payload: post
          }
      })


  /*    let routesforCategoryIndex = []
      routesforCategory.forEach(
        element => {
          for (var i = 1; i < 10 ; i++) {
            routesforCategoryIndex.push(element.route+'/'+ i)
          } 
        }
      ) */
      
     

      const routes = routesforEvents.concat(routesforEventsIndex).concat(routesforCases).concat(routesforCasesIndex).concat(routesforNews).concat(routesforNewsIndex)
      .concat(routesforSubjects).concat(routesforAreas)
      .concat(routesforArticles).concat(routesforArticlesIndex)
      .concat(routesforCategory)
     // .concat(routesforCategoryIndex)
    
  
    //  const routes = routesforCategoryIndex
      return routes

    }
  }
}
