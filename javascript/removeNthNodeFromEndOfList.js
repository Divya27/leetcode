/**
 * 
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  if (fast == null) return head.next;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  let delNode = slow.next;
  slow.next = slow.next.next;
  delNode = null;

  return head;

};