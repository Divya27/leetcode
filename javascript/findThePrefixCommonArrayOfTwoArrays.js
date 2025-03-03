/**
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  // TC: O(n) SC: O(n)
  // const n = A.length;
  // console.log(n);
  // const c = new Array(n + 1).fill(0);
  // const result = [];
  // console.log(c);
  // let count = 0;
  // for (let i = 0; i < n; i++) {
  //   if (++c[A[i]] === 2) count++;
  //   if (++c[B[i]] === 2) count++;
  //   result.push(count);
  // }
  // console.log(result)
  // return result;

  // approach 2 - without extra space, TC: O(n), SC : O(1)
  // space less but took more time
  
  const n = A.length;
  const result = [];
  const numSet = new Set();
  let count = 0;

  for (let i = 0; i < n; i++) {
    // if number is there in the set 
    if (numSet.has(A[i])) {
      count++;
    } else {
      numSet.add(A[i]);
    }

    if (numSet.has(B[i])) {
      count++;
    } else {
      numSet.add(B[i]);
    }

    result.push(count);
  }
  console.log(result);
  return result;

};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));