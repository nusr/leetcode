/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
      let count = 0
      for (let i = 2;i < n;i++) {
        let flag = false
        let max = parseInt(Math.sqrt(i))
        for (let j = 2;j <= max;j++) {
          if (i % j === 0) {
            flag = true
            break;
          }
        }
        if (!flag) {
          count++
        }
      }
      return count
    };