|Behavior|Input|Output|
|:------:|:---:|:----:|
|when a new Board object is made, it should include values for 9 rows, each row an array of 9 empty strings.|var board = new Board()|board.row1 = ["", "", "", "", "", "", "", "", ""] board.row2 = ["", "", "", "", "", "", "", "", ""] board.row3 = ["", "", "", "", "", "", "", "", ""] board.row4 = ["", "", "", "", "", "", "", "", ""] board.row5 = ["", "", "", "", "", "", "", "", ""] board.row6 = ["", "", "", "", "", "", "", "", ""] board.row7 = ["", "", "", "", "", "", "", "", ""] board.row8 = ["", "", "", "", "", "", "", "", ""] board.row9 = ["", "", "", "", "", "", "", "", ""]|
|if array contains repeated numbers, noRepeat() will return false.|[0,1,2,3,4,4,5,6,7]|false|
|if array contains no repeated numbers, noRepeat() will return true.|[0,1,2,3,4,5,6,7,8]|true|
|if getCol() is passed an index between 0 and 8, getCol(3) will return an array of 9 numbers of the correct column.|board.getCol(3)|["", "", "", "", "", "", "", "", ""]|