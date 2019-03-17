
import { viewFactory } from "./viewFactory.js";
import { appState } from "./appState.js";

var worldState = appState.world;

var worldController = {};

worldController.load = function() {

    var worldView = viewFactory.getView("worldView");

    worldView.renderGrid(worldState);
};


export { worldController }