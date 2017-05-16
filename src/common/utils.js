/**
 * Created by perfect on 2017/5/15.
 */

export function fixMoney (money, digit) { // 格式化金额如：1,100,000.00
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
}

export function dateFormatStr (dateString) {
  if (dateString) {
    return dateString.substring(0, 4) + '.' + dateString.substring(4, 6) + '.' + dateString.substring(6, 8)
  }
}
