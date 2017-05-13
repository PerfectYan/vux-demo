<template>
  <div class="home">
    <div class="vux-demo">
      <img class="logo" src="../../assets/vux_logo.png">
      <h1></h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" @click.native="showToast" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">{{'New Message'}}</span>
          <badge text="8"></badge>
        </div>
      </cell>
    </group>
    <tabbar class="tab-bar">
      <tabbar-item :link="{path:'/'}" selected>
        <img slot="icon" v-if="$route.path === '/'" src="../../assets/home.svg">
        <img slot="icon" v-else src="../../assets/homeDefault.svg">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/fund'}">
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
  </div>
</template>

<script>

  import {Tabbar, TabbarItem, Toast, Alert, Badge, Group, Cell, TransferDomDirective as TransferDom} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Toast,
      Alert,
      Group,
      Cell,
      Badge,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        msg: 'Hello World!',
        show: false,
        isLoading: false
      }
    },
    methods: {
      showAlert () {
        this.$vux.alert.show({
          title: 'VUX is Cool',
          content: 'Do you agree?',
          onShow () {
            console.log('Alert: I\'m showing')
          },
          onHide () {
            console.log('Alert: I\'m hiding now')
          }
        })
      },
      showToast () {
        this.$vux.toast.show({
          text: '暂无权限',
          type: 'warn',
          onShow () {
            console.log('Toast: I\'m loading')
          },
          onHide () {
            console.log('Toast: I\'m hiding')
          }
        })
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      }
    }
  }

</script>

<style>
  .vux-demo {
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
