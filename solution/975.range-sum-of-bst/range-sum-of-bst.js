/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
        let sum = 0;
        function inOrder(root, L, R)
        {
          if (!root) {
            return;
          }
          inOrder(root.left, L, R);
          if (root.val >= L && root.val <= R) {
            sum += root.val;
          }
          inOrder(root.right, L, R);
        }
        inOrder(root, L, R);
        return sum;
      };