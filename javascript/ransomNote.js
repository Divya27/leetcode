/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // let magArr = magazine.split("")
  // let counter = 0
  // for (let i = 0; i < ransomNote.length; i++) {
  //   if (magArr.includes(ransomNote[i])) {
  //     const removeElemIndex = magArr.indexOf(ransomNote[i])
  //     counter += 1
  //     if (removeElemIndex > -1)
  //       magArr.splice(removeElemIndex, 1)
  //   }
  // }
  // if (ransomNote.length === counter) return true
  // else return false

  const freqMapOfMagazine = {};
  for (let elem of magazine) {
    freqMapOfMagazine[elem] = (freqMapOfMagazine[elem] || 0) + 1;
  }
  // console.log("freqMapOfMagazine: ", freqMapOfMagazine);

  // check the ransom note 
  for (let elem of ransomNote) {
    if (freqMapOfMagazine[elem] > 0) {
      freqMapOfMagazine[elem] -= 1;
    } else return false;
  }
  return true;
};

console.log(canConstruct('aa', 'ab'))