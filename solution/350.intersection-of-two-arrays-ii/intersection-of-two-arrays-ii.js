/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
      let obj = {}
      let result = []
      nums1.forEach(item => {
        if (obj[item]) {
          obj[item]++
        } else {
          obj[item] = 1
        }
      })
      nums2.forEach(item => {
        if (obj[item]) {
          obj[item]--
          result.push(item)
        }
      })
      return result
    };