import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavBar from '@/components/NavBar.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import Cart from '@/components/Cart.vue'

Vue.component('NavBar', NavBar)
Vue.component('BaseIcon', BaseIcon)
Vue.component('Cart', Cart)

const store = Vue.observable({
  allProducts: [],
  selectedProduct: 1,
  cart: {
    items: [],
    add(item) {
      store.cart.items.push(item)
    },
    remove(item) {
      store.cart.items.splice(store.cart.items.indexOf(item), 1)
    }
  }
})

Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
