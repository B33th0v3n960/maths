import { rect } from './data.js'

function searchByName(array, value) {
  for (let i of array) {
    if (i['name'] === value) {
      return i
    }
  }
}

function findLine(lines, point) {
  for (let i of lines) {
    if (i.includes(point)) return i
  }
  return undefined
}

function isConnected(point1, point2) {
  const lines = searchByName(rect, point1).lines
  for (let i of lines) if (i.includes(point2)) return true
  return false
}

export default function isTriangle(array) {
  const point1 = array[0]
  const point2 = array[1]
  const point3 = array[2]

  const lines = searchByName(rect, point1).lines

  const line2 = findLine(lines, point2)
  const line3 = findLine(lines, point3)

  if (!(line2 && line3)) return false
  if (line2 === line3) return false
  if (!isConnected(point2, point3)) return false
  // console.log(line2, line3)
  return true
}
