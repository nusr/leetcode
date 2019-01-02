/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
      let i = 0;
      while (i < A.length && A[i] <= A[i + 1]) i++
      return i
    };