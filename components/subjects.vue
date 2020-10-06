<template>
    <div>
                              <!-- subjects-->
                      <div class="max-width-adaptive-lg  container margin-bottom-xl ">
                      <div class="grid justify-center bg-contrast-lower innersubject padding-bottom-xl"> 
             
                                                         <div class="col-2" v-for='(subject,idx) in subjectobject' v-bind:key='idx'>
                                                    
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
                                                         
                        </div>
                      </div>
                      <!-- subjects -->
    </div>
</template>

<script>
export default {
  props: ['subjectobject'],
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
    }
  }
} 
</script>
