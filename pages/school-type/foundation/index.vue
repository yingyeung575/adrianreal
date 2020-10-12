<template>
    <div>

      <section id='newmainsearh'>
        <div class="grid">
          <div class="col-3@md bgmilk">
              <!-- start sidebar content -->

 <!-- start sidebar content -->
                <div class="text-component padding-md">

                    <h5 class="padding-bottom-xxs font-bold">科目</h5>
                    <div class="select">
                      <select class="select__input form-control rightfilter" v-model="selectedsubject"  @change="onChange($event)">
                     
                          <option v-for='(subject, idx) in showsubjects' v-bind:key="idx" v-bind:value="subject.slug">{{ subject.name }}</option>
                      
                                           
                      </select>
                      
                      <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
                    </div>

                    <h5 class="padding-top-md padding-bottom-xxs font-bold">學校名稱</h5>
                    <div class="search-input search-input--icon-right">
                      <input class="form-control width-100%" type="search" name="searchInputX" id="searchInputX" placeholder="Search..." style="font-size: 0.8em;" v-model="typequery">
                      <button class="search-input__btn">
                        <svg class="icon" viewBox="0 0 24 24"><title>Search</title><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><line x1="22" y1="22" x2="15.656" y2="15.656"></line><circle cx="10" cy="10" r="8"></circle></g></svg>
                      </button>
                    </div>

                  <!--  <h5 class="padding-top-md padding-bottom-xxs font-bold">類別</h5>
                    <fieldset>
                      <ul class="radio-list flex flex-column flex-gap-xxxs">
                        <li>
                          <input class="radio" type="radio" name="radioButton" id="radio1" checked>
                          <label for="radio1">Choice 1 </label>
                        </li>
                
                        <li>
                          <input class="radio" type="radio" name="radioButton" id="radio2">
                          <label for="radio2">Choice 2</label>
                        </li>
                
                        <li>
                          <input class="radio" type="radio" name="radioButton" id="radio3">
                          <label for="radio3">Choice 3</label>
                        </li>
    
                      </ul>
                    </fieldset> -->
                    <h5 class="font-bold padding-bottom-xxs margin-top-md">Foundation 類別</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='oneto1' id="checkbox1" v-model="filter1">
                          <label for="checkbox1">大學 Foundation (1 to 1) ({{ checkcount('oneto1') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='onetomany' id="checkbox2" v-model="filter1">
                          <label for="checkbox2">學院 Foundation (1 to many) ({{ checkcount('onetomany') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='nqf6' id="checkbox3" v-model="filter1">
                          <label for="checkbox3">Package Visa (NQF 6) ({{ checkcount('nqf6') }})</label>
                        </div>

                      </div>
                    </fieldset>

                    <h5 class="font-bold padding-bottom-xxs margin-top-md">收生要求</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='ielts4' id="checkbox4" v-model="filter1">
                          <label for="checkbox4">雅思 IELTS for UKVI 總分 4 ({{ checkcount('ielts4') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='ielts45' id="checkbox5" v-model="filter1">
                          <label for="checkbox5">雅思 IELTS for UKVI 總分 4.5 ({{ checkcount('ielts45') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='ielts5' id="checkbox6" v-model="filter1">
                          <label for="checkbox6">雅思 IELTS for UKVI 總分 5 ({{ checkcount('ielts5') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='ielts55' id="checkbox7" v-model="filter1">
                          <label for="checkbox7">雅思 IELTS for UKVI 總分 5.5 ({{ checkcount('ielts55') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='ielts6' id="checkbox8" v-model="filter1">
                          <label for="checkbox8">雅思 IELTS for UKVI 總分 6 ({{ checkcount('ielts6') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='form5gcse' id="checkbox9" v-model="filter1">
                          <label for="checkbox9">收中五/GCSE ({{ checkcount('form5gcse') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='as' id="checkbox10" v-model="filter1">
                          <label for="checkbox10">收AS ({{ checkcount('as') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='ib' id="checkbox11" v-model="filter1">
                          <label for="checkbox11">收IB ({{ checkcount('ib') }})</label>
                        </div>
                      </div>
                    </fieldset>

                    <h5 class="font-bold padding-bottom-xxs margin-top-md">其他</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='scholarship' id="checkbox12" v-model="filter1">
                          <label for="checkbox12">有機會申請獎學金 ({{ checkcount('scholarship') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='nearlondon' id="checkbox13" v-model="filter1">
                          <label for="checkbox13">近倫敦 ({{ checkcount('nearlondon') }})</label>
                        </div>
                
                       

                      </div>
                    </fieldset>

                                    
                </div>
                <!-- end sidebar content -->
              <!-- end -->
          </div>
          <div class="col-9@md">
            <!-- start main -->
  <main style="width:100%" id='rightside'>

              <div class="select reorder " v-if="filteredList!=''">
                  <select class="select__input form-control" name="selectThis" id="selectThis" v-model="sort">
 
                      <option value="rankhigh">科目排名（高至低）</option>
                      <option value="ranklow">科目排名（低至高）</option>
                      <option value="percenthigh">銜接成功率（高至低）</option>
                      <option value="percentlow">銜接成功率（低至高）</option>
                      <option value="markhigh">銜接分數（高至低）</option>
                      <option value="marklow">銜接分數（低至高）</option>
  
                   
                  </select>
                  
                  <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
              </div>
            <!-- start main content -->
            <nav class="s-tabs padding-top-sm padding-left-sm">
              <ul class="s-tabs__list">
                  <li><nuxt-link to="/school-type/boarding-school">寄宿學校</nuxt-link></li>
                <li><nuxt-link  class="s-tabs__item--selected" to="/school-type/foundation/step2">大學基礎班</nuxt-link></li>
                
                <li><nuxt-link to="/school-type/university/step2">大學</nuxt-link></li>
                <li><nuxt-link to="/school-type/international-one/step2">國際一年級</nuxt-link></li>
                <li><a :href='frontendurl+"school-type/summer-school"'>遊學團</a></li>
              </ul>
              
            </nav>
            
            <div class="text-component">
              <p class='padding-top-sm padding-left-md text-sm'>排名根據 The Complete University Guide 2021</p>
              <div  v-for='(list,idx) in filteredList' v-bind:key="idx">
                  <div class='mschool' v-if='showing > idx'>
                    <div class="grid grid-gap-md">
                        <div class="text-left col-7@md padding-y-md padding-x-lg">
                          <nuxt-link class='nodecor' :to="'/foundation/' + list.foundation.slug">
                          <img :src='backendurl2  + list.foundation.image.url' width='100' v-if='list.foundation.image'>
                          <h4 class="color-primary"><span class="padding-left-xxxs">{{list.foundation.name}}</span></h4>
                          <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>{{list.foundation.address}}</p>
                          <p>{{list.foundation.excerpt}}</p>
                          </nuxt-link>
                          <nuxt-link :to="'/foundation/' + list.foundation.slug" class="btn  btn--subtle btn--sm">查看更多</nuxt-link>
                         
                        </div>
                        <div class="col-5@md">
                          <div class="jschollright padding-top-xs">
                            <div class="showstat" style="padding-left:1em">
                              <h4 class="text-sm">科目排名</h4>
                              <h3 class='text-xl jthebg color-accent'>#{{list.rank}}</h3>
                            </div>

                            <div class="showstat">
                              <h4 class="text-sm">銜接成功率</h4>
                              <h3 v-if='list.foundation.successrate' class='text-xl jthebg color-accent'>{{ list.foundation.successrate }}%</h3>    
                              <h3 v-if='!list.foundation.successrate' class='text-xl jthebg color-accent text-center'>- </h3>                            
                            </div>

                            <div class="showstat">
                              <h4 class="text-sm">銜接分數</h4>
                              <h3 v-if='list.foundation.marks' class='text-xl jthebg color-accent'>{{ list.foundation.marks }}</h3>    
                              <h3 v-if='!list.foundation.marks' class='text-xl jthebg color-accent text-center'>- </h3>                            
                            </div>
                            <div class="bg-contrast-lower padding-sm" style="padding-left:1.5em">
                              <span><strong>學費預算：</strong>{{list.foundation.schoolfee}}

                              </span><br>
                              <span><strong>最低收生：</strong>{{list.foundation.minimumrequirement}}

                              </span>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <!-- end mschool -->
               
            
                  <!--
                  <nav v-if="filteredList!=''" class="pagination margin-y-lg padding-bottom-xl" aria-label="Pagination">
                    <ol class="pagination__list flex flex-wrap flex-gap-xxs justify-center">
                      <li>
                        <a href="#0" class="pagination__item pagination__item--disabled" aria-label="Go to previous page">
                          <svg class="icon margin-right-xxxs" aria-hidden="true" viewBox="0 0 16 16"><title>Previous</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.5,3.5 5,8 9.5,12.5 "></polyline></g></svg>
                          <span>Prev</span>
                        </a>
                      </li>
              
                      <li class="display@sm">
                        <a href="#0" class="pagination__item" aria-label="Go to page 1">1</a>
                      </li>
              
                      <li class="display@sm">
                        <a href="#0" class="pagination__item" aria-label="Go to page 2">2</a>
                      </li>
              
                      <li class="display@sm">
                        <a href="#0" class="pagination__item pagination__item--selected" aria-label="Current Page, page 3" aria-current="page">3</a>
                      </li>
              
                      <li class="display@sm">
                        <a href="#0" class="pagination__item" aria-label="Go to page 4">4</a>
                      </li>
              
                      <li class="display@sm" aria-hidden="true">
                        <span class="pagination__item pagination__item--ellipsis">...</span>
                      </li>
              
                      <li class="display@sm">
                        <a href="#0" class="pagination__item" aria-label="Go to page 20">20</a>
                      </li>
              
                      <li>
                        <a href="#0" class="pagination__item" aria-label="Go to next page">
                          <span>Next</span>
                          <svg class="icon margin-left-xxxs" aria-hidden="true" viewBox="0 0 16 16"><title>Next</title><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg>
                        </a>
                      </li>
                    </ol>
                  </nav>
                  -->
                   <div v-if='arraylength > showing' class="width-100 text-center padding-bottom-lg" @click='showmore'>
                   <a class="btn btn--accent">顯示更多</a>
                   <br>
                   </div>
                   
                   <p class='noresult padding-top-sm padding-left-sm text-md' v-if='loading'>請稍等。資料更新中....<img class='loadingicon' src='/img/loading.svg'></p>
                   <p class='noresult padding-top-sm padding-left-sm text-md' v-if="filteredList==''&&!loading">不好意思，沒有找到相關結果</p>


            </div>
            <!-- end main content -->
          </main>
        
            <!-- end main -->
          </div>
        </div>

      </section>


    </div>
</template>

<script>
import Cookies from 'js-cookie'
import { mapMutations } from 'vuex' 
export default {
  data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       selectedsubject: this.$route.query.subject,
       sort: 'rankhigh',
       showing: 10,
       arraylength: 0,
       loading: true,
       subjects: null,
       subjectlists: null

    }
  },
  async asyncData({ $axios }) {
 //   const subjects = await $axios.$get(process.env.backendurl2+'subjects?isuniversity_eq=true')
 //   return { subjects }
  },
  async created(){
    
    this.subjectlists = await this.$axios.$get(process.env.backendurl+'subjects-foundations')

    // if (this.$store.state.schools.foundation)
    //   this.subjects = this.$store.state.schools.foundation
    // else{
       this.subjects = await this.$axios.$get(process.env.backendurl+'subjects?slug='+this.selectedsubject) 
     //  this.setFoundation(this.subjects)
    // }
     console.log(this.subjects )
     this.loading = false
  },
  methods:{
    ...mapMutations({
      setFoundation: 'schools/setFoundation',
      updatefoundationtypequery: 'schools/updatefoundationtypequery',
      updatefoundationfilter1: 'schools/updatefoundationfilter1',
    }),
    showmore(){
      this.showing = this.showing + 10
    },
    onChange(event) {
         window.location.href = this.frontendurl + 'school-type/foundation?subject=' + event.target.value
        // this.$router.push({path: 'foundation', query: {subject: event.target.value}})
    },
    checkcount( temp2 ) {
       
        if (this.subjects){

          let funiversities = this.subjects[0].foundationranking

          funiversities = funiversities.filter(
            
            x => {
              
              /* new checkbox filter check */
              let z = true
              if (temp2 != '') {
                z = x.foundation.optionfoundation.find(element => {
                  return temp2 == element.name 
                })
              }
              /* new checkbox filter check */
              return z
            }
          )
          return funiversities.length
        }
    },
  },
  computed: {

    typequery: {
      get () {
        return this.$store.state.schools.foundationtypequery
      },
      set (value) {
        this.updatefoundationtypequery(value)
      }
    },
    filter1: {
      get () {
        return this.$store.state.schools.foundationfilter1
      },
      set (value) {
        this.updatefoundationfilter1(value)
      }
    },
    showsubjects(){
      return this.subjectlists
    },
    // Search system
    filteredList() {
      if (this.subjects){
      
        let funiversities = this.subjects[0].foundationranking
        let temp = this.typequery
        let temp2 = this.filter1
        
        funiversities = funiversities.filter(
          
          x => {
            let a = x.foundation.name.toLowerCase()
            let y = temp.toLowerCase()
            /* new checkbox filter check */
            let z = true
            if (temp2 != '') {


              // or check
              /*
              z = x.foundation.optionfoundation.find(element => {
                return temp2.includes(element.name)  
              })
              */

              // and check
              const schooloption = x.foundation.optionfoundation.map(x => x.name)
              z = temp2.every( e => schooloption.includes(e) )
              return z 


            }
            /* new checkbox filter check */
            return a.includes(y) && z
          }
        ) 

        this.arraylength = funiversities.length
        /* sorting */

        if (this.sort=='rankhigh'){
          funiversities.sort( ( a, b ) => {
              return a.rank - b.rank;
          });
     
        }
        if (this.sort=='ranklow'){
          funiversities.sort( ( a, b ) => {
              return a.rank - b.rank;
          });
          funiversities.reverse()
        }

        if (this.sort=='percentlow'){
          funiversities.sort( ( a, b ) => {
              return a.foundation.successrate - b.foundation.successrate;
          });
        }
        if (this.sort=='percenthigh'){
          funiversities.sort( ( a, b ) => {
              return a.foundation.successrate - b.foundation.successrate;
          });
          funiversities.reverse()
        }


        if (this.sort=='marklow'){
          funiversities.sort( ( a, b ) => {
              return a.foundation.marks - b.foundation.marks;
          });
        }
        if (this.sort=='markhigh'){
          funiversities.sort( ( a, b ) => {
              return a.foundation.marks - b.foundation.marks;
          });
          funiversities.reverse()
        }
        /* sorting */


        return funiversities
      }
    },
  },
  /*
  updated: function(){
     
      Cookies.set('universityTypequery', this.typequery) 
      Cookies.set('universityFilter1', this.filter1)

  },
  beforeMount: function(){

      if (Cookies.get('universityTypequery'))
      this.typequery = Cookies.get('universityTypequery')
      if (Cookies.get('universityFilter1')){
      let tempFilter = JSON.parse(Cookies.get('universityFilter1'))
      this.filter1 = tempFilter
      }

  }
  */
}

</script>