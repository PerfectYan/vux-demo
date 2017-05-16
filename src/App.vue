<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {}
</script>

<style>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body{
    height: 100%;
  }

  body {
    font-family: "PingFang SC-Light";
    font-size: 14px;
    background-color: #f1f5f8;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  h1{
    font-weight: normal;
  }

  a{
    text-decoration: none;
  }

  img{
    display: inline-block;
    height: 100%;
  }

  ::-webkit-scrollbar{
    display: none;
  }

  .text-center{
    text-align: center;
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
    overflow: scroll;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }

  .weui-cells {
    font-size: 14px !important;
  }

  .weui-cells:before{
    border-top: none!important;
  }

  .weui-cells:after{
    border-bottom: none!important;
  }

  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color: #3a92ff!important;
  }

  .weui-btn{
    position: fixed!important;;
    left: 0;
    bottom: 0;
    line-height: 2.8!important;
    border-radius: 0!important;
    background-color: #FF5155!important;
    cursor: pointer;
  }

</style>
