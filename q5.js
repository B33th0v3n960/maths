class Point {
  constructor(name, point1, point2, point3, point4) {
    this.name = name
    this.line1 = [...point1]
    this.line2 = [...point2]
    this.line3 = [...point3]
    this.line4 = [...point4]
  }
}

const line = ['A', 'B', 'C']

const pointA = new Point(
  'pointA',
  ['B', 'C'],
  ['b', 'z', 'f', 'F'],
  ['a', 'c', 'E'],
  ['D']
)

const pointB = new Point(
  'pointB',
  ['A', 'C'],
  ['b', 'a', 'D'],
  ['z', 'E'],
  ['d', 'e', 'F']
)

const pointC = new Point(
  'pointC',
  ['B', 'A'],
  ['d', 'z', 'c', 'D'],
  ['e', 'f', 'E'],
  ['F']
)

const pointD = new Point(
  'pointD',
  ['A'],
  ['a', 'b', 'B'],
  ['c', 'z', 'd', 'C'],
  ['E', 'F']
)

const pointE = new Point(
  'pointE',
  ['D', 'F'],
  ['c', 'a', 'A'],
  ['z', 'B'],
  ['f', 'e', 'C']
)

const pointF = new Point(
  'pointF',
  ['E', 'D'],
  ['f', 'z', 'b', 'A'],
  ['e', 'd', 'B'],
  ['C']
)

const pointArray = [pointA, pointB, pointC, pointD, pointE, pointF]

function calc(array) {
  for (let i of array) {
    
  }
}
