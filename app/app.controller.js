
import { worldController } from "./world.controller.js";
import { robotController } from "./robot.controller.js";
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
	var fastestDuration = 50;
	var slowestDuration = 2000;

	worldState.duration = ((slowestDuration - fastestDuration) * (invertedSpeed / 100)) + fastestDuration;
}

function initializeColors() {

	var randomHue = Math.round(Math.random() * 255);

	robotState.backgroundColor = "hsl(" + randomHue + ", 40%, 65%)";

	worldState.backgroundColor = "hsl(" + randomHue + ", 100%, 100%)";
	worldState.borderBackgroundColor = "hsl(" + randomHue + ", 40%, 90%)";
	worldState.wallBackgroundColor = "hsl(" + randomHue + ", 50%, 25%)";
	worldState.tileBackgroundColor = "hsl(" + randomHue + ", 45%, 45%)";
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