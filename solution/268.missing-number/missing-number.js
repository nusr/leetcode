/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length
    let sum = (len + 1) * len / 2
    for(let i = 0;i < len;i++){
      sum -= nums[i]
    }
    return sum;
};