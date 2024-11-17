/**
 * https://leetcode.com/problems/group-anagrams/description/
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  const anagramsMap = new Map();

  for (let str of strs) {
    // sort the string
    const sortedStr = str.split('').sort().join('');
    if (!anagramsMap.has(sortedStr)) {
      anagramsMap.set(sortedStr, [str]);
    } else {
      anagramsMap.get(sortedStr).push(str)
    }
  }
  // console.log("anagramsMap: ", anagramsMap, anagramsMap.values());
  return [...anagramsMap.values()]


}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))