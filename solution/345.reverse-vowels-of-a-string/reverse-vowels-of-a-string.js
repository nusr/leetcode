/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let i = 0
  let dataMap = ["a", "e", "i", "o", "u"]
  let result = s.split("")
  let j = result.length - 1
  while (i < j) {
    while (i < j && dataMap.indexOf(result[i].toLowerCase()) < 0) i++
    while (i < j && dataMap.indexOf(result[j].toLowerCase()) < 0) j--
    if (i < j) {
      let temp = result[i]
      result[i] = result[j]
      result[j] = temp
      i++
      j--
    }
  }
  return result.join("")
}