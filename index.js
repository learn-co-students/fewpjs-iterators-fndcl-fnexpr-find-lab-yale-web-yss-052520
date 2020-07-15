const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let victory = arr.find(obj => obj.result == "W")

  if (victory){
    return arr.find(obj => obj.result == "W").year
  }
}