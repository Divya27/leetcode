/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // if length of array of string is 0 return empty string
  if (strs.length === 0) return ""

  // if only 1 elem is there then it will be entirely common prefix
  if (strs.length === 1) return strs[0]

  // else, sort the array of strings
  strs.sort()
  console.log(strs)
  // find the minimum length from first and last string 

  let minLenStr = Math.min(strs[0].length, strs[strs.length - 1].length)
  console.log("minLenStr: ", minLenStr)

  // find the common prefix between the first and last string 
  let i = 0;
  while (i < minLenStr && strs[0][i] == strs[strs.length - 1][i])
    i++

  let prefix = (i > 0) ? strs[0].substring(0, i) : ''
  return prefix
};

console.log(longestCommonPrefix(['geeks', 'geeksforgeeks', 'geek', 'gee', 'g']))