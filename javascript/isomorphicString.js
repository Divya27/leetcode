/**
 * 
 * https://leetcode.com/problems/isomorphic-strings/description/?envType=problem-list-v2&envId=string&difficulty=EASY
 * 
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Input: s = "egg", t = "add"

Output: true

 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char1 = s.charAt(i);
    const char2 = t.charAt(i);

    // Check if char1 is already in the map
    if (!charMap.has(char1)) {
      // Check if char2 is already mapped to another character
      if ([...charMap.values()].includes(char2)) {
        return false;
      }
      // Add the mapping
      charMap.set(char1, char2);
    } else {
      // Key is there in map - compare it with char2
      if (charMap.get(char1) !== char2) {
        return false;
      }
    }
  }
  return true;
};

// console.log(isIsomorphic("egg", "add"))
// console.log(isIsomorphic("foo", "bar"))
// console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("badc", "baba"))