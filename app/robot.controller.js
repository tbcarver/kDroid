
import { appState } from "./appState.js";
import { robotView } from "./robot.view.js";
import { worldView } from "./world.view.js";

var robotState = appState.robot;
var worldState = appState.world;

var robotController = {};

robotController.load = function() {

    robotView.renderRobot(robotState.rowIndex, robotState.columnIndex, robotState.direction,
        robotState.backgroundColor, worldState.cellSize);
};

var robotViewMoveHandlers = {
    north: robotView.moveNorth,
    east: robotView.moveEast,
    south: robotView.moveSouth,
    west: robotView.moveWest
}

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
    // console.log("robot moved " + robotState.direction);
};

function assertCanMove() {



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
    // console.log("robot turned " + robotState.direction);
};

robotController.putDownTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    tileCount++;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.putDownTile(robotState.rowIndex, robotState.columnIndex, tileCount, worldState.tileBackgroundColor,
        worldState.duration, worldState.cellSize);
}

robotController.isOnTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];

    return (tileCount > 0);
}

robotController.isNotOnTile = function() {

    return !isOnTile();
}


export { robotController }