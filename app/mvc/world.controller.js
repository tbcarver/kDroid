
import { viewFactory } from "../viewFactory.js";
import { appState } from "../appState.js";

var worldView;

var worldState = appState.world;

var worldController = {};

worldController.load = function() {

    worldView = viewFactory.getView("worldView");

    worldView.renderGrid(worldState);

    loadTiles();
};

function loadTiles() {

	for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

		for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

            var tileCount = worldState.tileCounts[rowIndex][columnIndex];

            for (var currentTileCount = 1; currentTileCount <= tileCount; currentTileCount++) {

                worldView.putDownTile(currentTileCount, rowIndex, columnIndex, worldState, true);
            }
		}
	}
}


export { worldController }