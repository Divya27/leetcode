/**
 * 
 * https://leetcode.com/problems/reorder-list/description/
 * 
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // if head or next is null - return 
  if (!head || !head.next) return;

  // find the middle node of the linked list (fast and slow pointer)
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow's next will be middle node 
  let secondHalf = slow.next;   // 2nd half linked list
  slow.next = null;  // Disconnect the first half from the second half

  // reverse the second half linked list 
  let prev = null;
  let current = secondHalf;

  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  // update the second half linked list head pointer 
  secondHalf = prev;

  // now merge the two lists
  let firstHalf = head;
  while (secondHalf) {
    let temp1 = firstHalf.next;
    let temp2 = secondHalf.next;

    // change the pointer
    firstHalf.next = secondHalf;
    secondHalf.next = temp1;

    // move the pointer forward for next elem 
    firstHalf = temp1;
    secondHalf = temp2;
  }

};