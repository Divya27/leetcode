const randomStringGenerator = length => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) { result += characters.charAt(Math.floor(Math.random() * charactersLength)) }
  console.log("result: ", result)
  return result
}

console.log(randomStringGenerator(8))