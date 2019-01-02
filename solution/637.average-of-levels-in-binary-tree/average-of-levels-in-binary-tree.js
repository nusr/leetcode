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
var averageOfLevels = function (root) {
      let queue = []
      let front = 0
      let tail = 0
      if (!root) {
        return []
      }
      root.level = 0
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
      let realResult = []
      result.forEach(item => {
        let val = item.val
        let level = item.level
        if (realResult[level]) {
          realResult[level].push(val)
        } else {
          realResult[level] = [val]
        }
      })
      realResult.forEach((item,index) => {
        let sum = 0;
        let len = item.length
        for (let i = 0;i < len;i++) {
          sum += item[i]
        }
        realResult[index] = sum / len
      })
      return realResult
    };