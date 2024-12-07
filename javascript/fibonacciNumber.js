/**
 * @param {number} n
 * @return {number}
 * 
 * https://leetcode.com/problems/fibonacci-number/
 */
// let cache = {};
var fib = function (n) {
  // if n is less than or equal to 1 - return n
  // if (n <= 1) return n

  // // As result is stored for each fun call, check if it is found
  // if (cache[n]) return cache[n]

  // const result = fib(n - 1) + fib(n - 2);

  // cache[n] = result;
  // // console.log("cache: ", cache)
  // return result;

  // another approach - using dp and space optimization
  if (n <= 1) return n;
  let prev2 = 0;
  let prev1 = 1;

  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

console.log(fib(3))