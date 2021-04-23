import axios from 'axios'

var state = {
    respondents: []
}

var getters = {
  RESPONDENTS: (state) => {
    return state.respondents
  }
}

var mutations = {
    SET_RESPONDENTS: (state, payload) => {
        state.respondents = payload
    }
}

var actions = {
    POST_RESPONDENTS: async (context, payload) => {
        let result = await axios.post('http://localhost:3000/respondents', payload)
        context.commit('SET_RESPONDENTS', result.data)
        console.log(payload)
        console.log('Сохранено')
    },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
