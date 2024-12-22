/**
 * https://leetcode.com/problems/odd-even-jump/description/
 */

var oddEvenJumps = function (A) {
  const n = A.length;

  // Helper function to perform jumps
  const canJump = (jumpType) => {
    let nextJump = Array(n).fill(false);
    console.log("initial next jump :", nextJump);
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
      console.log("A[stack[stack.length - 1]]: ", A[stack[stack.length - 1]], stack.length)
      while (stack.length && (jumpType === 'odd' ? A[stack[stack.length - 1]] <= A[i] : A[stack[stack.length - 1]] >= A[i])) {
        console.log("i :", i, A[i])
        nextJump[i] = true;
        stack.pop();
      }
      stack.push(i);
      console.log("stack : ", stack);
    }
    console.log("nextJUMp : ", nextJump);
    return nextJump;
  };

  // Odd and even jump arrays
  let oddJump = canJump('odd');
  let evenJump = canJump('even');

  // DP arrays to track whether we can reach the last index starting from i with odd/even jumps
  let oddReach = Array(n).fill(false);
  let evenReach = Array(n).fill(false);

  console.log("oddReach: evenReach: ", oddReach, evenReach)
  oddReach[n - 1] = true; // Last index can always be reached by odd jump (end goal)
  evenReach[n - 1] = true; // Last index can always be reached by even jump (end goal)

  // Start from the second last element to the first element
  for (let i = n - 2; i >= 0; i--) {
    if (oddJump[i]) {
      oddReach[i] = evenReach[i + 1];
    }
    if (evenJump[i]) {
      evenReach[i] = oddReach[i + 1];
    }
  }

  console.log("oddReach: evenReach: final :: ", oddReach, evenReach)
  
  // Count the number of positions that can reach the last index with an odd jump
  return oddReach[0] ? 1 : 0;
};

const A = [10, 13, 12, 14, 15];
console.log(oddEvenJumps(A));  // Output should be the number of ways to reach the last index
