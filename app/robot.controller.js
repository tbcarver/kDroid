
import { appState } from "./appState.js";
import { robotView } from "./robot.view.js";

var robotState = appState.robot;
var worldState = appState.world;

var robotViewMoveHandlers = {
    east: robotView.moveEast
}

var robotController = {};

robotController.load = function() {

    robotView.renderRobot(robotState, worldState);
};

robotController.move = function() {

    assertCanMove();

    var robotViewMove = robotViewMoveHandlers[robotState.direction].bind(robotView);

    robotViewMove(robotState.rowIndex, worldState.cellSize, robotState.moveDuration);
    robotState.rowIndex++;
    console.log("robot moved")
};

function assertCanMove() {



}


export { robotController }