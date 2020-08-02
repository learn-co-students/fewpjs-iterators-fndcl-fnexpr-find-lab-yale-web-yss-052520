// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(array) {
  let win = array.find( r => r.result === "W")
  if (win == null) {
    return undefined
  }
  return win.year

  // can also do
  // return !!result ? result.year : undefined
}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "L"},
//   {year: "2016", result: "N/A"}
// ]

// console.log(superbowlWin(record))