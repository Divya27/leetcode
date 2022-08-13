/**
 * @param {string} date
 * @return {number}
 * 
 * https://leetcode.com/problems/day-of-the-year/
 */
var dayOfYear = function (date) {
  const dateSplit = date.split("-")
  const year = dateSplit[0]
  const month = dateSplit[1]
  let daysTillNow = dateSplit[2]
  // const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const daysSum = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
  if (((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) && month > 2) daysTillNow = parseInt(daysTillNow) + 1

  console.log("daysSum[month - 1]: ", daysSum[month - 1], daysTillNow)
  return parseInt(daysTillNow) + parseInt(daysSum[month - 1])

};

console.log(dayOfYear("2019-02-10"))
console.log(dayOfYear("2008-10-10"))
console.log(dayOfYear("2008-03-01"))
console.log(dayOfYear("2012-01-02"))