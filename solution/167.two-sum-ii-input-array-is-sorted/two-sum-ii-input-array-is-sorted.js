/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
      let i = 0;
      let j = numbers.length - 1;
      while (i < j) {
        let sum = numbers[i] + numbers[j];
        if (sum === target) {
          break;
        } else if (sum > target) {
          j--
        } else {
          i++
        }
      }
      return [i + 1, j + 1]
    };