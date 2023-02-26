import { filter, getCombinations } from './triangle.js'
import isTriangle from './verify.js'
import { append } from './file.js'

const major = ['A', 'B', 'C', 'D', 'E', 'F']
const minor = ['a', 'b', 'c', 'd', 'e', 'f', 'z']
const array = [...major, ...minor]

const combinations = getCombinations(array, 3)
const result = filter(combinations, major)

const ans = []
result.forEach((item) => {
  if (isTriangle(item)) ans.push(item)
})

console.log(isTriangle(['A', 'B', 'D']))

console.log(ans)
console.log(ans.length)

// const file = './test.md'
// ans.forEach((item) => append(file, item))
