/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
      let value = s.split(' ')
      for (let i = 0;i < value.length;i++) {
        value[i] = value[i].split('').reverse().join('')
      }
      return value.join(' ')
    };