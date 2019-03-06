import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/',
      name:'首页',
      component: Home
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
