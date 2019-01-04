/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
      let str = N.toString(2)
      let max = 0;
      let flag = 1;
      let i = 0;
      while (i < str.length && str[i] !== '1') i++
      for (i++;i < str.length;i++) {
        let value = str[i]
        if (value === '0') {
          flag++
        } else {
          if (flag > max) {
            max = flag
          }
          flag = 1
        }
      }
      return max
    };