// const fibonacci = n => {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(5))


let cache = {};

const fibonacci = n => {
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);

  cache[n] = result;
  console.log("cache: ", cache)
  return result;
};
console.log(fibonacci(10))
