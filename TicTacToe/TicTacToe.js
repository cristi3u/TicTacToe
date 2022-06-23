let index = 0;
let disableAll = 1;
const matrix = new Array(3).fill(0).map(() => new Array(3).fill(0));
for (let i = 0; i <= 2; ++i) {
	for (let j = 0; j <= 2; ++j) {
		matrix[i][j] = Math.floor((Math.random() * 100) + 1);
	}
}

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
	for (let i = 0; i <= 2; ++i) { // verifying the lines
		for (let j = 0; j <= 2; j += 3) {
			if (matrix[i][j] == matrix[i][j + 1] && matrix[i][j + 1] == matrix[i][j + 2]) {
				if (matrix[i][j] == 1) {
					document.getElementById('finalResult').innerHTML = "Congratulation X won!"
					disableAll = 0;
					index += 10;
				} else {
					document.getElementById('finalResult').innerHTML = "Congratulation 0 won!"
					disableAll = 0;
					index += 10;
				}
			}
		}
	}
	for (let i = 0; i <= 2; i += 3) { // verifying the columns
		for (let j = 0; j <= 2; ++j) {
			if (matrix[i][j] == matrix[i + 1][j] && matrix[i + 1][j] == matrix[i + 2][j]) {
				if (matrix[i][j] == 1) {
					disableAll = 0;
					document.getElementById('finalResult').innerHTML = "Congratulation X won!"
					index += 10;
				} else {
					disableAll = 0;
					document.getElementById('finalResult').innerHTML = "Congratulation 0 won!"
					index += 10;
				}
			}
		}
	}
	if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) { // verifying the diagonals and draw
		if (matrix[0][0] == 1) {
			disableAll = 0;
			document.getElementById('finalResult').innerHTML = "Congratulation X won!"
			index += 10;
		} else {
			disableAll = 0;
			document.getElementById('finalResult').innerHTML = "Congratulation 0 won!"
			index += 10;
		}
	} else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
		if (matrix[0][2] == 1) {
			disableAll = 0;
			document.getElementById('finalResult').innerHTML = "Congratulation X won!"
			index += 10;
		} else {
			disableAll = 0;
			document.getElementById('finalResult').innerHTML = "Congratulation 0 won!"
			index += 10;
		}
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