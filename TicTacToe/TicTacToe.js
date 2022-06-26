let index = 0;
let disableAll = 1;
let winner = 0;
const matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));

function addXorZero(cellId, line, column) {
    if (index % 2 == 0 && index < 9) {
	document.getElementById(cellId).value = "X"; // X = 1
	matrix[line][column] = "X";
    } else if (index % 2 != 0 && index < 9) {
	document.getElementById(cellId).value = "O"; // 0 = 2
	matrix[line][column] = "O";
    }
    ++index;
    document.getElementById(cellId).disabled = true;
    if (index > 4) {
	verifyTheWinner();
    }
}

function verifyTheWinner() {
    for (let i = 0; i <= 2; ++i) { // verifying the lines
	for (let j = 0; j <= 2; j += 3) {
	    if (matrix[i][j] == matrix[i][j + 1] && matrix[i][j + 1] == matrix[i][j + 2] && matrix[i][j] != 0) {
		winner = matrix[i][j];
	    }
	}
    }
    for (let i = 0; i <= 2; i += 3) { // verifying the columns
	for (let j = 0; j <= 2; ++j) {
	    if (matrix[i][j] == matrix[i + 1][j] && matrix[i + 1][j] == matrix[i + 2][j] && matrix[i][j] != 0) {
		winner = matrix[i][j];
	    }
	}
    }
    if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2] && matrix[0][0] != 0) { // verifying the diagonals and draw
	winner = matrix[0][0];
    } else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0] && matrix[0][2] != 0) {
	winner = matrix[0][2];
    }
    if (winner != 0) {
	disableAll = 0;
	document.getElementById('finalResult').innerHTML = "Congratulation " + winner + " won!"
	index += 10;
    }
    if (disableAll == 0) {
	for (let i = 1; i <= 9; ++i) {
	document.getElementById(i).disabled = true;
	}
    }
    if (index == 9) {
	document.getElementById("finalResult").innerHTML = "DRAW";
    }
}
