<template>
    <div>
    <section class='padding-bottom-xl bg-contrast-lower'>
                  <div class="slideshow slideshow--transition-slide testimonial-slideshow js-slideshow" data-swipe="on">
                      <p class="sr-only">Slideshow Items</p>
                      
                      <ul class="slideshow__content">
                        <li class="slideshow__item js-slideshow__item">
                          <div class="container max-width-sm">
                              123
                          </div>
                        </li>
                         <li class="slideshow__item js-slideshow__item">
                          <div class="container max-width-sm">
                              123
                          </div>
                        </li>
                       
                        
                      </ul>
                    
                      <ul>
                        <li class="slideshow__control js-slideshow__control">
                          <button class="reset slideshow__btn js-tab-focus">
                            <svg class="icon" viewBox="0 0 32 32"><title>Show previous slide</title><path d="M20.768,31.395L10.186,16.581c-0.248-0.348-0.248-0.814,0-1.162L20.768,0.605l1.627,1.162L12.229,16 l10.166,14.232L20.768,31.395z"></path></svg>
                          </button>
                        </li>
                    
                        <li class="slideshow__control js-slideshow__control">
                          <button class="reset slideshow__btn js-tab-focus">
                            <svg class="icon" viewBox="0 0 32 32"><title>Show next slide</title><path d="M11.232,31.395l-1.627-1.162L19.771,16L9.605,1.768l1.627-1.162l10.582,14.813 c0.248,0.348,0.248,0.814,0,1.162L11.232,31.395z"></path></svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                </section>
    </div>
</template>


<script>
import why from '~/components/why'
import testimonials from '~/components/testimonials'
import cta from '~/components/cta'
export default {
  components:{
    why,
    testimonials,
    cta
  },
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       showpop: false,
       poptitle: '',
       popdescription:''
    }
  }
}

</script>