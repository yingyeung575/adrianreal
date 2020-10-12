<template>
    <div>
              <footer class="main-footer padding-y-lg" data-theme='dark' style="background: hsl(223, 48%, 12%)">
          <div class="container max-width-lg">
            <div class="main-footer__content">
              <div class="main-footer__logo">
                  <a href="/">
                      <img src='/img/logo2.jpg'>
                  </a>
              </div>
              
              <nav class="main-footer__nav">
                <ul class="main-footer__nav-list">
                  <li class="main-footer__nav-item">
                    
                    <div v-for='(area,idx) in menu.footer1' :key='idx'><a :href="area.linkslug">{{ area.label }}</a></div>
                

                  </li>
        
                  <li class="main-footer__nav-item">
                    <h5>英國升學攻略</h5>
                    <div v-for='(area,idx) in menu.footer2' :key='idx'><a :href="area.linkslug">{{ area.label }}</a></div>
                  </li>

        
                  <li class="main-footer__nav-item" style="width:300px">
                       <span v-if="menu.footerother" v-html="menu.footerother"> </span>
                  </li>
        
                  <li class="main-footer__nav-item" style="width:300px">
                    <span v-if="menu.footerother2" v-html="menu.footerother2"> </span>
                 

                  </li>
                </ul>
              </nav>
            </div>
          
            <div class="main-footer__colophon">
              <div class="main-footer__colophon-nav">
                <span>&copy; 2019 Linkedu Limited. All rights reserved.</span>
               
              </div>
        
              <div class="main-footer__socials">
                 
        
              </div>
            </div>
          </div>
        </footer>
    </div>
</template>


<script>
import Vuex from 'vuex'

export default {
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       menu: this.$store.state.menu
    }
  }
}


</script>