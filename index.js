const testVar = {}

function testFunc() {
  return "hi"
}
let superbowlWin = (array) => {
  let win = array.find(val => val.result == "W");
  return (win) ? win.year : win;
};