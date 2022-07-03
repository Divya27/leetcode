/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // keep track of the money 
  const myBalance = {}
  let result = true
  for (let i = 0; i < bills.length; i++) {
    // cost of lemonade is 5 -- so need return remaining change amount
    let returnChange = bills[i] - 5
    if (!myBalance.hasOwnProperty(bills[i])) {
      myBalance[bills[i]] = 1
    } else {
      myBalance[bills[i]] += 1
    }
    if (returnChange) {
      console.log("myBalance: ", myBalance)
      if (returnChange === 5) {
        if (!myBalance[returnChange] || myBalance[returnChange] === 0) result = false
        else {
          myBalance[returnChange]--
          returnChange = returnChange - 5
        }
      } else if (returnChange === 10) {
        if (!myBalance[returnChange] && myBalance[returnChange] === 0 && myBalance[returnChange / 2] < 2) result = false
        else {
          if (myBalance[returnChange] && myBalance[returnChange] > 0) {
            myBalance[returnChange]--
            returnChange = returnChange - 10
          }
          else {
            (myBalance[returnChange / 2] = myBalance[returnChange / 2] - 2)
            returnChange = returnChange - 10
          }

        }
      } else if (returnChange === 15) {
        if ((myBalance[returnChange / 3] < 3) && (myBalance[returnChange % 10] < 1 && myBalance[returnChange - 5] < 1)) result = false
        else {
          if ((myBalance[returnChange - 5] >= 1) && myBalance[returnChange % 10] >= 1) {
            myBalance[returnChange - 5]--
            myBalance[returnChange % 10]--
            returnChange = returnChange - 15
          } else if (myBalance[returnChange % 10] >= 3) {
            myBalance[returnChange % 10] = myBalance[returnChange % 10] - 3
            returnChange = returnChange - 15
          }
          else if (myBalance[returnChange - 5] && myBalance[returnChange - 5] >= 1 && (!myBalance[returnChange / 3] || !myBalance[returnChange / 3] === 0)) return false
          else if (myBalance[returnChange % 10] && myBalance[returnChange % 10] >= 1 && (!myBalance[returnChange - 5] || !myBalance[returnChange - 5] === 0)) return false

        }
      }
    }
    console.log("returnChange: ", returnChange)
    if (returnChange > 0) result = false
  }
  console.log("mybalance: ", myBalance)
  return result
};

// console.log(lemonadeChange([5, 5, 5, 10, 20]))
// console.log(lemonadeChange([5, 5, 5, 5, 10, 10, 20, 5, 10, 20]))
// console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]))
console.log(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5]))

// 5:10, 10:0, 20:2
/**
 * else if (!myBalance[returnChange - 5] || myBalance[returnChange - 5] === 0) {
            if (!myBalance[returnChange % 10] || myBalance[returnChange % 10] === 0) return false
            else {
              myBalance[returnChange / 3] = myBalance[returnChange / 3] - 3
              returnChange = returnChange - 15
            }
          } else if (!myBalance[returnChange % 10] || myBalance[returnChange % 10] === 0) return false
 */