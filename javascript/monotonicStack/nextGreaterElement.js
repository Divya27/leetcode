
// monotonic stack -- specific order is followed - either increasing or decreasing or any other 
// [6,0,8,1,3]

var nextGreaterElement = function (nums) {
  let stack = [];
  let nge = new Array(nums.length).fill(-1);

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      stack.pop();
    }
    if (!stack.length) nge[i] = -1;
    else nge[i] = stack[stack.length - 1];
    stack.push(nums[i]);
  }
  console.log("NGE: ", nge);
  return nge;
};

console.log(nextGreaterElement([6, 0, 8, 1, 3]))