/**
 * @param {string} s
 * @return {number}
 * 
 * https://leetcode.com/problems/number-of-segments-in-a-string/
 */
var countSegments = function (s) {
  if (s.trim().length === 0) return 0
  else return s.trim().split(' ').filter(elem => elem.trim()).length
};

// console.log(countSegments("Hello, my name is John"))
// console.log(countSegments("                     "))
// console.log(countSegments("Of all the gin joints in all the towns in all the world,   "))
console.log(countSegments(", , , ,        a, eaefa"))