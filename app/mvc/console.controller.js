
import { viewFactory } from "../viewFactory.js";

var consoleView;

var consoleController = {};

consoleController.load = function() {

    consoleView = viewFactory.getView("consoleView");

    consoleView.render();
};

consoleController.log = function(message) {

    consoleView.log(message);
};

consoleController.logInternal = function(message, isError) {

    consoleView.logInternal(message, isError);
};


export { consoleController }