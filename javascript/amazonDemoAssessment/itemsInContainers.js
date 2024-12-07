

// few TCs failed -- check the same problem in hacker rank if there and optimise the below one - as for large ones time limit was exceeding
function numberOfItems(s, startIndices, endIndices) {
  const indicesLength = startIndices.length;
  let starArr = [];
  for (let i = 0; i < indicesLength; i++) {
    console.log(startIndices[i], endIndices[i])
    const subStr = s.slice(startIndices[i] - 1, endIndices[i]);
    console.log(subStr);
    const startIndex = subStr.indexOf('|');
    const endIndex = subStr.lastIndexOf('|');

    let starCount = 0;
    for (let i = startIndex; i < endIndex; i++) {
      if (subStr[i] === '*') starCount += 1;
    }
    console.log("starCount : ", starCount);
    starArr.push(starCount);
  }
  return starArr;
}

console.log(numberOfItems("|**|*|*", [1, 1], [5, 6]))