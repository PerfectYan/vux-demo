<template>
  <div class="profile">
    <h1>{{ msg }}</h1>
    <tabbar class="tab-bar">
      <tabbar-item :link="{path:'/'}">
        <img slot="icon" src="../../assets/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/fund'}">
        <img slot="icon" src="../../assets/icon_nav_article.png">
        <span slot="label">基金</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/finance'}">
        <img slot="icon" src="../../assets/icon_nav_msg.png">
        <span slot="label">理财</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/insurance'}">
        <img slot="icon" src="../../assets/icon_nav_msg.png">
        <span slot="label">保险</span>
      </tabbar-item>
      <tabbar-item badge="2" :link="{path:'/profile'}" selected>
        <img slot="icon" src="../../assets/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

  import {Tabbar, TabbarItem, Loading} from 'vux'

  export default {
    data () {
      return {
        msg: '个人中心'
      }
    },
    components: {
      Loading,
      Tabbar,
      TabbarItem
    },
    mounted () {
      this.$vux.loading.show({
        text: '正在加载...'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 300)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
