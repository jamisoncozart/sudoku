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
  return false;
}