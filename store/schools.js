export const state = () => ({
    boardingtypequery: '',
    boardingfilter1: [],
    universitytypequery: '',
    universityfilter1: [],
    summertypequery: '',
    summerfilter1: [],
    foundationtypequery: '',
    foundationfilter1: [],
    internationalonetypequery: '',
    internationalonefilter1: [],
})

export const mutations = {  
  setBoarding(state, payload) {
    state.boarding = payload
  },
  updateboardingtypequery(state, payload) {
    state.boardingtypequery = payload
  },
  updateboardingfilter1(state, payload) {
    state.boardingfilter1 = payload
  },

  setUniversity(state, payload) {
    state.university = payload
  },
  updateuniversitytypequery(state, payload) {
    state.universitytypequery = payload
  },
  updateuniversityfilter1(state, payload) {
    state.universityfilter1 = payload
  },

  setSummer(state, payload) {
    state.summer = payload
  },
  updatesummertypequery(state, payload) {
    state.summertypequery = payload
  },
  updatesummerfilter1(state, payload) {
    state.summerfilter1 = payload
  },

  setFoundation(state, payload) {
    state.foundation = payload
  },
  updatefoundationtypequery(state, payload) {
    state.foundationtypequery = payload
  },
  updatefoundationfilter1(state, payload) {
    state.foundationfilter1 = payload
  },

  setInternationalone(state, payload) {
    state.internationalone = payload
  },
  updateinternationalonetypequery(state, payload) {
    state.internationalonetypequery = payload
  },
  updateinternationalonefilter1(state, payload) {
    state.internationalonefilter1 = payload
  },
}

/*
export const actions = {  
    async setBoarding(context) {
        const universities = await this.$axios.$get(process.env.backendurl+'boarding-schools') 
        context.commit('setBoarding',universities)
    }
}

export const getters = {  
    boardingschools(state){
      if (state.boarding)
          return state.boarding
   
    }
}
*/