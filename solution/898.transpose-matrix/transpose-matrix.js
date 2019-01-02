/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
      let result = []
      for (let i = 0;i < A[0].length;i++) {
        let temp = A.map(item => item[i])
        result.push(temp)
      }
      return result
    };