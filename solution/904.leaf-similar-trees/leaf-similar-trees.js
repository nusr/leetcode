/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function preOrder(root, array) {
        if (!root) {
          return;
        }
        if (!root.left && !root.right) {
          array.push(root.val);
        }
        preOrder(root.left, array);
        preOrder(root.right, array);
      }
      var leafSimilar = function(root1, root2) {
        let arr1 = [],
          arr2 = [];
        preOrder(root1, arr1);
        preOrder(root2, arr2);
        if (arr1.length !== arr2.length) {
          return false;
        }
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            return false;
          }
        }
        return true;
      };