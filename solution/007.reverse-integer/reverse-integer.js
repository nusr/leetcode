/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
      let flag = false
      if (x < 0) {
        x = -x
        flag = true
      }
      x = +x.toString().split('').reverse().join('')
      if (flag) {
        x = -x
      }
      if (x <= 2147483647 && x >= -2147483648) {
        return x
      } else {
        return 0
      }
    };