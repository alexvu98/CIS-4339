import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import North from '@/components/North'
import South from '@/components/South'
import East from '@/components/East'
import West from '@/components/West'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/north',
      name: 'North',
      component: North
    },
    {
      path: '/south',
      name: 'South',
      component: South
    },
    {
      path: '/east',
      name: 'East',
      component: East
    },
    {
      path: '/west',
      name: 'West',
      component: West
    }
  ]
})
