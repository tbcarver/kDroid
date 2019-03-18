
import { worldController } from "./mvc/world.controller.js";
import { robotController } from "./mvc/robot.controller.js";
import { messageBoxController } from "./mvc/messageBox.controller.js";
import { viewFactory } from "./viewFactory.js";
import { appState } from "./appState.js";
import { DoubleKeyHashSet } from "../lib/core/collections/double-key-hash-set.js";

var worldState = appState.world;
var robotState = appState.robot;

var appController = {};

appController.load = function() {

	this.initializeColors(worldState);
	this.initializeOuterWalls(worldState);
	this.initializeTilesCounts(worldState);

	worldController.load();
	robotController.load();
	messageBoxController.load();
}

appController.loadThreaded = function() {

	viewFactory.loadThreaded();

	this.load();
}

appController.initializeColors = function() {

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

appController.initializeOuterWalls = function(worldState) {

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