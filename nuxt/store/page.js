// utilize wp

export const state = () => ({
  single: {}
})

export const mutations = {
  SET_PAGE(state, single) {
    state.single = single
  }
}

export const actions = {
  fetchPage({ commit }, { app, route }) {
    return app.$wp
      .slug()
      .name(route.params.single)
      .then(function(response) {
        console.log(response)
        commit('SET_PAGE', response)
      })
  }
}
