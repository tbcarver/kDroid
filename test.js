
function test() {

	// move();
	// move();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// // turnLeft();
	// turnLeft();

	// 	setWorldSize(sizeNumber) - sets the size of the world
	// 	setRandomWorldSize() - sets a random world size from 1 to 16
	// 	setWorldSpeed(speedNumber) - sets the speed of the world, 0 (slowest) to 100 (fastest)
	// 	setWorldRandomTiles(countOfTilesNumber) - sets tiles in random locations throughout the world, 0 sets a random amount of tiles

	// setRobotPosition(streetNumber, avenueNumber) - sets the start position of the robot
	// setRobotDirection(directionNumber) - sets the start direction of the robot
	// setRobotTiles(number) - sets the start amount of tiles the robots has, -1 if infinite tiles

	setRandomWorldSize(1, -1);
	setWorldSpeed(80);
	setRobotDirection("south");
	loadWorld();

	// putDownTile();
	turnLeft();

	tileToWall();
	turnAround();
	tileCheckeredToWall();
	turnAround();
	alternateTileCheckeredToWall();
	turnAround();
	cleanToWall();

	// putDownTile();
	// putDownTile();
	// putDownTile();
	// putDownTile();
	// pickUpTile();
	// pickUpTile();
	// pickUpTile();
	// pickUpTile();

	// tileCheckerBoard();
	// tileCheckerBoard();
	// turnRight();
	// putDownTile();
	// move();
	// turnLeft();
	// move();

	// tileToWall();
	// turnAround();
	// goToWall();
	// turnLeft();
	// while (isFrontClear()) {

	// 	if (isOnTile()) {

	// 		move();
	// 		turnLeft();
	// 		alternateTileToWall();
	// 	} else {
			
	// 		move();
	// 		turnLeft();
	// 		tileToWall();
	// 	}

	// 	turnAround();
	// 	goToWall();
	// 	turnLeft();
	// }


	// move();
	// move();
	// console.log(isFrontClear());

	// turnRight()
	// putDownTile();
	// while (isFrontClear()) {
	// 	move();
	// 	putDownTile();
	// }
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// putDownTile();
	// while (isFrontClear()) {
	// 	move();
	// 	putDownTile();
	// }
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// putDownTile();
	// while (isFrontClear()) {
	// 	move();
	// 	putDownTile();
	// }
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// putDownTile();
	// while (isFrontClear()) {
	// 	move();
	// 	putDownTile();
	// }
	// turnLeft();
	// turnLeft();
	// turnLeft();

	// move();
	// move();
	// turnLeft();
	// turnLeft();
	// move();
	// move();
	// turnLeft();
	// move();
	// move();
	// turnLeft();
	// turnLeft();
	// move();
	// move();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// turnLeft();
	// move();
	// move();
	// turnLeft();

	window.setTimeout(function() {

		// turnLeft();
	}, 3000);

	console.log("DONE");
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

export { test }