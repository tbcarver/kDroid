
import { robotIcons } from "./robotIcons.js";
import { appState } from "./appState.js";
import { coreMath } from "../lib/core/extensions/core-math.js"

var robotState = appState.robot;
var worldState = appState.world;

var appControllerRobot = {};

appControllerRobot.setRobotStateIconName = function(iconName) {

	if (iconName) {

		robotState.iconName = iconName;
	}
}

appControllerRobot.setRandomRobotStateIconName = function(iconName) {

	var keys = Object.keys(robotIcons);
	var randomIndex = coreMath.randomInteger(0, keys.length - 1);
	iconName = keys[randomIndex];

	if (iconName) {

		robotState.iconName = iconName;
	}
}

appControllerRobot.setRobotLocation = function(rowNumber, columnNumber) {

	robotState.rowIndex = rowNumber - 1;
	robotState.columnIndex = robotState.rowIndex;

	if (columnNumber) {

		robotState.columnIndex = columnNumber - 1;
	}
}

appControllerRobot.setRandomRobotLocation = function(rowNumber, columnNumber) {

	var randomRowIndex = coreMath.randomInteger(0, worldState.rowsCount - 1);
	var randomColumnIndex = coreMath.randomInteger(0, worldState.columnsCount - 1);

	if (rowNumber && rowNumber >= 1) {

		randomRowIndex = rowNumber - 1;

		if (!columnNumber) {

			randomColumnIndex = randomRowIndex;
		}
	}

	if (columnNumber && columnNumber >= 1) {

		randomColumnIndex = columnNumber - 1;
	}

	robotState.rowIndex = randomRowIndex;
	robotState.columnIndex = randomColumnIndex;
}

appControllerRobot.setRobotStateDirection = function(direction) {

	if (direction) {

		robotState.direction = direction;
	}
}

var directions = [
	"north",
	"east",
	"south",
	"west"
]

appControllerRobot.setRandomRobotStateDirection = function(direction) {

	var randomIndex = coreMath.randomInteger(0, directions.length - 1);
	direction = directions[randomIndex];

	if (direction) {

		robotState.direction = direction;
	}
}


export { appControllerRobot }