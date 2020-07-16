const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(arr) {
//   let result = arr.find( function(obj) {obj.result === "W"})
//   if (result) {
//     return result.year
//   }
// }

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}
