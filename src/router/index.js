import Vue from 'vue'
import Router from 'vue-router'
import FileNotFound from '@/components/FileNotFound'
import Home from '@/components/Home'
import PrivatePage from '@/components/PrivatePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'FileNotFound',
      component: FileNotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/privat',
      name: 'PrivatePage',
      component: PrivatePage
    }
  ]
})
