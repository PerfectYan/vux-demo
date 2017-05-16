<template>
  <div class="finance—detail">
    <view-box class="product-detail">
      <card>
        <div slot="content" class="fund-name">{{product.fundname}}</div>
        <p slot="content" class="risk-level"><img src="../../../assets/risk-normal.png"/><span>{{product.fundrisklevelname}}</span>
        </p>
        <p slot="content" class="annualrate text-center">{{product.annualrate}}<span>%</span></p>
        <p slot="content" class="text-center">预期年化收益</p>
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-l vux-1px-r">
            起投金额(元)
            <br/>
            <span>{{fixMoney(product.mintendtenderedsum)}}</span>
          </div>
          <div class="vux-1px-r">
            可投金额(元)
            <br/>
            <span>{{fixMoney(product.lefthasinvestamount)}}</span>
          </div>
          <div class="vux-1px-r">
            投资期限(天)
            <br/>
            <span>{{product.deadline}}</span>
          </div>
        </div>
      </card>
      <group>
        <div class="progress">
          <div class="invest">
            <img src="../../../assets/invest.svg">
            <p>开始募集</p>
            <p>{{dateFormatStr(product.begintranstime)}}</p>
          </div>
          <div class="line line1">
            <img src="../../../assets/Line@2x.png">
          </div>
          <div class="interest">
            <img src="../../../assets/interest.svg">
            <p>开始计息</p>
            <p>{{dateFormatStr(product.interestdate)}}</p>
          </div>
          <div class="line line2">
            <img src="../../../assets/Line@2x.png">
          </div>
          <div class="redemption">
            <img src="../../../assets/redemption.svg">
            <p>到期回款</p>
            <p>{{dateFormatStr(product.expiredate)}}</p>
          </div>
        </div>
      </group>
      <group>
        <cell title="还款方式">{{product.paymentmodename}}</cell>
        <cell v-show="product.singlesubuplimit" title="购买上限">{{fixMoney(product.singlesubuplimit)}}</cell>
      </group>
      <group>
        <cell title="产品说明" is-link :link="{path:'/finance/info/0'}" class="is-link"></cell>
        <cell title="收益规则" is-link :link="{path:'/finance/info/1'}" class="is-link"></cell>
        <cell title="兑付规则" is-link :link="{path:'/finance/info/2'}" class="is-link"></cell>
        <cell title="更多产品详情" is-link></cell>
      </group>
    </view-box>
    <router-link :to="'/finance/pay/' + product.fundcode ">
      <x-button id="btn-buy" type="primary">立即购买</x-button>
    </router-link>
  </div>
</template>

<script>

  import {Loading, ViewBox, XButton, Card, Group, Cell} from 'vux'
  import {productDetail} from '../../../common/getData'

  export default {
    data () {
      const fundCode = this.$route.params.fundcode || ''
      return {
        msg: '理财产品详情',
        fundCode: fundCode,
        detailData: null
      }
    },
    components: {
      Loading,
      ViewBox,
      XButton,
      Card,
      Cell,
      Group
    },
    computed: {
      product: function () {
        if (this.detailData) {
          this.setParameter('productDetail', JSON.stringify(this.detailData.kdjson.items[0]))
          return this.detailData.kdjson.items[0]
        } else {
          return {}
        }
      }
    },
    methods: {
      async getProductDetail () {
        this.detailData = await productDetail(this.fundCode)
        this.$vux.loading.hide()
      },
      fixMoney (money, digit) { // 格式化金额如：1,100,000.00
        if (money === null) {
          return ''
        }
        money = money + ''
        var array = money.split('.')
        var s = array[0]
        var r = ''
        var m = s.substring(0, 1)
        if (m === '-') {
          s = s.substring(1)
        } else {
          m = ''
        }
        var f = s.split('').reverse()
        for (var i = 0; i < f.length; i++) {
          r += f[i] + ((i + 1) % 3 === 0 && (i + 1) !== f.length ? ',' : '')
        }
        var after = ''
        if (array.length > 1) {
          after = array[1]
          if (after.length > digit) {
            after = after.substring(0, digit)
          }
        }
        return m + r.split('').reverse().join('') + (array.length > 1 ? '.' + after : '')
      },
      dateFormatStr (dateString) {
        if (dateString) {
          return dateString.substring(0, 4) + '.' + dateString.substring(4, 6) + '.' + dateString.substring(6, 8)
        }
      },
      setParameter: function (key, value) {
        window.sessionStorage.setItem(key, value)
      }
    },
    mounted () {
      this.$vux.loading.show({
        text: '正在加载...'
      })
      this.getProductDetail()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .weui-panel {
    font-size: 12px;
    padding: 15px 15px 0;
  }

  .weui-cell {
    padding: 15px;
  }


  .finance—detail {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .product-detail {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .card-demo-flex {
    display: flex;
  }

  .card-demo-content01 {
    padding: 25px 0 16px;
  }

  .card-demo-content01 span {
    font-size: 14px;
    padding-top: 2px;
  }

  .card-padding {
    padding: 15px;
  }

  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    line-height: 18px;
  }

  .card-demo-flex span {
    display: inline-block;
    color: #FF5155;
    height: 20px;
    line-height: 20px;
  }

  .fund-name {
    font-size: 14px;
    line-height: 24px;
  }

  .risk-level {
    position: relative;
    overflow: hidden;
    padding-top: 2px;
  }

  .risk-level img {
    float: left;
    width: 10px;
    height: 10px;
    margin: 2px 2px 0 0;
  }

  .risk-level span {
    float: left;
    height: 14px;
    line-height: 14px;
  }

  .annualrate {
    line-height: 46px;
    padding: 17px 0 10px 0;
    color: #FF5155;
    font-size: 46px;
  }

  .annualrate span {
    font-size: 28px;
  }

  .progress {
    width: 100%;
    overflow: hidden;
    padding: 15px 8% 0;
    position: relative;
    text-align: center;
  }

  .progress div:not(.line) {
    width: 63px;
    overflow: hidden;
    background: #fff;
  }

  .progress .invest {
    float: left;
  }

  .progress .interest {
    display: inline-block;
  }

  .progress .redemption {
    float: right;
  }

  .progress div:not(.line) img {
    width: 35px;
    height: 35px;
    margin-bottom: 11px;
  }

  .progress div:not(.line) p:nth-child(3) {
    font-size: 12px;
    color: #9a9a9a;
    line-height: 19px;
    margin-bottom: 9px;
  }

  .progress .line1 {
    width: 35.34%;
    height: 3px;
    left: 14.66%;
    top: 20px;
    position: absolute;
    padding: 0 20px 0 30px;
    z-index: 1;
    text-align: center;
  }

  .progress .line2 {
    width: 35.34%;
    height: 3px;
    right: 14.66%;
    top: 20px;
    position: absolute;
    padding: 0 30px 0 20px;
    z-index: 1;
  }

  .progress .line img {
    width: 90%;
    height: 3px;
  }

  .is-link{
    cursor: pointer;
  }

</style>
