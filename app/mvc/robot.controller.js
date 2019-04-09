
import { appController } from "../app.controller.js";
import { appState } from "../appState.js";
import { viewFactory } from "../viewFactory.js";
import { AppError } from "../appError.js"

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

    robotView.renderRobot(robotState);
};

robotController.setRobotBackgroundColor = function(backgroundColor, isError) {

    robotView.setRobotBackgroundColor(backgroundColor, isError)
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

    appController.assertMaxCommands();
    assertCanMove();

    robotState.rowIndex = robotState.rowIndex + robotMoveDirectionOffsets[robotState.direction].rowOffset;
    robotState.columnIndex = robotState.columnIndex + robotMoveDirectionOffsets[robotState.direction].columnOffset;

    var robotViewMove = robotViewMoveHandlers[robotState.direction].bind(robotView);
    robotViewMove();
};

function assertCanMove() {

    if (robotController.isFrontBlocked()) {

        throw new AppError("The front is blocked.");
    }
}

robotController.isFrontClear = function() {

    return !this.isFrontBlocked();
}

robotController.isFrontBlocked = function() {

    appController.assertMaxCommands();

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

var turnRightDirections = {
    north: "east",
    east: "south",
    south: "west",
    west: "north"
};

robotController.turnRight = function() {

    appController.assertMaxCommands();

    robotState.direction = turnRightDirections[robotState.direction];
    robotView.turnRight(robotState.direction);
};

robotController.isFacingNorth = function() {
    
    appController.assertMaxCommands();

    return robotState.direction === "north";
}

robotController.isNotFacingNorth = function() {

    return !this.isFacingNorth();
}

robotController.isFacingEast = function() {
    
    appController.assertMaxCommands();

    return robotState.direction === "east";
}

robotController.isNotFacingEast = function() {

    return !this.isFacingEast();
}

robotController.isFacingSouth = function() {
    
    appController.assertMaxCommands();

    return robotState.direction === "south";
}

robotController.isNotFacingSouth = function() {

    return !this.isFacingSouth();
}

robotController.isFacingWest = function() {
    
    appController.assertMaxCommands();

    return robotState.direction === "west";
}

robotController.isNotFacingWest = function() {

    return !this.isFacingWest();
}

robotController.putDownTile = function(tileBackgroundColor) {

    appController.assertMaxCommands();

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    tileCount++;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.putDownTile(tileCount, robotState.rowIndex, robotState.columnIndex, tileBackgroundColor);
}

robotController.pickUpTile = function() {
    
    appController.assertMaxCommands();

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];
    var previousTileCount = tileCount;

    assertCanPickUpTile(tileCount);

    tileCount--;
    worldState.tileCounts[robotState.rowIndex][robotState.columnIndex] = tileCount;

    worldView.pickUpTile(previousTileCount, robotState.rowIndex, robotState.columnIndex);
}

function assertCanPickUpTile(tileCount) {

    if (tileCount <= 0) {
        
        throw new AppError("There is no tile to pick up.");
    }
}

robotController.isOnTile = function() {
    
    appController.assertMaxCommands();

    var tileCount = worldState.tileCounts[robotState.rowIndex][robotState.columnIndex];

    return (tileCount > 0);
}

robotController.isNotOnTile = function() {
    
    appController.assertMaxCommands();

    return !this.isOnTile();
}


export { robotController }