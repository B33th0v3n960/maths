function contain(array, major) {
  for (let i of major) if (array.includes(i)) return true
  return false
}

export function filter(array, major) {
  const output = [...array]
  for (let i of array)
    if (!contain(i, major)) output.splice(output.indexOf(i), 1)
  return output
}

export function getCombinations(array, length) {
  if (length === 1) {
    return array.map((element) => [element])
  }

  const combinations = []

  for (let i = 0; i <= array.length - length; i++) {
    const currentElement = array[i]
    const remainingElements = array.slice(i + 1)
    const innerCombinations = getCombinations(remainingElements, length - 1)

    for (let j = 0; j < innerCombinations.length; j++) {
      combinations.push([currentElement].concat(innerCombinations[j]))
    }
  }

  return combinations
}

