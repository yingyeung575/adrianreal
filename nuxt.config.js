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
    routes() {
    /*  return axios.get('https://whostsite.com/talks').then(res => {
        return res.data.map(post => {
          return '/events/' + post.slug
        })
      }) */
      const routesforEvents = axios.get('https://whostsite.com/talks').then(res => {
        return res.data.map(post => {
          return '/events/' + post.slug
        })
      }) 

      const routes = routesforEvents
      return routes

    }
  }
}
