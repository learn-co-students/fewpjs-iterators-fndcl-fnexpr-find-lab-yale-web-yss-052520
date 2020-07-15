const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){
  let object =  arr.find(obj => obj.result == "W")
  if (object){
    return object.year
  }
  else {
    return undefined
  }

}