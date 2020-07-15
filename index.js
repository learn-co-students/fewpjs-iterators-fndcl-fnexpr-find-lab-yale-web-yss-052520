const testVar = {}

function testFunc() {
  return "hi"
}

// an array of objects
function superbowlWin(array){
  const winObj = array.find(object => object.result == "W")
  return (winObj ? winObj.year : undefined )
}