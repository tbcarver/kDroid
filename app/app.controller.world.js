
import { appState } from "./appState.js";
import { coreMath } from "../lib/core/extensions/core-math.js"
import { appController } from "./app.controller.js";
import { viewFactory } from "./viewFactory.js";

var worldState = appState.world;

var appControllerWorld = {};

appControllerWorld.getWorldSize = function() {

	var size = {
		rowsCount: worldState.rowsCount,
		columnsCount: worldState.columnsCount
	}

	return size;
}

appControllerWorld.setWorldSize = function(rowsCount, columnsCount) {

	if (rowsCount) {

		worldState.rowsCount = rowsCount;
		worldState.columnsCount = worldState.rowsCount;

		if (columnsCount) {

			worldState.columnsCount = columnsCount;
		}
	}
}

function setRandomWorldSize(rowsCount, columnsCount, minRowsCount, minColumnsCount,
	maxRowsCount, maxColumnsCount, randomFunction) {

	minRowsCount = minRowsCount ? minRowsCount : 1;
	minColumnsCount = minColumnsCount ? minColumnsCount : 1;
	maxRowsCount = maxRowsCount ? maxRowsCount : 12;
	maxColumnsCount = maxColumnsCount ? maxColumnsCount : 12;

	var randomRowsCount = randomFunction(minRowsCount, maxRowsCount);
	var randomColumnsCount = randomFunction(minColumnsCount, maxColumnsCount);

	if (rowsCount && rowsCount >= 1) {

		randomRowsCount = rowsCount;

		if (!columnsCount) {

			randomColumnsCount = randomRowsCount;
		}
	}

	if (columnsCount && columnsCount >= 1) {

		randomColumnsCount = columnsCount;
	}

	// Make a square when both values are set to random.
	if (rowsCount && columnsCount &&
		rowsCount < 1 && columnsCount < 1) {

		randomColumnsCount = randomRowsCount;
	}

	worldState.rowsCount = randomRowsCount;
	worldState.columnsCount = randomColumnsCount;
}

appControllerWorld.setRandomWorldSize = function(rowsCount, columnsCount, minRowsCount, minColumnsCount,
	 maxRowsCount, maxColumnsCount) {

		setRandomWorldSize(rowsCount, columnsCount, minRowsCount, minColumnsCount,
			 maxRowsCount, maxColumnsCount, coreMath.randomInteger)
}

appControllerWorld.setRandomOddWorldSize = function(rowsCount, columnsCount, minRowsCount, minColumnsCount,
	 maxRowsCount, maxColumnsCount) {

	setRandomWorldSize(rowsCount, columnsCount, minRowsCount, minColumnsCount, maxRowsCount,
		 maxColumnsCount, coreMath.randomOddInteger)
}

appControllerWorld.setRandomEvenWorldSize = function(rowsCount, columnsCount, minRowsCount, minColumnsCount,
	 maxRowsCount, maxColumnsCount) {

	setRandomWorldSize(rowsCount, columnsCount, minRowsCount, minColumnsCount, maxRowsCount,
		 maxColumnsCount, coreMath.randomEvenInteger)
}


/**
 * Set the speed of the world.
 * @param speed 100 for the fastest and 1 for the slowest
 */
appControllerWorld.setWorldSpeed = function(speed) {

	if (speed < 1) {

		speed = 1;

	} else if (speed > 100) {

		speed = 100;
	}

	var invertedSpeed = 100 - speed;
	var fastestDuration = 1;
	var slowestDuration = 1000;

	var animationDuration = ((slowestDuration - fastestDuration) * (invertedSpeed / 100)) + fastestDuration;
	var appView = viewFactory.getView("appView");

	appView.setAnimationDuration(animationDuration);
}

// SEE: worldController.loadWalls for an explanation of the walls coordinate system.
// The coordinates are 1 based numbers, not 0 based indexes.
appControllerWorld.setWalls = function(topWalls, leftWalls) {

	appController.initializeOuterWalls(worldState);

	if (topWalls) {

		for (var index = 0; index < topWalls.length; index++) {

			var rowIndex = topWalls[index][0] - 1;
			var columnIndex = topWalls[index][1] - 1;

			// NOTE: Top walls allow for the row index to be equal to the row count.
			if (rowIndex <= worldState.rowsCount && columnIndex < worldState.columnsCount) {

				worldState.topWalls.add(rowIndex, columnIndex);
			}
		}
	}

	if (leftWalls) {

		for (var index = 0; index < leftWalls.length; index++) {

			var rowIndex = leftWalls[index][0] - 1;
			var columnIndex = leftWalls[index][1] - 1;

			// NOTE: Left walls allow for the column index to be equal to the column count.
			if (rowIndex < worldState.rowsCount && columnIndex <= worldState.columnsCount) {

				worldState.leftWalls.add(rowIndex, columnIndex);
			}
		}
	}
}

appControllerWorld.getTileBackgroundColor = function() {

	var appView = viewFactory.getView("appView");

	appView.getTileBackgroundColor(backgroundColor);
}

appControllerWorld.setTileBackgroundColor = function(backgroundColor) {

	var appView = viewFactory.getView("appView");

	appView.setTileBackgroundColor(backgroundColor);
}

appControllerWorld.setTiles = function(tileCount) {

	appController.initializeTilesCounts(worldState);

	if (tileCount < 1) {

		tileCount = coreMath.randomInteger(1, 6);
	}

	if (!tileCount) {

		tileCount = 1;
	}

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

appControllerWorld.setTile = function(rowNumber, columnNumber, tileCount) {

	appController.initializeTilesCounts(worldState);

	var rowIndex = rowNumber - 1;
	var columnIndex = columnNumber - 1;

	if (tileCount < 1) {

		tileCount = coreMath.randomInteger(1, 6);
	}

	if (!tileCount) {

		tileCount = 1;
	}

	if (rowIndex >= 0 && columnIndex >= 0) {

		if (rowIndex < worldState.rowsCount && columnIndex < worldState.columnsCount) {

			worldState.tileCounts[rowIndex][columnIndex] = tileCount;
		}
	} else if (rowIndex >= 0 && rowIndex < worldState.rowsCount) {

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			worldState.tileCounts[rowIndex][columnIndex] = tileCount;
		}

	} else if (columnIndex >= 0 && columnIndex < worldState.columnsCount) {

		for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

			worldState.tileCounts[rowIndex][columnIndex] = tileCount;
		}
	}
}


export { appControllerWorld }