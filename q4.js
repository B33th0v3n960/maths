const num = genNum(1, 10)
const ans = calc(num, 1)
console.log(ans)

function calc(arr, add) {
  let temp = [...arr]
  const output = { amout: 0 }
  while (temp.length !== 0) {
    const remove = getTwoDistinctRandomIndices(temp)
    temp = removedNumByArr(temp, remove)
    // if (temp.length !== 0) output.push([temp, temp.reduce((a, b) => a + b)])
    if (temp.length !== 0) output.amout += temp.reduce((a, b) => a + b)
  }
  return output
}

function getTwoDistinctRandomIndices(arr) {
  let index1 = Math.floor(Math.random() * arr.length)
  let index2 = Math.floor(Math.random() * (arr.length - 1))
  if (index2 >= index1) {
    index2 += 1
  }
  return [index1, index2]
}

function removedNumByArr(arr, indexArr) {
  const temp = [...arr]

  for (let i of indexArr) temp.splice(i, 1)

  return temp
}

function genNum(start, count) {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(start + i)
  }
  return result
}

function removedNum(arr, index) {
  return arr.filter((item) => arr.indexOf(item) !== index)
}
