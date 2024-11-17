/**
 * https://leetcode.com/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry) {
    const val1 = (l1 !== null) ? l1.val : 0;
    const val2 = (l2 !== null) ? l2.val : 0;

    // sum 
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode((sum % 10));
    current = current.next;

    if (l1 !== null) { l1 = l1.next; }
    if (l2 !== null) { l2 = l2.next; }

  }
  return dummy.next;

};