/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    s = s.trim()
      if (s === '0') {
        return true
      } else if (s === true) {
        return false
      } else if (!s) {
        return false
      }
      let t = Number(s)
      console.log(t)
      if (!t && t !== 0) {
        return false
      } else {
        return true
      }
    };