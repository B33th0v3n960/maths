console.log('ans:', final(10, 2023))

function final(count, num) {
  let ans
  let start = 0
  while (!ans) {
    const array = genNum(start, count)

    for (let i = 0; i < count; i++) {
      const removed = removedNum(array, i)
      const sum = removed.reduce((a, b) => a + b, 0)
      if (sum === num) {
        console.log('removed:', removed)
        return (ans = array[i])
      }
    }
    start += 1
  }
}

function removedNum(arr, index) {
  return arr.filter((item) => arr.indexOf(item) !== index)
}

function genNum(start, count) {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(start + i)
  }
  return result
}
