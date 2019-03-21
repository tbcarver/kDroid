
import { appState } from "./appState.js";
import { coreMath } from "../lib/core/extensions/core-math.js"
import { appController } from "./app.controller.js";

var worldState = appState.world;

var appControllerWorld = {};

appControllerWorld.setWorldStateSize = function(rowsCount, columnsCount) {

	worldState.rowsCount = rowsCount;
	worldState.columnsCount = worldState.rowsCount;

	if (columnsCount) {

		worldState.columnsCount = columnsCount;
	}
}

appControllerWorld.setRandomWorldStateSize = function(rowsCount, columnsCount) {

	var randomRowsCount = coreMath.randomInteger(1, 12);
	var randomColumnsCount = coreMath.randomInteger(1, 12);

	if (rowsCount && rowsCount >= 1) {

		randomRowsCount = rowsCount;

		if (!columnsCount) {

			randomColumnsCount = randomRowsCount;
		}
	}

	if (columnsCount && columnsCount >= 1) {

		randomColumnsCount = columnsCount;
	}

	worldState.rowsCount = randomRowsCount;
	worldState.columnsCount = randomColumnsCount;
}

/**
 * Speed of the world
 * @param speed 100 for the fastest and 1 for the slowest
 */
appControllerWorld.setWorldStateSpeed = function(speed) {

	if (speed < 1) {

		speed = 1;

	} else if (speed > 100) {

		speed = 100;
	}

	var invertedSpeed = 100 - speed;
	var fastestDuration = 1;
	var slowestDuration = 1000;

	worldState.duration = ((slowestDuration - fastestDuration) * (invertedSpeed / 100)) + fastestDuration;
}

// SEE: worldController.loadWalls for an explanation of the walls coordinate system.
appControllerWorld.setWalls = function(topWalls, leftWalls) {

	appController.initializeOuterWalls(worldState);

	if (topWalls) {
		
		for (var index = 0; index < topWalls.length; index++) {

			var rowIndex = topWalls[index][0];
			var columnIndex = topWalls[index][1];

			// NOTE: Top walls allow for the row index to be equal to the row count
			if (rowIndex <= worldState.rowsCount && columnIndex < worldState.columnsCount) {

				worldState.topWalls.add(rowIndex, columnIndex);
			}
		}
	}

	if (leftWalls) {
		
		for (var index = 0; index < topWalls.length; index++) {

			var rowIndex = leftWalls[index][0];
			var columnIndex = leftWalls[index][1];

			// NOTE: Left walls allow for the column index to be equal to the column count
			if (rowIndex < worldState.rowsCount && columnIndex <= worldState.columnsCount) {

				worldState.leftWalls.add(rowIndex, columnIndex);
			}
		}
	}
}

appControllerWorld.setTileBackgroundColor = function(backgroundColor) {

	worldState.tileBackgroundColor = backgroundColor;
}

appControllerWorld.setTiles = function(tileCount) {

	appController.initializeTilesCounts(worldState);

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			worldState.tileCounts[rowIndex][columnIndex] = tileCount;
		}
	}
}

appControllerWorld.setRandomTiles = function(tileCount, tileChance) {

	appController.initializeTilesCounts(worldState);

	if (!tileChance) {

		tileChance = 40;
	}

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			if (coreMath.randomBooleanForPercent(tileChance)) {

				worldState.tileCounts[rowIndex][columnIndex] = coreMath.randomInteger(1, 6);

				if (tileCount && tileCount >= 1) {

					worldState.tileCounts[rowIndex][columnIndex] = tileCount;
				}
			}
		}
	}
}


export { appControllerWorld }