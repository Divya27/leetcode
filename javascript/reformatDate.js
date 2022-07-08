/**
 * @param {string} date
 * @return {string}
 * 
 * https://leetcode.com/problems/reformat-date/
 */
var reformatDate = function (date) {
  const monthMap = { 'Jan': '01', 'Feb': '02', 'Mar': '03', "Apr": '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', "Dec": '12' }
  let [day, month, year] = date.split(" ")
  day = ((day.slice(0, -2)).length < 2) ? `0${day.slice(0, -2)}` : day.slice(0, -2)
  return `${year}-${monthMap[month]}-${day}`
};

console.log(reformatDate("6th Jun 1933"))