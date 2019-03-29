
import { viewFactory } from "../viewFactory.js";

var consoleView;

var consoleController = {};

consoleController.load = function() {

    consoleView = viewFactory.getView("consoleView");

    consoleView.render();
};


export { consoleController }