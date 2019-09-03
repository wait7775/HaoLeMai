// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import VueLazyload from 'vue-lazyload'
import 'jquery'

import VueResource from 'vue-resource'

import './assets/mui/css/mui.min.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(VueLazyload)

// 路由跳转后，页面回到顶部
router.afterEach(() => {
  // these hooks do not get a next function and cannot affect the navigation}
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
