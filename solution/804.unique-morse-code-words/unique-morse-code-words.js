/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
      let map = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
      let count = 0
      let obj = {}
      for (let i = 0;i < words.length;i++) {
        let value = words[i]
        let temp = ''
        for (let j = 0;j < value.length;j++) {
          let index = value[j].charCodeAt() - 97
          temp += map[index]
        }
        if (!obj[temp]) {
          count++;
          obj[temp] = 1
        }
      }
      return count
    };