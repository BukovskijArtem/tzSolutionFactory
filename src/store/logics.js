import axios from 'axios'

var state = {
  logics: []
}

var getters = {
  LOGICS: (state) => {
    return state.logics
  }
}

var mutations = {
    SET_LOGICS: (state, payload) => {
        state.logics = payload
    }
}

var actions = {
    GET_LOGICS: async (context) => {
        let result = await axios.get('http://localhost:3000/logics')
        if (result.status === 200) {
          context.commit('SET_LOGICS', result.data)
        }
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
