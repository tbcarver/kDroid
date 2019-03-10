
import { appState } from "./appState.js";
import { robotView } from "./robot.view.js";

var robotController = {};

robotController.load = function() {

    robotView.renderRobot(appState.robot, appState.world);
};


export { robotController }