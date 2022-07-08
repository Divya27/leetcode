/**
 * @param {number} n
 * @return {number}
 * 
 * https://leetcode.com/problems/fibonacci-number/
 */
let cache = {};
var fib = function (n) {
  // if n is less than or equal to 1 - return n
  if (n <= 1) return n

  // As result is stored for each fun call, check if it is found
  if (cache[n]) return cache[n]

  const result = fib(n - 1) + fib(n - 2);

  cache[n] = result;
  // console.log("cache: ", cache)
  return result;
};

console.log(fib(3))