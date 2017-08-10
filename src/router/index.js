import Vue from 'vue'
import Router from 'vue-router'
import navBar from '@/components/navBar/navBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: navBar
    }
  ]
})
