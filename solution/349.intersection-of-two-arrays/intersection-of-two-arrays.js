/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
      let obj = {}
      let result = []
      nums1.forEach(item => {
        if (obj[item]) {
          obj[item].count++
        } else {
          obj[item] = {
            count: 1,
            flag: false
          }
        }
      })
      nums2.forEach(item => {
        if (obj[item] && !obj[item].flag) {
          result.push(item)
          obj[item].flag = true
        }
      })
      return result
    };