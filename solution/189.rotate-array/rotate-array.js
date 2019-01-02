/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
      let len = nums.length
      if (!len ||  !k || k ===len ) {
        return
      }
      function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp

      }
      for (let i = 0, j = (len + len - k - 1) % len;i < j;i++ , j--) {
        swap(i, j)
      }
      for (let i = (2 * len - k) % len, j = len - 1;i < j;j-- , i++) {
        swap(i, j)
      }
      for (let i = 0, j = len - 1;i < j;i++ , j--) {
        swap(i, j)
      }
      console.log(nums)
    };