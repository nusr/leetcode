/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  function nodeLen(root) {
    let count = 0
    while (root) {
      count++
      root = root.next
    }
    return count
  }
  let tempA = headA
  let tempB = headB
  let lenA = nodeLen(headA)
  let lenB = nodeLen(headB)
  while (lenA > lenB) {
    tempA = tempA.next
    lenA--
  }
  while (lenB > lenA) {
    tempB = tempB.next
    lenB--
  }
  while (tempA && tempB) {
    if (tempA.val === tempB.val) {
      return tempA
    }
    tempA = tempA.next
    tempB = tempB.next
  }
  return null
}