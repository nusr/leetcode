/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function reverse(root) {
        if (!root) {
          return;
        }
        reverse(root.left);
        reverse(root.right);
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
      }
      var invertTree = function(root) {
        reverse(root);
        return root;
      };