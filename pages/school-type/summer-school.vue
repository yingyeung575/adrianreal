<template>
    <div>

      <section id='newmainsearh'>
        <div class="grid">
          <div class="col-3@md bgmilk">
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
                    <h5 class="font-bold padding-bottom-xxs margin-top-md">課程長度 (星期)</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='length1' id="checkbox1" v-model="filter1">
                          <label for="checkbox1">1 ({{ checkcount('length1') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='length2' id="checkbox2" v-model="filter1">
                          <label for="checkbox2">2 ({{ checkcount('length2') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='length3' id="checkbox3" v-model="filter1">
                          <label for="checkbox3">3 ({{ checkcount('length3') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='length4' id="checkbox4" v-model="filter1">
                          <label for="checkbox4">4 ({{ checkcount('length4') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='length5' id="checkbox5" v-model="filter1">
                          <label for="checkbox5">5 ({{ checkcount('length5') }})</label>
                        </div>
                      
                      </div>
                    </fieldset>

                    <h5 class="font-bold padding-bottom-xxs margin-top-md">年齡</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='age8' id="checkbox14" v-model="filter1">
                          <label for="checkbox14">8至10 ({{ checkcount('age8') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='age11' id="checkbox15" v-model="filter1">
                          <label for="checkbox15">11 ({{ checkcount('age11') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='age12' id="checkbox16" v-model="filter1">
                          <label for="checkbox16">12 ({{ checkcount('age12') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='age13' id="checkbox40" v-model="filter1">
                          <label for="checkbox40">13 ({{ checkcount('age13') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='age14' id="checkbox41" v-model="filter1">
                          <label for="checkbox41">14 ({{ checkcount('age14') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='age15' id="checkbox42" v-model="filter1">
                          <label for="checkbox42">15 ({{ checkcount('age15') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='age16' id="checkbox43" v-model="filter1">
                          <label for="checkbox43">16 ({{ checkcount('age16') }})</label>
                        </div>
                        
                      </div>
                    </fieldset>


                    <h5 class="font-bold padding-bottom-xxs margin-top-md">學校特點</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='boardingexp' id="checkbox17" v-model="filter1">
                          <label for="checkbox17">寄宿學校體驗 ({{ checkcount('boardingexp') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='prepuni' id="checkbox18" v-model="filter1">
                          <label for="checkbox18">大學預備課程 ({{ checkcount('prepuni') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='oxford' id="checkbox19" v-model="filter1">
                          <label for="checkbox19">牛劍預備課程 ({{ checkcount('oxford') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='football' id="checkbox44" v-model="filter1">
                          <label for="checkbox44">足球訓練營 ({{ checkcount('football') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='art' id="checkbox45" v-model="filter1">
                          <label for="checkbox45">藝術課程 ({{ checkcount('art') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='topschoolcourse' id="checkbox46" v-model="filter1">
                          <label for="checkbox46">頂尖學府體驗 ({{ checkcount('topschoolcourse') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='uniexp' id="checkbox47" v-model="filter1">
                          <label for="checkbox47">大學體驗 ({{ checkcount('uniexp') }})</label>
                        </div>
                        
                      </div>
                    </fieldset>


                    <h5 class="font-bold padding-bottom-xxs margin-top-md">地點</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='city' id="checkbox20" v-model="filter1">
                          <label for="checkbox20">市區 ({{ checkcount('city') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='farfromcity' id="checkbox21" v-model="filter1">
                          <label for="checkbox21">偏離大城市 ({{ checkcount('farfromcity') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='nearheathrow' id="checkbox22" v-model="filter1">
                          <label for="checkbox22">鄰近Heathrow機場 ({{ checkcount('nearheathrow') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='nearlondon' id="checkbox23" v-model="filter1">
                          <label for="checkbox23">鄰近London ({{ checkcount('nearlondon') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='nearmanchester' id="checkbox24" v-model="filter1">
                          <label for="checkbox24">鄰近Manchester ({{ checkcount('nearmanchester') }})</label>
                        </div> 

                        <div>
                          <input class="checkbox" type="checkbox" value='nearbirmingham' id="checkbox50" v-model="filter1">
                          <label for="checkbox50">鄰近Birmingham ({{ checkcount('nearbirmingham') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='nearoxford' id="checkbox51" v-model="filter1">
                          <label for="checkbox51">鄰近Oxford ({{ checkcount('nearoxford') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='nearcambridge' id="checkbox52" v-model="filter1">
                          <label for="checkbox52">鄰近Cambridge ({{ checkcount('nearcambridge') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='nearbristol' id="checkbox53" v-model="filter1">
                          <label for="checkbox53">鄰近Bristol ({{ checkcount('nearbristol') }})</label>
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
 
                      <option value="feelow">學費（低至高）</option>
                      <option value="feehigh">學費（高至低）</option>
                      
                      
  
                   
                  </select>
                  
                  <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
              </div>
            <!-- start main content -->
            <nav class="s-tabs padding-top-sm padding-left-sm">
              <ul class="s-tabs__list">
                <li><nuxt-link to="/school-type/boarding-school">寄宿學校</nuxt-link></li>
                <li><nuxt-link  to="/school-type/foundation/step2">大學基礎班</nuxt-link></li>
                
                <li><nuxt-link to="/school-type/university/step2">大學</nuxt-link></li>
                <li><nuxt-link to="/school-type/international-one/step2">國際一年級</nuxt-link></li>
                <li><nuxt-link class="s-tabs__item--selected" to="/school-type/summer-school">夏季學校</nuxt-link></li>
              </ul>
              
            </nav>
            
            <div class="text-component">

              <div v-for='(list,idx) in filteredList' v-bind:key="idx">
                  <div class='mschool' v-if='showing > idx'>
                    <div class="grid grid-gap-md" >
                        <div class="text-left col-7@md padding-y-md padding-x-lg">
                          <nuxt-link class='nodecor' :to="'/summer-school/' + list.slug">
                          <img :src='backendurl  + list.image.url' width='100' v-if='list.image'>
                          <h4 class="color-primary"><span class="padding-left-xxxs"></span>{{list.name}}</span></h4>
                          <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>{{list.address}}</p>
                          <p>{{list.excerpt}}</p>
                          </nuxt-link>
                          <nuxt-link :to="'/summer-school/' + list.slug" class="btn  btn--subtle btn--sm">了解更多</nuxt-link>
                         
                        </div>
                        <div class="col-5@md">
                          <div class="jschollright padding-top-xs">
                            <div class="showstat" style="padding-left:1em">
                              <h4 class="text-sm">距離倫敦</h4>
                              <h3 v-if='!list.nearlondon' class='text-xl jthebg color-accent text-center'>-</h3>
                              <h3 v-if='list.nearlondon' class='text-xl jthebg color-accent'>{{ list.nearlondon }}m</h3>
                            </div>
                            <div class="showstat">
                              <h4   class="text-sm">距離曼徹斯特</h4>
                              <h3 v-if='list.nearmanchester' class='text-xl jthebg color-accent'>{{ list.nearmanchester }}m</h3>    
                              <h3 v-if='!list.nearmanchester' class='text-xl jthebg color-accent text-center'>- </h3>                            
                            </div>
                          
                            <div class="bg-contrast-lower padding-sm" style="padding-left:1.5em">
                              <span><strong>學費預算：</strong>{{list.schoolfee}}

                              </span>
                              <br>
                              <span><strong>年齡：</strong>{{list.age}}

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
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       selectedsubject: this.$route.query.subject,
       sort: 'feelow',
       showing: 10,
       arraylength: 0,
       universities: [],
       loading: true
  

    }
  },
  async asyncData({ $axios }) {
    /* const universities = await $axios.$get(process.env.backendurl+'boarding-schools')
    return { universities } */
  },
  async created(){

     if (this.$store.state.schools.boarding)
       this.universities = this.$store.state.schools.boarding
     else{
       this.universities = await this.$axios.$get(process.env.backendurl+'summer-schools') 
       this.setSummer(this.universities)
     }
     this.loading = false
  },


  methods:{

    ...mapMutations({
      setSummer: 'schools/setSummer',
      updatesummertypequery: 'schools/updatesummertypequery',
      updatesummerfilter1: 'schools/updatesummerfilter1',
    }),
    showmore(){
      this.showing = this.showing + 10
    },
    checkcount( temp2 ) {
       
        
          let funiversities = this.universities

          funiversities = funiversities.filter(
            
            x => {
              
              /* new checkbox filter check */
              let z = true
              if (temp2 != '') {


     
                z = x.optionsummer.find(element => {
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
        return this.$store.state.schools.summertypequery
      },
      set (value) {
        this.updatesummertypequery(value)
      }
    },
    filter1: {
      get () {
        return this.$store.state.schools.summerfilter1
      },
      set (value) {
        this.updatesummerfilter1(value)
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
              /*
              z = x.optionsummer.find(element => {
                return temp2.includes(element.name)  
              })
              */

              // and check
              const schooloption = x.optionsummer.map(x => x.name)
              z = temp2.every( e => schooloption.includes(e) )
              return z 

              
            }
            /* new checkbox filter check */
            return a.includes(y) && z
          }
        ) 

        this.arraylength = funiversities.length
        /* sorting */

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