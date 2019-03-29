
function test() {

	// 	setWorldSize(sizeNumber) - sets the size of the world
	// 	setRandomWorldSize() - sets a random world size from 1 to 16
	// 	setWorldSpeed(speedNumber) - sets the speed of the world, 0 (slowest) to 100 (fastest)
	// 	setWorldRandomTiles(countOfTilesNumber) - sets tiles in random locations throughout the world, 0 sets a random amount of tiles

	// setRobotLocation(rowNumber, columnNumber) - sets the start position of the robot
	// setRobotDirection(directionNumber) - sets the start direction of the robot
	// setRobotTiles(number) - sets the start amount of tiles the robots has, -1 if infinite tiles

	setRandomWorldSize();
	setWorldSpeed(70);
	// setRobotDirection("south");
	setRandomRobotIcon();
	// setRobotIcon("android");
	setRandomTiles(-1, 90);


	// setRandomRobotDirection();
	// setRandomRobotLocation();
	// setTiles(1);

	var topWalls = [];
	var leftWalls = [];

	// topWalls.push([1, 0]);
	// topWalls.push([2, 0]);
	// topWalls.push([3, 0]);
	topWalls.push([1, 1]);
	topWalls.push([2, 2]);
	topWalls.push([3, 3]);

	leftWalls.push([1, 1]);
	leftWalls.push([2, 2]);
	leftWalls.push([3, 3]);

	// setWalls(topWalls, leftWalls);



	loadWorld();

	var count = 0;

	// log("hello " + count++);
	// log("hello " + count++);
	// log("hello " + count++);
	// log("hello " + count++);
	// log("hello " + count++);
	// log("hello " + count++);

	// setInterval(function() {
	// 	log("hello " + count++);
	// }, 1000);

	log(3454);

	cleanAll();


	// tileCheckerBoard();
	// cleanToWall();


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

function walkAll() {

	goToWall();
	turnAround();
	goToWall();
	turnLeft();
	while (isFrontClear()) {

		move();
		turnLeft();
		goToWall();
		turnAround();
		goToWall();
		turnLeft();
	}
}

export { test }