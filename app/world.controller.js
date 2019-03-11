
import { worldView } from "./world.view.js";
import { appState } from "./appState.js";

var worldState = appState.world;

var worldController = {};

worldController.load = function() {

    appState.world.cellSize = worldView.renderGrid(worldState.rowsCount, worldState.columnsCount);
};


export { worldController }