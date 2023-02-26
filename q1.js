const ans = pairs(90)
// const ans = isPrime(83)
console.log(ans)
console.log('number of pairs =', ans.length)

function pairs(num) {
  const primeNum = prime(num)
  const cache = []
  const output = []

  for (let i in primeNum) {
    for (let j of cache) {
      if (num - primeNum[i] === j) {
        console.log(primeNum[i], j)
        output.push([primeNum[i], j])
      }
    }
    cache.push(primeNum[i])
  }

  return output
}

function prime(num) {
  const output = []

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) output.push(i)
  }

  return output
}

function isPrime(input) {
  if (input === 2) return true
  for (let i = 2; i < input; i++) {
    if (input % i === 0) return false
  }
  return true
}
