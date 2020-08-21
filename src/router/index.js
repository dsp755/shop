import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import Products from '@/components/Products.vue'
import Cart from '@/components/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/products/',
    name: 'products',
    component: Products,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
