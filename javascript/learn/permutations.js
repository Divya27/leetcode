// some global variable to store the results
var result = []

// currentSize should be invoked with the array size
function permutationOne (arr, currentSize) {
  console.log("checking for : ", arr, currentSize)
  if (currentSize == 1) { // recursion base-case (end)
    result.push(arr.join(""));        // return just that element
    return;
  }

  for (let i = 0; i < currentSize; i++) {
    permutationOne(arr, currentSize - 1);
    if (currentSize % 2 == 1) {               // odd number of elements
      let temp = arr[0];                    // temp ==> a[0] = foo
      arr[0] = arr[currentSize - 1];      // move last elem to 1st -- a[0]  = the
      arr[currentSize - 1] = temp;        // swap 1st and last
    } else {                                  // even number of elements
      let temp = arr[i];
      arr[i] = arr[currentSize - 1];
      arr[currentSize - 1] = temp;
    }
  }
}

let array = ["foo", "bar"];
permutationOne(array, array.length);

console.log(result);
// use result here



/**
 * another way
 */

const excluding = (i) => (xs) =>
  [...xs.slice(0, i), ...xs.slice(i + 1)]

const permutationsTwo = (xs) =>
  xs.length == 0
    ? [[]]
    : xs.flatMap((x, i) => permutationsTwo(excluding(i)(xs)).map(p => x + p))

console.log(permutationsTwo(['5', '6', '7']))

/**
 * 
 * another way
 */

const rotations = ([l, ...ls], rs = '') =>
  l == undefined ? [] : [l + ls.join('') + rs, ...rotations(ls, rs + l)]

const permutationsThree = ([l, ...ls]) =>
  l == undefined ? [[]] : [...permutationsThree(ls).flatMap(p => rotations(l + p))]

console.log(permutationsThree(['5', '7', '7'])) //=> ['577', '775', '757', '577', '775', '757']