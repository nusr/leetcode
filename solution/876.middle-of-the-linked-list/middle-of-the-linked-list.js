/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
      let temp = head
      let len = 0
      let result = []
      while (temp) {
        len++
        temp = temp.next
      }
    console.log(len)
      let middle = parseInt(len / 2) + 1
      let count = 0
      temp = head
      while (temp) {
        if (count >= (middle-1)) {
          result.push(temp.val)
        }
        temp = temp.next
        count++
      }
      return result
    };