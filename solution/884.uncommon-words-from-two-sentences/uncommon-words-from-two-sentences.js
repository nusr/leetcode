/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
      let temp = A.split(' ').concat(B.split(' '))
      let obj = {}
      let result = []
      for (let i = 0;i < temp.length;i++) {
        let value = temp[i]
        if (obj[value]) {
          obj[value]++
        } else {
          obj[value] = 1
        }
      }
      Object.keys(obj).forEach(key => {
        if (obj[key] === 1) {
          result.push(key)
        }
      })
      return result
    };