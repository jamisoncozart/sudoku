import { Board } from "./../src/sudoku.js";
import { Row } from "./../src/sudoku.js";
import { noRepeat } from "./../src/sudoku.js";

describe('Sudoku', () => {
  test('should correctly create a board object with an empty rows array', () => {
    var board = new Board();
    expect(board.rows).toEqual([]);
  })
  test('should correctly create a row object with a values array of 9 empty strings', () => {
    var row1 = new Row();
    expect(row1.values).toEqual([0,0,0,0,0,0,0,0,0]);
  })
  test('should add a new row to Board.rows array when the add.Row() method is called', () => {
    var board = new Board();
    var row = new Row();
    board.addRow(row);
    expect(board.rows[0]).toEqual(row);
  })
  test('should check that noRepeat() returns false when given an array that contains repeated numbers', () => {
    expect(noRepeat([0,0,0,0,0,0,0,0,0])).toEqual(false);
  })
  test('should check that noRepeat() returns true when given an array that contains no repeated numbers', () => {
    expect(noRepeat([0,1,2,3,4,5,6,7,8])).toEqual(true);
  })
  test('should check if getCol() returns an array of 9 numbers if given an index between 0 and 8', () => {
    var board = new Board();
    var row1 = new Row();
    board.addRow(row1);
    var row2 = new Row();
    board.addRow(row2);
    var row3 = new Row();
    board.addRow(row3);
    var row4 = new Row();
    board.addRow(row4);
    var row5 = new Row();
    board.addRow(row5);
    var row6 = new Row();
    board.addRow(row6);
    var row7 = new Row();
    board.addRow(row7);
    var row8 = new Row();
    board.addRow(row8);
    var row9 = new Row();
    board.addRow(row9);
    expect(board.getCol(3)).toEqual([0,0,0,0,0,0,0,0,0]);
  })
})

