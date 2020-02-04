export function Board() {
  this.rows = [];
}

Board.prototype.addRow = function(row) {
  this.rows.push(row);
}

export function Row() {
  this.values = ["", "", "", "", "", "", "", "", ""];
}