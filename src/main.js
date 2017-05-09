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
import Insurance from './pages/insurance/Insurance'
import Profile from './pages/profile/Profile'
import FundDetail from './pages/fund/FundDetail'
import FinanceDetail from './pages/finance/FinanceDetail'

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/fund',
  component: Fund
}, {
  path: '/finance',
  component: Finance
}, {
  path: '/insurance',
  component: Insurance
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/fund/detail/:id',
  component: FundDetail
}, {
  path: '/finance/detail/:id',
  component: FinanceDetail
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
