/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let dict = {};
    let result = [];
    for(let i = 0;i < nums.length;i++){
        let key = nums[i];
        if(dict[key]){
            dict[key]++;
            result.push(key)
        }else {
            dict[key] = 1;
        }
    }
    return result;
};