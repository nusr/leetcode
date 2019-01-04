/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
        let max = 0;
        let len = A.length;
        for (let i = 0; i < len; i++) {
          max += i * A[i];
        }
        for (let i = len - 1; i > 0; i--) {
          let count = 0;
          for (let temp = 0, j = i; temp != len; ) {
            count += A[j] * temp;
            temp++;
            j = (j + 1) % len;
          }
          if (count > max) {
            max = count;
          }
        }
        return max;
      };