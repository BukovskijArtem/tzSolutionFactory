import axios from 'axios'

var state = {
    conditions: []
}

var getters = {
  CONDITIONS: (state) => {
    return state.conditions
  }
}

var mutations = {
    SET_CONDITIONS: (state, payload) => {
        state.conditions = payload
    }
}

var actions = {
    GET_CONDITIONS: async (context) => {
        let result = await axios.get('http://localhost:3000/conditions')
        if (result.status === 200) {
          context.commit('SET_CONDITIONS', result.data)
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
