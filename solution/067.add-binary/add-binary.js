/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
      let result = ''
      let lenA = a.length - 1
      let lenB = b.length - 1
      let flag = 0
      while ((lenA >= 0 && lenB >= 0)) {
        let value = ((+a[lenA]) + (+b[lenB])) + flag
        flag = parseInt(value / 2)
        value = value % 2
        result = value + '' + result
        lenA--
        lenB--
      }
      while (lenA >= 0) {
        let value = + a[lenA--] + flag
        flag = parseInt(value / 2)
        value = value % 2
        result = value + '' + result
      }
      while (lenB >= 0) {
        let value = + b[lenB--] + flag
        flag = parseInt(value / 2)
        value = value % 2
        result = value + '' + result
      }
      while (flag > 0) {
        value = flag % 2
        flag = parseInt(flag / 2)
        result = value + '' + result
      }
      return result
    };