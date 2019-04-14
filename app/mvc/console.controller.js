
import { appController } from "../app.controller.js";
import { appState } from "../appState.js";
import { viewFactory } from "../viewFactory.js";

var consoleView;

var consoleController = {};

consoleController.load = function() {

    consoleView = viewFactory.getView("consoleView");

    consoleView.render();
};

consoleController.log = function(message, color) {

    appController.assertMaxCommands();

    if (consoleView) {

        appState.console.logs.push(message);
        consoleView.log(message, color);
    }
};

consoleController.logInternal = function(message, color, isError) {

    if (consoleView) {

        consoleView.logInternal(message, color, isError);
    }
};

consoleController.logQuestion = function(message) {

    if (consoleView) {

        consoleView.logQuestion(message);
    }
};


export { consoleController }