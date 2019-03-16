
import { appState } from "./appState.js";
import { viewFactory } from "./viewFactory.js";

var robotView;
var worldView;

var robotState = appState.robot;
var worldState = appState.world;

var robotViewMoveHandlers;

var robotController = {};

robotController.load = function() {

    robotView = viewFactory.getView("robotView");
    worldView = viewFactory.getView("worldView");

    robotViewMoveHandlers = {
        north: robotView.moveNorth,
        east: robotView.moveEast,
        south: robotView.moveSouth,
        west: robotView.moveWest
    }

    robotView.renderRobot(robotState, worldState.cellSize);
};

var robotMoveDirectionOffsets = {
    north: {
        rowOffset: -1,
        columnOffset: 0
    },
    east: {
        rowOffset: 0,
        columnOffset: 1
    },
    south: {
        rowOffset: 1,
        columnOffset: 0
    },
    west: {
        rowOffset: 0,
        columnOffset: -1
    }
};

robotController.move = function() {

    assertCanMove();

    var robotViewMove = robotViewMoveHandlers[robotState.direction].bind(robotView);

    robotState.rowIndex = robotState.rowIndex + robotMoveDirectionOffsets[robotState.direction].rowOffset;
    robotState.columnIndex = robotState.columnIndex + robotMoveDirectionOffsets[robotState.direction].columnOffset;

    robotViewMove(worldState.duration, worldState.cellSize);
};

function assertCanMove() {

    if (isFrontBlocked()) {

        throw { message: "The front is blocked." };
    }
}

robotController.isFrontClear = function() {

    return !isFrontBlocked();
}

robotController.isFrontBlocked = function() {

    var walls = worldState.topWalls;

    if (robotState.direction === "east" || robotState.direction === "west") {

        walls = worldState.leftWalls;
    }

    var wallRowIndex = robotState.rowIndex;
    var wallColumnIndex = robotState.columnIndex;

    if (robotState.direction === "south") {

        wallRowIndex++;
    }

    if (robotState.direction === "east") {

        wallColumnIndex++;
    }

    return walls.includesKey(wallRowIndex, wallColumnIndex);
}

var turnLeftDirections = {
    north: "west",
    east: "north",
    south: "east",
    west: "south"
};

robotController.turnLeft = function() {

    robotState.direction = turnLeftDirections[robotState.direction];
    robotView.turnLeft(robotState.direction, worldState.duration);
};

robotController.putDownTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    tileCount++;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.putDownTile(tileCount, robotState, worldState);
}

robotController.pickUpTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    var previousTileCount = tileCount;

    assertCanPickUpTile(tileCount);

    tileCount--;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.pickUpTile(previousTileCount, robotState, worldState);
}

function assertCanPickUpTile(tileCount) {

    if (tileCount <= 0) {

        throw { message: "There is no tile to pick up." };
    }
}

robotController.isOnTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];

    return (tileCount > 0);
}

robotController.isNotOnTile = function() {

    return !isOnTile();
}


export { robotController }