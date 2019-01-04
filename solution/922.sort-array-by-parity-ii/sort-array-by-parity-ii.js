/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
        let i = 0,
          temp,
          j = A.length - 1;
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
        let result = [];
        i = 0;
        j = A.length / 2;
        temp = 0;
        while (temp < A.length) {
          if (temp % 2 == 0) {
            result[temp] = A[i];
            i++;
          } else {
            result[temp] = A[j];
            j++;
          }
          temp++;
        }
        return result;
      };