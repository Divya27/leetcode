/**
 * 
 * https://leetcode.com/problems/rotate-list/description/?envType=study-plan-v2&envId=top-interview-150
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k == 0) return head;

  // calculate the length of LL
  let tail = head;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length += 1;
  }

  // make the LL circular 
  tail.next = head;

  // normalise k 
  k = k % length;
  let newTailPosition = length - k;

  // new tail
  let newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }

  // break circular connection
  let newHead = newTail.next; 
  newTail.next = null;

  return newHead;

};

