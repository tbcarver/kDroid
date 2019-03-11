
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

	setRandomWorldSize();
	setWorldSpeed(95);
	loadWorld();

	// move();
	// move();
	// console.log(isFrontClear());

	while (isFrontClear()) {
		move();
	}
	turnLeft();
	turnLeft();
	turnLeft();
	while (isFrontClear()) {
		move();
	}
	turnLeft();
	turnLeft();
	turnLeft();
	while (isFrontClear()) {
		move();
	}
	turnLeft();
	turnLeft();
	turnLeft();
	while (isFrontClear()) {
		move();
	}
	turnLeft();
	turnLeft();
	turnLeft();

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

	window.setTimeout(function(){

		// turnLeft();
	}, 3000);
}


export { test }