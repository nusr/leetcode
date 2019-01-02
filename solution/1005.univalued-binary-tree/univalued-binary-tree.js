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
var isUnivalTree = function(root) {
        function preOrder(root, temp) {
          if (!root) {
            return 1;
          }
          if (root.val == temp) {
            return preOrder(root.left, temp) && preOrder(root.right, temp);
          } else {
            return 0;
          }
        }
        if (!root) {
          return 1;
        }
        let temp = root.val;
        let left = preOrder(root.left, temp);
        let right = preOrder(root.right, temp);
        return left && right;
      };