// const testVar = {}
// const record = [
//   { year: "2018", result: "L" },
//   { year: "2017", result: "W" },
//   { year: "2016", result: "N/A" }
// ]

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  let winningTeam = record.find( record => record.result === "W")
  return winningTeam ? winningTeam.year : undefined
}