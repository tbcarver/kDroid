
import { appView } from "./app.view.js";
import { worldController } from "./world.controller.js";
import { robotController } from "./robot.controller.js";
import { robotIcons } from "./robotIcons.js";
import { appState } from "./appState.js";
import { coreMath } from "../lib/core/extensions/core-math.js"
import { DoubleKeyHashSet } from "../lib/core/collections/double-key-hash-set.js";

var worldState = appState.world;
var robotState = appState.robot;

var appController = {};

appController.load = function() {

	initializeColors(worldState);
	initializeOuterWalls(worldState);
	initializeTilesCounts(worldState);

	appView.render();

	worldController.load();
	robotController.load();
}

appController.setWorldStateSize = function(rowsCount, columnsCount) {

	worldState.rowsCount = rowsCount;
	worldState.columnsCount = rowsCount;

	if (columnsCount) {

		worldState.columnsCount = columnsCount;
	}
}

appController.setRandomWorldStateSize = function(rowsCount, columnsCount) {

	var randomRowsCount = coreMath.randomInteger(1, 12);
	var randomColumnsCount = coreMath.randomInteger(1, 12);

	if (rowsCount) {

		if (rowsCount !== -1) {

			randomRowsCount = rowsCount;

			if (!columnsCount) {

				randomColumnsCount = rowsCount;
			}
		}
	}

	if (columnsCount) {

		if (columnsCount !== -1) {

			randomColumnsCount = columnsCount;
		}
	}

	worldState.rowsCount = randomRowsCount;
	worldState.columnsCount = randomColumnsCount;
}

/**
 * Speed of the world
 * @param speed 100 for the fastest and 1 for the slowest
 */
appController.setWorldStateSpeed = function(speed) {

	if (speed < 1) {

		speed = 1;

	} else if (speed > 100) {

		speed = 100;
	}

	var invertedSpeed = 100 - speed;
	var fastestDuration = 10;
	var slowestDuration = 2000;

	worldState.duration = ((slowestDuration - fastestDuration) * (invertedSpeed / 100)) + fastestDuration;
}

appController.setRobotStateIconName = function(iconName) {

	if (iconName) {

		robotState.iconName = iconName;
	}
}

appController.setRandomRobotStateIconName = function(iconName) {

	if (!iconName) {

		var keys = Object.keys(robotIcons);
		var randomIndex = coreMath.randomInteger(0, keys.length - 1);
		iconName = keys[randomIndex];
	}

	robotState.iconName = iconName;
}

appController.setRobotStateDirection = function(direction) {

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

appController.setRandomRobotStateDirection = function(direction) {

	if (!direction) {

		var randomIndex = coreMath.randomInteger(0, directions.length - 1);
		direction = directions[randomIndex];
	}

	robotState.direction = direction;
}

appController.setTileBackgroundColor= function(backgroundColor) {

	worldState.tileBackgroundColor = backgroundColor;
}

function initializeColors() {

	var randomHue = Math.round(Math.random() * 255);
	var complimentaryHue = randomHue + 128;
	
	if (randomHue > 128) {

		complimentaryHue = 256 - 128 - randomHue;
	}

	robotState.backgroundColor = "hsl(" + complimentaryHue + ", 40%, 35%)";
	// worldState.backgroundColor = "hsl(" + randomHue + ", 100%, 100%)";
	worldState.borderBackgroundColor = "hsl(" + randomHue + ", 40%, 90%)";
	worldState.wallBackgroundColor = "hsl(" + complimentaryHue + ", 50%, 25%)";
	worldState.tileBackgroundColor = "hsl(" + randomHue + ", 45%, 65%)";	
	worldState.messageBoxBackgroundColor = "hsl(" + complimentaryHue + ", 40%, 40%)";
}

function initializeOuterWalls(worldState) {

	var topWalls = new DoubleKeyHashSet();
	var leftWalls = new DoubleKeyHashSet();

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			if (rowIndex === 0) {

				topWalls.add(rowIndex, columnIndex);
			}

			if (rowIndex === worldState.rowsCount - 1) {

				topWalls.add(rowIndex + 1, columnIndex);
			}

			if (columnIndex === 0) {

				leftWalls.add(rowIndex, columnIndex);
			}

			if (columnIndex === worldState.columnsCount - 1) {

				leftWalls.add(rowIndex, columnIndex + 1);
			}
		}
	}

	worldState.topWalls = topWalls;
	worldState.leftWalls = leftWalls;
}

function initializeTilesCounts(worldState) {

	var tileCounts = [];
	var currentRow;

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		currentRow = [];
		tileCounts.push(currentRow);

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			currentRow.push(0);
		}
	}

	worldState.tileCounts = tileCounts;
}


export { appController }