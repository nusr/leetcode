/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
      let obj = {}
      for (let i = 0;i < nums.length;i++) {
        let key = nums[i]
        if (obj[key]) {
          obj[key]++
        } else {
          obj[key] = 1
        }
      }
      for (let key in obj) {
        if (obj[key] === 1) {
          return +key
        }
      }
    };