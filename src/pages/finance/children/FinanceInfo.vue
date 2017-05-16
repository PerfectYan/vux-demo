<template>
  <div class="finance-info">
    <div class="title">{{financeInfo.title}}</div>
    <div class="content">{{financeInfo.content}}</div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        description: {'title': '产品说明', 'content': '本产品主要投资于各类金融产品、优质债权及收益权资产，受托资金由招商银行全程监管，投资行为严格遵守监管要求，在严控产品风险的前提下为投资者谋求投资收益最大化。'},
        incomeRule: {'title': '收益规则', 'content': '募集期结束后的第一个工作日起息，到期兑付投资本金及相应的收益。预期最高年化收益率详见产品说明书，产品最终收益以到期后兑付值为准。'},
        cashRule: {'title': '兑付规则', 'content': '募集期内不可赎回，兑付资金于到期日后0-3个工作日内转入账户余额。'}
      }
    },
    computed: {
      financeInfo: function () {
        const infoType = this.$route.params.type
        console.log(infoType)
        if (infoType === '0') {
          return this.description
        } else if (infoType === '1') {
          return this.incomeRule
        } else if (infoType === '2') {
          return this.cashRule
        }
      }
    },
    mounted () {
      console.log(this.$route.params)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .finance-info{
    background-color: #fff!important;
    height: 100%;
  }

  .title{
    line-height: 40px;
    padding: 5px 20px 8px;
    font-size: 18px;
    color: #333;
  }

  .content{
    padding: 0 20px;
    line-height: 24px;
    font-size: 15px;
    color: #888;
  }
</style>
