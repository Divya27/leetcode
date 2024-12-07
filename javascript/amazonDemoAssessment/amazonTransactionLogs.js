

function processLogs(logs, threshold) {
  let resultArr = [];

  // Write your code here
  let transactionMap = new Map();
  for (let elem of logs) {
    const [sender, receiver, amount] = elem.split(' ');
    transactionMap.set(sender, (transactionMap.get(sender) || 0) + 1);
    if (sender !== receiver) {
      transactionMap.set(receiver, (transactionMap.get(receiver) || 0) + 1);
    }
  }
  console.log("transactionMap: ", transactionMap)

  for (let [elem, freq] of transactionMap.entries()) {
    console.log(elem, freq)
    if (freq >= threshold) resultArr.push(elem);
  }

  return resultArr.sort((a, b) => a - b);

}

console.log(processLogs(["88 99 200", "88 99 300", "99 32 100", "12 12 15"], 2))