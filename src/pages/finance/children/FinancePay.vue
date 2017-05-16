<template>
  <div class="finance—pay">
    <view-box class="product-pay">
      <card>
        <div slot="content" class="fund-name">{{productDetail.fundname}}</div>
        <!--<p slot="content" class="risk-level">{{productDetail.distributorname }}</p>-->
        <p slot="content" class="distributor">由招银融资方1提供</p>
        <div slot="content" class="sum text-center">
          <input id="payment" type="number" placeholder="请输入购买数量" v-model="amount">
        </div>
        <div slot="content" class="text-center description">
          {{fixMoney(productDetail.mintendtenderedsum,0)}}元起投，投资金额为{{productDetail.smallestflowunit}}的倍数
        </div>
      </card>
      <group title="支付详情">
        <cell title="抵扣券(元)" :inline-desc="voucherDesc"></cell>
        <div class="pay-balance weui-cell is-link vux-tap-active">
          <div class="weui-cell__hd"></div>
          <div class="vux-cell-bd vux-cell-primary">
            <p>
              <label class="vux-label">账户余额支付(元)</label>
            </p>
            <span class="vux-label-desc" is-loading>可用 {{fixMoney(payInfo.available_amount)}}</span>
          </div>
          <div class="weui-cell__ft">{{cost}}</div>
        </div>
        <div class="pay-way weui-cell is-link vux-tap-active weui-cell_access" @click="showPayWaySheet">
          <div class="weui-cell__hd"></div>
          <div class="vux-cell-bd vux-cell-primary">
            <p>
              <label class="vux-label">付款方式(元)</label>
            </p>
            <span class="vux-label-desc">{{bankList.bank_name}}({{bankList.bank_account.substring(bankList.bank_account.length - 4, bankList.bank_account.length)}})</span>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </group>

      <div class="agreement">
        <input type="checkbox" checked/>
        <span>同意 <a href="https://m.mbfae.com/zzlc/pages/agreement.html">《认购协议》</a>、<a href="https://m.mbfae.com/zzlc/pages/agreement.html">《风险揭示书》</a>、<a href="https://m.mbfae.com/zzlc/pages/agreement.html">《承诺函》</a></span>
      </div>
      <x-button id="btn-pay" type="primary">确定</x-button>
    </view-box>
    <actionsheet v-model="showPayWay" :menus="payWayMenu" :close-on-clicking-mask="false" show-cancel></actionsheet>
  </div>
</template>

<script>

  import {Loading, ViewBox, XButton, Card, Group, Cell, Actionsheet} from 'vux'
  import {productPay} from '../../../common/getData'

  export default {
    data () {
      const fundCode = this.$route.params.fundcode || ''
      return {
        showPayWay: false,
        payWayMenu: [
          {
            label: '<span style="color:#666;font-size: 14px">付款详情</span>',
            type: 'info'
          },
          {
            label: '<p style="color:#666;font-size: 14px">活期理财(元)</p><p slot="content" title="productPay.current_balance"></p>'
          },
          {
            label: 'Defaaaault'
          }
        ],
        payData: {},
        payInfo: {},
        fundCode: fundCode,
        voucherDesc: '该产品无可使用的抵扣券',
        cost: '',
        voucher: 0,
        amount: ''
      }
    },
    components: {
      Loading,
      ViewBox,
      XButton,
      Card,
      Cell,
      Group,
      Actionsheet
    },
    computed: {
      productDetail: function () {
        return JSON.parse(this.getParameter('productDetail'))
      },
      bankList: function () {
        return this.payData.kdjson.items.bank_list[0]
      }
    },
    methods: {
      async getProductPay () {
        this.payData = await productPay(this.fundCode)
        this.payInfo = this.payData.kdjson.items
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
      getParameter: function (key) {
        var value = window.sessionStorage.getItem(key)
        if (!value || value === '') {
          return ''
        }
        return value
      },
      showPayWaySheet: function () {
        this.showPayWay = true
      }
    },
    mounted () {
      this.$vux.loading.show({
        text: '正在加载...'
      })
      this.getProductPay()
      this.cost = this.amount - this.voucher
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .weui-panel {
    font-size: 12px;
    padding: 15px 15px 20px;
  }

  .product-pay .weui-cells__title {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .weui-cell {
    padding: 15px;
  }

  .fund-name {
    font-size: 14px;
    line-height: 24px;
  }

  .product-pay input[type="number"] {
    width: 50%;
    height: 40px;
    line-height: 30px;
    padding: 5px 0;
    text-align: center;
    transition: all .2s ease-in-out;
    -webkit-appearance: none;
    border: 1px solid #eaeaea;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    font-size: 16px;
    color: #FF5155;
  }

  .product-pay input::-webkit-input-placeholder {
    font-size: 14px;
  }

  .sum {
    padding: 20px 0;
  }

  .agreement{
    margin: 10px 15px 0;
    line-height: 20px;
  }

  .agreement input{
    width: 14px;
  }

  .agreement span a{
    color: #0095ff;
  }

</style>
