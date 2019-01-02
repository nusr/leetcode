/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
      let j = 0;
        for (let i = 1; i < nums.length; i++) {
          j = i - 1;
          let tmp = nums[i];
          while (j >= 0 && tmp < nums[j]) {
            nums[j + 1] = nums[j];
            j--;
          }
          nums[j + 1] = tmp;
        }
      let sum = 0;
      for (let i = 0;i < nums.length;i = i + 2) {
        sum += nums[i]
      }
      return sum;
    };