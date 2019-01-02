/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let countA = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      countA++
    }
  }
  return !(countA > 1 || s.indexOf("LLL") >= 0)
}