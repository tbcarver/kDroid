
import { appState } from "./appState.js";
import { coreMath } from "../lib/core/extensions/core-math.js"
import { appController } from "./app.controller.js";

var worldState = appState.world;

var appControllerWorld = {};

appControllerWorld.setWorldStateSize = function(rowsCount, columnsCount) {

	worldState.rowsCount = rowsCount;
	worldState.columnsCount = rowsCount;

	if (columnsCount) {

		worldState.columnsCount = columnsCount;
	}
}

appControllerWorld.setRandomWorldStateSize = function(rowsCount, columnsCount) {

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
appControllerWorld.setWorldStateSpeed = function(speed) {

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

appControllerWorld.setTileBackgroundColor = function(backgroundColor) {

	worldState.tileBackgroundColor = backgroundColor;
}

appControllerWorld.setRandomTiles = function(tileCount, tileChance) {

	appController.initializeTilesCounts(worldState);

	if (!tileChance) {

		tileChance = 40;
	}

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

			if (coreMath.randomBooleanForPercent(tileChance)) {

				if (!tileCount || tileCount === -1) {

					worldState.tileCounts[rowIndex][columnIndex] = coreMath.randomInteger(1, 6);

				} else {

					worldState.tileCounts[rowIndex][columnIndex] = tileCount;
				}
			}
		}
	}
}


export { appControllerWorld }