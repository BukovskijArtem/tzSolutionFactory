import Vue from 'vue'
import Router from 'vue-router'
import conditions from '@/components/Conditions'
import logics from '@/components/Logics'
import parameters from '@/components/Parameters'
import question from '@/components/Question'
import respondents from '@/components/Respondents'
import menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: menu,
      redirect: '/parameters',
      children: [
        {
          path: '/conditions',
          name: 'Conditions',
          component: conditions
        },
        {
          path: '/logics',
          name: 'Logics',
          component: logics
        },
        {
          path: '/parameters',
          name: 'Parameters',
          component: parameters
        },
        {
          path: '/question',
          name: 'Question',
          component: question
        },
        {
          path: '/respondents',
          name: 'Respondents',
          component: respondents
        }
      ]
    }
  ]
})
