import Vue from 'vue'
import Vuex from 'vuex'
import logics from './logics'
import conditions from './conditions'
import respondents from './respondents'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        logics: logics,
        conditions: conditions,
        respondents: respondents
    }
})
