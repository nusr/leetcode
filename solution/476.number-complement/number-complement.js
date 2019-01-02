/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
      let value = num.toString(2)
      let temp = ''
      for (let i = 0;i < value.length;i++) {
        temp += ~~value.charAt(i) ? '0' : '1'
      }
      return parseInt(temp, 2)
    };