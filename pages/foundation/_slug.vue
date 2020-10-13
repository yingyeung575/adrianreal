<template>
    <div>
           <section class="padding-top-xl padding-bottom-xxl">
            <div class="container max-width-adaptive-md">
                    <div class="grid grid-gap-md">
                      <div class="col-8@md">

                            <a @click='goback' class="hjhj text-sm">< 返回</a>
         
                            <div>
   
                              <img v-if='article.image' class='floatl margin-right-md margin-bottom-md' :src="backendurl2 + article.image.url" height="80">
                              <h1 class="text-md color-primary floath"><span class="padding-left-xxxs"></span>{{ article.name }}</span></h1>
                            </div>
                            <div style="clear:both"></div>
                          
                            
                            <div v-if='article.author' class="author bg-contrast-lower padding-md">

                                      <a href="#0" class="author__img-wrapper">
                                        <img :src="backendurl2 + article.author.profile.url">
                                      </a>
                                
                                      <div class="author__content text-component v-space-xxs">
                                        <h4 class="">升學顧問 - {{ article.author.name }}</h4>
                                        <p class="padding-top-sm color-contrast-medium text-sm">{{ article.consultantcomment }}</p>
                                       
                                      </div>

                                      
                            </div>

                            <div class="text-component line-height-lg v-space-md margin-top-md">
                                  
                                  
                                    <h3>學校簡介</h3>

                                        <p class="text-italic">最後更新日期：{{ jdate }}</p>

                                        <div v-bind:key='idy' v-for='(content, idy) in article.maincontent'>
                                            <div v-if="content.text" v-html="$md.render(content.text)"> </div> 
                                        
                                            <div class="text-component__block text-component__block--outset" v-if="content.html" >
                                              <figure class="media-wrapper" v-if="content.html" v-html="content.html">
                                              
                                              </figure>
                                            </div>
                                          
                                            <figure class="text-component__block" v-if="content.__component === 'image.image'">
                                              <a v-if='content.link' :href='content.link'>
                                                  <img :src="backendurl2 + content.image.url">
                                              </a>
                                              <img v-if='!content.link' :src="backendurl2 + content.image.url">
                                              <figcaption>{{ content.caption }}</figcaption>
                                            </figure>
                                            
                                                                                        <table v-if="content.__component === 'twocol-table.twocol-table'" class="tablemargin twocol table table--expanded@xs js-table width-100% table--expanded table--loaded" aria-label="Table Example">
                                           
                                               
                                                <tbody class="table__body">
                                               
                                              
                                                  <tr class="table__row" v-for='(row,idx) in content.tablerow' v-bind:key='idx'>
                                                    <td class="table__cell" role="cell" v-if="row.firstcol" v-html="$md.render(row.firstcol)">
                                                           
                                                    </td>
                                              
                                                    <td class="table__cell" role="cell" v-if="row.secondcol" v-html="$md.render(row.secondcol)">
                                                            
                                                    </td>
                                              
    
                                                  </tr>
                                                                                                   
                                                </tbody>
                                              </table>

                                              <table v-if="content.__component === 'academictable.academictable'" class="table table--expanded@xs js-table width-100% table--expanded table--loaded" aria-label="Table Example">
                                                <tbody class="table__body">
                                                    <tr class="table__row">
                                                        <td class="table__cell" role="cell">
                                                            提供課程：
                                                        </td>

                                                        <td class="table__cell" role="cell">
                                                            英國會考<br />
                                                            GCSE
                                                        </td>

                                                        <td class="table__cell" role="cell">
                                                            國際會考<br />
                                                            (IGCSE)
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                            英國高考<br />
                                                            A-Level
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                            國際文憑(IB)
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                            BTEC
                                                        </td>
                                                    </tr>
                                                    <tr class="table__row">
                                                        <td class="table__cell" role="cell"></td>

                                                        <td class="table__cell" role="cell">
                                                            
                                                            <svg v-if='content.gcse' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
                                                                ></path>
                                                            </svg>
                                                             <svg v-if='!content.gcse' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                                                                ></path>
                                                            </svg>
                                                        </td>

                                                        <td class="table__cell" role="cell">
                                                            <svg v-if='content.igcse' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
                                                                ></path>
                                                            </svg>
                                                             <svg v-if='!content.igcse' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                                                                ></path>
                                                            </svg>
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                            <svg v-if='content.alevel' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
                                                                ></path>
                                                            </svg>
                                                             <svg v-if='!content.alevel' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                                                                ></path>
                                                            </svg>
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                            <svg v-if='content.ib' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
                                                                ></path>
                                                            </svg>
                                                             <svg v-if='!content.ib' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                                                                ></path>
                                                            </svg>
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                           <svg v-if='content.btec' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
                                                                ></path>
                                                            </svg>
                                                             <svg v-if='!content.btec' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                                                                ></path>
                                                            </svg>
                                                        </td>
                                                    </tr>
                                                    <tr class="table__row" v-for='(row,idx) in content.sixcoltable' v-bind:key='idx'>
                                                        <td class="table__cell" role="cell" v-if="row.col1" v-html="$md.render(row.col1)">
                                                        
                                                        </td>

                                                        <td class="table__cell" role="cell" v-if="row.col2" v-html="$md.render(row.col2)">
                                                        
                                                        </td>
                                                        <td class="table__cell" role="cell" v-if="row.col3" v-html="$md.render(row.col3)">
                                                        
                                                        </td>
                                                        <td class="table__cell" role="cell" v-if="row.col4" v-html="$md.render(row.col4)">
                                                        
                                                        </td>
                                                        <td class="table__cell" role="cell" v-if="row.col5" v-html="$md.render(row.col5)">
                                                        
                                                        </td>
                                                        <td class="table__cell" role="cell" v-if="row.col6" v-html="$md.render(row.col6)">
                                                        
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                      
                                          </div>
                                  

                                   <!-- <h3 class='padding-bottom-sm'>學術</h3>
                                    <table class="table table--expanded@xs js-table width-100%" aria-label="Table Example">
                                           
                                            
                                            <tbody class="table__body">
                                           
                                          
                                              <tr class="table__row">
                                                <td class="table__cell" role="cell">
                                                      提供課程：
                                                </td>
                                          
                                                <td class="table__cell" role="cell">
                                                        英國會考<br>
                                                        GCSE
                                                </td>
                                          
                                                <td class="table__cell" role="cell">
                                                        國際會考<br>
                                                        (IGCSE)
                                                </td>
                                                <td class="table__cell" role="cell">
                                                        英國高考<br>
                                                        A-Level
                                                </td>
                                                <td class="table__cell" role="cell">
                                                        國際文憑(IB)
                                                </td>
                                                <td class="table__cell" role="cell">
                                                        BTEC
                                                </td>                                                
                                                    

                                              </tr>
                                              <tr class="table__row">
                                                    <td class="table__cell" role="cell">
                                                           
                                                    </td>
                                              
                                                    <td class="table__cell" role="cell">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                                                    </td>
                                              
                                                    <td class="table__cell" role="cell">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                                                    </td>
                                                    <td class="table__cell" role="cell">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
                                                    </td>
                                                    <td class="table__cell" role="cell">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>
                                                    </td>
                                                    <td class="table__cell" role="cell">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg>
                                                    </td>                                                
                                                        
    
                                                  </tr>   
                                                  <tr class="table__row">
                                                        <td class="table__cell" role="cell">
                                                               2019成績：
                                                        </td>
                                                  
                                                        <td class="table__cell" role="cell">
                                                                A*- A<br>
                                                                A*- C
                                                        </td>
                                                  
                                                        <td class="table__cell" role="cell">
                                                                A*- A<br>
                                                                A*- C
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                                A*- A<br>
                                                                A*- C
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                                A*- A<br>
                                                                A*- C
                                                        </td>
                                                        <td class="table__cell" role="cell">
                                                                A*- A<br>
                                                                A*- C
                                                        </td>                                                
                                                            
        
                                                      </tr>                                     
                                             
                                            </tbody>
                                          </table>
                                          <br>
                                          <table class="twocol table table--expanded@xs js-table width-100%" aria-label="Table Example">
                                           
                                            
                                                <tbody class="table__body">
                                               
                                              
                                                  <tr class="table__row">
                                                    <td class="table__cell" role="cell">
                                                            其他特別科目 :
                                                    </td>
                                              
                                                    <td class="table__cell" role="cell">
                                                            Oxbrige Prepareation Course / UCAS Prepareation course / Uni preparation course etc…
Or Any special A Level subject that other school doesn’t offer
                                                    </td>
                                              
    
                                                  </tr>
                                                  <tr class="table__row">
                                                        <td class="table__cell" role="cell">
                                                                其他特別課外活動 :
                                                        </td>
                                                  
                                                        <td class="table__cell" role="cell">
                                                                Sport / STEM/ Art/ Music / Community Work etc….. 
                                                        </td>
                                                  
                                                       
        
                                                      </tr>   
                                                      <tr class="table__row">
                                                            <td class="table__cell" role="cell">
                                                                    特殊教育 :<br>
                                                                            Special Education Needs
                                                            </td>
                                                      
                                                            <td class="table__cell" role="cell">
                                                                    Any special needs for SEN student
                                                            </td>
                                                      
            
                                                      </tr>                                     
                                                      <tr class="table__row">
                                                            <td class="table__cell" role="cell">
                                                                英語為第二語言 : 
                                                            </td>
                                                      
                                                            <td class="table__cell" role="cell">
                                                                    EAL Course? Yes or No 
                                                            </td>
                                                      
            
                                                      </tr>                                                    
                                                </tbody>
                                              </table> -->
                                
                                </div>
                        
                      
                      </div>
                      <div class="col-4@md">
                              <a :href="frontendurl + 'apply'" class="margin-top-lg width-100% btn btn--accent padding-y-sm theapply">立即查詢</a>
                            <div data-theme="reverse" class="padding-x-md padding-y-sm margin-top-sm">
                                <p>學校資料</p>
                            </div>
                            <div class="bgmilk therightinfo padding-x-md padding-top-md padding-bottom-xxl">
                              
                                <p v-for='(list,idx) in article.briefcontent' v-bind:key="idx">
                                    <strong>{{ list.property }} :</strong> {{ list.value }}
                                </p>

                                <span class="margin-top-sm story__category margin-right-sm" v-for='(tag,idx) in article.option' v-bind:key="idx">
                                    <i v-if='tag.name=="RusselGroup"'>Russel Group</i>
                                    <i v-if='tag.name=="DSEchinese"'>收DSE中文</i>
                                    <i v-if='tag.name=="Alevelchinese"'>收Alevel中文</i>
                                    <i v-if='tag.name=="DSEEnglish"'>可用DSE English</i>
                                    <i v-if='tag.name=="AdvancedEntryYear2"'>Advanced Entry (Year 2)</i>
                                    <i v-if='tag.name=="AdvancedEntryYear3"'>Advanced Entry (Year 3)</i>
                                    <i v-if='tag.name=="DirectEntry"'>Direct Entry</i>
                                    <i v-if='tag.name=="Clearing"'>Clearing</i>
                                    <i v-if='tag.name=="Fund"'>香港學生獎學金</i>
                                </span>
                               
                            </div>
                            <div class="responsive-iframe margin-bottom-sm" v-html="article.map">
                                    
                            </div>

                          <!--  <a href='' class="margin-top-lg width-100% color-black">下載學校排名表 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z"/></svg></a> -->


                      </div>
                    </div>
            </div>
      </section>

   <section id='jeat' class='padding-y-xl bg-contrast-lower'>
                <div class="articles">
                  <div class="container max-width-adaptive-lg">
                    <div class="text-left">
                      <h3 class="margin-bottom-lg">相關文章</h3>
                    </div>
                    <div class="grid grid-gap-sm" v-if='article.relatedarticles[0]'>
                      
                      <article class="story col-3@md" v-for='(article,idx) in article.relatedarticles' v-bind:key="idx">
                        <a :href="frontendurl + 'article/' + article.linkslug" class="story__img">
                          <figure class="">
                            <img v-if='article.image' :src="backendurl2 + article.image.url">
                          </figure>
                        </a>
                
                        <div class="story__content">
                          
                  
                          <div class="text-component">
                            <a class='nodecor' :href="frontendurl + 'article/' + article.linkslug">
                                <h4 class="story__title padding-bottom-xs">{{ article.title }}</h4>
                                <span class="text-sm knowmore">了解更多</span>
                            </a>
                          </div>
                  
                          
                        </div>
                      </article>
                         
                    

                    </div>
                    <div class="grid grid-gap-sm" v-if='!article.relatedarticles[0]'>
                      
                      <article class="story col-3@md" v-for='(article,idx) in ranarticles' v-bind:key="idx">
                        <a :href="frontendurl+'article/'+article.slug" class="story__img">
                          <figure class="">
                            <img v-if='article.thumbnail' :src="backendurl2 + article.thumbnail.url">
                          </figure>
                        </a>
                
                        <div class="story__content">
                          
                  
                          <div class="text-component">
                            <a class='nodecor' :href="frontendurl+'article/'+article.slug">
                                <h4 class="story__title padding-bottom-xs">{{ article.title }}</h4>
                                <span class="text-sm knowmore">了解更多</span>
                            </a>
                          </div>
                  
                          
                        </div>
                      </article>
                         
                    

                    </div>


                  </div>
                </div>
              </section>

    </div>
</template>

<script>
import featureSchools from '~/components/featureSchools'
export default {

  components:{
    featureSchools
  },
  head() {
    return {
       title: this.article.name + '｜LINKEDU 領優教育'
    }
  },
data(){
    return{
       backendurl2 : process.env.backendurl2,
       backendurl : process.env.backendurl,
       frontendurl : process.env.frontendurl,
       selectedsubject: 'computer-science',
       typedquery : ''

    }
  },
  async asyncData({ $axios, params }) {
    const articles = await $axios.$get(process.env.backendurl+'foundations?slug='+params.slug)
    const relatedarticles = await $axios.$get(process.env.backendurl+'articles?_limit=12&_sort=date:DESC')
    let article = articles[0];
    let ranarticles = relatedarticles.sort(function() {
     return .5 - Math.random();
    }).slice(0,4); 
    return { article, ranarticles }
  },
  computed:{
    jdate(){
      var d = new Date();
      d.setDate(d.getDate() - 2);
      return d.toISOString().substring(0, 10)
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }

}

</script>