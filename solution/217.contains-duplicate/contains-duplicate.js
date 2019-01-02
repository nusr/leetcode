/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
        let dict = {};
        let repeat = false;
        for (let key of nums) {
          if (dict[key]) {
            repeat = true;
            break;
          } else {
            dict[key] = 1;
          }
        }
        return repeat;
      };