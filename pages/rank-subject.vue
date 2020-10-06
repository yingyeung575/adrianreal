<template>
    <div>
             <section class="padding-top-xl padding-bottom-xxl">

          <div class='container max-width-sm'>
                <h3 class="margin-bottom-sm  text-center">科目排名表</h3>
                <p class="margin-bottom-lg">{{ pagecontent.maintext }}</p>
                
                <div class="author bg-contrast-lower padding-md margin-top-md margin-bottom-xl">

                        <span class="author__img-wrapper">
                          <img v-if='pagecontent.author'  :src='backendurl + pagecontent.author.profile.url' >
                        </span>
                  
                        <div v-if='pagecontent.author' class="author__content text-component v-space-xxs">
                          <h4 class="">升學顧問 - {{ pagecontent.author.name }}</h4>
                          <p v-if='pagecontent.author && !pagecontent.consultantcomment' class="padding-top-sm color-contrast-medium text-sm">{{ pagecontent.author.slogan }}</p>
                            <div v-html="$md.render(pagecontent.consultantcomment)" v-if='pagecontent.author && pagecontent.consultantcomment' class="text-component padding-top-sm color-contrast-medium text-sm">
                          </div>
                         
                        </div>

                        
                </div>
          </div>

          <div class='container max-width-lg'>

            <div class="margin-bottom-lg">
                    <a href="/rank-school" class="btn btn--subtle margin-right-md">
                            大學排名表
                    </a>
                    <a href="/rank-boarding" class="btn btn--subtle margin-right-md">
                            寄宿學校排名表
                    </a>
                    <a href="/rank-subject" class="btn btn--primary">
                            科目排名表
                    </a>
            </div>

            <div class="grid grid-gap-md">
                <div class="col-12@md" v-if='loading'>
                    <p class='noresult padding-top-sm padding-left-sm text-md' >請稍等。資料更新中....<br><br><img width='40' class='loadingicon' src='/img/loading.svg'></p>
                </div>
                <div class="col-6@md" v-if='!loading'>

                    
                    <span v-for='(subject,idx) in subjectlists' :key='idx'>
                    <a v-if='selectedsubject == subject.slug' :href="frontendurl + 'rank-subject?subject=' + subject.slug" class="story__category waactive margin-x-sm margin-bottom-sm"
                        
                    >
                            <i>{{ subject.name }}</i>
                         
                     </a>
                    <a v-if='selectedsubject != subject.slug' :href="frontendurl + 'rank-subject?subject=' + subject.slug" class="story__category margin-x-sm margin-bottom-sm"
                        
                    >
                            <i>{{ subject.name }}</i>
                         
                     </a>
                     
                     </span>
                </div>
                <div class="col-6@md" v-if='!loading'>
                
                        <div class="int-table text-sm js-int-table">
                                <div class="int-table__inner">
                                  <table class="int-table__table" aria-label="Interactive table example">
                                    <thead class="int-table__header js-int-table__header">
                                      <tr class="int-table__row">
                                      
                              
                                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                          <div class="flex items-center">
                                            <span>排名</span>
                                    
                                            <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                          </div>
                              
                                          <ul class="sr-only js-int-table__sort-list">
                                            <li>
                                              <input type="radio" name="sortingId" id="sortingIdNone" value="none" checked>
                                              <label for="sortingIdNone">No sorting</label>
                                            </li>
                              
                                            <li>
                                              <input type="radio" name="sortingId" id="sortingIdAsc" value="asc">
                                              <label for="sortingIdAsc">Sort in ascending order</label>
                                            </li>
                                    
                                            <li>
                                              <input type="radio" name="sortingId" id="sortingIdDes" value="desc">
                                              <label for="sortingIdDes">Sort in descending order</label>
                                            </li>
                                          </ul>
                                        </th>
                              
                                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                          <div class="flex items-center">
                                            <span>學校名稱</span>
                                    
                                            <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                          </div>
                              
                                          <ul class="sr-only js-int-table__sort-list">
                                            <li>
                                              <input type="radio" name="sortingName" id="sortingNameNone" value="none" checked>
                                              <label for="sortingNameNone">No sorting</label>
                                            </li>
                              
                                            <li>
                                              <input type="radio" name="sortingName" id="sortingNameAsc" value="asc">
                                              <label for="sortingNameAsc">Sort in ascending order</label>
                                            </li>
                                    
                                            <li>
                                              <input type="radio" name="sortingName" id="sortingNameDes" value="desc">
                                              <label for="sortingNameDes">Sort in descending order</label>
                                            </li>
                                          </ul>
                                        </th>
                              
                                      
                                      </tr>
                                    </thead>
                                    
                                    <tbody class="int-table__body js-int-table__body theleft">
                                      
                                      <tr class="int-table__row" v-for='(list,idx) in filteredList' :key='idx'>
                                        
                                        <td class="int-table__cell">{{ list.rank }}</td>
                                        <td class="int-table__cell"><a :href='frontendurl + "university-school/" + list.university.slug'>{{ list.university.name }}</a></td>
                                       
                                      </tr>
                                              
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              
                
                </div>
            </div>


          </div>
      </section>

      <section class="bg-contrast-lower radius-md padding-lg">
        <div class="container max-width-lg">
            <div class="grid grid-gap-md items-center">
              <div class="col-6@md">
                <div class="text-component">
                  <h3>下載科目排名表PDF</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsum quo nihil ipsam sapiente. Suscipit, rerum!</p>
                </div>
              </div>
            
              <div class="col-6@md">
                <form class="margin-bottom-sm">
                  <div class="flex flex-column flex-row@md flex-gap-xxxs">
                    <input aria-label="Email" class="form-control flex-grow" type="email" placeholder="你的電郵">
                    <button class="btn btn--primary">提交</button>
                  </div>
                </form>
          
            </div>
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
       sort: 'rankhigh',
       showing: 10,
       arraylength: 0,
       loading: true,
       subjects: null

    }
  },
  async asyncData({ $axios }) {
 //   const subjects = await $axios.$get(process.env.backendurl+'subjects?isuniversity_eq=true')
 //   return { subjects }
      const pagecontent = await $axios.$get(process.env.backendurl+'subjectrankingpage')  
      return { pagecontent }
  
  },
  async created(){

   
     if (!this.$route.query.subject)
        this.selectedsubject = 'AccountingandFinance'

    this.subjectlists = await this.$axios.$get(process.env.backendurl+'subjects-universities') 
    this.subjects = await this.$axios.$get(process.env.backendurl+'subjects?slug='+this.selectedsubject)
    
     
     this.loading = false
  },
  methods:{
    ...mapMutations({
      setUniversity: 'schools/setUniversity',
      updateuniversitytypequery: 'schools/updateuniversitytypequery',
      updateuniversityfilter1: 'schools/updateuniversityfilter1',
    }),
    showmore(){
      this.showing = this.showing + 10
    },
    selectsubject(parax){
      this.selectedsubject = parax
    }

  },

  computed: {

    typequery: {
      get () {
        return this.$store.state.schools.universitytypequery
      },
      set (value) {
        this.updateuniversitytypequery(value)
      }
    },
    filter1: {
      get () {
        return this.$store.state.schools.universityfilter1
      },
      set (value) {
        this.updateuniversityfilter1(value)
      }
    },
  /*  showsubjects(){
      if (this.subjects){
        let unisubjects = this.subjects.filter( x => x.isuniversity == true)
        return unisubjects
      }
    },*/
    // Search system
    filteredList() {
      if (this.subjects){

        let funiversities = this.subjects[0].universityranking
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

        this.arraylength = funiversities.length
        /* sorting */

  
          funiversities.sort( ( a, b ) => {
              return a.rank - b.rank;
          });
     
        
        /* sorting */


        return funiversities
      }
    },
  }
}

</script>