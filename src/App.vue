<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less">

  *{
    margin: 0 auto;
  }

  html,body{
    height: 100%;
  }

  body {
    background-color: #f1f5f8;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a{
    text-decoration: none;
  }

  .tab-bar{
    position: fixed!important;
  }

  #app{
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

</style>
