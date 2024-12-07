/**
 * https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/description/
 */

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const keyUsers = {};

  for (let i = 0; i < keyName.length; i++) {
    if (keyUsers[keyName[i]]) {
      keyUsers[keyName[i]].push(keyTime[i]);
    } else {
      keyUsers[keyName[i]] = [keyTime[i]];
    }
  }
  console.log(keyUsers);

  let usersList = [];
  for (let [user, timings] of Object.entries(keyUsers)) {
    console.log(user)
    console.log(timings)

  }

};

console.log(alertNames(["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"],
  ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]))