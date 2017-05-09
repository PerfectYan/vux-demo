<template>
  <div class="finance">
    <view-box class="finance-products">
      <section class="products-newer products-ctn">
        <div class="product-category">新手理财</div>
        <ul>
          <li v-for="product in newerProducts">
            <a :href="'/finance/detail/' + product.fundcode ">
              <div class="content-left">
                <p class="fund-rate orange">
                  <span>{{parseInt(product.annualrate).toFixed(2)}}</span><span class="percent">%</span>
                </p>
                <p class="rate-text">预期年化收益率</p>
              </div>
              <div class="content-right">
                <p class="fund-desc">新人专享 收益任性</p>
                <p class="fund-info">
                  <span class="orange">{{product.mintendtenderedsum}}</span>元起投 期限<span class="orange">{{product.deadline}}</span>{{product.deadlineunitname}}</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section class="products-current products-ctn">
        <div class="product-category">活期理财</div>
        <ul>
          <li v-for="product in currentProducts">
            <a :href="'/finance/detail/' + product.fundcode ">
              <div class="content-left">
                <p class="fund-rate orange">
                  <span>{{parseInt(product.annualrate).toFixed(2)}}</span><span class="percent">%</span>
                </p>
                <p class="rate-text">昨日年化收益率</p>
              </div>
              <div class="content-right">
                <p class="fund-desc">灵活稳健 转出实时到账</p>
                <p class="fund-info">
                  <span class="orange">{{product.mintendtenderedsum}}元</span> 起投
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section class="products-fixed products-ctn">
        <div class="product-category">定期理财</div>
        <ul>
          <li v-for="product in fixedProducts">
            <a :href="'/finance/detail/' + product.fundcode ">
              <h4 class="fund-name">{{product.fundname}}</h4>
              <div class="fund-content">
                <div class="content-left">
                  <p class="fund-rate orange">
                    <span>{{parseInt(product.annualrate).toFixed(2)}}</span><span class="percent">%</span>
                  </p>
                  <p class="rate-text">{{product.mintendtenderedsum}}元起投
                    期限{{product.deadline}}{{product.deadlineunitname}}
                  </p>
                </div>
                <div class="content-right">
                  <div class="product-status" v-if="product.fundstatus === '0' || product.fundstatus === '1' ">
                    <img src="../../assets/product_plan.png"/>
                    <div class="time">
                      <span>{{subStringInt(product.begintranstime, 4, 6)}}月{{subStringInt(product.begintranstime, 6, 8)}}日</span>
                      <span>{{subStringInt(product.begintranstime, 8, 10)}}:{{subStringInt(product.begintranstime, 10, 12)}}</span>
                      <span>开售</span>
                    </div>
                  </div>
                  <div class="product-status" v-else-if="product.fundstatus === '2'">
                    <x-circle :percent="percent" :stroke-width="2" :trail-width="2"
                              :stroke-color="strokeColor" trail-color="#ececec">
                      <span :style="{color: strokeColor}">{{ investedPercent(product.amountprop, product.hasinvestamount, product.gavefundtovol)}}%</span>
                    </x-circle>
                  </div>
                  <div class="product-status"
                       v-else-if="product.fundstatus === '3' || product.fundstatus === '4' || product.fundstatus === '5' || product.fundstatus === '7' ">
                    <img src="../../assets/product_over.png"/>
                  </div>
                  <div class="product-status" v-else-if="product.fundstatus === '6' ">
                    <img src="../../assets/product_finish.png">
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>

    </view-box>
    <tabbar class="tab-bar">
      <tabbar-item :link="{path:'/'}">
        <img slot="icon" src="../../assets/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/fund'}">
        <img slot="icon" src="../../assets/icon_nav_article.png">
        <span slot="label">基金</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/finance'}" selected>
        <img slot="icon" src="../../assets/icon_nav_msg.png">
        <span slot="label">理财</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/insurance'}">
        <img slot="icon" src="../../assets/icon_nav_msg.png">
        <span slot="label">保险</span>
      </tabbar-item>
      <tabbar-item badge="2" :link="{path:'/profile'}">
        <img slot="icon" src="../../assets/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

  import {ViewBox, Loading, Tabbar, TabbarItem, XCircle} from 'vux'
  import {productsNewer, productsCurrent, productsFixed} from '../../common/getData'

  export default {
    data () {
      return {
        msg: '理财首页',
        newerData: null,
        currentData: null,
        fixedData: null,
        strokeColor: '#04BE02',
        percent: 0,
        fundstatus: null
      }
    },
    components: {
      ViewBox,
      Loading,
      Tabbar,
      TabbarItem,
      XCircle
    },
    computed: {
      newerProducts: function () {
        if (this.newerData) {
          return this.newerData.kdjson.items
        } else {
          return null
        }
      },
      currentProducts: function () {
        if (this.currentData && this.currentData.kdjson.items) {
          return this.currentData.kdjson.items
        } else {
          return null
        }
      },
      fixedProducts: function () {
        if (this.fixedData && this.fixedData.kdjson.items) {
          return this.fixedData.kdjson.items
        } else {
          return null
        }
      }
    },
    methods: {
      async initData () {
        this.newerData = await productsNewer()
        this.currentData = await productsCurrent()
        this.fixedData = await productsFixed()
        this.$vux.loading.hide()
      },
      investedPercent (value, hasinvestamount, gavefundtovol) {
        if (isNaN(value) === false) {
          value = parseFloat(value) * 100
          if (value < 1 && hasinvestamount > 0) {
            return 1
          } else if (value >= 1 && value <= 99) {
            return Math.round(value)
          } else if (value > 99 && parseFloat(hasinvestamount) < parseFloat(gavefundtovol)) {
            return 99
          } else {
            return value.toFixed(0)
          }
        }
        return ''
      },
      subStringInt (str, start, end) {
        return parseInt(str.toString().substring(start, end))
      }
    },
    mounted () {
      this.$vux.loading.show({
        text: '正在加载...'
      })
      this.initData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .orange {
    color: #ff632c;
  }

  .finance {
    height: 100%;
  }

  .weui-tab__panel {
    padding-bottom: 53px !important;
  }

  .product-category {
    padding-left: 20px;
    line-height: 39px;
    border-left: 2px solid #0095ff;
    text-align: left;
    border-bottom: 1px solid #eaeaea;
  }

  .products-ctn {
    background-color: #fff;
    margin-bottom: 10px;
  }

  .products-ctn ul li {
    display: block;
    border-bottom: 1px solid #eaeaea;
  }

  .products-ctn ul li:last-child {
    border-bottom: none;
  }

  .products-ctn ul li a {
    display: block;
    height: 100%;
    position: relative;
    overflow: hidden;
    padding: 20px 0;
  }

  .content-left {
    width: 45%;
    float: left;
  }

  .content-left p {
    padding-left: 20px;
  }

  .content-left .fund-rate {
    font-size: 32px;
    line-height: 24px;
    font-family: "Pingfang-SC-Light";

  }

  .content-left .fund-rate .percent {
    font-size: 18px;
  }

  .rate-text, .fund-info {
    font-size: 12px;
    color: #666;
  }

  .content-right {
    width: 55%;
    float: right;
  }

  .content-right p {
    padding-right: 20px;

  }

  .content-right .fund-desc {
    line-height: 24px;
    color: #333;
    margin-bottom: 5px;
  }

  .fund-name {
    padding: 0 0 10px 20px;
    line-height: 16px;
    font-size: 16px;
    color: #333;
  }

  .fund-content {
    position: relative;
  }

  .product-status {
    width: 56px;
    height: 56px;
    position: absolute;
    right: 40px;
    top: -24px
  }

  .product-status img {
    width: 100%;
    display: block;
  }

  .product-status .time {
    color: #ff632c;
    text-align: center;
    transform: rotate(-25deg);
    position: absolute;
    right: .1rem;
    bottom: .8rem;
    font-size: 12px;
  }

</style>
