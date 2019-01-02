/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
      let tempA = l1
      let tempB = l2
      let lenA = 0
      let lenB = 0
      let result = null
      while (tempA) {
        lenA++
        tempA = tempA.next
      }
      while (tempB) {
        lenB++
        tempB = tempB.next
      }
      let flag = 0
      if (lenA > lenB) {
        result = l1
        tempA = l1
        tempB = l2
      } else {
        result = l2
        tempB = l1
        tempA = l2
      }
      while (tempA) {
        let value = tempA.val + (tempB ? tempB.val : 0) + flag
        tempA.val = (value % 10)
        flag = parseInt(value / 10)
        tempA = tempA.next
        if (tempB) {
          tempB = tempB.next
        }
      }
      tempA = result
      while (tempA.next) {
        tempA = tempA.next
      }
      while (flag) {
        let value = flag % 10
        tempA.next = {
          val: value,
          next: null
        }
        flag = parseInt(flag / 10)
      }
      return result
    };