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
})