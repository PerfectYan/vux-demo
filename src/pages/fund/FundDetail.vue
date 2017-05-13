<template>
  <div class="fund—detail">
    <h1>{{ msg }}{{ id }}</h1>
  </div>
</template>

<script>

  import {Loading} from 'vux'

  export default {
    data () {
      const id = this.$route.params.id || ''
      return {
        msg: '基金详情',
        id: id
      }
    },
    components: {
      Loading
    },
    mounted () {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
