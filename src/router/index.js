import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Buy from '@/components/buy/index.vue'
import Cart from '@/components/cart/index.vue'
import Cartgory from '@/components/cartgory/index.vue'
import Mine from '@/components/mine/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/cartgory',
      name: 'Cartgory',
      component: Cartgory
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
