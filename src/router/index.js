import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Buy from '@/components/buy/index.vue'
import Cart from '@/components/cart/index.vue'
import Category from '@/components/category/index.vue'
import Mine from '@/components/mine/index.vue'

import Detail from '@/common/detail/detail.vue'
import Top from '@/components/home/components/category/top.vue'
import Everyweek from '@/components/home/components/category/everyweek.vue'
import Brand from '@/components/home/components/category/brand.vue'
import Ticket from '@/components/home/components/category/ticket.vue'
import Welfare from '@/components/home/components/category/welfare.vue'
import Global from '@/components/home/components/category/global.vue'

import Register from '@/components/mine/register.vue'
import Forget from '@/components/mine/forget.vue'
// 列表页
import List from '@/components/list/index.vue'
import ListChange from '@/components/list/change.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/everyweek',
      name: 'Everyweek',
      component: Everyweek
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare
    },
    {
      path: '/global',
      name: 'Global',
      component: Global
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/listchange',
      name: 'ListChange',
      component: ListChange

    }
  ]
})
