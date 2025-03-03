/**
 * https://leetcode.com/problems/find-the-town-judge/description/?envType=problem-list-v2&envId=graph
 */
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (!trust.length && n === 1) return n;
  let trustArray = new Array(n + 1).fill(0);
  for (let [a, b] of trust) {
    trustArray[a] -= 1;
    trustArray[b] += 1;
  }
  // console.log("trustArray: ", trustArray);
  for (let i = 0; i <= n; i++) {
    if (trustArray[i] === (n - 1)) {
      // console.log("Found!", i);
      return i;

    }
  }
  return -1;
};

console.log(findJudge(2, [[1, 2]]))