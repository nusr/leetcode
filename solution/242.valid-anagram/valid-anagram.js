/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
      let temp = s.split('').sort().join('')
      let temp2 = t.split('').sort().join('')
      // console.log(temp, temp2)
      return temp === temp2
    };