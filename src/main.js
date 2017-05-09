// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import {AlertPlugin, ToastPlugin, LoadingPlugin} from 'vux'
import FastClick from 'fastclick'
import App from './App'
import Home from './pages/home/Home'
import Finance from './pages/finance/Finance'
import Fund from './pages/fund/Fund'
import Profile from './pages/profile/Profile'
import FundDetail from './pages/fund/FundDetail'

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/finance',
  component: Finance
}, {
  path: '/fund',
  component: Fund
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/fund/detail/:id',
  component: FundDetail
}]

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
