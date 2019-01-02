/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preOder(root, array) {
        if (!root) {
          return;
        }
        array.push(root.val);
        preOder(root.left,array);
        preOder(root.right,array);
      }
      var preorderTraversal = function(root) {
        let array = [];
        preOder(root,array);
        return array;
      };