<template>
    <div>

      <section id='newmainsearh'>
        <div class="grid">
          <div class="col-3@md bgmilk" :class='{ showfilter: showfilterVar }'>
              <!-- start sidebar content -->

 <!-- start sidebar content -->
                <div class="text-component padding-md">
              
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
                    <h5 class="font-bold padding-bottom-xxs margin-top-md">中學類別</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='top150' id="checkbox1" v-model="filter1">
                          <label for="checkbox1">A Level A* - A 40%以上 ({{ checkcount('top150') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='sixfromcollege' id="checkbox2" v-model="filter1">
                          <label for="checkbox2">6th Form College ({{ checkcount('sixfromcollege') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='focusinternational' id="checkbox3" v-model="filter1">
                          <label for="checkbox3">著重照顧國際學生 ({{ checkcount('focusinternational') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='smartstudents' id="checkbox4" v-model="filter1">
                          <label for="checkbox4">精英拔尖型 ({{ checkcount('smartstudents') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='goodfacilities' id="checkbox5" v-model="filter1">
                          <label for="checkbox5">良好設施 ({{ checkcount('goodfacilities') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='specialneeds' id="checkbox6" v-model="filter1">
                          <label for="checkbox6">特殊學習需要 ({{ checkcount('specialneeds') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='athleticfocus' id="checkbox7" v-model="filter1">
                          <label for="checkbox7">體育重視 ({{ checkcount('athleticfocus') }})</label>
                        </div>                
                        <div>
                          <input class="checkbox" type="checkbox" value='musicfocus' id="checkbox8" v-model="filter1">
                          <label for="checkbox8">音樂重視 ({{ checkcount('musicfocus') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='artfocus' id="checkbox9" v-model="filter1">
                          <label for="checkbox9">藝術重視 ({{ checkcount('artfocus') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='sciencefocus' id="checkbox10" v-model="filter1">
                          <label for="checkbox10">科學重視 ({{ checkcount('sciencefocus') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='specialsubjectfocus' id="checkbox11" v-model="filter1">
                          <label for="checkbox11">專科職業導向配套 ({{ checkcount('specialsubjectfocus') }})</label>
                        </div>                     
                        <div>
                          <input class="checkbox" type="checkbox" value='carelearning' id="checkbox12" v-model="filter1">
                          <label for="checkbox12">關懷學習 ({{ checkcount('carelearning') }})</label>
                        </div> 
                        <div>
                          <input class="checkbox" type="checkbox" value='medioxford' id="checkbox13" v-model="filter1">
                          <label for="checkbox13">醫科牛劍申請指導 ({{ checkcount('medioxford') }})</label>
                        </div> 
                      </div>
                    </fieldset>

                    <h5 class="font-bold padding-bottom-xxs margin-top-md">寄宿比例</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='boardpercent0to30' id="checkbox14" v-model="filter1">
                          <label for="checkbox14">0-30% ({{ checkcount('boardpercent0to30') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='boardpercent31to60' id="checkbox15" v-model="filter1">
                          <label for="checkbox15">31% - 60% ({{ checkcount('boardpercent31to60') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='boardpercent60to100' id="checkbox16" v-model="filter1">
                          <label for="checkbox16">60%-100% ({{ checkcount('boardpercent60to100') }})</label>
                        </div>
                        
                      </div>
                    </fieldset>


                    <h5 class="font-bold padding-bottom-xxs margin-top-md">男/女校</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='maleschool' id="checkbox17" v-model="filter1">
                          <label for="checkbox17">男校 ({{ checkcount('maleschool') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='femaleschool' id="checkbox18" v-model="filter1">
                          <label for="checkbox18">女校 ({{ checkcount('femaleschool') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='malefemaleschool' id="checkbox19" v-model="filter1">
                          <label for="checkbox19">男女校 ({{ checkcount('malefemaleschool') }})</label>
                        </div>
                        
                      </div>
                    </fieldset>


                    <h5 class="font-bold padding-bottom-xxs margin-top-md">入學要求</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='alevel' id="checkbox20" v-model="filter1">
                          <label for="checkbox20">Alevel ({{ checkcount('alevel') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='ib' id="checkbox21" v-model="filter1">
                          <label for="checkbox21">IB ({{ checkcount('ib') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='gcse' id="checkbox22" v-model="filter1">
                          <label for="checkbox22">GCSE ({{ checkcount('gcse') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='oneyrgcse' id="checkbox23" v-model="filter1">
                          <label for="checkbox23">1 Year GCSE ({{ checkcount('oneyrgcse') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='oneyralevel' id="checkbox24" v-model="filter1">
                          <label for="checkbox24">1 Year A-level ({{ checkcount('oneyralevel') }})</label>
                        </div>                        
                      </div>
                    </fieldset>


                    <h5 class="font-bold padding-bottom-xxs margin-top-md">學生人數</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='zeroto300' id="checkbox25" v-model="filter1">
                          <label for="checkbox25">0-300 ({{ checkcount('zeroto300') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='threehundredto600' id="checkbox26" v-model="filter1">
                          <label for="checkbox26">300-600 ({{ checkcount('threehundredto600') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='sixhundredto1000' id="checkbox27" v-model="filter1">
                          <label for="checkbox27">600-1000 ({{ checkcount('sixhundredto1000') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='thousandmore' id="checkbox28" v-model="filter1">
                          <label for="checkbox28">1000+ ({{ checkcount('thousandmore') }})</label>
                        </div>                       
                      </div>
                    </fieldset>


                    <h5 class="font-bold padding-bottom-xxs margin-top-md">學費預算（£）</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='zeroto35000' id="checkbox29" v-model="filter1">
                          <label for="checkbox29">0-35000 ({{ checkcount('zeroto35000') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='thirtyfivethousandto40000' id="checkbox30" v-model="filter1">
                          <label for="checkbox30">35000-40000 ({{ checkcount('thirtyfivethousandto40000') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='fortythousandto45000' id="checkbox31" v-model="filter1">
                          <label for="checkbox31">40000-45000 ({{ checkcount('fortythousandto45000') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='fortyfivethousandmore' id="checkbox32" v-model="filter1">
                          <label for="checkbox32">45000+ ({{ checkcount('fortyfivethousandmore') }})</label>
                        </div>

                                              
                      </div>
                    </fieldset>
                    <br><br>
                    
                </div>
                <!-- end sidebar content -->
              <!-- end -->
          </div>
          <div class="col-9@md therightj">
            <!-- start main -->
  <main style="width:100%" id='rightside'>

              <div class="select reorder " v-if="filteredList!=''">
                  <select class="select__input form-control" name="selectThis" id="selectThis" v-model="sort">
                      <option value="az">A - Z 排序</option>
                      <option value="feelow">學費（低至高）</option>
                      <option value="feehigh">學費（高至低）</option>
                      <option value="alevellow">A Level (A*-A)（低至高）</option>
                      <option value="alevelhigh">A Level (A*-A)（高至低）</option>
                      <option value="gcselow">GCSE (A*-A)（低至高）</option>
                      <option value="gcsehigh">GCSE (A*-A)（高至低）</option>
                      
  
                   
                  </select>
                  
                  <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
              </div>
            <!-- start main content -->
            <nav class="s-tabs padding-top-sm padding-left-sm">
              <a v-if='!showfilterVar' class="text-sm margin-x-xs padding-bottom-md themfilter" @click='showfilter'>> 顯示篩選</a>
              <a v-if='showfilterVar' class="text-sm margin-x-xs padding-bottom-md themfilter" @click='closefilter'>< 隱藏篩選</a>
              <ul class="s-tabs__list">
                <li><nuxt-link class="s-tabs__item--selected" to="/school-type/boarding-school">寄宿學校</nuxt-link></li>
                <li><nuxt-link  to="/school-type/foundation/step2">大學基礎班</nuxt-link></li>
                
                <li><nuxt-link to="/school-type/university/step2">大學</nuxt-link></li>
                <li><nuxt-link to="/school-type/international-one/step2">國際一年級</nuxt-link></li>
                <li><a :href='frontendurl+"school-type/summer-school"'>遊學團</a></li>
              </ul>
              
            </nav>
            
            <div class="text-component">

              <div v-for='(list,idx) in filteredList' v-bind:key="idx">
                  <div class='mschool' v-if='showing > idx'>
                    <div class="grid grid-gap-md" >
                        <div class="text-left col-7@md padding-y-md padding-x-lg">
                          <nuxt-link class='nodecor' :to="'/boarding-school/' + list.slug">
                          <img :src='backendurl2  + list.image.url' width='100' v-if='list.image'>
                          <h4 class="color-primary"><span class="padding-left-xxxs"></span>{{list.name}}</span></h4>
                          <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>{{list.address}}</p>
                          <p>{{list.excerpt}}</p>
                          </nuxt-link>
                          <nuxt-link :to="'/boarding-school/' + list.slug" class="btn  btn--subtle btn--sm">了解更多</nuxt-link>
                         
                        </div>
                        <div class="col-5@md">
                          <div class="jschollright padding-top-xs">
                            <div class="showstat" style="padding-left:1em">
                              <h4 class="text-sm">A Level (A*-A)</h4>
                              <h3 v-if='!list.alevel' class='text-xl jthebg color-accent text-center'>-</h3>
                              <h3 v-if='list.alevel' class='text-xl jthebg color-accent'>{{ list.alevel }}%</h3>
                            </div>
                            <div class="showstat">
                              <h4   class="text-sm">GCSE (A*-A)</h4>
                              <h3 v-if='list.gcse' class='text-xl jthebg color-accent'>{{ list.gcse }}%</h3>    
                              <h3 v-if='!list.gcse' class='text-xl jthebg color-accent text-center'>- </h3>                            
                            </div>
                            <div class="showstat">
                              <h4 class="text-sm">寄宿比例</h4>
                              <h3 v-if='list.boardingpercentage' class='text-xl jthebg color-accent'>{{ list.boardingpercentage }}%</h3>              
                              <h3 v-if='!list.boardingpercentage' class='text-xl jthebg color-accent text-center'>-</h3>   
                            </div>
                            <div class="bg-contrast-lower padding-sm" style="padding-left:1.5em">
                              <span><strong>學費預算：</strong>{{list.schoolfee}}

                              </span>
                              <br>
                              <span><strong>學生人數：</strong>{{list.noofstudents}}

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
  head() {
    return {
       title: '寄宿學校｜LINKEDU 領優教育'
    }
  },
  data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       selectedsubject: this.$route.query.subject,
       sort: 'az',
       showing: 10,
       arraylength: 0,
       universities: [],
       loading: true,
       showfilterVar: false
  

    }
  },
  async asyncData({ $axios }) {
    /* const universities = await $axios.$get(process.env.backendurl2+'boarding-schools')
    return { universities } */
  },
  async created(){

     if (this.$store.state.schools.boarding)
       this.universities = this.$store.state.schools.boarding
     else{
       this.universities = await this.$axios.$get(process.env.backendurl+'boarding-schools') 
       this.setBoarding(this.universities)
     }
     this.loading = false
  },


  methods:{

    ...mapMutations({
      setBoarding: 'schools/setBoarding',
      updateboardingtypequery: 'schools/updateboardingtypequery',
      updateboardingfilter1: 'schools/updateboardingfilter1',
    }),
    showmore(){
      this.showing = this.showing + 10
    },
    showfilter(){
      this.showfilterVar = true
    },
    closefilter(){
      this.showfilterVar = false
    },
    checkcount( temp2 ) {
       
        
          let funiversities = this.universities

          funiversities = funiversities.filter(
            
            x => {
              
              /* new checkbox filter check */
              let z = true
              if (temp2 != '') {
                z = x.optionboarding.find(element => {
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
  computed: {

    typequery: {
      get () {
        return this.$store.state.schools.boardingtypequery
      },
      set (value) {
        this.updateboardingtypequery(value)
      }
    },
    filter1: {
      get () {
        return this.$store.state.schools.boardingfilter1
      },
      set (value) {
        this.updateboardingfilter1(value)
      }
    },
    // Search system
    filteredList() {

        let funiversities = this.universities
        let temp = this.typequery
        let temp2 = this.filter1
        

        funiversities = funiversities.filter(
          
          x => {
            let a = x.name.toLowerCase()
            let y = temp.toLowerCase()
            /* new checkbox filter check */
            let z = true
            if (temp2 != '') {

              // or check  
             /*  z = x.optionboarding.find(element => {
                 return temp2.includes(element.name)  
               }) */
               
              // and check
              const schooloption = x.optionboarding.map(x => x.name)
              z = temp2.every( e => schooloption.includes(e) )
              return z  

              
            }
            /* new checkbox filter check */
            return a.includes(y) && z
          }
        ) 

        this.arraylength = funiversities.length
        /* sorting */
        if (this.sort=='az'){
          funiversities.sort( ( a, b ) => {
         
              return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          });
        }
        if (this.sort=='feelow'){
          funiversities.sort( ( a, b ) => {
              return a.schoolfeesort - b.schoolfeesort;
          });
        }
        if (this.sort=='feehigh'){
          funiversities.sort( ( a, b ) => {
              return a.schoolfeesort - b.schoolfeesort;
          });
          funiversities.reverse()
        }
        if (this.sort=='alevellow'){
          funiversities.sort( ( a, b ) => {
              return a.alevel - b.alevel;
          });
        }
        if (this.sort=='alevelhigh'){
          funiversities.sort( ( a, b ) => {
              return a.alevel - b.alevel;
          });
          funiversities.reverse()
        }
        if (this.sort=='gcselow'){
          funiversities.sort( ( a, b ) => {
              return a.gcse - b.gcse;
          });
        }
        if (this.sort=='gcsehigh'){
          funiversities.sort( ( a, b ) => {
              return a.gcse - b.gcse;
          });
          funiversities.reverse()
        }
        /* sorting */

 

        return funiversities
      
    },
  },
  /*
  updated: function(){
   
    Cookies.set('boardingschoolTypequery', this.typequery) 
    Cookies.set('boardingschoolFilter1', this.filter1)

  },
  beforeMount: function(){

    if (Cookies.get('boardingschoolTypequery'))
     this.typequery = Cookies.get('boardingschoolTypequery')
    if (Cookies.get('boardingschoolFilter1')){
     let tempFilter = JSON.parse(Cookies.get('boardingschoolFilter1'))
     this.filter1 = tempFilter
    }

   
  }
  */
}

</script>