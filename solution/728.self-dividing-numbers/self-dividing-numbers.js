/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
      let result = []
      let i = left
      for (;i <= right;i++) {
        let temp = i.toString()
        let j = 0
        for (;j < temp.length;j++) {
          let value = ~~temp.charAt(j)
          if (i % value !== 0) {
            break;
          }
        }
        if (j === temp.length) {
          result.push(i)
        }
      }
      return result
    };