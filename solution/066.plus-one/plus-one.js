/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
      let flag = 0
      let len = digits.length - 1
      for (let i = len;i >= 0;i--) {
        let value = digits[i] + (i === len ? 1 : 0) + flag
        flag = parseInt(value / 10)
        value = value % 10
        digits[i] = value
      }
      while (flag > 0) {
        let value = flag % 10
        flag = parseInt(flag / 10)
        digits.unshift(value)
      }
      return digits
    };