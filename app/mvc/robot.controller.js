
import { appState } from "../appState.js";
import { viewFactory } from "../viewFactory.js";
import { messageBoxController } from "./messageBox.controller.js";
import { RobotError } from "../robotError.js"

var animationView;
var robotView;
var worldView;

var robotState = appState.robot;
var worldState = appState.world;

var robotViewMoveHandlers;

var robotController = {};

robotController.load = function() {

    animationView = viewFactory.getView("animationView");
    robotView = viewFactory.getView("robotView");
    worldView = viewFactory.getView("worldView");

    robotViewMoveHandlers = {
        north: robotView.moveNorth,
        east: robotView.moveEast,
        south: robotView.moveSouth,
        west: robotView.moveWest
    }

    robotView.renderRobot(robotState);
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

function assertMaxCommands() {

    worldState.currentCommandCount++;

    if (worldState.currentCommandCount > worldState.maxCommandCount) {

        animationView.cancelAnimating();
        messageBoxController.forceErrorMessage("The program is in an endless loop.");

        throw new RobotError("The program is in an endless loop.");
    }
}

robotController.move = function() {

    assertMaxCommands();
    assertCanMove();

    var robotViewMove = robotViewMoveHandlers[robotState.direction].bind(robotView);

    robotState.rowIndex = robotState.rowIndex + robotMoveDirectionOffsets[robotState.direction].rowOffset;
    robotState.columnIndex = robotState.columnIndex + robotMoveDirectionOffsets[robotState.direction].columnOffset;

    robotViewMove(worldState.duration);
};

function assertCanMove() {

    if (robotController.isFrontBlocked()) {

        throw new RobotError("The front is blocked.");
    }
}

robotController.isFrontClear = function() {

    return !this.isFrontBlocked();
}

robotController.isFrontBlocked = function() {

    assertMaxCommands();

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

    assertMaxCommands();

    robotState.direction = turnLeftDirections[robotState.direction];
    robotView.turnLeft(robotState.direction, worldState.duration);
};

robotController.putDownTile = function() {

    assertMaxCommands();

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    tileCount++;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.putDownTile(tileCount, robotState.rowIndex, robotState.columnIndex, worldState);
}

robotController.pickUpTile = function() {
    
    assertMaxCommands();

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    var previousTileCount = tileCount;

    assertCanPickUpTile(tileCount);

    tileCount--;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.pickUpTile(previousTileCount, robotState.rowIndex, robotState.columnIndex, worldState);
}

function assertCanPickUpTile(tileCount) {

    if (tileCount <= 0) {
        
        throw new RobotError("There is no tile to pick up.");
    }
}

robotController.isOnTile = function() {
    
    assertMaxCommands();

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];

    return (tileCount > 0);
}

robotController.isNotOnTile = function() {

    return !this.isOnTile();
}


export { robotController }