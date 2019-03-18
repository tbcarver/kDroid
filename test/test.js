
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
	setWorldSpeed(90);
	// setRobotDirection("south");
	setRandomRobotIcon();
	// setRobotIcon("android");
	setRandomTiles(-1);
	loadWorld();

	// tileCheckerBoard();
	cleanToWall();
		

	// setTileColor("black");
	// tileCheckeredToWall();
	// turnRight();
	// move();
	// setTileColor("lightblue");
	// tileCheckeredToWall();

	
	// putDownTile();
	// putDownTile();
	// putDownTile();
	// pickUpTile();
	// pickUpTile();
	// pickUpTile();
	// move();
	// move();
	// setTileColor("black");
	// tileCheckerBoard();
	// setTileColor("lightblue");
	// turnAround();
	// tileCheckerBoard();
	// // turnRight();
	// tileAll();
	// turnAround();
	// tileAll();
	// // turnAround();
	// tileAll();
	// turnAround();
	// cleanAll();
	// turnAround();
	// cleanAll();
	// turnAround();
	// cleanAll();

	// tileCheckerBoard();

	// putDownTile();
	// turnLeft();

	// turnLeft();
	// turnLeft();
	// turnAround();
	// move();
	// putDownTile();

	// tileToWall();
	// turnAround();
	// tileCheckeredToWall();
	// turnAround();
	// alternateTileCheckeredToWall();
	// turnAround();
	// cleanToWall();

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

	while (isOnTile()) {
		pickUpTile();
	}
	while (isFrontClear()) {
		move();
		while (isOnTile()) {
			pickUpTile();
		}
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

export { test }