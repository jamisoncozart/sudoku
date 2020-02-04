import { Board } from "./../src/sudoku.js"
import { exportAllDeclaration } from "@babel/types";

describe('Sudoku', () => {
  test('should correctly create a board object with 9 rows, each row being an array of 9 empty strings', () => {
    var board = new Board();
    expect(board.row1).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row2).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row3).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row4).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row5).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row6).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row7).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row8).toEqual(["", "", "", "", "", "", "", "", ""]);
    expect(board.row9).toEqual(["", "", "", "", "", "", "", "", ""]);
  })
})