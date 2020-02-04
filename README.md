|Behavior|Input|Output|
|:------:|:---:|:----:|
|When a new Board object is created, Board.rows should equal an empty array|var board = new Board()|board.rows === []|
|When a new Row object is created, Row.values should equal an array of 9 empty strings|var row1 = new Row()|row1.values === ["", "", "", "", "", "", "", "", ""]|
|when a new Row is pushed to the Board.rows array, it should be added to the array.|Board.addRow(row1)|board.rows[0] = ["", "", "", "", "", "", "", "", ""]|
|if array contains repeated numbers, noRepeat() will return false.|[0,1,2,3,4,4,5,6,7]|false|
|if array contains no repeated numbers, noRepeat() will return true.|[0,1,2,3,4,5,6,7,8]|true|
|if getCol() is passed an index between 0 and 8, getCol(3) will return an array of 9 numbers of the correct column.|board.getCol(3)|["", "", "", "", "", "", "", "", ""]|