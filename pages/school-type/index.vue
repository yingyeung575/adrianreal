<template>
    <div>

      <!-- popup search -->
      <div v-if='!selectedsubject' class="modal modal--select js-modal modal--is-visible modalblock" id="modal-select" role="dialog" aria-labelledby="modal-select-label" data-animation="on">
         

              
                <div class="vvcenter max-width-xs text-center padding-md" role="alertdialog" tabindex="-1" aria-labelledby="modal-select-title" aria-describedby="">
                  <h3 class="margin-bottom-sm text-xxxl ls4">請選擇學校類型</h3>
                  <!-- steps -->
                  <div class="steps" aria-label="Multi-step indicator">
                    <ol class="steps__list">
                      <li class="step step--current">
                        <a class="step__label nodecor">選擇學校類型</a>
                        <span class="step__separator" aria-hidden="true">
                          <svg class="icon" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg>
                        </span>
                        <div class="step__circle" aria-hidden="true">
                          1
                        </div>
                      </li>

                      <li class="step">
                        <a class="step__label">選擇科目</a>
                        <span class="step__separator" aria-hidden="true">
                          <svg class="icon" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg>
                        </span>
                        <div class="step__circle" aria-hidden="true">2</div>
                      </li>

                  
                      
                      <li class="step">
                        <a class="step__label">查看學校資料</a>
                        <div class="step__circle" aria-hidden="true">3</div>
                      </li>
                    </ol>
                  </div>

                  <!-- steps -->
              
                  <ul class="margin-top-xl text-center full-screen-select__list js-full-screen-select__list" role="listbox">
                  
                    <li><nuxt-link to="/school-type/boarding-school" class="full-screen-select__option" role="option">寄宿學校</nuxt-link></li>
                    <li><nuxt-link to='/school-type/foundation/step2' class="full-screen-select__option full-screen-select__option--selected" role="option">大學基礎班</nuxt-link></li>
                    
                    <li><nuxt-link to="/school-type/university/step2" class="full-screen-select__option" role="option">大學</nuxt-link></li>
                    <li><nuxt-link to='/school-type/international-one/step2' class="full-screen-select__option" role="option">國際一年級</nuxt-link></li>
                    <li><a :href='frontendurl+"school-type/summer-school"' class="full-screen-select__option" role="option">遊學團</a></li>

                  </ul> 
                </div>
              
              
          
      </div>
      <!-- popup search -->

      <section id='newmainsearh'>
        <div class="grid">
          <div class="col-3@md bgmilk">
              <!-- start sidebar content -->

 <!-- start sidebar content -->
                <div class="text-component padding-md">

                    <h5 class="padding-bottom-xxs font-bold">科目</h5>
                    <div class="select">
                      <select class="select__input form-control rightfilter" v-model="selectedsubject">
                     
                          <option value="computer-science">電腦科學</option>
                          <option value="media-communication">傳播媒體</option>
                                           
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
                    <h5 class="font-bold padding-bottom-xxs margin-top-md">篩選條件</h5>
                    <fieldset>
      
                      <div class="checkbox-list flex flex-column flex-gap-xxxs">
                        <div>
                          <input class="checkbox" type="checkbox" value='RusselGroup' id="checkbox1" v-model="filter1">
                          <label for="checkbox1">Russel Group ({{ checkcount('RusselGroup') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='DSEchinese' id="checkbox2" v-model="filter1">
                          <label for="checkbox2">收DSE中文 ({{ checkcount('DSEchinese') }})</label>
                        </div>
                
                        <div>
                          <input class="checkbox" type="checkbox" value='Alevelchinese' id="checkbox3" v-model="filter1">
                          <label for="checkbox3">收Alevel中文 ({{ checkcount('Alevelchinese') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='DSEEnglish' id="checkbox4" v-model="filter1">
                          <label for="checkbox4">可用DSE English ({{ checkcount('DSEEnglish') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='AdvancedEntryYear2' id="checkbox5" v-model="filter1">
                          <label for="checkbox5">Advanced Entry (Year 2) ({{ checkcount('AdvancedEntryYear2') }})</label>
                        </div>

                        <div>
                          <input class="checkbox" type="checkbox" value='AdvancedEntryYear3' id="checkbox6" v-model="filter1">
                          <label for="checkbox6">Advanced Entry (Year 3) ({{ checkcount('AdvancedEntryYear3') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='DirectEntry' id="checkbox7" v-model="filter1">
                          <label for="checkbox7">Direct Entry ({{ checkcount('DirectEntry') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='Clearing' id="checkbox8" v-model="filter1">
                          <label for="checkbox8">Clearing ({{ checkcount('Clearing') }})</label>
                        </div>
                        <div>
                          <input class="checkbox" type="checkbox" value='Fund' id="checkbox9" v-model="filter1">
                          <label for="checkbox9">香港學生獎學金 ({{ checkcount('Fund') }})</label>
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
                      <option value="feehigh">學費（高至低）</option>
                      <option value="feelow">學費（低至高）</option>
  
                   
                  </select>
                  
                  <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16"><g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline></g></svg>
              </div>
            <!-- start main content -->
            <nav class="s-tabs padding-top-sm padding-left-sm">
              <ul class="s-tabs__list">
                <li><a href="#0">大學基礎班</a></li>
                <li><a href="#0">寄宿學校</a></li>
                <li aria-current="page"><a href="#0" class="s-tabs__item--selected">大學</a></li>
                <li><a href="#0">國際一年級</a></li>
                <li><a href="#0">夏季學校</a></li>
              </ul>
              
            </nav>
            
            <div class="text-component">

              <div class='mschool' v-for='(list,idx) in filteredList' v-bind:key="idx">
                  
                    <div class="grid grid-gap-md">
                        <div class="text-left col-7@md padding-y-md padding-x-lg">
                          <a class='nodecor' :href="'/university-school/' + list.university.slug">
                          <img :src='backendurl  + list.university.image.url' width='100' v-if='list.university.image'>
                          <h4 class="color-primary"><span class="padding-left-xxxs"></span>{{list.university.name}}</span></h4>
                          <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>{{list.university.address}}</p>
                          <p>{{list.university.excerpt}}</p>
                          </a>
                          <a :href="'/university-school/' + list.university.slug" class="btn  btn--subtle btn--sm">查看大學</a>
                          <a :href="'/university-school/' + list.university.slug" class="margin-left-sm btn btn--primary btn--sm">查看Foundation</a>
                          <a :href="'/university-school/' + list.university.slug" class="margin-left-sm btn btn--accent btn--sm">查看International Year 1</a>
                        </div>
                        <div class="col-5@md">
                          <div class="jschollright padding-top-xs">
                            <div class="showstat" style="padding-left:1em">
                              <h4 class="text-sm">科目排名</h4>
                              <h3 class='text-xl jthebg color-accent'>#{{list.rank}}</h3>
                            </div>
                            <div class="showstat">
                              <h4 class="text-sm">設有Foundation</h4>
                              <h3 class='text-xl jthebg color-accent text-center'> 
                                <svg v-if='list.university.isfoundation' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                                <svg v-if='!list.university.isfoundation' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>
                              </h3>
                            </div>
                            <div class="showstat">
                              <h4 class="text-sm">設有 International Year 1</h4>
                              <h3 class='text-xl jthebg color-accent text-center'>
                                <svg v-if='list.university.isinternational1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                                <svg v-if='!list.university.isinternational1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>
                              </h3>
                            </div>
                            <div class="bg-contrast-lower padding-sm" style="padding-left:1.5em">
                              <span><strong>學費預算：</strong>{{list.university.schoolfee}}

                              </span>
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

                   <p class='noresult padding-top-sm padding-left-sm text-md' v-if="filteredList==''">不好意思，沒有找到相關結果</p>


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
import { mapMutations } from 'vuex' 
export default {
  head() {
    return {
       title: '請選擇學校類型｜LINKEDU 領優教育'
    }
  },
  data(){
    return{
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       selectedsubject: '',
       typequery : '',
       filter1: [],
       sort: 'rankhigh'

    }
  },
  async asyncData({ $axios }) {
    const subjects = ''
    return { subjects }
  },
  async created(){


    /*
     if (this.$store.state.schools.boarding)
       this.universities = this.$store.state.schools.boarding
     else{
       this.universities = await this.$axios.$get(process.env.backendurl+'boarding-schools') 
       this.setBoarding(this.universities)
     }
     alert('loaded')
     */
  },
  methods:{

    ...mapMutations({
      setBoarding: 'schools/setBoarding'
    }),
    selectsubject(parax){
      this.selectedsubject = parax
    },
    checkcount( temp2 ) {
       
        if (this.selectedsubject){
          let universities = this.subjects.filter(
            x => (x.slug == this.selectedsubject)
          ) 
          let funiversities = universities[0].universityranking

          funiversities = funiversities.filter(
            
            x => {
              
              /* new checkbox filter check */
              let z = true
              if (temp2 != '') {
                z = x.university.option.find(element => {
                  return temp2.includes(element.name)  
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


    // Search system
    filteredList() {
      if (this.selectedsubject){
        let universities = this.subjects.filter(
          x => (x.slug == this.selectedsubject)
        ) 
        let funiversities = universities[0].universityranking
        let temp = this.typequery
        let temp2 = this.filter1
        funiversities = funiversities.filter(
          
          x => {
            let a = x.university.name.toLowerCase()
            let y = temp.toLowerCase()
            /* new checkbox filter check */
            let z = true
            if (temp2 != '') {
              z = x.university.option.find(element => {
                return temp2.includes(element.name)  
              })
            }
            /* new checkbox filter check */
            return a.includes(y) && z
          }
        ) 

        /* sorting */
        if (this.sort=='ranklow'){
          funiversities.sort( ( a, b ) => {
              return a.rank - b.rank;
          });
          funiversities.reverse()
        }

        if (this.sort=='feelow'){
          funiversities.sort( ( a, b ) => {
              return a.university.schoolfeesort - b.university.schoolfeesort;
          });
        }
        if (this.sort=='feehigh'){
          funiversities.sort( ( a, b ) => {
              return a.university.schoolfeesort - b.university.schoolfeesort;
          });
          funiversities.reverse()
        }
        /* sorting */


        return funiversities
      }
    },
  }
}

</script>