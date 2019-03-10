
import { worldView } from "./world.view.js";
import { appState } from "./appState.js";

var worldState = appState.world;

var worldController = {};

worldController.load = function(worldOptions) {

    worldState.rowsCount = worldOptions.rowsCount;
    worldState.columnsCount = worldOptions.columnsCount;

    worldState.tileCounts = initializeTilesCounts(worldOptions.rowsCount, worldOptions.columnsCount);
    worldState.tileColor = initializeTilesColor();

    appState.world.cellSize = worldView.renderGrid(appState.world);
};

function initializeTilesCounts(rowsCount, columnsCount) {

    var tileCounts = [];
    var currentRow;

    for (var rowIndex = 0; rowIndex < rowsCount; rowIndex++) {

        currentRow = [];
        tileCounts.push(currentRow);

        for (var columnIndex = 0; columnIndex < columnsCount; columnIndex++) {

            currentRow.push(0);
        }
    }

    return tileCounts;
}

function initializeTilesColor() {

    var randomHue = Math.round(Math.random() * 255);

    return "hsl(" + randomHue + ", 46%, 42%)";
}

export { worldController }