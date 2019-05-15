
import { appController } from "../app.controller.js";
import { viewFactory } from "../viewFactory.js";
import { appState } from "../appState.js";
import { coreArray } from "../../lib/core/extensions/core-array.js";

var worldView;

var worldState = appState.world;

var worldController = {};

worldController.load = function() {

    worldView = viewFactory.getView("worldView");

    worldView.renderGrid(worldState.rowsCount, worldState.columnsCount);

    loadWalls();
    loadTiles();
};

worldController.putDownTile = function(rowNumber, columnNumber, tileBackgroundColor, suppressAnimation) {

    appController.assertMaxCommands();

    var rowIndex = rowNumber - 1;
    var columnIndex = columnNumber - 1;
    
    var tileCount = worldState.tileCounts[rowIndex][columnIndex];
    tileCount++;
    worldState.tileCounts[rowIndex][columnIndex] = tileCount;

    worldView.putDownTile(tileCount, rowIndex, columnIndex, tileBackgroundColor, suppressAnimation);
}

// Top and left walls use the same coordinate system as the robot. However, this does
//  not provide a coordinate for the far bottom or far right walls.  This wall would
//  have an index that is one greater than the robot's possible index.
//  i.e. on a 1x1 world there could only be a robot coordinate of 0,0
//  but there could be 4 walls, top: 0,0 and 1,0 left: 0,0 and 0,1
function loadWalls() {

    worldState.topWalls.forEach(function(rowIndex, columnIndex) {

        if (rowIndex < worldState.rowsCount) {

            worldView.putTopWall(rowIndex, columnIndex);

        } else {

            worldView.putBottomWall(rowIndex - 1, columnIndex);
        }
    });

    worldState.leftWalls.forEach(function(rowIndex, columnIndex) {

        if (columnIndex < worldState.columnsCount) {

            worldView.putLeftWall(rowIndex, columnIndex);

        } else {

            worldView.putRightWall(rowIndex, columnIndex - 1);
        }
    });
}

function loadTiles() {

    for (var rowIndex = 0; rowIndex < worldState.rowsCount; rowIndex++) {

        for (var columnIndex = 0; columnIndex < worldState.columnsCount; columnIndex++) {

            var tileCount = worldState.tileCounts[rowIndex][columnIndex];

            for (var currentTileCount = 1; currentTileCount <= tileCount; currentTileCount++) {

                worldView.putDownTile(currentTileCount, rowIndex, columnIndex, null, true);
            }
        }
    }

    worldState.loadedTileCounts = coreArray.deepCopy(worldState.tileCounts);
}


export { worldController }