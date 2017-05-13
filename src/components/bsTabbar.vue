<template>
  <tabbar class="">
    <tabbar-item :link="{path:'/'}" selected>
      <img slot="icon" src="../assets/icon_nav_button.png" :selected="$route.path =='/' ? 'selected' : ''">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/fund'}" :selected="$route.path =='/fund' ? 'selected' : ''">
      <img slot="icon" src="../assets/icon_nav_article.png">
      <span slot="label">基金</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/finance'}" :selected="$route.path =='/finance' ? 'selected' : ''">
      <img slot="icon" src="../assets/icon_nav_msg.png">
      <span slot="label">理财</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/insurance'}" :selected="$route.path =='/insurance' ? 'selected' : ''">
      <img slot="icon" src="../assets/icon_nav_msg.png">
      <span slot="label">保险</span>
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
    mounted: function () {
      console.log(this.$route.path)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
