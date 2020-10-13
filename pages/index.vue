<template>

<div>

        <section class="hero padding-y-xxl" style="background-image: url('img/mainbg.jpg')">
          <div class="container max-width-adaptive-sm">
            <div class="hero__content text-center">

              <div class="text-component margin-bottom-sm ">
                <h1 class='color-white text-xxxl toani' style="margin-bottom:0px"><span>{{ home.slogan1 }}</span></h1>
                <p class='color-white text-md margin-top-xs'>{{ home.tagline }}</p>
              </div>

              <form class=" margin-bottom-sm margin-top-lg">
                  <div class="flex flex-column flex-row@md flex-gap-xxxs ">
                     <!-- <div class="select width-20%">
                          <select class="select__input form-control" name="selectThis" id="selectThis">

                              <option value="0">寄宿學校</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                       
                        
                          </select>
                          
                          <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
                        </div> -->
                    <!-- <input aria-label="Text" class="width-80% form-control" type="text" placeholder="學校名稱（Eg. 劍橋大學）"> -->
                    
                    <a href='/school-type' class="btn--md margin-center btn btn--primary width-20%">立即搜尋</a>
                  </div>
              </form>
          
            </div>
          </div>
        </section>

        <section id='jtalk'>
          <div class="container max-width-adaptive-md">
            <div class="grid grid-gap-md">
              <div class="col-4@md" v-for='(event,idx) in events' :key='idx'>
                  <div class="card-v3 text-center ">
                     
                      <a :href="frontendurl+'events/'+event.slug" class="card-v3__link" aria-label="Description of the link">
                        <div class='talktop bg-primary padding-sm'>
                          <h5 class="color-white">講座</h5> 
                        </div>

                          <figure class="card-v3__img">
                            <img width='200' v-if='event.thumbnail' :src="backendurl2 + event.thumbnail.url">
                          </figure>
                      
                        <div class="card-v3__content">
                          <div class="card-v3__label2 text-md color-accent">{{ event.date }}</div>
                          <div class="card-v3__label">{{ event.time }}</div>
                          <h3 class='text-md'>{{ event.title }}</h3>
                        </div>
                    
                        <div class="card-v3__footer">
                          <span>了解更多</span>
                          <svg class="icon" viewBox="0 0 16 16"><g fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="0.5" y1="8.5" x2="15.5" y2="8.5"></line><polyline points="10.5,3.5 15.5,8.5 10.5,13.5 "></polyline></g></svg>
                        </div>
                      </a>
                  </div>  
              </div>
          
              <div class="col-12@md" style="margin-bottom:0px">
                  <a :href="frontendurl+'events'">> 查看更多講座</a>
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

          <section class="">
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

        <section id='openingarticles' class="padding-y-xxl">

            <div class="container max-width-adaptive-lg">

                <div class="text-center">
                    <h3 class="margin-bottom-lg">LINKEDU YouTube Channel </h3>
                </div>
                <div class="grid grid-gap-md">
                  <div class="col-6@md" >
                <!--    <div class="responsive-iframe responsive-iframe2">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/Sj34xPFU184" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> -->
                    <figure>
                                <a :href="frontendurl+'article/'+home.videoslug">
                                <img v-if='home.videocover' :src="backendurl2 + home.videocover.url">
                                </a>
                    </figure>
                  </div>
                  
                  <div class="col-6@md nomobile">
                    <article style='margin-bottom: 0em;' class="story grid grid-gap-md" v-for='(article,idx) in home.homevideo' :key='idx'>
                   
                            <div class="story__img noborderadius col-4@md">
                            <figure class="media-wrapper media-wrapper--4:3">
                                <a :href="frontendurl+'article/'+article.slug">
                                <img v-if='article.thumbnail' :src="backendurl2 + article.thumbnail.url">
                                </a>
                            </figure>
                            </div>
                    
                            <div class="story__content col-8@md">
                            
                    
                            <div class="text-component">
                                <a :href="frontendurl+'article/'+article.slug" class="nodecor">
                                    <h4 class="story__title">{{ article.title }}</h4>
                                    <p class="text-sm">{{ article.description }}</p>
                                    <span class="text-sm knowmore">了解更多</span>
                                </a>
                            </div>
                    
                            
                            </div>
                   
                  
                    </article>


                  </div>

                </div>
              </div>
            

        </section>

        <featureSchools :schoolobject="home"/>



        <section id='focusarea' class="padding-y-xl">

            <div class='container max-width-adaptive-lg'>
                <div class="grid grid-gap-md">
                    <div class="col-4@md" v-for='(area,idx) in home.area' :style="'background-image:url('+ backendurl2 + area.background.url+');background-size: cover;'">
                        <a :href='frontendurl + "clearing/" + area.linkslug'>
                           <h3 class="text-center padding-y-xl color-white">{{ area.title }}</h3>
                        </a>
                    </div>
                   

                </div>
            </div>
        </section>

          <section id='jschools2' class="bg-contrast-lower padding-y-xl">

              <div class='container max-width-adaptive-lg'>
                  <h3 class="margin-bottom-sm">英國遊學團介紹</h3>
                  <div class="carousel js-carousel" data-drag="on">
                      <p class="sr-only">Carousel items</p>
                    
                      <div class="carousel__wrapper">
                        <ol class="carousel__list">
                          <li class="carousel__item" v-for='(school,idx) in home.favsummer' :key='idx'>
                            <div class="carousel__demo-content">
                              <a class='nodec' :href='frontendurl + school.linkslug'>
                                <div class="school__content">
                                    <img v-if='school.image' :src="backendurl2 + school.image.url">
                                    <h5 class="color-primary">{{ school.name }}</h5>
                                    <div class="school__characteristic">
                                    
                                      <span v-if='school.tagline1' class="text-xs color-black">{{ school.tagline1 }}</span>
                                    </div>
                                    <div class="school__characteristic">
                                    
                                      <span v-if='school.tagline2' class="text-xs color-black">{{ school.tagline2 }}</span>
                                    </div>                                  
                                </div>
                              </a>
    
                            </div>
                          </li>
                         
                          
                        </ol>
                      </div>
                    
                      <nav class="carousel__controls padding-top-sm">
                        <ul>
                          <li>
                            <button class="reset carousel__control carousel__control--prev js-carousel__control js-tab-focus">
                              <svg class="icon" viewBox="0 0 16 16"><title>Show previous items</title><g><polygon points="11,3 5,8 11,13 "></polygon></g></svg>
                            </button>
                          </li>
                    
                          <li>
                            <button class="reset carousel__control carousel__control--next js-carousel__control js-tab-focus">
                              <svg class="icon" viewBox="0 0 16 16"><title>Show next items</title><g><polygon points="5,13 11,8 5,3 "></polygon></g></svg>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                   

              </div>
    
            </section>


            <section id='jcase' class='padding-y-xl'>
                <div class="articles">
                    <div class="container max-width-adaptive-lg">
                      <div class="text-center">
                        <h3 class="margin-bottom-lg">留學生分享</h3>
                      </div>
                      <div class="grid grid-gap-sm">
                        
                        <article class="story col-3@md" v-for='(sharing,idx) in home.homecase' :key='idx'>
                         
                          <a :href="frontendurl+'article/'+sharing.slug" class="story__img">
                            <figure>
                              <img v-if='sharing.thumbnail' :src="backendurl2 + sharing.thumbnail.url">
                            </figure>
                          </a>
                  
                          <div class="story__content">
                            
                    
                            <div class="text-component">
                              <h4 class="story__title padding-bottom-xs">{{ sharing.title }}</h4>
                             <!-- <p class="text-sm">{{ sharing.excerpt }}</p> -->
                              <span class="text-sm knowmore">了解更多</span>
                            </div>
                    
                            
                          </div>
                        </article>
                           
                        <p class='text-center'> <a :href='frontendurl + "category/sharings"' class="margin-top-lg btn btn--primary">查看更多</a></p>

                      </div>
  
                    </div>
                  </div>
            </section>

            <section id='jschools3' class="bg-contrast-lower padding-y-xl">

                <div class='container max-width-adaptive-lg'>
                    <h3 class="margin-bottom-sm">熱門寄宿學校</h3>
                    <div class="carousel js-carousel" data-drag="on">
                        <p class="sr-only">Carousel items</p>
                      
                        <div class="carousel__wrapper">
                          <ol class="carousel__list">
                            <li class="carousel__item" v-for='(school,idx) in home.favboarding' :key='idx'>
                              <div class="carousel__demo-content">
                                <a class='nodec' :href='frontendurl + school.linkslug'>
                                  <div class="school__content">
                                      <img v-if='school.image' :src="backendurl2 + school.image.url">
                                      <h5 class="color-primary">{{ school.name }}</h5>
                                      <div class="school__characteristic" v-if='school.tagline1'>
                                      
                                        <span class="text-xs color-black">{{ school.tagline1 }}</span>
                                      </div>
                                      <div class="school__characteristic" v-if='school.tagline2'>
                                      
                                        <span class="text-xs color-black">{{ school.tagline2 }}</span>
                                      </div>                                     
                                  </div>
                                </a>
      
                              </div>
                            </li>
                            
                          </ol>
                        </div>
                      
                        <nav class="carousel__controls padding-top-sm">
                          <ul>
                            <li>
                              <button class="reset carousel__control carousel__control--prev js-carousel__control js-tab-focus">
                                <svg class="icon" viewBox="0 0 16 16"><title>Show previous items</title><g><polygon points="11,3 5,8 11,13 "></polygon></g></svg>
                              </button>
                            </li>
                      
                            <li>
                              <button class="reset carousel__control carousel__control--next js-carousel__control js-tab-focus">
                                <svg class="icon" viewBox="0 0 16 16"><title>Show next items</title><g><polygon points="5,13 11,8 5,3 "></polygon></g></svg>
                              </button>
                            </li>
                          </ul>
                        </nav>
                      </div>

                  <!--    <div class="col-12@md" style="margin-bottom:0px">
                        <a href="">> 搜尋所有寄宿學校</a>
                      </div> -->


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

           

               

                              <section class="home-popular-subjects padding-y-xl">
                  <div class="background-image" style="background-image: url('img/mainbg.jpg')"></div>
                  <div class="container max-width-adaptive-lg">
                      <h3 class="margin-bottom-lg color-white text-center">熱門科目</h3>
                    <div class="grid justify-center"> 
                        
                                                       <div class="col-2" v-for='(subject,idx) in subjects' v-bind:key='idx'>
                                                          <a :href="frontendurl + 'subject/' + subject.slug" class='anone'>
                                                          <div class="popular-subjects">
                                  
                                                            <div class="jsubject">
                                                                <div class="grid">
                                                                  <div class="col-4 text-left">
                                                                    <div class="jsubject-icon">
                                                                     
                                                                      <span v-html="subject.icon"></span>
                                                                  
                                                                       <svg class='jajaja' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                          <path
                                                                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
                                                                          />
                                                                        </svg>
                                                                    </div>
                                                                  </div>
                                                                  <div class="col-1"></div>
                                                                  <div class="col-6">
                                                                   <h4 class="color-white text-base">{{subject.name}}</h4>
                                                                  </div>
                                                                </div>
                                                            </div>
                                                           
                                                          </div>
                                                          </a>
                                                        </div> <!-- end col2 -->  
                                                       
                      <p class='text-center'> <a :href="frontendurl + 'subject/'" class="margin-top-xl btn jbtn">查看更多</a></p>
                    
                    </div>
                  </div>
                </section>

             <!-- <why /> -->
                <testimonials :testobject="tests"/> 
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
                  <img v-if='home.popupimage' class="margin-top-md"  :src="backendurl2 + home.popupimage.url">
               </div>
               <div class="col-6@md text-center">
                  <!-- col -->
                  <div class="newsletter-card__inner">
                     <div class="text-component text-left margin-bottom-md">
                        <h3 class="text-xxl ">{{ home.popuptitle }}</h3>
                         <div v-if="home.popupcontent" v-html="$md.render(home.popupcontent)"> </div> 
        <a v-if='home.popuplink' target='_blank' :href="home.popuplink" class="f-header__btn btn btn--accent">立即報名</a>
                     </div>
   
                  </div>
                  <!-- col -->
               </div>
               
            </div>
         </div>
      </div>
   </div>
</div>

          <!-- pop up -->




</div>
</template>

<style scoped>
  #modal4{
    width: 80%;
    height: 626px;
    margin: 0 auto;
    position: absolute;
    width: 1000px;
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 0;
    margin: 0;
    opacity: 1;
    border: 8px solid #1A1A1A;
    background-color: #fff;
    height: 626px;
    overflow: hidden;
  }
</style>

<script>
import featureSchools from '~/components/featureSchools'
import testimonials from '~/components/testimonials'
import cta from '~/components/cta'
export default {
  head() {
    return {
       title: '英國升學 - LINKEDU 領優教育'
    }
  },
  components:{
    featureSchools,
    testimonials,
    cta
  },
  data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       showpop: true
    }
  },
  methods:{
    closepop(){
      this.showpop = false
    }
  },
  mounted(){
   
    setTimeout(function () {
      this.showpop = true; 
    }.bind(this),3000) 
    
  },
  async asyncData({ $axios,query }) {


    const [events,sharings,articles, subjects,tests, home, teach] = await Promise.all([
        $axios.$get(process.env.backendurl+'talks?_limit=3&_sort=date:DESC'),
        $axios.$get(process.env.backendurl+'articles?categories.slug=sharings&_limit=4&_sort=date:DESC'),
        $axios.$get(process.env.backendurl+'articles?categories.slug=procedure&_limit=4&_sort=date:DESC'),
        $axios.$get(process.env.backendurl+'subjecttutorings'),
        $axios.$get(process.env.backendurl+'testimonials'),
        $axios.$get(process.env.backendurl+'home'),
        $axios.$get(process.env.backendurl+'articles?categories.slug=video&_limit=3&_sort=date:DESC')

    ])

    const teach1 = teach[0]
  
    return { events, sharings, articles, subjects,tests,home,teach }
  }
}


</script>

<style scoped>
    h1.toani span{
        border:none;
    }
    .card-v3__content {
        min-height: 10em;
    }
</style>