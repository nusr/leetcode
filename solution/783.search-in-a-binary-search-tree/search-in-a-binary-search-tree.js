/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
        if (!root) {
          return null;
        }
        let temp = root;
        while (temp) {
          if (temp.val == val) {
            break;
          } else if (temp.val > val) {
            temp = temp.left;
          } else {
            temp = temp.right;
          }
        }
        return temp;
      };