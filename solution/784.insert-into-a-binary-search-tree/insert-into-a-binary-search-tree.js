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
var insertIntoBST = function(root, val) {
        let temp = root,
          left = null;
        let flag = 0;
        while (temp) {
          pre = temp;
          if (temp.val > val) {
            flag = 0;
            temp = temp.left;
          } else {
            flag = 1;
            temp = temp.right;
          }
        }
        temp = {};
        temp.val = val;
        temp.left = temp.right = null;
        if (flag) {
          pre.right = temp;
        } else {
          pre.left = temp;
        }
        return root;
      };