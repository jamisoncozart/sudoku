export function Board() {
  this.rows = [];
}

Board.prototype.addRow = function(row) {
  this.rows.push(row);
}

Board.prototype.getCol = function(index) {
  var column = [];
  this.rows.forEach(function(row) {
    column.push(row.values[index]);
  })
  return column;
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