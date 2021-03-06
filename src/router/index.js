import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import List from '@/pages/list/list'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/list',
      name:'List',
      component:List
    },
    {
      path:'/city',
      name:'City',
      component:City
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ]
})
