import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content/Content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Content
    }
  ]
})
