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
  fetchPage({ commit }, { app, route, error }) {

    const response = app.$wp
      .slug()
      .name(route.params.single)
      .then(function(response) {
        commit('SET_PAGE', response)
      })
      .catch(e => {
        console.error(e.message)
        error({
          statusCode: 500,
          message: 'Woops there was a problem, please try again later'
        })
      })

    return response
  }
}
