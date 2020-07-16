const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let found = record.find(obj => obj.result == "W")
  return found ? found.year : undefined
}