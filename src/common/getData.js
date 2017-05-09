/**
 * Created by perfect on 2017/5/9.
 */
import fetch from '../../src/common/fetch'
import * as newerData from '../../src/data/products-newer'
import * as currentData from '../../src/data/products-current'
import * as fixedData from '../../src/data/products-fixed'

/**
 * 创建临时数据
 */
const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

var productsNewer, productsCurrent, productsFixed

if (process.env.NODE_ENV === 'development') {
  productsNewer = () => setpromise(newerData.newerProducts)
  productsCurrent = () => setpromise(currentData.currentProducts)
  productsFixed = () => setpromise(fixedData.fixedProducts)
} else {
  productsNewer = fetch('GET', '../data/products-newer.json', {})
  productsCurrent = fetch('GET', '../data/products-current.json', {})
  productsFixed = fetch('GET', '../data/products-fixed.json', {})
}

export {productsNewer, productsCurrent, productsFixed}
