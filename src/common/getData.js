/**
 * Created by perfect on 2017/5/9.
 */
import fetch from '../../src/common/fetch'
import * as newerData from '../../src/data/products-newer'
import * as currentData from '../../src/data/products-current'
import * as fixedData from '../../src/data/products-fixed'
import * as productData from '../../src/data/product-detail'

/**
 * 创建临时数据
 */
const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

var productsNewer, productsCurrent, productsFixed, productDetail

if (process.env.NODE_ENV === 'development') {
  productsNewer = () => setpromise(newerData.newerProducts)
  productsCurrent = () => setpromise(currentData.currentProducts)
  productsFixed = () => setpromise(fixedData.fixedProducts)
  productDetail = (fundCode) => setpromise(productData.productDetail)
} else {
  productsNewer = () => fetch('GET', '../data/products-newer.json', {})
  productsCurrent = () => fetch('GET', '../data/products-current.json', {})
  productsFixed = () => fetch('GET', '../data/products-fixed.json', {})
  productDetail = (fundCode) => fetch('GET', '../data/product-detail.json', {})
}

export {productsNewer, productsCurrent, productsFixed, productDetail}
