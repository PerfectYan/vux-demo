/**
 * Created by perfect on 2017/5/10.
 */
import App from '../App'

const Home = r => require.ensure([], () => r(require('../pages/home/Home')), 'Home')
const Finance = r => require.ensure([], () => r(require('../pages/finance/Finance')), 'Finance')
const FinanceDetail = r => require.ensure([], () => r(require('../pages/finance/children/FinanceDetail')), 'FinanceDetail')
const FinancePay = r => require.ensure([], () => r(require('../pages/finance/children/FinancePay')), 'FinancePay')
const FinanceInfo = r => require.ensure([], () => r(require('../pages/finance/children/FinanceInfo')), 'FinanceInfo')
const Fund = r => require.ensure([], () => r(require('../pages/fund/Fund')), 'Fund')
const FundDetail = r => require.ensure([], () => r(require('../pages/fund/FundDetail')), 'FundDetail')
const Insurance = r => require.ensure([], () => r(require('../pages/insurance/Insurance')), 'Insurance')
const Profile = r => require.ensure([], () => r(require('../pages/profile/Profile')), 'Profile')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: Home
    },
    {
      path: '/fund',
      component: Fund
    }, {
      path: '/fund/detail/:id',
      component: FundDetail
    }, {
      path: '/finance',
      component: Finance
    }, {
      path: '/finance/detail/:fundcode',
      component: FinanceDetail
    }, {
      path: '/finance/info/:type',
      component: FinanceInfo
    }, {
      path: '/finance/pay/:fundcode',
      component: FinancePay
    }, {
      path: '/insurance',
      component: Insurance
    }, {
      path: '/profile',
      component: Profile
    }
  ]
}]
