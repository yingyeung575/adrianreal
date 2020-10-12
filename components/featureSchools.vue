<template>
    <div>

    <section id='jschools' class="bg-contrast-lower padding-y-xl">

          <div class='container max-width-adaptive-lg'>
              <h3 class="margin-bottom-sm">英國大學介紹</h3>
              <div class="carousel js-carousel" data-drag="on">
                  <p class="sr-only">Carousel items</p>
                
                  <div class="carousel__wrapper">
                    <ol class="carousel__list">
                      <li class="carousel__item" v-for='(school,idx) in schoolobject.favschool' :key='idx'>
                        <div class="carousel__demo-content">
                          <a class='nodec' :href='frontendurl + school.linkslug'>
                            <div class="school__content">

                                <img v-if='school.image' :src="backendurl2 + school.image.url">
                                <h5 class="color-primary text-base">{{ school.name }}</h5>
                                <div v-if='school.tagline1' class="school__characteristic">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="purple">
                                    <path d="M18 24l-6-5.269-6 5.269v-24h12v24z" />
                                  </svg>
                                  <span class="text-xs color-black">{{ school.tagline1 }}</span>
                                </div>
                                <div v-if='school.tagline2' class="school__characteristic">
                                  <svg class='color2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                    <circle cx="12" cy="12" r="12" />
                                  </svg>
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

          </div>

          

        </section>
    </div>
</template>

<script>
    export default {
        props: ['schoolobject'],
        data(){
            return{
            backendurl2 : process.env.backendurl2,
            backendurl : process.env.backendurl,
            frontendurl : process.env.frontendurl,
            }
        }
    }
</script>