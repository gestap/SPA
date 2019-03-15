import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Ad from '@/components/Ads/Ad.vue'
import AdList from '@/components/Ads/AdList.vue'
import NewAd from '@/components/Ads/NewAd.vue'
import Login from '@/components/Auth/Login.vue'
import Registration from '@/components/Auth/Registration.vue'
import Orders from '@/components/User/Orders.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/ad/:id',
    name: 'ad',
    component: Ad
  },
  {
    path: '/list',
    name: 'list',
    component: AdList
  },
  {
    path: '/new',
    name: 'newAd',
    component: NewAd
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  }]
})
