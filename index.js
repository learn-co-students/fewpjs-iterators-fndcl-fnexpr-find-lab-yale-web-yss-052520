const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objects){
  const game = objects.find(function(object){
    if (object.result === "W"){
      return true 
    }
  }) 
  if (game == null){
    return game 
  } else {
    return game.year 
  }
}
