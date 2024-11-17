// Merge Sort function
function mergeSort(arr) {
  // Base case: if the array has one or zero elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

// Merge function to combine two sorted arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and build the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from both arrays
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
