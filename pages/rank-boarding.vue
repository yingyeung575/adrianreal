<template>
    <div>
            <section class="padding-top-xl padding-bottom-xxl">

          <div class='container max-width-sm'>
                <h1 class="margin-bottom-sm text-lg text-center">寄宿學校排名表</h1>
                <p class="margin-bottom-lg">{{ pagecontent.maintext }}</p>
                
                <div class="author bg-contrast-lower padding-md margin-top-md margin-bottom-xl">

                        <span class="author__img-wrapper">
                          <img v-if='pagecontent.author'  :src='backendurl2 + pagecontent.author.profile.url' >
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
                    <a href="/rank-boarding" class="btn btn--primary margin-right-md">
                            寄宿學校排名表
                    </a>
                    <a href="/rank-subject" class="btn btn--subtle">
                            科目排名表
                    </a>
            </div>


            <div class="int-table text-sm js-int-table">
                <div class="int-table__inner">
                  <table class="int-table__table" aria-label="Interactive table example">
                    <thead class="int-table__header js-int-table__header">
                      <tr class="int-table__row">
                      
              
                    <!--    <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                          <div class="items-center">
                            <span>LinkedU 排名</span>
                    
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
                        </th> -->
              
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                          <div class="items-center">
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
              
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                          <div class="flex items-center">
                            <span>地區</span>
                    
                            <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                          </div>
              
                          <ul class="sr-only js-int-table__sort-list">
                            <li>
                              <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                              <label for="sortingEmailNone">No sorting</label>
                            </li>
              
                            <li>
                              <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                              <label for="sortingEmailAsc">Sort in ascending order</label>
                            </li>
                    
                            <li>
                              <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                              <label for="sortingEmailDes">Sort in descending order</label>
                            </li>
                          </ul>
                        </th>
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                <div class="items-center">
                                  <span>學校類別</span>
                          
                                  <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                </div>
                    
                                <ul class="sr-only js-int-table__sort-list">
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                                    <label for="sortingEmailNone">No sorting</label>
                                  </li>
                    
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                                    <label for="sortingEmailAsc">Sort in ascending order</label>
                                  </li>
                          
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                                    <label for="sortingEmailDes">Sort in descending order</label>
                                  </li>
                                </ul>
                        </th>
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                <div class="items-center">
                                  <span>學費</span>
                          
                                  <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                </div>
                    
                                <ul class="sr-only js-int-table__sort-list">
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                                    <label for="sortingEmailNone">No sorting</label>
                                  </li>
                    
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                                    <label for="sortingEmailAsc">Sort in ascending order</label>
                                  </li>
                          
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                                    <label for="sortingEmailDes">Sort in descending order</label>
                                  </li>
                                </ul>
                        </th>
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                <div class="items-center">
                                  <span>學生人數</span>
                          
                                  <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                </div>
                    
                                <ul class="sr-only js-int-table__sort-list">
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                                    <label for="sortingEmailNone">No sorting</label>
                                  </li>
                    
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                                    <label for="sortingEmailAsc">Sort in ascending order</label>
                                  </li>
                          
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                                    <label for="sortingEmailDes">Sort in descending order</label>
                                  </li>
                                </ul>
                        </th>
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                <div class="items-center">
                                  <span>寄宿學生比例</span>
                          
                                  <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                </div>
                    
                                <ul class="sr-only js-int-table__sort-list">
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                                    <label for="sortingEmailNone">No sorting</label>
                                  </li>
                    
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                                    <label for="sortingEmailAsc">Sort in ascending order</label>
                                  </li>
                          
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                                    <label for="sortingEmailDes">Sort in descending order</label>
                                  </li>
                                </ul>
                        </th>
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                <div class="items-center">
                                  <span>最低入學年級</span>
                          
                                  <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                </div>
                    
                                <ul class="sr-only js-int-table__sort-list">
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                                    <label for="sortingEmailNone">No sorting</label>
                                  </li>
                    
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                                    <label for="sortingEmailAsc">Sort in ascending order</label>
                                  </li>
                          
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                                    <label for="sortingEmailDes">Sort in descending order</label>
                                  </li>
                                </ul>
                        </th>
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                <div class="items-center">
                                  <span>GCSE 7 - 9 (%)</span>
                          
                                  <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                </div>
                    
                                <ul class="sr-only js-int-table__sort-list">
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                                    <label for="sortingEmailNone">No sorting</label>
                                  </li>
                    
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                                    <label for="sortingEmailAsc">Sort in ascending order</label>
                                  </li>
                          
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                                    <label for="sortingEmailDes">Sort in descending order</label>
                                  </li>
                                </ul>
                        </th>
                        <th class="int-table__cell int-table__cell--th int-table__cell--sort js-int-table__cell--sort">
                                <div class="items-center">
                                  <span>A Level A - A* (%)</span>
                          
                                  <svg class="icon icon--xxs margin-left-xxxs int-table__sort-icon" aria-hidden="true" viewBox="0 0 12 12"><polygon class="arrow-up" points="6 0 10 5 2 5 6 0"/><polygon class="arrow-down" points="6 12 2 7 10 7 6 12"/></svg>
                                </div>
                    
                                <ul class="sr-only js-int-table__sort-list">
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailNone" value="none" checked>
                                    <label for="sortingEmailNone">No sorting</label>
                                  </li>
                    
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailAsc" value="asc">
                                    <label for="sortingEmailAsc">Sort in ascending order</label>
                                  </li>
                          
                                  <li>
                                    <input type="radio" name="sortingEmail" id="sortingEmailDes" value="desc">
                                    <label for="sortingEmailDes">Sort in descending order</label>
                                  </li>
                                </ul>
                        </th>
                     
                      
                      </tr>
                    </thead>
                    
                    <tbody class="int-table__body js-int-table__body">
                      <tr class="int-table__row" v-for='( board, idx ) in articles' v-bind:key="idx">
                        
                       
                        <td class="int-table__cell"><a v-if='board.link' :href="frontendurl + board.link">{{ board.name }}</a><span v-if='!board.link'>{{ board.name }}</span></td>
                        <td class="int-table__cell">{{ board.district }}</td>
                        <td class="int-table__cell">{{ board.type }}</td>
                        <td class="int-table__cell">{{ board.fee }}</td>
                        <td class="int-table__cell">{{ board.noofstudents }}</td>
                        <td class="int-table__cell">{{ board.percentage }}</td>
                        <td class="int-table__cell">{{ board.minyear }}</td>
                        <td class="int-table__cell">{{ board.cgse }}</td>
                        <td class="int-table__cell">{{ board.alevel }}</td>
                       
                      </tr>
                                 
                    </tbody>
                  </table>
                </div>
              </div>
              
             

          </div>
      </section>

   <!--  <section class="bg-contrast-lower radius-md padding-lg">
        <div class="container max-width-lg">
            <div class="grid grid-gap-md items-center">
              <div class="col-6@md">
                <div class="text-component">
                  <h3>下載寄宿學校排名表PDF</h3>
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
          </section> -->
              

    </div>
</template>

<script>

export default {
 head() {
    return {
       title: '寄宿學校排名表｜LINKEDU 領優教育'
    }
  },
  data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
    }
  },
  async asyncData({ $axios }) {
    const articles = await $axios.$get(process.env.backendurl+'rankingboardings')
    const pagecontent = await $axios.$get(process.env.backendurl+'boardingrankingpage')  
    articles.sort( ( a, b ) => {
              return parseFloat(b.alevel) - parseFloat(a.alevel);
    });

    return { articles,pagecontent }
  },
}

</script>