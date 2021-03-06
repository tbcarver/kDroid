
importScripts("../dist/threaded/kDroidFunctions.js");


kDroidApp.addEventListener("load", function(event) {

	var worldState = event.appState.world;

	// console.log(event.appState);

	logInternal("The program started. " + worldState.rowsCount + " x " + worldState.columnsCount);
	// setToast("started", "green")
	// setToast
	// setMessage("more started", "blue")
	// log("more started", "blue")
	// setMessage("error", null, true);
});


setRandomEvenWorldSize(3);
// setRandomWorldSize(3);
// setWorldSpeed(70);
// setRandomWorldSize(1);
// setWorldSpeed(70);
// setRobotDirection("south");
// setRandomRobotIcon("robot-square");
// setRobotIcon("android");


// setRandomRobotDirection();
// setRandomRobotLocation();
// setTile(1, 1, -1);
loadWorld();

// while (isFrontClear()) {
// 	move();
// 	if (isFrontBlocked()){
// 		turnRight();
// 	}
// }



logQuestion("how many")
logAnswer("100")

console.log("asdf", kDroidApp.getAppState())

// turnAround()
// move()

// setToast("Frosty");

// setTileColor("red");

// for (var count = 0; count < 8; count++) {

// 	tileToWall();
// 	turnAround();

// 	log("tiled to wall: " + (count + 1));
// }


function turnLeft() {

	turnRight();
	turnRight();
	turnRight();
}

function turnAround() {

	turnRight();
	turnRight();
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