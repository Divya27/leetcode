// Javascript code for
// O(n) solution for finding
// maximum sum of a subarray
// of size k
// https://www.geeksforgeeks.org/window-sliding-technique/

var maxSum = (arr, n, k) => {
  let max = 0;
  let sum = 0;
  // find initial sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  console.log("max initial: ", max)   // 17
  // iterate the array once
  // and increment the right edge

  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];
    console.log("sum: ", sum)
    // compare if sum is more than max,
    // if yes then replace
    // max with new sum value
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
/**
 * Example: Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.
 */
const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
console.log(maxSum(arr, arr.length, 4))