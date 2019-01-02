/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function constructTree(nums, left, right) {
        if(left > right){
            return null;
        }
        let root = {};
        let max = nums[left];
        let flag = left;
        for (let i = left + 1; i <= right; i++) {
          if (nums[i] > max) {
            max = nums[i];
            flag = i;
          }
        }
        root.val = max;
        root.left = constructTree(nums, left, flag - 1);
        root.right = constructTree(nums, flag + 1, right);
        return root;
      }
      var constructMaximumBinaryTree = function(nums) {
        return constructTree(nums, 0, nums.length - 1);
      };