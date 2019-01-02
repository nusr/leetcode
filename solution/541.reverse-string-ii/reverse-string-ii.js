/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
      let temp = 0
      for (let i = 0;i < s.length;i = i + 2 * k) {
        let start = i;
        let stop = i + k;
        s = s.slice(0, i) + s.slice(start, stop).split('').reverse().join('') + s.slice(stop, s.length)
      }
      return s
    };