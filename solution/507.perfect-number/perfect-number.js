/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
      let sum = 1;
      let size = parseInt(num / 2)
      for (let i = 2;i <= size;i++) {
        if (num % i === 0) {
          console.log(i)
          sum += i
        }
      }
      return (sum === num) && num !== 1
    };