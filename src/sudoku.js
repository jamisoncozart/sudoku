export function Board() {
  this.rows = [];
}

Board.prototype.addRow = function(row) {
  this.rows.push(row);
}

export function Row() {
  this.values = [0,0,0,0,0,0,0,0,0];
}

export function noRepeat(numArray) {
  for(var i = 0; i < numArray.length; i++) {
    var currentNum = numArray[i];
    for(var x = 0; x < numArray.length; x++) {
      if(currentNum === numArray[x] && x !== i) {
        return false;
      }
    }
  }
  return true;
}