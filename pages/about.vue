<template>
    <div>


<!-- popup -->

      <div v-if='showpop' class="modal  js-modal modal--is-visible" id="modal4" data-animation="on">
        <div class="modal__content" role="alertdialog" tabindex="-1" aria-labelledby="modalTitle1" aria-describedby="modalDescription1">
          <header class="modal__header" style='background-color:none'>
            <h4 class="text-truncate" id="modalTitle1">{{ poptitle }}</h4>
      
            <button class="reset modal__close-btn js-modal__close jclose2" @click='closepop'>
              <svg class="icon" viewBox="0 0 20 20"><title>Close modal window</title><polygon points="18.707 2.707 17.293 1.293 10 8.586 2.707 1.293 1.293 2.707 8.586 10 1.293 17.293 2.707 18.707 10 11.414 17.293 18.707 18.707 17.293 11.414 10 18.707 2.707"/></svg>
            </button>
          </header>
      
           <div class="padding-y-sm padding-x-md flex-grow overflow-auto">
                <div class="text-component v-space-md line-height-lg"  v-html="$md.render(popdescription)">

                </div>
            </div>
      
      </div>
      </div>

<!-- popup -->

      <section class="padding-y-xxl bgmore" :style="'background-image: url('+frontendurl+'img/mainbg.jpg);'">
        <div class="container max-width-adaptive-sm">
          <div class="hero__content text-center">
            
            <div class="text-component margin-bottom-sm">
              <h1 class="color-white">關於LINKEDU</h1>
              
            </div>
        
          </div>
        </div>
      </section>

     <!-- <section class="feature-v5 padding-top-xl padding-bottom-lg">
        <div class="feature-v5__content">
          <div class="container max-width-adaptive-sm">
            <div class="grid">
              <div class="margin-bottom-md text-center">
                <h3 class="text-xl margin-bottom-sm">LinkedU擁有強大的學校網絡及人才</h3>
              </div>
        
              <div class="text-component col-12@md">
                <p>我們的顧問有的從初中就前往英國入讀傳統寄宿學校，經歷過GCSE及A-Level課程後升讀大學；有的經歷過香港公開考試後才負笈海外求學。	正因我們經歷過，所以了解學生的需求。除了海外升學的知識，我們親身的生活和學習經驗也有助學生接壤和適應一個新環境的轉變，從而達至一個更好的學習成果。</p>
                <p>而LinkedU亦針對香港學生建立了一個全新的一站式英國留學搜尋平台，提供各項切合學生及家長需求的留學資訊、留學服務及周邊各項安排，包括簽證、租房、保險、機票代訂等，通過整合本地及海外優質的資源，為每個家庭完成整個留學鏈條中必要的每一步</p>
              </div>


             

            </div>
          </div>
        </div>
      

      </section> -->

      

       <section class="team padding-y-xl">
      <div class="container max-width-adaptive-lg">
        <div class="margin-bottom-lg">
          <h3 class="text-center margin-bottom-lg">LINKEDU團隊</h3>
        </div>

        <div class="height302">
     
          <div v-for='(team,idx) in about.ourteam' :key='idx' class=" jhover card-v2 wwspecial" @click='openpop(team.name,team.description)'>
            <figure>
            
              <img v-if='team.image' :src="backendurl2 + team.image.url">
              <figcaption class="card-v2__caption text-center">
                <div class="card-v2__title">{{ team.name }}</div>
                <div class="card-v2__label">{{ team.title }}</div>
              </figcaption>
            </figure>
          </div>

          
        </div>
      </div>
    </section>

        

    

    <section class=" padding-bottom-xl ">
        <div>
          <div class="container max-width-lg">
           <!-- <div class="text-component text-center">
              <p>Trusted by some of the World's leading companies.</p>
            </div> -->
        
            <div class="">
              <ul class="customer-logos flex flex-wrap gap-lg flex-center">
                <li v-for='(logo,idx) in home.logos' :key='idx'>
                  <img :src="backendurl2 + logo.url" width='150'>
                </li>
          
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section class='padding-y-xl'>
       
          <div class="container max-width-adaptive-lg">
                    <h3 class="margin-bottom-lg text-center">LINKEDU服務</h3>
                    <div class="grid grid-gap-sm">
                      <a href="#0" class="card-v9 col-4@md" aria-labelledby="cardTitle1" :style="'background-image: url('+ backendurl2 + home.about1img.url + ');'" >
                        <div class="card-v9__content">
                          <div class="card-v9__text">
                         <!--   <p class="card-v9__label">Travels</p> -->
                            <h3 class="card-v9__title color-white">{{ home.about1 }}</h3>
                          </div>
                    
                        
                        </div>
                      </a>
                      
                      <a href="#0" class="card-v9 col-8@md" aria-labelledby="cardTitle2" :style="'background-image: url('+ backendurl2 + home.about2img.url + ');'">
                        <div class="card-v9__content">
                          <div class="card-v9__text">
                       
                            <h3 class="card-v9__title">{{ home.about2 }}</h3>
                          </div>
                    
                          
                        </div>
                      </a>
                
                      <a href="#0" class="card-v9 col-12@md" aria-labelledby="cardTitle3" :style="'background-image: url('+ backendurl2 + home.about3img.url + ');'">
                        <div class="card-v9__content">
                          <div class="card-v9__text">
                           
                            <h3 class="card-v9__title">{{ home.about3 }}</h3>
                          </div>
                    
                          
                        </div>
                      </a>
                
                      <a href="#0" class="card-v9 col-8@md" aria-labelledby="cardTitle4" :style="'background-image: url('+ backendurl2 + home.about4img.url + ');'">
                        <div class="card-v9__content">
                          <div class="card-v9__text">
                         <!--   <p class="card-v9__label">Travels</p> -->
                            <h3 class="card-v9__title color-white">{{ home.about4 }}</h3>
                          </div>
                    
                        
                        </div>
                      </a>
                      
                      <a href="#0" class="card-v9 col-4@md" aria-labelledby="cardTitle5" :style="'background-image: url('+ backendurl2 + home.about6img.url + ');'">
                        <div class="card-v9__content">
                          <div class="card-v9__text">
                       
                            <h3 class="card-v9__title">{{ home.about5 }}</h3>
                          </div>
                    
                          
                        </div>
                      </a>
                    </div>
                  </div>
                


      </section>

      

        <section class="margin-bottom-xxxl">

            <div class="container max-width-adaptive-sm">
                <h3 class="text-center">LINKEDU 服務流程</h3>
               
            </div>
            
            <div class="container max-width-adaptive-sm padding-top-md" style="position: relative;">
              <div class="specialbg"></div>
              <div class="grid grid-gap-xl padding-top-xl">
                <div class="col-6@md">
                  <div>
                      <figure>
    
                          <img v-if='about.service1' :src="backendurl2 + about.service1.url">
                      </figure>       
                  </div>
                </div>
                <div class="col-6@md">
                    <div>
                        <h4 class="color-primary"><span class="jnum">1</span>{{about.help1title}}</h4>     
                        <p class="margin-top-md">{{about.help1des}}</p>  
                        <hr class="ndh">
                        <h4 class="color-primary"><span class="jnum">2</span>{{about.help2title}}</h4>     
                        <p class="margin-top-md">{{about.help2des}}</p>  
                    </div>
                </div> 
                <div class="col-6@md">
                    <div>
                        <h4 class="color-primary"><span class="jnum">3</span>{{about.help3title}}</h4>     
                        <p class="margin-top-md">{{about.help3des}}</p>  
                        <hr class="ndh">
                        <h4 class="color-primary"><span class="jnum">4</span>{{about.help4title}}</h4>     
                        <p class="margin-top-md">{{about.help4des}}</p>  
                    </div>
                </div>   
                <div class="col-6@md">
                    <div>
                        <figure>
                             <img v-if='about.service2' :src="backendurl2 + about.service2.url">
                        </figure>       
                    </div>
                  </div> 
                  <div class="col-6@md finalmargin">
                      <div>
                          <figure>
                               <img v-if='about.service3' :src="backendurl2 + about.service3.url">
                          </figure>       
                      </div>
                    </div>
                    <div class="col-6@md finalmargin">
                        <div>
                            <h4 class="color-primary"><span class="jnum">5</span>{{about.help5title}}</h4>     
                            <p class="margin-top-md">{{about.help5des}}</p>  
                            <hr class="ndh">
                            <h4 class="color-primary"><span class="jnum">6</span>{{about.help6title}}</h4>     
                            <p class="margin-top-md">{{about.help6des}}</p> 
                            <hr class="ndh">
                            <h4 class="color-primary"><span class="jnum">7</span>{{about.help7title}}</h4>     
                            <p class="margin-top-md">{{about.help7des}}</p>   
                        </div>
                    </div>        
                
  
              </div>
            </div>
          </section>
        
          <testimonials :testobject="tests"/>

      <section id='jcase' class='padding-y-xl'>
          <div class="articles">
              <div class="container max-width-adaptive-lg">
                <div class="text-center">
                  <h3 class="margin-bottom-lg">過往學生分享</h3>
                </div>
                <div class="grid grid-gap-sm">
                  
                  <article class="story col-3@md" v-for="(cas, idx) in about.case" v-bind:key="idx">
                
                    <a :href="frontendurl+'case-analysis/'+cas.linkslug" class="nodecor">
                      <figure class="">
                        <img v-if='cas.image' :src="backendurl2 + cas.image.url">
                      </figure>
                   
            
                    <div class="story__content">
                      
              
                      <div class="text-component">
                        <h4 class="story__title padding-bottom-xs">{{ cas.title }}</h4>
                        <p>{{ cas.excerpt }}</p>
                        
                      </div>
              
                      
                    </div>
                     </a>
                  </article>
                 
                                  
                  <p class='text-center'> <a :href='frontendurl + "case-analysis"' class="margin-top-lg btn btn--primary">查看更多</a></p>

                </div>

              </div>
            </div>
      </section>

         <section id='jeat' class='padding-y-xl'>
                <div class="articles">
                  <div class="container max-width-adaptive-lg">
                    <div class="text-center">
                      <h3 class="margin-bottom-lg">升學攻略</h3>
                    </div>
                    <div class="grid grid-gap-sm">
                      
                     <article class="story col-3@md" v-for='(article,idx) in home.homearticle' :key='idx'>
                    
                        <a :href="frontendurl+'article/'+article.slug" class="story__img">
                          <figure>
                            <img v-if='article.thumbnail' :src="backendurl2 + article.thumbnail.url">
                          </figure>
                        </a>
                
                        <div class="story__content">
                          
                  
                          <div class="text-component">
                            <h4 class="story__title padding-bottom-xs">{{ article.title}}</h4>
        
                            <!-- <span class="text-sm knowmore">了解更多</span> -->
                          </div>
                  
                          
                        </div>
                      </article>
                                      
                      <p class='text-center'> <a :href="frontendurl+'article'" class="margin-top-lg btn btn--primary">查看更多</a></p>

                    </div>

                  </div>
                </div>
              </section>
     

      <section class="padding-y-xl" data-theme="dark">
          <div class="container max-width-sm">

            <h2 class="margin-bottom-lg text-center">常見問題</h2>
    
        
            <ul class="accordion  js-accordion" data-animation="on" data-multi-items="off">
              <li class="accordion__item js-accordion__item" v-for='(faq, idx) in faqs' :key='idx'>
                <button class="accordion__header js-tab-focus" type="button">
                  <span class="accordion__header-title">{{ faq.question }}</span>
                  <em aria-hidden="true" class="accordion__header-icon"><i></i></em>
                </button>
        
                <div class="accordion__panel js-accordion__panel">
                  <div class="accordion__panel-content">
                    <div class="text-component margin-bottom-md">
                      <p>{{ faq.answer }}</p>
                    </div>
                  </div>
                </div>
              </li>
        
             
            </ul>
          </div>
        </section>

               <section id='cta' class="radius-md padding-y-xxl" style="background-image: url('img/mainbg.jpg');background-size:cover;background-position: center">
                  <div class="container max-width-adaptive-sm">
                    <div class="grid">
                      <div class="col-12@md">
                        <div class="text-component text-center">
                          <h2 class="color-white">{{ home.contacttitle }}</h2>
                          <p class="color-white">{{ home.contactdescription }}</p>
                          <a href="#0" class="margin-top-md btn btn--primary color-white">立即預約</a>
                        </div>
                      </div>
                    
                     
                    </div>
                  </div>
                </section>



    </div>
</template>


<script>

import testimonials from '~/components/testimonials'
import cta from '~/components/cta'
export default {
  head() {
    return {
       title: '關於我們｜LINKEDU 領優教育'
    }
  },
  components:{

    testimonials,
    cta
  },
  data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       showpop: false,
       poptitle: '',
       popdescription:''
    }
  },
  async asyncData({ $axios,query }) {


    const [articles,cases,tests,faqs,about , home] = await Promise.all([
  
        $axios.$get(process.env.backendurl+'articles?_limit=4&_sort=date:DESC'),
        $axios.$get(process.env.backendurl+'cases?_limit=4&_sort=date:DESC'),
        $axios.$get(process.env.backendurl+'testimonials'),
        $axios.$get(process.env.backendurl+'faqs'),
        $axios.$get(process.env.backendurl+'aboutuspage'),
        $axios.$get(process.env.backendurl+'home')

    ])
  
    return { articles,cases,tests,faqs,about, home }
  },
  methods:{
      closepop(){
          this.showpop = false
      },
      openpop(poptitle,popdescription ){
          this.showpop = true
          this.poptitle = poptitle
          this.popdescription = popdescription
      }
  }
}

</script>
