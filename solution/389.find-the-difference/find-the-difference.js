/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
      let obj = {}

      for (let i = 0;i < t.length;i++) {
        let key = t[i]
        if (obj[key]) {
          obj[key]++
        } else[
          obj[key] = 1
        ]
      }
      for (let i = 0;i < s.length;i++) {
        let key = s[i]
        obj[key]--
      }
      for (let key in obj) {
        if (obj[key] === 1) {
          return key
        }
      }
      return t[0]
    };