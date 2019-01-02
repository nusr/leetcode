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
var mergeTwoLists = function(l1, l2) {
  let temp = []
  let tempA = l1
  let tempB = l2
  while (tempA !== null && tempB !== null) {
    if (tempA.val < tempB.val) {
      temp.push(tempA.val)
      tempA = tempA.next
    } else {
      temp.push(tempB.val)
      tempB = tempB.next
    }
  }
  while (tempB === null && tempA !== null) {
    temp.push(tempA.val)
    tempA = tempA.next
  }
  while (tempA === null && tempB !== null) {
    temp.push(tempB.val)
    tempB = tempB.next
  }
  return temp
}
