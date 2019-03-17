
importScripts("./dist/kDroid.js");

setRandomWorldSize(12);
setWorldSpeed(100);
setRandomRobotIcon();
loadWorld();

// while (isFrontClear()) {
// 	move();
// 	if (isFrontBlocked()){
// 		turnRight();
// 	}
// }


for (var count=0; count<2;count++){

tileCheckerBoard();
turnAround();

}


function turnRight() {

	turnLeft();
	turnLeft();
	turnLeft();
}

function turnAround() {

	turnLeft();
	turnLeft();
}

function goToWall() {

	while (isFrontClear()) {
		move();
	}
}

function tileToWall() {

	putDownTile();
	while (isFrontClear()) {
		move();
		putDownTile();
	}
}

function cleanToWall() {

	pickUpTile();
	while (isFrontClear()) {
		move();
		pickUpTile();
	}
}

function tileCheckeredToWall() {

	putDownTile();
	while (isFrontClear()) {
		move();
		if (isFrontClear()) {
			move();
			putDownTile();
		}
	}
}

function alternateTileCheckeredToWall() {

	while (isFrontClear()) {
		move();
		putDownTile();
		if (isFrontClear()) {
			move();
		}
	}
}

function tileCheckerBoard() {

	tileCheckeredToWall();
	turnAround();
	goToWall();
	turnLeft();
	while (isFrontClear()) {

		if (isOnTile()) {

			move();
			turnLeft();
			alternateTileCheckeredToWall();
		} else {

			move();
			turnLeft();
			tileCheckeredToWall();
		}

		turnAround();
		goToWall();
		turnLeft();
	}
	turnLeft();
}

function tileAll() {

	tileToWall();
	turnAround();
	goToWall();
	turnLeft();
	while (isFrontClear()) {

		move();
		turnLeft();
		tileToWall();
		turnAround();
		goToWall();
		turnLeft();
	}
}

function cleanAll() {

	cleanToWall();
	turnAround();
	goToWall();
	turnLeft();
	while (isFrontClear()) {

		move();
		turnLeft();
		cleanToWall();
		turnAround();
		goToWall();
		turnLeft();
	}
}