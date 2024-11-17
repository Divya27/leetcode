/**
 * https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=leetcode-75
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null; // Previous node initialized to null
  let current = head; // Start with the head of the list

  while (current) {
    // Keep track of the next node
    const nextTemp = current.next;
    // Reverse the link
    current.next = prev;
    // Move prev and current one step forward
    prev = current;
    current = nextTemp;
  }

  return prev; // prev will be the new head of the reversed list

};

console.log(reverseList([1, 2, 3, 4, 5]))