function superbowlWin(arr) {
  const game = arr.find(el => el.result == "W")
  return game ? game.year : game
}
