<template>
  <tabbar class="">
    <tabbar-item :link="{path:'/'}">
      <img slot="icon" src="../assets/icon_nav_button.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/finance'}">
      <img slot="icon" src="../assets/icon_nav_msg.png">
      <span slot="label">理财</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/fund'}">
      <img slot="icon" src="../assets/icon_nav_article.png">
      <span slot="label">基金</span>
    </tabbar-item>
    <tabbar-item badge="2" :link="{path:'/profile'}">
      <img slot="icon" src="../assets/icon_nav_cell.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>

  import {Tabbar, TabbarItem} from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    methods: {},
    watch: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #ff5b05;
  }
</style>
