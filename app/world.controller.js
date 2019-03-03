
import { worldView } from "./world.view.js";
import { robotView } from "./robot.view.js";
import { appState } from "./appState.js";

var worldController = {};

worldController.load = function(worldOptions) {

    appState.world.rowsCount = worldOptions.rowsCount;
    appState.world.columnsCount = worldOptions.columnsCount;

    worldView.renderGrid(appState.world);
    robotView.renderRobot(appState.robot, appState.world);
};


export { worldController }