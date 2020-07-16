const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(Array) {
  let result = Array.find(record => record.result === "W")
  if (result) {
    return result.year
  } else {
    return undefined
  }
}