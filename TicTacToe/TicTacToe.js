let index = 0;
let disableAll = 1;
const matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));

function addXorZero(cellId, line, column) {
    if (index % 2 == 0 && index < 9) {
	document.getElementById(cellId).value = "X"; // X = 1
	matrix[line][column] = 1;
    } else if (index % 2 != 0 && index < 9) {
	document.getElementById(cellId).value = "0"; // 0 = 2
	matrix[line][column] = 2;
    }
    ++index;
    document.getElementById(cellId).disabled = true;
    if (index > 4) {
	verifyTheWinner();
    }
}

function verifyTheWinner() {
    let winner = 0;
    for (let i = 0; i <= 2; ++i) { // verifying the lines
	for (let j = 0; j <= 2; j += 3) {
	    if (matrix[i][j] == matrix[i][j + 1] && matrix[i][j + 1] == matrix[i][j + 2]) {
		if (matrix[i][j] == 1) {
		    winner = 1; // X winner
		} else if (matrix[i][j] == 2) {
		    winner = 2; // 0 winner 
		}
	    }
	}
    }
	for (let i = 0; i <= 2; i += 3) { // verifying the columns
	    for (let j = 0; j <= 2; ++j) {
		if (matrix[i][j] == matrix[i + 1][j] && matrix[i + 1][j] == matrix[i + 2][j]) {
		    if (matrix[i][j] == 1) {
			winner = 1; // X winner
		    } else if (matrix[i][j] == 2) {
			winner = 2; // 0 winner
		    }
		}
	    }
	}
	if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) { // verifying the diagonals and draw
	    if (matrix[0][0] == 1) {
		winner = 1; // X winner
	    } else if (matrix[0][0] == 2) {
		winner = 2; // 0 winner
	    }
	} else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
	    if (matrix[0][2] == 1) {
		winner = 1; // X winner
	} else if (matrix[0][2] == 2) {
	    winner = 2; // 0 winner
	}
    }
    if (winner == 1) {
	disableAll = 0;
	document.getElementById('finalResult').innerHTML = "Congratulation X won!"
	index += 10;
    } else if (winner == 2) {
	disableAll = 0;
	document.getElementById('finalResult').innerHTML = "Congratulation 0 won!"
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
