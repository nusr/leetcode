/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1,
    temp = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[temp] == nums[i]) {
      count++;
    } else {
      count--;
      if (count == 0) {
        temp = i;
        count = 1;
      }
    }
  }
  return nums[temp];
};