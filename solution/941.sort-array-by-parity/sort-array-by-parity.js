/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
        let i = 0,
          j = A.length - 1,
          temp;
        while (i < j) {
          if (A[i] % 2 == 1) {
            temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            j--;
          } else {
            i++;
          }
        }
        return A;
      };