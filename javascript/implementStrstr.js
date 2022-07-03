/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0
  const result = haystack.indexOf(needle)
  console.log(result)
  return result
}("hello", "el")