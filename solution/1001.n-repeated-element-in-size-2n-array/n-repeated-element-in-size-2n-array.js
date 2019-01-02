/**
 * @param {number[]} A
 * @return {number}
 */
 var repeatedNTimes = function(A) {
        let key = 0;
        let dict = {};
        for (let i = 0; i < A.length; i++) {
          key = A[i];
          if (dict[key]) {
            break;
          } else {
            dict[key] = 1;
          }
        }
        return key;
      };