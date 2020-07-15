const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(record) {
    // return comboExistence()

const superbowlWin = (record) => {
  return comboExistence(record)
}

function comboExistence(record) {
  if (record.find(combo => combo.result == 'W')) {
    return record.find(combo => combo.result == 'W').year
  } else {
    return undefined
  }
}