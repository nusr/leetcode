/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
      let result = -1
      let obj = {}
      for (let i = 0;i < s.length;i++) {
        let key = s[i]
        if (obj[key]) {
          obj[key]++
        } else {
          obj[key] = 1
        }
      }
      for (let i = 0;i < s.length;i++) {
        let key = s[i]
        if (obj[key] === 1) {
          result = i;
          break;
        }
      }
      return result
    };