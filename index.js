const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(ar) {
  let found = ar.find(e => e.result==="W")
  return found ? found.year : found
}

