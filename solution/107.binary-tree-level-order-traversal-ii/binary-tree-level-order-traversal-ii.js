/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
      let queue = []
      let front = 0
      let tail = 0
      if(!root){
          return []
      }
      root.level = 1
      queue[tail++] = root
      let result = []
      while (front !== tail) {
        let temp = queue[front++]
        if (temp.right) {
          temp.right.level = temp.level + 1
          queue[tail++] = temp.right
        }
        if (temp.left) {
          temp.left.level = temp.level + 1
          queue[tail++] = temp.left
        }
        
        result.push({
          val: temp.val,
          level: temp.level
        })
      }
      let len = result.length
      let maxLevel = result[len - 1].level
      let realResult = []
      for (let i = len - 1;i >= 0;i--) {
        let item = result[i]
        let level = item.level
        let value = item.val
        if (realResult[maxLevel - level]) {
          realResult[maxLevel - level].push(value)
        } else {
          realResult[maxLevel - level] = [value]
        }
      }
      return realResult
    };