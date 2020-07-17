const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin= (array) => {
  let thing = array.find(game => {
    return game.result === "W"
  })
  return thing ? thing.year : undefined
}

ssuperbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}