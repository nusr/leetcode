/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
        let i = 0,
          j = nums.length - 1,
          repeat = 0;
        do {
          if (nums[i] === val) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j--;
            repeat++;
          } else {
            i++;
          }
        } while (i <= j);
        nums.length = nums.length - repeat;
      };