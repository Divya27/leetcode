/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function (s, t) {
  // first approach
  // s = s.split("").sort().join("")
  // t = t.split("").sort().join("")
  // return (s === t) ? true : false

  // second approach
  // check frequency of each char in both the strings and compare

  // if (s.length !== t.length) return false;

  // const sMap = {};
  // const tMap = {};
  // let i = 0;

  // while (i < s.length) {
  //   if (!sMap[s[i]]) {
  //     sMap[s[i]] = 1
  //   } else sMap[s[i]] += 1;

  //   if (!tMap[t[i]]) {
  //     tMap[t[i]] = 1
  //   } else tMap[t[i]] += 1;

  //   i++;
  // }
  // console.log("sMap : ", sMap)
  // console.log("tMap : ", tMap)

  // for (const [key, value] of Object.entries(sMap)) {
  //   console.log(key, value)
  //   if (tMap[key] !== value) return false
  // }
  // return true


  // approach 3
  if (s.length !== t.length) return false;
  let freqMap = {};

  for (let char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  for (let char of t) {
    if (!freqMap[char]) return false;
    freqMap[char] -= 1;
  }

  // if freq of all the chars is 0 -> it's anagram
  return Object.values(freqMap).every((count) => count === 0);

};

console.log(isAnagram("anagram", "nagaram"))