<template>
  <div class="fund">
    <h1>
      <router-link to="/fund/detail/1">{{ msg }}</router-link>
    </h1>
    <tabbar class="tab-bar">
      <tabbar-item :link="{path:'/'}">
        <img slot="icon" v-if="$route.path === '/'" src="../../assets/home.svg">
        <img slot="icon" v-else src="../../assets/homeDefault.svg">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/fund'}" selected>
        <img slot="icon" v-if="$route.path === '/fund'" src="../../assets/fund.png">
        <img slot="icon" v-else src="../../assets/fundDefault.png">
        <span slot="label">基金</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/finance'}">
        <img slot="icon" v-if="$route.path === '/finance'" src="../../assets/finance.svg">
        <img slot="icon" v-else src="../../assets/financeDefault.svg">
        <span slot="label">理财</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/insurance'}">
        <img slot="icon" v-if="$route.path === '/insurance'" src="../../assets/insurance.png">
        <img slot="icon" v-else src="../../assets/insuranceDefault.png">
        <span slot="label">保险</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/profile'}">
        <img slot="icon" v-if="$route.path === '/profile'" src="../../assets/my.svg">
        <img slot="icon" v-else src="../../assets/myDefault.svg">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  import {Loading, Tabbar, TabbarItem} from 'vux'

  export default {
    data () {
      return {
        msg: '基金首页',
        id: ''
      }
    },
    components: {
      Loading,
      Tabbar,
      TabbarItem
    },
    mounted () {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
