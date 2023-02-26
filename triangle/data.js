class Point {
  constructor(name, lines) {
    this.name = name
    this.lines = [...lines]
  }
}

const lineOfA = [['B', 'C'], ['b', 'z', 'f', 'F'], ['a', 'c', 'E'], ['D']]
const lineOfB = [
  ['A', 'C'],
  ['b', 'a', 'D'],
  ['z', 'E'],
  ['d', 'e', 'F'],
]
const lineOfC = [['B', 'A'], ['d', 'z', 'c', 'D'], ['e', 'f', 'E'], ['F']]
const lineOfD = [['A'], ['a', 'b', 'B'], ['c', 'z', 'd', 'C'], ['E', 'F']]
const lineOfE = [
  ['D', 'F'],
  ['c', 'a', 'A'],
  ['z', 'B'],
  ['f', 'e', 'C'],
]
const lineOfF = [['E', 'D'], ['f', 'z', 'b', 'A'], ['e', 'd', 'B'], ['C']]

const lineOfa = [
  ['b', 'B', 'D'],
  ['A', 'c', 'E'],
]
const lineOfb = [
  ['a', 'B', 'D'],
  ['A', 'z', 'f', 'F'],
]
const lineOfc = [
  ['D', 'z', 'd', 'C'],
  ['A', 'a', 'E'],
]

const lineOfd = [
  ['C', 'z', 'c', 'D'],
  ['B', 'e', 'F'],
]
const lineOfe = [
  ['B', 'd', 'F'],
  ['C', 'f', 'E'],
]
const lineOff = [
  ['F', 'z', 'B', 'A'],
  ['E', 'e', 'C'],
]

const lineOfz = [
  ['B', 'E'],
  ['A', 'b', 'f', 'F'],
  ['C', 'd', 'c', 'D'],
]

const pointA = new Point('A', lineOfA)
const pointB = new Point('B', lineOfB)
const pointC = new Point('C', lineOfC)
const pointD = new Point('D', lineOfD)
const pointE = new Point('E', lineOfE)
const pointF = new Point('F', lineOfF)
const pointa = new Point('a', lineOfa)
const pointb = new Point('b', lineOfb)
const pointc = new Point('c', lineOfc)
const pointd = new Point('d', lineOfd)
const pointe = new Point('e', lineOfe)
const pointf = new Point('f', lineOff)
const pointz = new Point('z', lineOfz)

export const rect = [
  pointA,
  pointB,
  pointC,
  pointD,
  pointE,
  pointF,

  pointa,
  pointb,
  pointc,
  pointd,
  pointe,
  pointf,

  pointz,
]

// rect.forEach(item => console.log(item))
