// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../src/router/router'
import {AlertPlugin, ToastPlugin, LoadingPlugin} from 'vux'
import FastClick from 'fastclick'
import App from './App'

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

const router = new VueRouter({
  mode: 'history',
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
