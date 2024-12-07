/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */
var longestConsecutive = function (nums) {
  // if (nums.length === 0) return 0
  // else if (nums.length === 0) return nums[0]
  // let longestTillNow = 0
  // nums = nums.sort((a, b) => a - b)
  // console.log("nums: ", nums)
  // let currentSeries = 0
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] - nums[i - 1] === 1) {
  //     currentSeries += 1
  //     longestTillNow = Math.max(longestTillNow, currentSeries)
  //   } else {
  //     if (nums[i] !== nums[i - 1])
  //       currentSeries = 0
  //   }
  // }
  // console.log("longest: ", longestTillNow + 1)
  // return longestTillNow + 1

  // approach 2

  if (nums.length === 0) return 0;

  let numSet = new Set(nums);  // Insert all numbers into a set
  let longest = 0;
  console.log("numSet: ", numSet);
  
  // Iterate over the set to find the longest consecutive sequence
  for (let num of numSet) {
    // Only start counting if num - 1 is not in the set, meaning it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count the length of the consecutive sequence starting from num
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Update the longest sequence if the current streak is longer
      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
};

// console.log(longestConsecutive([1, 2, 0, 1]))
console.log(longestConsecutive([100, 4, 200, 3, 1, 2]))
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))