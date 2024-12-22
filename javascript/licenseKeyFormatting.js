/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 
 * https://leetcode.com/problems/license-key-formatting/
 */
var licenseKeyFormatting = function (s, k) {

  // remove all dashes and convert to upper case
  s = s.replace(/-/g, '').toUpperCase();

  let result = "";
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    result = s[i] + result;
    count += 1;
    if (count === k && i !== 0) {
      result = '-' + result;
      count = 0;
    }
  }
  console.log("result: ", result);
  return result;

  // let allChars = s.split('-').join("").toUpperCase()
  // console.log("allChars: ", allChars)

  // const resultArr = []

  // allChars = Array.from(allChars)
  // console.log("allChars: ", allChars)

  // while (allChars.length) {
  //   resultArr.push(allChars.splice(-k).join(""))
  //   console.log("resultArr: ", resultArr)
  // }

  // console.log("resultArr: ", resultArr)
  // return resultArr.reverse().join("-")
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
console.log(licenseKeyFormatting("2-5g-3-J", 2))
console.log(licenseKeyFormatting("2-4A0r7-4k", 4))
console.log(licenseKeyFormatting("--a-a-a-a--", 2))
// var licenseKeyFormatting = function (s, k) {
//   let [first, ...rest] = s.split('-')
//   console.log("first, rest: ", first, rest)
//   rest = rest.join("")
//   console.log("rest: ", rest)

//   const resultArr = [first]
//   let arrayFromRest = Array.from(rest)

//   while (arrayFromRest.length) {
//     resultArr.push(arrayFromRest.splice(0, k).join("").toUpperCase())
//     console.log("rest now: ", arrayFromRest)
//   }

//   console.log("resultArr: ", resultArr)
//   return resultArr.join("-")
// };

