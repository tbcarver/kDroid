
import { appState } from "./appState.js";
import { robotView } from "./robot.view.js";
import { worldView } from "./world.view.js";

var robotState = appState.robot;
var worldState = appState.world;

var robotController = {};

robotController.load = function() {

    robotView.renderRobot(robotState, worldState);
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

    robotViewMove(robotState.moveDuration, worldState.cellSize);
    console.log("robot moved " + robotState.direction);
};

function assertCanMove() {



}

var turnLeftDirections = {
    north: "west",
    east: "north",
    south: "east",
    west: "south"
};

robotController.turnLeft = function() {

    robotState.direction = turnLeftDirections[robotState.direction];
    robotView.turnLeft(robotState.direction, robotState.moveDuration);
    console.log("robot turned " + robotState.direction);
};

robotController.putDownTile = function() {

    var tileCount = worldState.tileCounts[robotState.rowIndex, robotState.columnIndex];
    tileCount++;    
    worldState.tileCounts[robotState.rowIndex, robotState.columnIndex] = tileCount;

    worldView.putDownTile(robotState.rowIndex, robotState.columnIndex, tileCount, worldState.tileColor,
        robotState.moveDuration, worldState.cellSize);
}


export { robotController }