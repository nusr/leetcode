/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function height(root) {
        if (!root) {
          return 0;
        }
        let left = height(root.left) + 1;
        let right = height(root.right) + 1;
        return left > right ? left : right;
      }
      var isBalanced = function(root) {
        if (!root) {
          return 1;
        }
        let leftTree = isBalanced(root.left);
        let rightTree = isBalanced(root.right);
        let left = height(root.left);
        let right = height(root.right);
        let temp = right - left;
        if (temp <= 1 && temp >= -1) {
          return leftTree && rightTree;
        } else {
          return 0;
        }
      };