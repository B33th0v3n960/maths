function calc(start, end, final, arr = []) {
  console.log(arr)
  const prev = arr.reduce((product, current) => product * current, 1)
  if (prev === final) {
    console.log('ans', arr)
    return arr
  }
  if (prev > final) {
    console.log('fail')
    return
  }

  for (let i = start; i <= end; i++) {
    console.log(i)
    arr.push[i]
    calc(start, end, final, [...arr, i])
  }
}

const arr = [11, 19, 12, 2]
const ans = calc(13, 19, 18727200)

// const ans = arr.reduce((product, current) => product * current, 1)
console.log(ans)
