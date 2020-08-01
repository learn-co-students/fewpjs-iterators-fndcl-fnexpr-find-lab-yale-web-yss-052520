function superbowlWin(sbInfo) {
  let win = sbInfo.find(sb => {
  	return sb.result === "W"
  })

  if (win != undefined) {
  	return win.year
  } else {
  	return win
  }
}
