/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

  // approach 1 : using hashmap and minHeap (half only there, as need to define class of minHeap and write all of its functions)
  // const freqMap = new Map();

  // // calculate freq for each
  // for (let num of nums) {
  //   freqMap.set(num, (freqMap.get(num) || 0) + 1);
  // }

  // // create min heap 
  // const minHeap = new MinPriorityQueue({
  //   compare: (a, b) => a.frequency - b.frequency
  // });

  // console.log("freqMap: ", freqMap);
  // console.log("minHeap: ", minHeap);

  // // fill up the heap 
  // for (let [num, freq] of freqMap) {
  //   minHeap.enqueue({ number: num, frequency: freq });
  // check with k 
  // if (minHeap.size() > k) 
  // }


  // approach 2 : using bucket sort

  // calculate freq for each element
  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  console.log("freqMap: ", freqMap);

  // create buckets and fill up 
  const buckets = new Array(nums.length + 1).fill().map(() => []);
  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }
  console.log("buckets :", buckets);
  // collect the top k frequent elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length) {
      for (let num of buckets[i]) {
        result.push(num);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
  return result;

};

console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3], 1));