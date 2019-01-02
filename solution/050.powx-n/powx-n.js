/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {

      if (n === 0) {
        return 1
      } else if (n == 1) {
        return x
      } else if (n === -1) {
        return 1 / x
      } else {
        let mod = n % 2
        let temp = x * x
        if (mod === 0) {
          return myPow(temp, n / 2)
        } else {
          return myPow(temp, (n - 1) / 2) * x
        }
      }
    };