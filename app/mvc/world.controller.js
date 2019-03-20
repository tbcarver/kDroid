
import { viewFactory } from "../viewFactory.js";
import { appState } from "../appState.js";

var worldView;

var worldState = appState.world;

var worldController = {};

worldController.load = function() {

    worldView = viewFactory.getView("worldView");

    worldView.renderGrid(worldState);

    loadWalls();
    loadTiles();
};

// Top and left walls use the same coordinate system as the robot. However, this does
//  not provide a coordinate for the far bottom or far right walls.  This wall would
//  have an index that is one greater than the robot's possible index.
//  i.e. on a 1x1 world there could only be a robot coordinate of 0,0
//  but there could be 4 walls, top: 0,0 and 1,0 left: 0,0 and 0,1
function loadWalls() {

    worldState.topWalls.forEach(function(rowIndex, columnIndex) {

        if (rowIndex < worldState.rowsCount) {

            worldView.putTopWall(rowIndex, columnIndex, worldState);

        } else {

            worldView.putBottomWall(rowIndex - 1, columnIndex, worldState);
        }
    });

    worldState.leftWalls.forEach(function(rowIndex, columnIndex) {

        if (columnIndex < worldState.columnsCount) {

            worldView.putLeftWall(rowIndex, columnIndex, worldState);

        } else {

            worldView.putRightWall(rowIndex, columnIndex - 1, worldState);
        }
    });
}

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