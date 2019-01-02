/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = -1;
  let j = 0;
  let t;
  while (j < nums.length) {
    if (nums[j] != 0) {
      i++;
      if (i != j) {
        t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
      }
    }
    j++;
  }
};