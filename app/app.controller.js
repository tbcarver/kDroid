
import { worldController } from "./mvc/world.controller.js";
import { robotController } from "./mvc/robot.controller.js";
import { messageBoxController } from "./mvc/messageBox.controller.js";
import { consoleController } from "./mvc/console.controller.js";
import { viewFactory } from "./viewFactory.js";
import { appState } from "./appState.js";
import { DoubleKeyHashSet } from "../lib/core/collections/double-key-hash-set.js";

var appView;
var worldState = appState.world;

var appController = {};

appController.load = function() {

    appView = viewFactory.getView("appView");

	this.initializeOuterWalls(worldState);
	this.initializeTilesCounts(worldState);
	
	appView.initializeColors();
	appView.initializePlaceholders(worldState.rowsCount, worldState.columnsCount, appState.console.enabled);

	worldController.load();
	robotController.load();
	messageBoxController.load();

	if (appState.console.enabled) {
		
		consoleController.load();
		consoleController.logInternal("The program started.");
	}
}

appController.loadThreaded = function() {

	viewFactory.loadThreaded();

	this.load();
}

// SEE: worldController.loadWalls for an explanation of the walls coordinate system.
appController.initializeOuterWalls = function(worldState) {

	if (!DoubleKeyHashSet.prototype.isPrototypeOf(worldState.topWalls)) {

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
}

appController.initializeTilesCounts = function(worldState) {

	if (worldState.tileCounts.length < 1) {

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
}


export { appController }