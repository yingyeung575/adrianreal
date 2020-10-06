export const state = () => ({
    menu: ''
   
})

export const actions = {
    async nuxtServerInit ({ commit }, { req }) {
        const menu = await this.$axios.$get(process.env.backendurl+'menu')
        commit('setMenu', menu)
    }
}

export const mutations = {  
  setMenu(state, payload) {
    state.menu = payload
  }
}