import gql from 'graphql-tag'
export const state = () => ({
  entities: {}
})

export const mutations = {
  setEntities(state, payload) {
    state.entities = payload
  }
}

export const getters = {
  list(state) {
    return state.entities
  }
}

export const actions = {

  async list({commit}) {
    try {
      commit('setResponseError', false, {root: true})
      const {data} = await this.$axios.get('/api/vf_apps')

      commit('setEntities', data)
    } catch (e) {
      commit('setResponseError', e, {root: true})
    }
  },
  async create({commit}, payload) {
    try {
      commit('setResponseError', false, {root: true})
      await this.$axios.post('/api/vf_apps_create', payload)

    } catch (e) {
      commit('setResponseError', e, {root: true})
    }
  },
  async remove({commit}, payload) {
    try {
      commit('setResponseError', false, {root: true})
      await this.$axios.post('/api/vf_apps_remove', payload)

    } catch (e) {
      commit('setResponseError', e, {root: true})
    }
  }
}
