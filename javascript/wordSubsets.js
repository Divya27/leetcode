/**
 * 
 * https://leetcode.com/problems/word-subsets/description/?envType=daily-question&envId=2025-01-10
 */
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  let totalFreq = new Map();

  // Step 1: Aggregate the maximum frequencies for each character in all words in words2
  for (let word of words2) {
    let wordFreq = new Map();
    for (let char of word) {
      wordFreq.set(char, (wordFreq.get(char) || 0) + 1);
    }

    // Update totalFreq with the maximum frequency of each character across all words in words2
    for (let [char, freq] of wordFreq) {
      totalFreq.set(char, Math.max(totalFreq.get(char) || 0, freq));
    }
  }

  console.log("totalFreq (required frequencies):", totalFreq);

  const universalWords = [];

  // Step 2: Check each word in words1
  for (let word of words1) {
    let wordFreq = new Map();
    for (let char of word) {
      wordFreq.set(char, (wordFreq.get(char) || 0) + 1);
    }

    let isUniversal = true;

    // Step 3: Ensure word has at least the required frequencies of each character
    for (let [char, requiredFreq] of totalFreq) {
      if ((wordFreq.get(char) || 0) < requiredFreq) {
        isUniversal = false;
        break;
      }
    }

    // If the word meets the requirements, add it to the result list
    if (isUniversal) {
      universalWords.push(word);
    }
  }

  console.log("universalWords:", universalWords);
  return universalWords;
};


// Test cases
// console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]));   // facebook, google, leetcode
// console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["lo", "eo"]));    // google, leetcode
console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "oo"]));     // facebook, google

