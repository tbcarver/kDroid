
import { appState } from "./appState.js";
import { robotView } from "./robot.view.js";

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
        rowOffset: 0,
        columnOffset: -1
    },
    east: {
        rowOffset: 1,
        columnOffset: 0
    },
    south: {
        rowOffset: 0,
        columnOffset: 1
    },
    west: {
        rowOffset: -1,
        columnOffset: 0
    }
};

robotController.move = function() {

    assertCanMove();

    var robotViewMove = robotViewMoveHandlers[robotState.direction].bind(robotView);

    robotState.rowIndex = robotState.rowIndex + robotMoveDirectionOffsets[robotState.direction].rowOffset;
    robotState.columnIndex = robotState.columnIndex + robotMoveDirectionOffsets[robotState.direction].columnOffset;

    robotViewMove(worldState.cellSize, robotState.moveDuration);
    console.log("robot moved " + robotState.direction);
};

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

function assertCanMove() {



}


export { robotController }