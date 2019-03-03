
import { worldView } from "./world.view.js";
import { appState } from "./appState.js";

var worldController = {};

worldController.load = function(worldOptions) {

    appState.world.rowsCount = worldOptions.rowsCount;
    appState.world.columnsCount = worldOptions.columnsCount;

    worldView.renderGrid(appState.world);
    worldView.renderRobot(appState.robot, appState.world);
};


export { worldController }