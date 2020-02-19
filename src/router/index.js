import Vue from 'vue'
import VueRouter from 'vue-router'
import ProPlayers from '../dashboards/pro-players.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pro-players',
    component: ProPlayers
  },
  {
    path: '/pro-matches',
    name: 'pro-matches',
    component: ()=> import(/* webpackChunkName: "pro-matches" */ '../dashboards/pro-matches.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router
