/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/majority-element/
 */
var majorityElement = function (nums) {
  // Approach 1 TC: O(n) SC: O(n)
  // const numsMap = new Map();
  // for (let num of nums) {
  //   numsMap.set(num, (numsMap.get(num) || 0) + 1);
  // }
  // for (let [num, freq] of numsMap.entries()) {
  //   if (freq > nums.length / 2) return num;
  // }
  // return -1;



  // --------------
  // approach 2 : TC O(n log n) because of sorting, SC: O(1)

  // Sort the array
  // nums.sort((a, b) => a - b);

  // // Return the middle element, which is guaranteed to be the majority element
  // return nums[Math.floor(nums.length / 2)];



  // --------------
  // approach 3 - Boyer-Moore Voting Algorithm
  // This optimal approach involves counting a candidate element against others. If a number is the majority, it will be the last element standing after cancellations.
  // TC : O(n) , SC : O(1)

  // if a number appears more than n/2 times, it will not get cancelled against other elems 
  
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    // Assign a new candidate if count drops to zero
    if (count === 0) {
      candidate = num;
    }

    // Increment or decrement the count
    count += (num === candidate) ? 1 : -1;
  }

  // The remaining candidate is the majority element
  return candidate;


};

console.log(majorityElement([3, 2, 3]))