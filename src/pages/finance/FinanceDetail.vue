<template>
  <div class="fund—detail">
    <h1>{{ msg }}{{ fundcode }}</h1>
  </div>
</template>

<script>

  import {Loading} from 'vux'

  export default {
    data () {
      const fundcode = this.$route.params.id || ''
      return {
        msg: '理财产品详情',
        fundcode: fundcode
      }
    },
    components: {
      Loading
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


</style>
